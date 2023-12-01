import dotenv from 'dotenv';
dotenv.config();

// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DB_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
// } as const;

const config = {
    apiKey: "AIzaSyB7H6KvluxP9pqi2raDp1e6tfcIIUQhsR4",
    authDomain: "prime-orca-701ba.firebaseapp.com",
    databaseUrl: "https://prime-orca-701ba-default-rtdb.firebaseio.com/",
    projectId: "prime-orca-701ba",
    storageBucket: "prime-orca-701ba.appspot.com",
    messagingSenderId: "626567034901",
    appId: "1:626567034901:web:86ad8946dadb882304f61c",
    // measurementId: "G-K5WRK3SXRD"
} as const;


type Config = typeof config;

export function getFirebaseConfig(): Config {
    if (Object.values(config).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');

    return config;
}