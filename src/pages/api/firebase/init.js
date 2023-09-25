const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');
// const { getFirebaseConfig } = require('./config');
// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DB_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
// };

// const kobe5Products = require('../mvp/kobe5');
// const kobe6Products = require('../mvp/kobe6');
// const kobe8Products = require('../mvp/kobe8');
// const balenci = require('../mvp/balenciaga');
// const kobeoffwhite = require('../mvp/kobe-off-white');
// const cloudburst = require('../mvp/cloudburst');
// const eybl = require('../mvp/eybl');
const gtcuts = require('../mvp/gt-cuts');

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
    // .then(() => {
    //     console.log("JSON data uploaded successfully!");
    // })
    // .catch(error => {
    //     console.error("Error uploading JSON data:", error);
    // });
    // return res;
}

async function uploadDataWithSizes(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < sizes_.length; j++) {
            const name_ = data[i].name;
            data[i].name = `${data[i].name} - ${sizes_[j]}`;
            await setDoc(doc(db, "products", `${data[i]._id}`), data[i]);
            console.log(`${data[i].name} uploaded successfully!`)
            data[i].name = name_;
        }
    }
}

initializeApp(getFirebaseConfig());

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// upload data
// uploadData(eybl);
uploadDataWithSizes(gtcuts);

module.exports = {
    auth, db, storage
}