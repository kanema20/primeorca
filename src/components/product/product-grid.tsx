import ProductCard from "@components/product/product-card";
import Button from "@components/ui/button";
import type { FC } from "react";
import { useProductsQuery } from "@framework/product/get-all-products";
import { useKobeCollectionQuery } from "@framework/product/get-collection";
import { useGetCollectionQuery } from "@framework/product/firebase/get-by-collection";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { Product } from "@framework/types";


interface ProductGridProps {
	className?: string;
	slug: string;
}
export const ProductGrid: FC<ProductGridProps> = ({ slug, className = "" }) => {
	const { query } = useRouter();
	// const {
	// 	isFetching: isLoading,
	// 	data,
	// 	error,
	// } = useKobeCollectionQuery({ ...query }, slug);
	// if (error) return <p>{error.message}</p>;

	const {
		// isFetching: isFirestoreLoading,
		data: firestoreData,
		error: firestoreError,
	} = useGetCollectionQuery({ ...query }, slug);
	if (firestoreError) return <p>{firestoreError.message}</p>;

	console.log("firestoreData: ", firestoreData);

	const { t } = useTranslation("common");

	return (
		<>
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
			>
				{/* {isLoading && !data?.pages?.length ? (
					<ProductFeedLoader limit={20} uniqueKey="search-product" />
				) : (
					data?.pages?.map((page) => {
						return page?.data?.map((product: Stripe.Product) => (
							<ProductCard
								key={`product--key${product.id}`}
								product={product}
								variant="grid"
							/>
						));
					})
				)} */}
				{firestoreData?.map((product: any) => (
					<ProductCard
						key={`product--key${product.id}`}
						product={product}
						// imgWidth={itemVariant === 'list' ? 180 : 324}
						// imgHeight={itemVariant === 'list' ? 180 : 324}
						variant={'grid'}
					// disableBorderRadius={disableBorderRadius}
					// demoVariant={demoVariant}
					// bgGray={bgGray}
					/>
				))}
			</div>
			{/* <div className="text-center pt-8 xl:pt-14">
				{hasNextPage && (
					<Button
						loading={loadingMore}
						disabled={loadingMore}
						onClick={() => fetchNextPage()}
						variant="slim"
					>
						{t("button-load-more")}
					</Button>
				)}
			</div> */}
		</>
	);
};