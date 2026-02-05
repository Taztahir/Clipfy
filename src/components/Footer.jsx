import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Hexagon } from "lucide-react";

export default function Footer() {
    const location = useLocation();

    // Hide footer on dashboard, editor, and search/auth pages
    const hiddenPaths = ['/dashboard', '/editor', '/login', '/signup', '/forgot-password'];
    const isHidden = hiddenPaths.some(path => location.pathname.startsWith(path));

    if (isHidden) return null;

    const sections = [
        {
            title: "Product",
            links: [
                { name: "Features", url: "/features" },
                { name: "Pricing", url: "/pricing" },
                { name: "Tutorials", url: "/tutorials" },
                { name: "Templates", url: "/templates" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About", url: "/about" },
                { name: "Blog", url: "/blog" },
                { name: "Careers", url: "/careers" },
                { name: "Contact", url: "/contact" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy", url: "/privacy" },
                { name: "Terms", url: "/terms" },
                { name: "Cookies", url: "/cookies" },
                { name: "License", url: "/license" }
            ]
        }
    ];


    return (
        <footer className="mt-48 border-t-8 border-black bg-white py-24 relative overflow-hidden">
            <div className="brutal-container bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="space-y-8 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black">
                                <Hexagon className="h-6 w-6 text-white fill-white" />
                            </div>
                            <span className="font-black uppercase italic tracking-tighter text-3xl text-black">Clipfy</span>
                        </div>
                        <p className="font-bold text-black/50 leading-relaxed text-base">
                            Making video editing simple and fast for everyone.
                        </p>
                    </div>

                    {sections.map((col, i) => (
                        <div key={i} className="space-y-6">
                            <h4 className="text-lg font-black uppercase italic border-b-2 border-black inline-block pb-1">{col.title}</h4>
                            <ul className="space-y-3">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <Link to={link.url} className="font-bold text-black/40 hover:text-black transition-colors text-xs uppercase tracking-wider">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="font-black uppercase tracking-widest text-sm text-black/20">© 2026 Clipfy. All Rights Reserved.</p>
                    <div className="flex gap-10">
                        {['Twitter', 'Instagram', 'YouTube'].map(social => (
                            <a key={social} href="#" className="font-black uppercase tracking-widest text-sm hover:text-accent transition-colors">{social}</a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Text */}
            <div className="absolute -bottom-10 right-0 font-black text-[15rem] uppercase italic text-black/[0.03] leading-none pointer-events-none select-none">
                CLIPFY
            </div>
        </footer>
    );
}
