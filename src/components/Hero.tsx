"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-screen w-full flex flex-col justify-center items-center px-4 relative overflow-hidden bg-black [will-change:transform]"
        >
            {/* 3D Spline Backdrop - Hidden on Mobile and when not in view */}
            <div className="absolute inset-0 z-0 hidden md:block">
                {isVisible && (
                    <div className="relative w-full h-[110%] -top-[5%]">
                        <iframe
                            src='https://my.spline.design/thresholddarkambientui-KDI92nLR3Xs4sDmaBVv7wYZK/'
                            className="w-full h-full border-none opacity-60"
                            title="3D Hero Background"
                        />
                        {/* Visual filter overlay to blend and partially hide watermark area */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
                    </div>
                )}
            </div>

            {/* Mobile-Only Lightweight Background Gradient */}
            <div className="absolute inset-0 z-0 md:hidden bg-[radial-gradient(circle_at_center,_var(--background)_0%,_#111_100%)] opacity-50" />

            <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-8xl md:text-9xl font-display font-bold tracking-tighter text-white flex justify-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {"zenvic".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{
                                    opacity: 1,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.4,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                    {/* Pulsating Aura - Simplified for Performance */}
                    <motion.div
                        className="absolute inset-0 -z-10 bg-white/5 blur-[60px] rounded-full"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="absolute -top-4 -right-4 text-xs font-mono text-gray-400 border border-gray-800 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        WEB3 NATIVE
                    </motion.span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 font-light tracking-wide"
                >
                    Content Creator <span className="text-gray-700 mx-2">|</span>
                    Moderator <span className="text-gray-700 mx-2">|</span>
                    Designer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                >
                    <Link
                        href="#portfolio"
                        className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="#contact"
                        className="group px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                    >
                        <span className="flex items-center gap-2">
                            Contact Me
                            <svg
                                className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20.317 4.37a19.782 19.782 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.006 19.006 0 004.88 4.37.071.071 0 004.852 4.41c-3.11 4.639-4.007 9.162-3.586 13.626a.074.074 0 00.031.056 19.909 19.909 0 005.993 3.03.078.078 0 00.084-.028 14.28 14.28 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.23 10.23 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.585-13.627a.072.072 0 00-.028-.039zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.334.955-2.417 2.157-2.417 1.21 0 2.176 1.083 2.157 2.417 0 1.335-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.334.955-2.417 2.157-2.417 1.21 0 2.176 1.083 2.157 2.417 0 1.335-.946 2.42-2.157 2.42z" />
                            </svg>
                        </span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-600 font-mono animate-bounce"
            >
                SCROLL TO EXPLORE
            </motion.div>
        </section>
    );
}
