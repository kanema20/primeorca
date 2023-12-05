import Input from '@components/ui/input';
import { useForm } from 'react-hook-form';
import TextArea from '@components/ui/text-area';
import { useCheckoutMutation } from '@framework/checkout/use-checkout';
import { CheckBox } from '@components/ui/checkbox';
import Button from '@components/ui/button';
import Router from 'next/router';
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';
import usePrice from '@framework/product/use-price';
import { Item } from '@contexts/cart/cart.utils';
import { useRouter } from 'next/router'
import { useAddNewPaymentRecord } from "@framework/product/_firebase/post-payment-capture";
import { ROUTES } from '@utils/routes';
import { useTranslation } from 'next-i18next';
import usePoofScript from '@utils/use-poof-script';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useCart } from '@contexts/cart/cart.context';
import { createOrder, onApprove, onCancel } from 'src/pages/api/paypal';
import { IPayments } from '@firebaseQueries/types/types';
import { AmountWithCurrencyCodeOptional, PurchaseItem } from '@paypal/paypal-js';
import { forEach } from 'lodash';
import * as dotenv from 'dotenv';
dotenv.config();

interface CheckoutInputType {
  name: string;
  // lastName: string;
  // phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  save: boolean;
  note: string;
}

interface CheckoutItem {
  name: string;
  quantity: string;
  description: string;
  sku: string;
  category: string;
  unit_amount: AmountWithCurrencyCodeOptional;
  // [key: string]: unknown;
}

