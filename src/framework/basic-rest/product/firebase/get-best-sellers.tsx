import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import { useQuery } from 'react-query';
import { getFirebaseConfig } from '../../../../pages/api/firebase/config';
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

// import { firestore } from '../../../../pages/api/firebase/firebase';
import { db, storage } from '@firebase/app';

const fetchNewArrivals = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;

    // const ref = query(collection(firestore, "products"), limit(20)); // where("available", "==", "true"),
    const query_ref = getDocs(query(collection(db, "products"), limit(20)));

    let query_data = [];
    const snapshot = (await query_ref).docs;
    snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        query_data.push(doc.data());
    });

    console.log("snapshot: ", snapshot)
    return snapshot;
};

export const useNewArrivalsQuery = (options: QueryOptionsType) => {
    return useQuery<any, Error>(['new-arrivals', options], fetchNewArrivals);
};