import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Button, Input } from "../components/ui/Core";
import { Hexagon, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "../components/Toast";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();
    const { sendPasswordReset } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            return addToast({ title: "Email Required", description: "Please enter your email address.", type: "error" });
        }
        setLoading(true);
        try {
            await sendPasswordReset(email);
            addToast({
                title: "Reset Email Sent!",
                description: "Check your inbox for further instructions.",
                type: "success"
            });
        } catch (error) {
            addToast({ title: "Error", description: error.message, type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 selection:bg-accent/10">
            <div className="max-w-md w-full space-y-12">
                <div className="flex items-center justify-between">
                    <Link to="/login" className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,0.5)] rotate-3 hover:rotate-0 transition-transform">
                        <ArrowLeft className="h-5 w-5 text-white" />
                    </Link>
                    <Link to="/">
                        <div className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black rotate-1 group">
                            <Hexagon className="h-5 w-5 text-white fill-white" />
                        </div>
                    </Link>
                </div>

                <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">Reset Password</h2>
                    <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-[10px]">Neural Security Protocol</p>
                </div>

                <div className="brutal-card p-10 bg-white border-4 border-black space-y-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-black/60">
                        Enter your verified email address and we'll send you a neural link to reset your credentials.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2 text-left">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email Address</label>
                            <Input
                                variant="brutal"
                                type="email"
                                placeholder="you@example.com"
                                className="h-14 text-base"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <Button
                            variant="brutal-primary"
                            className="w-full h-14 uppercase font-black italic tracking-widest text-lg"
                            type="submit"
                            isLoading={loading}
                        >
                            Send Reset Link <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </form>
                </div>

                <p className="text-center text-[10px] font-bold uppercase tracking-widest text-black/20">
                    Remembered? <Link to="/login" className="text-accent hover:underline">Sign In Instead</Link>
                </p>
            </div>
        </div>
    );
}
