"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Plant Manager",
        company: "Tata Steel",
        content: "AirFlow Industries has been our trusted partner for over 15 years. Their screw compressors have significantly reduced our energy costs while maintaining peak performance. The after-sales support is exceptional.",
        rating: 5,
    },
    {
        id: 2,
        name: "Dr. Priya Sharma",
        role: "Quality Director",
        company: "Cipla Pharmaceuticals",
        content: "For pharmaceutical manufacturing, air quality is critical. AirFlow's oil-free compressors meet ISO Class 0 standards, ensuring our products remain uncontaminated. Their technical expertise is unmatched.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Operations Head",
        company: "Bajaj Auto",
        content: "We've installed over 50 AirFlow compressors across our facilities. The reliability and energy efficiency have improved our production uptime by 20%. Highly recommended for automotive manufacturing.",
        rating: 5,
    },
    {
        id: 4,
        name: "Sunita Reddy",
        role: "Technical Manager",
        company: "Asian Paints",
        content: "The variable speed screw compressors from AirFlow have revolutionized our paint mixing operations. The precise pressure control and 35% energy savings exceeded our expectations.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[currentIndex];

    return (
        <section className="section bg-[var(--primary-900)]">
            <div className="container">
                <div className="section-header">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Testimonials
                    </p>
                    <h2 className="text-white mb-4">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main testimonial */}
                    <div className="glass-card p-8 md:p-12 relative">
                        {/* Quote icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[var(--accent-400)] to-[var(--primary-500)] rounded-2xl flex items-center justify-center shadow-lg">
                            <Quote className="w-6 h-6 text-white" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6 mt-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                            &ldquo;{testimonial.content}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-400)] to-[var(--primary-500)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                    <p className="text-[var(--accent-400)] text-sm">{testimonial.company}</p>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Indicators */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "w-8 bg-[var(--accent-400)]"
                                            : "bg-white/30 hover:bg-white/50"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
