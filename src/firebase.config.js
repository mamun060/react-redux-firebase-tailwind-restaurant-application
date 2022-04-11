import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAg7tPek21dvGau1L5q6hbhChTt1AanKcs",
    authDomain: "restaurantapp-a6f4a.firebaseapp.com",
    databaseURL: "https://restaurantapp-a6f4a-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-a6f4a",
    storageBucket: "restaurantapp-a6f4a.appspot.com",
    messagingSenderId: "701920525412",
    appId: "1:701920525412:web:e5d2fbd5b50a95ba01f371"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage} ;
