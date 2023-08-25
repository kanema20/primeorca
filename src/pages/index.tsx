import BannerCard from '@components/common/banner-card';
import BannerCardFeature from '@components/common/banner-card-feature';
import Container from '@components/ui/container';
import BrandBlock from '@containers/brand-block';
import CategoryGridBlock from '@containers/category-grid-block';
import FeatureBlock from '@containers/feature-block';
import Layout from '@components/layout/layout';
import CollectionBlock from '@containers/collection-block';
import Divider from '@components/ui/divider';
import ProductsWithFlashSale from '@containers/products-with-flash-sale';
import DownloadApps from '@components/common/download-apps';
import Support from '@components/common/support';
import HeroWithCategory from '@containers/hero-with-category';
import BannerGridBlock from '@containers/banner-grid-block';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import Subscription from '@components/common/subscription';
import { homeTwoHeroBanner as heroBanner } from '@framework/static/banner';
import { homeOneBanner as banner } from '@framework/static/banner';
import { featureBanner as featureBanner } from '@framework/static/banner';
import { processBanner as processBanner } from '@framework/static/banner';
import { collectionData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactInfoBlock from '@containers/contact-info';
import InquiryForm from '@components/common/form/inquiry';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { CartProvider } from 'use-shopping-cart'
import { useFetchFeatureProduct } from '@framework/product/get-single-product';
import ModalVideo from '@components/common/modal-video';

// const flashSaleCarouselBreakpoint = {
//   '1280': {
//     slidesPerView: 1,
//     spaceBetween: 28,
//   },
//   '768': {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   '0': {
//     slidesPerView: 1,
//     spaceBetween: 12,
//   },
// };


export default function Home() {
  const { t } = useTranslation('common');
  const { data, isLoading } = useFetchFeatureProduct('kobe-8-triple-white-halo');
  isLoading && console.log("feature product loading", isLoading)
  // console.log("feature product data", data)

  return (
    <Container>
      {/* <Elements stripe={stripePromise} options={options}> */}
      {/* <HeroWithCategory bannerData={heroBanner} /> */}
      <BannerCard
        key={`banner--key${banner.id}`}
        banner={banner}
        // href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
        href={``}
        className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
      />
      <BannerCardFeature
        key={`banner--key${featureBanner.id}`}
        banner={featureBanner}
        product={data}
        // href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
        href={``}
        className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
      />
      {/* <BannerCard
        key={`banner--key${banner.id}`}
        banner={processBanner}
        // href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
        href={`/process`}
        className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
      /> */}

      <ModalVideo
        thumb='https://po-prod.s3.us-west-1.amazonaws.com/_app/Process-Video-Thumbnail.png'
        thumbWidth={1024}
        thumbHeight={576}
        thumbAlt="Modal video thumbnail"
        video="https://www.youtube.com/embed/jzCcXDhdplw"
        videoWidth={1920}
        videoHeight={1080} />      <CollectionBlock data={collection} />
      <Divider />
      {/* <BrandBlock sectionHeading="text-top-brands" /> */}
      <BestSellerProductFeed />
      <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
      {/* <ProductsWithFlashSale carouselBreakpoint={flashSaleCarouselBreakpoint} /> */}
      {/* <BannerGridBlock />
      <CategoryGridBlock sectionHeading="text-featured-categories" /> */}
      {/* <Divider /> */}
      {/* <NewArrivalsProductFeed /> */}
      {/* <DownloadApps /> */}
      {/* <Support /> */}
      <Container>

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
        {/* <Subscription /> */}
      </Container>
      <FeatureBlock />
      {/* </Elements> */}
    </Container >
  )
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ]))
    },
  };
};
