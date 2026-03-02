"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { templates, weddingCards, Template, WeddingCard } from "@/lib/templates";
import TemplateCard from "@/components/TemplateCard";
import TemplateModal from "@/components/TemplateModal";
import WeddingCardCard from "@/components/WeddingCardCard";
import WeddingCardModal from "@/components/WeddingCardModal";

export default function TemplatesPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
        null
    );
    const [selectedCard, setSelectedCard] = useState<WeddingCard | null>(null);

    return (
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 md:mb-20"
                >
                    <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
                        Templates
                    </h1>
                    <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl">
                        Professionally crafted, ready to deploy. Pick a template, preview
                        it live, and ship your next project in hours.
                    </p>
                </motion.div>

                {/* ── Site Templates ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                        Site Templates
                    </h2>
                    <p className="mt-2 text-text-muted text-sm md:text-base max-w-lg">
                        Full website templates — ready to customize and launch.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 md:mb-32">
                    {templates.map((template, i) => (
                        <TemplateCard
                            key={template.id}
                            template={template}
                            index={i}
                            onPreview={setSelectedTemplate}
                        />
                    ))}
                </div>

                {/* ── Wedding Card Templates ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                        Wedding Card Templates
                    </h2>
                    <p className="mt-2 text-text-muted text-sm md:text-base max-w-lg">
                        Elegant invitation designs — preview, download, and print.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {weddingCards.map((card, i) => (
                        <WeddingCardCard
                            key={card.id}
                            card={card}
                            index={i}
                            onPreview={setSelectedCard}
                        />
                    ))}
                </div>
            </div>

            {/* Modals */}
            <TemplateModal
                template={selectedTemplate}
                onClose={() => setSelectedTemplate(null)}
            />
            <WeddingCardModal
                card={selectedCard}
                onClose={() => setSelectedCard(null)}
            />
        </section>
    );
}
