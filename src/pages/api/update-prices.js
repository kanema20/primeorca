// import Stripe from 'stripe';
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


const updateAllProducts = async () => {
    // const products = await stripe.products.list();
    const kobe8 = await stripe.products.list({
        url: 'kobe-8-triple-white-halo'
        // url: "prada-cloudbust-neon-yellow"
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

    // const filteredProducts = products.data.filter(product => product.metadata.collection === 'kobe');
    // const filteredProducts = products.data.filter(product => product.metadata.type === 'Replica');

    // kobe8_prices = []
    // for (kobe of kobe8.data) {
    //     const price = await stripe.prices.retrieve(
    //         kobe.default_price
    //     );
    //     kobe8_prices.push(price.id)
    // }


    for (kobe of kobe8.data) {
        const updatedPrice = await stripe.products.update(kobe, {
            default_price.unit_amount: 16000,
        });
        console.log('Updated product:', updatedPrice);

    };
};

updateAllProducts()
    .then(() => {
        console.log('All products updated successfully');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });