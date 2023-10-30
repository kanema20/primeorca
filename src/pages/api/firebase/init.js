const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { collection, query, where, onSnapshot, getFirestore, doc, setDoc } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');
const { v4 } = require('uuid');

const kobe5Products = require('../mvp/kobe5');
// const kobe6Products = require('../mvp/kobe6');
// const kobe8Products = require('../mvp/kobe8');
// const balenci = require('../mvp/balenciaga');
// const kobeoffwhite = require('../mvp/kobe-off-white');
// const cloudburst = require('../mvp/cloudburst'); // PRADA
// const eybl = require('../mvp/eybl');
// const gtcuts = require('../mvp/gt-cuts');

// TRAVIS
// const travis = require('../mvp/travis');
// const dunks = require('../mvp/nike-dunks');
// const balTripleS = require('../mvp/bal-triple-s');

// YEEZY
// const yeezy350 = require('../mvp/350');
// const yeezy700 = require('../mvp/700');
// const yeezyslide = require('../mvp/yeezy-slide');

// const mcqueen = require('../mvp/mcqueen');
// const dior = require("../mvp/dior")

const firebaseConfig = {
    apiKey: "AIzaSyB7H6KvluxP9pqi2raDp1e6tfcIIUQhsR4",
    authDomain: "prime-orca-701ba.firebaseapp.com",
    projectId: "prime-orca-701ba",
    storageBucket: "prime-orca-701ba.appspot.com",
    messagingSenderId: "626567034901",
    appId: "1:626567034901:web:86ad8946dadb882304f61c",
    measurementId: "G-K5WRK3SXRD"
};

const sizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13', '14'];

function getFirebaseConfig() {
    if (Object.values(firebaseConfig).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');

    return firebaseConfig;
}

async function getProductsByCollection(query_) {
    let collection_ = [];
    const q = query(collection(db, "products"), where("metadata_.collection", "==", `${query_}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            collection_.push(doc.data());
            // console.log(doc.data().name)
            console.log("collection_: ", collection_)
        });
    });
    console.log("collection_: ", collection_)
    return collection_;
}

function fetchData(product_catalogue) { // local path
    let data = fetch(product_catalogue)
        .then(response => response.json())
    return data;
}

async function uploadData(data) {
    // const res = await db.collection('products').add(data);
    for (let i = 0; i < data.length; i++) {
        await setDoc(doc(db, "products", data[i]._id), data[i]);
        console.log(`${data[i].name} uploaded successfully!`)
    }
}


initializeApp(getFirebaseConfig());

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// upload data
// uploadData(kobe5Products);

module.exports = {
    auth, db, storage
}