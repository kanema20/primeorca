import Input from '@components/ui/input';
import { useForm } from 'react-hook-form';
import TextArea from '@components/ui/text-area';
import { useCheckoutMutation } from '@framework/checkout/use-checkout';
import { CheckBox } from '@components/ui/checkbox';
import Button from '@components/ui/button';
import Router from 'next/router';
import { ROUTES } from '@utils/routes';
import { useTranslation } from 'next-i18next';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

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

const CheckoutForm: React.FC = () => {

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

  function createOrder() {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        cart: [
          {
            sku: "1blwyeo8",
            quantity: 2,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => {
        // Your code here after create the order
        return order.id;
      });
  }
  function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        // Your code here after capture the order
      });
  }
  // Custom component to wrap the PayPalButtons and show loading spinner
  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
      <>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[style]}
          fundingSource={undefined}
          createOrder={createOrder}
          onApprove={onApprove}
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
          <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
            <ButtonWrapper showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
