import React from "react";
import Navbar from "../components/Navbar";
import { BrainCircuit, Zap, Layers, Share2, Wand2, Cpu, ArrowRight } from "lucide-react";

export default function Features() {
    const features = [
        { icon: BrainCircuit, title: "AI Sequencing", description: "Our AI automatically arranges your clips to tell the best story effortlessly." },
        { icon: Zap, title: "Instant Playback", description: "Edit and preview your changes in real-time with zero lag." },
        { icon: Layers, title: "Simple Layers", description: "Easily manage text, music, and video layers with a clean, intuitive timeline." },
        { icon: Share2, title: "One-Click Publish", description: "Post directly to TikTok, Reels, and YouTube Shorts at the same time." },
        { icon: Wand2, title: "AI Enhancement", description: "Improve video quality and lighting with a single click using smart AI tools." },
        { icon: Cpu, title: "Fast Export", description: "Get your final video ready in seconds, optimized for every platform." }
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <Navbar />

            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <header className="mb-32 space-y-8 animate-in-fade">
                    <div className="inline-block bg-black text-white font-black uppercase tracking-widest text-[10px] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                        New Features
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9]">
                        Better <br />
                        <span className="text-accent underline decoration-black decoration-4 underline-offset-4">Tools.</span>
                    </h1>
                    <p className="text-lg text-black/40 max-w-xl font-bold border-l-4 border-accent pl-6">
                        The simplest way to create professional videos. No complex manuals, just pure creativity.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {features.map((f, i) => (
                        <div key={i} className="brutal-card p-10 bg-white group border-2 border-black">
                            <div className="w-12 h-12 bg-gray-50 border-2 border-black flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 group-hover:bg-accent group-hover:text-white transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:shadow-none translate-x-[-2px] translate-y-[-2px]">
                                <f.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black uppercase italic mb-4">{f.title}</h3>
                            <p className="text-black/60 leading-relaxed font-bold text-base">{f.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
