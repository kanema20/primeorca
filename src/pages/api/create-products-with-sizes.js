const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

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
const balenci3 = require('./mvp/balenci-3.js');
// const yeezy = require('./mvp/yeezy-slide.js');


const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];


async function createProduct(product, size_) {
    const stripeProduct = await stripe.products.create({
        name: `${product.name} - ${size_}`,
        description: product.description ? product.description : product.name,
        default_price_data: {
            currency: product.currency,
            unit_amount_decimal: (parseInt(product.price) * 100).toString(),
        },
        images: [product.image],
        shippable: product.shippable,
        statement_descriptor: product.statement_descriptor,
        url: product.url,
        metadata: {
            slug: product.url,
            brand: product.metadata_.brand,
            category: product.metadata_.category,
            collection: product.metadata_.collection,
            make: product.metadata_.make,
            release: product.releaseDate,
            size: size_,
        }
    });

    // for (const size of sizes) {
    //     await stripe.prices.create({
    //         product: product.id,
    //         unit_amount: (parseInt(product.price) * 100), // Replace with your desired price in cents
    //         currency: 'usd',
    //         attributes: { size },
    //     });
    // }

    return stripeProduct;
}

for (const product of balenci3) {
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