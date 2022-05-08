// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5qNIFaAHxQydTRgXLXjxtwBtrI_0Iego",
    authDomain: "tutirial-43e7b.firebaseapp.com",
    projectId: "tutirial-43e7b",
    storageBucket: "tutirial-43e7b.appspot.com",
    messagingSenderId: "962604154802",
    appId: "1:962604154802:web:53360d382c89508d7baeab",
    measurementId: "G-JN8W2RJTCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)