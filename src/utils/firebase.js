import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBwVq5iMYCDsPgkK7t99faWnky40ZhUBNY',
    authDomain: 'ecommerce-62a51.firebaseapp.com',
    projectId: 'ecommerce-62a51',
    storageBucket: 'ecommerce-62a51.appspot.com',
    messagingSenderId: '1046064237505',
    appId: '1:1046064237505:web:507952f5c7584a62ebfd40',
    measurementId: 'G-3X8Q71JVVL',
};

// Initialize Firebase

export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig));
