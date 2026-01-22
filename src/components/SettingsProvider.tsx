"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface SettingsContextType {
    theme: Theme;
    is3DEnabled: boolean;
    toggleTheme: () => void;
    toggle3D: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [is3DEnabled, setIs3DEnabled] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load initial settings from localStorage
        const savedTheme = localStorage.getItem("zenvic-theme") as Theme;
        const saved3D = localStorage.getItem("zenvic-3d");

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            document.documentElement.classList.add("dark");
        }

        if (saved3D !== null) {
            setIs3DEnabled(saved3D === "true");
        }

        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("zenvic-theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const toggle3D = () => {
        const newState = !is3DEnabled;
        setIs3DEnabled(newState);
        localStorage.setItem("zenvic-3d", String(newState));
    };

    return (
        <SettingsContext.Provider value={{ theme, is3DEnabled, toggleTheme, toggle3D }}>
            <div className={mounted ? "opacity-100" : "opacity-0"}>
                {children}
            </div>
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}
