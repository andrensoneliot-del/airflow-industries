"use client";

import clientsData from "@/data/clients.json";

export default function ClientsCarousel() {
    // Duplicate clients for seamless loop
    const allClients = [...clientsData.clients, ...clientsData.clients];

    return (
        <section className="section bg-[var(--primary-950)]">
            <div className="container">
                <div className="section-header">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Trusted By Industry Leaders
                    </p>
                    <h2 className="text-white mb-4">
                        Our <span className="gradient-text">Valued Clients</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From automotive giants to pharmaceutical leaders, we power the operations
                        of India&apos;s most respected industrial brands.
                    </p>
                </div>
            </div>

            {/* Clients marquee */}
            <div className="relative py-8 overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--primary-950)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--primary-950)] to-transparent z-10 pointer-events-none" />

                {/* Marquee track - moving left to right (reverse direction) */}
                <div className="flex animate-marquee-reverse">
                    {allClients.map((client, index) => (
                        <a
                            key={`${client.id}-${index}`}
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 mx-8 group"
                            title={`Visit ${client.name} website`}
                        >
                            <div className="w-40 h-24 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-all group-hover:bg-white/10 group-hover:border-[var(--accent-400)]/50 group-hover:shadow-[var(--shadow-glow)]">
                                {/* Client logo placeholder - showing name initials */}
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-400 group-hover:text-[var(--accent-400)] transition-colors">
                                        {client.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 group-hover:text-slate-300 transition-colors line-clamp-1 px-2">
                                        {client.name}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Trust stats */}
            <div className="container mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-3xl font-bold gradient-text mb-1">500+</p>
                        <p className="text-sm text-slate-400">Installations</p>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-3xl font-bold gradient-text mb-1">35+</p>
                        <p className="text-sm text-slate-400">Years Experience</p>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-3xl font-bold gradient-text mb-1">50+</p>
                        <p className="text-sm text-slate-400">Countries</p>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-3xl font-bold gradient-text mb-1">24/7</p>
                        <p className="text-sm text-slate-400">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
