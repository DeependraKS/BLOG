// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhved54__awTnxh9vI3Xw7azYvGp0eUHE",
  authDomain: "blog-website-9bb44.firebaseapp.com",
  projectId: "blog-website-9bb44",
  storageBucket: "blog-website-9bb44.firebasestorage.app",
  messagingSenderId: "719745492843",
  appId: "1:719745492843:web:48b5dd88604b489d03ce2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}