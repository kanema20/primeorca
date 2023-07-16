const Stripe = require('stripe');
const dotenv = require('dotenv');
const kobe5Products = require('./kobe5');
// const kobe6Products = require('./kobe6');

dotenv.config();
// dotenv.config({ path: `./env.local`, override: true });
let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;

const stripe = Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');
// const stripe = Stripe(STRIPE_PRIV);

// const stripe = new Stripe(STRIPE_PRIV, {
// apiVersion: '2022-11-15',
// });

(async () => {
    for (const product of kobe5Products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            description: product.description,
            type: product.type,
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
            // attributes: {
            //     size:
            // }
        });

        const sizes = ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '14'];

        for (const size of sizes) {
            await stripe.skus.create({
                product: stripeProduct.id,
                attributes: { size: size },
                price: stripeProduct.default_price_data.unit_amount_decimal, // Set your desired price here
                currency: 'usd',
                inventory: { type: 'infinite' },
            });
        }

        console.log(`${stripeProduct.name}: ${stripeProduct.id}`);
    }
})();