const CheckoutForm: React.FC = () => {
  usePoofScript('https://www.poof.io/static/api/checkout_v2.js');
  usePoofScript('https://www.poof.io/static/api/sdk.js');
  const PAYPAL_CLIENT: string = process.env.PAYPAL_CLIENT_ID_LIVE;

  const { items, total, isEmpty } = useCart();
  const router = useRouter()
  const { t } = useTranslation();
  const { mutate: updateUser, isLoading } = useCheckoutMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputType>();
  function onSubmit(input: CheckoutInputType) {
    updateUser(input);
    Router.push(ROUTES.ORDER);
  }

  // This value is from the props in the UI
  const style = { "layout": "vertical" };

  console.log("items: ", items)
  console.log(`total price: $${(getTotalPrice(items) / 100) + (totalShipping(items))}.00`)

  function getTotalPrice(cartItems: any): number {
    let totalCart: number = 0;
    cartItems?.map((cartItem: any) => (
      // totalCart += getProductPrice(cartItem.default_price)?.unit_amount * cartItem.quantity
      totalCart += (cartItem.price * 100) * cartItem.quantity
      //useFetchItemPrice(cartItem.prod_price) * item.quantity
    ))
    return totalCart;
  }
  const { price: subtotal } = usePrice({
    amount: getTotalPrice(items), currencyCode: 'USD',
  });

  function getProductPrice(prod_price: any) {
    const { data } = useFetchItemPrice(prod_price)
    return data;
  }

  function getItemsFromCart(cartItems: any): Item[] {
    let cart_: Item[] = [];
    cartItems?.map((cartItem: any) => (
      cart_.push(cartItem)
    ))
    return cart_;
  }

  function structureItemsForPaypal(cartItems: any): PurchaseItem[] {
    let cart_: PurchaseItem[] = [];
    cartItems?.map((cartItem: any) => (
      cart_.push({
        name: cartItem.name,
        quantity: cartItem.quantity,
        description: cartItem.description,
        sku: cartItem.id,
        category: "PHYSICAL_GOODS",
        unit_amount: {
          currency_code: "USD",
          // value: (cartItem.price * 100).toString(),
          value: (cartItem.price).toString(),
        }
      })
    ))
    return cart_;
  }

  function sendToAirtable(paypalResponse: any): void {
    
  }

  function totalShipping(cartItems: any): number {
    let qty: number = 0;
    cartItems?.map((cartItem: any) => (
      qty += cartItem.quantity
    ))
    if (qty <= 3) {
      return qty * 30;
    } else if (qty > 3 && qty <= 6) {
      return qty * 25;
    } else if (qty > 6 && qty <= 9) {
      return qty * 20;
    } else {
      return qty * 2;
    }
  }

  getItemsFromCart(items);



  function createPaypalOrderAmount(): number {
    return (getTotalPrice(items) / 100) + (totalShipping(items))
  }

  function createOrder() {
    // replace this url with your server
    return fetch('/api/checkout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        // cart: getItemsFromCart(items),
        items: [],
        amount: createPaypalOrderAmount()
      })
      // body: JSON.stringify({ "intent": "CAPTURE", "purchase_units": [{ "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b", "amount": { "currency_code": "USD", "value": "100.00" } }], "payment_source": { "paypal": { "experience_context": { "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED", "brand_name": "EXAMPLE INC", "locale": "en-US", "landing_page": "LOGIN", "shipping_preference": "SET_PROVIDED_ADDRESS", "user_action": "PAY_NOW", "return_url": "https://example.com/returnUrl", "cancel_url": "https://example.com/cancelUrl" } } } })
    })
      .then((response) => response.json())
      .then((order) => {
        // Your code here after create the order
        return order.id;
      });
  }

  const { mutate } = useAddNewPaymentRecord();

  const handleApprove = (orderData: IPayments) => {
    // use query hook
    // return data (show on success page?)
    mutate(orderData);

    // TODO: send 

    const href_ = "/success";
    router.push(href_)

    console.log("orderId: ", orderId)
  }


  // Custom component to wrap the PayPalButtons and show loading spinner
  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
      <>
        {(showSpinner && isPending) && <div className="spinner" />}
        {/* <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[style]}
          fundingSource={undefined}
          createOrder={createOrder}
          onApprove={onApprove}
          // onClick={addRecordToFirebase}
          onCancel={onCancel}
        /> */}
        <PayPalButtons
          style={style}
          disabled={false}

          forceReRender={[style]}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "PRIME ORCA",
                  items: structureItemsForPaypal(items),
                  amount: {
                    currency_code: "USD",
                    value: createPaypalOrderAmount().toString(),
                    // value: (getTotalPrice(items) / 100 + totalShipping(items)).toString(),
                    breakdown: {
                      item_total: {
                        currency_code: "USD",
                        value: (getTotalPrice(items) / 100).toString(),
                      },
                      shipping: {
                        currency_code: "USD",
                        value: (totalShipping(items)).toString(),
                      }
                    }
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order_ = await actions.order.capture();
            console.log("order", order_);

            const lineItemArray: string[] = [];
            const linePriceArray: number[] = [];
            const lineQtyArray: number[] = [];

            forEach(items, (item: any) => {
              lineItemArray.push(item.name);
              linePriceArray.push(item.price);
              lineQtyArray.push(item.quantity);
            })

            const orderData: IPayments = {
              id: order_.id,
              addedToAirtable: true,
              amount: parseInt(order_.purchase_units[0].amount.value),
              // fee: order_.purchase_units[0].payments.captures[0].seller_receivable_breakdown.paypal_fee.value,
              // net_amount: order_.purchase_units[0].payments.captures[0].seller_receivable_breakdown.net_amount.value,
              lineItem: lineItemArray,
              lineItemPrice: linePriceArray,
              quantity: lineQtyArray,
              // quantity: [items[0].quantity],
              shipping_address: order_.purchase_units[0].shipping.address.address_line_1,
              shipping_address_city: order_.purchase_units[0].shipping.address.admin_area_2,
              shipping_address_state: order_.purchase_units[0].shipping.address.admin_area_1,
              shipping_address_zip: order_.purchase_units[0].shipping.address.postal_code,
              shipping_address_country: order_.purchase_units[0].shipping.address.country_code,
              status: order_.status,
              statement_descriptor: "PRIME ORCA",
              customer_name: order_.payer.name.given_name + " " + order_.payer.name.surname,
              customer_email: order_.payer.email_address,
              created_date: order_.create_time,
            }
            handleApprove(orderData);
          }}
          onCancel={() => {
            alert("Checkout not complete")
          }}
          onError={(err) => {
            alert(err);
            console.log("PayPal Checkout onError", err);
          }}
        />
      </>
    );
  }
  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {/* {t('text-shipping-address')} */}
        {'Shipping and Billing Information'}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center "
        noValidate
      >
        <div className="flex flex-col space-y-3 lg:space-y-3">
          {/* <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0"> */}
          {/* <Input
              type="email"
              labelKey="forms:label-email-star"
              {...register('email', {
                required: 'forms:email-required',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'forms:email-error',
                },
              })}
              errorKey={errors.email?.message}
              variant="solid"
              className="w-full lg:w-1/2"
            /> */}
          {/* </div> */}
          {/* <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0"> */}
          {/* <Input
              labelKey="forms:label-name-star"
              {...register('name', {
                required: 'forms:name-required',
              })}
              errorKey={errors.name?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            /> */}
          {/* <Input
              labelKey="forms:label-last-name"
              {...register('lastName', {
                required: 'forms:last-name-required',
              })}
              errorKey={errors.lastName?.message}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            /> */}
          {/* </div> */}
          {/* <Input
            labelKey="forms:label-address"
            {...register('address', {
              required: 'forms:address-required',
            })}
            errorKey={errors.address?.message}
            variant="solid"
          /> */}
          {/* <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0"> */}
          {/* <Input
              labelKey="forms:label-city"
              {...register('city')}
              variant="solid"
              className="w-full lg:w-1/2 "
            />

            <Input
              labelKey="forms:label-zip"
              {...register('zipCode')}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            />
            <Input
              labelKey="forms:label-country"
              {...register('country')}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            /> */}
          {/* </div> */}
          {/* <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
            {'Payment'}
          </h2> */}
          {/* <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-name-on-card"
              {...register('name', {
                required: 'forms:name-required',
              })}
              errorKey={errors.name?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            /> */}
          {/* <Input
              labelKey="forms:label-last-name"
              {...register('lastName', {
                required: 'forms:last-name-required',
              })}
              errorKey={errors.lastName?.message}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            /> */}
          {/* </div> */}
          {/* <Input
            labelKey="forms:label-address"
            {...register('address', {
              required: 'forms:address-required',
            })}
            errorKey={errors.address?.message}
            variant="solid"
          /> */}

          {/* <div className="relative flex items-center ">
            <CheckBox labelKey="forms:label-save-information" />
          </div>
          <TextArea
            labelKey="forms:label-order-notes"
            {...register('note')}
            placeholderKey="forms:placeholder-order-notes"
            className="relative pt-3 xl:pt-6"
          /> */}
          <div className="flex w-full">
            {/* <Button
              clzzassName="w-full sm:w-auto"
              loading={isLoading}
              disabled={isLoading}
            >
              {t('common:button-place-order')}
            </Button> */}
            { /* TODO: Add Paypal Checkout button*/}
          </div>
          <PayPalScriptProvider options={{ clientId: "AdDDjpd7Ad1UNu1ZwAzTRRqhlau4Kmg8zYG7GDa0rPLV4FZuGwO5I5oGdN1cQ-qmoQGRPPPlqCgsG5sX", components: "buttons", "enable-funding": "venmo", currency: "USD" }}>
            <ButtonWrapper showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
