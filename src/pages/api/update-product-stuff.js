// import Stripe from 'stripe';
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


const updateAllProducts = async () => {
    const rhude = await stripe.products.list({
        url: 'gallery-dept-sun-faded-english-logo-hoodie-black',
    })


    for (const product of rhude.data) {
        const updatedProduct = await stripe.products.update(product.id, {
            "images": ["https://prime-orca.s3.us-east-2.amazonaws.com/gallery-dept/Gallery-Dept-Sun-Faded-English-Logo-Hoodie-Black.jpg"],
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