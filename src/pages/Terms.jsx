import React from "react";


export default function Terms() {
    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-24 selection:bg-accent/10 pt-48 pb-32">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="border-b-8 border-black pb-8">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Terms of Service</h1>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 space-y-8">
                        <div className="brutal-card p-6 bg-accent text-white border-4 border-black rotate-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em]">Last Updated</p>
                            <p className="text-2xl font-black italic">Feb 2026</p>
                        </div>
                        <div className="p-6 border-4 border-black bg-gray-50 flex flex-col gap-4">
                            <h3 className="font-black uppercase italic text-xs tracking-widest">Quick Navigation</h3>
                            {['User Accounts', 'Content Rights', 'AI Usage', 'Liability', 'Termination'].map(item => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-12 font-bold leading-relaxed">
                        <section id="user-accounts" className="space-y-4">
                            <h2 className="text-2xl font-black uppercase italic border-b-4 border-black inline-block pb-1">1. User Accounts</h2>
                            <p className="text-sm">By creating an account on Clipfy, you agree to provide accurate information and maintain the security of your credentials. You are responsible for all activity on your account.</p>
                        </section>

                        <section id="content-rights" className="space-y-4">
                            <h2 className="text-2xl font-black uppercase italic border-b-4 border-black inline-block pb-1">2. Content Rights</h2>
                            <p className="text-sm">You retain all ownership rights to the content you create and upload. Clipfy is granted a license to process and host your content for the purpose of providing editing services.</p>
                        </section>

                        <section id="ai-usage" className="space-y-4">
                            <h2 className="text-2xl font-black uppercase italic border-b-4 border-black inline-block pb-1">3. AI Usage</h2>
                            <p className="text-sm">Clipfy uses advanced neural engines and AI for video processing. AI-generated results are provided "as-is," and we do not guarantee specific outcomes or trend success.</p>
                        </section>

                        <section id="liability" className="space-y-4">
                            <h2 className="text-2xl font-black uppercase italic border-b-4 border-black inline-block pb-1">4. Liability</h2>
                            <p className="text-sm">Clipfy shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our neural editing services.</p>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
}

