import React from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

export function Button({ className, variant = "primary", size = "md", isLoading, children, ...props }) {
    const variants = {
        primary: "bg-black text-white hover:bg-black/90 active:scale-95 shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]",
        secondary: "bg-white text-black border-2 border-black hover:bg-gray-50 active:scale-95",
        ghost: "text-black/60 hover:text-black hover:bg-black/5",
        glass: "bg-black/5 backdrop-blur-md border border-black/10 text-black",
        brutal: "brutal-button",
        "brutal-primary": "brutal-button-primary",
        "brutal-ghost": "brutal-button-ghost"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-[10px]",
        md: "px-4 py-2 text-xs",
        lg: "px-6 py-3 text-sm",
        icon: "p-2"
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-lg font-black uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
        </button>
    );
}

export function Input({ className, variant = "standard", ...props }) {
    return (
        <input
            className={cn(
                "flex h-10 w-full rounded-lg border-2 px-4 py-2 text-xs text-black shadow-sm transition-all placeholder:text-black/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                variant === "brutal"
                    ? "bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:shadow-[6px_6px_0px_0px_rgba(112,0,223,1)] uppercase font-black tracking-widest text-[10px]"
                    : "border-black/10 bg-gray-50 focus-visible:border-black",
                className
            )}
            {...props}
        />
    );
}

export function GlassPanel({ className, variant = "glass", children, ...props }) {
    return (
        <div
            className={cn(
                variant === "glass" ? "bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.05)] rounded-2xl" : "brutal-card",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function SidebarItem({ icon: Icon, label, active, onClick, collapsed }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                active
                    ? "bg-black text-white shadow-[4px_4px_0px_0px_rgba(112,0,223,1)]"
                    : "text-black/40 hover:text-black hover:bg-black/5"
            )}
        >
            <Icon className={cn("h-4 w-4 shrink-0", active && "text-white")} />
            {!collapsed && (
                <span className="text-[10px] font-black uppercase tracking-widest opacity-0 animate-in-fade" style={{ animationDuration: '200ms', opacity: 1 }}>
                    {label}
                </span>
            )}
            {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-black border-2 border-black rounded text-[10px] font-black uppercase text-white opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    {label}
                </div>
            )}
        </button>
    );
}

export function Avatar({ src, fallback, size = "md", className }) {
    const sizes = {
        sm: "w-6 h-6 text-[10px]",
        md: "w-8 h-8 text-xs",
        lg: "w-10 h-10 text-sm"
    };

    return (
        <div className={cn("relative rounded-full overflow-hidden bg-black/5 flex items-center justify-center border-2 border-black", sizes[size], className)}>
            {src ? (
                <img src={src} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
                <span className="font-black text-black/40 uppercase">{fallback}</span>
            )}
        </div>
    );
}
