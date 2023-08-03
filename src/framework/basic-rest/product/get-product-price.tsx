import http from '@framework/utils/http';
import { useQuery } from 'react-query';
// import { stripe } from 'src/pages/api/stripe';
import { StripePrice } from "@framework/types";
import { useSingleProdQuery } from '@framework/product/get-single-product';
const stripe = require('stripe')('sk_test_51Na8pPCrveYCAKISo4oqLMDaS6go9XHno4IYnj8y0q9qThK4tLb6G4j4dqq8d6cDXmM1ZGVj2CJCIfX8aQkAytLK00biWg9kfP');

export const fetchItemPrice = async (priceId: string) => {
    const price = await stripe.prices.retrieve(priceId);
    return price;
}

export const useFetchItemPrice = (priceId: string) => {
    return useQuery<StripePrice, Error>(['product_price', priceId], () =>
        fetchItemPrice(priceId),

    );
}

