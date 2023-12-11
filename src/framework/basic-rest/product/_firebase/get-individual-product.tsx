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
} from "firebase/firestore";
import { firestore } from '@firebaseQueries/app';  
// const fetchIndividualProduct = async ({ queryKey }: any) => {
//     const [_key, _params, slug] = queryKey;
const fetchIndividualProduct = async (slug: string) => {

    const collectionRef = await getDocs(query(collection(firestore, "/products"), where('url', '==', slug)));
    // const snapshot = (await collectionRef).docs;
    const documents = collectionRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    // snapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });

    console.log("documents: ", documents)

    return documents;
};

export const useFetchIndividualProductQuery = (slug: string) => {
    // return useQuery<any, Error>(['get-individual-product', slug], fetchIndividualProduct);
    return useQuery<DocumentData, Error>(['get-individual-product', slug], () =>
    fetchIndividualProduct(slug))
};

export const fetchIndividualProductSize = async (parentCollectionId: string, attr: string) => {
    // search Collection and retrieve document with metadata[size] = attr
    const parentDocRef = doc(firestore, '/products', parentCollectionId);
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
