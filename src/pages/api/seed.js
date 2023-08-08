// import Stripe from 'stripe';
// const stripe = require('stripe')
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_PROD;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);


// const kobe5Products = require('./mvp/kobe5.js');
// const kobe5_1Products = require('./mvp/kobe5_1.js');
// const kobe6Products = require('./mvp/kobe6.js');
// const kobe6_1Products = require('./mvp/kobe6_1.js');
// const kobe8Products = require('./mvp/kobe8.js');
// const kobe8_1Products = require('./mvp/kobe8_1.js');
// const  = require('./mvp/balenciaga.js');
// const kobe5offwhite = require('./mvp/kobe-off-white.js');
// const balenciaga2 = require('./mvp/balenciaga-2.js');
// const cloudburst = require('./mvp/cloudburst.js');
// const gtcuts = require('./mvp/gt-cuts.js');
// const mcqueen = require('./mvp/mcqueen.js');
// const eybl = require('./mvp/eybl.js')
const dior = require('./mvp/dior.js')

// dotenv.config({ path: `./env.local`, override: true });
const kobe_prod = [
    {
        "_id": "64a3210b5d8fce08b7d5d724",
        "name": "Nike Kobe 6 Protro Chaos",
        "brand": "Nike",
        "price": "150",
        "lowestResellPrice.stockX": "",
        "image": "https://po-prod.s3.us-west-1.amazonaws.com/kobe6/Product-Placeholder-Default-20210415.png",
        "description": "Kobe Bryant",
        "url": "nike-kobe-6-protro-chaos",
        "currency": "USD",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "resellLinks.stockX": "https://stockx.com/nike-kobe-6-protro-chaos",
        "make": "Nike Kobe 6 Protro",
        "retailPrice": "190",
        "metadata_": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe6",
            "slug": "nike-kobe-6-protro-chaos"
        },
        "releaseDate": ""
    },
]

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


for (const product of dior) {
    // createProduct(product, sizes_)
    createProduct(product)
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.error(error);

        })
}

