import React, { createContext, useContext, useState, useEffect } from "react";
import {
    auth,
    onAuthStateChanged,
    loginWithGoogle,
    loginWithGoogleRedirect,
    loginWithEmail,
    signUpWithEmail,
    logout,
    resetPassword,
    getRedirectResult
} from "../Firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        // Check for redirect result (mobile auth)
        getRedirectResult(auth).catch((error) => {
            console.error("Redirect Auth Error", error);
        });

        return unsubscribe;
    }, []);

    const signup = async (fullName, email, password) => {
        return signUpWithEmail(fullName, email, password);
    };

    const login = (email, password) => {
        return loginWithEmail(email, password);
    };

    const loginWithGoogleProvider = () => {
        return loginWithGoogle();
    };

    const loginWithGoogleRedirectProvider = () => {
        return loginWithGoogleRedirect();
    };

    const sendPasswordReset = (email) => {
        return resetPassword(email);
    };

    const updateUserProfile = async (updates) => {
        const { updateProfile } = await import("firebase/auth");
        await updateProfile(auth.currentUser, updates);
        // Force state refresh by cloning user object
        setCurrentUser({ ...auth.currentUser });
    };

    const signout = () => {
        return logout();
    };


    const value = {
        currentUser,
        signup,
        login,
        loginWithGoogle: loginWithGoogleProvider,
        loginWithGoogleRedirect: loginWithGoogleRedirectProvider,
        logout: signout,
        sendPasswordReset,
        updateUserProfile,
        loading
    };



    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
