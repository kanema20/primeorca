import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';

export default function ProductPage({ slug, }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Divider className="mb-0" />
			<Container>
				<div className="pt-8">
					<Breadcrumb />
				</div>
				{/* <ProductSingleDetails data={data} /> */}
				<ProductSingleDetails slug={slug} />
				<RelatedProducts sectionHeading="text-related-products" />
				<Subscription />
			</Container>
		</>
	);
}

ProductPage.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			// { params: { slug: "kobe-5" } },
			// { params: { slug: "kobe-6" } },
			// Add more paths as needed
		],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
	const { slug } = params;
	return {
		props: {
			slug,
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
