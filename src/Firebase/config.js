// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNJOR24Oc6nUfMqkFp-STz89_hh-DvSSs",
  authDomain: "nike-8bb69.firebaseapp.com",
  projectId: "nike-8bb69",
  storageBucket: "nike-8bb69.appspot.com",
  messagingSenderId: "235157947077",
  appId: "1:235157947077:web:95279f35db1d64a1e6a6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app