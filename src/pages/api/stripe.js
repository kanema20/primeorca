import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(NEXT_PUBLIC_STRIPE_API_KEY);

// // dotenv.config({ path: `./env.local`, override: true });

// export stripe;
