import Link from "next/link";
import industriesData from "@/data/industries.json";
import { ArrowRight, CheckCircle, Car, Pill, Utensils, Scissors, FlaskConical, Wine, Factory, Package, Stethoscope, Ship } from "lucide-react";

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

const industryBenefits: Record<string, string[]> = {
    automotive: ["Assembly line automation", "Paint shop applications", "Pneumatic tool operation", "Quality testing"],
    pharmaceutical: ["Class 0 oil-free air", "Cleanroom compatibility", "FDA compliance", "Drug packaging"],
    "food-beverage": ["Contamination-free processing", "Bottling operations", "Food packaging", "Clean labeling"],
    textile: ["Spinning operations", "Air-jet weaving", "Dyeing processes", "Finishing applications"],
    chemical: ["Explosion-proof systems", "Corrosion resistance", "Process control", "Safety compliance"],
    glass: ["Glass blowing", "Bottle forming", "Annealing furnaces", "Quality inspection"],
    "iron-steel": ["Blast furnace operation", "Rolling mill drives", "Material handling", "Slag processing"],
    packaging: ["Filling machines", "Labeling systems", "Palletizing", "Shrink wrapping"],
    medical: ["Medical-grade air", "Hospital supplies", "Dental equipment", "Laboratory systems"],
    shipping: ["Ship maintenance", "Container handling", "Marine equipment", "Port operations"],
};

export default function IndustriesPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            <div className="container">
                {/* Page header */}
                <div className="text-center mb-16">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Industries We Serve
                    </p>
                    <h1 className="text-white mb-4">
                        Powering <span className="gradient-text">Diverse Industries</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our compressed air solutions drive productivity and efficiency across a wide range
                        of industrial sectors, from automotive manufacturing to healthcare.
                    </p>
                </div>

                {/* Industries list */}
                <div className="space-y-12">
                    {industriesData.industries.map((industry, index) => {
                        const IconComponent = iconMap[industry.icon] || Factory;
                        const benefits = industryBenefits[industry.id] || [];
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={industry.id}
                                id={industry.id}
                                className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                            >
                                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 bg-[var(--accent-400)]/20 rounded-2xl flex items-center justify-center">
                                            <IconComponent className="w-7 h-7 text-[var(--accent-400)]" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">{industry.name}</h2>
                                    </div>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {industry.description}
                                    </p>

                                    {/* Benefits list */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {benefits.map((benefit) => (
                                            <div key={benefit} className="flex items-center gap-2 text-sm text-slate-300">
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/products" className="btn-primary inline-flex">
                                        View Solutions
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                                    <div className="glass-card p-8">
                                        <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                                            <div className="text-center">
                                                <IconComponent className="w-20 h-20 text-[var(--accent-400)] mx-auto mb-4 opacity-50" />
                                                <p className="text-slate-500">Industry Image</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="glass-card p-12 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Don&apos;t See Your Industry?
                        </h2>
                        <p className="text-slate-400 mb-6">
                            We serve many more industries not listed here. Contact us to discuss your
                            specific requirements and we&apos;ll design a custom solution for you.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex">
                            Contact Our Experts
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
