"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Templates", href: "/templates" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
                style={{
                    backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
                    backdropFilter: scrolled ? "blur(8px)" : "none",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-0.5 group">
                        <span className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
                            Pixsols
                        </span>
                        <span className="text-xl md:text-2xl font-heading font-bold text-accent tracking-tight">
                            Creative
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200 uppercase tracking-widest"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative z-50 w-11 h-11 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-3xl font-heading font-bold text-white hover:text-accent transition-colors uppercase tracking-widest"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
