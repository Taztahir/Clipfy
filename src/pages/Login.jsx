import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Button, Input } from "../components/ui/Core";
import { Hexagon, Mail, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useToast } from "../components/Toast";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();
    const navigate = useNavigate();
    const auth = useAuth();

    const handleGoogleLogin = async () => {
        // Simple mobile detection
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            try {
                await auth.loginWithGoogleRedirect();
            } catch (error) {
                addToast({ title: "Login Error", description: error.message, type: "error" });
            }
            return;
        }

        setLoading(true);
        try {
            await auth.loginWithGoogle();
            addToast({ title: "Welcome back!", type: "success" });
            navigate("/dashboard");
        } catch (error) {
            addToast({ title: "Login Error", description: error.message, type: "error" });
        } finally {
            setLoading(false);
        }
    };


    const handleEmailLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return addToast({ title: "Empty Fields", description: "Please enter your email and password.", type: "error" });
        }
        setLoading(true);
        try {
            await auth.login(email, password);
            addToast({ title: "Welcome back!", type: "success" });
            navigate("/dashboard");
        } catch (error) {
            addToast({ title: "Login Error", description: error.message, type: "error" });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row selection:bg-accent/10">
            {/* Visual Branding Side */}
            <div className="hidden lg:flex lg:w-1/2 bg-gray-50 relative items-center justify-center p-12 border-r-8 border-black">
                <div className="relative z-10 space-y-12">
                    <div className="inline-block bg-black text-white font-black uppercase tracking-widest text-[9px] px-3 py-1.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]">
                        Easy Video Editor
                    </div>
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-black">
                        Welcome <br />
                        <span className="text-accent underline decoration-black decoration-4 underline-offset-4">Back.</span>
                    </h1>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="brutal-card p-6 bg-white border-2 border-black">
                            <Zap className="h-6 w-6 text-accent mb-3" />
                            <p className="text-[9px] font-black uppercase tracking-widest text-black/40">Users</p>
                            <p className="text-2xl font-black italic text-black">10K+</p>
                        </div>
                        <div className="brutal-card p-6 bg-white border-2 border-black">
                            <ShieldCheck className="h-6 w-6 text-accent mb-3" />
                            <p className="text-[9px] font-black uppercase tracking-widest text-black/40">Security</p>
                            <p className="text-2xl font-black italic text-black">Pro</p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 border-l-8 border-b-8 border-black/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 border-t-8 border-r-8 border-black/5 translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Functional Auth Side */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 relative">
                <div className="max-w-md w-full space-y-12">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,0.5)] rotate-3 hover:rotate-0 transition-transform">
                            <Hexagon className="h-5 w-5 text-white fill-white" />
                        </Link>
                        <Link to="/signup">
                            <Button variant="brutal-ghost" size="sm" className="text-xs italic">Create Account</Button>
                        </Link>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter">Sign In</h2>
                        <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-[10px]">Neural Workspace</p>
                    </div>

                    <div className="space-y-8">
                        <Button
                            variant="brutal-primary"
                            className="w-full h-12 text-sm italic"
                            onClick={handleGoogleLogin}
                            isLoading={loading}
                        >
                            <Mail className="h-4 w-4 mr-3" /> Sign In with Google
                        </Button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-4 border-black/10"></div></div>
                            <div className="relative flex justify-center text-[11px] uppercase font-black tracking-widest"><span className="bg-white px-8 text-black/20">or use email</span></div>
                        </div>

                        <form className="space-y-6 text-left" onSubmit={handleEmailLogin}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Email Address</label>
                                <Input
                                    variant="brutal"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="h-12 text-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Password</label>
                                <Input
                                    variant="brutal"
                                    type="password"
                                    placeholder="••••••••"
                                    className="h-12 text-xs"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                variant="brutal"
                                className="w-full h-12 uppercase font-black italic tracking-widest text-sm"
                                type="submit"
                                isLoading={loading}
                            >
                                Login Now <ArrowRight className="ml-3 h-4 w-4" />
                            </Button>
                        </form>

                    </div>

                    <p className="text-center text-[11px] font-bold uppercase tracking-widest text-black/20">
                        Forgot Password? <Link to="/forgot-password" size="sm" className="text-accent hover:underline">Reset here</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
