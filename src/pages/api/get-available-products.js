import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(NEXT_PUBLIC_STRIPE_API_KEY);

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

