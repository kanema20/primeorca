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
    getDocs, orderBy
} from "firebase/firestore";
import { firestore } from '@firebaseQueries/app';

const fetchBestSellers = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;

    const query_ref = getDocs(query(collection(firestore, "/products"), where("metadata_.type", "==", "Sample"), orderBy('updatedAt', 'desc')));

    let query_data: any = [];
    const snapshot = (await query_ref).docs;
    snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        query_data.push(doc.data());
    });
    console.log("snapshot: ", snapshot)

    return snapshot;
};

export const useBestSellersQuery = (options: QueryOptionsType) => {
    return useQuery<any, Error>(['best-sellers', options], fetchBestSellers);
};