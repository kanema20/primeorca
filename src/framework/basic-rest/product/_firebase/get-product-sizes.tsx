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
import { firestore } from '@firebaseQueries/app';


export const fetchFirebaseProductSize = async (parentCollectionId: string, attr: string) => {
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
        fetchFirebaseProductSize(parentCollectionId, attr)
    );
}