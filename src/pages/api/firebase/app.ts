import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
// import { isUsingEmulator } from '@lib/env';
import { getFirebaseConfig } from './config';
import type { Auth } from 'firebase/auth';
import type { Functions } from 'firebase/functions';
import type { Firestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import type { FirebaseStorage } from 'firebase/storage';

type Firebase = {
    auth: Auth;
    storage: FirebaseStorage;
    firestore: Firestore;
    functions: Functions;
    firebaseApp: FirebaseApp;
};

function initialize(): Firebase {
    const firebaseApp = initializeApp(getFirebaseConfig());

    const auth = getAuth(firebaseApp);
    const storage = getStorage(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const functions = getFunctions(firebaseApp);

    return { firebaseApp, auth, firestore, storage, functions };
}

export function getFirebase(): Firebase {
    const firebase = initialize();
    // if (isUsingEmulator) return connectToEmulator(firebase);

    return firebase;
}

export const { firestore, auth, storage } = getFirebase();