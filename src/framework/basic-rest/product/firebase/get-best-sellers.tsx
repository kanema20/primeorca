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
import { db } from '@firebase/app';

const best_sellers: string[] = ["64cefc861f6b94bc194e5a8d", "64cf14d6f7204deafca94486", "64cefc861f6b94bc194e5a7f", "64c9d60c64ce863dd80f3c8d"]
//  "prod_OVuihwTEtYq6zF", "prod_OPmsC5aV8Y0wNm", "prod_OP0Izp6grSc3Cl", "prod_OOk6Bl9kCUMzIJ", "prod_OOjI4qhEj03bDP", "prod_OVtiaMmzaefBbM", "prod_OVt4cQuhy3gO6F", "prod_OSrhKxpb2Av6pu", "prod_ONumhCfPoYOiKu", "prod_OVtiSwDtV0DSkB", "prod_OVtiSwDtV0DSkB"]


const fetchBestSellers = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;

    const query_ref = getDocs(query(collection(db, "products"), where("metadata_.type", "==", "Sample"),where("metadata_.type", "==", "Clothing Sample")));

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