"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Template } from "@/lib/templates";

interface TemplateCardProps {
    template: Template;
    index: number;
    onPreview: (template: Template) => void;
}

export default function TemplateCard({
    template,
    index,
    onPreview,
}: TemplateCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="group"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] bg-surface border border-border overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <Image
                    src={template.thumbnail}
                    alt={template.name}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-accent text-black text-[10px] font-heading font-bold uppercase tracking-widest">
                        {template.category}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <h3 className="font-heading font-bold text-white text-base md:text-lg">
                        {template.name}
                    </h3>
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                        {template.category}
                    </span>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPreview(template)}
                    className="px-5 py-2.5 bg-accent text-black font-heading font-bold text-xs uppercase tracking-widest hover:shadow-glow transition-shadow duration-300"
                >
                    Preview
                </motion.button>
            </div>
        </motion.div>
    );
}
