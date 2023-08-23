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
import { GetServerSideProps, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { SwitchLayoutGroupContext } from 'framer-motion';
import InquiryForm from '@components/common/form/inquiry';

export default function Collections({ slug, }: InferGetStaticPropsType<typeof getStaticProps>) {
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
                                        href={`${ROUTES.DRIP}/${slug}`}
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
                        <h1 className="text-lg font-bold md:text-xl lg:text-2xl text-heading">{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
                        <ProductGrid slug={slug} />
                    </div>
                </div>
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
        </div>
    );
}

Collections.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: "drip" } },
            { params: { slug: "off-white-nike" } },
            { params: { slug: "rhude" } },
            // { params: { slug: "kobe-5" } },
            // { params: { slug: "kobe-6" } },
            // { params: { slug: "kobe-8" } },
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
