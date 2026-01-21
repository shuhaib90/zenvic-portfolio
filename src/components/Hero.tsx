"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center px-4 relative overflow-hidden bg-black">
            {/* 3D Spline Backdrop */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-[110%] -top-[5%]">
                    <iframe
                        src='https://my.spline.design/thresholddarkambientui-KDI92nLR3Xs4sDmaBVv7wYZK/'
                        className="w-full h-full border-none"
                    />
                    {/* Visual filter overlay to blend and partially hide watermark area */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
                </div>
            </div>

            <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-8xl md:text-9xl font-display font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        zenvic
                    </h1>
                    <motion.span
                        className="absolute -top-4 -right-4 text-xs font-mono text-gray-400 border border-gray-800 px-2 py-1 rounded-full"
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
