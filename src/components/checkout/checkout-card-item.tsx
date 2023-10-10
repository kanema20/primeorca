import { Item } from '@contexts/cart/cart.utils';
import Image from 'next/image';
import { generateCartItemName } from '@utils/generate-cart-item-name';
import usePrice from '@framework/product/use-price';
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';
import { useFetchItemImage } from '@framework/product/get-product-image';

const placeholderImage = `/assets/placeholder/order-product.svg`;

export const CheckoutItem: React.FC<{ item: Item }> = ({ item }) => {
  function getProductPrice(prod_price: any) {
    const { data } = useFetchItemPrice(prod_price)
    return data;
  }

  console.log("item: ", item);

  function getTotalPrice(cartItems: any): number {
    let totalCart: number = 0;
    cartItems?.map((cartItem: any) => (
      totalCart += getProductPrice(cartItem.default_price)?.unit_amount * cartItem.quantity
      //useFetchItemPrice(cartItem.prod_price) * item.quantity
    ))
    return totalCart;
  }

  function getProductImage(prod_id: any) {
    const { data } = useFetchItemImage(prod_id);
    return data;
  }

  const { price } = usePrice({
    // amount: item.itemTotal,
    amount: getProductPrice(item.default_price)?.unit_amount * item.quantity,
    currencyCode: 'USD',
  });
  return (
    <div className="flex py-4 items-center lg:px-3 border-b border-gray-300">
      <div className="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0">
        <Image
          // src={getProductImage((item.id).split(".")[0]) ?? placeholderImage}
          src={getProductImage(item.id) ?? placeholderImage}

          // src={item.images[0] ?? placeholderImage}
          width="64"
          height="64"
          className="object-cover"
        />
      </div>
      <h6 className="text-sm ltr:pl-3 rtl:pr-3 font-regular text-heading">
        {generateCartItemName(item.name, item.attributes)}
      </h6>
      <div className="flex ltr:ml-auto rtl:mr-auto text-heading text-sm ltr:pl-2 rtl:pr-2 flex-shrink-0">
        {price}
      </div>
    </div>
  );
};
