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
const kobe8_1Products = require('./mvp/kobe8_1.js');
// const balenciProducts = require('./mvp/balenciaga.js');

// const kobe8Products = [
//     {
//         "_id": "64c9d60c64ce863dd80f3c8f",
//         "name": "Nike Kobe 8 Black History Month",
//         "brand": "Nike",
//         "price": "150",
//         "lowestResellPrice.stockX": "730",
//         "image": "https://po-prod.s3.us-west-1.amazonaws.com/kobe8/Nike-Kobe-8-Black-History-Month-Product.jpg",
//         "description": "Part of the 2013 Black History Month Collection, the Kobe 8 System 'BHM' features an African-style print throughout its Anthracite and Sport Grey Engineered Mesh upper. The stabilizing heel counter emerges in Total Orange, matched by the patterned laces, lining and Lunarlon midsole. The side wall sports a Pure Platinum Swoosh.",
//         "currency": "USD",
//         "shippable": true,
//         "statement_descriptor": "PRIME ORCA LLC",
//         "url": "kobe-8-black-history-month",
//         "resellLinks.stockX": "https://stockx.com/kobe-8-black-history-month",
//         "make": "Nike Kobe 8",
//         "retailPrice": "160",
//         "metadata_": {
//             "brand": "nike",
//             "category": "kobe",
//             "collection": "kobe8",
//             "slug": "kobe-8-black-history-month"
//         },
//         "releaseDate": "2013-01-26"
//     },
//     {
//         "_id": "64a3210b5d8fce08b7d5d6e3",
//         "name": "Nike Kobe 6 Protro Reverse Grinch",
//         "brand": "Nike",
//         "price": "150",
//         "lowestResellPrice.stockX": "10000",
//         "images": "https://po-prod.s3.us-west-1.amazonaws.com/kobe6/kobe-6-reverse-grinches.png",
//         "description": "`Reverse Grinches.`",
//         "url": "nike-kobe-6-reverse-grinch",
//         "currency": "USD",
//         "shippable": true,
//         "statement_descriptor": "PRIME ORCA LLC",
//         "resellLinks.stockX": "",
//         "retailPrice": "180",
//         "metadata_": {
//             "brand": "nike",
//             "category": "kobe",
//             "collection": "kobe6",
//             "slug": "nike-kobe-6-reverse-grinch",
//             "make": "Nike Kobe 6 Protro Reverse Grinch"
//         },
//         "releaseDate": "2023-12-16"
//     },
// ]

const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];


async function createProduct(product, size_) {
    const stripeProduct = await stripe.products.create({
        name: `${product.name} - ${size_}`,
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

for (const product of kobe8_1Products) {
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