import Link from "next/link";
import { Quote, Star, ArrowRight, Building2 } from "lucide-react";

const caseStudies = [
    {
        id: 1,
        client: "Tata Steel",
        industry: "Iron & Steel",
        challenge: "Required high-capacity compressed air system for blast furnace operations with 24/7 reliability.",
        solution: "Installed 5 units of 100HP Variable Speed Screw Compressors with redundancy design.",
        results: ["35% reduction in energy costs", "Zero unplanned downtime in 2 years", "ROI achieved in 18 months"],
        testimonial: "AirFlow's VSD compressors have transformed our compressed air system. The energy savings alone justified the investment.",
        author: "Rajesh Kumar",
        role: "Plant Manager",
    },
    {
        id: 2,
        client: "Cipla Pharmaceuticals",
        industry: "Pharmaceutical",
        challenge: "Needed Class 0 oil-free air for drug manufacturing to meet FDA compliance requirements.",
        solution: "Deployed oil-free scroll compressors with multi-stage filtration and drying systems.",
        results: ["ISO 8573-1 Class 0 compliance", "FDA audit passed", "50% quieter operation"],
        testimonial: "For pharmaceutical manufacturing, air quality is non-negotiable. AirFlow delivered exactly what we needed.",
        author: "Dr. Priya Sharma",
        role: "Quality Director",
    },
    {
        id: 3,
        client: "Bajaj Auto",
        industry: "Automotive",
        challenge: "Multiple production lines needed centralized compressed air with varying pressure requirements.",
        solution: "Designed a centralized system with zone-based pressure regulation and smart controls.",
        results: ["20% improvement in uptime", "Centralized monitoring", "Reduced maintenance costs"],
        testimonial: "The smart monitoring system gives us complete visibility into our compressed air network.",
        author: "Amit Patel",
        role: "Operations Head",
    },
    {
        id: 4,
        client: "Asian Paints",
        industry: "Chemical",
        challenge: "Required precise pressure control for paint mixing operations with variable demand patterns.",
        solution: "VSD compressors with IoT-enabled monitoring and predictive maintenance capabilities.",
        results: ["35% energy savings", "Real-time monitoring", "Predictive maintenance alerts"],
        testimonial: "The variable speed technology adapts perfectly to our fluctuating demand patterns.",
        author: "Sunita Reddy",
        role: "Technical Manager",
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            <div className="container">
                {/* Page header */}
                <div className="text-center mb-16">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Success Stories
                    </p>
                    <h1 className="text-white mb-4">
                        Case Studies & <span className="gradient-text">Testimonials</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        See how leading companies across industries have transformed their operations
                        with our compressed air solutions.
                    </p>
                </div>

                {/* Case studies */}
                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className="glass-card overflow-hidden">
                            <div className="grid lg:grid-cols-3">
                                {/* Case study content */}
                                <div className="lg:col-span-2 p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-[var(--accent-400)]/20 rounded-xl flex items-center justify-center">
                                            <Building2 className="w-6 h-6 text-[var(--accent-400)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{study.client}</h3>
                                            <p className="text-[var(--accent-400)] text-sm">{study.industry}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-white font-semibold mb-2">Challenge</h4>
                                            <p className="text-slate-400">{study.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-semibold mb-2">Solution</h4>
                                            <p className="text-slate-400">{study.solution}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-semibold mb-2">Results</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {study.results.map((result) => (
                                                    <span
                                                        key={result}
                                                        className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full"
                                                    >
                                                        {result}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="bg-[var(--primary-700)] p-8 flex flex-col justify-center">
                                    <Quote className="w-10 h-10 text-[var(--accent-400)] mb-4" />
                                    <p className="text-white text-lg italic mb-6">
                                        &ldquo;{study.testimonial}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">{study.author}</p>
                                        <p className="text-slate-400 text-sm">{study.role}, {study.client}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="glass-card p-12 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Ready to Write Your Success Story?
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Join hundreds of satisfied customers who have transformed their
                            operations with our compressed air solutions.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex">
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
