import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import Stripe from 'stripe';
import { stripe } from './stripe';


// const stripe = loadStripe('pk_test_51NODKeBHHcQnL99C1aRpVHrkczyPHhGeH5i2ZYhfLW7NGCXTtC3wgJusSintO9atIXnO2reRhwgEHAa5RYZ6L2Xt008Z1sORpQ');


// export const listProducts = async () => {
//   try {
//     // Retrieve a list of products
//     const products = await stripe.products.list({
//       limit: 10,
//     });

//     // Print each product to the console
//     products.data.forEach((product: Stripe.Product) => {
//       console.log(`Product ID: ${product.id}`);
//       console.log(`Product Name: ${product.name}`);
//       console.log(`Product Description: ${product.description}`);
//       console.log('----------------------');
//     });
//   } catch (error) {
//     console.error('Error retrieving products:', error);
//   }
// };

export const fetchFlashSaleProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.FLASH_SALE_PRODUCTS);
  return data;
};

const fetchAncientFlashSaleProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.FLASH_SALE_PRODUCTS_ANCIENT);
  return data;
};

const fetchNewKobeArrivals = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  // const { data } = await http.get(API_ENDPOINTS.KOBE_NEW_ARRIVALS);
  const { data } = await stripe.products.list({
    limit: 10,
    active: true,
  });
  // console.log(`products.data: ${products.data}`)

  data.forEach((product: Stripe.Product) => {
    console.log(`product info: ${product}`)
  });
  return data;
};

const fetchKobeItem = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await stripe.products.retrieve({});

};

export const useFlashSaleProductsQuery = (options: QueryOptionsType) => {
  if (options.demoVariant === 'ancient') {
    return useQuery<any, Error>([API_ENDPOINTS.FLASH_SALE_PRODUCTS_ANCIENT, options], fetchAncientFlashSaleProducts);
  }

  return useQuery<any, Error>([API_ENDPOINTS.FLASH_SALE_PRODUCTS, options], fetchFlashSaleProducts);
};

export const useKobeArrivalsQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>(['kobe-new', options], fetchNewKobeArrivals);
};

export const useFetchKobeItem = (options: QueryKobeItem) => {
  return useQuery<any, Error>(['kobe-item', options], fetchKobeItem);
};