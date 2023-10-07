import { useQuery } from 'react-query';
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
    query,
    collection,
    limit,
    QuerySnapshot,
    DocumentData,
    where,
    getDocs
} from "firebase/firestore";
import { db, storage } from '@firebase/app';

import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import dotenv from 'dotenv';
dotenv.config();
import { StripeProduct } from "@framework/types";

const fetchFeatureProduct = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    console.log(queryKey);

    const collectionRef = getDocs(query(collection(db, "products"), where('url', '==', queryKey)));
    const snapshot = (await collectionRef).docs;
    snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });

    console.log("snapshot: ", snapshot)
    return snapshot;
};

export const useFetchFeatureProduct = (url: string) => {
    return useQuery<any, Error>(url, fetchFeatureProduct);

}