// import Stripe from 'stripe';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

const updateAllProducts = async () => {
    const ids = ["prod_Oal85nMCWqjPaE", "prod_Oal8HDD9LYHCts", "prod_Oal8PCaitQprvT", "prod_Oal8ZnLGkDrMI6", "prod_Oal8M09OKdmK3T", "prod_Oal8h5VC2MfOsF", "prod_Oal8cSyYB7S3Yw", "prod_Oal8yajJzrVEiu"]

    // for (const i = 0; i < ids.length; i++) {
    const products = await stripe.products.list({
        // url: "nike-kobe-protro-6-think-pink",
        // ids: ids[i],
        ids: ["prod_Oal85nMCWqjPaE", "prod_Oal8HDD9LYHCts", "prod_Oal8PCaitQprvT", "prod_Oal8ZnLGkDrMI6", "prod_Oal8M09OKdmK3T", "prod_Oal8h5VC2MfOsF", "prod_Oal8cSyYB7S3Yw", "prod_Oal8yajJzrVEiu"],
        // url: "off-white-galaxy-brushed-t-shirt-black-blue",
        // url: "",
        // created: { lt: 10 },
        // active: true,
        // starting_after: "prod_OWB57JzJhjU8zo",
        // // ending_before: "prod_OOk6Bl9kCUMzIJ",
        // limit: "55"
    })
    console.log('products', products.data)

    let prices = []
    for (const product of products.data) {
        const price = await stripe.prices.retrieve(
            product.default_price,
        );
        prices.push(price)
        const updatedProduct = await stripe.products.update(product.id, {
            metadata: {
                ...product.metadata,
                // collection: 'kobe-8'
                brand: 'nike',
            },
        })

    }

    console.log('prices', prices)

    // for (const _price of prices) {
    //     const price = await stripe.prices.update(
    //         _price.id,
    //         // { metadata: { order_id: '6735' } }
    //         { unit_amount_decimal: 15500 }
    //     );
    // }

    // let originalString = "https://prime-orca.s3.us-east-2.amazonaws.com/nike-dunks/Nike-SB-Dunk-Low-Travis-Scott-Product.jpg";
    // let orig = "https://prime-orca.s3.us-east-2.amazonaws.com/kobe6/Nike-Kobe-6-Kay-Yow-Think-Pink.png"

    // for (const product of products.data) {
    //     // let originalString = product.images[0];
    //     // console.log('originalString', originalString);
    //     // let splitString = originalString.split("images");
    //     // let secondHalf = splitString[1];
    //     // let newImageS3 = "https://prime-orca.s3.us-east-2.amazonaws.com/off-white-shirts" + secondHalf; // update the pictures with new s3 bucket links

    //     const updatedProduct = await stripe.products.update(product.id, {
    //         // Update the existing attributes of the product
    //         // attributes: 'shoe_size',
    //         // Add the new attribute 'shoe_size' to the product
    //         // "images": [orig],
    //         price: "155",
    //         metadata: {
    //             ...product.metadata,
    //             // collection: 'kobe-8'
    //             brand: 'nike',
    //         },
    //     });
    //     console.log('Updated product:', updatedProduct);

    // };
};

updateAllProducts()
    .then(() => {
        console.log('All products updated successfully');
    })
    .catch((error) => {
        console.error('Error updating products:', error);
    });