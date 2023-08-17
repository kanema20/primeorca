import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
// import { stripe } from 'src/pages/api/stripe';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);



export const fetchRelatedProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await http.get(API_ENDPOINTS.RELATED_PRODUCTS);
	return data;
};
export const useRelatedProductsQuery = (options: QueryOptionsType) => {
	return useQuery<Product[], Error>(
		[API_ENDPOINTS.RELATED_PRODUCTS, options],
		fetchRelatedProducts
	);
};

const fetchRelatedKobe = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const products = await stripe.products.search({
		query: 'metadata[\'collection\']:\'kobe8\' AND active:\'true\' AND metadata[\'type\']:\'Replica\'',
		limit: 5,
		// active: true
	});

	return products.data;
};

export const useRelatedKobeQuery = (options: QueryOptionsType) => {
	return useQuery<any, Error>(['kobe-related', options], fetchRelatedKobe);

};
