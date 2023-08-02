const dotenv = require('dotenv');
const kobe6Products = require('./catalogues/kobe6.js');

dotenv.config();
// // dotenv.config({ path: `./env.local`, override: true });
// // let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY;// as string;
import { stripe } from './stripe';

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
}

// const createProduct = async (product, sizes) => {
//     const stripeProduct = await stripe.products.create({
//         name: product.name,
//         description: product.description,
//         default_price_data: {
//             currency: product.currency,
//             unit_amount_decimal: (parseInt(product.price) * 100).toString(),
//         },
//         images: [product.image],
//         shippable: product.shippable,
//         statement_descriptor: product.statement_descriptor,
//         url: product.url,
//         metadata: {
//             brand: product.metadata_.brand,
//             category: product.metadata_.category,
//             collection: product.metadata_.collection,
//             type: "collectible",
//             slug: product.metadata_.slug,
//             retailPrice: product.retailPrice,
//             lowestResell: product.lowestResellPrice.stockX,
//             releaseDate: product.releaseDate
//         },
//         // attributes: {
//         //     size:
//         // }
//     });
//     return stripeProduct;
// };

// // Create a new SKU for a specific product
// const createSKU = async (productId, price, currency, size) => {
//     try {
//         const sku = await stripe.skus.create({
//             product: productId,
//             price,
//             currency,
//             attributes: { size },
//             inventory: { type: 'infinite' }, // Adjust inventory settings as needed
//         });
//         return sku;
//     } catch (error) {
//         console.error('Error creating SKU:', error);
//         throw error;
//     }
// };
