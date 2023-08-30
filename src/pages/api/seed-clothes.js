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
// const travis = require('./mvp/travis.js')
// const balenci3 = require('./mvp/balenci-3.js');
// const yeezy = require('./mvp/yeezy-slide.js');
// const balenciTriple = require('./mvp/bal-triple-s.js');
// const y350 = require('./mvp/350.js');
// const kobe8halo = require('./mvp/kobe-8-halo.js');
// const y700 = require('./mvp/700.js');
// const lv = require('./mvp/lv-kicks.js');
// const rickOwens = require('./mvp/rick-owens.js');
// const nikeOffWhite = require('./mvp/nike-off-white.js');
// const rhude = require('./mvp/rhude.js');
// const galleryDept = require('./mvp/gallery-dept.js');
// const moncler = require('./mvp/moncler.js');
const offWhiteShirts = require('./mvp/off-white-shirts.js');
// dotenv.config({ path: `./env.local`, override: true });
const offWhiteUpdated = require('./mvp/off-white-updated.js');

const moncler = require('./mvp/moncler.js')


const offHoodie = [
    {
        "_id": "64dc52e51589d91dd641ee36",
        "price": "79",
        "name": "OFF-WHITE Galaxy Brushed Zip Up Hoodie Black/Blue",
        "brand": "OFF-WHITE",
        "lowestResellPrice.stockX": "312",
        "image": "https://prime-orca.s3.us-east-2.amazonaws.com/off-white-updated/OFF-WHITE-Galaxy-Brushed-Zip-Up-Hoodie-Black.jpg",
        "description": "",
        "url": "off-white-galaxy-brushed-zip-up-hoodie-black",
        "resellLinks.stockX": "https://stockx.com/off-white-galaxy-brushed-zip-up-hoodie-black",
        "make": "OFF-WHITE Galaxy Brushed Zip Up Hoodie",
        "retailPrice": "335",
        "metadata_": {
            "brand": "off-white",
            "category": "hoodies",
            "collection": "off-white",
            "slug": "off-white-x-nike-005-t-shirts-beige"
        },
        "releaseDate": ""
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
        description: "**IMPORTANT** Clothing sizes are in Asian sizes. It is advised to size up 1 (or 2) sizes from US size depending on bodily girth (ex. US Large = Asian XL). The Prime Orca God Tier Replicas Batch - " + product.name,
        // description: "**IMPORTANT** For US Size 12, 13, and 14, it is advised to size up (0.5-1 size) if you have wider feet. The Prime Orca God Tier Replicas Batch - " + product.name,
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
            type: "Replica Clothing",
            // type: "Replica",
        }
    });
    return stripeProduct;
};

// const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];


for (const product of offHoodie) {
    // createProduct(product, sizes_)
    createProduct(product)
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.error(error);

        })
}

