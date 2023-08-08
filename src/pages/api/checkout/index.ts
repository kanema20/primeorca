import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import Cors from 'cors'
import { validateCartItems } from 'use-shopping-cart/utilities'
import { CheckoutItems } from '@components/cart/cart';
import { forEach } from 'lodash';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function calculateShipping(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]) {
  let total = 0;
  // console.log("total items: ", lineItems.length)
  // console.log("lineItems[1].quantity: ", lineItems[1].quantity)

  // for (let lineItem in lineItems) {
  //   lineItem = JSON.stringify(lineItem)
  //   if (lineItem.quantity == 1) {
  //     total = total + 1;
  //   } else {
  //     total = total + lineItem.quantity
  //   }
  // }



  for (let i = 0; i < lineItems.length; i++) {
    if (lineItems[i].quantity == 1) {
      total = total + 1;
    } else {
      total = total + lineItems[i].quantity
    }
  }
  return total;
}

async function createCheckoutSession(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]): Promise<Stripe.Checkout.Session> {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
    mode: 'payment',
    line_items: lineItems,
    success_url: 'https://primeorca.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://primeorca.com',
    shipping_address_collection: {
      allowed_countries: ['US', 'JP', 'GB', 'FR', 'SG', 'CA', 'CN', 'CO', 'EG', 'DE', 'HK', 'IT', 'KR', 'MO', 'MX', 'NG', 'ES', 'TW'],
    },
    invoice_creation: {
      enabled: true,
      invoice_data: {
        description: 'Invoice from Prime Orca LLC',
        //   metadata: {
        //     order: 'order-xyz',
        //   },
        custom_fields: [
          //     {
          // name: 'Purchase Order',
          // value: 'PO-XYZ',
          //     },
        ],
        //   rendering_options: {
        //     amount_tax_display: 'include_inclusive_tax',
        //   },
        footer: 'Prime Orca LLC',
      },
    },
    // automatic_tax: { enabled: true },
    shipping_options: [
      //   {
      //   // shipping_rate: 'shr_1NauvTCrveYCAKISIyvsu4ez',
      //   shipping_rate: 'shr_1NbB2aCrveYCAKISFdxZMTb4', // live
      // },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: (calculateShipping(lineItems) < 3) ? 3000 * (calculateShipping(lineItems)) : 2500 * (calculateShipping(lineItems)),
            // amount: (lineItems.length < 3) ? 3000 * (lineItems.length) : 2500 * (lineItems.length),
            currency: 'usd',
          },
          display_name: `Universal Ground Shipping (${calculateShipping(lineItems)})`,
          delivery_estimate: {
            minimum: {
              unit: 'day',
              value: 10,
            },
            maximum: {
              unit: 'day',
              value: 14,
            },
          },
        },
      },
    ],

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
