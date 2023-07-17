import Stripe from "stripe";
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// dotenv.config();
dotenv.config({ path: `./env.local`, override: true });

const app: Express = express();
const port = process.env.PORT;
const stripe = require('stripe')('sk_test_51NODKeBHHcQnL99CmcNwjHO1sLVoJ9uCkqv5GHgQbdt9ZCFZzI6ndJ5JLAzn9k6siG4OPjKy7XDds3rXiXzkFV1q00EMNPiMom');

app.get('/', (req: Request, res: Response) => {

    res.send('Prime Orca LLC');
});

app.get('/secret', async (req: Request, res: Response) => {
    // ... Fetch or create the PaymentIntent 
    const intent = await stripe.paymentIntents.create()
    res.json({ client_secret: intent.client_secret });
});

app.listen(8080, () => {
    console.log('Running on port 8080');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});