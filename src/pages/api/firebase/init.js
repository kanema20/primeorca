const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { collection, query, where, onSnapshot, getFirestore, doc, setDoc } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');
const { v4 } = require('uuid');

// const kobe5Products = require('../mvp/kobe5');
// const kobe6Products = require('../mvp/kobe6');
// const kobe8Products = require('../mvp/kobe8');
// const balenci = require('../mvp/balenciaga');
// const dior = require("../mvp/dior")

// const eybl = require('../mvp/eybl');
// const gtcuts = require('../mvp/gt-cuts');
// const travis = require('../mvp/travis');
// const tripleS = require('../mvp/bal-triple-s'); // upload error

// TRAVIS
// const dunks = require('../mvp/nike-dunks');

// AJ 4
// const AJ = require('../mvp/jordan4');

// YEEZY
// const yeezy350 = require('../mvp/350');
// const yeezy700 = require('../mvp/700');
// const yeezyslide = require('../mvp/yeezy-slide');

// const cloudburst = require('../mvp/cloudburst'); // PRADA

// const mcqueen = require('../mvp/mcqueen');

// Clothes
// Off white
// const off = require('../mvp/off-white-updated'); 
// const rhude = require('../mvp/rhude')
// const gdpt = require('../mvp/gallery-dept')
const moncler = require('../mvp/moncler')
const rick = require('../mvp/rick-owens')


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
    let collection_ = [];
    const q = query(collection(db, "/products"), where("metadata_.collection", "==", `${query_}`));
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

function createClothingObject(productArray) {
    return {
        _id: productArray._id,
        name: productArray.name,
        description: "**IMPORTANT** Clothing sizes are in Asian sizes. It is advised to size up 1 (or 2) sizes from US size depending on bodily girth (ex. US Large = Asian XL). The Prime Orca God Tier Batch - " + productArray.name,
        price: productArray.price,
        images: productArray.image,
        shippable: true,
        statement_descriptor: "PRIME ORCA LLC",
        url: productArray.url,
        brand: productArray.brand,
        currency: "USD",
        lowestResellPrice: productArray.lowestResellPrice,
        resellLinks: productArray.resellLinks,
        make: productArray.make,
        metadata_: {
            slug: productArray.url,
            category: productArray.metadata_.category,
            collection: productArray.metadata_.collection,
            release: productArray.releaseDate,
            type: "Sample Clothing",
        }
    }
}


function createProductObject(productArray, size_) {
    return {
        // id: v4(),
        name: `${productArray.name} - ${size_}`,
        description: "**IMPORTANT** For US Size 13, and 14, it is advised to size up (0.5-1 size) if you have wider feet. The Orca Tier Batch - " + productArray.name,
        currency: "USD",
        price: productArray.price,
        images: productArray.image,
        shippable: true,
        statement_descriptor: "PRIME ORCA LLC",
        url: productArray.url,
        metadata: {
            slug: productArray.url,
            brand: productArray.metadata_.brand,
            category: productArray.metadata_.category,
            collection: productArray.metadata_.collection,
            make: productArray.make,
            release: productArray.releaseDate,
            size: size_,
        }
    }
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
// const data = createClothingObject(moncler);
uploadData(rick)

module.exports = {
    auth, db, storage
}