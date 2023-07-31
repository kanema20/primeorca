// const Stripe = require('stripe');
const dotenv = require('dotenv');
// import dotenv from 'dotenv';
// const kobe5Products = require('./kobe5.js');
const kobe6Products = require('./catalogues/kobe6.js');

dotenv.config();
// dotenv.config({ path: `./env.local`, override: true });
// let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;
import { stripe } from './stripe';
// const stripe = Stripe(STRIPE_PRIV);
// const stripe = new Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom', {
//     apiVersion: '2022-11-15',
// });

const createProduct = async (product, sizes) => {
    const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        default_price_data: {
            currency: product.currency,
            unit_amount_decimal: (parseInt(product.price) * 100).toString(),
        },
        images: [product.image],
        shippable: product.shippable,
        statement_descriptor: product.statement_descriptor,
        url: product.url,
        metadata: {
            brand: product.metadata_.brand,
            category: product.metadata_.category,
            collection: product.metadata_.collection,
            type: "collectible",
            slug: product.metadata_.slug,
            retailPrice: product.retailPrice,
            lowestResell: product.lowestResellPrice.stockX,
            releaseDate: product.releaseDate
        },
        // attributes: {
        //     size:
        // }
    });
    return stripeProduct;
};

const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];

for (const product of kobe6Products) {
    createProduct(product, sizes_)
        .then(product => {
            console.log(product);
            console.log(`${product.name}: ${product.id}`);
        })
        .catch(error => {
            console.error(error);

        })
}

