// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcrRZLDK4zvT8D-C_PMU_mnFCbra8tYiM",
  authDomain: "nextflix-20600.firebaseapp.com",
  projectId: "nextflix-20600",
  storageBucket: "nextflix-20600.appspot.com",
  messagingSenderId: "917695886379",
  appId: "1:917695886379:web:58780b7b41e3a7b62e266e",
  measurementId: "G-1KHTBJ21GX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
