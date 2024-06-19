// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3abb1.firebaseapp.com",
  projectId: "mern-blog-3abb1",
  storageBucket: "mern-blog-3abb1.appspot.com",
  messagingSenderId: "226532519687",
  appId: "1:226532519687:web:67b5968b89f91c5a9f1fa2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
