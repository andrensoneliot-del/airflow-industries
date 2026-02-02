"use client";

import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";
import { ArrowRight } from "lucide-react";

// Map product categories to images
const productImages: Record<string, string> = {
    "reciprocating": "/products/reciprocating-01.png",
    "screw": "/products/screw-01.png",
    "oil-free": "/products/oilfree-01.png",
    "scroll": "/products/oilfree-01.png",
    "vacuum": "/products/screw-01.png",
    "dryers": "/products/hero-compressor.png",
};

export default function ProductsMarquee() {
    // Get featured products for the marquee
    const featuredProducts = productsData.products.filter(p => p.isFeatured);
    // Duplicate for seamless loop
    const allProducts = [...featuredProducts, ...featuredProducts];

    return (
        <section className="section bg-[var(--primary-900)] overflow-hidden">
            <div className="container">
                <div className="section-header">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-xs md:text-sm">
                        Our Products
                    </p>
                    <h2 className="text-white mb-4 text-2xl md:text-3xl lg:text-4xl">
                        Industrial <span className="gradient-text">Compressor Solutions</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                        Explore our comprehensive range of air compressors, vacuum pumps, and air treatment systems
                        designed for maximum efficiency and reliability.
                    </p>
                </div>
            </div>

            {/* Marquee container */}
            <div className="relative py-8 md:py-12">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--primary-900)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--primary-900)] to-transparent z-10 pointer-events-none" />

                {/* Marquee track */}
                <div className="flex animate-marquee hover:pause">
                    {allProducts.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`}
                            className="flex-shrink-0 w-64 sm:w-72 md:w-80 mx-2 md:mx-4"
                        >
                            <Link href={`/products?category=${product.category}`} className="block group">
                                <div className="product-card h-full">
                                    {/* Product image */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-4 overflow-hidden relative">
                                        <Image
                                            src={productImages[product.category] || "/products/hero-compressor.png"}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-2 md:top-3 left-2 md:left-3 flex gap-1 md:gap-2">
                                            {product.isNew && (
                                                <span className="bg-green-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                                                    NEW
                                                </span>
                                            )}
                                            {product.isFeatured && (
                                                <span className="bg-[var(--accent-400)] text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                                                    FEATURED
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product info */}
                                    <div>
                                        <p className="text-[10px] md:text-xs text-[var(--accent-400)] font-medium uppercase mb-1">
                                            {productsData.categories.find(c => c.id === product.category)?.name}
                                        </p>
                                        <h3 className="text-white font-semibold mb-2 group-hover:text-[var(--accent-400)] transition-colors line-clamp-2 text-sm md:text-base">
                                            {product.name}
                                        </h3>

                                        {/* Specs */}
                                        <div className="grid grid-cols-2 gap-1.5 md:gap-2 text-[10px] md:text-xs text-slate-400 mb-3 md:mb-4">
                                            <div>
                                                <span className="text-slate-500">Power:</span> {product.power}
                                            </div>
                                            <div>
                                                <span className="text-slate-500">Pressure:</span> {product.pressure}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                                            {product.features.slice(0, 2).map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="text-[10px] md:text-xs bg-white/10 text-slate-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center text-[var(--accent-400)] text-xs md:text-sm font-medium group-hover:gap-2 transition-all">
                                            <span>View Details</span>
                                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* View all products button */}
            <div className="container text-center mt-6 md:mt-8">
                <Link href="/products" className="btn-primary inline-flex text-sm md:text-base py-3 px-5 md:py-4 md:px-6">
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
