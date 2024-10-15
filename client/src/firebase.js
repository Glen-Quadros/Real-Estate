// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dbe35.firebaseapp.com",
  projectId: "mern-estate-dbe35",
  storageBucket: "mern-estate-dbe35.appspot.com",
  messagingSenderId: "984156615359",
  appId: "1:984156615359:web:27fffeb31ccbcba6a14c0a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
