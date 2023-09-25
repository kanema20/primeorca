// import Stripe from 'stripe';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

const updateAllProducts = async () => {
    const ids = ["prod_Oal85nMCWqjPaE", "prod_Oal8HDD9LYHCts", "prod_Oal8PCaitQprvT", "prod_Oal8ZnLGkDrMI6", "prod_Oal8M09OKdmK3T", "prod_Oal8h5VC2MfOsF", "prod_Oal8cSyYB7S3Yw", "prod_Oal8yajJzrVEiu"]

    // const products = await stripe.products.list({
    //     ids: ["prod_Oal85nMCWqjPaE", "prod_Oal8HDD9LYHCts", "prod_Oal8PCaitQprvT", "prod_Oal8ZnLGkDrMI6", "prod_Oal8M09OKdmK3T", "prod_Oal8h5VC2MfOsF", "prod_Oal8cSyYB7S3Yw", "prod_Oal8yajJzrVEiu"],
    // })
    // console.log('products', products.data)

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

};

const deleteAllProducts = async () => {
    const ids = ["prod_Oal85nMCWqjPaE", "prod_Oal8HDD9LYHCts", "prod_Oal8PCaitQprvT", "prod_Oal8ZnLGkDrMI6", "prod_Oal8M09OKdmK3T", "prod_Oal8h5VC2MfOsF", "prod_Oal8cSyYB7S3Yw", "prod_Oal8yajJzrVEiu"]

    // const products = await stripe.products.list({ limit: 100 });

    for (const i = 0; i < ids.length; i++) {
        await stripe.products.del(ids[i]);
        console.log(`Product ${ids[i]} deleted successfully!`);
    }
    // for (const product of products.data) {
    //     await stripe.products.del(product.id);
    //     console.log(`Product ${product.id} deleted successfully!`);
    // }

    console.log('All products deleted!');
}

deleteAllProducts();
