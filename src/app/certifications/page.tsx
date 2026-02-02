import Link from "next/link";
import { Award, Shield, CheckCircle, ArrowRight } from "lucide-react";

const certifications = [
    {
        id: "iso-9001",
        name: "ISO 9001:2015",
        description: "Quality Management System certification ensuring consistent quality in manufacturing processes.",
        issuer: "Bureau Veritas",
        validUntil: "2027",
    },
    {
        id: "iso-14001",
        name: "ISO 14001:2015",
        description: "Environmental Management System certification for sustainable manufacturing practices.",
        issuer: "Bureau Veritas",
        validUntil: "2027",
    },
    {
        id: "ce-mark",
        name: "CE Marking",
        description: "European conformity marking indicating compliance with EU health, safety, and environmental requirements.",
        issuer: "European Commission",
        validUntil: "Ongoing",
    },
    {
        id: "iso-8573",
        name: "ISO 8573-1 Class 0",
        description: "Air quality certification for oil-free compressors, essential for pharmaceutical and food industries.",
        issuer: "TÜV SÜD",
        validUntil: "2026",
    },
];

const qualityFeatures = [
    "100% factory tested before dispatch",
    "Premium grade components sourced globally",
    "Advanced CNC machining for precision",
    "Multi-stage quality inspection process",
    "Comprehensive performance testing",
    "Detailed quality documentation",
    "Traceable component sourcing",
    "Continuous process improvement",
];

export default function CertificationsPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            <div className="container">
                {/* Page header */}
                <div className="text-center mb-16">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Quality Assurance
                    </p>
                    <h1 className="text-white mb-4">
                        Certifications & <span className="gradient-text">Quality Standards</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our commitment to quality is backed by internationally recognized certifications
                        and rigorous quality control processes.
                    </p>
                </div>

                {/* Certifications grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="glass-card p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-[var(--accent-400)]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Award className="w-8 h-8 text-[var(--accent-400)]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                                    <p className="text-slate-400 mb-4">{cert.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div>
                                            <span className="text-slate-500">Issuer:</span>{" "}
                                            <span className="text-white">{cert.issuer}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500">Valid Until:</span>{" "}
                                            <span className="text-green-400">{cert.validUntil}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quality assurance */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Our Quality <span className="gradient-text">Commitment</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Quality is at the heart of everything we do. From raw material selection to
                            final testing, every step of our manufacturing process is designed to deliver
                            products that exceed industry standards.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {qualityFeatures.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <Shield className="w-24 h-24 text-[var(--accent-400)] mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Quality Guaranteed</h3>
                                <p className="text-slate-400">Every product, every time</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="glass-card p-12 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Request Certification Documents
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Need copies of our certifications for your compliance requirements?
                            Contact us and we&apos;ll provide the necessary documentation.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex">
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
