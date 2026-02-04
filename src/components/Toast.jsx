import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, XCircle, AlertCircle, X } from "lucide-react";
import { cn } from "../lib/utils";

const ToastContext = createContext(null);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback(({ title, description, type = "default", duration = 3000 }) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, title, description, type, duration }]);
        setTimeout(() => removeToast(id), duration);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onClose }) => {
    const icons = {
        default: <AlertCircle className="h-5 w-5" />,
        success: <CheckCircle2 className="h-5 w-5" />,
        error: <XCircle className="h-5 w-5" />,
        warning: <AlertCircle className="h-5 w-5" />
    };

    const variants = {
        default: "bg-accent border-black text-white",
        success: "bg-success border-black text-black",
        error: "bg-error border-black text-white",
        warning: "bg-warning border-black text-black"
    };

    return (
        <div className={cn(
            "pointer-events-auto p-4 flex items-start gap-4 animate-in-fade border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
            variants[toast.type] || variants.default
        )}>
            <div className="mt-0.5 shrink-0">{icons[toast.type] || icons.default}</div>
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-black uppercase italic tracking-tighter leading-none">{toast.title}</h4>
                {toast.description && <p className="text-[10px] font-bold mt-2 opacity-80 uppercase tracking-widest">{toast.description}</p>}
            </div>
            <button onClick={onClose} className="shrink-0 hover:scale-110 transition-transform mt-0.5">
                <X className="h-5 w-5 stroke-[3]" />
            </button>
        </div>
    );
};

