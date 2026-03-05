"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight"
                >
                    Let&apos;s Work Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mt-4 text-text-muted text-base md:text-lg max-w-md mx-auto"
                >
                    Got a project in mind? Reach out and let&apos;s make it happen.
                </motion.p>

                {/* Animated Horizontal Rule */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-full max-w-xs mx-auto h-[1px] bg-accent my-10 md:my-14 origin-center"
                />

                {/* Contact Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/917595887171"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-black hover:shadow-glow transition-all duration-300 min-w-[240px] justify-center rounded-full cursor-pointer"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-heading font-bold text-sm uppercase tracking-widest">
                                WhatsApp
                            </span>
                        </motion.div>
                    </a>

                    {/* Email */}
                    <a href="mailto:Pixsolscreativestudio@gmail.com">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-black hover:shadow-glow transition-all duration-300 min-w-[240px] justify-center rounded-full cursor-pointer"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="font-heading font-bold text-sm uppercase tracking-widest">
                                Email Us
                            </span>
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
