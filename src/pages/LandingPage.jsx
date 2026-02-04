import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Globe2, Play, Hexagon } from "lucide-react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/Core";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20">
                {/* Hero Section */}
                <section className="brutal-container grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
                    <div className="space-y-8 md:space-y-12 animate-in-fade text-center lg:text-left">
                        <div className="inline-block bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                            Beta 0.2.1
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic">
                            Video <br />
                            <span className="text-accent underline decoration-black decoration-4 md:decoration-6 underline-offset-4 md:underline-offset-6">Editor</span> <br />
                            For You
                        </h1>

                        <p className="text-lg md:text-xl text-black/60 max-w-md font-bold leading-relaxed border-l-4 border-accent pl-6 mx-auto lg:ml-6 lg:mr-0 text-left">
                            Create professional videos in seconds with our simple AI editor. No experience needed. Just drag, drop, and export.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-6">
                            <Link to="/signup" className="w-full sm:w-auto">
                                <Button variant="brutal-primary" size="lg" className="text-lg w-full py-5">
                                    Start Creating <ArrowRight className="h-5 w-5 ml-2" />
                                </Button>
                            </Link>
                            <Button variant="brutal-ghost" className="w-full sm:w-auto font-black tracking-widest text-xs h-14 px-8 italic">
                                See Examples
                            </Button>
                        </div>
                    </div>

                    <div className="relative group perspective-1000 hidden lg:block translate-x-12">
                        {/* Decorative Background Cards */}
                        <div className="absolute inset-0 bg-accent translate-x-6 translate-y-6 border-4 border-black -z-10 group-hover:translate-x-10 group-hover:translate-y-10 transition-all duration-500" />
                        <div className="absolute inset-0 bg-white border-4 border-black -z-20 translate-x-12 translate-y-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]" />

                        <div className="brutal-card aspect-square flex items-center justify-center p-0 relative overflow-hidden bg-white border-4">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[size:60px_60px]" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 bg-black flex items-center justify-center border-4 border-white shadow-[12px_12px_0_0_rgba(112,0,223,1)] transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <Play className="h-12 w-12 text-white fill-white" />
                                </div>
                                <p className="mt-12 font-black uppercase italic tracking-[0.4em] text-black/20 text-sm italic">Video Core Active</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simple Steps */}
                <section className="mt-48 bg-white border-y-8 border-black text-black py-40 -mx-6 md:-mx-12 px-6 md:px-12 relative overflow-hidden">
                    <div className="brutal-container">
                        <div className="mb-24">
                            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                                How it <br />
                                <span className="text-accent underline decoration-black decoration-4 underline-offset-4">Works.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
                            {[
                                { step: "1", title: "Upload", desc: "Drag your video clips and photos onto the timeline." },
                                { step: "2", title: "Edit", desc: "Use our simple tools to cut, trim, and add effects." },
                                { step: "3", title: "Save", desc: "Download your finished video in high quality." }
                            ].map((s, i) => (
                                <div key={i} className="space-y-6 border-l-4 border-black pl-8 group">
                                    <span className="text-4xl font-black italic opacity-10 group-hover:opacity-100 transition-opacity text-accent">0{s.step}</span>
                                    <h3 className="text-2xl font-black uppercase italic">{s.title}</h3>
                                    <p className="font-bold text-black/40 text-lg leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Features */}
                <section className="mt-48 brutal-container">
                    <div className="mb-16 space-y-4">
                        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Everything You Need</h2>
                        <div className="h-2 w-32 bg-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: "Smart Sync", desc: "Automatically match your video to the rhythm of your music.", icon: Zap, color: "bg-blue-400" },
                            { title: "Wide Library", desc: "Thousands of stock videos and sounds at your fingertips.", icon: Globe2, color: "bg-purple-400" },
                            { title: "Fast Export", desc: "Save your videos in record time without losing quality.", icon: ArrowRight, color: "bg-accent" }
                        ].map((item, i) => (
                            <div key={i} className="brutal-card p-10 group bg-white border-4">
                                <div className={`w-12 h-12 ${item.color} border-2 border-black mb-8 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all`}>
                                    <item.icon className="h-6 w-6 text-black" />
                                </div>
                                <h3 className="text-xl font-black uppercase italic mb-4">{item.title}</h3>
                                <p className="text-black/60 text-base leading-relaxed font-bold">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-48 border-t-8 border-black bg-white py-24 relative overflow-hidden">
                <div className="brutal-container">
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

                        {[
                            { title: "Product", links: [{ name: "Features", url: "/features" }, { name: "Pricing", url: "/pricing" }, { name: "Tutorials", url: "#" }, { name: "Templates", url: "#" }] },
                            { title: "Company", links: [{ name: "About", url: "#" }, { name: "Blog", url: "/blog" }, { name: "Careers", url: "#" }, { name: "Contact", url: "/contact" }] },
                            { title: "Legal", links: [{ name: "Privacy", url: "#" }, { name: "Terms", url: "#" }, { name: "Cookies", url: "#" }, { name: "License", url: "#" }] }
                        ].map((col, i) => (
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

            {/* Custom Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .perspective-1000 {
                    perspective: 1000px;
                }
            ` }} />
        </div>
    );
}
