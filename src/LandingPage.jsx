import Logo from "./Logo";
import App from "./App";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import LandingPage from "./LandingPage";
import ClipfyMockup from './assets/image/Clipfy-Adevertisement.png'

function LandingPage() {
    return(
        <div className="dark:text-white md:px-20 px-5 py-7 ">
            {/* Landing page  */}
            {/* colour  */}
            {/* bg-gradient-to-r from-[#8C52FF] to-[#FF4B8C]  */}
            {/* Navbar  */}
            <div className="flex items-center justify-between">
                {/* logo */}
                <div>
                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="flex items-center space-x-10 ">
                    {/* links  */}
                    <div className="space-x-10 max-lg:hidden font-sans font-semibold macondo-regular">
                        <Link to="/">Home</Link>
                        <Link to="">Features</Link>
                        <Link to="">Pricing</Link>
                        <Link to="/">Blog</Link>
                        
                    </div>
                    {/* Log in buttons  */}
                    <div className="max-sm:hidden ">
                        <Link to="/SignUp">
                        <button class="px-6 py-3 rounded-lg font-semibold text-black 
                                    dark:text-white hover:bg-white hover:text-black
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular dark:border-white border-2">Log In</button>
                                    </Link>
                    </div>
                    {/* Sign up buttons  */}
                    <div>
                        <Link to="/SignUp">
                        <button class="px-6 py-3 rounded-lg font-semibold text-white 
                                    bg-blue-600
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular shadow-lg">Sign Up</button>
                                    </Link>
                    </div>
                </div>
                
            </div>
            {/* header  */}
            <header className="my-20 grid lg:grid-cols-2 gap-10">
                {/* text  */}
                <div className="space-y-6">
                    <h1 className="lg:text-6xl text-6xl font-sans font-bold max-lg:text-center macondo-regular">Create. Edit. <br className="max-lg:hidden"/>Grow, With Clipfy</h1>
                    <div className="hidden border-20">
                        <img src={ClipfyMockup} alt="" />
                    </div>
                    <p className="text-2xl max-lg:text-center macondo-regular">
                        The <b>all-in-one</b> platform that streamlines <br className="max-md:hidden"/>content creation, editing, and growth:
                    </p>
                    <div className="lg:space-x-5 space-y-5 max-lg:flex max-lg:flex-col macondo-regular">
                        <button className="px-10 py-3 rounded-xl font-semibold text-white hover:-translate-y-1
                                    bg-blue-600 
                                    hover:opacity-90 transition-all duration-300 shadow-lg text-2xl hover:shadow-lg hover:shadow-white">Start Free</button>
                        <button className="bg-white px-10 py-3 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-white text-2xl dark:border-0 border-2 hover:-translate-y-1 transition-all duration-300 ">Watch Demo</button>
                    </div>
                </div>
                <div className="border-15 border-gray-200">
                    <img src={ClipfyMockup} alt="" />
                </div>
            </header>
        </div>
    )
}
export  default LandingPage;