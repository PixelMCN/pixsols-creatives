"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { templates, Template } from "@/lib/templates";
import TemplateCard from "@/components/TemplateCard";
import TemplateModal from "@/components/TemplateModal";

export default function TemplatesPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
        null
    );

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

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template, i) => (
                        <TemplateCard
                            key={template.id}
                            template={template}
                            index={i}
                            onPreview={setSelectedTemplate}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <TemplateModal
                template={selectedTemplate}
                onClose={() => setSelectedTemplate(null)}
            />
        </section>
    );
}
