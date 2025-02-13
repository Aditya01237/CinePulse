// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNC9tcddJUwA4ia3C9imzuDQUNGlT_xe4",
  authDomain: "netflixgpt-d305b.firebaseapp.com",
  projectId: "netflixgpt-d305b",
  storageBucket: "netflixgpt-d305b.firebasestorage.app",
  messagingSenderId: "994527440304",
  appId: "1:994527440304:web:aa6dd1730e64fc05b8ba75",
  measurementId: "G-RSJ5WVND28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();