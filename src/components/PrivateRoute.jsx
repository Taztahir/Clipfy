import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Loader2 } from "lucide-react";

export default function PrivateRoute({ children }) {
    const { currentUser, loading } = useAuth();


    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
                <Loader2 className="h-10 w-10 animate-spin mb-6 text-accent" />
                <p className="text-black/40 font-black uppercase tracking-[0.2em] text-xs">Authenticating...</p>
            </div>
        );
    }

    return currentUser ? children : <Navigate to="/login" />;

}
