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
                    duration: 180,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, selectedProject, controls]);

    return (
        <section id="portfolio" className="py-32 bg-background border-b-4 border-foreground overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 mb-24">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-display font-black text-foreground uppercase tracking-tighter drop-shadow-[6px_6px_0px_var(--accent-3)]"
                >
                    Visual Vault
                </motion.h2>
            </div>

            <div
                className="relative group cursor-grab active:cursor-grabbing border-y-4 border-foreground bg-accent-3/5 py-12"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    animate={controls}
                    drag="x"
                    dragConstraints={{ left: -projects.length * 600, right: 0 }}
                    className="flex gap-12 whitespace-nowrap px-4 [will-change:transform]"
                    style={{ width: "max-content" }}
                >
                    {duplicatedProjects.map((project, idx) => (
                        <motion.div
                            key={`${project.id}-${idx}`}
                            onClick={() => setSelectedProject(project)}
                            className="relative w-[350px] md:w-[600px] aspect-video flex-shrink-0 group neo-brutal-card cursor-pointer accent-blue rounded-2xl overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-accent-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-8">
                                <span className="text-sm font-black text-background mb-2 uppercase tracking-tight bg-foreground w-fit px-2 ml-[-32px] pl-8 rounded-r-md">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-background font-display uppercase tracking-tighter leading-none">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 transition-colors duration-300"
                    onClick={() => setSelectedProject(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-background hover:scale-110 active:scale-95 z-[210] p-4 bg-accent-3 border-4 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] transition-all rounded-xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="relative w-full max-w-7xl aspect-video overflow-hidden border-[6px] border-foreground shadow-[16px_16px_0px_0px_var(--accent-3)] bg-muted rounded-[24px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-contain p-8"
                            priority
                        />
                        <div className="absolute top-0 left-0 bg-accent-3 text-background p-6 border-r-4 border-b-4 border-foreground rounded-br-[24px]">
                            <h3 className="text-4xl font-black mb-1 font-display uppercase tracking-tighter leading-none">
                                {selectedProject.title}
                            </h3>
                            <p className="text-sm font-black uppercase tracking-widest opacity-80">
                                {selectedProject.category}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
