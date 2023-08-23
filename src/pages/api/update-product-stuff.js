// import Stripe from 'stripe';
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


const updateAllProducts = async () => {
    const rhude = await stripe.products.list({
        url: 'rhude-pique-racer-shorts-cream'
    })
    // const products = await stripe.products.search({
    //     query: 'active:\'true\' AND metadata[\'type\']:\'Replica\'',
    //     limit: 100,
    // });

    // const products = await stripe.products.list({
    //     limit: 100,
    //     // ending_before: "prod_ONumhCfPoYOiKu"
    //     starting_after: "prod_ONumhCfPoYOiKu",
    //     // 
    // });

    // const filteredProducts = rhude.data.filter(product => product.metadata.type === 'Replica');

    for (const product of rhude.data) {
        const updatedProduct = await stripe.products.update(product.id, {
            // Update the existing attributes of the product
            // attributes: 'shoe_size',
            // Add the new attribute 'shoe_size' to the product
            metadata: { collection: 'rhude' }
            // description: "**IMPORTANT** For US Size 12, 13, and 14, it is advised to size up (0.5-1 size) if you have wider feet. The Prime Orca God Tier Replicas Batch - " + product.name,
        });
        console.log('Updated product:', updatedProduct);
    }

};

updateAllProducts()
    .then(() => {
        console.log('All products updated successfully');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });