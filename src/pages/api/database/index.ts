// const handleCheckout = async () => {
//     try {
//         setLoading(true);
//         const { data } = await axios
//             .post("/api/checkout", getItemsFromCart(items))
//         console.log("data ", data)
//         router.push(data.url)
//     } catch (error) {
//         console.error(error);
//         // window alert
//         window.alert("Checkout Error")
//     } finally {
//         setLoading(false);
//     }
// }


import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import Cors from 'cors'

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})


async function getBrands(): Promise<Object> {
    return (
        {
            "brands": [
                {
                    "id": 1,
                    "name": "Kobe",
                    "slug": "kobe",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/kobe-brand.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/kobe-brand.png"
                    }
                },
                {
                    "id": 2,
                    "name": "Balenciaga",
                    "slug": "balenciaga",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/balenciaga-closeup.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/balenciaga-closeup.png"
                    }
                },
                {
                    "id": 3,
                    "name": "Travis Scott",
                    "slug": "nike/travis-scott",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/Cactus_Jack_Records_-_Logo.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/Cactus_Jack_Records_-_Logo.png"
                    }
                },
                {
                    "id": 4,
                    "name": "Dior",
                    "slug": "dior",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/dior-brand.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/dior-brand.png"
                    }
                },
                {
                    "id": 5,
                    "name": "Yeezy",
                    "slug": "yeezy",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/yeezy-brand-1.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/yeezy-brand-1.png"
                    }
                },
                {
                    "id": 6,
                    "name": "Off White",
                    "slug": "drip/off-white-nike",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/off-white-logo-brand-with-name-white-symbol-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/off-white-logo-brand-with-name-white-symbol-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg"
                    }
                },
                {
                    "id": 7,
                    "name": "Prada",
                    "slug": "prada",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/prada-brand.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/prada-brand.png"
                    }
                },
                {
                    "id": 8,
                    "name": "EYBL",
                    "slug": "nike/eybl",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/eyblblack.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/eyblblack.png"
                    }
                }
            ],
            "brandsGrid": [
                {
                    "id": 1,
                    "name": "Fusion",
                    "slug": "fusion",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/fusion.png",
                        "original": "/assets/images/brands/grid/fusion.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/fusion-bg.jpg",
                        "original": "/assets/images/brands/grid/fusion-bg.jpg"
                    }
                },
                {
                    "id": 2,
                    "name": "Sholy",
                    "slug": "sholy",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/sholy.png",
                        "original": "/assets/images/brands/grid/sholy.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/sholy-bg.jpg",
                        "original": "/assets/images/brands/grid/sholy-bg.jpg"
                    }
                },
                {
                    "id": 3,
                    "name": "Tyrant",
                    "slug": "tyrant",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/tyrant.png",
                        "original": "/assets/images/brands/grid/tyrant.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/tyrant-bg.jpg",
                        "original": "/assets/images/brands/grid/tyrant-bg.jpg"
                    }
                },
                {
                    "id": 4,
                    "name": "Fashadil",
                    "slug": "fashadil",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/fashadil.png",
                        "original": "/assets/images/brands/grid/fashadil.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/fashadil-bg.jpg",
                        "original": "/assets/images/brands/grid/fashadil-bg.jpg"
                    }
                },
                {
                    "id": 5,
                    "name": "Clothingegy",
                    "slug": "clothingegy",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/clothingegy.png",
                        "original": "/assets/images/brands/grid/clothingegy.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/clothingegy-bg.jpg",
                        "original": "/assets/images/brands/grid/clothingegy-bg.jpg"
                    }
                },
                {
                    "id": 6,
                    "name": "Shosio",
                    "slug": "shosio",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/shosio.png",
                        "original": "/assets/images/brands/grid/shosio.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/shosio-bg.jpg",
                        "original": "/assets/images/brands/grid/shosio-bg.jpg"
                    }
                },
                {
                    "id": 7,
                    "name": "Club Shoes",
                    "slug": "club-shoes",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/club-shoes.png",
                        "original": "/assets/images/brands/grid/club-shoes.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/club-shoes-bg.jpg",
                        "original": "/assets/images/brands/grid/club-shoes-bg.jpg"
                    }
                },
                {
                    "id": 8,
                    "name": "Pop Clothing",
                    "slug": "pop-clothing",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/pop-clothing.png",
                        "original": "/assets/images/brands/grid/pop-clothing.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/pop-clothing-bg.jpg",
                        "original": "/assets/images/brands/grid/pop-clothing-bg.jpg"
                    }
                },
                {
                    "id": 9,
                    "name": "Hoppister",
                    "slug": "hoppister",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/hoppister.png",
                        "original": "/assets/images/brands/grid/hoppister.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/hoppister-bg.jpg",
                        "original": "/assets/images/brands/grid/hoppister-bg.jpg"
                    }
                },
                {
                    "id": 10,
                    "name": "Shovia",
                    "slug": "shovia",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/shovia.png",
                        "original": "/assets/images/brands/grid/shovia.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/shovia-bg.jpg",
                        "original": "/assets/images/brands/grid/shovia-bg.jpg"
                    }
                },
                {
                    "id": 11,
                    "name": "Shoozly",
                    "slug": "shoozly",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/shoozly.png",
                        "original": "/assets/images/brands/grid/shoozly.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/shoozly-bg.jpg",
                        "original": "/assets/images/brands/grid/shoozly-bg.jpg"
                    }
                },
                {
                    "id": 12,
                    "name": "Blaze Fashion",
                    "slug": "blaze-fashion",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/blaze-fashion.png",
                        "original": "/assets/images/brands/grid/blaze-fashion.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/blaze-fashion-bg.jpg",
                        "original": "/assets/images/brands/grid/blaze-fashion-bg.jpg"
                    }
                },
                {
                    "id": 13,
                    "name": "Elegance",
                    "slug": "elegance",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/elegance.png",
                        "original": "/assets/images/brands/grid/elegance.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/elegance-bg.jpg",
                        "original": "/assets/images/brands/grid/elegance-bg.jpg"
                    }
                },
                {
                    "id": 14,
                    "name": "Clothingtastic",
                    "slug": "clothingtastic",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/clothingtastic.png",
                        "original": "/assets/images/brands/grid/clothingtastic.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/clothingtastic-bg.jpg",
                        "original": "/assets/images/brands/grid/clothingtastic-bg.jpg"
                    }
                },
                {
                    "id": 15,
                    "name": "Fashnetic",
                    "slug": "fashnetic",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/fashnetic.png",
                        "original": "/assets/images/brands/grid/fashnetic.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/fashnetic-bg.jpg",
                        "original": "/assets/images/brands/grid/fashnetic-bg.jpg"
                    }
                },
                {
                    "id": 16,
                    "name": "Hunter Shoes",
                    "slug": "hunter-shoes",
                    "image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/hunter-shoes.png",
                        "original": "/assets/images/brands/grid/hunter-shoes.png"
                    },
                    "background_image": {
                        "id": 1,
                        "thumbnail": "/assets/images/brands/grid/hunter-shoes-bg.jpg",
                        "original": "/assets/images/brands/grid/hunter-shoes-bg.jpg"
                    }
                }
            ],
            "brandsTimer": [
                {
                    "id": 1,
                    "name": "Kobe",
                    "slug": "kobe",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/kobe-brand.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/kobe-brand.png"
                    }
                },
                {
                    "id": 2,
                    "name": "Balenciaga",
                    "slug": "balenciaga",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/balenciaga-closeup.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/balenciaga-closeup.png"
                    }
                },
                {
                    "id": 3,
                    "name": "Travis Scott",
                    "slug": "nike/travis-scott",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/Cactus_Jack_Records_-_Logo.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/Cactus_Jack_Records_-_Logo.png"
                    }
                },
                {
                    "id": 4,
                    "name": "Dior",
                    "slug": "dior",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/dior-brand.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/dior-brand.png"
                    }
                },
                {
                    "id": 5,
                    "name": "Yeezy",
                    "slug": "yeezy",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/yeezy-brand-1.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/yeezy-brand-1.png"
                    }
                },
                {
                    "id": 6,
                    "name": "Off White",
                    "slug": "drip/off-white-nike",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/off-white-logo-brand-with-name-white-symbol-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/off-white-logo-brand-with-name-white-symbol-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg"
                    }
                },
                {
                    "id": 7,
                    "name": "Prada",
                    "slug": "prada",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/prada-brand.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/prada-brand.png"
                    }
                },
                {
                    "id": 8,
                    "name": "EYBL",
                    "slug": "nike/eybl",
                    "image": {
                        "id": 1,
                        "thumbnail": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/eyblblack.png",
                        "original": "https://prime-orca.s3.us-east-2.amazonaws.com/_brands/eyblblack.png"
                    }
                }
            ]
        }
    )
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const brands = await getBrands();
            res.status(200).json({ data: brands });
        } catch (error) {
            console.log(error);
        }
    }
}