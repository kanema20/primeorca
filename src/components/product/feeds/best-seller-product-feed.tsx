import ProductsBlock from "@containers/products-block";
import { useBestSellerProductsQuery } from "@framework/product/get-all-best-seller-products";
import { useBestSellersQuery } from "@framework/product/_firebase/get-best-sellers";

export default function BestSellerProductFeed() {
	const { data, isLoading, error } = useBestSellersQuery({
		// limit: 12,
	});

	return (
		<ProductsBlock
			sectionHeading="All Products"
			products={data}
			loading={isLoading}
			error={error?.message}
			uniqueKey="best-sellers"
		/>
	);
}
