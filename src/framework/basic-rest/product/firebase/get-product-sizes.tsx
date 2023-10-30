import { IProduct } from "@firebase/types/types";
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
    getDocs,
    getDoc,
    doc
} from "firebase/firestore";
import { db } from '@firebase/app';


export const fetchFirebaseProductSize = async (parentCollectionId: string, attr: string) => {
    // TODO: Use Firebase to get parentCollectionId_    
    // search Collection and retrieve document with metadata[size] = attr
    const parentDocRef = doc(db, 'products', parentCollectionId);
    const subcollectionQuery = query(collection(parentDocRef, parentDocRef.id + 'size'), where('metadata.size', '==', attr));
    const subcollectionSnapshot = await getDocs(subcollectionQuery);
    const snapshot = (await subcollectionSnapshot).docs;
    console.log("snapshot: ", snapshot[0].data())
    return snapshot[0].data();
}


export const useFetchFirebaseProductSize = (parentCollectionId: string, attr: string) => {
    return useQuery<DocumentData, Error>(['firebase_product_size', parentCollectionId, attr], () =>
        fetchFirebaseProductSize(parentCollectionId, attr)
    );
}