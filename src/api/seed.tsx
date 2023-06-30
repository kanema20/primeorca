import Stripe from "stripe";
import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });
let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY as string;

const stripe = new Stripe(STRIPE_PRIV, {
    apiVersion: '2022-11-15',
});


const product = await stripe.products.create({
    name: 'Starter Setup',
    default_price_data: {
        unit_amount: 2000,
        currency: 'usd',
    },
    expand: ['default_price'],
});