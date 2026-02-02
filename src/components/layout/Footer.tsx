import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import companiesData from "@/data/companies.json";

const footerLinks = {
    products: [
        { name: "Reciprocating Compressors", href: "/products?category=reciprocating" },
        { name: "Screw Compressors", href: "/products?category=screw" },
        { name: "Oil-Free Compressors", href: "/products?category=oil-free" },
        { name: "Vacuum Pumps", href: "/products?category=vacuum" },
        { name: "Air Dryers & Filters", href: "/products?category=dryers" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Industries Served", href: "/industries" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Certifications", href: "/certifications" },
        { name: "Downloads", href: "/downloads" },
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "Request a Quote", href: "/contact" },
        { name: "Technical Support", href: "/contact" },
        { name: "Service & Maintenance", href: "/contact" },
        { name: "Spare Parts", href: "/contact" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footer() {
    return (
        <footer className="footer pt-16 pb-8">
            <div className="container">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-400)] to-[var(--primary-500)] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                AF
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{companiesData.parent.name}</h3>
                                <p className="text-xs text-[var(--accent-400)]">{companiesData.parent.tagline}</p>
                            </div>
                        </Link>

                        <p className="text-slate-400 mb-6 max-w-sm">
                            {companiesData.parent.description}
                        </p>

                        <div className="space-y-3">
                            <a href={`tel:${companiesData.parent.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-[var(--accent-400)] transition-colors">
                                <Phone size={18} className="text-[var(--accent-400)]" />
                                {companiesData.parent.phone}
                            </a>
                            <a href={`mailto:${companiesData.parent.email}`} className="flex items-center gap-3 text-slate-400 hover:text-[var(--accent-400)] transition-colors">
                                <Mail size={18} className="text-[var(--accent-400)]" />
                                {companiesData.parent.email}
                            </a>
                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin size={18} className="text-[var(--accent-400)] mt-1 flex-shrink-0" />
                                {companiesData.parent.address}
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-3 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[var(--accent-400)] hover:text-white transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-[var(--accent-400)] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-[var(--accent-400)] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-[var(--accent-400)] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h5 className="text-white font-medium mb-3 text-sm">Stay Updated</h5>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="form-input text-sm py-2 px-3 flex-1"
                                />
                                <button className="btn-primary py-2 px-3" aria-label="Subscribe">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Child companies */}
                <div className="py-8 border-b border-white/10">
                    <p className="text-sm text-slate-500 mb-4">Our Group Companies</p>
                    <div className="flex flex-wrap items-center gap-6">
                        {companiesData.children.map((child) => (
                            <div key={child.id} className="flex items-center gap-2 text-slate-400">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs font-semibold">
                                    {child.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                </div>
                                <span className="text-sm">{child.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} {companiesData.parent.name}. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-[var(--accent-400)] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[var(--accent-400)] transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/sitemap" className="hover:text-[var(--accent-400)] transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
