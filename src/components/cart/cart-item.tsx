import Link from '@components/ui/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInOut } from '@utils/motion/fade-in-out';
import { IoIosCloseCircle } from 'react-icons/io';
import Counter from '@components/common/counter';
import { useCart } from '@contexts/cart/cart.context';
import usePrice from '@framework/product/use-price';
import { ROUTES } from '@utils/routes';
import { generateCartItemName } from '@utils/generate-cart-item-name';
import { useTranslation } from 'next-i18next';
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';
import { Item } from '@contexts/cart/cart.utils';
import { useFetchItemImage } from '@framework/product/get-product-image';

const CartItem: React.FC<Item> = ({ item }) => {
  function getProductPrice(prod_price: any) {
    const { data } = useFetchItemPrice(prod_price)
    return data;
  }

  function parseString(str: string) {
    const parsedString = str.split(".")[0];
    return parsedString;
  }

  function getProductImage(prod_id: any) {
    const { data } = useFetchItemImage(prod_id);
    return data;
  }

  const { t } = useTranslation('common');
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useCart();
  const { price } = usePrice({
    amount: getProductPrice(item.default_price)?.unit_amount,
    // amount: item.price,
    currencyCode: 'USD',
  });
  const { price: totalPrice } = usePrice({
    // amount: item.itemTotal,
    // amount: getProductPrice(item.default_price)?.unit_amount * item.quantity,
    amount: item.price * 100 * item.quantity,
    currencyCode: 'USD',
  });

  console.log("item: ", item);
  return (
    <motion.div
      layout
      initial="from"
      animate="to"
      exit="from"
      variants={fadeInOut(0.25)}
      className={`group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0`}
      title={item?.name}
    >
      <div className="relative flex flex-shrink-0 w-28 h-20 overflow-hidden bg-gray-200 rounded-md cursor-pointer md:w-30 md:h-20 ltr:mr-4 rtl:ml-4">
        <Image
          // src={getProductImage((item.id).split(".")[0]) ?? '/assets/placeholder/cart-item.svg'}
          src={item?.images ?? '/assets/placeholder/cart-item.svg'}
          // src={'/assets/placeholder/cart-item.svg'}
          // src={'https://po-prod.s3.us-west-1.amazonaws.com/kobe5/Nike-Kobe-5-Protro-Undefeated-Hall-of-Fame-Product.png'}
          width={112}
          height={112}
          loading="eager"
          alt={item?.name || 'Product Image'}
          className="object-cover bg-gray-300"
        />
        <div
          className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black ltr:left-0 rtl:right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30"
          onClick={() => clearItemFromCart(item.id)}
          role="button"
        >
          <IoIosCloseCircle className="relative text-2xl text-white transition duration-300 ease-in-out transform md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex flex-col w-full overflow-hidden">
        <Link
          // href={`${ROUTES.PRODUCT}/${item.slug}`}
          href={`/`}
          className="truncate text-sm text-heading mb-1.5 -mt-1"
        >
          {generateCartItemName(item.name, item.attributes)}
        </Link>
        {/* @ts-ignore */}
        <span className="text-sm text-gray-400 mb-2.5">
          {t('text-unit-price')}: ${item.price}.00
        </span>

        <div className="flex items-end justify-between">
          <Counter
            quantity={item.quantity}
            onIncrement={() => addItemToCart(item, 1)}
            onDecrement={() => removeItemFromCart(item.id)}
            variant="dark"
          />
          <span className="text-sm font-semibold leading-5 md:text-base text-heading">
            {totalPrice}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
