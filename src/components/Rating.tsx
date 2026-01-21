"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

export default function Rating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="py-24 bg-black border-t border-white/5 flex flex-col items-center justify-center px-4 overflow-hidden relative">
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-xl w-full text-center relative z-10">
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="rating-state"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter">
                                Rate This Portfolio
                            </h2>
                            <p className="text-gray-400 font-light">
                                Your feedback helps me improve. How would you rate your experience?
                            </p>

                            <div className="flex items-center justify-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.button
                                        key={star}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => {
                                            setRating(star);
                                            // Mock submission
                                            setTimeout(() => setSubmitted(true), 400);
                                        }}
                                        className="relative p-2"
                                    >
                                        <Star
                                            className={`w-10 h-10 md:w-12 md:h-12 transition-colors duration-300 ${star <= (hover || rating)
                                                    ? "fill-white text-white translate-y-[-2px] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                                    : "text-white/20 fill-transparent"
                                                }`}
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
                            className="space-y-4"
                        >
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                                >
                                    <Star className="text-black fill-black w-8 h-8" />
                                </motion.div>
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white uppercase italic">
                                Thank You!
                            </h3>
                            <p className="text-gray-400 font-light">
                                I appreciate your {rating}-star rating.
                            </p>
                            <motion.button
                                onClick={() => {
                                    setSubmitted(false);
                                    setRating(0);
                                }}
                                className="text-xs font-mono text-gray-500 hover:text-white transition-colors underline underline-offset-4 mt-8"
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
