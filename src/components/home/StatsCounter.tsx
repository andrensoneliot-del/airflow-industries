"use client";

import { useEffect, useState, useRef } from "react";
import companiesData from "@/data/companies.json";
import { Building2, Users, Globe, Calendar } from "lucide-react";

interface CounterProps {
    target: number;
    suffix?: string;
    duration?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const steps = 60;
                    const increment = target / steps;
                    let currentStep = 0;

                    const timer = setInterval(() => {
                        currentStep++;
                        setCount(Math.min(Math.floor(increment * currentStep), target));

                        if (currentStep >= steps) {
                            clearInterval(timer);
                            setCount(target);
                        }
                    }, duration / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, duration, hasAnimated]);

    return (
        <div ref={ref} className="counter-number">
            {count}{suffix}
        </div>
    );
}

const stats = [
    {
        icon: Building2,
        value: companiesData.stats.installations,
        suffix: "+",
        label: "Successful Installations",
    },
    {
        icon: Users,
        value: companiesData.stats.customers,
        suffix: "+",
        label: "Happy Customers",
    },
    {
        icon: Calendar,
        value: companiesData.stats.years,
        suffix: "+",
        label: "Years of Excellence",
    },
    {
        icon: Globe,
        value: companiesData.stats.countries,
        suffix: "+",
        label: "Countries Served",
    },
];

export default function StatsCounter() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-500)]/10 via-[var(--primary-500)]/10 to-[var(--accent-500)]/10" />

            <div className="container relative z-10">
                <div className="section-header mb-12">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Our Achievements
                    </p>
                    <h2 className="text-white mb-4">
                        Numbers That <span className="gradient-text">Speak</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center p-8 glass-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[var(--accent-400)] to-[var(--primary-500)] rounded-2xl flex items-center justify-center shadow-lg">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            <p className="text-slate-400 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
