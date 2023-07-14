import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
import { stripe } from 'src/utils/stripe';
import { StripeProduct } from "@framework/types";


export const fetchItemPrice = async (productId: string) => {
    const price = await stripe.prices.retrieve(productId);
    return price;
}

export const useFetchItemPrice = (productId: string) => {
    return useQuery<StripeProduct, Error>(['product_price', productId], () =>
        fetchItemPrice(productId)
    );
}
