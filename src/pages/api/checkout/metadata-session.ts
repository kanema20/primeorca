const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_API);


async function createCheckoutSession(lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]): Promise<Stripe.Checkout.Session> {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    return session.url;
}

export default async function createRegCheckout(): Promise<Stripe.Checkout.Session> {
    // const bodyJson = JSON.parse(request.body);
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
            price: 'price_1NaLJABHHcQnL99CCJH7mMZ9',
            quantity: 1,
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
                maximum: 100,
            }
        },
        {
            price: 'price_1NaLG2BHHcQnL99Crf0hDrz1',
            quantity: 1,
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
                maximum: 100,
            }
        },
        // Add more line items with metadata as needed
    ];

    const session = await createCheckoutSession(lineItems);

    Response.redirect(session.url);
    // console.log('Checkout Session:', session);
    return session;
}



async function createCheckoutWithMetadata(attribute: string): Promise<Stripe.Checkout.Session> {
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `Nike Air Zoom G.T. Cut EYBL Team USA Sport Red`,
                    metadata: {
                        "size-10": attribute,
                        // Add any other metadata key-value pairs as needed for this line item
                    },
                },
                unit_amount: 15000,
            },
            quantity: 1,
        },
        {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `Nike Ja 1 EYBL Melon Tint`,
                    metadata: {
                        "`size-${attribute}`": attribute,
                        // Add any other metadata key-value pairs as needed for this line item
                    },
                },
                unit_amount: 15000,
            },
            quantity: 2,
        },
        // Add more line items with metadata as needed
    ];

    const session = await createCheckoutSession(lineItems);

    Response.redirect(session.url);
    return session;
}

// const attr = '10';
createRegCheckout().catch((error) => console.error(error));


