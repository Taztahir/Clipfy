import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hexagon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Core";

import { useAuth } from "./AuthContext";

export default function Navbar() {
    const { currentUser } = useAuth();
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    if (isAuthPage) return null;

    return (
        <nav className="fixed top-0 md:top-8 left-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full md:w-auto md:min-w-[800px] md:max-w-[95vw]">
            <div className="px-6 md:px-8 py-5 flex items-center justify-between bg-white border-b-4 md:border-4 border-black shadow-none md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                    <div className="w-8 h-8 bg-black flex items-center justify-center border-2 border-black transition-transform group-hover:rotate-12">
                        <Hexagon className="h-4 w-4 text-white fill-white" />
                    </div>
                    <span className="font-black uppercase italic tracking-tighter text-xl text-black">Clipfy</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-black/60">
                    <Link to="/features" className="hover:text-black transition-colors">Features</Link>
                    <Link to="/pricing" className="hover:text-black transition-colors">Pricing</Link>
                    <Link to="/blog" className="hover:text-black transition-colors">Blog</Link>
                    <div className="h-4 w-px bg-black/10" />
                    {!currentUser ? (
                        <Link to="/login" className="hover:text-black transition-colors font-black">Sign In</Link>
                    ) : (
                        <Link to="/dashboard" className="hover:text-black transition-colors font-black">Dashboard</Link>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {!currentUser ? (
                        <Link to="/signup">
                            <Button variant="brutal-primary" size="sm" className="rounded-none font-black text-[9px] h-9 px-6 hidden sm:flex">
                                Get Started
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/dashboard">
                            <Button variant="brutal-primary" size="sm" className="rounded-none font-black text-[9px] h-9 px-6 hidden sm:flex">
                                Go to Workspace
                            </Button>
                        </Link>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden w-11 h-11 border-4 border-black bg-white flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="space-y-1.5">
                            <div className="w-6 h-1 bg-black"></div>
                            <div className="w-6 h-1 bg-black"></div>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
