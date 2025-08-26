// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl8MHO0-Or3PUD1y0z5XAS926fjAIhiUI",
  authDomain: "clipfy-8eeaf.firebaseapp.com",
  projectId: "clipfy-8eeaf",
  storageBucket: "clipfy-8eeaf.firebasestorage.app",
  messagingSenderId: "825778821686",
  appId: "1:825778821686:web:cb0c96d4f623b7243b9697",
  measurementId: "G-3JQRL9VZ2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);   

// Providers
const provider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com"); // 👈 Apple provider

export { auth, provider, appleProvider };
