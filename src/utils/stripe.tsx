// import Stripe from "stripe";
const Stripe = require('stripe');

const dotenv = require('dotenv');

// dotenv.config();
dotenv.config({ path: `./env.local`, override: true });
let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY as string;

// export const stripe = new Stripe(STRIPE_PRIV, {
//     apiVersion: '2022-11-15',
// });

export const stripe = Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');


