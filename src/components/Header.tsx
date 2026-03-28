"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Moon, Zap, ZapOff } from "lucide-react";
import { useSettings } from "./SettingsProvider";

export default function Header() {
    const { theme, toggleTheme, is3DEnabled, toggle3D } = useSettings();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-background border-b-4 border-foreground transition-colors duration-300"
        >
            <Link href="/" className="text-3xl font-display font-black text-foreground tracking-tighter uppercase group">
                <span className="group-hover:text-accent-1 transition-colors">Z</span>
                <span className="group-hover:text-accent-2 transition-colors">N</span>
                <span className="group-hover:text-accent-3 transition-colors">V</span>
                <span className="group-hover:text-accent-1 transition-colors">C</span>
            </Link>

            <div className="flex items-center gap-6">
                <nav className="hidden md:flex gap-4 items-center mr-4">
                    {[
                        { name: "About", color: "hover:bg-accent-2 hover:shadow-[4px_4px_0_0_var(--foreground)]" },
                        { name: "Skills", color: "hover:bg-accent-1 hover:shadow-[4px_4px_0_0_var(--foreground)]" },
                        { name: "Portfolio", color: "hover:bg-accent-3 hover:shadow-[4px_4px_0_0_var(--foreground)]" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={`#${item.name.toLowerCase()}`}
                            className={`text-sm font-black text-foreground px-4 py-2 border-2 border-transparent transition-all uppercase tracking-tight rounded-lg ${item.color} hover:border-foreground active:translate-y-1 active:shadow-none`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center bg-background border-2 border-foreground shadow-[4px_4px_0px_0px_var(--accent-1)] px-4 py-2 gap-4 rounded-xl">
                    <button
                        onClick={toggleTheme}
                        className="text-foreground hover:scale-110 active:scale-95 transition-transform p-1"
                        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5 fill-accent-1" /> : <Moon className="w-5 h-5 fill-accent-1" />}
                    </button>
                    <div className="w-[2px] h-5 bg-foreground" />
                    <button
                        onClick={toggle3D}
                        className={`flex items-center gap-2 p-1 transition-all ${is3DEnabled ? 'text-foreground hover:scale-105' : 'text-red-600'}`}
                        title={is3DEnabled ? "Disable 3D (Performance)" : "Enable 3D"}
                    >
                        {is3DEnabled ? <Zap className="w-5 h-5 fill-accent-1" /> : <ZapOff className="w-5 h-5" />}
                        <span className="hidden sm:inline text-[10px] font-black leading-none tracking-tighter uppercase mt-0.5">
                            {is3DEnabled ? "3D ON" : "3D OFF"}
                        </span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
