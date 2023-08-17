import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
import { StripeProduct } from "@framework/types";

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_TEST);

const fetchIndividualProduct = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const product = await stripe.products.search({
        query: `metadata[\'slug\']:\'${queryKey}\'`,
        // limit: 1,
    });

    // console.log(`queryKey ${queryKey}`);

    return product.data;
};

const fetchFeatureProduct = async (url: string) => {
    const product = await stripe.products.search({
        query: `active:\'true\' AND url:\'${url}\' AND metadata[\'type\']:\'Replica\'`,
        limit: 1,
    });
    return product.data[0];
}

export const useFetchFeatureProduct = (url: string) => {
    return useQuery<StripeProduct, Error>(['feature_prod', url], () =>
        fetchFeatureProduct(url)
    );
}
// export const useSingleProdQuery = (options: QueryOptionsType) => {
//     return useQuery<any, Error>(['single-product', options], fetchIndividualProduct);

// };
export const useSingleProdQuery = (slug: string) => {
    // return useQuery<any, Error>([slug], fetchIndividualProduct);
    return useQuery<any, Error>(slug, fetchIndividualProduct);
}


// url:\'${_params}\' AND  
const fetchIndividualProductSize = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const product = await stripe.products.search({
        query: `active:\'true\' AND metadata[\'size\']:\'${queryKey}\'`,
        // limit: 1,
    });
    // console.log(`queryKey ${queryKey}`);
    return product.data;
};

export const useSingleProdSizeQuery = (size: string) => {
    // return useQuery<any, Error>([slug], fetchIndividualProduct);
    return useQuery<any, Error>(size, fetchIndividualProductSize);
}