import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
// import { stripe } from 'src/pages/api/stripe';

const stripe = new Stripe('sk_test_51Na8pPCrveYCAKISo4oqLMDaS6go9XHno4IYnj8y0q9qThK4tLb6G4j4dqq8d6cDXmM1ZGVj2CJCIfX8aQkAytLK00biWg9kfP', {
    apiVersion: '2022-11-15',
});


import { useInfiniteQuery } from "react-query";
type PaginatedProduct = {
    data: Product[];
    paginatorInfo: any;
};

type Product = Stripe.Product;

const fetchKobeCollection = async ({ queryKey }: any) => {
    const [_key, _params, slug] = queryKey;
    const slug_ = slug.replace(/-/g, "");
    console.log(slug_);

    const products = await stripe.products.search({
        query: `active:\'true\' AND metadata[\'collection\']:\'${slug_}\' AND metadata[\'type\']:\'Replica\'`,
        // query: `metadata[\'collection\']:\'kobe5\'`,
        limit: 100,
    });
    return products.data;
};

export const useKobeCollectionQuery = (options: QueryOptionsType, slug: string) => {
    return useQuery<any, Error>(['kobe-collection', options, slug], fetchKobeCollection);

};


// const fetchAllKobe5 = async ({ collection }: ProductListProps) => {
const fetchAllKobe5 = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const products = await stripe.products.search({
        query: 'metadata[\'collection\']:\'kobe5\'',
        limit: 100,
        active: true,
    });

    return products.data;
};


export const useKobe5Query = (options: QueryOptionsType) => {
    return useQuery<any, Error>(['kobe-5', options], fetchAllKobe5);

};

const fetchKobeItem = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const { data } = await stripe.products.retrieve({});

};

export const useFetchKobeItem = (options: QueryKobeItem) => {
    return useQuery<any, Error>(['kobe-item', options], fetchKobeItem);
};