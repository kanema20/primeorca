import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
// import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


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

  const refurbishedProducts = await stripe.products.search({
    query: `active:\'true\' AND metadata[\'type\']:\'Refurbished\'`,
    limit: 15,
  });

  const clothingProducts = await stripe.products.search({
    query: `active:\'true\' AND metadata[\'type\']:\'Replica Clothing\'`,
    limit: 15,
  });

<<<<<<< HEAD
  const refurbishedClothingProducts = await stripe.products.search({
=======
  const clothingRefurbished = await stripe.products.search({
>>>>>>> paypal
    query: `active:\'true\' AND metadata[\'type\']:\'Refurbished Clothing\'`,
    limit: 15,
  });

<<<<<<< HEAD
  const combinedProducts = [...clothingProducts.data, ...refurbishedProducts.data, ...refurbishedClothingProducts.data, ...products.data];
=======
  const combinedProducts = [...clothingProducts.data, ...refurbishedProducts.data, ...clothingRefurbished.data, ...products.data];
>>>>>>> paypal

  console.log(`combinedProducts.data: ${combinedProducts}`)
  return combinedProducts;
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

const best_sellers: string[] = ["prod_OPXHJZvOn9eQ2J", "prod_ONvrmbYdNjiXrX", "prod_ONukvI2JcnCfcj", "prod_OVO8CO9lqK7EWb", "prod_OVuihwTEtYq6zF", "prod_OPmsC5aV8Y0wNm", "prod_OP0Izp6grSc3Cl", "prod_OOk6Bl9kCUMzIJ", "prod_OOjI4qhEj03bDP", "prod_OVtiaMmzaefBbM", "prod_OVt4cQuhy3gO6F", "prod_OSrhKxpb2Av6pu", "prod_ONumhCfPoYOiKu", "prod_OVtiSwDtV0DSkB", "prod_OVtiSwDtV0DSkB"]

const fetchBestSellers = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const products = await stripe.products.list({
    limit: 12,
    ids: best_sellers
  })
  return products.data;
};

export const useBestSellersQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>(['best-sellers', options], fetchBestSellers);
};