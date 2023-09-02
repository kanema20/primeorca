const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

// const kobe5Products = require('./mvp/kobe5.js');
// const kobe5_1Products = require('./mvp/kobe5_1.js');
// const kobe6Products = require('./mvp/kobe6.js');
// const kobe6_1Products = require('./mvp/kobe6_1.js');
// const kobe8Products = require('./mvp/kobe8.js');
const kobe8_1Products = require('./mvp/kobe8_1.js');
// const kobe5offwhite = require('./mvp/kobe-off-white.js');
// const balenciProducts = require('./mvp/balenciaga.js');
// const balenci2Products = require('./mvp/balenciaga-2.js');
// const cloudburst = require('./mvp/cloudburst.js');
// const gtcuts = require('./mvp/gt-cuts.js');
// const mcqueen = require('./mvp/mcqueen.js');
// const eybl = require('./mvp/eybl.js')
// const dior = require('./mvp/dior.js')
const travis = require('./mvp/travis.js')
// const balenci3 = require('./mvp/balenci-3.js');
// const yeezy = require('./mvp/yeezy-slide.js');
// const balenciTriple = require('./mvp/bal-triple-s.js');
// const y700 = require('./mvp/700.js');
// const kobe8halo = require('./mvp/kobe-8-halo.js');
// const y3502 = require('./mvp/350-2.js');
// const lv = require('./mvp/lv-kicks.js');
// const rickOwens = require('./mvp/rick-owens.js');
const nikeDunks = require('./mvp/nike-dunks.js');

const kobe8 = [
    {
        "_id": "64c9d60c64ce863dd80f3c8d",
        "name": "Nike Kobe 8 Sulfur / Electric",
        "brand": "Nike",
        "price": "160",
        "lowestResellPrice.stockX": "1312",
        "image": "https://po-prod.s3.us-west-1.amazonaws.com/kobe8/Nike-Kobe-8-Sulfer-Electric-Product.jpg",
        "description": "The Kobe 8 System 'Sulfur Electric' puts a vibrant contrasting look on the snakeskin-inspired pattern on its Engineered Mesh upper. Finished in a mix of black and Vivid Sulfer, an anatomical heel counter supports the fit. Vivid Grey adds a subtle accent to the Swoosh and heel, while full-length Lunarlon, reinforced with a glass composite shank, provides cushioning and stability underfoot. A thin web rubber outsole in further Vivid Sulfer provides traction.",
        "currency": "USD",
        "shippable": true,
        "statement_descriptor": "PRIME ORCA LLC",
        "url": "kobe-8-sulfur-electric",
        "resellLinks.stockX": "https://stockx.com/kobe-8-sulfur-electric",
        "make": "Nike Kobe 8",
        "retailPrice": "140",
        "metadata_": {
            "brand": "nike",
            "category": "kobe",
            "collection": "kobe-8",
            "slug": "kobe-8-sulfur-electric"
        },
        "releaseDate": "2012-12-20"
    },
]


const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];

async function createProduct(product, size_) {
    const stripeProduct = await stripe.products.create({
        name: `${product.name} - ${size_}`,
        description: "**IMPORTANT** For US Size 12, 13, and 14, it is advised to size up (0.5-1 size) if you have wider feet. The Prime Orca God Tier Replicas Batch - " + product.name,
        default_price_data: {
            currency: "USD",
            unit_amount_decimal: (parseInt(product.price) * 100).toString(),
            // unit_amount_decimal: (170 * 100).toString(),
        },
        images: [product.image],
        shippable: true,
        statement_descriptor: "PRIME ORCA LLC",
        url: product.url,
        metadata: {
            slug: product.url,
            brand: product.metadata_.brand,
            category: product.metadata_.category,
            collection: product.metadata_.collection,
            make: product.make,
            release: product.releaseDate,
            size: size_,
        }
    });

    return stripeProduct;
}

for (const product of kobe8) {
    // createProduct(product, sizes_)
    for (const size of sizes_) {
        createProduct(product, size)
            .then(product => {
                console.log(product);
                console.log(`${product.name}: ${product.id}`);
            })
            .catch(error => {
                console.error(error);
            })
    }
}