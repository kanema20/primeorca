const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { collection, query, where, onSnapshot, getFirestore, doc, setDoc } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyB7H6KvluxP9pqi2raDp1e6tfcIIUQhsR4",
    authDomain: "prime-orca-701ba.firebaseapp.com",
    projectId: "prime-orca-701ba",
    storageBucket: "prime-orca-701ba.appspot.com",
    messagingSenderId: "626567034901",
    appId: "1:626567034901:web:86ad8946dadb882304f61c",
    measurementId: "G-K5WRK3SXRD"
};

function getFirebaseConfig() {
    if (Object.values(firebaseConfig).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');

    return firebaseConfig;
}

async function getProductsByCollection(query_) {
    const collection_ = [];
    const q = query(collection(db, "products"), where("metadata_.collection", "==", `${query_}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            collection_.push(doc.data());
            console.log(doc.data().name)
            // console.log("collection_: ", collection_)
        });
        console.log("collection_: ", collection_)
    });
    return collection_;
}

initializeApp(getFirebaseConfig());

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

getProductsByCollection('kobe-5');
