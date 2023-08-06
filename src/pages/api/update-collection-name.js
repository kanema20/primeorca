// import Stripe from 'stripe';
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);


const updateAllProducts = async () => {
    // const products = await stripe.products.list();
    const prada = await stripe.products.list({
        // url: 'prada-cloudbust-thunder-red-black'
        url: "prada-cloudbust-thunder-knit-black"
    })

    for (const product of prada.data) {
        const updatedProduct = await stripe.products.update(product.id, {
            // Update the existing attributes of the product
            // attributes: 'shoe_size',
            // Add the new attribute 'shoe_size' to the product
            metadata: { collection: 'cloudbust' }
        });
        console.log('Updated product:', updatedProduct);

    };
};

updateAllProducts()
    .then(() => {
        console.log('All products updated successfully');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });