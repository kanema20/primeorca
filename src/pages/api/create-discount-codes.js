const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);
// types of discount codes
// 10%, 20%
// $10, $20

percent = [10, 20]
dollar_off = [5, 10, 15, 20]


const createDiscountCode = async () => {
    for (let i = 0; i < percent.length; i++) {
        const coupon = await stripe.coupons.create({
            percent_off: percent[i],
            // amount_off: dollar_off[i] * 100,
            duration: 'once',
            currency: "usd",
            // name: `WATKINS${dollar_off[i]}`,
            name: `PRIME${percent[i]}`,
        });
        console.log("coupon: ", coupon)
    }
};



// const updateShipping = async () => {
//     const shippingRate = await stripe.shippingRates.update(
//         'shr_1Na7DWBHHcQnL99CYlOHneBi',
//         { fixed_amount: { currency_options: { amount: 3000 } } }
//     )
// }

createDiscountCode();
