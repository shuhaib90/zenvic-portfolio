"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-4 relative border-b-4 border-foreground bg-background transition-colors duration-300 overflow-hidden">
            <div className="max-w-5xl mx-auto relative">
                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-black text-foreground mb-12 uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(var(--foreground-rgb),0.2)]"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-[1fr_3fr] gap-0 border-4 border-foreground bg-foreground shadow-[12px_12px_0px_0px_rgba(var(--foreground-rgb),1)] rounded-[16px] overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-background p-8 border-r-4 border-foreground flex items-center justify-center"
                    >
                        <div className="w-full aspect-square bg-accent-2 border-4 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] rounded-xl flex items-center justify-center font-black text-4xl uppercase text-background">
                            ZNVC
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-background p-8 md:p-12 space-y-8 text-xl md:text-2xl text-foreground font-bold leading-tight"
                    >
                        <p className="uppercase tracking-tighter">
                            I’m <span className="bg-accent-2 text-background px-2 py-1 rounded-sm">zenvic</span>, a Web3 content writer, community moderator, and project ambassador.
                            I have 2 years of experience working in the crypto and Web3 space.
                        </p>

                        <p className="uppercase tracking-tighter">
                            I’ve worked with <span className="underline decoration-accent-2 decoration-4 underline-offset-4">10+ Web3 projects</span>, helping them grow through clear content,
                            strong community management, and daily engagement. I’ve managed and moderated communities with over
                            <span className="bg-foreground text-background px-2 py-1 ml-1 rounded-sm"> 20,000 members</span> across Discord and Telegram.
                        </p>

                        <p className="uppercase tracking-tighter">
                            I focus on creating content that is easy to understand, honest, and useful. As a moderator and ambassador,
                            I help projects build trust, keep communities active, and turn users into long-term supporters.
                        </p>

                        <p className="uppercase tracking-tighter text-muted-foreground italic">
                            I enjoy working with early-stage Web3 projects and teams that care about real value, strong communities,
                            and long-term growth.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
