import http from '@framework/utils/http';
import { useQuery } from 'react-query';
// import { stripe } from 'src/pages/api/stripe';
import { StripePrice } from "@framework/types";
import { useSingleProdQuery } from '@framework/product/get-single-product';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_TEST);


export const fetchItemPrice = async (priceId: string) => {
    const price = await stripe.prices.retrieve(priceId);
    return price;
}

export const useFetchItemPrice = (priceId: string) => {
    return useQuery<StripePrice, Error>(['product_price', priceId], () =>
        fetchItemPrice(priceId),

    );
}

