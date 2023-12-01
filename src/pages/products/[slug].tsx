import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps, GetStaticPaths, InferGetStaticPropsType, InferGetServerSidePropsType } from 'next';
import { useFetchIndividualProductQuery } from '@framework/product/firebase/get-individual-product';
	export default function ProductPage({ slug }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Divider className="mb-0" />
			<Container>
				<div className="pt-8">
					<Breadcrumb />
				</div>
				<ProductSingleDetails data={slug} />
				<RelatedProducts sectionHeading="text-related-products" />
				<Subscription />
			</Container>
		</>
	);
}

ProductPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
	const { slug } = params;
	// const {
	// 	// isFetching: isFirestoreLoading,
	// 	data: firestoreData,
	// 	error: firestoreError,
	// } = useFetchIndividualProductQuery({ ...query }, slug);
	// const individualProduct = JSON.stringify(firestoreData)
	// console.log("individualProduct: ", individualProduct)
	return {
		props: {
			slug,
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
