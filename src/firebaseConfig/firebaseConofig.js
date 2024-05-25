// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirgFGHPgWjWNGktNcRluNwlChP5bkBiU",
  authDomain: "project-stride-7d124.firebaseapp.com",
  projectId: "project-stride-7d124",
  storageBucket: "project-stride-7d124.appspot.com",
  messagingSenderId: "2132100599",
  appId: "1:2132100599:web:d32996e963a4a88049daf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
