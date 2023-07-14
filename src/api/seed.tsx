const Stripe = require('stripe');
const dotenv = require('dotenv');
const products = require('./kobe6');
// import * as products from './kobe5';

dotenv.config();
// dotenv.config({ path: `./env.local`, override: true });
let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;

const stripe = Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');
// const stripe = Stripe(STRIPE_PRIV);

// const stripe = new Stripe(STRIPE_PRIV, {
// apiVersion: '2022-11-15',
// });

(async () => {
    for (const product of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            description: product.description,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: (product.price * 100),
            },
            images: [product.image],
            shippable: product.shippable,
            statement_descriptor: product.statement_descriptor,
            metadata: {
                brand: product.metadata.brand,
                category: product.metadata.category,
                collection: product.metadata.collection

            }
        });
        console.log(`${stripeProduct.name}: ${stripeProduct.id}`);
    }
})();
