// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "my-portfolio-ffb58.firebaseapp.com",
  projectId: "my-portfolio-ffb58",
  storageBucket: "my-portfolio-ffb58.appspot.com",
  messagingSenderId: "936268036698",
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: "G-CDE5B20BDF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
