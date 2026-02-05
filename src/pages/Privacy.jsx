import React from "react";
import { ShieldCheck } from "lucide-react";


export default function Privacy() {
    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-24 selection:bg-accent/10 pt-48 pb-32">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="border-b-8 border-black pb-8">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Privacy Policy</h1>
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

            </div>
        </div>
    );
}

