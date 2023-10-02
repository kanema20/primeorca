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
} from "firebase/firestore";

import { firestore } from '../../../../pages/api/firebase/firebase';

const fetchNewArrivals = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    // Define a query reference using the Firebase SDK
    const ref = query(collection(firestore, "products"), limit(20)); // where("available", "==", "true"),

    // Provide the query to the hook
    const query_ = useFirestoreQuery(["products"], ref);

    const snapshot = query_.data;
    return snapshot;
};

export const useNewArrivalsQuery = (options: QueryOptionsType) => {
    return useQuery<any, Error>(['new-arrivals', options], fetchNewArrivals);
};