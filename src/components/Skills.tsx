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
        <section id="skills" className="py-32 px-4 relative bg-background border-t border-foreground/10 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16 text-center"
                >
                    Expertise
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 border border-foreground/10 rounded-2xl hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-6 font-display">{group.category}</h3>
                            <ul className="space-y-3">
                                {group.items.map((item) => (
                                    <li key={item} className="text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
