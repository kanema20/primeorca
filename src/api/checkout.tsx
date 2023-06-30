import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const { Order } = require("../models/Order");

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

let STRIPE_PRIV = process.env.STRIPE_PRIVATE_KEY as string;

const stripe = new Stripe(STRIPE_PRIV, {
    apiVersion: '2022-11-15',
});

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
    const customer = await stripe.customers.create({
        metadata: {
            userId: req.body.userId,
            cart: JSON.stringify(req.body.cartItems),
        },
    });

    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.image],
                    description: item.desc,
                    metadata: {
                        id: item.id,
                    },
                },
                unit_amount: item.price * 100,
            },
            quantity: item.cartQuantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "paypal"],
        shipping_address_collection: {
            allowed_countries: ["US", "CA", "KE"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "usd",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1500,
                        currency: "usd",
                    },
                    display_name: "Next day air",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },
        line_items,
        mode: "payment",
        customer: customer.id,
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    // res.redirect(303, session.url);
    res.send({ url: session.url });
});
