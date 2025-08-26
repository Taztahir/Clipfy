// src/Signup.jsx
import React, { useEffect, useState } from "react";
import { auth, db, provider, appleProvider } from "../Firebase"; // <- keep exact casing to match your file
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage]   = useState(""); // success or error text

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: fullName });

      // Save profile to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName,
        email,
        createdAt: serverTimestamp(),
        provider: "password",
      });

      setMessage("Signup successful! Redirecting to your dashboard…");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setMessage(err.message || "Signup failed.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: user.displayName || "",
        email: user.email || "",
        createdAt: serverTimestamp(),
        provider: "google",
      }, { merge: true });
      setMessage("Signup with Google successful! Redirecting…");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setMessage(err.message || "Google signup failed.");
    }
  };

  const handleAppleSignup = async () => {
    try {
      const { user } = await signInWithPopup(auth, appleProvider);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: user.displayName || "",
        email: user.email || "",
        createdAt: serverTimestamp(),
        provider: "apple",
      }, { merge: true });
      setMessage("Signup with Apple successful! Redirecting…");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setMessage(err.message || "Apple signup failed.");
    }
  };

  // Auto-clear banner after 4s
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(""), 4000);
    return () => clearTimeout(t);
  }, [message]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create your Clipfy account</h2>

        {message && (
          <div
            className={`mb-5 rounded-lg p-3 text-sm text-center ${
              message.toLowerCase().includes("successful")
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleEmailSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleSignup}
            className="flex-1 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            Google
          </button>
          <button
            onClick={handleAppleSignup}
            className="flex-1 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Apple
          </button>
        </div>

        <p className="mt-6 text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
