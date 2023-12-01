import dotenv from 'dotenv';
dotenv.config();
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors'
import { CheckoutItems } from '@components/cart/cart';
import fetch from "node-fetch";
import { CreateOrderActions, CreateOrderData, OnApproveData } from '@paypal/paypal-js';

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})

// set some important variables
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_PROD_URL, PAYPAL_SANDBOX_URL } = process.env;

/**
 * Create an order
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
export async function createOrder(data: CreateOrderData, actions: CreateOrderActions) {
    // const purchaseAmount = "69.00"; // TODO: pull prices from a database
    const accessToken = await generateAccessToken();
    const url = `${PAYPAL_SANDBOX_URL}/v2/checkout/orders`;
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: data,
                    },
                },
            ],
        }),
    });
    return handleResponse(response);
}

export async function onApprove(data: OnApproveData) {//, actions: OnApproveActions) {
    //TODO: init firebase, add record to firebase, then finish with firestore <-> airtable Zapier integration    // replace this url with your server

    location.href = "/success";
    // return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         orderID: data.orderID,
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((orderData) => {
    //         // Your code here after capture the order
    //         location.href = "/success";
    //     });
}

export function onCancel() {
    window.alert("Payment not captured, please try again")
}


/**
 * Capture payment for an order
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
export async function capturePayment(orderId: NextApiRequest) {
    const accessToken = await generateAccessToken();
    const url = `${PAYPAL_SANDBOX_URL}/v2/checkout/orders/${orderId}/capture`;
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return handleResponse(response);
}

/**
 * Generate an OAuth 2.0 access token
 * @see https://developer.paypal.com/api/rest/authentication/
 */
export async function generateAccessToken() {
    const auth = Buffer.from(
        PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64");
    const response = await fetch(`${PAYPAL_SANDBOX_URL}/v1/oauth2/token`, {
        method: "post",
        body: "grant_type=client_credentials",
        headers: {
            Authorization: `Basic ${auth}`,
        },
    });
    const jsonData = await handleResponse(response);
    return jsonData.access_token;
}

/**
 * Generate a client token
 * @see https://developer.paypal.com/docs/checkout/advanced/integrate/#link-sampleclienttokenrequest
 */
export async function generateClientToken() {
    const accessToken = await generateAccessToken();
    const response = await fetch(`${PAYPAL_SANDBOX_URL}/v1/identity/generate-token`, {
        method: "post",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Accept-Language": "en_US",
            "Content-Type": "application/json",
        },
    });
    console.log("response", response.status);
    const jsonData = await handleResponse(response);
    return jsonData.client_token;
}

async function handleResponse(response: any) {
    if (response.status === 200 || response.status === 201) {
        return response.json();
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {

            // Create Checkout Sessions from body params.
            // const session = await capturePayment(req.body);
            const session = await createOrder(req.body);
            console.log("req.body: ", req.body);
            res.status(200).json({ url: session.url });
            // res.redirect(303, session.url);
        } catch (err) {
            console.log(err)
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

