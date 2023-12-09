// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ba41f.firebaseapp.com",
  projectId: "mern-estate-ba41f",
  storageBucket: "mern-estate-ba41f.appspot.com",
  messagingSenderId: "404022781120",
  appId: "1:404022781120:web:8e5bb41e9eff616efd3925"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);