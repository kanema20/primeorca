// import Stripe from 'stripe';
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


const updateAllProducts = async () => {
    // const products = await stripe.products.list();
    // const balenci = await stripe.products.list({
    // url: 'prada-cloudbust-thunder-red-black'
    // url: "prada-cloudbust-neon-yellow"
    // })
    // const products = await stripe.products.search({
    //     query: 'active:\'true\' AND metadata[\'collection\']:\'yeezy-700\'',
    //     limit: 100,
    //     starting_after: 'prod_OQYfsjksBDWBmR'
    // });

    const products = await stripe.products.list({
        limit: 100,
        active: false,
        // starting_after: 'prod_OWB4OGcDIjiJW6',
    });

    const filteredProducts = products.data.filter(product => product.metadata.category === 'shirts');

    for (const product of filteredProducts) {
        // const updatedImage = product.images[0].replace('https://images.stockx.com/images', 'https://po-prod.s3.us-west-1.amazonaws.com/yeezy-700');
        const updatedProduct = await stripe.products.update(product.id, {
            // Update the existing attributes of the product
            // attributes: 'shoe_size',
            // Add the new attribute 'shoe_size' to the product
            // metadata: { collection: 'track' }
            // images: [updatedImage]
            active: true,
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