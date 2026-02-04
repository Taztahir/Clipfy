import React from "react";
import Navbar from "../components/Navbar";
import { ArrowUpRight, Calendar, User, Sparkles } from "lucide-react";

export default function Blog() {
    const posts = [
        {
            title: "The Future of Video Editing",
            excerpt: "Why simple, AI-powered tools are replacing complex professional software.",
            date: "Oct 12, 2026",
            author: "Zayd Tahir",
            tag: "Trends"
        },
        {
            title: "How to Create Viral Shorts",
            excerpt: "A step-by-step guide to using Clipfy for high-engagement social media content.",
            date: "Sep 28, 2026",
            author: "Sarah Connor",
            tag: "Tutorial"
        },
        {
            title: "New AI Tools Released",
            excerpt: "Everything you need to know about our latest AI enhancement tools.",
            date: "Sep 15, 2026",
            author: "Muhsin",
            tag: "Updates"
        },
        {
            title: "Community Spotlight",
            excerpt: "Featuring the best videos created by the Clipfy community this month.",
            date: "Sep 01, 2026",
            author: "Jafar",
            tag: "Community"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <Navbar />

            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <header className="mb-32 space-y-8 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-black text-white font-black uppercase tracking-widest text-[10px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                        <Sparkles className="h-4 w-4" /> The Blog
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                        Latest <br />
                        <span className="text-accent underline decoration-black decoration-8 underline-offset-8">Stories.</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post, i) => (
                        <div key={i} className="brutal-card p-12 bg-white group cursor-pointer border-4 border-black hover:bg-gray-50 transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <span className="px-4 py-1 bg-accent/10 border-2 border-accent text-[10px] font-black uppercase tracking-widest text-accent">{post.tag}</span>
                                <div className="w-12 h-12 border-4 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                    <ArrowUpRight className="h-6 w-6" />
                                </div>
                            </div>

                            <h2 className="text-3xl font-black uppercase italic mb-6 leading-tight group-hover:text-accent transition-colors">{post.title}</h2>
                            <p className="text-black/60 font-bold mb-10 leading-relaxed text-lg italic">{post.excerpt}</p>

                            <div className="flex items-center gap-10 text-xs font-black uppercase tracking-widest text-black/30 border-t-2 border-black/5 pt-8">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
