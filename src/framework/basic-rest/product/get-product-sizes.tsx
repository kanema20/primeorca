import http from '@framework/utils/http';
import { useQuery } from 'react-query';
import { StripeProduct } from "@framework/types";
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);


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

export const useFetchProductSize = (url: string, attr: string) => {
    return useQuery<StripeProduct, Error>(['product_size', url, attr], () =>
        fetchProductSize(url, attr)
    );
}

