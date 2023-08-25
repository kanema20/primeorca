// import Stripe from 'stripe';
// const stripe = require('stripe')
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_PROD;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


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
// const dior = require('./mvp/dior.js')
const travis = require('./mvp/travis.js')
// const balenci3 = require('./mvp/balenci-3.js');
// const yeezy = require('./mvp/yeezy-slide.js');
// const balenciTriple = require('./mvp/bal-triple-s.js');
// const y350 = require('./mvp/350.js');
// const kobe8halo = require('./mvp/kobe-8-halo.js');
// const y700 = require('./mvp/700.js');
// const lv = require('./mvp/lv-kicks.js');
// const rickOwens = require('./mvp/rick-owens.js');
// const nikeOffWhite = require('./mvp/nike-off-white.js');
// const nikeDunks = require('./mvp/nike-dunks.js');
// const nikeDunks = require('./mvp/nike-dunks.js');

// dotenv.config({ path: `./env.local`, override: true });



const kobe5eybl = [
    {
        "_id": "64c3501cd5108ecc23fa0e3e",
        "name": "Nike Kobe 5 Protro EYBL Girls (2020)",
        "brand": "Nike",
        "price": "150",
        "lowestResellPrice.stockX": "360",
        "image": "https://po-prod.s3.us-west-1.amazonaws.com/eybl/Nike-Kobe-5-Protro-EYBL-Forest-Green-2020-Product.jpg",
        "description": "Part of a collection that released for Mamba Week, the Zoom Kobe 5 Protro 'EYBL' dropped in August 2020. Inspired by Greek mythology, the shoe's synthetic upper includes a scaly texture modeled after Medusa. The left tongue sports an EYBL logo, with Kobe branding on the right shoe. The collar lining and heel accent the look, while underfoot, Zoom in the midsole provides cushioning.",
        "currency": "USD",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "url": "nike-kobe-5-protro-eybl-forest-green-2020",
        "resellLinks.stockX": "https://stockx.com/nike-kobe-5-protro-eybl-forest-green-2020",
        "retailPrice": "180",
        "releaseDate": "2020-08-29",
        "metadata_": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe-5",
            // "collection2": "kobe5",
            "slug": "nike-kobe-5-protro-eybl-forest-green-2020",
        },
    },
]


function isEmpty(field) {
    if (field == null || field == undefined || field == "") {
        return true;
    }
}

// const createProduct = async (product, sizes) => {
const createProduct = async (product) => {
    const stripeProduct = await stripe.products.create({
        name: product.name,
        // description: "**IMPORTANT** Clothing sizes are in Asian sizes. It is advised to size up 1 (or 2) sizes from US size depending on bodily girth (ex. US Large = Asian XL). The Prime Orca God Tier Replicas Batch - " + product.name,
        description: "**IMPORTANT** For US Size 12, 13, and 14, it is advised to size up (0.5-1 size) if you have wider feet. The Prime Orca God Tier Replicas Batch - " + product.name,
        default_price_data: {
            currency: "USD",
            unit_amount_decimal: (parseInt(product.price) * 100).toString(),
            // unit_amount_decimal: (170 * 100).toString(),
        },
        images: [product.image],
        shippable: true,
        statement_descriptor: "PRIME ORCA LLC",
        url: product.url,
        metadata: {
            slug: product.url,
            brand: product.metadata_.brand,
            category: product.metadata_.category,
            collection: product.metadata_.collection,
            make: product.make,
            release: product.releaseDate,
            // type: "Replica Clothing",
            type: "Replica",
        }
    });
    return stripeProduct;
};

// const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];


for (const product of kobe5eybl) {
    // createProduct(product, sizes_)
    createProduct(product)
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.error(error);

        })
}

