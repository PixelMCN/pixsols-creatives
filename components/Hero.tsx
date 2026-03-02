"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const words = ["We", "Craft", "Digital", "Experiences"];

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const wordAnim: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

const marqueeItems = [
    "Video Editing",
    "Artwork",
    "Websites",
    "Reels",
    "Thumbnails",
    "Cards",
    "Podcasts",
    "Portfolios",
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Radial Glow */}
            <div className="hero-glow absolute inset-0" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto">
                {/* Headline */}
                <motion.h1
                    className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordAnim}
                            className={`inline-block mr-3 md:mr-5 ${word === "Digital" || word === "Experiences"
                                ? "text-accent"
                                : "text-white"
                                }`}
                            style={{ willChange: "transform" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="mt-6 md:mt-8 text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    A creative studio specializing in video editing, custom artwork,
                    and modern web experiences. Built for creators who move fast.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                >
                    <Link href="/#services">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3.5 bg-accent text-black font-heading font-bold text-sm uppercase tracking-widest rounded-none hover:shadow-glow transition-shadow duration-300 min-w-[180px]"
                        >
                            Explore Work
                        </motion.button>
                    </Link>
                    <Link href="/#contact">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3.5 border border-accent text-accent font-heading font-bold text-sm uppercase tracking-widest rounded-none hover:bg-accent hover:text-black transition-all duration-300 min-w-[180px]"
                        >
                            Get in Touch
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Marquee Strip */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border py-3 overflow-hidden">
                <div className="marquee-track animate-marquee">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text-muted whitespace-nowrap mx-6 sm:mx-8"
                        >
                            {item}
                            <span className="mx-6 sm:mx-8 text-accent">·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
