import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    LayoutGrid, Sparkles, Clapperboard, Calendar, Settings2, LogOut,
    Plus, Search, Zap, Play, TrendingUp, Globe2, Cpu, BrainCircuit,
    MoreHorizontal, FileVideo, User, CreditCard, Shield, ChevronRight,
    List, Grid, Hexagon, Trash2
} from "lucide-react";

import { logout, db, storage, auth } from "../Firebase";
import { addDoc, collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import CommandPalette from "../components/CommandPalette";

import { useToast } from "../components/Toast";
import { useAuth } from "../components/AuthContext";
import { Button, GlassPanel, SidebarItem, Avatar, Input } from "../components/ui/Core";
import { cn } from "../lib/utils";

export default function Dashboard() {
    const { currentUser, logout: authLogout, updateUserProfile } = useAuth();

    const [activeTab, setActiveTab] = useState("overview");
    const [isCmdKOpen, setIsCmdKOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const { addToast } = useToast();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, 0);
        }
    }, [activeTab]);


    useEffect(() => {
        if (!currentUser) return;
        const q = query(
            collection(db, "projects"),
            where("userId", "==", currentUser.uid),
            orderBy("createdAt", "desc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, [currentUser]);

    const handleLogout = async () => {
        await authLogout();
        navigate("/login");
    };

    const handleCreateProject = async () => {
        try {
            addToast({ title: "Initializing Neural Engine...", type: "default" });
            const docRef = await addDoc(collection(db, "projects"), {
                title: "Untitled Sequence",
                createdAt: new Date(),
                userId: currentUser?.uid,
                status: "draft",
                duration: 60,
                tracks: [
                    { id: 'track-1', label: 'Video 1', clips: [] },
                    { id: 'track-2', label: 'Audio 1', clips: [] }
                ]
            });

            addToast({
                title: "Project Initialized",
                description: "Redirecting to workspace...",
                type: "success"
            });
            navigate(`/editor/${docRef.id}`);
        } catch (error) {
            console.error("Error creating project: ", error);
            addToast({ title: "Initialization Failed", description: error.message, type: "error" });
        }
    };

    return (
        <div className="flex h-screen w-full bg-white text-black overflow-hidden selection:bg-accent/10">
            <CommandPalette isOpen={isCmdKOpen} onClose={setIsCmdKOpen} projects={projects} />


            {/* Sidebar */}
            <aside className={cn(
                "h-full border-r-8 border-black bg-gray-50 transition-all duration-300 hidden lg:flex flex-col z-50",
                isSidebarCollapsed ? "w-24" : "w-72"
            )}>
                {/* Logo Area */}
                <div className="h-20 flex items-center px-6 border-b-2 border-black">
                    <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0 border-2 border-black rotate-3">
                        <Hexagon className="h-5 w-5 text-white fill-white" />
                    </div>
                    {!isSidebarCollapsed && (
                        <span className="ml-3 font-black uppercase italic tracking-tighter text-xl animate-in-fade">Clipfy</span>
                    )}
                </div>

                {/* Nav Items */}
                <div className="flex-1 py-10 px-6 space-y-4 overflow-y-auto">
                    <SidebarItem
                        icon={LayoutGrid}
                        label="Dashboard"
                        active={activeTab === 'overview'}
                        onClick={() => setActiveTab('overview')}
                        collapsed={isSidebarCollapsed}
                    />
                    <SidebarItem
                        icon={Clapperboard}
                        label="My Videos"
                        active={activeTab === 'projects'}
                        onClick={() => setActiveTab('projects')}
                        collapsed={isSidebarCollapsed}
                    />
                    <SidebarItem
                        icon={BrainCircuit}
                        label="AI Tips"
                        active={activeTab === 'strategy'}
                        onClick={() => setActiveTab('strategy')}
                        collapsed={isSidebarCollapsed}
                    />
                    <SidebarItem
                        icon={Calendar}
                        label="Planner"
                        active={activeTab === 'schedule'}
                        onClick={() => setActiveTab('schedule')}
                        collapsed={isSidebarCollapsed}
                    />
                </div>

                {/* Bottom Actions */}
                <div className="p-6 border-t-4 border-black space-y-3 bg-white">
                    <SidebarItem
                        icon={Settings2}
                        label="Settings"
                        active={activeTab === 'settings'}
                        onClick={() => setActiveTab('settings')}
                        collapsed={isSidebarCollapsed}
                    />
                    <SidebarItem
                        icon={LogOut}
                        label="Sign Out"
                        onClick={handleLogout}
                        collapsed={isSidebarCollapsed}
                    />

                    <div className={cn("mt-6 flex items-center gap-3 px-3 py-3 border-2 border-black bg-gray-50", isSidebarCollapsed && "justify-center px-0")}>
                        <Avatar src={currentUser?.photoURL} fallback={currentUser?.displayName?.charAt(0) || "U"} size="sm" className="border-2 border-black" />

                        {!isSidebarCollapsed && (
                            <div className="flex-1 overflow-hidden">
                                <p className="text-[10px] font-black uppercase truncate">{currentUser?.displayName || "User"}</p>
                                <p className="text-[9px] font-bold text-black/40 truncate uppercase tracking-widest">{currentUser?.email}</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 relative z-10">
                {/* Topbar */}
                <header className="h-20 border-b-4 border-black bg-white flex items-center justify-between px-4 sm:px-8">
                    <div className="flex items-center gap-3 sm:gap-4 text-black/40 text-[10px] font-black uppercase tracking-widest leading-none">

                        <Hexagon className="h-5 w-5 lg:hidden text-black fill-black" />
                        <div className="hidden sm:flex items-center gap-2">
                            <span>App</span>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-black">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        <div
                            className="bg-gray-100 border-2 border-black px-4 py-2 hidden sm:flex items-center gap-3 w-48 md:w-64 text-xs text-black/40 hover:bg-gray-200 transition-colors cursor-pointer group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            onClick={() => setIsCmdKOpen(true)}
                        >
                            <Search className="h-4 w-4" />
                            <span className="font-bold">Search...</span>
                            <span className="ml-auto text-[9px] bg-black text-white px-1.5 py-0.5 rounded-none font-black uppercase">CMD+K</span>
                        </div>
                        <Button variant="brutal-primary" size="md" onClick={handleCreateProject} className="h-10 md:h-11 px-4 md:px-6 text-[10px] md:text-xs"><Plus className="h-4 w-4 mr-0 md:mr-2" /> <span className="hidden xs:inline">New Video</span></Button>
                    </div>
                </header>


                {/* Scrollable Content Area */}
                <div ref={scrollRef} className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-8 md:p-12 lg:p-16 bg-white pb-24 lg:pb-16 selection:bg-accent/20">

                    <div className="max-w-7xl mx-auto animate-in-fade w-full">
                        {activeTab === 'overview' && <OverviewTab onCreate={handleCreateProject} setActiveTab={setActiveTab} projects={projects} />}
                        {activeTab === 'strategy' && <StrategyTab />}
                        {activeTab === 'projects' && <ProjectsTab onCreate={handleCreateProject} projects={projects} />}
                        {activeTab === 'schedule' && <ScheduleTab />}
                        {activeTab === 'settings' && <SettingsTab />}
                    </div>
                </div>


                {/* Mobile Bottom Navigation */}
                <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black px-4 py-3 flex items-center justify-around z-50">
                    <button className={cn("p-2", activeTab === 'overview' && "bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(112,0,223,1)]")} onClick={() => setActiveTab('overview')}>
                        <LayoutGrid size={20} />
                    </button>
                    <button className={cn("p-2", activeTab === 'projects' && "bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(112,0,223,1)]")} onClick={() => setActiveTab('projects')}>
                        <Clapperboard size={20} />
                    </button>
                    <button className={cn("p-2", activeTab === 'strategy' && "bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(112,0,223,1)]")} onClick={() => setActiveTab('strategy')}>
                        <TrendingUp size={20} />
                    </button>
                    <button className={cn("p-2", activeTab === 'settings' && "bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(112,0,223,1)]")} onClick={() => setActiveTab('settings')}>
                        <Settings2 size={20} />
                    </button>
                    <button className="p-2 text-red-500" onClick={handleLogout}>
                        <LogOut size={20} />
                    </button>
                </nav>
            </main>
        </div>
    );
}


function OverviewTab({ onCreate, setActiveTab, projects }) {
    const { currentUser } = useAuth();
    return (

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 p-6 sm:p-12 flex flex-col justify-between min-h-[350px] sm:min-h-[400px] relative overflow-hidden bg-black text-white border-8 border-black shadow-[8px_8px_0px_0px_rgba(112,0,223,1)] sm:shadow-[12px_12px_0px_0px_rgba(112,0,223,1)] rotate-1 group">

                <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                    <div className="inline-block bg-white text-black font-black uppercase tracking-widest text-[9px] px-3 py-1.5 mb-6 border-2 border-white">
                        Editor Status: Ready
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter mb-3 leading-none">
                        Welcome <br />
                        <span className="text-accent underline decoration-white decoration-4 underline-offset-4">{currentUser?.displayName?.split(' ')[0] || "Creator"}.</span>
                    </h1>

                    <p className="text-white/60 text-base sm:text-lg font-bold max-w-md leading-relaxed uppercase tracking-tight">
                        Your editor is ready. Start a new video sequence and make something amazing today.
                    </p>
                </div>
                <Button variant="brutal" className="w-fit mt-10 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg italic" onClick={onCreate}>
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-black text-black mr-3" /> Start Editing
                </Button>
            </div>


            <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
                <div className="brutal-card flex-1 flex flex-col justify-center items-center text-center p-6 sm:p-8 bg-white border-2 border-black">
                    <TrendingUp className="h-10 w-10 text-accent mb-3" />
                    <h3 className="text-3xl font-black italic">1.2M</h3>
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/40 mt-1">Views Total</span>
                </div>
                <div className="brutal-card flex-1 flex flex-col justify-center items-center text-center p-6 sm:p-8 bg-white border-2 border-black">
                    <Zap className="h-8 w-8 text-accent mb-2" />
                    <h3 className="text-3xl font-black italic">98%</h3>
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/40 mt-1">Engine Speed</span>
                </div>
            </div>


            <div className="col-span-12 mt-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b-8 border-black pb-6 space-y-4 sm:space-y-0">
                    <h3 className="text-4xl sm:text-3xl font-black uppercase italic tracking-tighter">Recent Videos</h3>
                    <Button variant="brutal-ghost" size="sm" onClick={() => setActiveTab('projects')} className="text-sm font-black italic">View Archive <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projects.slice(0, 3).map(project => (
                        <div key={project.id} className="group brutal-card aspect-video border-4 border-black overflow-hidden relative cursor-pointer">
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                <FileVideo className="h-20 w-20 text-black/5" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 flex flex-col justify-end p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h4 className="font-black uppercase italic text-white text-lg sm:text-xl truncate">{project.title}</h4>

                                <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mt-2">{new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && (
                        <div className="col-span-1 md:col-span-3 text-center py-24 border-4 border-black border-dashed bg-gray-50 text-black/20 font-black uppercase tracking-[0.4em]">
                            No videos found.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

function ProjectsTab({ onCreate, projects }) {
    const { addToast } = useToast();
    const [searchQuery, setSearchQuery] = useState("");

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        if (!confirm("Are you sure you want to delete this neural asset?")) return;

        try {
            const { deleteDoc, doc } = await import("firebase/firestore");
            await deleteDoc(doc(db, "projects", id));
            addToast({ title: "Project Terminated", type: "success" });
        } catch (error) {
            addToast({ title: "Deletion Failed", description: error.message, type: "error" });
        }
    };

    const filteredProjects = projects.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between border-b-8 border-black pb-8 space-y-8 sm:space-y-0 text-center sm:text-left">
                <div>
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter">Video Library</h1>
                    <p className="text-black/40 font-bold uppercase tracking-widest text-[9px] mt-4 ml-1 leading-none">Archive of {projects.length} neural files</p>
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
                        <Input
                            variant="brutal"
                            placeholder="Search Archive..."
                            className="h-14 sm:h-16 pl-12 text-xs"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="brutal-primary" size="lg" onClick={onCreate} className="h-14 sm:h-16 px-8 sm:px-10 italic">
                        <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="brutal-card p-4 sm:p-6 bg-white border-4 border-black hover:bg-gray-50 transition-all cursor-pointer group">

                        <div className="aspect-video bg-gray-100 border-2 border-black mb-6 flex items-center justify-center text-black/5 group-hover:text-accent group-hover:bg-accent/5 transition-all relative">
                            <FileVideo className="h-16 w-16" />
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => handleDelete(e, project.id)}
                                    className="p-2 bg-white border-2 border-black hover:bg-error hover:text-white transition-colors"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="min-w-0 flex-1">
                                <h3 className="font-black uppercase italic text-lg leading-tight truncate">{project.title}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mt-2">{new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}</p>
                            </div>
                            <button className="p-2 hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black shrink-0 ml-2">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="p-32 text-center border-4 border-black border-dashed bg-gray-50 text-black/20 font-black uppercase tracking-[0.4em]">
                    {searchQuery ? "No matches found" : "Empty Archive"}
                </div>
            )}
        </div>
    );
}


function StrategyTab() {
    const { addToast } = useToast();
    const [analyzing, setAnalyzing] = useState(false);

    const handleRequestAnalysis = () => {
        setAnalyzing(true);
        addToast({ title: "Neural Engine Warming Up...", type: "default" });
        setTimeout(() => {
            setAnalyzing(false);
            addToast({ title: "Analysis Complete", description: "Your strategies have been optimized for Q1.", type: "success" });
        }, 3000);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-12 lg:col-span-8 bg-black border-8 border-black p-8 sm:p-12 text-white shadow-[12px_12px_0px_0px_rgba(112,0,223,1)] relative overflow-hidden -rotate-1">
                <div className="relative z-10">
                    <Cpu className={cn("h-16 w-16 mb-8 text-accent", analyzing && "animate-spin")} />
                    <h2 className="text-4xl font-black uppercase italic mb-4">Neural Strategy Hub</h2>
                    <p className="text-white/60 text-lg font-bold leading-relaxed max-w-xl">
                        {analyzing ? "Synthesizing market data and social trends. Optimizing neural pathways for maximum engagement..." : "Real-time analysis active. Optimization engines are ready for your next deployment."}
                    </p>
                    <Button
                        variant="brutal"
                        className="mt-12 bg-accent text-white border-4 border-white h-14 px-8 text-sm italic"
                        onClick={handleRequestAnalysis}
                        isLoading={analyzing}
                    >
                        {analyzing ? "Processing..." : "Run Global Analysis"}
                    </Button>
                </div>
                <BrainCircuit className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 rotate-12" />
            </div>

            <div className="col-span-12 md:col-span-12 lg:col-span-4 brutal-card p-10 bg-white border-4 border-black">
                <h3 className="text-3xl font-black uppercase italic mb-8 border-b-4 border-black inline-block pb-2 leading-none">Trending</h3>
                <ul className="space-y-6">
                    {[
                        { label: "#SimpleVideo", val: "+12%", color: "text-success" },
                        { label: "#NeoBrutalism", val: "+34%", color: "text-accent" },
                        { label: "#AIVideo", val: "+8%", color: "text-warning" },
                        { label: "#NeuralEdit", val: "+21%", color: "text-accent" }
                    ].map((tag, i) => (
                        <li key={i} className="flex justify-between items-center text-xl font-black uppercase border-b-2 border-black/5 pb-4">
                            <span className="text-black/40 text-sm tracking-widest">{tag.label}</span>
                            <span className={cn("italic", tag.color)}>{tag.val}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


function ScheduleTab() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const now = new Date();
    const currentDay = now.getDay();

    const calendarDays = Array.from({ length: 35 }, (_, i) => {
        const d = new Date();
        d.setDate(now.getDate() - currentDay + i);
        return {
            date: d.getDate(),
            month: d.toLocaleString('default', { month: 'short' }),
            isToday: d.toDateString() === now.toDateString(),
            hasEvent: i % 7 === 2 || i % 7 === 5
        };
    });

    return (
        <div className="space-y-12">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b-8 border-black pb-8 space-y-4 sm:space-y-0 text-center sm:text-left">
                <div>
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter">Content Planner</h1>
                    <p className="text-black/40 font-bold uppercase tracking-widest text-[9px] mt-2 leading-none">Strategy & Deployment Grid</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="brutal" size="sm" className="italic text-[10px]">Prev</Button>
                    <Button variant="brutal-primary" size="sm" className="italic text-[10px]">Next Month</Button>
                </div>
            </div>

            <div className="brutal-card bg-white border-4 border-black overflow-hidden">
                <div className="grid grid-cols-7 border-b-4 border-black bg-gray-50">
                    {days.map(day => (
                        <div key={day} className="py-4 text-center font-black uppercase text-[10px] tracking-widest border-r-2 border-black last:border-r-0">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {calendarDays.map((day, i) => (
                        <div
                            key={i}
                            className={cn(
                                "aspect-square p-2 sm:p-4 border-r-2 border-b-2 border-black last:border-r-0 group cursor-pointer hover:bg-gray-50 transition-colors relative h-20 sm:h-auto",
                                day.isToday && "bg-accent/5",
                                i >= 28 && "border-b-0"
                            )}
                        >
                            <span className={cn(
                                "text-xs sm:text-lg font-black italic",
                                day.isToday ? "text-accent" : "text-black/20"
                            )}>
                                {day.date}
                            </span>
                            {day.hasEvent && (
                                <div className="absolute bottom-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-black transform rotate-45 border border-white" />
                            )}
                            <div className="absolute inset-2 bg-accent opacity-0 group-hover:opacity-10 transition-opacity border-2 border-black" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="brutal-card p-8 bg-black text-white border-4 border-black rotate-1">
                    <h4 className="text-2xl font-black uppercase italic mb-4">Upcoming Drop</h4>
                    <p className="text-white/40 font-bold uppercase text-xs tracking-widest mb-6">Sequence #4021 - Neural Edit</p>
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-accent w-2/3" />
                        </div>
                        <span className="font-black italic">68%</span>
                    </div>
                </div>
                <div className="brutal-card p-8 bg-white border-4 border-black -rotate-1">
                    <h4 className="text-2xl font-black uppercase italic mb-4 text-black">Connected Apps</h4>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-100 border-2 border-black flex items-center justify-center opacity-40">T</div>
                        <div className="w-10 h-10 bg-gray-100 border-2 border-black flex items-center justify-center opacity-40">I</div>
                        <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center text-white">+</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function SettingsTab() {
    const { currentUser } = useAuth();
    const { addToast } = useToast();
    const [name, setName] = useState(currentUser?.displayName || "");
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(currentUser?.photoURL || "");
    const [saving, setSaving] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                return addToast({ title: "File too large", description: "Please upload an image under 2MB.", type: "error" });
            }
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSave = async () => {
        if (!name && !image) return;
        setSaving(true);
        try {
            let photoURL = currentUser?.photoURL;

            if (image) {
                const storageRef = ref(storage, `profiles/${currentUser.uid}`);
                await uploadBytes(storageRef, image);
                photoURL = await getDownloadURL(storageRef);
            }

            await updateUserProfile({
                displayName: name,
                photoURL: photoURL
            });

            addToast({ title: "Profile Updated", type: "success" });
        } catch (error) {
            addToast({ title: "Update Failed", description: error.message, type: "error" });
        } finally {
            setSaving(false);
        }
    };



    return (
        <div className="max-w-3xl space-y-12">
            <h1 className="text-5xl font-black uppercase italic tracking-tighter border-b-8 border-black pb-8">Settings</h1>
            <div className="brutal-card p-10 space-y-10 bg-white border-4 border-black">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="relative group">
                        <Avatar
                            src={previewUrl}
                            fallback={name.charAt(0) || "U"}
                            size="lg"
                            className="h-32 w-32 border-4 border-black shadow-[6px_6px_0px_0px_rgba(112,0,223,1)]"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white font-black uppercase text-[10px] tracking-widest"
                        >
                            Change
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="space-y-2 text-center sm:text-left">
                        <h3 className="text-2xl font-black uppercase italic">Profile Image</h3>
                        <p className="text-xs font-black uppercase tracking-widest text-black/40">JPG, PNG up to 2MB</p>
                        <Button
                            variant="brutal-ghost"
                            size="sm"
                            className="mt-4 italic"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            Upload New
                        </Button>
                    </div>
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-black/40 ml-1">Your Name</label>
                    <Input
                        variant="brutal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-16 text-xl"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-black/40 ml-1">Workspace Theme</label>
                    <div className="flex gap-4">
                        <div className="h-12 w-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer border-accent" />
                        <div className="h-12 w-12 bg-black border-4 border-black cursor-pointer opacity-20 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
                <Button
                    variant="brutal-primary"
                    className="h-18 w-full text-xl mt-8"
                    onClick={handleSave}
                    isLoading={saving}
                >
                    Save Changes
                </Button>
            </div>
        </div>
    );
}
