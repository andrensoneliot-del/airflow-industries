import Link from "next/link";
import { Award, Users, Target, Factory, CheckCircle, ArrowRight } from "lucide-react";
import companiesData from "@/data/companies.json";

const values = [
    {
        icon: Award,
        title: "Quality Excellence",
        description: "ISO 9001:2015 certified manufacturing processes ensuring the highest quality standards.",
    },
    {
        icon: Users,
        title: "Customer First",
        description: "Building lasting relationships through exceptional service and technical support.",
    },
    {
        icon: Target,
        title: "Innovation",
        description: "Continuous R&D investment to deliver cutting-edge compressed air solutions.",
    },
    {
        icon: Factory,
        title: "Reliability",
        description: "Robust, durable equipment designed for 24/7 industrial operations.",
    },
];

const timeline = [
    { year: "1990", title: "Foundation", description: "AirFlow Industries established in Mumbai" },
    { year: "1998", title: "First Export", description: "Expanded to international markets" },
    { year: "2005", title: "ISO Certified", description: "Achieved ISO 9001 certification" },
    { year: "2012", title: "Group Formation", description: "Launched subsidiary companies" },
    { year: "2020", title: "IoT Integration", description: "Smart compressor monitoring systems" },
    { year: "2024", title: "Global Reach", description: "Serving 50+ countries worldwide" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            {/* Hero section */}
            <div className="container mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                            About Us
                        </p>
                        <h1 className="text-white mb-6">
                            Powering Industries <span className="gradient-text">Since 1990</span>
                        </h1>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            {companiesData.parent.description}
                        </p>
                        <p className="text-slate-400 mb-8">
                            With over {companiesData.stats.years} years of experience, we have established ourselves as
                            a trusted partner for industrial compressed air solutions. Our commitment to quality,
                            innovation, and customer service has made us the preferred choice for leading
                            manufacturers across diverse industries.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="btn-primary">
                                Contact Us
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/downloads" className="btn-secondary">
                                Download Brochure
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-8">
                            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[var(--accent-400)] to-[var(--primary-500)] rounded-3xl flex items-center justify-center">
                                        <Factory className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-white font-semibold">State-of-the-Art Facility</h3>
                                    <p className="text-slate-400 text-sm">Mumbai, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--accent-400)]/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-[var(--primary-800)] py-16 mb-20">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold gradient-text mb-2">{companiesData.stats.installations}+</p>
                            <p className="text-slate-400">Installations</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold gradient-text mb-2">{companiesData.stats.customers}+</p>
                            <p className="text-slate-400">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold gradient-text mb-2">{companiesData.stats.years}+</p>
                            <p className="text-slate-400">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold gradient-text mb-2">{companiesData.stats.countries}+</p>
                            <p className="text-slate-400">Countries</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container mb-20">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-slate-400 leading-relaxed">
                            To provide reliable, energy-efficient, and innovative compressed air solutions
                            that empower industries to achieve operational excellence while minimizing
                            environmental impact.
                        </p>
                    </div>
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-slate-400 leading-relaxed">
                            To be the global leader in industrial compressed air technology, recognized
                            for our commitment to quality, sustainability, and customer success across
                            all industries we serve.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="container mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        The principles that guide everything we do
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value) => (
                        <div key={value.title} className="industry-card text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent-400)]/10 rounded-2xl flex items-center justify-center">
                                <value.icon className="w-7 h-7 text-[var(--accent-400)]" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                            <p className="text-slate-400 text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div className="container mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Key milestones in our {companiesData.stats.years}+ years of excellence
                    </p>
                </div>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="glass-card p-6 inline-block">
                                        <p className="text-[var(--accent-400)] font-bold text-lg mb-1">{item.year}</p>
                                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-4 h-4 bg-[var(--accent-400)] rounded-full flex-shrink-0 relative z-10" />
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Group Companies */}
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Group Companies</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Specialized subsidiaries for comprehensive compressed air solutions
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {companiesData.children.map((child) => (
                        <div key={child.id} className="glass-card p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--accent-400)] to-[var(--primary-500)] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                                {child.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                            </div>
                            <h3 className="text-white font-semibold mb-1">{child.name}</h3>
                            <p className="text-[var(--accent-400)] text-sm">{child.specialty}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
