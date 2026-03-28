"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useSettings } from "./SettingsProvider";

export default function Hero() {
    const { is3DEnabled } = useSettings();
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
            id="hero"
            ref={sectionRef}
            className="h-screen w-full flex flex-col justify-center items-center px-4 relative overflow-hidden bg-background [will-change:transform] transition-colors duration-300"
        >
            {/* 3D Spline Backdrop - Hidden on Mobile or if Disabled */}
            <div className="absolute inset-0 z-0 hidden md:block">
                {(isVisible && is3DEnabled) ? (
                    <div className="relative w-full h-[110%] -top-[5%]">
                        <iframe
                            src='https://my.spline.design/thresholddarkambientui-KDI92nLR3Xs4sDmaBVv7wYZK/'
                            className="w-full h-full border-none opacity-60"
                            title="3D Hero Background"
                        />
                        {/* Visual filter overlay to blend and partially hide watermark area */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_100%)] opacity-30" />
                )}
            </div>

            {/* Mobile-Only Lightweight Background Gradient */}
            <div className="absolute inset-0 z-0 md:hidden bg-[radial-gradient(circle_at_center,_var(--background)_0%,_#111_100%)] opacity-50" />

            <div className="z-10 text-center max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-8xl md:text-[10rem] font-display font-black tracking-tighter text-foreground flex justify-center drop-shadow-[10px_10px_0px_rgba(var(--foreground-rgb),1)] transition-colors duration-300 uppercase">
                        {"zenvic".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                    
                    <motion.span
                        className="absolute -top-6 -right-8 text-xs font-black text-background bg-accent-1 border-2 border-foreground px-4 py-2 rotate-12 shadow-[4px_4px_0px_0px_rgba(var(--foreground-rgb),0.3)] rounded-lg"
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 12 }}
                        transition={{ delay: 1, type: "spring" }}
                    >
                        WEB3 NATIVE
                    </motion.span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl text-foreground font-black tracking-tighter text-center uppercase"
                >
                    Content Creator <span className="text-accent-1 mx-2">/</span>
                    Moderator <span className="text-accent-1 mx-2">/</span>
                    Designer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                >
                    <Link
                        href="#portfolio"
                        className="neo-brutal-btn px-10 py-4 text-xl flex items-center gap-3 bg-foreground text-background"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            View Work <ArrowRight className="w-6 h-6" />
                        </span>
                    </Link>

                    <Link
                        href="#contact"
                        className="neo-brutal-btn px-10 py-4 text-xl flex items-center gap-3"
                    >
                        <span className="flex items-center gap-3">
                            Contact Me <Mail className="w-6 h-6" />
                        </span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-foreground font-black border-2 border-foreground px-4 py-2 bg-background shadow-[4px_4px_0px_0px_var(--accent-1)] rounded-lg animate-bounce uppercase tracking-tighter"
            >
                Scroll to Explore ↓
            </motion.div>
        </section>
    );
}
