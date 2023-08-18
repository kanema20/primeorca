const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

// const kobe5Products = require('./mvp/kobe5.js');
// const kobe5_1Products = require('./mvp/kobe5_1.js');
// const kobe6Products = require('./mvp/kobe6.js');
// const kobe6_1Products = require('./mvp/kobe6_1.js');
// const kobe8Products = require('./mvp/kobe8.js');
// const kobe8_1Products = require('./mvp/kobe8_1.js');
// const kobe5offwhite = require('./mvp/kobe-off-white.js');
// const balenciProducts = require('./mvp/balenciaga.js');
// const balenci2Products = require('./mvp/balenciaga-2.js');
// const cloudburst = require('./mvp/cloudburst.js');
// const gtcuts = require('./mvp/gt-cuts.js');
// const mcqueen = require('./mvp/mcqueen.js');
// const eybl = require('./mvp/eybl.js')
// const dior = require('./mvp/dior.js')
// const travis = require('./mvp/travis.js')
// const balenci3 = require('./mvp/balenci-3.js');
// const yeezy = require('./mvp/yeezy-slide.js');
// const balenciTriple = require('./mvp/bal-triple-s.js');
// const y700 = require('./mvp/700.js');
// const kobe8halo = require('./mvp/kobe-8-halo.js');
// const y3502 = require('./mvp/350-2.js');
// 
const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];

async function createProduct(product, size_) {
    const stripeProduct = await stripe.products.create({
        name: `${product.name} - ${size_}`,
        // description: product.description ? product.description : "The Prime Orca God Tier Replicas Batch - " + product.name,
        description: "The Prime Orca God Tier Replicas Batch - " + product.name,
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
            size: size_,
        }
    });

    return stripeProduct;
}

for (const product of offShirts) {
    // createProduct(product, sizes_)
    for (const size of sizes_) {
        createProduct(product, size)
            .then(product => {
                console.log(product);
                console.log(`${product.name}: ${product.id}`);
            })
            .catch(error => {
                console.error(error);
            })
    }
}