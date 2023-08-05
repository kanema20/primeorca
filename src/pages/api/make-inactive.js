const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_KEY);


const makeUnavailable = async () => {
    let prodId = "prod_ONumSUJ7InuRaE";
    const product = await stripe.products.retrieve(
        prodId);

    const updatedProduct = await stripe.products.update(product.id, {
        // Update the existing attributes of the product
        // attributes: 'shoe_size',
        // Add the new attribute 'shoe_size' to the product
        active: false
    });
    console.log('Updated product:', updatedProduct);
};

makeUnavailable()
    .then(() => {
        console.log('product updated successfully');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });