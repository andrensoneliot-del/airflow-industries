import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AirFlow Industries | Industrial Air Compressor Solutions",
  description: "Leading manufacturer and distributor of industrial air compressors. Serving automotive, pharmaceutical, textile, and more industries with reliable compressed air solutions since 1990.",
  keywords: ["air compressor", "industrial compressor", "screw compressor", "reciprocating compressor", "oil-free compressor", "vacuum pump", "air dryer"],
  authors: [{ name: "AirFlow Industries" }],
  openGraph: {
    title: "AirFlow Industries | Industrial Air Compressor Solutions",
    description: "Powering Industries Since 1990 - Leading manufacturer of industrial air compressors",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
