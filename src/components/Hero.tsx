"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
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
                            Contact Me <Mail className="w-4 h-4" />
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
