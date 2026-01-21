"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference"
        >
            <Link href="/" className="text-2xl font-display font-bold text-white tracking-widest">
                ZNVC
            </Link>

            <nav className="hidden md:flex gap-8">
                {["About", "Skills", "Portfolio", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-mono text-gray-400 hover:text-white transition-colors tracking-widest uppercase"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group cursor-pointer hover:bg-white hover:border-white transition-colors">
                <div className="w-4 h-[1px] bg-white group-hover:bg-black transition-colors" />
            </div>
        </motion.header>
    );
}
