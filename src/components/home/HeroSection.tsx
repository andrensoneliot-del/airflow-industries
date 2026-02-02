"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Award, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="hero-gradient hero-pattern relative min-h-screen flex items-center pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[var(--accent-500)]/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-[var(--primary-500)]/10 rounded-full blur-3xl animate-float delay-500" />

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left content */}
                    <div className={`space-y-6 md:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                            <Award className="w-3 h-3 md:w-4 md:h-4 text-[var(--accent-400)]" />
                            <span className="text-xs md:text-sm text-slate-300">ISO 9001:2015 Certified Company</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-white leading-tight">
                            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Industrial Air</span>
                            <span className="block gradient-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Compressor Solutions</span>
                            <span className="block text-lg md:text-2xl lg:text-3xl font-medium text-slate-300 mt-3 md:mt-4">
                                Powering Industries Since 1990
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
                            From reciprocating to screw compressors, oil-free systems to vacuum pumps —
                            we deliver reliable, energy-efficient compressed air solutions for every industrial need.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <Link href="/contact" className="btn-primary group text-sm md:text-base py-3 px-5 md:py-4 md:px-6">
                                Get a Quote
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/products" className="btn-secondary text-sm md:text-base py-3 px-5 md:py-4 md:px-6">
                                Explore Products
                            </Link>
                            <button className="btn-ghost flex items-center gap-2 text-sm md:text-base">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--accent-400)] rounded-full flex items-center justify-center">
                                    <Play className="w-3 h-3 md:w-4 md:h-4 text-white" fill="white" />
                                </div>
                                <span className="hidden sm:inline">Watch Demo</span>
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--accent-400)]/20 rounded-lg md:rounded-xl flex items-center justify-center">
                                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm md:text-base">35+ Years</p>
                                    <p className="text-xs md:text-sm text-slate-500">Industry Experience</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--accent-400)]/20 rounded-lg md:rounded-xl flex items-center justify-center">
                                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm md:text-base">1000+</p>
                                    <p className="text-xs md:text-sm text-slate-500">Satisfied Clients</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--accent-400)]/20 rounded-lg md:rounded-xl flex items-center justify-center">
                                    <Award className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm md:text-base">50+</p>
                                    <p className="text-xs md:text-sm text-slate-500">Countries Served</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content - Hero image */}
                    <div className={`relative mt-8 lg:mt-0 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
                        <div className="relative">
                            {/* Main product showcase */}
                            <div className="relative bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-900)] rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl">
                                {/* Glow effect */}
                                <div className="absolute -inset-px bg-gradient-to-br from-[var(--accent-400)]/50 via-transparent to-[var(--primary-500)]/50 rounded-2xl md:rounded-3xl blur-sm -z-10" />

                                {/* Product image */}
                                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/products/hero-compressor.png"
                                        alt="Premium Industrial Air Compressor"
                                        fill
                                        className="object-contain p-4"
                                        priority
                                    />
                                </div>

                                {/* Floating cards - Hidden on mobile, visible on tablet+ */}
                                <div className="hidden sm:block absolute -left-4 md:-left-8 top-1/4 bg-[var(--primary-800)] border border-white/10 rounded-lg md:rounded-xl p-2 md:p-4 shadow-xl animate-float">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <Zap className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-xs md:text-sm">Energy Saving</p>
                                            <p className="text-green-400 text-xs">Up to 35%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block absolute -right-4 md:-right-8 bottom-1/4 bg-[var(--primary-800)] border border-white/10 rounded-lg md:rounded-xl p-2 md:p-4 shadow-xl animate-float delay-300">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--accent-400)]/20 rounded-lg flex items-center justify-center">
                                            <Shield className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent-400)]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-xs md:text-sm">3 Year Warranty</p>
                                            <p className="text-[var(--accent-400)] text-xs">Full Coverage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-24 md:w-40 h-24 md:h-40 bg-[var(--accent-400)]/20 rounded-full blur-2xl" />
                            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-20 md:w-32 h-20 md:h-32 bg-[var(--primary-500)]/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - Hidden on mobile */}
            <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-[var(--accent-400)] rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
