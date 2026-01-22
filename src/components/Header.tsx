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
            className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
        >
            <Link href="/" className="text-2xl font-display font-bold text-white tracking-widest">
                ZNVC
            </Link>

            <div className="flex items-center gap-6">
                <nav className="hidden md:flex gap-8 items-center mr-4">
                    {["About", "Skills", "Portfolio"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-mono text-gray-400 hover:text-white transition-colors tracking-widest uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-white hover:text-gray-400 transition-colors p-1"
                        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <div className="w-[1px] h-4 bg-white/20" />
                    <button
                        onClick={toggle3D}
                        className={`flex items-center gap-2 transition-colors p-1 ${is3DEnabled ? 'text-white' : 'text-red-500 opacity-50'}`}
                        title={is3DEnabled ? "Disable 3D (Performance)" : "Enable 3D"}
                    >
                        {is3DEnabled ? <Zap className="w-4 h-4" /> : <ZapOff className="w-4 h-4" />}
                        <span className="hidden sm:inline text-[9px] font-mono leading-none tracking-tighter">
                            {is3DEnabled ? "3D ON" : "3D OFF"}
                        </span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
