// import { stripe } from './stripe';
const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();

const stripe = Stripe(process.env.STRIPE_PRIV_PO_TEST);
// const stripe = Stripe(STRIPE_PRIV);

const makeUnavailable = async () => {
    let allProducts = [];
    let hasMore = true;
    let startingAfter = "prod_ONGjsn2MQPcsqK";
    const products = await stripe.products.list({
        limit: 100,
        starting_after: startingAfter,
    });

    allProducts.push(...products.data);

    if (products.has_more) {
        startingAfter = products.data[products.data.length - 1].id;
    } else {
        hasMore = false;
    }

    for (const product of allProducts) {
        const updatedProduct = await stripe.products.update(product.id, {
            // Update the existing attributes of the product
            // attributes: 'shoe_size',
            // Add the new attribute 'shoe_size' to the product
            active: false
        });
        console.log('Updated product:', updatedProduct);

    };
};

makeUnavailable()
    .then(() => {
        console.log('All products updated successfully');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });