// import { stripe } from './stripe';
const Stripe = require('stripe');
const dotenv = require('dotenv');
const kobe5Products = require('./mvp/kobe5.js');
const kobe6Products = require('./mvp/kobe6.js');
const kobe8Products = require('./mvp/kobe8.js');

// dotenv.config();
dotenv.config({ path: `./env.local`, override: true });
// let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;

// const stripe = Stripe(STRIPE_PRIV);
const stripe = new Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom')
// const stripe = new Stripe('sk_test_51Na8pPCrveYCAKISo4oqLMDaS6go9XHno4IYnj8y0q9qThK4tLb6G4j4dqq8d6cDXmM1ZGVj2CJCIfX8aQkAytLK00biWg9kfP') // PO
// , {
//     apiVersion: '2022-11-15',
// });


// const eybl = [
//     {
//         "_id": "64c3501cd5108ecc23fa0e3c",
//         "name": "Nike Ja 1 EYBL Melon Tint",
//         "brand": "Nike",
//         "price": "150",
//         "lowestResellPrice.stockX": "159",
//         "image": "https://po-prod.s3.us-west-1.amazonaws.com/eybl/Nike-Ja-1-EYBL-Melon-Tint.jpg",
//         "description": "something",
//         "currency": "USD",
//         "shippable": true,
//         "statement_descriptor": "PRIME ORCA LLC",
//         "url": "nike-ja-1-eybl-melon-tint",
//         "resellLinks.stockX": "https://stockx.com/nike-ja-1-eybl-melon-tint",
//         "make": "Nike Ja 1",
//         "retailPrice": "120",
//         "releaseDate": "2023-07-25",
//         "metadata_": {
//             "brand": "nike",
//             "category": "eybl",
//             "collection": "ja",
//             "slug": "nike-ja-1-eybl-melon-tint",
//             "make": "Nike Ja 1 EYBL Melon Tint"
//         },
//     },
//     {
//         "_id": "64c3501cd5108ecc23fa0e3d",
//         "name": "Nike Air Zoom G.T. Cut EYBL Team USA Sport Red",
//         "brand": "Nike",
//         "price": "150",
//         "lowestResellPrice.stockX": "414",
//         "image": "https://po-prod.s3.us-west-1.amazonaws.com/eybl/Nike-Air-Zoom-GT-Cut-Sport-Red-Product.jpg",
//         "description": "something",
//         "currency": "USD",
//         "shippable": true,
//         "statement_descriptor": "PRIME ORCA LLC",
//         "url": "nike-air-zoom-gt-cut-sport-red",
//         "resellLinks.stockX": "https://stockx.com/nike-air-zoom-gt-cut-sport-red",
//         "retailPrice": "170",
//         "releaseDate": "2021-07-06",
//         "metadata_": {
//             "brand": "nike",
//             "category": "eybl",
//             "collection": "GT",
//             "slug": "nike-air-zoom-gt-cut-sport-red",
//             "make": "Nike Air Zoom G.T. Cut EYBL Team USA Sport Red"
//         },
//     },

// ]

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
            make: product.metadata_.make,
            release: product.releaseDate,
            type: "Replica",
        }
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

for (const product of kobe8Products) {
    // createProduct(product, sizes_)
    createProduct(product)
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.error(error);

        })
}

