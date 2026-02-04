import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/Core";
import { Check } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "0",
            features: ["3 Projects", "720p Export", "Standard AI Tools", "Community Support"],
            cta: "Start Free",
            variant: "brutal-ghost"
        },
        {
            name: "Pro",
            price: "29",
            features: ["Unlimited Projects", "4K Ultra HD Export", "Advanced AI Editor", "Custom Templates", "Priority Export"],
            cta: "Go Pro Now",
            variant: "brutal-primary",
            popular: true
        },
        {
            name: "Team",
            price: "99",
            features: ["Team Collaboration", "API Access", "Dedicated Support", "Custom Branding"],
            cta: "Contact Sales",
            variant: "brutal-ghost"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden">
            <Navbar />

            <main className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                        Simple <br />
                        <span className="text-accent underline decoration-black decoration-4 underline-offset-4">Pricing.</span>
                    </h1>
                    <p className="text-black/40 font-black uppercase tracking-[0.3em] text-xs">Choose the plan that fits you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {plans.map((plan, i) => (
                        <div key={i} className={`brutal-card p-12 flex flex-col items-center text-center bg-white relative border-4 border-black ${plan.popular ? 'shadow-[12px_12px_0px_0px_rgba(112,0,223,1)]' : ''}`}>
                            {plan.popular && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 font-black uppercase italic text-xs border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                                    Best Value
                                </div>
                            )}

                            <h3 className="text-xl font-black uppercase italic mb-3 tracking-widest">{plan.name}</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-3xl font-black italic">$</span>
                                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                                <span className="text-black/40 font-bold uppercase text-[10px]">/mo</span>
                            </div>

                            <ul className="w-full space-y-4 mb-12 text-left border-t-2 border-black pt-8">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-base font-bold text-black/60">
                                        <div className="w-5 h-5 bg-accent border-2 border-black flex items-center justify-center shrink-0">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.variant} className="w-full h-14 uppercase font-black tracking-widest italic text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
