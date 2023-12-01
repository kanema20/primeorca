import { QueryOptionsType, QueryKobeItem } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
    query,
    collection,
    limit,
    QuerySnapshot,
    DocumentData,
    where,
    getDocs,
    getDoc,
    doc
} from "@firebase/firestore";
import { db, storage } from '@firebase/app';

const fetchIndividualProduct = async ({ queryKey }: any) => {
    const [_key, _params, slug] = queryKey;

    const collectionRef = getDocs(query(collection(db, "products"), where('url', '==', slug)));
    let query_data: any = [];
    const snapshot = (await collectionRef).docs;
    snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        query_data.push(doc.data());
    });

    console.log("snapshot: ", snapshot)
    return snapshot[0].data();
};

export const useFetchIndividualProductQuery = (slug: string) => {
    return useQuery<any, Error>(['get-individual-product', slug], fetchIndividualProduct);
};

export const fetchIndividualProductSize = async (parentCollectionId: string, attr: string) => {
    // TODO: Use Firebase to get parentCollectionId_    
    // search Collection and retrieve document with metadata[size] = attr
    const parentDocRef = doc(db, 'products', parentCollectionId);
    const subcollectionQuery = query(collection(parentDocRef, parentDocRef.id + 'size'), where('metadata.size', '==', attr));
    const subcollectionSnapshot = await getDocs(subcollectionQuery);
    const snapshot = (await subcollectionSnapshot).docs;
    return {
        data: snapshot[0].data(),
        id: snapshot[0].id
    }
}

export const useFetchFirebaseProductSize = (parentCollectionId: string, attr: string) => {
    return useQuery<DocumentData, Error>(['firebase_product_size', parentCollectionId, attr], () =>
    fetchIndividualProductSize(parentCollectionId, attr)
    );
}