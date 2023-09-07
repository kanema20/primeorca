import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import { useFetchFeatureProduct } from '@framework/product/get-single-product';
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import StickyBox from 'react-sticky-box';
import ActiveLink from '@components/ui/active-link';
import { BreadcrumbItems } from '@components/common/breadcrumb';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ROUTES } from '@utils/routes';
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import CollectionTopBar from '@components/collection/collection-top-bar';
import { CollectionFilters } from '@components/collection/collection-filters';
import { GetServerSideProps, GetStaticProps, GetStaticPaths, InferGetStaticPropsType, InferGetServerSidePropsType } from 'next';
import { SwitchLayoutGroupContext } from 'framer-motion';
import InquiryForm from '@components/common/form/inquiry';
import dotenv from 'dotenv'
dotenv.config()
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

export default function ProductPage({ _product }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // export default function ProductPage({ slug, }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();

    const { t } = useTranslation('common');

    return (
        <>
            <Divider className="mb-0" />
            <Container>
                <div className="pt-8">
                    <Breadcrumb />
                </div>
                {/* <ProductSingleDetails data={slug} /> */}
                <ProductSingleDetails data={_product} />
                <RelatedProducts sectionHeading="text-related-products" />
                <Subscription />
            </Container>
        </>
    );
}

ProductPage.Layout = Layout;

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [
//             { params: { slug: "nike-kobe-5-protro-2k-gamer-exclusive" } }, // prod_ONumhCfPoYOiKu
//             // { params: { slug: "kobe-5" } },
//             // { params: { slug: "kobe-6" } },
//             // { params: { slug: "kobe-8" } },
//             // Add more paths as needed
//         ],
//         fallback: true,
//     };
// };

// export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
//     const { slug } = params;
//     return {
//         props: {
//             slug,
//             ...(await serverSideTranslations(locale!, [
//                 'common',
//                 'forms',
//                 'menu',
//                 'footer',
//             ])),
//         },
//     };
// };


export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
    const { slug } = params;

    const inventory = await stripe.products.list({
        expand: ["data.default_price"],
    });
    const products = inventory.data.map((product: any) => {
        const price_ = product.default_price;
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: price_.unit_amount,
            currency: price_.currency,
            image: product.images[0],
            metadata: product.metadata,
            url: product.url,
        }
    })
    // const _product = await products.find(product => product.url === slug)
    const _product = await stripe.products.retrieve(
        'prod_ONumhCfPoYOiKu',
    );

    const individualProduct = {};
    // JSON.parse(JSON.stringify(_product))
    console.log("_product: ", _product)
    return {
        props: {
            // individualProduct,
            _product,
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};