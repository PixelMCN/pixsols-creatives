"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { WeddingCard } from "@/lib/templates";

interface WeddingCardModalProps {
    card: WeddingCard | null;
    onClose: () => void;
}

export default function WeddingCardModal({ card, onClose }: WeddingCardModalProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (card) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [card]);

    return (
        <AnimatePresence>
            {card && (
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
                                        {card.name}
                                    </h3>
                                    <span className="text-text-muted text-xs uppercase tracking-wider">
                                        {card.category}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={card.pdfUrl}
                                        download
                                        className="w-10 h-10 flex items-center justify-center text-accent hover:text-white transition-colors"
                                        aria-label="Download PDF"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
                                        aria-label="Close preview"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* PDF Embed */}
                            <div className="flex-1 overflow-auto">
                                <iframe
                                    src={card.pdfUrl}
                                    className="w-full h-full border-0"
                                    title={`Preview: ${card.name}`}
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
                            <div className="relative w-[90vw] h-[90vh] max-w-5xl bg-surface border border-border overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
                                    <div>
                                        <h3 className="font-heading font-bold text-white text-lg">
                                            {card.name}
                                        </h3>
                                        <span className="text-text-muted text-xs uppercase tracking-wider">
                                            {card.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={card.pdfUrl}
                                            download
                                            className="flex items-center gap-2 px-4 py-2 bg-accent text-black font-heading font-bold text-xs uppercase tracking-widest hover:shadow-glow transition-shadow duration-300"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download
                                        </a>
                                        <button
                                            onClick={onClose}
                                            className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
                                            aria-label="Close preview"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* PDF Embed */}
                                <div className="flex-1 overflow-auto">
                                    <iframe
                                        src={card.pdfUrl}
                                        className="w-full h-full border-0"
                                        title={`Preview: ${card.name}`}
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
