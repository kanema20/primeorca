// import { stripe } from './stripe';

// const Stripe = require('stripe');
// const stripe = Stripe(STRIPE_PRIV);
import { Stripe } from 'stripe';
const stripe = Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

async function deleteAllProducts() {
    const products = await stripe.products.list({ limit: 1003 });

    for (const product of products.data) {
        await stripe.products.del(product.id);
        console.log(`Product ${product.id} deleted successfully!`);
    }

    console.log('All products deleted!');
}

deleteAllProducts();
