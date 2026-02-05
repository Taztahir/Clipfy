import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from "./components/Toast";
import { AuthProvider } from "./components/AuthContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProjectEditor from "./pages/ProjectEditor";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Tutorials from "./pages/Tutorials";
import Templates from "./pages/Templates";
import Cookies from "./pages/Cookies";
import License from "./pages/License";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/templates" element={<Templates />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/license" element={<License />} />



          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          <Route path="/editor/:id" element={
            <PrivateRoute>
              <ProjectEditor />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </AuthProvider>
    </ToastProvider>
  )
}


export default App
