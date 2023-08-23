import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
import { StripeProduct } from "@framework/types";

// import { stripe } from 'src/pages/api/stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const fetchCollection = async ({ queryKey }: any, slug: string) => {
    // const fetchCollection = async (slug: string) => {
    const [_key, _params] = queryKey;
    let slug_ = slug;
    if (slug.includes("-")) {
        console.log(slug_);
    } else {
        slug_ = slug.replace(/-/g, "");
        console.log(slug_);
    }

    const products = await stripe.products.search({
        query: `metadata[\'collection\']:\'${slug_}\' AND active:\'true\' AND metadata[\'type\']:\'Replica\'`,
        limit: 100,
    });

    const clothingProducts = await stripe.products.search({
        query: `active:\'true\' AND metadata[\'collection\']:\'${slug_}\' AND metadata[\'type\']:\'Replica Clothing\'`,
        limit: 100,
    });

    const combinedProducts = [...clothingProducts.data, ...products.data];

    console.log(`combinedProducts: ${combinedProducts}`)
    return products.data;
};

export const useCollectionQuery = (options: QueryOptionsType, slug: string) => {
    return useQuery<any, Error>(['collection', options, slug], fetchCollection);

};

// export const useCollectionQuery = (slug: string) => {
//     return useQuery<StripeProduct, Error>(['collection', slug], () => fetchCollection(slug));

// };