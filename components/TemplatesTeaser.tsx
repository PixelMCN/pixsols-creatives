"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { templates, weddingCards } from "@/lib/templates";
import { ArrowRight } from "lucide-react";

export default function TemplatesTeaser() {
    const teaserSites = templates.slice(0, 3);
    const teaserCards = weddingCards.slice(0, 2);

    return (
        <section className="py-24 md:py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
                >
                    <div>
                        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                            Ready-Made Templates
                        </h2>
                        <p className="mt-4 text-text-muted text-base md:text-lg max-w-lg">
                            Launch faster with our pre-built, professionally designed templates.
                        </p>
                    </div>
                    <Link href="/templates">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-heading font-bold text-sm uppercase tracking-widest hover:shadow-glow transition-shadow duration-300 shrink-0"
                        >
                            View All Templates
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Site Templates Row */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight mb-5"
                >
                    Site Templates
                </motion.h3>
                <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6">
                    {teaserSites.map((template, i) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
                        >
                            <div className="relative aspect-[4/3] bg-surface-light border border-border overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                                <Image
                                    src={template.thumbnail}
                                    alt={template.name}
                                    fill
                                    unoptimized
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                            </div>
                            <div className="mt-3">
                                <h4 className="font-heading font-bold text-white text-base">
                                    {template.name}
                                </h4>
                                <span className="text-text-muted text-xs uppercase tracking-wider">
                                    {template.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Wedding Cards Row */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight mt-10 mb-5"
                >
                    Wedding Card Templates
                </motion.h3>
                <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-6 px-6">
                    {teaserCards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group flex-shrink-0 w-[220px] sm:w-[260px] snap-start"
                        >
                            <div className="relative aspect-[3/4] bg-surface-light border border-border overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                                <Image
                                    src={card.thumbnail}
                                    alt={card.name}
                                    fill
                                    unoptimized
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                            </div>
                            <div className="mt-3">
                                <h4 className="font-heading font-bold text-white text-base">
                                    {card.name}
                                </h4>
                                <span className="text-text-muted text-xs uppercase tracking-wider">
                                    {card.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
