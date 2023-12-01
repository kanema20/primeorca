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
    getDocs
} from "@firebase/firestore";
import { db, storage } from '@firebase/app';

// const fetchIndividualProduct = async ({ queryKey }: any) => {
//     const [_key, _params] = queryKey;
//     const product = await stripe.products.search({
//         query: `metadata[\'slug\']:\'${queryKey}\'`,
//         // limit: 1,
//     });

//     // console.log(`queryKey ${queryKey}`);

//     return product.data;
// };

const fetchIndividualProduct = async ({ queryKey }: any) => {
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

export const useSingleProdQuery = (slug: string) => {
    // return useQuery<any, Error>([slug], fetchIndividualProduct);
    return useQuery<any, Error>(slug, fetchIndividualProduct);
}


// const fetchFeatureProduct = async (url: string) => {
//     const product = await stripe.products.search({
//         query: `active:\'true\' AND url:\'${url}\' AND metadata[\'type\']:\'Replica\'`,
//         limit: 1,
//     });
//     return product.data[0];
// }

// export const useFetchFeatureProduct = (url: string) => {
//     return useQuery<StripeProduct, Error>(['feature_prod', url], () =>
//         fetchFeatureProduct(url)
//     );
// }
// export const useSingleProdQuery = (options: QueryOptionsType) => {
//     return useQuery<any, Error>(['single-product', options], fetchIndividualProduct);

// };


// url:\'${_params}\' AND  
// const fetchIndividualProductSize = async ({ queryKey }: any) => {
//     const [_key, _params] = queryKey;
//     const product = await stripe.products.search({
//         query: `active:\'true\' AND metadata[\'size\']:\'${queryKey}\'`,
//         // limit: 1,
//     });
//     // console.log(`queryKey ${queryKey}`);
//     return product.data;
// };

const fetchIndividualProductSize = async ({ queryKey }: any) => {
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

export const useSingleProdSizeQuery = (size: string) => {
    // return useQuery<any, Error>([slug], fetchIndividualProduct);
    return useQuery<any, Error>(size, fetchIndividualProductSize);
}