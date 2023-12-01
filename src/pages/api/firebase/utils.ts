import {
    doc,
    query,
    where,
    limit,
    setDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    increment,
    writeBatch,
    arrayUnion,
    arrayRemove,
    serverTimestamp,
    // getCountFromServer
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from './app';
import type { WithFieldValue, Query } from 'firebase/firestore';
