import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import Cors from 'cors'
import { validateCartItems } from 'use-shopping-cart/utilities'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

async function createCheckoutSession(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]): Promise<Stripe.Checkout.Session> {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
    mode: 'payment',
    line_items: lineItems,
    success_url: 'https://staging.primeorca.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://staging.primeorca.com',
    shipping_address_collection: {
      allowed_countries: ['US', 'JP', 'GB', 'FR', 'SG', 'CA'],
    },
    // invoice_creation: {
    // enabled: true,
    // invoice_data: {
    //   description: 'Invoice for Prime Orca LLC',
    //   metadata: {
    //     order: 'order-xyz',
    //   },
    //   custom_fields: [
    //     {
    //       name: 'Purchase Order',
    //       value: 'PO-XYZ',
    //     },
    //   ],
    //   rendering_options: {
    //     amount_tax_display: 'include_inclusive_tax',
    //   },
    //   footer: 'Prime Orca LLC',
    // },
    // },
    // automatic_tax: { enabled: true },
    shipping_options: [{
      // shipping_rate: 'shr_1NauvTCrveYCAKISIyvsu4ez',
      shipping_rate: 'shr_1NbB2aCrveYCAKISFdxZMTb4', // live
    }],
  });

  return session;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {

      // Create Checkout Sessions from body params.
      const session = await createCheckoutSession(req.body);

      // const session = await stripe.checkout.session.create({
      //   payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
      //   line_items: {
      //     price: "price_1Nao50CrveYCAKIStm2GcZD0",
      //     quantity: 1,
      //     adjustable_quantity: {
      //       enabled: true,
      //       minimum: 1,
      //       maximum: 100,
      //     }
      //   },
      //   mode: 'payment',
      //   success_url: `${req.headers.origin}/success`,
      //   cancel_url: `${req.headers.origin}/`,
      // })
      res.status(200).json({ url: session.url });
      // res.redirect(303, session.url);
    } catch (err) {
      console.log(err)
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
