// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');
// const stripe = Stripe(STRIPE_PRIV);
import { stripe } from './stripe';


const updateAllProducts = async () => {
    const products = await stripe.products.list();

    for (const product of products.data) {
        const updatedProduct = await stripe.products.update(product.id, {
            // Update the existing attributes of the product
            // attributes: 'shoe_size',
            // Add the new attribute 'shoe_size' to the product
            metadata: {
                ...product.metadata,
                "size_8": "8",
                "size_8_5": "8.5",
                "size_9": "9",
                "size_9_5": "9.5",
                "size_10": "10",
                "size_10_5": "10.5",
                "size_11": "11",
                "size_11_5": '11.5',
                "size_12": '12',
                "size_13": '13',
                "size_14": '14'

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