import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { useSingleProdQuery } from '@framework/product/get-single-product';
const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

export default function ProductPage({ slug, product }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Divider className="mb-0" />
			<Container>
				<div className="pt-8">
					<Breadcrumb />
				</div>
				{/* <ProductSingleDetails data={data} /> */}
				<ProductSingleDetails data={product} />
				<RelatedProducts sectionHeading="text-related-products" />
				<Subscription />
			</Container>
		</>
	);
}

ProductPage.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
	const prods = await stripe.products.list();
	const paths = prods.data.map((prod: any) => ({
		params: { slug: prod.metadata.slug },
	}));
	return {
		paths,
		// : [
		// { params: { slug: "kobe-5" } },
		// { params: { slug: "kobe-6" } },
		// Add more paths as needed
		// ],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
	const { slug } = params;
	// const { data, isLoading } = useSingleProdQuery(slug as string);
	const inventory = await stripe.products.list({
		expand: ["data.default_price"],
	});
	const products = inventory.data.map((product: any) => {
		const price = product.default_price;
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			price: price.unit_amount,
			currency: price.currency,
			image: product.images[0],
			metadata: product.metadata,
			url: product.url,
		}
	})
	const _product = products.find(product => product.url === slug)
	const individualProduct = JSON.stringify(_product);

	return {
		props: {
			individualProduct,
			...(await serverSideTranslations(locale!, [
				'common',
				'forms',
				'menu',
				'footer',
			])),
		},
	};
};

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale!, [
// 				"common",
// 				"forms",
// 				"menu",
// 				"footer",
// 			])),
// 		},
// 	};
// };
