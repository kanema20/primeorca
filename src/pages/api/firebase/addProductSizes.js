const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { collection, query, where, onSnapshot, getFirestore, doc, setDoc, addDoc, collectionGroup } = require('firebase/firestore');
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

// const tripleS = require('../mvp/bal-triple-s');
// const dunks = require('../mvp/nike-dunks');
// AJ 4
// const AJ = require('../mvp/jordan4');
// YEEZY
// const yeezy350 = require('../mvp/350');
// const yeezy700 = require('../mvp/700');
// const yeezyslide = require('../mvp/yeezy-slide');

// const cloudburst = require('../mvp/cloudburst'); // PRADA

// const mcqueen = require('../mvp/mcqueen');
// const nb = require('../mvp/nb');
// const bberry = require('../mvp/bberry');
// const hellstr = require('../mvp/hellstr');
// const MonclurrShort  = require('../mvp/moncler-short'); 

// Clothes
// Off white
// const off = require('../mvp/off-white-updated'); 
// const rhude = require('../mvp/rhude')
// const gdpt = require('../mvp/gallery-dept')
// const moncler = require('../mvp/moncler')
// const rick = require('../mvp/rick-owens')

//Accessories
// const lvBelts = require('../mvp/lv-belts');
// const gucciBelts = require('../mvp/gucci-belts');

// chanel
// const cc = require('../mvp/womens/chanel');
// ysl
// const ysl = require('../mvp/womens/ysl');

//lv bags
// const lvBags = require('../mvp/womens/lv-bags');

//gucci bags
// const gucciBags = require('../mvp/womens/gucci-bags');
// const chromehearts = require('../mvp/chrome-hearts');
// const diorTote = require('../mvp/womens/dior-tote');
const denimTears = require('../mvp/denim-tears');

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
// const designersizes_ = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'];
const clothingSizes_ = ['S', 'M', 'L', 'XL', 'XXL'];
const designerBeltSizes_ = ['30', '32', '34', '36', '38', '40']; // TODO: waist?
const waistSizes_ = ['65/26', '73/28', '80/30', '87/33', '93/35', '100/37', '110/40', '120/42'];
const accessorySizes_ = ['Std'];

function getFirebaseConfig() {
    if (Object.values(firebaseConfig).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');

    return firebaseConfig;
}

function createProductObject(productArray, size_) {
    return {
        // id: v4(),
        name: `${productArray.name} - ${size_}`,
        // description: "**IMPORTANT** Clothing sizes are in Asian sizes. It is advised to size up 1 (or 2) sizes from US size depending on bodily girth (ex. US Large = Asian XL). The Prime Orca God Tier Batch - " + productArray.name,
        // description: "**IMPORTANT** For US Size 13, and 14, it is advised to size up (0.5-1 size) if you have wider feet. The Orca Tier Batch - " + productArray.name,
        description: "The Orca Tier Batch - " + productArray.name,
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

function createSubCollection(parentDocId) {
    const parentDocRef = doc(db, 'products', parentDocId);
    const subCollectionRef = collection(parentDocRef, parentDocId + 'size');
    console.log("subcollection created successfully: " + subCollectionRef.id)
    return subCollectionRef;
}

async function addDocToSubCollection(subCollectionRef, docData) {
    const newDocRef = await addDoc(subCollectionRef, docData);
    console.log("newDocRef.id: ", newDocRef.id)
}

initializeApp(getFirebaseConfig());

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

for (const product of denimTears) {
    console.log("product: ", product)
    const subCollection_ = createSubCollection(product._id)
    console.log("subCollection_: ", subCollection_)
    for (const size of clothingSizes_) {
        addDocToSubCollection(subCollection_, createProductObject(product, size))
    }
}

module.exports = {
    auth, db, storage
}