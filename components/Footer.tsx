import Link from "next/link";

const footerLinks = [
    { label: "Services", href: "/#services" },
    { label: "Templates", href: "/templates" },
    { label: "Contact", href: "/#contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border py-12 md:py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Left: Branding */}
                <div className="text-center md:text-left">
                    <Link href="/" className="inline-flex items-center gap-0.5">
                        <span className="text-lg font-heading font-bold text-white">
                            Pixsols
                        </span>
                        <span className="text-lg font-heading font-bold text-accent">
                            Creative
                        </span>
                    </Link>
                    <p className="mt-2 text-text-muted text-sm max-w-xs">
                        Crafting digital experiences that move fast and look sharp.
                    </p>
                </div>

                {/* Middle: Nav */}
                <nav className="flex items-center gap-6">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm text-text-muted hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right: Copyright */}
                <p className="text-text-muted text-xs tracking-wider">
                    © {new Date().getFullYear()} Pixsols Creative
                </p>
            </div>
        </footer>
    );
}
