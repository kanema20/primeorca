import { Stripe } from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_TEST);


async function deleteAllProducts() {
    const products = await stripe.products.list({ limit: 1003 });

    for (const product of products.data) {
        await stripe.products.del(product.id);
        console.log(`Product ${product.id} deleted successfully!`);
    }

    console.log('All products deleted!');
}

deleteAllProducts();
