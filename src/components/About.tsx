"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-4 relative border-t border-white/10 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            About
                        </h2>
                        <div className="h-1 w-20 bg-white mb-6" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 text-xl text-gray-400 font-light leading-relaxed"
                    >
                        <motion.p
                            whileHover={{ color: "#fff", textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            transition={{ duration: 0.2 }}
                            className="cursor-default"
                        >
                            I’m <span className="text-white font-medium">zenvic</span>, a Web3 content writer, community moderator, and project ambassador.
                            I have 2 years of experience working in the crypto and Web3 space.
                        </motion.p>

                        <motion.p
                            whileHover={{ color: "#fff", textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            transition={{ duration: 0.2 }}
                            className="cursor-default"
                        >
                            I’ve worked with <span className="text-white">10+ Web3 projects</span>, helping them grow through clear content,
                            strong community management, and daily engagement. I’ve managed and moderated communities with over
                            <span className="text-white"> 20,000 members</span> across Discord and Telegram.
                        </motion.p>

                        <motion.p
                            whileHover={{ color: "#fff", textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            transition={{ duration: 0.2 }}
                            className="cursor-default"
                        >
                            I focus on creating content that is easy to understand, honest, and useful. As a moderator and ambassador,
                            I help projects build trust, keep communities active, and turn users into long-term supporters.
                        </motion.p>

                        <motion.p
                            whileHover={{ color: "#fff", textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                            transition={{ duration: 0.2 }}
                            className="cursor-default"
                        >
                            I enjoy working with early-stage Web3 projects and teams that care about real value, strong communities,
                            and long-term growth.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
