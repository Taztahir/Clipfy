import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Core";

import { useAuth } from "./AuthContext";

export default function Navbar() {
    const { currentUser } = useAuth();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isSpecialPage = location.pathname.startsWith('/login') ||
        location.pathname.startsWith('/signup') ||
        location.pathname.startsWith('/forgot-password') ||
        location.pathname.startsWith('/dashboard') ||
        location.pathname.startsWith('/editor');

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    if (isSpecialPage) return null;


    const navLinks = [
        { name: "Features", url: "/features" },
        { name: "Pricing", url: "/pricing" },
        { name: "Blog", url: "/blog" },
    ];

    return (
        <nav className="fixed top-0 md:top-8 left-0 md:left-1/2 md:-translate-x-1/2 z-[100] w-full md:w-auto md:min-w-[800px] md:max-w-[95vw]">
            <div className="px-6 md:px-8 py-5 flex items-center justify-between bg-white border-b-4 md:border-4 border-black relative z-[110]">
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <div className="w-8 h-8 bg-black flex items-center justify-center border-2 border-black transition-transform group-hover:rotate-12">
                        <Hexagon className="h-4 w-4 text-white fill-white" />
                    </div>
                    <span className="font-black uppercase italic tracking-tighter text-xl text-black">Clipfy</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-black/60">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.url} className="hover:text-black transition-colors">{link.name}</Link>
                    ))}
                    <div className="h-4 w-px bg-black/10" />
                    {!currentUser ? (
                        <Link to="/login" className="hover:text-black transition-colors font-black">Sign In</Link>
                    ) : (
                        <Link to="/dashboard" className="hover:text-black transition-colors font-black">Dashboard</Link>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {!currentUser ? (
                        <Link to="/signup" className="hidden sm:block">
                            <Button variant="brutal-primary" size="sm" className="rounded-none font-black text-[9px] h-9 px-6">
                                Get Started
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/dashboard" className="hidden sm:block">
                            <Button variant="brutal-primary" size="sm" className="rounded-none font-black text-[9px] h-9 px-6">
                                Go to Workspace
                            </Button>
                        </Link>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-11 h-11 border-4 border-black bg-white flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        <div className="space-y-1.5 relative">
                            <div className={cn("w-6 h-1 bg-black transition-all duration-300", isMenuOpen && "rotate-45 translate-y-2.5")}></div>
                            <div className={cn("w-6 h-1 bg-black transition-all duration-300", isMenuOpen && "opacity-0")}></div>
                            <div className={cn("w-6 h-1 bg-black transition-all duration-300", isMenuOpen && "-rotate-45 -translate-y-2.5")}></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-white z-[100] transition-transform duration-500 md:hidden flex flex-col pt-32 px-10 border-b-8 border-black",
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
            )}>
                <div className="flex flex-col gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.url}
                            className="text-4xl font-black uppercase italic tracking-tighter hover:text-accent transition-colors"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-2 w-20 bg-black" />
                    {!currentUser ? (
                        <>
                            <Link to="/login" className="text-2xl font-black uppercase italic flex items-center gap-4">
                                Sign In <div className="flex-1 h-px bg-black/10" />
                            </Link>
                            <Link to="/signup">
                                <Button variant="brutal-primary" size="lg" className="w-full text-xl py-6">
                                    Get Started
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <Link to="/dashboard">
                            <Button variant="brutal-primary" size="lg" className="w-full text-xl py-6">
                                Dashboard
                            </Button>
                        </Link>
                    )}
                </div>

                <div className="mt-auto mb-16 space-y-4">
                    <p className="font-black uppercase tracking-[0.3em] text-[10px] text-black/20 text-center">Clipfy Neural Engine v0.2.1</p>
                </div>
            </div>
        </nav>
    );
}

