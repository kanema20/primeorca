import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import OrderSuccess from "@components/order/order-success";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import InquiryForm from '@components/common/form/inquiry';
import { useTranslation } from 'next-i18next';
import { useCart } from "@contexts/cart/cart.context";

export default function Order() {
    const { items, total, isEmpty } = useCart();
    const { t } = useTranslation('common');
    const { clearItemFromCart } = useCart();
    items?.map((cartItem: any) => {
        clearItemFromCart(cartItem.id)
    })

    return (
        <>
            <PageHeader pageHeader="text-page-order-thank-you" />
            <Container>
                <OrderSuccess />
                <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                    <div className="md:w-full lg:full 2xl:full flex h-full  flex-col">
                        <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
                            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
                                {t('text-inquiry')}
                            </h4>
                        </div>
                        <InquiryForm />
                    </div>
                </div>
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
