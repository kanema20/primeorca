import ProductsBlock from "@containers/products-block";
import { useBestSellerProductsQuery } from "@framework/product/get-all-best-seller-products";
import { useBestSellersQuery } from '@framework/product/get-all-flash-sale-products';

export default function BestSellerProductFeed() {
	const { data, isLoading, error } = useBestSellersQuery({
		limit: 12,
	});

	return (
		<ProductsBlock
			sectionHeading="text-best-sellers"
			products={data}
			loading={isLoading}
			error={error?.message}
			uniqueKey="best-sellers"
		/>
	);
}
