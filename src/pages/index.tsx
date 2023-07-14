import BannerCard from '@components/common/banner-card';
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
import { collectionData as collection } from '@framework/static/collection';
import { ROUTES } from '@utils/routes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactInfoBlock from '@containers/contact-info';
import InquiryForm from '@components/common/form/inquiry';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

// const stripePromise = loadStripe('pk_test_51NODKeBHHcQnL99C1aRpVHrkczyPHhGeH5i2ZYhfLW7NGCXTtC3wgJusSintO9atIXnO2reRhwgEHAa5RYZ6L2Xt008Z1sORpQ');
// const options = {
//   // passing the client secret obtained from the server
//   // clientSecret: await stripePromise.paymentIntents.create().client_secret,
//   clientSecret: (async () => {
//     const response = await fetch('https://localhost:3005/secret');
//     const { client_secret: clientSecret } = await response.json();
//     // Render the form using the clientSecret
//   })(),
// };

const flashSaleCarouselBreakpoint = {
  '1280': {
    slidesPerView: 1,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

export default function Home() {
  const { t } = useTranslation('common');

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
      {/* <BestSellerProductFeed /> */}
      <CollectionBlock data={collection} />
      <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
      {/* <ProductsWithFlashSale carouselBreakpoint={flashSaleCarouselBreakpoint} /> */}
      {/* <BannerGridBlock />
      <CategoryGridBlock sectionHeading="text-featured-categories" /> */}
      {/* <Divider /> */}
      {/* <NewArrivalsProductFeed /> */}
      {/* <Divider /> */}
      {/* <BrandBlock sectionHeading="text-top-brands" /> */}
      <FeatureBlock />
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
        <Subscription />
      </Container>
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
