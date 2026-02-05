import React from "react";
import { Button, Input } from "../components/ui/Core";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-accent/10 relative overflow-x-hidden flex flex-col">
            <main className="flex-1 flex items-center justify-center p-6 pt-48 pb-32">


                <div className="grid lg:grid-cols-2 gap-16 max-w-7xl w-full mx-auto">

                    <div className="space-y-16 animate-in-fade self-center">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8]">
                                Contact <br />
                                <span className="text-accent underline decoration-black decoration-8 underline-offset-8">Us.</span>
                            </h1>
                            <p className="text-2xl text-black/40 font-bold leading-relaxed border-l-8 border-accent pl-8">
                                Have a question? We're here to help. Send us a message and we'll get back to you fast.
                            </p>
                        </div>

                        <div className="space-y-8 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: Mail, label: "hello@clipfy.io", sub: "Email Us" },
                                { icon: MessageSquare, label: "@clipfy_app", sub: "Socials" },
                                { icon: MapPin, label: "Dubai, UAE", sub: "Office" }
                            ].map((item, i) => (
                                <div key={i} className="brutal-card p-6 bg-white flex gap-6 items-center group border-4 border-black">
                                    <div className="w-12 h-12 bg-accent flex items-center justify-center border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                                        <item.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">{item.sub}</p>
                                        <p className="font-black uppercase italic text-sm">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="brutal-card p-12 bg-white animate-in-fade border-8 border-black shadow-[12px_12px_0px_0px_rgba(112,0,223,1)]">
                        <div className="mb-12 flex items-center justify-between border-b-4 border-black pb-8">
                            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Send Message</h2>
                            <div className="w-10 h-10 bg-gray-50 border-4 border-black flex items-center justify-center">
                                <Send className="h-5 w-5 text-black/20" />
                            </div>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">First Name</label>
                                    <Input variant="brutal" placeholder="NAME" className="h-16" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Last Name</label>
                                    <Input variant="brutal" placeholder="SURNAME" className="h-16" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email Address</label>
                                <Input variant="brutal" type="email" placeholder="YOUR@EMAIL.COM" className="h-16" />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Message</label>
                                <textarea
                                    className="flex w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[8px_8px_0px_0px_rgba(112,0,223,1)] px-6 py-4 text-lg text-black placeholder:text-black/10 focus-visible:outline-none transition-all min-h-[180px] uppercase font-black italic tracking-widest"
                                    placeholder="HOW CAN WE HELP?"
                                />
                            </div>

                            <Button variant="brutal-primary" className="w-full h-20 uppercase font-black tracking-widest italic text-xl mt-4">
                                Send Message <Send className="ml-4 h-6 w-6" />
                            </Button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
}
