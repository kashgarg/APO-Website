// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChVzAsntD6DeBuLfBFvjSkfVLMqXral70",
  authDomain: "apo-website-18fe8.firebaseapp.com",
  projectId: "apo-website-18fe8",
  storageBucket: "apo-website-18fe8.appspot.com",
  messagingSenderId: "272508068304",
  appId: "1:272508068304:web:c84b748a7d2ce7821a99d5",
  measurementId: "G-B0Y6W5ECRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);