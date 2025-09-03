import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Logo from "./Logo";

function Footer(){
    return(
        <div className="dark:bg-blue-950 bg-blue-100 rounded-t-2xl macondo-regular ">
        <div className="lg:flex max-lg:space-y-5 max-lg:pt-10 lg:py-20 justify-between px-10 max-sm:px-5">
            <div className=" dark:text-gray-300 space-y-4">
                {/* logo  */}
                <div>
                    <Logo />
                </div>
                <div>
                    {/* text  */}
                    <p className="font-semibold text-xl lg:w-80 ">
                        AI-powered video editing made simple. Create, edit and share videos in minutes with smart  automation.
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
                {/* Quick links  */}
                <div className="dark:text-gray-300 text-lg grid">
                    <h1 className="font-bold text-xl pb-2 dark:text-white">Quick Links</h1>
                    <a href="/" className="hover:text-blue-600 duration-300 ease-in-out ">Home</a>
                    <a href="/Features" className="hover:text-blue-600 duration-300 ease-in-out ">Features</a>
                    <a href="/Pricing" className="hover:text-blue-600 duration-300 ease-in-out " >Pricing</a>
                    <a href="/Blog" className="hover:text-blue-600 duration-300 ease-in-out " >Blog</a>
                    <a href="/contact" className="hover:text-blue-600 duration-300 ease-in-out " >Contact Us</a>

                </div>
                {/* Features  */}
                <div className="dark:text-gray-300 text-lg grid">
                    <h1 className="font-bold text-xl pb-2 dark:text-white">Features</h1>
                    <Link className="hover:text-blue-600 duration-300 ease-in-out" to="/">AI Smart Editing</Link>
                    <Link className="hover:text-blue-600 duration-300 ease-in-out" to="">Auto Captions</Link>
                    <Link className="hover:text-blue-600 duration-300 ease-in-out" to="">Trend Insight</Link>
                    <Link className="hover:text-blue-600 duration-300 ease-in-out" to="/">Collaboration Tools</Link>
                </div>
                {/* Follow us  */}
                <div className="dark:text-white">
                    <h1 className="font-bold text-xl pb-2 dark:text-white">Follow Us</h1>
                    <div className="flex space-x-3">
                        <a href="">
                            <ion-icon name="logo-instagram" className="text-3xl"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon name="logo-youtube" className="text-3xl"></ion-icon>
                        </a>
                        <a href="">
                            <ion-icon name="logo-twitter" className="text-3xl"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        {/* <hr className="mx-20 text-gray-500"/> */}
        <div className="lg:py-7 py-10 text-center dark:text-gray-300">
            <p>© 2025 Clipfy. All right reserved.</p>
        </div>
        </div>
    )
}
export default Footer;