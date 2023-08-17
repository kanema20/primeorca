// import Stripe from 'stripe';
// const stripe = require('stripe')
// import dotenv from 'dotenv';
const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_PROD;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


// const kobe5Products = require('./mvp/kobe5.js');
// const kobe5_1Products = require('./mvp/kobe5_1.js');
// const kobe6Products = require('./mvp/kobe6.js');
// const kobe6_1Products = require('./mvp/kobe6_1.js');
// const kobe8Products = require('./mvp/kobe8.js');
// const kobe8_1Products = require('./mvp/kobe8_1.js');
// const  = require('./mvp/balenciaga.js');
// const kobe5offwhite = require('./mvp/kobe-off-white.js');
// const balenciaga2 = require('./mvp/balenciaga-2.js');
// const cloudburst = require('./mvp/cloudburst.js');
// const gtcuts = require('./mvp/gt-cuts.js');
// const mcqueen = require('./mvp/mcqueen.js');
// const eybl = require('./mvp/eybl.js')
// const dior = require('./mvp/dior.js')
// const travis = require('./mvp/travis.js')
// const balenci3 = require('./mvp/balenci-3.js');
// const yeezy = require('./mvp/yeezy-slide.js');
// const balenciTriple = require('./mvp/bal-triple-s.js');
// const y350 = require('./mvp/350.js');
const kobe8halo = require('./mvp/kobe-8-halo.js');
// const y700 = require('./mvp/700.js');
// dotenv.config({ path: `./env.local`, override: true });



const offShirts = [
    {
        "_id": "64dc52e51589d91dd641ee06",
        "name": "OFF-WHITE x Nike 005 T-Shirts Black",
        "price": 49,
        "brand": "OFF-WHITE",
        "lowestResellPrice.stockX": "100",
        "image": "https://po-prod.s3.us-west-1.amazonaws.com/off-white-shirts/Off-White-x-Nike-005-T-Shirts-Black.jpg",
        "description": "The Off-White x Nike 005 T-Shirts Black is a highly sought creation made available by the partnership between Nike, the sportswear icon, and OFF-WHITE, the streetwear brand by late Virgil Abloh. The creative teams opted went for a black hue for this garment. In terms of its design, the Off-White x Nike 005 T-Shirts Black boasts a simple, minimalist design. the designers of this garment opted for a blend of polyester and cotton when crafting them, making them soft, comfortable, and long-lasting garments. The signature OFF-WHITE logo is on the front, giving them a strikingly bold appearance. The design's versatility makes it a perfect everyday wear that can be paired with numerous outfits. What our experts love most about this creation is the perfect combination of OFF-WHITE's urban style and Nike's sportswear functionality. The Off-White x Nike 005 T-Shirts Black was released at a retail price of $55 on December 21st, 2020.",
        "url": "off-white-x-nike-005-t-shirts-black",
        "resellLinks.stockX": "https://stockx.com/off-white-x-nike-005-t-shirts-black",
        "make": "OFF-WHITE x Nike 005",
        "retailPrice": "55",
        "metadata_": {
            "brand": "off-white",
            "category": "off-white",
            "collection": "off-white",
        },
        "releaseDate": "2022-12-21"
    },
]




function isEmpty(field) {
    if (field == null || field == undefined || field == "") {
        return true;
    }
}

// const createProduct = async (product, sizes) => {
const createProduct = async (product) => {
    const stripeProduct = await stripe.products.create({
        name: product.name,
        // description: product.description ? product.description : "The Prime Orca God Tier Replicas Batch - " + product.name,
        description: "The Prime Orca God Tier Replicas Batch - " + product.name,
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
            type: "Replica Clothing",
        }
    });
    return stripeProduct;
};

const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];


for (const product of offShirts) {
    // createProduct(product, sizes_)
    createProduct(product)
        .then(product => {
            console.log(product);
        })
        .catch(error => {
            console.error(error);

        })
}

