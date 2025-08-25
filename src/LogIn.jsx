import { useState } from "react";
import Logo from "./Logo"
import { auth, provider, appleProvider } from "../Firebase"; // adjust path
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAppleLogin = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      <div className="bg-gray-900/80 backdrop-blur-lg md:px-10 px-5 py-5 rounded-2xl shadow-2xl max-w-md w-full">
      <div className="flex justify-center py-3">
        <Logo/>
      </div>
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>
        {error && (
          <div className="bg-red-600 text-white p-2 rounded-lg mb-4 text-sm text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-white transition text-white hover:dark:text-black font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex-1 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
          >
            Google
          </button>
          <button
            onClick={handleAppleLogin}
            className="flex-1 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Apple
          </button>
        </div>

        <p className="mt-6 text-gray-400 text-sm text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
