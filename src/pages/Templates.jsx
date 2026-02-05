import { cn } from "../lib/utils";
import { Layout, Smartphone, Tv, Instagram, Play, ArrowRight, Heart } from "lucide-react";

import { Button } from "../components/ui/Core";

export default function Templates() {
    const templates = [
        { title: "Neo Minimalist", type: "TikTok/Reels", icon: Smartphone, color: "bg-accent" },
        { title: "Crunchy Brutal", type: "YouTube Shorts", icon: Layout, color: "bg-purple-500" },
        { title: "Neural Smooth", type: "Cinematic", icon: Tv, color: "bg-blue-500" },
        { title: "Dynamic Text", type: "Ad Placements", icon: Instagram, color: "bg-black" },
        { title: "Smart Sync Hook", type: "TikTok/Reels", icon: Play, color: "bg-green-400" },
        { title: "Modern Vlogger", type: "Vlog Intro", icon: Heart, color: "bg-pink-400" },
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <header className="mb-32 space-y-12 animate-in-fade">
                    <div className="inline-block bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                        250+ Templates
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
                        Skip The <br />
                        <span className="text-accent underline decoration-black decoration-8 underline-offset-8">Draft.</span>
                    </h1>
                    <p className="text-2xl text-black/40 font-bold max-w-2xl leading-relaxed border-l-8 border-accent pl-8">
                        Professional templates for every platform. Optimized for engagement, designed to be broken and remade.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {templates.map((template, i) => (
                        <div key={i} className="brutal-card bg-white border-4 border-black group cursor-pointer overflow-hidden flex flex-col hover:bg-gray-50 transition-all">
                            <div className={cn("aspect-video border-b-4 border-black flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500", template.color)}>
                                <template.icon className="h-16 w-16 text-white/40 group-hover:text-white group-hover:rotate-12 transition-all" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center -rotate-6">
                                        <Play className="h-6 w-6 fill-black" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-black uppercase italic">{template.title}</h3>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-black/30 border-2 border-black/10 px-2 py-1">{template.type}</span>
                                </div>
                                <Button variant="brutal-primary" size="sm" className="w-full text-[10px] font-black uppercase tracking-wider h-10 italic">
                                    Use Template <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="brutal-card p-12 bg-black text-white border-8 border-black text-center">
                    <h2 className="text-3xl font-black uppercase italic mb-6">Want a custom layout?</h2>
                    <p className="text-lg font-bold opacity-60 mb-10 max-w-xl mx-auto">Our neural engine can generate a unique template based on your brand guidelines in seconds.</p>
                    <Button variant="brutal-primary" size="lg" className="h-16 px-10 italic uppercase font-black tracking-widest text-sm">
                        Request Custom Style
                    </Button>
                </div>
            </main>
        </div>
    );
}

