import { cn } from "../lib/utils";
import { Hexagon, Brain, Zap, Globe } from "lucide-react";


export default function About() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <header className="mb-32 space-y-12 animate-in-fade">
                    <div className="inline-block bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                        Est. 2026
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
                        The Neural <br />
                        <span className="text-accent underline decoration-black decoration-8 underline-offset-8 text-6xl md:text-9xl">Vision.</span>
                    </h1>
                    <p className="text-2xl text-black/40 font-bold max-w-3xl leading-relaxed border-l-8 border-accent pl-8">
                        We didn't just build another video editor. We built a neural engine designed to bridge the gap between imagination and execution.
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-24 mb-48">
                    <div className="brutal-card p-12 bg-black text-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(112,0,223,1)] rotate-1">
                        <h2 className="text-4xl font-black uppercase italic mb-8">Our Mission</h2>
                        <p className="text-lg font-bold leading-relaxed opacity-60">
                            To democratize high-end video production through AI-driven simplicity. We believe every creator deserves tools that move at the speed of thought.
                        </p>
                    </div>
                    <div className="brutal-card p-12 bg-white border-8 border-black -rotate-1">
                        <h2 className="text-4xl font-black uppercase italic mb-8">The Core</h2>
                        <ul className="space-y-6">
                            {[
                                { icon: Brain, label: "AI First", sub: "Neural architecture in every tool." },
                                { icon: Zap, label: "Speed", sub: "From upload to export in seconds." },
                                { icon: Globe, label: "Global", sub: "Built for creators everywhere." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-6 items-center">
                                    <div className="w-12 h-12 bg-accent flex items-center justify-center border-4 border-black shrink-0">
                                        <item.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-black uppercase italic text-lg leading-none">{item.label}</p>
                                        <p className="text-xs font-bold text-black/40 uppercase tracking-widest mt-1">{item.sub}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-48">
                    <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-16 border-b-8 border-black inline-block pb-4">The Neural Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { name: "Jafar", role: "Neural Architect", color: "bg-accent" },
                            { name: "Zayd Tahir", role: "Creative Ops", color: "bg-purple-500" },
                            { name: "Muhsin", label: "Dev Core", role: "Engine Lead", color: "bg-black" },
                            { name: "Join Us", role: "We're hiring!", color: "bg-gray-100", isHiring: true }
                        ].map((member, i) => (
                            <div key={i} className="brutal-card p-8 bg-white border-4 border-black group cursor-pointer hover:bg-gray-50 transition-all">
                                <div className={cn("aspect-square border-4 border-black mb-6 flex items-center justify-center relative overflow-hidden", member.color)}>
                                    <Hexagon className={cn("h-16 w-16", member.isHiring ? "text-black/10" : "text-white/20")} />
                                    {!member.isHiring && <span className="absolute text-5xl font-black text-white/40 italic">{member.name.charAt(0)}</span>}
                                </div>
                                <h3 className="text-xl font-black uppercase italic">{member.name}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

