import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import Subscription from '@components/common/subscription';
import PageHeader from '@components/ui/page-header';
import CheckoutForm from '@components/checkout/checkout-form';
import CheckoutCard from '@components/checkout/checkout-card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

const stripePromise = loadStripe('pk_test_51NODKeBHHcQnL99C1aRpVHrkczyPHhGeH5i2ZYhfLW7NGCXTtC3wgJusSintO9atIXnO2reRhwgEHAa5RYZ6L2Xt008Z1sORpQ');
const options = {
  // passing the client secret obtained from the server
  // clientSecret: await stripePromise.paymentIntents.create().client_secret,
  clientSecret: (async () => {
    const response = await fetch('https://localhost:3005/secret');
    const { client_secret: clientSecret } = await response.json();
    // Render the form using the clientSecret
  })(),
};

export default function CheckoutPage() {

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <PageHeader pageHeader="text-page-checkout" />
        <Container>
          <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
            <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
              <CheckoutForm />
            </div>
            <div className="md:w-full lg:w-2/5 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-10 rtl:lg:mr-10 ltr:xl:ml-14 rtl:xl:mr-14 flex flex-col h-full -mt-1.5">
              <CheckoutCard />
            </div>
          </div>
          <Subscription />
        </Container >
      </Elements>
    </>
  );
}

CheckoutPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
