// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');
// const stripe = Stripe(STRIPE_PRIV);
import { stripe } from './stripe';

const showActiveProducts = async () => {
    let allProducts = [];
    let hasMore = true;
    let startingAfter = "prod_OJS0vUC6dBWlgR";

    const products = await stripe.products.list({
        limit: 100,
        starting_after: startingAfter,
    });

    allProducts.push(...products.data);


    if (products.has_more) {
        startingAfter = products.data[products.data.length - 1].id;
    } else {
        hasMore = false;
    }
    for (const product of allProducts) {
        console.log('product info:', product);

    };
    console.log(`number of products: ${allProducts.length}`)

}

showActiveProducts()
    .then(() => {
        console.log('all products shown');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });

