const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { collection, query, where, onSnapshot, getFirestore, doc, setDoc, addDoc, collectionGroup } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');
const { v4 } = require('uuid');

const kobe5Products = require('../mvp/kobe5');

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
const clothingSizes_ = ['S', 'M', 'L', 'XL', 'XXL'];

function getFirebaseConfig() {
    if (Object.values(firebaseConfig).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');

    return firebaseConfig;
}

function createProductObject(productArray, size_) {
    return {
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

function createSubCollection(parentDocId) {
    const parentDocRef = doc(db, 'products', parentDocId);
    const subCollectionRef = collection(parentDocRef, parentDocId + 'size');
    console.log("subcollection created successfully: " + subCollectionRef.id)
    // const subCollectionRef = collectionGroup(db, 'mySubCollection').where('parentId', '==', parentDoctId);
    return subCollectionRef;
}

async function getSubCollection(parentDocPath) {

}

async function addDocToSubCollection(subCollectionRef, docData) {
    const newDocRef = await addDoc(subCollectionRef, docData);
    console.log("newDocRef.id: ", newDocRef.id)
}
// async function getProductsByCollection(query_) {
//     let collection_ = [];
//     const q = query(collection(db, "products"), where("metadata_.collection", "==", `${query_}`));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             collection_.push(doc.data());
//             // console.log(doc.data().name)
//             console.log("collection_: ", collection_)
//         });
//     });
//     console.log("collection_: ", collection_)
//     return collection_;
// }

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

async function getSizeArray(data) {
    updatedArray = [];
    // Add a new field to each object
    for (let j = 0; j < data.length; j++) {
        let updatedData;
        for (let i = 0; i < sizes_.length; i++) {
            console.log("sizes_[i]: ", sizes_[i])
            updatedData = data[j];
            updatedData._id = v4();
            // updatedData.name = data[j].name + " - " + sizes_[i];
            // updatedData.metadata_.size = sizes_[i];
            updatedArray.push(updatedData);
        }
        console.log("updatedArray: ", updatedArray)
    }
    return updatedArray;
}

async function uploadSubcollection(data) {
    for (let i = 0; i < data.length; i++) {
        const sizeArray = getSizeArray(data[i])
        for (let j = 0; j < sizes_.length; j++) {
            console.log("sizeArray[j]: ", sizeArray[j])
            await setDoc(doc(db, "products", "prime-orca-701ba", data[i]._id, sizeArray[j]._id), sizeArray[j]);
        }
    }
}

async function uploadDataWithSizes(query) {
    const data = await getProductsByCollection(query)
    // for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < sizes_.length; j++) {
    //         const dataSize = data;
    //         dataSize[i]._id = data.id + 1;
    //         dataSize[i].name = `${data[i].name} - ${sizes_[j]}`;
    //         dataSize[i].metadata_.type = null;
    //         console.log(dataSize[i])
    //         await setDoc(doc(db, "products", dataSize[i]._id), dataSize[i]);
    //         // await setDoc(doc(db, "products", data[i]._id), data[i]);

    //         console.log(`${dataSize[i].name} uploaded successfully!`)
    //     }
    // }
}

initializeApp(getFirebaseConfig());

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// upload data
// uploadData(kobe5Products);
// uploadDataWithSizes('kobe-5');
// uploadSubcollection(kobe5Products)
// getSizeArray(kobe5Products)

for (const product of kobe5Products) {
    console.log("product: ", product)
    const subCollection_ = createSubCollection(product._id)
    console.log("subCollection_: ", subCollection_)
    for (const size of sizes_) {
        addDocToSubCollection(subCollection_, createProductObject(product, size))
    }
}

module.exports = {
    auth, db, storage
}