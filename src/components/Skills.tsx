"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Web3 & Strategy",
        items: ["Content Writing", "X/Twitter Growth", "DAO Governance", "Community Building"]
    },
    {
        category: "Design & Creative",
        items: ["Graphic Design", "Brand Identity", "UI/UX Design", "Video Editing"]
    },
    {
        category: "Tools & Platforms",
        items: ["Discord Setup", "Telegram Management", "Figma", "Adobe Suite"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-4 relative bg-background border-b-4 border-foreground transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-black text-foreground mb-24 text-center uppercase tracking-tighter"
                >
                    Expertise
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {skills.map((group, idx) => {
                        const accentClass = idx === 0 ? "accent-green" : idx === 1 ? "accent-pink" : "accent-blue";
                        const bgAccent = idx === 0 ? "bg-accent-1" : idx === 1 ? "bg-accent-2" : "bg-accent-3";
                        const shadowAccent = idx === 0 ? "hover:shadow-[12px_12px_0px_0px_var(--accent-1)]" : idx === 1 ? "hover:shadow-[12px_12px_0px_0px_var(--accent-2)]" : "hover:shadow-[12px_12px_0px_0px_var(--accent-3)]";
                        
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, type: "spring" }}
                                className={`neo-brutal-card flex flex-col h-full bg-background transition-all duration-300 ${shadowAccent}`}
                            >
                                <div className={`${bgAccent} p-6 border-b-4 border-foreground`}>
                                    <h3 className="text-2xl font-black text-background font-display uppercase tracking-widest leading-none">
                                        {group.category}
                                    </h3>
                                </div>
                                
                                <div className="p-8 flex-grow flex flex-wrap gap-3 items-start content-start">
                                    {group.items.map((item, i) => (
                                        <motion.span 
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                                            className="px-4 py-2 border-2 border-foreground bg-background text-foreground font-black text-sm uppercase tracking-tighter shadow-[3px_3px_0px_0px_rgba(var(--foreground-rgb),1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default rounded-md"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
