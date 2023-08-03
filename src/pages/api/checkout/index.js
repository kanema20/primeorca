import dotenv from 'dotenv';
dotenv.config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(STRIPE_PRIV)
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import Cors from 'cors'
import { validateCartItems } from 'use-shopping-cart/utilities'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: Function
// ) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

// async function createCheckoutSession(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]): Promise<Stripe.Checkout.Session> {

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
//     line_items: lineItems,
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/cancel',
//     // invoice_creation: {
//     // enabled: true,
//     // invoice_data: {
//     //   description: 'Invoice for Prime Orca LLC',
//     //   metadata: {
//     //     order: 'order-xyz',
//     //   },
//     //   custom_fields: [
//     //     {
//     //       name: 'Purchase Order',
//     //       value: 'PO-XYZ',
//     //     },
//     //   ],
//     //   rendering_options: {
//     //     amount_tax_display: 'include_inclusive_tax',
//     //   },
//     //   footer: 'Prime Orca LLC',
//     // },
//     // },
//     // automatic_tax: { enabled: true },
//     shipping_options: [{
//       shipping_rate: 'shr_1Na7MoBHHcQnL99CZc9w75ys',
//     }],
//   });

//   return session;
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {

      // Create Checkout Sessions from body params.
      // const session = await createCheckoutSession(req.body.items);
      // const session = await stripe.checkout.sessions.create({
      const cart = req.body.items;
      console.log('cart: ', cart)
      const inventory = await stripe.products.list({
        expand: ['data.default_price']
      })
      const products = inventory.data.map(product => {
        const price = product.default_price;
        return {
          currency: price.currency,
          id: product.id,
          name: product.name,
          price: price.unit_amount,
          image: product.images[0]
        }
      })
      const lineItems = validateCartItems(products, cart)

      const session = await stripe.checkout.session.create({
        payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
        line_items: {
          price: "price_1Nao50CrveYCAKIStm2GcZD0",
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 100,
          }
        },
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      })
      res.status(200).json(session);
    } catch (err) {
      console.log(err)
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
