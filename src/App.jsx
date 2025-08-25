// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import Login from "./LogIn";
import './App.css'
import Footer from "./Footer";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}
export default App;