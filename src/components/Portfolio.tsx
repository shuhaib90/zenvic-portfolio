"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const projects = [
    { id: 1, title: "Temple Partnership", category: "Strategy", image: "/portfolio/image0.jpg" },
    { id: 2, title: "Rayls Allocation tiers", category: "Analysis", image: "/portfolio/image1.jpg" },
    { id: 3, title: "ZAMA Creator Program", category: "Content", image: "/portfolio/image2.jpg" },
    { id: 4, title: "Zama x Ledger Podcast", category: "Content", image: "/portfolio/image3.jpg" },
    { id: 5, title: "Zama Creators Rank Drop", category: "Strategy", image: "/portfolio/image4.jpg" },
    { id: 6, title: "Rayls TGE", category: "Launch", image: "/portfolio/image5.jpg" },
    { id: 7, title: "Rayls Bank Blockchain", category: "FinTech", image: "/portfolio/image6.jpg" },
];

// Double the projects array for seamless looping
const duplicatedProjects = [...projects, ...projects];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused && !selectedProject) {
            controls.start({
                x: [0, -100 * (projects.length) + "%"],
                transition: {
                    duration: 180, // Extremely slow for a premium, gallery feel
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, selectedProject, controls]);

    return (
        <section id="portfolio" className="py-32 bg-background border-t border-foreground/10 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tighter"
                >
                    Selected Work
                </motion.h2>
            </div>

            {/* Marquee/Manual Scroll Container */}
            <div
                className="relative group cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    animate={controls}
                    drag="x"
                    dragConstraints={{ left: -projects.length * 450, right: 0 }}
                    className="flex gap-6 whitespace-nowrap px-4 [will-change:transform]"
                    style={{ width: "max-content" }}
                >
                    {duplicatedProjects.map((project, idx) => (
                        <motion.div
                            key={`${project.id}-${idx}`}
                            onClick={() => setSelectedProject(project)}
                            className="relative w-[300px] md:w-[500px] aspect-video flex-shrink-0 group overflow-hidden rounded-2xl border border-foreground/10 bg-muted/30"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                                <span className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">{project.category}</span>
                                <h3 className="text-2xl font-bold text-foreground font-display">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox / Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-background/95 flex items-center justify-center p-4 md:p-12 transition-colors duration-300 backdrop-blur-xl"
                    onClick={() => setSelectedProject(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-foreground hover:text-muted-foreground z-10 p-2 bg-foreground/10 rounded-full transition-colors"
                        onClick={() => setSelectedProject(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative w-full max-w-6xl aspect-video overflow-hidden rounded-3xl border border-foreground/20 shadow-2xl bg-muted"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-8">
                            <h3 className="text-3xl font-bold text-foreground mb-2 font-display">{selectedProject.title}</h3>
                            <p className="text-muted-foreground text-lg uppercase tracking-widest">{selectedProject.category}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
