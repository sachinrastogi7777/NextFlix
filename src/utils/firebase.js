// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAflCk3kteeaGFp3FPLy1LwMRYUQb2wI74",
  authDomain: "nextflix-c743c.firebaseapp.com",
  projectId: "nextflix-c743c",
  storageBucket: "nextflix-c743c.appspot.com",
  messagingSenderId: "147048661809",
  appId: "1:147048661809:web:11f4d109d482c3157a2610",
  measurementId: "G-365T5WDFN5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
