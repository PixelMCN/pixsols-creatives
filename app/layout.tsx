import type { Metadata } from "next";
import localFont from "next/font/local";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixsols Creative — Digital Studio",
  description:
    "A creative studio specializing in video editing, custom artwork, and modern web experiences. Built for creators who move fast.",
  keywords: [
    "creative studio",
    "video editing",
    "web design",
    "artwork",
    "portfolio",
    "templates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${syne.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
