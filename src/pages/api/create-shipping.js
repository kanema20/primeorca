const dotenv = require('dotenv')
dotenv.config();

const STRIPE_PRIV = process.env.STRIPE_PRIV_PO_TEST;

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API_TEST);



costs = [3000, 2800, 2600, 2500, 2000]
name_ = ['Ground (1-2 items)', 'Ground (3-5 items)',
    'Ground (6-10 items)', 'Ground (10+ items)', 'Ground (20+ items)',]


const createShipping = async () => {
    for (let i = 0; i < 1; i++) {
        const shippingRate = await stripe.shippingRates.create({
            display_name: name_[i],
            type: 'fixed_amount',
            fixed_amount: { amount: costs[i], currency: 'usd' },
            delivery_estimate: {
                minimum: {
                    unit: 'day',
                    value: 10,
                },
                maximum: {
                    unit: 'day',
                    value: 14,
                }
            },
        })
    }
};

const updateShipping = async () => {
    const shippingRate = await stripe.shippingRates.update(
        'shr_1Na7DWBHHcQnL99CYlOHneBi',
        { fixed_amount: { currency_options: { amount: 3000 } } }
    )
}

createShipping();
// updateShipping();