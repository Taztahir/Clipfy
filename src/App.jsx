// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}
export default App;