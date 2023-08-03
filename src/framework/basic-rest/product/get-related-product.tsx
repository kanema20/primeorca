import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
// import { stripe } from 'src/pages/api/stripe';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51Na8pPCrveYCAKISo4oqLMDaS6go9XHno4IYnj8y0q9qThK4tLb6G4j4dqq8d6cDXmM1ZGVj2CJCIfX8aQkAytLK00biWg9kfP', {
	apiVersion: '2022-11-15',
});


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
