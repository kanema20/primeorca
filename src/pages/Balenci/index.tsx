import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import StickyBox from 'react-sticky-box';
import ActiveLink from '@components/ui/active-link';
import { BreadcrumbItems } from '@components/common/breadcrumb';
import { ROUTES } from '@utils/routes';
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { balenciCategoryData as categoryData } from '@framework/static/collection';
import InquiryForm from '@components/common/form/inquiry';
import CategoryGridBlock from '@containers/category-grid-block';

    // { slug }
export default function Collections() {
    const router = useRouter();

    const { t } = useTranslation('common');

    return (
        <div className="border-t-2 border-borderBottom">
            <Container>
                <div className={`flex pt-8 pb-16 lg:pb-20`}>
                    <div className="flex-shrink-0 hidden ltr:pr-24 rtl:pl-24 lg:block w-64">
                        <StickyBox offsetTop={50} offsetBottom={20}>
                            <div className="pb-7">
                                {/* <BreadcrumbItems separator="/">
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
                                        <a className="capitalize">{slug}</a>
                                    </ActiveLink>
                                </BreadcrumbItems> */}
                            </div>
                            {/* <CollectionFilters /> */}
                        </StickyBox>
                    </div>

                    <div className="w-full ltr:lg:-ml-9 rtl:lg:-mr-9">
                        {/* <CollectionTopBar /> */}
                        {/* <h1 className="text-lg font-bold md:text-xl lg:text-2xl text-heading">{slug}</h1> */}
                        {/* <CategoryBlock data={categoryData} /> */}
                        <CategoryGridBlock sectionHeading='Balenci' />
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
