// import Stripe from 'stripe';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


const updateAllProducts = async () => {
    const products = await stripe.products.list({
        // url: 'prada-cloudbust-thunder-red-black'
        url: "louis-vuitton-lv-skate-sneaker-grey-green",
        limit: "15"
    })

    for (const product of products.data) {
        const updatedProduct = await stripe.products.update(product.id, {
            // Update the existing attributes of the product
            // attributes: 'shoe_size',
            // Add the new attribute 'shoe_size' to the product
            "images": ["https://po-prod.s3.us-west-1.amazonaws.com/lv/Louis-Vuitton-LV-Skate-Sneaker-Grey-Green.jpg"],
            metadata: {
                ...product.metadata,

            },
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