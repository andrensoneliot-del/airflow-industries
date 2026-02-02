"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import companiesData from "@/data/companies.json";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            <div className="container">
                {/* Page header */}
                <div className="text-center mb-16">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Contact Us
                    </p>
                    <h1 className="text-white mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have questions about our products or need a custom solution? Our team of experts
                        is ready to help you find the perfect compressed air solution.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact info */}
                    <div className="space-y-6">
                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--accent-400)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                                    <a href={`tel:${companiesData.parent.phone}`} className="text-slate-400 hover:text-[var(--accent-400)] transition-colors">
                                        {companiesData.parent.phone}
                                    </a>
                                    <p className="text-slate-500 text-sm mt-1">Mon-Sat: 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--accent-400)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                                    <a href={`mailto:${companiesData.parent.email}`} className="text-slate-400 hover:text-[var(--accent-400)] transition-colors">
                                        {companiesData.parent.email}
                                    </a>
                                    <p className="text-slate-500 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--accent-400)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                                    <p className="text-slate-400">
                                        {companiesData.parent.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--accent-400)]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-[var(--accent-400)]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                                    <p className="text-slate-400">Monday - Saturday</p>
                                    <p className="text-slate-400">9:00 AM - 6:00 PM IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="lg:col-span-2">
                        <div className="glass-card p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-slate-400 mb-6">
                                        Your message has been received. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn-secondary"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formState.company}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="quote">Request a Quote</option>
                                            <option value="demo">Request a Demo</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership Inquiry</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="form-input resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-16">
                    <div className="glass-card p-4">
                        <div className="aspect-[21/9] bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-[var(--accent-400)] mx-auto mb-2" />
                                <p className="text-slate-400">Google Maps Integration</p>
                                <p className="text-slate-500 text-sm">{companiesData.parent.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
