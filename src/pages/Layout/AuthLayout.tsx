import { useTheme } from "@/hooks/useTheme";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    useTheme()
    return (
        <div className="flex-center min-h-screen bg-background">
            <main className="form-card">
                <Outlet />
            </main>
        </div>
    );
}