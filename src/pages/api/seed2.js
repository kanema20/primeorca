import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);


const kobe6Products = require('./catalogues/kobe6.js');


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

