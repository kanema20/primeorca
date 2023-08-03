import dotenv from 'dotenv';
import { Stripe } from 'stripe';
const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

dotenv.config();
// dotenv.config({ path: `./env.local`, override: true });
let STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

// export const stripe = new Stripe(STRIPE_PRIV, {
    // apiVersion: '2022-11-15'
// });

export stripe;
