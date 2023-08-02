import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import Stripe from 'stripe'

const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');


export default async function POST(request) {
    let data = await request.json();
    let priceId = data.default_price;
    let quantity = data.quantity;
    // Handle the POST request
    // if (request.method === 'POST') {
    // try {
    // Create Checkout Sessions from body params.
    const params: Stripe.Checkout.SessionCreateParams = {
        // payment_method_types: ['card', 'paypal', 'google_pay', 'apple_pay'],
        payment_method_types: ['card'],
        line_items: [{
            price: priceId,
            quantity: quantity,
        }],
        // custom_fields: [{
        //     key: 'size',
        //     label: {
        //         type: 'custom',
        //         custom: 'Size (US - Men)'
        //     },
        //     type: 'dropdown',
        //     dropdown: {
        //         options: [
        //             { label: "7", value: "7" },
        //             { label: "7.5", value: "7.5" },
        //             { label: "8", value: "8" },
        //             { label: "8.5", value: "8.5" },
        //             { label: "9", value: "9" },
        //             { label: "9.5", value: "9.5" },
        //             { label: "10", value: "10" },
        //             { label: "10.5", value: "10.5" },
        //             { label: "11", value: "11" },
        //             { label: "12", value: "12" },
        //             { label: "13", value: "13" },
        //             { label: "14", value: "14" },
        //         ]
        //     },
        // }],
        mode: 'payment',
        success_url: `localhost:3000/?success=true`,
        cancel_url: `localhost:3000/?canceled=true`,
        automatic_tax: { enabled: true },
        shipping_options: [{
            shipping_rate: 'shr_1Na7MoBHHcQnL99CZc9w75ys',
        }],
    }

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params)

    // res.status(200).json({ message: 'POST request handled successfully' });
    // res.status(200).json({ checkoutSession });
    // res.redirect(303, session.url);
    return NextResponse.json(checkoutSession.url)
    // } catch (err) {
    //     const errorMessage =
    //         err instanceof Error ? err.message : 'Internal server error'
    //     // res.status(500).json({ statusCode: 500, message: errorMessage })
    // }
    // } else {
    //     res.setHeader('Allow', 'POST')
    //     res.status(405).end('Method Not Allowed')
    // }
};