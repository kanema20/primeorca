import { useMutation } from 'react-query';
import {
    collection,
    DocumentData,
    addDoc
} from "firebase/firestore";

import { db } from '@firebase/app';

import { IPayments } from '@firebase/types/types';

// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

const addNewPaymentDoc = async (paymentData: IPayments) => {
    // post payment capture to firestore table
    const docRef = await addDoc(collection(db, 'payments'), paymentData);
    console.log(paymentData, "payment data");
    const res = await fetch("/api/email/send-email-receipt", {
        body: JSON.stringify({
        email: paymentData.customer_email,
        fullname: paymentData.customer_name,
        subject: "Your Order Receipt From Prime Orca",
        message: "Hi" + " " + paymentData.customer_name + "," + " " + "Thank you for your order. Your order is being processed and will be shipped soon. We will send another email with your tracking number when it becomes ready. Please find your order details below.",
        }),
        headers: {
        "Content-Type": "application/json",
        },
        method: "POST",
    });
    console.log(res.json, " res.json");
    const { error } = await res.json();
    if (error) {
        console.log(error);
        return;
    }
    return docRef.id;
};

export const useAddNewPaymentRecord = () => {
    return useMutation(
        (paymentData: IPayments) => addNewPaymentDoc(paymentData),
        {
            onSuccess: (data) => {
                // TODO: send email to user
                  
                // todo: update airtable record
                
                // TODO: send data to order success page
                console.log(data, "record successfully added");
            },
            onError: (data) => {
                console.log(data, "error adding document");
            },
        }
    );
};

                // send data to firebase
                // send data to order success page
                // send receipt to email
