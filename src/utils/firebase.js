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
// const firebaseConfig = {
//     apiKey: 'AIzaSyBwVq5iMYCDsPgkK7t99faWnky40ZhUBNY',
//     authDomain: 'ecommerce-62a51.firebaseapp.com',
//     projectId: 'ecommerce-62a51',
//     storageBucket: 'ecommerce-62a51.appspot.com',
//     messagingSenderId: '1046064237505',
//     appId: '1:1046064237505:web:507952f5c7584a62ebfd40',
//     measurementId: 'G-3X8Q71JVVL',
// };
const firebaseConfig = {
    apiKey: 'AIzaSyB19gADDIWcHA6njom8DMrpBzvo-0AkxCU',
    authDomain: 'datn-dhbkhn.firebaseapp.com',
    databaseURL: 'https://datn-dhbkhn-default-rtdb.firebaseio.com',
    projectId: 'datn-dhbkhn',
    storageBucket: 'datn-dhbkhn.appspot.com',
    messagingSenderId: '274502145784',
    appId: '1:274502145784:web:d3f42f1e07cb58ba464d0d',
    measurementId: 'G-H9415BJH42',
};

// Initialize Firebase

// export default firebase;
// export const authentication = getAuth(initializeApp(firebaseConfig));
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
