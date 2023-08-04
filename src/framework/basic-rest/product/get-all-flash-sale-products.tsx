import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
// import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);


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
  const products = await stripe.products.search({
    query: `active:\'true\' AND metadata[\'type\']:\'Replica\'`,
    limit: 15,
  });

  // const { data } = await stripe.products.list({
  //   limit: 10,
  //   active: true,
  // });
  // console.log(`products.data: ${products.data}`)
  return products.data;
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