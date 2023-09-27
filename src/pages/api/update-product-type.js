
const dotenv = require('dotenv')
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);
const fs = require('fs');
const path = require('path');

const kobe5Products = require('./mvp/kobe5.js');
const kobe5_1Products = require('./mvp/kobe5_1.js');
const kobe6Products = require('./mvp/kobe6.js');
const kobe6_1Products = require('./mvp/kobe6_1.js');
const kobe8Products = require('./mvp/kobe8.js');
const kobe8_1Products = require('./mvp/kobe8_1.js');
const kobe5offwhite = require('./mvp/kobe-off-white.js');
const balenciProducts = require('./mvp/balenciaga.js');
const balenci2Products = require('./mvp/balenciaga-2.js');
const cloudburst = require('./mvp/cloudburst.js');
const gtcuts = require('./mvp/gt-cuts.js');
const mcqueen = require('./mvp/mcqueen.js');
const eybl = require('./mvp/eybl.js')
const dior = require('./mvp/dior.js')
const travis = require('./mvp/travis.js')
const balenci3 = require('./mvp/balenci-3.js');
const yeezy = require('./mvp/yeezy-slide.js');
const balenciTriple = require('./mvp/bal-triple-s.js');
const y700 = require('./mvp/700.js');
const kobe8halo = require('./mvp/kobe-8-halo.js');

const jsonArrays = [kobe5Products, kobe5_1Products, kobe6Products, kobe6_1Products, kobe8Products, kobe8_1Products, kobe5offwhite, balenciProducts, balenci2Products, cloudburst, gtcuts, mcqueen, eybl, dior, travis, balenci3, yeezy, balenciTriple, y700, kobe8halo];
function importJsonFiles() {
    const jsonArray = [];
    jsonArrays.forEach((file) => {
        jsonArray.push(...file)
    });

    return jsonArray;
}

// Usage
const result = importJsonFiles();
console.log(result);

const updateAllProducts = async () => {
    const products = await stripe.products.list({
        limit: 100,
        active: true,
        // ending_before: 'prod_Oan3z9eGHCTr6o',
    });

    const filteredProducts = products.data.filter(product => product.metadata.type === 'Replica');

    for (const product of filteredProducts) {
        const updatedProduct = await stripe.products.update(product.id, {
            metadata: {
                ...product.metadata,
                type: 'Refurbished',
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