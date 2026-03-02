"use client";

import { motion, Variants } from "framer-motion";
import { Film, Palette, Globe } from "lucide-react";

const services = [
    {
        icon: Film,
        title: "Media Works",
        items: [
            "Video Editing",
            "Shorts & Reels",
            "Devotional Content",
            "Podcast Production",
            "Video Thumbnails",
        ],
    },
    {
        icon: Palette,
        title: "Artwork",
        items: [
            "Wedding Cards",
            "Birthday Cards",
            "Anniversary Cards",
            "Custom Event Designs",
        ],
    },
    {
        icon: Globe,
        title: "Websites",
        items: [
            "Static Websites",
            "Portfolio Sites",
            "Website Templates",
            "Custom Builds from Scratch",
        ],
    },
];

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardAnim: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                        What We Do
                    </h2>
                    <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl">
                        Three pillars of creative execution. Every project gets the same
                        obsessive attention to detail.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardAnim}
                            className="group relative border-l-2 border-accent bg-surface p-8 md:p-10 hover:bg-surface-light hover:-translate-y-1 hover:shadow-glow transition-all duration-300 cursor-default"
                            style={{ willChange: "transform" }}
                        >
                            {/* Icon */}
                            <service.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />

                            {/* Title */}
                            <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 tracking-tight">
                                {service.title}
                            </h3>

                            {/* Items */}
                            <ul className="space-y-2">
                                {service.items.map((item) => (
                                    <li
                                        key={item}
                                        className="text-text-muted text-sm md:text-base flex items-start gap-2"
                                    >
                                        <span className="text-accent mt-1 text-xs">▪</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
