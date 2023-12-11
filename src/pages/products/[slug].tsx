import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps, GetStaticPaths, InferGetStaticPropsType, InferGetServerSidePropsType } from 'next';
import { useFetchItemImage } from '@framework/product/get-product-image';
import { useFetchIndividualProductQuery, useFetchFirebaseProductSize } from '@framework/product/_firebase/get-individual-product';
import { useQuery } from 'react-query';
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
    query,
    collection,
    limit,
    QuerySnapshot,
    DocumentData,
    where,
    getDocs,
    getDoc,
    doc
} from "firebase/firestore";
import { firestore } from '@firebaseQueries/app';  



	export default function ProductPage({ individData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Divider className="mb-0" />
			<Container>
				<div className="pt-8">
					<Breadcrumb />
				</div>
				<ProductSingleDetails data={individData} />
				{/* <RelatedProducts sectionHeading="text-related-products" /> */}
				<Subscription />
			</Container>
		</>
	);
}

ProductPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {

	const { slug } = params;

	const fetchIndividualData = async (value: string) => {
		const q = query(collection(firestore, '/products'), where('url', '==', value));
		const querySnapshot = await getDocs(q);
		const documents = querySnapshot.docs.map((doc) => ({
		  id: doc.id,
		  ...doc.data(),
		}));
		return documents[0];
	  };
	  
	//   const { data: individData, isLoading, isError } = useQuery(['fetch_individual_data', slug], () =>
	// 	fetchIndividualData(slug)
	//   );
	  
	//   if (isLoading) {
	//   return <div>Loading...</div>;
	//   }
	  
	//   if (isError) {
	//   return <div>Error fetching data</div>;
	//   }
	  
	  const individData: any = await fetchIndividualData(slug);
	
	  console.log("individData: ", individData)

	  // const {
		// 	data: firestoreData,
		// 	error: firestoreError,
		// } = useFetchIndividualProductQuery({ ...query }, slug);
		// const individualProduct = JSON.stringify(firestoreData)
		// console.log("individualProduct: ", individualProduct)
	return {
		props: {
			individData,
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
