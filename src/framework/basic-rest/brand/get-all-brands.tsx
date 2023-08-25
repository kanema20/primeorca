import { QueryOptionsType, Brand } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import http from '@framework/utils/http';
import axios from 'axios';
// import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

export const fetchBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.BRANDS);
  return data;
};
const fetchAncientBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.BRANDS_ANCIENT);
  return data;
};

export const useBrandsQuery = (options: QueryOptionsType) => {
  if (options.demoVariant === 'ancient') {
    return useQuery<{ brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] }, Error>(
      [API_ENDPOINTS.BRANDS_ANCIENT, options],
      fetchAncientBrands
    );
  }

  return useQuery<{ brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] }, Error>([API_ENDPOINTS.BRANDS, options], fetchBrands);
};

/////////////////////////////

let brands: string[] = [];
export const fetchCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;

  // const brands = await stripe.products.search({
  //   // query: `metadata[\'collection\']:\'kobe5\'`,
  //   limit: 100,
  // });

  const { data } = await axios.get('/api/database');
  console.log("brands data: ", data)
  // await http.get(API_ENDPOINTS.BRANDS);
  return data;
};

export const useCategoriesQuery = (options: QueryOptionsType) => {
  // if (options.demoVariant === 'ancient') {
  //   return useQuery<{ brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] }, Error>(
  //     [API_ENDPOINTS.BRANDS_ANCIENT, options],
  //     fetchAncientBrands
  //   );
  // }

  return useQuery<{ brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] }, Error>(["get-brands", options], fetchCategories);
};
