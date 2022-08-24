// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjLKwGY07H64Jgmj554MIuXtfOjWKy63U",
  authDomain: "mohammed-salman-ali-portfolio.firebaseapp.com",
  projectId: "mohammed-salman-ali-portfolio",
  storageBucket: "mohammed-salman-ali-portfolio.appspot.com",
  messagingSenderId: "416268587653",
  appId: "1:416268587653:web:727728c6527cde2c218fec",
  measurementId: "G-SZVEM6QW7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);