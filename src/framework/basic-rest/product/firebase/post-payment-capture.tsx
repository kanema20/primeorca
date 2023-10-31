import { useMutation } from 'react-query';
import {
    collection,
    DocumentData,
    addDoc
} from "firebase/firestore";

import { db } from '@firebase/app';

import { IPayments } from '@firebase/types/types';

const addNewPaymentDoc = async (paymentData: IPayments) => {
    // post payment capture to firestore table
    const docRef = await addDoc(collection(db, 'payments'), paymentData);

    return docRef.id;
};

export const useAddNewPaymentRecord = () => {
    return useMutation(
        (paymentData: IPayments) => addNewPaymentDoc(paymentData),
        {
            onSuccess: (data) => {
                console.log(data, "record successfully added");
            },
            onError: (data) => {
                console.log(data, "error adding document");
            },
        }
    );
};
