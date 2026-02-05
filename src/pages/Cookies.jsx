import { Cookie, Info, Shield, ShieldCheck } from "lucide-react";

export default function Cookies() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <main className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
                <header className="mb-24 space-y-8 animate-in-fade">
                    <div className="w-20 h-20 bg-accent border-4 border-black flex items-center justify-center rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <Cookie className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Cookie Policy</h1>
                    <p className="text-xl font-bold text-black/40 border-l-8 border-accent pl-8">How we use small data to build big neural experiences.</p>
                </header>

                <div className="space-y-16">
                    <section className="brutal-card p-12 bg-gray-50 border-4 border-black">
                        <h2 className="text-2xl font-black uppercase italic mb-6 flex items-center gap-4">
                            <Info className="h-6 w-6 text-accent" /> What are Cookies?
                        </h2>
                        <p className="font-bold text-black/60 leading-relaxed uppercase tracking-tight">
                            Cookies are small text files that are stored on your device. We use them to remember your session, preserve your workspace theme, and ensure the neural engine runs at peak performance.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Essential</h3>
                            <p className="text-sm font-bold opacity-70 leading-relaxed">Required for the engine to function. Handles your login state and project synchronization. Cannot be disabled.</p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Analytics</h3>
                            <p className="text-sm font-bold opacity-70 leading-relaxed">Helps us understand how you use the editor so we can optimize the UI for everyone.</p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Preferences</h3>
                            <p className="text-sm font-bold opacity-70 leading-relaxed">Remembers your dark mode toggle and workspace layout settings.</p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic border-b-4 border-black inline-block pb-1">Advertising</h3>
                            <p className="text-sm font-bold opacity-70 leading-relaxed">We do not use third-party advertising cookies on the platform.</p>
                        </div>
                    </div>

                    <div className="brutal-card p-10 bg-black text-white border-4 border-black flex flex-col md:flex-row items-center gap-10">
                        <div className="w-16 h-16 bg-success border-2 border-black flex items-center justify-center shrink-0 -rotate-3">
                            <ShieldCheck className="h-8 w-8 text-black" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic">Control your data</h4>
                            <p className="text-sm font-bold opacity-60">You can clear your cookies via your browser settings at any time, but this will sign you out of Clipfy.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t-8 border-black flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">© 2026 Clipfy Neural Systems Inc.</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">Last updated: Feb 05, 2026</p>
                </div>
            </main>
        </div>
    );
}
