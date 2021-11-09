import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGnJSdVlFuI1Fpns87Ch2bM6NffS-1bXE",
    authDomain: "react-redux-firebase-log-1522f.firebaseapp.com",
    projectId: "react-redux-firebase-log-1522f",
    storageBucket: "react-redux-firebase-log-1522f.appspot.com",
    messagingSenderId: "782571761153",
    appId: "1:782571761153:web:8a5533fa415bb8bbe09a00"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);