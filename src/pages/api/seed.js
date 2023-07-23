// import { stripe } from './stripe';
const Stripe = require('stripe');
const dotenv = require('dotenv');
const kobe6Products = require('./kobe5.js');

dotenv.config();
// dotenv.config({ path: `./env.local`, override: true });
// let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;

// const stripe = Stripe(STRIPE_PRIV);
const stripe = new Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom')
// , {
//     apiVersion: '2022-11-15',
// });

// const createProduct = async (product, sizes) => {
const createProduct = async (product) => {
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
            slug: product.metadata_.slug,
            brand: product.metadata_.brand,
            category: product.metadata_.category,
            collection: product.metadata_.collection,
            type: "collectible",
            // sizes: sizes.join(','),
            // "size-7": 7,
            // "size-7-5": 7.5,
            // "size-8": 8,
            // "size-8-5": 8.5,
            // "size-9": 9,
            // "size-9-5": 9.5,
            // "size-10": 10,
            // "size-10-5": 10.5,
            // "size-11": 11,
            // "size-12": 12,
            // "size-13": 13,
            // "size-14": 14
            size1: 7,
            size2: 7.5,
            size3: 8,
            size4: 8.5,
            size5: 9,
            size6: 9.5,
            size7: 10,
            size8: 10.5,
            size9: 11,
            size10: 12,
            size11: 13,
            size12: 14,
        },
    });
    return stripeProduct;
};

const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];

size_kv = {
    "size-7": 7,
    "size-7-5": 7.5,
    "size-8": 8,
    "size-8-5": 8.5,
    "size-9": 9,
    "size-9-5": 9.5,
    "size-10": 10,
    "size-10-5": 10.5,
    "size-11": 11,
    "size-12": 12,
    "size-13": 13,
    "size-14": 14,
}

size_kv = {
    "size1": 7,
    "size2": 7.5,
    "size3": 8,
    "size4": 8.5,
    "size5": 9,
    "size6": 9.5,
    "size7": 10,
    "size-8": 10.5,
    "size-9": 11,
    "size-10": 12,
    "size-11": 13,
    "size-12": 14,
}

for (const product of kobe6Products) {
    createProduct(product, sizes_)
        .then(product => {
            console.log(product);
            console.log(`${product.name}: ${product.id}`);
            console.log(`${product.metadata}: ${product.metadata.size10}`);
        })
        .catch(error => {
            console.error(error);

        })
}

