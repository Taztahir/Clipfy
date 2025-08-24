import Logo from "./Logo";
import App from "./App";
import { useState } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import LandingPage from "./LandingPage";
import ClipfyMockup from './assets/image/Clipfy-Adevertisement.png'

function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
    return(
        <div className="dark:text-white dark:bg-[#0F172A] md:px-20 px-5 py-7 ">
            {/* Landing page  */}
            {/* colour  */}
            {/* bg-gradient-to-r from-[#8C52FF] to-[#FF4B8C]  */}
            {/* Navbar  */}
            <div className="flex items-center justify-between ">
                {/* logo */}
                <div>
                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="flex items-center md:space-x-10 space-x-5 ">
                    {/* links  */}
                    <div className="space-x-10 max-lg:hidden font-sans font-semibold macondo-regular">
                        <Link to="/">Home</Link>
                        <Link to="">Features</Link>
                        <Link to="">Pricing</Link>
                        <Link to="/">Blog</Link>
                        
                    </div>
                    {/* Log in buttons  */}
                    <div className="max-sm:hidden ">
                        <Link to="/login">
                        <button class="px-6 py-3 rounded-lg font-semibold text-[#0F172A] 
                                    dark:text-white hover:bg-white hover:text-[#0F172A]
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular dark:border-white border-2">Log In</button>
                                    </Link>
                    </div>
                    {/* Sign up buttons  */}
                    <div>
                        <Link to="/signup">
                        <button class="px-6 py-3 rounded-lg font-semibold text-white 
                                    bg-blue-600
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular   shadow-lg">Sign Up</button>
                                    </Link>
                    </div>
                    {/* Mobile menu icon */}
                    <button onClick={openMenu} className="lg:hidden text-[#0F172A] dark:text-white text-3xl ">
                        &#9776;
                    </button>
                </div>

                {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#0F172A] bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full  dark:bg-[#0F172A] dark:text-white text-[#0F172A] bg-white z-50 transition-all duration-500 ease-in-out transform lg:hidden ${
          menuOpen
            ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
            : '-translate-y-full opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className=" text-3xl border-dotted border-2 px-3 py-1 hover:bg-[#0F172A] hover:text-white transition-all duration-300">
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-5 text-center py-10 px-20 text-lg">
          <Link className="border-b-1 pb-5" to="/">Home</Link>
          <Link className="border-b-1 pb-5" to="">Features</Link>
          <Link className="border-b-1 pb-5" to="">Pricing</Link>
          <Link className="border-b-1 pb-5" to="/">Blog</Link>
          {/* Log in buttons  */}
                    <div className="">
                        <Link to="/login">
                        <button class="w-full py-3 rounded-lg font-semibold text-[#0F172A] 
                                    dark:text-white hover:bg-white hover:text-[#0F172A]
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular dark:border-white border-2">Log In</button>
                                    </Link>
                    </div>
                    {/* Sign up buttons  */}
                    <div>
                        <Link to="/signup">
                        <button class="w-full py-3 rounded-lg font-semibold text-white 
                                    bg-blue-600
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular   shadow-lg">Sign Up</button>
                                    </Link>
                    </div>
        </ul>
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