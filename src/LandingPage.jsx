import Logo from "./Logo";
import { Sparkles, Captions, LineChart } from "lucide-react";
import App from "./App";
import { useState } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import LandingPage from "./LandingPage";
import Footer from "./Footer";
import ClipfyMockup from './assets/image/Clipfy-Adevertisement.png'

function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
    return(
        <div className="dark:text-white dark:bg-[#0F172A] md:px-20 px-5">
            {/* Landing page  */}
            {/* colour  */}
            {/* bg-gradient-to-r from-[#8C52FF] to-[#FF4B8C]  */}
            {/* Navbar  */}
            <div className="flex items-center justify-between py-7">
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
                        <Link to="/signup">
                        <button className="px-10 py-3 max-lg:w-full rounded-xl font-semibold text-white hover:-translate-y-1
                                    bg-blue-600 
                                    hover:opacity-90 transition-all duration-300 shadow-lg text-2xl hover:shadow-lg hover:shadow-white">Start Free</button></Link>
                        <button className="bg-white px-10 py-3 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-white text-2xl dark:border-0 border-2 hover:-translate-y-1 transition-all duration-300 ">Watch Demo</button>
                    </div>
                </div>
                <div className="border-15 border-gray-200">
                    <img src={ClipfyMockup} alt="" />
                </div>
            </header>
            <div className="grid max-lg:gap-10 gap-5 lg:grid-cols-3"> 
                <div className="flex items-center gap-5 macondo-regular">
                    {/* icon  */}   
                    <div className="dark:bg-blue-950 bg-blue-100 rounded-lg p-3">
                        <Sparkles className="size-10 text-blue-600 dark:text-white"/>
                    </div>
                    {/* text  */}
                    <div>
                        <h1 className="text-xl font-bold">AI Smart Editing</h1>
                        <p className="text-xs">Transform your raw clips into professional videos in seconds with AI-powered smart editing.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 macondo-regular ">
                    {/* icon  */}
                    <div className="dark:bg-blue-950 bg-blue-100 rounded-lg p-3">
                        <Captions className="size-10 text-blue-600 dark:text-white"/>
                    </div>
                    {/* text  */}
                    <div>
                        <h1 className="text-xl font-bold">Auto Captions</h1>
                        <p className="text-xs">Automatically generate accurate captions for your videos — boost accessibility and engagement instantly.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 macondo-regular">
                    {/* icon  */}
                    <div className="dark:bg-blue-950 bg-blue-100 rounded-lg p-3">
                        <LineChart className="size-10 text-blue-600 dark:text-white"/>
                    </div>
                    {/* text  */}
                    <div>
                        <h1 className="text-xl font-bold">Trend Insight</h1>
                        <p className="text-xs">Stay ahead with AI-driven insights that show what’s trending and help your content go viral.</p>
                    </div>
                </div>
            </div>
            {/* content -creator  */}
            <div className="md:flex max-md:space-y-5 items-center justify-between bg-blue-100 dark:bg-white p-5 my-15 rounded-2xl macondo-regular">
                <div>
                    <h1 className="font-semibold lg:text-xl text-lg dark:text-black">Join thousands of creators transforming their content with Clipfy</h1>
                    <h1 className=" text-gray-400 text-lg">Learn more</h1>
                </div>
                <div>
                    <Link to="/signup">
                        <button className="px-10 py-3 max-lg:w-full rounded-xl font-semibold text-white hover:-translate-y-1
                                    bg-blue-600 
                                    hover:opacity-90 transition-all duration-300 shadow-lg lg:text-2xl text-lg hover:shadow-lg hover:shadow-white">Get Started</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export  default LandingPage;