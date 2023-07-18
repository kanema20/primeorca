import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { stripe } from 'src/pages/api/stripe';
import { StripeProduct } from "@framework/types";

export const fetchItemSizes = async (productId: string) => {
    const product = await stripe.product.retrieve(productId);
    const metadata_ = product.metadata;
    return metadata_;
}

export const useFetchItemSizes = (productId: string) => {
    return useQuery<StripeProduct, Error>(['product_sizes', productId], () =>
        fetchItemSizes(productId)
    );
}

