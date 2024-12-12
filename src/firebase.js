// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-1bd71.firebaseapp.com",
  projectId: "next-estate-1bd71",
  storageBucket: "next-estate-1bd71.firebasestorage.app",
  messagingSenderId: "833980546263",
  appId: "1:833980546263:web:68ca07e2ab54927fad0492"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);