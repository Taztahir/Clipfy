// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./LogIn.jsx";
import Signup from "./SignUp.jsx";
import Dashboard from "./Dashboard.jsx";
import LandingPage from "./LandingPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Features from "./Features.jsx";
import Pricing from "./Pricing.jsx";
import Blog from "./Blog.jsx";
import ContactUs from './ContactUs.jsx'

import './App.css'


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        

         {/* Protected Route */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  )
}
export default App;