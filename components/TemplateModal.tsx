"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Template } from "@/lib/templates";

interface TemplateModalProps {
    template: Template | null;
    onClose: () => void;
}

export default function TemplateModal({ template, onClose }: TemplateModalProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (template) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [template]);

    return (
        <AnimatePresence>
            {template && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    {isMobile ? (
                        /* Mobile: Bottom Sheet */
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-[101] h-[90vh] bg-surface rounded-t-2xl overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
                                <div>
                                    <h3 className="font-heading font-bold text-white text-base">
                                        {template.name}
                                    </h3>
                                    <span className="text-text-muted text-xs uppercase tracking-wider">
                                        {template.category}
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
                                    aria-label="Close preview"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Iframe */}
                            <div className="flex-1 overflow-auto">
                                <iframe
                                    src={template.previewUrl}
                                    className="w-full h-full border-0"
                                    title={`Preview: ${template.name}`}
                                    scrolling="yes"
                                />
                            </div>
                        </motion.div>
                    ) : (
                        /* Desktop: Centered Modal */
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="fixed inset-0 z-[101] flex items-center justify-center p-8"
                        >
                            <div className="relative w-[90vw] h-[90vh] max-w-7xl bg-surface border border-border overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
                                    <div>
                                        <h3 className="font-heading font-bold text-white text-lg">
                                            {template.name}
                                        </h3>
                                        <span className="text-text-muted text-xs uppercase tracking-wider">
                                            {template.category}
                                        </span>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
                                        aria-label="Close preview"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Iframe */}
                                <div className="flex-1 overflow-auto">
                                    <iframe
                                        src={template.previewUrl}
                                        className="w-full h-full border-0"
                                        title={`Preview: ${template.name}`}
                                        scrolling="yes"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
}
