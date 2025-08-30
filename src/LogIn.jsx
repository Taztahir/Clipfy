import { useState } from "react";
import Logo from "./Logo"
import {Link} from "react-router-dom";
import { auth, provider, appleProvider } from "../Firebase"; // adjust path
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Google from "./assets/Google_Icon.png"
import Apple from "./assets/Iphone.png"

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // success message

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
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

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email first.");
      return;
    }
    setError("");
    setMessage("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      <div className="dark:bg-gray-900/80 bg-white backdrop-blur-lg md:px-10 px-5 py-5 md:py-7 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="flex justify-center py-3">
          {/* <Logo/> */}
        </div>
        <h2 className="text-3xl font-bold dark:text-white text-center mb-6">Log In</h2>

        {error && (
          <div className="bg-red-600 text-white p-2 rounded-lg mb-4 text-sm text-center">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-600 text-white p-2 rounded-lg mb-4 text-sm text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl dark:bg-gray-800 bg-gray-200 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl dark:bg-gray-800 bg-gray-200 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Reset password link */}
          <div className="text-right">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover: hover:dark:bg-white transition text-white hover:dark:text-black font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="grid gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex space-x-5 justify-center items-center py-3 rounded-xl dark:bg-white bg-gray-200 text-gray-900 font-medium hover:bg-gray-100 transition"
          >
              <div>
                <img src={Google} alt="" className="size-7"/>
              </div>
              <div>
                Google
              </div>
          </button>
          <button
            onClick={handleAppleLogin}
            className="flex space-x-5 justify-center items-center py-3 rounded-xl dark:bg-white bg-gray-200 text-gray-900 font-medium hover:bg-gray-100 transition "
          >
            <div>
              <img src={Apple} alt="" className="size-7"/>
              
            </div>
            <div>
              Apple
            </div>
          </button>
        </div>

        <p className="mt-6 text-gray-400 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
