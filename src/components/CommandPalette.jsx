import { useEffect, useState } from "react";
import {
    Search,
    LayoutGrid,
    BrainCircuit,
    Clapperboard,
    Settings,
    LogOut,
    Plus,
    ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GlassPanel } from "./ui/Core";

export default function CommandPalette({ isOpen, onClose, projects = [] }) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                onClose(!isOpen);
            }
            if (e.key === "Escape") {
                onClose(false);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const projectCommands = projects.map(p => ({
        icon: Clapperboard,
        label: p.title,
        type: "Project",
        action: () => navigate(`/editor/${p.id}`)
    }));

    const commands = [
        { icon: LayoutGrid, label: "Go to Dashboard", type: "Command", action: () => navigate("/dashboard") },
        { icon: Plus, label: "Create New Project", type: "Command", action: () => console.log("Create") },
        { icon: Settings, label: "Settings", type: "Command", action: () => navigate("/dashboard") },
        { icon: LogOut, label: "Logout", type: "Command", action: () => navigate("/login") },
        ...projectCommands
    ];

    const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));


    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in-fade"
                onClick={() => onClose(false)}
            />

            <GlassPanel className="w-full max-w-xl p-0 overflow-hidden relative z-10 animate-in-fade">
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
                    <Search className="h-5 w-5 text-white/50" />
                    <input
                        autoFocus
                        className="flex-1 bg-transparent outline-none text-white placeholder:text-white/20 text-sm"
                        placeholder="Type a command..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-white/50 font-mono">ESC</kbd>
                </div>

                <div className="py-2 max-h-[300px] overflow-y-auto">
                    {filtered.length === 0 ? (
                        <div className="px-4 py-8 text-center text-sm text-white/30">No results found.</div>
                    ) : (
                        filtered.map((cmd, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    cmd.action();
                                    onClose(false);
                                }}
                                className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                    <cmd.icon className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-white/80 group-hover:text-white">{cmd.label}</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-0.5">{cmd.type}</span>
                                </div>
                                {i === 0 && <ArrowRight className="h-4 w-4 ml-auto text-white/30 group-hover:text-white/70" />}

                            </button>
                        ))
                    )}
                </div>
            </GlassPanel>
        </div>
    );
}
