import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

import { useInfiniteQuery } from "react-query";
type PaginatedProduct = {
    data: Product[];
    paginatorInfo: any;
};

type Product = Stripe.Product;

const fetchKobeCollection = async ({ queryKey }: any) => {
    const [_key, _params, slug] = queryKey;

    // const slug_ = slug.replace(/- vc/g, "");
    console.log(slug);

    const products = await stripe.products.search({
        query: `active:\'true\' AND metadata[\'collection\']:\'${slug}\' AND metadata[\'type\']:\'Replica\'`,
        // query: `metadata[\'collection\']:\'kobe5\'`,
        limit: 100,
    });

    const clothingProducts = await stripe.products.search({
        query: `active:\'true\' AND metadata[\'collection\']:\'${slug}\' AND metadata[\'type\']:\'Replica Clothing\'`,
        // query: `metadata[\'collection\']:\'kobe5\'`,
        limit: 100,
    });

    const combinedProducts = [...clothingProducts.data, ...products.data];

    // const { data } = await stripe.products.list({
    //   limit: 10,
    //   active: true,
    // });
    console.log(`combinedProducts.data: ${combinedProducts}`)
    // return clothingProducts.data;
    return combinedProducts;
};

export const useKobeCollectionQuery = (options: QueryOptionsType, slug: string) => {
    return useQuery<any, Error>(['kobe-collection', options, slug], fetchKobeCollection);
};

const fetchKobeItem = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const { data } = await stripe.products.retrieve({});

};

export const useFetchKobeItem = (options: QueryKobeItem) => {
    return useQuery<any, Error>(['kobe-item', options], fetchKobeItem);
};