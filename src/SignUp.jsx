// Signup.jsx
import React, { useState } from "react";
import { auth, provider, appleProvider } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save full name in Firebase profile
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      // Redirect after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  const signUpWithApple = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="w-full max-w-md p-8 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Your Clipfy Account
        </h1>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={signUpWithGoogle}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign Up with Google
          </button>

          <button
            onClick={signUpWithApple}
            className="w-full py-3 rounded-xl bg-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475618/apple.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            Sign Up with Apple
          </button>
        </div>

        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
