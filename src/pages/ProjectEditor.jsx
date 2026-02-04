import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Play, Pause, SkipBack, SkipForward, ZoomIn, ZoomOut,
    Video, Music, Image as ImageIcon, Sparkles, ChevronLeft,
    Layers, Wand2, Download, Settings, Trash2, GripVertical
} from "lucide-react";
import { SidebarItem, Button, GlassPanel } from "../components/ui/Core";
import CommandPalette from "../components/CommandPalette";
import { cn } from "../lib/utils";
import { useProjectStore } from "../store/projectStore";
import { API } from "../lib/api";
import { useToast } from "../components/Toast";
import { db } from "../Firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

export default function ProjectEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToast } = useToast();
    const [isCmdKOpen, setIsCmdKOpen] = useState(false);

    // Global Store
    const {
        tracks, currentTime, duration, isPlaying,
        togglePlay, seekTo, tick, addClip, selectClip, selectedClipId,
        setProject, deleteClip, title
    } = useProjectStore();

    // Refs for Animation Loop
    const requestRef = useRef();
    const previousTimeRef = useRef();

    const animate = time => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = (time - previousTimeRef.current) / 1000;
            tick(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (isPlaying) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestRef.current);
            previousTimeRef.current = undefined;
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isPlaying]);

    const handleScrub = (e) => {
        const timelineRect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - timelineRect.left) / timelineRect.width;
        seekTo(percent * duration);
    };

    // Persistence Logic
    useEffect(() => {
        if (!id) return;

        // 1. Initial Fetch & Real-time Sync
        const unsubscribe = onSnapshot(doc(db, "projects", id), (docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                setProject(data);
            }
        });

        return () => unsubscribe();
    }, [id]);

    // 2. Auto-Save Debouncer (Only if dirty)
    useEffect(() => {
        if (!id) return;

        const saveToFirestore = async () => {
            try {
                const projectRef = doc(db, "projects", id);
                await updateDoc(projectRef, {
                    tracks,
                    duration,
                    lastModified: { seconds: Math.floor(Date.now() / 1000) } // Simplified timestamp
                });
            } catch (err) {
                console.error("Auto-save failed", err);
            }
        };

        const timeoutId = setTimeout(saveToFirestore, 1500); // Save after 1.5s
        return () => clearTimeout(timeoutId);
    }, [tracks, duration, id]);

    const handleGenerate = async () => {
        addToast({ title: "Connecting to Neural Core...", type: "default" });
        try {
            const result = await API.generateExecutionPlan("Cyberpunk intro");
            addToast({ title: "Plan Generated", description: "Injecting tracks...", type: "success" });

            // Actually adding content to the store
            addClip('track-1', {
                name: 'Neon_Pulse.mp4',
                start: currentTime,
                duration: 5,
                type: 'video'
            });
        } catch (error) {
            addToast({ title: "Generation Failed", description: "AI Busy", type: "error" });
        }
    };

    return (
        <div className="h-screen w-screen bg-[#030014] text-white overflow-hidden flex flex-col font-sans selection:bg-accent/30">
            <CommandPalette isOpen={isCmdKOpen} onClose={setIsCmdKOpen} />

            {/* Top Bar - 8px Grid (h-14 = 56px) */}
            <header className="h-14 border-b border-white/5 bg-black/40 backdrop-blur-2xl flex items-center justify-between px-6 z-50">
                <div className="flex items-center gap-6">
                    <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')} className="hover:bg-white/5">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="space-y-0.5">
                        <h1 className="text-xs font-semibold tracking-tight">{title}</h1>
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
                            <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Neural Link Active</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="secondary" size="sm" onClick={handleGenerate} className="gap-2 h-9 text-[10px]">
                        <Sparkles className="h-3 w-3 text-accent" />
                        <span>Neural Generate</span>
                    </Button>
                    <Button variant="primary" size="sm" className="gap-2 h-9 text-[10px]">
                        <Download className="h-3 w-3" />
                        <span>Export</span>
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar - 8px Grid (w-16 = 64px) */}
                <div className="w-16 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center py-6 gap-6 z-40">
                    <SidebarItem icon={Layers} active />
                    <SidebarItem icon={Wand2} />
                    <SidebarItem icon={Music} />
                    <SidebarItem icon={ImageIcon} />
                    <div className="flex-1" />
                    <SidebarItem icon={Settings} />
                </div>

                {/* Center: Canvas - Fluid Spacing */}
                <div className="flex-1 bg-[#050505] relative flex items-center justify-center p-8">
                    <div className="aspect-video h-full max-h-[70vh] bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Video className="w-20 h-20 text-white/5" />
                        </div>

                        {/* Playhead Overlay */}
                        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono border border-white/10 text-white/70 shadow-xl">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Inspector - 8px Grid (w-72 = 288px) */}
                <div className="w-72 border-l border-white/5 bg-black/40 backdrop-blur-xl p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Inspector</h3>
                        <Settings className="h-3 w-3 text-white/20" />
                    </div>

                    {selectedClipId ? (
                        <div className="space-y-6 animate-in-fade">
                            <div className="space-y-2">
                                <label className="text-[10px] text-white/30 font-bold uppercase">Selection</label>
                                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                                    <p className="font-mono text-xs text-accent truncate">{selectedClipId}</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => deleteClip(selectedClipId)}
                                    className="w-full text-red-400 hover:bg-red-500/10 hover:text-red-400 border-red-500/10"
                                >
                                    <Trash2 className="h-3.5 w-3.5 mr-2" />
                                    Delete Component
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Layers className="h-4 w-4 text-white/20" />
                            </div>
                            <p className="text-[10px] text-white/30 leading-relaxed">
                                Select an element on the timeline to view properties
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom: Timeline - 8px Grid (h-72 = 288px) */}
            <div className="h-72 border-t border-white/5 bg-[#030014] flex flex-col relative z-50">
                {/* Timeline Toolbar - h-10 (40px) */}
                <div className="h-10 border-b border-white/5 flex items-center justify-between px-6 bg-black/40">
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" onClick={() => seekTo(0)} className="h-8 w-8 p-0"><SkipBack className="h-3.5 w-3.5" /></Button>
                        <Button variant="ghost" size="sm" onClick={togglePlay} className="h-8 w-8 p-0">
                            {isPlaying ? <Pause className="h-3.5 w-3.5 fill-white" /> : <Play className="h-3.5 w-3.5 fill-white ml-0.5" />}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => seekTo(duration)} className="h-8 w-8 p-0"><SkipForward className="h-3.5 w-3.5" /></Button>

                        <div className="h-4 w-px bg-white/10 mx-2" />

                        <span className="text-[11px] font-mono text-accent">
                            {formatTime(currentTime)}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                            <ZoomOut className="h-3 w-3 text-white/30" />
                            <input type="range" className="w-20 h-0.5 accent-white bg-white/10 rounded-full appearance-none cursor-pointer" />
                            <ZoomIn className="h-3 w-3 text-white/30" />
                        </div>
                    </div>
                </div>

                {/* Ruler & Tracks Container */}
                <div className="flex-1 overflow-auto relative custom-scrollbar select-none" onClick={handleScrub}>
                    {/* Ruler */}
                    <div className="h-8 border-b border-white/5 bg-white/[0.01] flex relative min-w-full">
                        {Array.from({ length: Math.ceil(duration / 5) }).map((_, i) => (
                            <div key={i} className="flex-1 border-l border-white/5 text-[9px] font-mono text-white/20 pl-2 pt-2 select-none pointer-events-none" style={{ minWidth: '120px' }}>
                                {formatTime(i * 5)}
                            </div>
                        ))}
                    </div>

                    {/* Tracks Area */}
                    <div className="p-6 space-y-3 relative min-w-full pb-12">
                        {/* Playhead */}
                        <div
                            className="absolute top-0 bottom-0 w-px bg-red-500 z-50 pointer-events-none transition-all duration-75"
                            style={{ left: `${(currentTime / duration) * 100}%` }}
                        >
                            <div className="w-3 h-3 bg-red-500 rotate-45 -translate-x-1.5 -translate-y-1.5 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                        </div>

                        {tracks.length > 0 ? tracks.map(track => (
                            <div key={track.id} className="h-16 bg-white/[0.02] rounded-xl border border-white/5 relative group cursor-pointer hover:bg-white/[0.04] transition-all">
                                <div className="absolute left-3 top-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 pointer-events-none z-10">
                                    {track.label}
                                </div>

                                {track.clips.map(clip => (
                                    <div
                                        key={clip.id}
                                        onClick={(e) => { e.stopPropagation(); selectClip(clip.id); }}
                                        className={cn(
                                            "absolute top-2 bottom-2 rounded-lg border backdrop-blur-md transition-all flex items-center px-3 group/clip",
                                            selectedClipId === clip.id
                                                ? "bg-accent/20 border-accent shadow-[0_0_20px_rgba(112,0,223,0.2)] ring-1 ring-accent/50"
                                                : "bg-white/5 border-white/10 hover:border-white/20"
                                        )}
                                        style={{
                                            left: `${(clip.start / duration) * 100}%`,
                                            width: `${(clip.duration / duration) * 100}%`
                                        }}
                                    >
                                        <GripVertical className="h-3 w-3 text-white/20 mr-2 group-hover/clip:text-white/40 transition-colors" />
                                        <span className="text-[10px] font-medium truncate">{clip.name}</span>
                                    </div>
                                ))}
                            </div>
                        )) : (
                            <div className="h-32 flex items-center justify-center border border-dashed border-white/5 rounded-2xl text-white/10 text-xs italic">
                                Loading Neural Tracks...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${min}:${sec.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
}
