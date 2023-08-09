import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import OrderSuccess from "@components/order/order-success";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import InquiryForm from '@components/common/form/inquiry';

import { useCart } from "@contexts/cart/cart.context";
export default function Order() {
    const { items, total, isEmpty } = useCart();
    const { clearItemFromCart } = useCart();
    items?.map((cartItem: any) => {
        clearItemFromCart(cartItem.id)
    })

    return (
        <>
            <PageHeader pageHeader="text-page-order-thank-you" />
            <Container>
                <OrderSuccess />
                <InquiryForm />
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
