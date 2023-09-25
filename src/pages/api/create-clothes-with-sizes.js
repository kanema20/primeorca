const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();
const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

// const nikeOffWhite = require('./mvp/nike-off-white.js');
// const rhude = require('./mvp/rhude.js');
// const galleryDept = require('./mvp/gallery-dept.js');
const moncler = require('./mvp/moncler.js');
const offWhiteShirts = require('./mvp/off-white-shirts.js');
const offWhiteUpdated = require('./mvp/off-white-updated.js');
const sizes_ = ['S', 'M', 'L', 'XL', 'XXL']; //, 'XXXL'];


const offHoodie = [
    {
        "_id": "64dc52e51589d91dd641ee36",
        "price": "79",
        "name": "OFF-WHITE Galaxy Brushed Zip Up Hoodie Black/Blue",
        "brand": "OFF-WHITE",
        "lowestResellPrice.stockX": "312",
        "image": "https://prime-orca.s3.us-east-2.amazonaws.com/off-white-updated/OFF-WHITE-Galaxy-Brushed-Zip-Up-Hoodie-Black.jpg",
        "description": "",
        "url": "off-white-galaxy-brushed-zip-up-hoodie-black",
        "resellLinks.stockX": "https://stockx.com/off-white-galaxy-brushed-zip-up-hoodie-black",
        "make": "OFF-WHITE Galaxy Brushed Zip Up Hoodie",
        "retailPrice": "335",
        "metadata_": {
            "brand": "off-white",
            "category": "hoodies",
            "collection": "off-white",
            "slug": "off-white-x-nike-005-t-shirts-beige"
        },
        "releaseDate": ""
    },
]


async function createProduct(product, size_) {
    const stripeProduct = await stripe.products.create({
        name: `${product.name} - ${size_}`,
        description: "**IMPORTANT** Clothing sizes are in Asian sizes. It is advised to size up 1 (or 2) sizes from US size depending on bodily girth (ex. US Large = Asian XL). The Orca Tier Batch - " + product.name,
        default_price_data: {
            currency: "USD",
            unit_amount_decimal: (parseInt(product.price) * 100).toString(),
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

for (const product of offHoodie) {
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