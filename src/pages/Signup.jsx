import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Button, Input } from "../components/ui/Core";
import { Hexagon, Mail, ArrowRight, Sparkles, Globe2 } from "lucide-react";
import { useToast } from "../components/Toast";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();
    const navigate = useNavigate();
    const auth = useAuth();

    const handleGoogleSignup = async () => {
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
            addToast({ title: "Account Created!", type: "success" });
            navigate("/dashboard");
        } catch (error) {
            addToast({ title: "Signup Error", description: error.message, type: "error" });
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignup = async (e) => {
        e.preventDefault();
        if (!fullName || !email || !password) {
            return addToast({ title: "Empty Fields", description: "Please fill in all fields.", type: "error" });
        }
        setLoading(true);
        try {
            await auth.signup(fullName, email, password);
            addToast({ title: "Account Created!", description: "Welcome to Clipfy.", type: "success" });
            navigate("/dashboard");
        } catch (error) {
            addToast({ title: "Signup Error", description: error.message, type: "error" });
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
                        Join the community
                    </div>
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-black">
                        Start <br />
                        <span className="text-accent underline decoration-black decoration-4 underline-offset-4">Today.</span>
                    </h1>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="brutal-card p-6 bg-white border-2 border-black">
                            <Sparkles className="h-6 w-6 text-accent mb-3" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Tools</p>
                            <p className="text-2xl font-black italic text-black">Free</p>
                        </div>
                        <div className="brutal-card p-6 bg-white border-2 border-black">
                            <Globe2 className="h-6 w-6 text-accent mb-3" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Support</p>
                            <p className="text-2xl font-black italic text-black">24/7</p>
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
                        <Link to="/" className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(112,0,223,0.5)] -rotate-3 hover:rotate-0 transition-transform">
                            <Hexagon className="h-5 w-5 text-white fill-white" />
                        </Link>
                        <Link to="/login">
                            <Button variant="brutal-ghost" size="sm" className="text-xs italic">Sign In Instead</Button>
                        </Link>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter">Sign Up</h2>
                        <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-[10px]">Free access forever</p>
                    </div>

                    <div className="space-y-8">
                        <Button
                            variant="brutal-primary"
                            className="w-full h-14 text-lg italic"
                            onClick={handleGoogleSignup}
                            isLoading={loading}
                        >
                            <Mail className="h-5 w-5 mr-3" /> Sign Up with Google
                        </Button>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-black/10"></div></div>
                            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-white px-6 text-black/20">or create account</span></div>
                        </div>

                        <form className="space-y-6 text-left" onSubmit={handleEmailSignup}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Full Name</label>
                                <Input
                                    variant="brutal"
                                    type="text"
                                    placeholder="Your Name"
                                    className="h-14 text-base"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
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
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Password</label>
                                <Input
                                    variant="brutal"
                                    type="password"
                                    placeholder="••••••••"
                                    className="h-14 text-base"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                variant="brutal"
                                className="w-full h-14 uppercase font-black italic tracking-widest text-lg"
                                type="submit"
                                isLoading={loading}
                            >
                                Create Account <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                        </form>

                    </div>

                    <p className="text-center text-[10px] font-bold uppercase tracking-widest text-black/20 leading-loose">
                        By signing up, you agree to our <br />
                        <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
