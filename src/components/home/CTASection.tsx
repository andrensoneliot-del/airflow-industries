import Link from "next/link";
import { ArrowRight, Phone, FileText, Calendar } from "lucide-react";

export default function CTASection() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-500)] to-[var(--primary-500)]" />

            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
            </div>

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                        Ready to Power Your Industry?
                    </h2>
                    <p className="text-white/80 text-lg mb-8">
                        Get in touch with our experts for a customized compressed air solution
                        tailored to your specific industrial needs.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link
                            href="/contact"
                            className="bg-white text-[var(--primary-900)] hover:bg-white/90 font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all hover:shadow-xl"
                        >
                            <Phone className="w-5 h-5" />
                            Get a Quote
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/20 text-white hover:bg-white/30 font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all border border-white/30"
                        >
                            <Calendar className="w-5 h-5" />
                            Request a Demo
                        </Link>
                        <Link
                            href="/downloads"
                            className="bg-white/20 text-white hover:bg-white/30 font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all border border-white/30"
                        >
                            <FileText className="w-5 h-5" />
                            Download Brochure
                        </Link>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                        <a href="tel:+912212345678" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-4 h-4" />
                            +91 22 1234 5678
                        </a>
                        <span className="hidden md:inline text-white/40">|</span>
                        <p className="flex items-center gap-2">
                            <span>Available 24/7 for support</span>
                            <ArrowRight className="w-4 h-4" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
