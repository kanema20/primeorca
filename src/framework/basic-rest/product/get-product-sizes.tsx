import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { StripeProduct } from "@framework/types";
import { IProduct } from "@firebase/types/types";
import dotenv from 'dotenv';
dotenv.config();
// const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


export const fetchItemSizes = async (productId: string) => {
    const product = await stripe.products.retrieve(productId);
    const metadata_ = product.metadata;
    return metadata_;
}

export const useFetchItemSizes = (productId: string) => {
    return useQuery<StripeProduct, Error>(['product_sizes', productId], () =>
        fetchItemSizes(productId)
    );
}

export const fetchProductSizes = async (url: string) => {
    const products = await stripe.products.search({
        query: `active:\'true\' AND url:\'${url}\'`,
        // query: `metadata[\'collection\']:\'kobe5\'`,
        limit: 12,
    });
    return products.data;
}

export const useFetchProductSizes = (url: string) => {
    return useQuery<StripeProduct, Error>(['all_product_sizes', url], () =>
        fetchProductSizes(url)
    );
}

export const fetchProductSize = async (url: string, attr: string) => {
    const products = await stripe.products.search({
        query: `active:\'true\' AND url:\'${url}\' metadata[\'size\']:\'${attr}\'`,
        // query: `metadata[\'collection\']:\'kobe5\'`,
        limit: 12,
    });
    return products.data;
}


export const useFetchProductSize = (parentCollectionId_: string, attr: string) => {
    return useQuery<IProduct, Error>(['product_size', parentCollectionId_, attr], () =>
        fetchProductSize(parentCollectionId_, attr)
    );
}

