import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
// import { stripe } from 'src/pages/api/stripe';

const stripe = new Stripe('sk_test_51Na8pPCrveYCAKISo4oqLMDaS6go9XHno4IYnj8y0q9qThK4tLb6G4j4dqq8d6cDXmM1ZGVj2CJCIfX8aQkAytLK00biWg9kfP', {
    apiVersion: '2022-11-15',
});

// const fetchIndividualProduct = async (slug: string) => {
//     // const [_key, _params] = queryKey;
//     // console.log('slug ', slug)
//     const product = await stripe.products.search({
//         query: `metadata[\'slug\']:\'${slug}\'`,
//         limit: 1,
//     });

//     return product.data;
// };

const fetchIndividualProduct = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const product = await stripe.products.search({
        query: `metadata[\'slug\']:\'${queryKey}\'`,
        // limit: 1,
    });

    console.log(`queryKey ${queryKey}`);

    return product.data;
};


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
    console.log(`queryKey ${queryKey}`);
    return product.data;
};

export const useSingleProdSizeQuery = (size: string) => {
    // return useQuery<any, Error>([slug], fetchIndividualProduct);
    return useQuery<any, Error>(size, fetchIndividualProductSize);
}