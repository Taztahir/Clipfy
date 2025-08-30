// src/Signup.jsx
import React, { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { auth, db, provider, appleProvider } from "../Firebase"; 
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Google from "./assets/Google_Icon.png";
import Apple from "./assets/Iphone.png";
import { Eye, EyeOff } from "lucide-react"; // 👈 eye icons

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle state
  const [message, setMessage]   = useState(""); 

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: fullName });

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

  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(""), 4000);
    return () => clearTimeout(t);
  }, [message]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      <div className="dark:bg-[#0F172A] bg-white backdrop-blur-lg md:py-7 md:px-10 p-5 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="flex justify-center mb-2">
          {/* <Logo/> */}
        </div>
        <h2 className="text-3xl font-bold dark:text-white text-center mb-6">Create An Account</h2>

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
            className="w-full px-4 py-3 rounded-xl dark:bg-gray-800 bg-gray-200 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl dark:bg-gray-800 bg-gray-200 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
          
          {/* 👇 Password with show/hide toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl dark:bg-gray-800 bg-gray-200 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-600 transition text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="grid gap-4">
          <button
            onClick={handleGoogleSignup}
            className="flex w-full justify-center space-x-5 py-3 rounded-xl dark:bg-white bg-gray-200 text-gray-900 font-medium items-center hover:bg-gray-100 transition"
          >
            <img src={Google} alt="" className="size-7"/>
            <span>Google</span>
          </button>
          <button
            onClick={handleAppleSignup}
            className="flex items-center justify-center space-x-5 py-3 rounded-xl dark:bg-white text-gray-900 hover:bg-gray-100 bg-gray-200 font-medium transition"
          >
            <img src={Apple} alt="" className="size-7"/>
            <span>Apple</span>
          </button>
        </div>

        <p className="mt-6 text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
