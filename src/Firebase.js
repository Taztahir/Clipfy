import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithRedirect,
    getRedirectResult
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const loginWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        return res.user;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const loginWithGoogleRedirect = () => {
    return signInWithRedirect(auth, googleProvider);
};

export const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = async (fullName, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: fullName });
    return userCredential.user;
};

export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const logout = () => {
    return signOut(auth);
};

export { auth, db, storage, analytics, onAuthStateChanged, getRedirectResult };


