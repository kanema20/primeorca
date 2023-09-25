const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
} as const;

type Config = typeof config;

function getFirebaseConfig(): Config {
    if (Object.values(config).some((value) => !value))
        throw new Error('Firebase config is not set or incomplete');

    return config;
}

module.exports = getFirebaseConfig();