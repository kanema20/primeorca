import usePrice from '@framework/product/use-price';
import { useCart } from '@contexts/cart/cart.context';
import { CheckoutItem } from '@components/checkout/checkout-card-item';
import { CheckoutCardFooterItem } from './checkout-card-footer-item';
import { useTranslation } from 'next-i18next';
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';
import { Item } from '@contexts/cart/cart.utils';

const CheckoutCard: React.FC = () => {
  const { items, total, isEmpty } = useCart();

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
    amount: getTotalPrice(items),
    currencyCode: 'USD',
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

  const { t } = useTranslation('common');
  const checkoutFooter = [
    {
      id: 1,
      name: t('text-sub-total'),
      price: subtotal,
    },
    {
      id: 2,
      name: t('text-shipping'),
      price: `$${totalShipping(items)}.00`,
    },
    {
      id: 3,
      name: t('text-total'),
      price: `$${(getTotalPrice(items) / 100) + (totalShipping(items))}.00`,
    },
  ];
  return (
    <div className="pt-12 md:pt-0 ltr:2xl:pl-4 rtl:2xl:pr-4 mb-10">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t('text-your-order')}
      </h2>
      <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
        <span>{t('text-product')}</span>
        <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">
          {/* {t('text-sub-total')} */}
        </span>
      </div>
      {!isEmpty ? (
        items.map((item) => <CheckoutItem item={item} key={item.id} />)
      ) : (
        <p className="text-red-500 lg:px-3 py-4">{t('text-empty-cart')}</p>
      )}
      {checkoutFooter.map((item: any) => (
        <CheckoutCardFooterItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CheckoutCard;
