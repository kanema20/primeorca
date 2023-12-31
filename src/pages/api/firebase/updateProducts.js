const { where, collection, getFirestore, setDoc, doc, query, onSnapshot, updateDoc, getDocs } = require("firebase/firestore");
const { useFirestoreCollectionMutation, useFirestoreDocumentMutation } = require("@react-query-firebase/firestore");
const { initializeApp } = require('firebase/app');

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

async function updateData(firestore) {
    // for (let i = 0; i < data.length; i++) {
    //     await setDoc(doc(db, "products", data[i]._id), data[i]);
    //     console.log(`${data[i].name} uploaded successfully!`)
    // }
    const querySnapshot = await getDocs(collection(firestore, "products")); //, where("metadata_.collection", "==", "yeezy-700"));

    querySnapshot.forEach((doc) => {
        if (doc.data().metadata_.type === "Sample") {
            console.log("already updated w Sample type")
        } 
        else if (doc.data().metadata_.type === "Clothing Sample") {
            console.log("already updated w Clothing Sample type")
        }
        else if (doc.data().metadata_.type === "Waist Sample") {
            console.log("already updated w Waist Sample type")
        }
        else {
            updateDoc(doc.ref, {
                metadata_: {
                    ...doc.data().metadata_,
                    type: "Accessory Sample" // new fields to update
                    // type: "Waist Sample" // new fields to update
                    // type: "Clothing Sample" // new fields to update
                    // type: "Sample" // new fields to update
                },
                // price: 150,
            })
        }
        console.log(`${doc.data().name}: ${doc.data().price, doc.data().available}`)
    });

    // const subscribe_ = onSnapshot(collection_, (querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         updateDoc(doc, {
    //             available: true,
    //         })
    //         console.log(`${doc.data().name}: ${doc.data().price, doc.data().available}`)
    //     });
    // });

    // const mutation = useFirestoreDocumentMutation(ref, {
    //     available: true,
    //     merge: true,
    // });
}
initializeApp(getFirebaseConfig());
const db = getFirestore();
updateData(db)
