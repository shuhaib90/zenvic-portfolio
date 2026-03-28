"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

export default function Rating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="py-24 bg-background border-b-4 border-foreground flex flex-col items-center justify-center px-4 overflow-hidden relative transition-colors duration-300">
            <div className="max-w-xl w-full text-center relative z-10">
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="rating-state"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="neo-brutal-card p-12 bg-background space-y-10 accent-blue rounded-[24px]"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground uppercase tracking-tighter leading-none">
                                Rate The Experience
                            </h2>
                            <p className="text-foreground font-black uppercase tracking-tight text-sm">
                                Your <span className="text-accent-3">feedback</span> helps me improve. 
                            </p>

                            <div className="flex items-center justify-center gap-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.button
                                        key={star}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => {
                                            setRating(star);
                                            setTimeout(() => setSubmitted(true), 400);
                                        }}
                                        className="relative p-1"
                                    >
                                        <Star
                                            className={`w-12 h-12 md:w-16 md:h-16 transition-all duration-200 ${star <= (hover || rating)
                                                ? "fill-accent-2 text-foreground drop-shadow-[4px_4px_0px_rgba(var(--foreground-rgb),0.5)]"
                                                : "text-foreground/20 fill-transparent"
                                                }`}
                                            strokeWidth={3}
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="thank-you-state"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="neo-brutal-card p-12 bg-accent-1 text-background space-y-6 rounded-[24px]"
                        >
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                    className="w-20 h-20 bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] flex items-center justify-center rounded-xl"
                                >
                                    <Star className="text-foreground fill-accent-1 w-10 h-10" />
                                </motion.div>
                            </div>
                            <h3 className="text-5xl font-display font-black uppercase tracking-tighter">
                                RESPECT!
                            </h3>
                            <p className="text-background font-black uppercase text-xl">
                                Thanks for the {rating}-STAR review.
                            </p>
                            <motion.button
                                onClick={() => {
                                    setSubmitted(false);
                                    setRating(0);
                                }}
                                className="neo-brutal-btn bg-background text-foreground px-8 py-3 text-sm mt-8 border-background shadow-none hover:shadow-[4px_4px_0px_0px_white] rounded-xl"
                            >
                                RATE AGAIN
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
