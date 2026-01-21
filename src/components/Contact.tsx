"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Twitter, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 bg-black border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
                >
                    Let&apos;s Build Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 mb-12 font-light"
                >
                    Open for collaborations, community moderation roles, and design inquiries.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <motion.a
                        href="mailto:shuhaibs296@gmail.com"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-3 p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group"
                    >
                        <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-lg font-medium">Email Me</span>
                    </motion.a>

                    <motion.a
                        href="https://t.me/Zenvicalpha"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-3 p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group"
                    >
                        <Send className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-lg font-medium">Telegram DM</span>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-center gap-8"
                >
                    {[
                        { icon: Twitter, href: "https://x.com/Zenvicalpha", label: "X (Twitter)" },
                        { icon: MessageSquare, href: "https://discord.gg/wJ7s7xFp", label: "Discord" },
                        { icon: Send, href: "https://t.me/Zenvicalpha", label: "Telegram" },
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors p-2 hover:scale-110 transform"
                            aria-label={social.label}
                        >
                            <social.icon className="w-6 h-6" />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
