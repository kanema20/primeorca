import ProductCard from "@components/product/product-card";
import Button from "@components/ui/button";
import type { FC } from "react";
import { useProductsQuery } from "@framework/product/get-all-products";
import { useCollectionQuery } from "@framework/product/get-collection";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { Product } from "@framework/types";
import Stripe from 'stripe';
import { useRelatedKobeQuery } from "@framework/product/get-related-product";

interface ProductGridProps {
	className?: string;
	slug: string;
}
// export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
export const ProductGrid: FC<ProductGridProps> = ({ slug, className = "" }) => {
	console.log("collection slug: ", slug)
	const { query } = useRouter();
	const {
		isFetching: isLoading,
		// isFetchingNextPage: loadingMore,
		// fetchNextPage,
		// hasNextPage,
		data,
		error,
		// } = useRelatedKobeQuery({ ...query });
	} = useCollectionQuery({ ...query }, slug);
	isLoading && console.log("products loading ", isLoading)
	console.log("data ", data)
	if (error) return <p>{error.message}</p>;

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
				{data?.map((product: any) => (
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
