"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import companiesData from "@/data/companies.json";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Products",
        href: "/products",
        children: [
            { name: "Reciprocating Compressors", href: "/products?category=reciprocating" },
            { name: "Screw Compressors", href: "/products?category=screw" },
            { name: "Oil-Free Compressors", href: "/products?category=oil-free" },
            { name: "Vacuum Pumps", href: "/products?category=vacuum" },
            { name: "Air Dryers & Filters", href: "/products?category=dryers" },
        ]
    },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Certifications", href: "/certifications" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* ===== ROW 1: Top Bar - Contact + Quote Button ===== */}
            <div style={{ backgroundColor: '#0c1929', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <a href={`tel:${companiesData.parent.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>
                                <Phone size={14} />
                                <span>{companiesData.parent.phone}</span>
                            </a>
                            <a href={`mailto:${companiesData.parent.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>
                                <Mail size={14} />
                                <span>{companiesData.parent.email}</span>
                            </a>
                        </div>
                        <Link href="/contact" style={{ backgroundColor: '#0ea5e9', color: 'white', fontSize: '0.75rem', fontWeight: '600', padding: '0.375rem 1rem', borderRadius: '9999px', textDecoration: 'none' }}>
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* ===== ROW 2: Main Header - Logo + Companies ===== */}
            <div style={{ backgroundColor: 'rgba(15, 35, 57, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
                        {/* Logo */}
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                            <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #38bdf8, #1e40af)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
                                AF
                            </div>
                            <div>
                                <h1 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>{companiesData.parent.name}</h1>
                                <p style={{ color: '#64748b', fontSize: '0.75rem', margin: 0 }}>Powering Industries Since 1990</p>
                            </div>
                        </Link>

                        {/* Child Companies - Desktop Only */}
                        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our Companies</span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {companiesData.children.map((child) => (
                                    <div key={child.id} title={child.name} style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                                        {child.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden"
                            style={{ padding: '0.5rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== ROW 3: Navigation Bar ===== */}
            <nav className="hidden lg:block" style={{ backgroundColor: 'rgba(30, 58, 89, 0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '48px' }}>
                        {/* Navigation Links */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    style={{ position: 'relative' }}
                                    onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.75rem', color: '#cbd5e1', fontSize: '0.875rem', textDecoration: 'none' }}
                                    >
                                        {item.name}
                                        {item.children && <ChevronDown size={14} />}
                                    </Link>

                                    {/* Dropdown */}
                                    {item.children && activeDropdown === item.name && (
                                        <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#1e3a59', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem 0', minWidth: '220px', zIndex: 50, boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    style={{ display: 'block', padding: '0.5rem 1rem', color: '#cbd5e1', fontSize: '0.875rem', textDecoration: 'none' }}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Link href="/products" style={{ fontSize: '0.875rem', color: '#38bdf8', border: '1px solid #38bdf8', padding: '0.375rem 1rem', borderRadius: '8px', textDecoration: 'none' }}>
                                View Products
                            </Link>
                            <Link href="/contact" style={{ fontSize: '0.875rem', color: 'white', backgroundColor: '#0ea5e9', padding: '0.375rem 1rem', borderRadius: '8px', textDecoration: 'none' }}>
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ===== Mobile Menu ===== */}
            {mobileMenuOpen && (
                <div className="lg:hidden" style={{ backgroundColor: '#0f2339', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem' }}>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1rem' }}>
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        style={{ display: 'block', padding: '0.75rem', color: '#cbd5e1', textDecoration: 'none', borderRadius: '8px' }}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <div style={{ marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    style={{ display: 'block', padding: '0.5rem 0.75rem', color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link href="/products" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '0.75rem', color: '#38bdf8', border: '1px solid #38bdf8', borderRadius: '8px', textDecoration: 'none' }}>
                                View Products
                            </Link>
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '0.75rem', color: 'white', backgroundColor: '#0ea5e9', borderRadius: '8px', textDecoration: 'none' }}>
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
