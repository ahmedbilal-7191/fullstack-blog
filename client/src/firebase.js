// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ddf23.firebaseapp.com",
  projectId: "mern-blog-ddf23",
  storageBucket: "mern-blog-ddf23.appspot.com",
  messagingSenderId: "920669369897",
  appId: "1:920669369897:web:42a30ce111c30afed04e38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
