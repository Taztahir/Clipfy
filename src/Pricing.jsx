import Logo from "./Logo";
import { Sparkles, Captions, LineChart } from "lucide-react";
import App from "./App";
import { useState } from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import LandingPage from "./LandingPage";
import Footer from "./Footer";
// import ClipfyMockup from './assets/image/Clipfy-Adevertisement.png'

const plans = [
  {
    id: "free",
    name: "Starter",
    price: "$0",
    description: "Get started with the basics to test the waters.",
    features: [
      "✔ 2 projects",
      "✔ 500MB storage",
      "✔ Basic analytics",
      "✔ Community support",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12/mo",
    description: "Best for freelancers and small teams.",
    features: [
      "✔ 20 projects",
      "✔ 10GB storage",
      "✔ Advanced analytics",
      "✔ Email support",
      "✔ Team collaboration",
      "✔ Priority updates",
    ],
    button: "Choose Pro",
    highlighted: true, // this one stands out
  },
  {
    id: "business",
    name: "Business",
    price: "$39/mo",
    description: "For companies that need scalability.",
    features: [
      "✔ Unlimited projects",
      "✔ Unlimited storage",
      "✔ Dedicated success manager",
      "✔ Advanced integrations",
      "✔ Premium analytics",
      "✔ 24/7 phone & email support",
      "✔ SLA & guaranteed uptime",
    ],
    button: "Upgrade to Business",
    highlighted: false,
  },
];

function Pricing() {
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
                        <Link to="/Features">Features</Link>
                        <Link href="/Pricing">Pricing</Link>
                        <a href="https://www.superpath.co/blog" target="_blank">Blog</a>
                        
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
          <a href="/Pricing" className="border-b-1 pb-5">Pricing</a>
          <a className="border-b-1 pb-5" href="https://www.superpath.co/blog">Blog</a>
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
            
            {/* Hero section  */}
            <section>
                <div className=" py-5">
      <div className=" text-center mb-16">
        <h2 className="lg:text-7xl text-5xl lg:px-20 font-semibold text-[#0F172A] dark:text-white macondo-bold">
          Choose a plan that grows with your creativity and business needs.
        </h2>
        <p className="text-gray-600 dark:text-white font-extralight mt-4 text-2xl lg:px-40">
          Whether you’re just getting started or running a large business,
          we’ve got a plan tailored for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl dark:border-0 border-2 shadow-lg p-8 flex flex-col transition transform hover:scale-105 ${
              plan.highlighted
                ? "bg-gradient-to-r from-[#8C52FF] to-[#FF4B8C] text-black"
                : "bg-white text-gray-900"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mb-2 macondo-bold">{plan.name}</h3>
            <p className="text-lg mb-4 macondo-regular">{plan.description}</p>
            <p className="text-4xl font-extrabold mb-6 antic-didone-bold">{plan.price}</p>

            <ul className="space-y-3 flex-1">
              {plan.features.map((f, i) => (
                <li
                  key={i}
                  className={`flex items-center ${
                    plan.highlighted ? "text-white" : "text-gray-700"
                  }`}
                >
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 py-3 px-6 rounded-xl font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-p-600 hover:bg-gray-100 macondo-bold"
                  : "bg-blue-600 text-white hover:bg-purple-700 macondo-bold"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
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
export  default Pricing;