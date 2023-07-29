// const Stripe = require('stripe');
const dotenv = require('dotenv');
// import dotenv from 'dotenv';
// const kobe5Products = require('./kobe5.js');
const kobe6Products = require('./kobe6.js');

dotenv.config();
// dotenv.config({ path: `./env.local`, override: true });
// let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;
import { stripe } from './stripe';
// const stripe = Stripe(STRIPE_PRIV);
// const stripe = new Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom', {
//     apiVersion: '2022-11-15',
// });

