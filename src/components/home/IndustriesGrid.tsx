"use client";

import Link from "next/link";
import industriesData from "@/data/industries.json";
import { ArrowRight, Car, Pill, Utensils, Scissors, FlaskConical, Wine, Factory, Package, Stethoscope, Ship } from "lucide-react";

// Map industry icons to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Car,
    Pill,
    Utensils,
    Scissors,
    FlaskConical,
    Wine,
    Factory,
    Package,
    Stethoscope,
    Ship,
};

export default function IndustriesGrid() {
    return (
        <section className="section bg-gradient-to-b from-[var(--primary-900)] to-[var(--primary-950)]">
            <div className="container">
                <div className="section-header">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Industries We Serve
                    </p>
                    <h2 className="text-white mb-4">
                        Powering <span className="gradient-text">Diverse Industries</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our compressed air solutions drive productivity across a wide range of industries,
                        from automotive manufacturing to pharmaceutical production.
                    </p>
                </div>

                {/* Industries grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {industriesData.industries.map((industry, index) => {
                        const IconComponent = iconMap[industry.icon] || Factory;

                        return (
                            <Link
                                key={industry.id}
                                href={`/industries#${industry.id}`}
                                className="industry-card group"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-[var(--accent-400)]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[var(--accent-400)]/20 group-hover:scale-110 transition-all">
                                        <IconComponent className="w-7 h-7 text-[var(--accent-400)]" />
                                    </div>
                                    <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[var(--accent-400)] transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-slate-500 text-xs line-clamp-2">
                                        {industry.description.split(".")[0]}.
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link href="/industries" className="btn-secondary inline-flex items-center gap-2">
                        Explore All Industries
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
