import { cn } from "../lib/utils";
import { ArrowRight, Sparkles, Code, Palette, Megaphone } from "lucide-react";

import { Button } from "../components/ui/Core";

export default function Careers() {
    const jobs = [
        { title: "Senior AI Engineer", team: "Engine", type: "Full-time", icon: Code, color: "bg-blue-500" },
        { title: "Product Designer", team: "Visual", type: "Full-time", icon: Palette, color: "bg-accent" },
        { title: "Growth Manager", team: "Marketing", type: "Contract", icon: Megaphone, color: "bg-purple-500" },
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <header className="mb-32 space-y-12 animate-in-fade text-center md:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-black text-white font-black uppercase tracking-widest text-[10px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                        <Sparkles className="h-4 w-4" /> We're Scaling
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
                        Build The <br />
                        <span className="text-accent underline decoration-black decoration-8 underline-offset-8">Future.</span>
                    </h1>
                    <p className="text-2xl text-black/40 font-bold max-w-xl leading-relaxed border-l-8 border-accent pl-8 mx-auto md:ml-8 md:mr-0 text-left">
                        Clipfy is a mission-driven team of neural architects and creative rebels. Join us in redefining how humans create.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-32">
                    <div className="brutal-card p-12 bg-gray-50 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-4xl font-black uppercase italic mb-12 border-b-4 border-black inline-block pb-2">Open roles</h2>
                        <div className="space-y-6">
                            {jobs.map((job, i) => (
                                <div key={i} className="brutal-card p-8 bg-white border-4 border-black flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                                    <div className="flex items-center gap-6">
                                        <div className={cn("w-14 h-14 border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]", job.color)}>
                                            <job.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase italic">{job.title}</h3>
                                            <div className="flex gap-4 mt-2">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">{job.team}</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-accent">{job.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="brutal-ghost" className="italic w-full md:w-auto">
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="brutal-card p-16 bg-black text-white border-8 border-black text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">No matching role?</h2>
                        <p className="text-xl font-bold opacity-60 max-w-2xl mx-auto mb-12">
                            We're always looking for neural wizards. Send us your portfolio and let's see what we can build together.
                        </p>
                        <Button variant="brutal-primary" size="lg" className="h-20 px-12 text-xl italic uppercase">
                            Open Application
                        </Button>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(112,0,223,0.1)_25%,transparent_25%,transparent_50%,rgba(112,0,223,0.1)_50%,rgba(112,0,223,0.1)_75%,transparent_75%,transparent)] bg-[size:100px_100px] pointer-events-none" />
                </section>
            </main>
        </div>
    );
}

