import { FileText, Shield, Scale, Zap } from "lucide-react";

export default function License() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <main className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
                <header className="mb-24 space-y-8 animate-in-fade">
                    <div className="w-20 h-20 bg-black border-4 border-black flex items-center justify-center -rotate-6 shadow-[6px_6px_0px_0px_rgba(112,0,223,1)]">
                        <Scale className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Software License</h1>
                    <p className="text-xl font-bold text-black/40 border-l-8 border-accent pl-8">The legal framework for our neural editing system.</p>
                </header>

                <div className="space-y-16">
                    <section className="brutal-card p-12 bg-white border-4 border-black rotate-1">
                        <h2 className="text-2xl font-black uppercase italic mb-6">Standard Usage</h2>
                        <p className="font-bold text-black/60 leading-relaxed">
                            Clipfy grants you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you by Clipfy as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by Clipfy, in the manner permitted by these terms.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="brutal-card p-8 border-4 border-black bg-success/10 -rotate-1">
                            <h3 className="text-xl font-black uppercase italic mb-4 flex items-center gap-3">
                                <Zap className="h-5 w-5 text-success" /> You Can
                            </h3>
                            <ul className="space-y-3 text-sm font-bold opacity-70">
                                <li>• Create unlimited commercial videos</li>
                                <li>• Host content on any platform</li>
                                <li>• Use AI-generated assets</li>
                                <li>• Transform your brand identity</li>
                            </ul>
                        </div>
                        <div className="brutal-card p-8 border-4 border-black bg-error/10 rotate-1">
                            <h3 className="text-xl font-black uppercase italic mb-4 flex items-center gap-3">
                                <Shield className="h-5 w-5 text-error" /> You Cannot
                            </h3>
                            <ul className="space-y-3 text-sm font-bold opacity-70">
                                <li>• Reverse engineer the neural engine</li>
                                <li>• Resell the software as your own</li>
                                <li>• Use the API for automated scraping</li>
                                <li>• Bypass billing or usage limits</li>
                            </ul>
                        </div>
                    </div>

                    <div className="brutal-card p-10 bg-accent text-white border-4 border-black">
                        <h4 className="text-xl font-black uppercase italic mb-4">Enterprise Licensing</h4>
                        <p className="font-bold opacity-80 leading-relaxed mb-8">Need a custom license for your whole team? We offer bulk seats and custom SLA agreements for agencies and studios.</p>
                        <button className="h-14 px-8 bg-white text-black font-black uppercase italic border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all">
                            Talk To Sales
                        </button>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t-8 border-black text-center opacity-20">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">© 2026 Clipfy. Legal core active.</p>
                </div>
            </main>
        </div>
    );
}
