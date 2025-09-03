import Logo from "./Logo";
import { Sparkles, Captions, LineChart } from "lucide-react";
import App from "./App";
import { useState } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import LandingPage from "./LandingPage";
import Footer from "./Footer";
import ClipfyMockup from './assets/image/Clipfy-Adevertisement.png'

function ContactUs() {
    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: integrate with Firebase or EmailJS
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }; 

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
                        <Link to="/Features">Features</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/blog">Blog</Link>
                        
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
          <Link className="border-b-1 pb-5" to="/pricing">Pricing</Link>
          <Link className="border-b-1 pb-5" to="/blog">Blog</Link>
          <Link className="border-b-1 pb-5" to="/contact">Contact</Link>
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
            <header>
                <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A] text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-[#8C52FF] to-[#FF4B8C] text-white rounded-2xl ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 macondo-bold">Get in Touch</h1>
        <p className="text-lg max-w-2xl mx-auto font-extralight">
          Have questions about Clipfy? We'd love to hear from you. Fill out the form or reach us directly.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Form */}
        <div className="md:col-span-2 bg-white dark:border-2 border-white dark:bg-[#0F172A] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          {submitted ? (
            <p className="text-green-500 font-medium">✅ Thank you! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" action="https://formsubmit.co/clipfysaas@gmail.com" method="POST ">
              <div>
                {/* <label className="block text-sm font-medium mb-1">Name</label> */}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                {/* <label className="block text-sm font-medium mb-1">Email</label> */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                {/* <label className="block text-sm font-medium mb-1">Message</label> */}
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="bg-white dark:bg-gradient-to-r from-[#8C52FF] to-[#FF4B8C] p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
          <div className="macondo-regular">
            <p className="text-lg font-semibold text-gray-900">Email</p>
            <p className="font-medium">support@clipfy.ai</p>
          </div>
          <div className="macondo-regular">
            <p className="text-lg font-semibold text-gray-900">Phone</p>
            <p className="font-medium">+234 906 072 0810</p>
          </div>
          <div className="macondo-regular">
            <p className="text-lg font-semibold text-gray-900">Address</p>
            <p className="font-medium">42b Oworo Road, Oworoshoki, Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
            </header>
            
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
export  default ContactUs;