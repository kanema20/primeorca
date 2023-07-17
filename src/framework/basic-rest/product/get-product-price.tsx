import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { stripe } from 'src/utils/stripe';
import { StripePrice } from "@framework/types";

export const fetchItemPrice = async (priceId: string) => {
    const price = await stripe.prices.retrieve(priceId);
    return price;
}

export const useFetchItemPrice = (priceId: string) => {
    return useQuery<StripePrice, Error>(['product_price', priceId], () =>
        fetchItemPrice(priceId)
    );
}

