// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom')
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function createCheckoutSession(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]): Promise<Stripe.Checkout.Session> {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
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
      shipping_rate: 'shr_1Na7MoBHHcQnL99CZc9w75ys',
    }],
  });

  return session;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors)
  // export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await createCheckoutSession(req.body.items);
      // const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ['card', 'cashapp'], // 'google_pay', 'apple_pay'],
      //   expand: ['line_items.data.price.product'],
      //   line_items: [
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: "price_1NWruABHHcQnL99CRnJvfSZG",
      //       quantity: 4,
      //     },
      //   ],
      //   mode: 'payment',
      //   invoice_creation: {
      //     enabled: true,
      //     invoice_data: {
      //       description: 'Invoice for Prime Orca LLC',
      //       metadata: {
      //         order: 'order-xyz',
      //       },
      //       custom_fields: [
      //         {
      //           name: 'Purchase Order',
      //           value: 'PO-XYZ',
      //         },
      //       ],
      //       rendering_options: {
      //         amount_tax_display: 'include_inclusive_tax',
      //       },
      //       footer: 'Prime Orca LLC',
      //     },
      //   },
      //   success_url: `localhost:3000/?success=true`,
      //   // success_url: `${req.headers.origin}/?success=true`,
      //   cancel_url: `localhost:3000/?canceled=true`,
      //   // cancel_url: `${req.headers.origin}/?canceled=true`,
      //   automatic_tax: { enabled: true },
      //   shipping_options: [{
      //     shipping_rate: 'shr_1Na7MoBHHcQnL99CZc9w75ys',
      //   }],
      // });
      res.redirect(session.url);

    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
