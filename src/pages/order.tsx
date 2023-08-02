import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import OrderInformation from "@components/order/order-information";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useCart } from "@contexts/cart/cart.context";
export default function Order() {
	const { items, total, isEmpty } = useCart();
	const { clearItemFromCart } = useCart();
	items?.map((cartItem: any) => {
		clearItemFromCart(cartItem.id)
	})

	return (
		<>
			<PageHeader pageHeader="text-page-order" />
			<Container>
				<OrderInformation />
				<Subscription />
			</Container>
		</>
	);
}

Order.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
