const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');
const dotenv = require('dotenv');
dotenv.config();
const createShipping = async () => {
    const shippingRate = await stripe.shippingRates.create({
        display_name: 'Fed Ex',
        type: 'fixed_amount',
        fixed_amount: { amount: 3000, currency: 'usd' },
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
};

const updateShipping = async () => {
    const shippingRate = await stripe.shippingRates.update(
        'shr_1Na7DWBHHcQnL99CYlOHneBi',
        { fixed_amount: { currency_options: { amount: 3000 } } }
    )
}

createShipping();
// updateShipping();