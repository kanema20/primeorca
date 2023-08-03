import Scrollbar from '@components/common/scrollbar';
import { useCart } from '@contexts/cart/cart.context';
import { motion } from 'framer-motion';
import { fadeInOut } from '@utils/motion/fade-in-out';
import { useUI } from '@contexts/ui.context';
import usePrice from '@framework/product/use-price';
import { IoClose } from 'react-icons/io5';
import CartItem from './cart-item';
import CheckoutForm from './checkout-form';
import EmptyCart from './empty-cart';
import Link from '@components/ui/link';
import { ROUTES } from '@utils/routes';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';
import { Item } from '@contexts/cart/cart.utils';
import { CartItemDetails } from '@stripe/stripe-js';
import Button from '@components/ui/button';
import Router from 'next/router';
import { forEach } from 'lodash';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useShoppingCart } from 'use-shopping-cart';

export interface CheckoutItems {
  id?: string | number;
  default_price?: string;
  // images?: string[];
  quantity?: number;
  [key: string]: any;
}

export default function Cart() {
  const { cartCount, cartDetails, formattedTotalPrice, clearCart, redirectToCheckout } = useShoppingCart();
  const { t } = useTranslation('common');
  const { closeCart } = useUI();
  const { items, total, isEmpty } = useCart();
  const [loading, setLoading] = useState(false);
  const { price: cartTotal } = usePrice({
    amount: total,
    // amount: getTotalPrice(items),
    currencyCode: 'USD',
  });

  function getProductPrice(prod_price: any) {
    const { data } = useFetchItemPrice(prod_price)
    return data;
  }

  console.log("cartDetails: ", cartDetails)

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const session_ = await axios
        .post("/api/checkout", getItemsFromCart(items))
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
      // const result = await redirectToCheckout();   
      // if (result?.error) {
      //   console.log("error in result: ", error);
      // }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // function createCheckout(cartItems: any) {
  const createCheckout = async () => {
    setLoading(true);
    // TODO: next.js api routing - checkout
    // await fetch(ROUTES.CHECKOUT_SESSION, {
    await fetch('http://localhost:8080/create-checkout-session', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-  cors, *cors, same-origin
      // credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({
        items: getItemsFromCart(items),
      }),
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getTotalPrice(cartItems: any): number {
    let totalCart: number = 0;
    cartItems?.map((cartItem: any) => (
      totalCart += getProductPrice(cartItem.default_price)?.unit_amount * cartItem?.quantity
      //useFetchItemPrice(cartItem.prod_price) * item.quantity
    ))
    return totalCart;
  }

  function getItemsFromCart(cartItems: any): CheckoutItems[] {
    let cart_: CheckoutItems[] = [];
    forEach(cartItems, (item) => {
      cart_.push({
        price: item.default_price,
        quantity: item.quantity,
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 100,
        },
      })
    })
    console.log("cart_: ", cart_);
    return cart_;
  }

  getItemsFromCart(items);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full flex justify-between items-center relative ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 py-0.5 border-b border-gray-100">
        <h2 className="m-0 text-xl font-bold md:text-2xl text-heading">
          {/* @ts-ignore */}
          {t('text-shopping-cart')}
        </h2>
        <button
          className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity md:px-6 lg:py-8 focus:outline-none hover:opacity-60"
          onClick={closeCart}
          aria-label="close"
        >
          <IoClose className="text-black mt-1 md:mt-0.5" />
        </button>
      </div>
      {!isEmpty ? (
        <Scrollbar className="flex-grow w-full cart-scrollbar">
          <div className="w-full px-5 md:px-7">
            {items?.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </Scrollbar>
      ) : (
        <motion.div
          layout
          initial="from"
          animate="to"
          exit="from"
          variants={fadeInOut(0.25)}
          className="flex flex-col items-center justify-center px-5 pt-8 pb-5 md:px-7"
        >
          <EmptyCart />
          <h3 className="pt-8 text-lg font-bold text-heading">
            {/* @ts-ignore */}
            {t('text-empty-cart')}
          </h3>
        </motion.div>
      )}

      <div
        className="flex flex-col px-5 pt-2 pb-5 md:px-7 md:pb-7"
        onClick={closeCart}
      >
        {/* <Link
          href={isEmpty === false ? '/create-checkout' : '/'}
          className={cn(
            'w-full px-5 py-3 md:py-4 flex items-center justify-center rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 ',
            isEmpty
              ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400'
              : 'bg-heading hover:bg-gray-600'
          )}
        >
          <span className="w-full ltr:pr-5 rtl:pl-5 -mt-0.5 py-0.5">
            {/* @ts-ignore */}
        {/* {t('text-proceed-to-checkout')} */}
        {/* </span> */}
        {/* <span className="rtl:mr-auto ltr:ml-auto flex-shrink-0 -mt-0.5 py-0.5 flex"> */}
        {/* <span className="ltr:border-l rtl:border-r border-white ltr:pr-5 rtl:pl-5 py-0.5" /> */}
        {/* {cartTotal} */}
        {/* </span> */}
        {/* </Link> } */}
        <Button
          onClick={handleCheckout}
          className={cn(
            'w-full px-5 py-3 md:py-4 flex items-center justify-center rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 ',
            isEmpty
              ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400'
              : 'bg-heading hover:bg-gray-600'
          )}
        >
          <span className="w-full ltr:pr-5 rtl:pl-5 -mt-0.5 py-0.5">
            {/* @ts-ignore */}
            {loading ? "Loading Checkout... " : t('text-proceed-to-checkout')}
          </span>
          {/* <span className="rtl:mr-auto ltr:ml-auto flex-shrink-0 -mt-0.5 py-0.5 flex">
            <span className="ltr:border-l rtl:border-r border-white ltr:pr-5 rtl:pl-5 py-0.5" />
            {cartTotal}
          </span> */}
        </Button>
        {/* <CheckoutForm /> */}
      </div>
    </div>
  );
}
