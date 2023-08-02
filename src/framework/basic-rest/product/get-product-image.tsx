import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { stripe } from 'src/pages/api/stripe';
import { StripeProduct } from "@framework/types";
import { useSingleProdQuery } from '@framework/product/get-single-product';

export const fetchItemImage = async (prodId: string) => {
    const prod = await stripe.products.retrieve(prodId);
    return prod.images[0];
}

export const useFetchItemImage = (prodId: string) => {
    return useQuery<StripeProduct, Error>(['product_image', prodId], () =>
        fetchItemImage(prodId),

    );
}