import { cn } from "../lib/utils";
import { Play, BookOpen, Wand2, Monitor, ArrowRight, Star } from "lucide-react";

import { Button } from "../components/ui/Core";

export default function Tutorials() {
    const guides = [
        { title: "Quick Start Guide", time: "2 min", difficulty: "Beginner", icon: Play, color: "bg-accent" },
        { title: "Mastering AI Sync", time: "5 min", difficulty: "Intermediate", icon: Wand2, color: "bg-purple-500" },
        { title: "Advanced Timeline", time: "8 min", difficulty: "Pro", icon: BookOpen, color: "bg-blue-500" },
        { title: "Exporting for Social", time: "3 min", difficulty: "Beginner", icon: Monitor, color: "bg-black" },
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <header className="mb-32 space-y-12 animate-in-fade">
                    <div className="inline-flex items-center gap-2 bg-accent text-white font-black uppercase tracking-[0.2em] text-[10px] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Star className="h-4 w-4 fill-white" /> Learning Hub
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
                        Master The <br />
                        <span className="text-accent underline decoration-black decoration-8 underline-offset-8">Craft.</span>
                    </h1>
                    <p className="text-2xl text-black/40 font-bold max-w-2xl leading-relaxed border-l-8 border-accent pl-8">
                        Everything you need to go from a beginner to a video wizard. Step-by-step guides, shortcuts, and neural tricks.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {guides.map((guide, i) => (
                        <div key={i} className="brutal-card p-12 bg-white border-4 border-black group hover:bg-gray-50 transition-all cursor-pointer relative overflow-hidden">
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div className={cn("w-20 h-20 border-4 border-black flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[6px_6px_0_0_rgba(0,0,0,1)]", guide.color)}>
                                    <guide.icon className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">{guide.difficulty}</p>
                                    <p className="font-black italic text-lg">{guide.time}</p>
                                </div>
                            </div>
                            <h2 className="text-3xl font-black uppercase italic mb-8 relative z-10">{guide.title}</h2>
                            <Button variant="brutal-ghost" className="italic relative z-10">
                                Watch Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            {/* Decorative Background Text */}
                            <div className="absolute -bottom-4 -right-4 font-black text-8xl text-black/[0.03] italic uppercase select-none pointer-events-none group-hover:text-black/[0.05] transition-colors">
                                LEARN
                            </div>
                        </div>
                    ))}
                </div>

                <section className="brutal-card p-16 bg-accent border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                    <div className="grid lg:grid-cols-3 gap-16 items-center">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white tracking-tighter">Join a Live Session</h2>
                            <p className="text-xl font-bold text-white/70 leading-relaxed">
                                Want to learn from the pros? Every Tuesday, we host a live workshop on Discord to help you master the Clipfy engine.
                            </p>
                        </div>
                        <Button variant="brutal-secondary" size="lg" className="h-24 text-2xl uppercase italic font-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                            Join Discord
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}

