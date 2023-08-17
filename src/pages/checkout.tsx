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
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_TEST);


export default function CheckoutPage() {

  // useEffect(() => {
  //   // fetch('https://localhost:8080/create-payment-intent', {
  //     fetch('/api/create-payment-intent', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ items: [{}] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);
  // const appearance = {
  //   theme: 'stripe',
  // };
  // const options = {
  //   // passing the client secret obtained from the server
  //   // clientSecret: await stripePromise.paymentIntents.create().client_secret,
  //   // clientSecret: (async () => {
  //   //   const response = await fetch('https://localhost:8080/secret');
  //   //   const { client_secret: clientSecret } = await response.json();
  //   //   // Render the form using the clientSecret
  //   //   return clientSecret;
  //   // })(),
  //   clientSecret,
  //   appearance
  // };

  // const createPaymentIntent = async (amount: number) => {
  //   try {
  //     const response = await fetch("/create-payment-intent", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ amount }),
  //     });

  //     const data = await response.json();
  //     return data.client_secret;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      {/* <Elements stripe={stripePromise} options={options}> */}
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
        <InquiryForm />
      </Container >
      {/* </Elements> */}
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
