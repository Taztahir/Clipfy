import Logo from "./Logo";
import { Sparkles, Captions, LineChart } from "lucide-react";
import App from "./App";
import { useState } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import LandingPage from "./LandingPage";
import Footer from "./Footer";
import ClipfyMockup from './assets/image/Clipfy-Adevertisement.png'
import Folder from './assets/folder.png'
import folderLight from './assets/folder-light.png'
import secure from './assets/password.png'
import secureLight from './assets/password-light.png'
import cloud from './assets/cloud.png'
import cloudLight from './assets/cloud-light.png'
import palette from './assets/color-palette.png'
import paletteLight from './assets/palette-light.png'
import responsiveness from './assets/responsive-design.png'
import responsivenessLight from './assets/responsive-design-light.png'
import flash from './assets/flash.png'
import flashLight from './assets/flash-light.png'

function Features() {
    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
    return(
        <div className="dark:text-white dark:bg-[#0F172a] md:px-20 px-5">
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
                        <Link to="/features">Features</Link>
                        <Link to="">Pricing</Link>
                        <Link to="/">Blog</Link>
                        
                    </div>
                    {/* Log in buttons  */}
                    <div className="max-sm:hidden ">
                        <Link to="/login">
                        <button className="px-6 py-3 rounded-lg font-semibold text-[#0F172A] 
                                    dark:text-white hover:bg-white hover:text-[#0F172A]
                                    hover:opacity-90 transition-all duration-300 font-sans macondo-regular dark:border-white border-2">Log In</button>
                                    </Link>
                    </div>
                    {/* Sign up buttons  */}
                    <div>
                        <Link to="/signup">
                        <button className="px-6 py-3 rounded-lg font-semibold text-white 
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
          <Link className="border-b-1 pb-5" to="/features">Features</Link>
          <Link className="border-b-1 pb-5" to="">Pricing</Link>
          <Link className="border-b-1 pb-5" to="">Blog</Link>
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
            <header className="my-10 lg:px-20">
                 <h1 className="md:text-7xl  text-6xl macondo-regular text-center">Discover the tools that make Clipfy smarter, faster, and easier to use.</h1>
                 <p className="md:text-2xl text-center py-2 font-extralight px-5 lg:px-20">From AI-powered editing to seamless collaboration, Clipfy gives you everything you need to create with confidence</p>
            </header>
            {/* features  */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="text-center border-2 py-10 rounded-2xl bg-gray-100 dark:bg-[#0F172A] shadow-2xl ease-in-out duration-200">
                    {/* image  */}
                    <div className="flex justify-center py-2">
                        <img src={Folder} alt="" className="size-40 dark:hidden"/>
                        <img src={folderLight} alt="" className="size-40 hidden dark:block"/>
                    </div>
                    {/* heading  */}
                    <div className="py-1">
                        <h1 className="text-[#0F172A] dark:text-white font-bold text-3xl">Easy File Sharing</h1>
                    </div>
                    {/* description  */}
                    <div>
                        <p className="text-xl font-extralight">Instantly upload and <br /> share files securely</p>
                    </div>
                </div>
                <div className="text-center border-2 py-10 rounded-2xl bg-gray-100 dark:bg-[#0F172A] shadow-2xl ease-in-out duration-200">
                    {/* image  */}
                    <div className="flex justify-center py-2">
                        <img src={secure} alt="" className="size-40 dark:hidden"/>
                        <img src={secureLight} alt="" className="size-40 hidden dark:block"/>
                    </div>
                    {/* heading  */}
                    <div className="py-1">
                        <h1 className="text-[#0F172A] dark:text-white font-bold text-3xl">Easy File Sharing</h1>
                    </div>
                    {/* description  */}
                    <div>
                        <p className="text-xl font-extralight">Instantly upload and <br /> share files securely</p>
                    </div>
                </div>
                <div className="text-center border-2 py-10 rounded-2xl bg-gray-100 dark:bg-[#0F172A] shadow-2xl ease-in-out duration-200">
                    {/* image  */}
                    <div className="flex justify-center py-2">
                        <img src={palette} alt="" className="size-40 dark:hidden"/>
                        <img src={paletteLight} alt="" className="size-40 hidden dark:block"/>
                    </div>
                    {/* heading  */}
                    <div className="py-1">
                        <h1 className="text-[#0F172A] dark:text-white font-bold text-3xl">Easy File Sharing</h1>
                    </div>
                    {/* description  */}
                    <div>
                        <p className="text-xl font-extralight">Instantly upload and <br /> share files securely</p>
                    </div>
                </div>
                <div className="text-center border-2 py-10 rounded-2xl bg-gray-100 dark:bg-[#0F172A] shadow-2xl ease-in-out duration-200">
                    {/* image  */}
                    <div className="flex justify-center py-2">
                        <img src={cloud} alt="" className="size-40 dark:hidden"/>
                        <img src={cloudLight} alt="" className="size-40 hidden dark:block"/>
                    </div>
                    {/* heading  */}
                    <div className="py-1">
                        <h1 className="text-[#0F172A] dark:text-white font-bold text-3xl">Easy File Sharing</h1>
                    </div>
                    {/* description  */}
                    <div>
                        <p className="text-xl font-extralight">Instantly upload and <br /> share files securely</p>
                    </div>
                </div>
                <div className="text-center border-2 py-10 rounded-2xl bg-gray-100 dark:bg-[#0F172A] shadow-2xl ease-in-out duration-200">
                    {/* image  */}
                    <div className="flex justify-center py-2">
                        <img src={responsiveness} alt="" className="size-40 dark:hidden"/>
                        <img src={responsivenessLight} alt="" className="size-40 hidden dark:block"/>
                    </div>
                    {/* heading  */}
                    <div className="py-1">
                        <h1 className="text-[#0F172A] dark:text-white font-bold text-3xl">Easy File Sharing</h1>
                    </div>
                    {/* description  */}
                    <div>
                        <p className="text-xl font-extralight">Instantly upload and <br /> share files securely</p>
                    </div>
                </div>
                <div className="text-center border-2 py-10 rounded-2xl bg-gray-100 dark:bg-[#0F172A] shadow-2xl ease-in-out duration-200">
                    {/* image  */}
                    <div className="flex justify-center py-2">
                        <img src={flash} alt="" className="size-40 dark:hidden"/>
                        <img src={flashLight} alt="" className="size-40 hidden dark:block"/>
                    </div>
                    {/* heading  */}
                    <div className="py-1">
                        <h1 className="text-[#0F172A] dark:text-white font-bold text-3xl">Easy File Sharing</h1>
                    </div>
                    {/* description  */}
                    <div>
                        <p className="text-xl font-extralight">Instantly upload and <br /> share files securely</p>
                    </div>
                </div>
            </section>
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
export  default Features;