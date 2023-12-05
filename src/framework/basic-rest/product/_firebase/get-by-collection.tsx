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
} from "@firebase/firestore";
import { db, storage } from '@firebaseQueries/app';

const fetchCollection = async ({ queryKey }: any) => {
    const [_key, _params, slug] = queryKey;
    console.log(slug);

    const collectionRef = getDocs(query(collection(db, "products"), where('metadata_.collection', '==', slug)));
    let query_data: any = [];
    const snapshot = (await collectionRef).docs;
    snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        query_data.push(doc.data());
    });

    console.log("snapshot: ", snapshot)
    return snapshot;
};

export const useGetCollectionQuery = (options: QueryOptionsType, slug: string) => {
    return useQuery<any, Error>(['get-collection', options, slug], fetchCollection);
};