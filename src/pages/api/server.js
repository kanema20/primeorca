// import Stripe from "stripe";
const Stripe = require('stripe');
// import express, { Express, Request, Response } from 'express';
const express = require('express');
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
// dotenv.config();
dotenv.config({ path: `./env.local`, override: true });

const app = express();
const port = process.env.PORT;
const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

app.get('/', (req, res) => {

    res.send('Prime Orca LLC');
});

app.post('/secret', async (req, res) => {
    // ... Fetch or create the PaymentIntent 
    const intent = await stripe.paymentIntents.create()
    res.json({ client_secret: intent.client_secret });
});

app.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(8080, () => {
    console.log('Running on port 8080');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});