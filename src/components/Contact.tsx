"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Twitter, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 bg-background border-t border-foreground/10 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8"
                >
                    Let&apos;s Build Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground mb-12 font-light"
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
                        className="flex items-center justify-center gap-3 p-6 border border-foreground/10 rounded-2xl hover:bg-foreground/5 transition-all duration-300 group"
                    >
                        <Mail className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-lg font-medium text-foreground">Email Me</span>
                    </motion.a>

                    <motion.a
                        href="https://t.me/Zenvicalpha"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-3 p-6 border border-foreground/10 rounded-2xl hover:bg-foreground/5 transition-all duration-300 group"
                    >
                        <Send className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-lg font-medium text-foreground">Telegram DM</span>
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
                        {
                            icon: ({ className }: { className?: string }) => (
                                <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.37a19.782 19.782 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.006 19.006 0 004.88 4.37.071.071 0 004.852 4.41c-3.11 4.639-4.007 9.162-3.586 13.626a.074.074 0 00.031.056 19.909 19.909 0 005.993 3.03.078.078 0 00.084-.028 14.28 14.28 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.23 10.23 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.585-13.627a.072.072 0 00-.028-.039zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.334.955-2.417 2.157-2.417 1.21 0 2.176 1.083 2.157 2.417 0 1.335-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.334.955-2.417 2.157-2.417 1.21 0 2.176 1.083 2.157 2.417 0 1.335-.946 2.42-2.157 2.42z" />
                                </svg>
                            ),
                            href: "https://discord.gg/wJ7s7xFp",
                            label: "Discord"
                        },
                        { icon: Send, href: "https://t.me/Zenvicalpha", label: "Telegram" },
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-all duration-300 p-2 hover:scale-110 transform"
                            aria-label={social.label}
                        >
                            <social.icon className="w-6 h-6 fill-current" />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
