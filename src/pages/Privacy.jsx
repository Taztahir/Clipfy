import React from "react";
import { Link } from "react-router-dom";
import { Hexagon, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Core";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-24 selection:bg-accent/10">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="flex items-center justify-between border-b-8 border-black pb-8">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="w-12 h-12 bg-black flex items-center justify-center border-4 border-black shadow-[6px_6px_0px_0px_rgba(112,0,223,1)] -rotate-6">
                            <Hexagon className="h-6 w-6 text-white fill-white" />
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Privacy</h1>
                    </div>
                    <Link to="/signup">
                        <Button variant="brutal-ghost" className="italic"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Signup</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-12 space-y-12">
                        <div className="brutal-card p-12 bg-white border-4 border-black flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 bg-success border-4 border-black flex items-center justify-center rotate-3 shrink-0">
                                <ShieldCheck className="h-12 w-12" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Neural Security First</h2>
                                <p className="text-black/60 font-bold max-w-2xl text-lg leading-tight uppercase tracking-tight">We protect your data with the same intensity we edit your videos. Your privacy is non-negotiable.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Data Collection</h3>
                                <p className="text-sm font-bold opacity-70">We collect your email for authentication and video metadata to improve our AI engines. We do not sell your personal data to third parties.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Neural Processing</h3>
                                <p className="text-sm font-bold opacity-70">Video processing happens in isolated neural clusters. Temporary files are purged within 24 hours of successful export.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Cookies</h3>
                                <p className="text-sm font-bold opacity-70">We use essential cookies for session management and site performance. No tracking cookies are used without your explicit consent.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Your Rights</h3>
                                <p className="text-sm font-bold opacity-70">You can request data deletion or account closure at any time through our settings panel. All linked neural assets will be terminated.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t-8 border-black pt-8 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/20">© 2026 Clipfy Neural Systems Inc. Your trust is our benchmark.</p>
                </div>
            </div>
        </div>
    );
}
