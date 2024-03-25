// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA04WThCNR2WTwFL7cxuw-NbagXWWBlvrQ",
  authDomain: "nextflix-e02a7.firebaseapp.com",
  projectId: "nextflix-e02a7",
  storageBucket: "nextflix-e02a7.appspot.com",
  messagingSenderId: "324389106841",
  appId: "1:324389106841:web:60554114ee296d8ad0f408",
  measurementId: "G-G62Z4K0T14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
