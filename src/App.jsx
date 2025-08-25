// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import SignUp from "./Signup";
import Login from "./Login";
import './App.css'
import Footer from "./Footer";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>

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