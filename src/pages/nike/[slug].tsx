import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import Subscription from '@components/common/subscription';
import StickyBox from 'react-sticky-box';
import { ProductGrid } from '@components/product/product-grid';
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

export default function Collections({ slug, }: InferGetStaticPropsType<typeof getStaticPaths>) {
    const router = useRouter();

    const { t } = useTranslation('common');

    return (
        <div className="border-t-2 border-borderBottom">
            <Container>
                <div className={`flex pt-8 pb-16 lg:pb-20`}>
                    <div className="flex-shrink-0 hidden ltr:pr-24 rtl:pl-24 lg:block w-64">
                        <StickyBox offsetTop={50} offsetBottom={20}>
                            <div className="pb-7">
                                <BreadcrumbItems separator="/">
                                    <ActiveLink
                                        href={'/'}
                                        activeClassName="font-semibold text-heading"
                                    >
                                        <a>{t('breadcrumb-home')}</a>
                                    </ActiveLink>
                                    <ActiveLink
                                        href={`${ROUTES.BALENCI}`}
                                        activeClassName="font-semibold text-heading"
                                    >
                                        {/* <a className="capitalize">{t('breadcrumb-collection')}</a> */}
                                        <a className="capitalize">{slug}</a>
                                    </ActiveLink>
                                </BreadcrumbItems>
                            </div>
                            {/* <CollectionFilters /> */}
                        </StickyBox>
                    </div>

                    <div className="w-full ltr:lg:-ml-9 rtl:lg:-mr-9">
                        {/* <CollectionTopBar /> */}
                        <h1 className="text-lg font-bold md:text-xl lg:text-2xl text-hea    ding">{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
                        <ProductGrid slug={slug} />
                    </div>
                </div>
                <Subscription />
            </Container>
        </div>
    );
}

Collections.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: "nike" } },
            { params: { slug: "eybl" } },
            { params: { slug: "gtcuts" } },
            { params: { slug: "travis" } },
            // Add more paths as needed
        ],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { slug } = params;
    return {
        props: {
            slug,
            ...(await serverSideTranslations(locale!, [
                'common',
                'forms',
                'menu',
                'footer',
            ])),
        },
    };
};

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale!, [
//                 'common',
//                 'forms',
//                 'menu',
//                 'footer',
//             ])),
//         },
//     };
// };