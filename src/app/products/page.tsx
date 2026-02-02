"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";
import {
    Grid3X3,
    List,
    ArrowRight,
    Download,
    Scale,
    X,
    CheckCircle
} from "lucide-react";

type Product = typeof productsData.products[0];

// Map product categories to images
const productImages: Record<string, string> = {
    "reciprocating": "/products/reciprocating-01.png",
    "screw": "/products/screw-01.png",
    "oil-free": "/products/oilfree-01.png",
    "scroll": "/products/oilfree-01.png",
    "vacuum": "/products/screw-01.png",
    "dryers": "/products/hero-compressor.png",
};

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [compareList, setCompareList] = useState<Product[]>([]);
    const [showCompareModal, setShowCompareModal] = useState(false);

    // Filter products based on selected category
    const filteredProducts = useMemo(() => {
        if (!selectedCategory) return productsData.products;
        return productsData.products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    // Toggle product in compare list
    const toggleCompare = (product: Product) => {
        if (compareList.find(p => p.id === product.id)) {
            setCompareList(compareList.filter(p => p.id !== product.id));
        } else if (compareList.length < 3) {
            setCompareList([...compareList, product]);
        }
    };

    const isInCompareList = (productId: string) => {
        return compareList.some(p => p.id === productId);
    };

    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            <div className="container">
                {/* Page header */}
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-xs md:text-sm">
                        Our Products
                    </p>
                    <h1 className="text-white mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Industrial <span className="gradient-text">Compressor Solutions</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                        Explore our comprehensive range of air compressors, vacuum pumps, and air treatment systems.
                        Compare products and download brochures.
                    </p>
                </div>

                {/* Filters and view controls */}
                <div className="flex flex-col gap-4 mb-6 md:mb-8">
                    {/* Category filters - scrollable on mobile */}
                    <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                        <div className="flex items-center gap-2 min-w-max md:flex-wrap">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${!selectedCategory
                                    ? "bg-[var(--accent-400)] text-white"
                                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                                    }`}
                            >
                                All Products
                            </button>
                            {productsData.categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category.id
                                        ? "bg-[var(--accent-400)] text-white"
                                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                                        }`}
                                >
                                    {category.name.split(" ")[0]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* View controls */}
                    <div className="flex items-center justify-between">
                        <p className="text-slate-400 text-xs md:text-sm">
                            {filteredProducts.length} products
                        </p>
                        <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-1.5 md:p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-white/20 text-white" : "text-slate-400"
                                    }`}
                                aria-label="Grid view"
                            >
                                <Grid3X3 className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-1.5 md:p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-white/20 text-white" : "text-slate-400"
                                    }`}
                                aria-label="List view"
                            >
                                <List className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products grid/list */}
                <div className={
                    viewMode === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                        : "space-y-4"
                }>
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className={`product-card ${viewMode === "list" ? "flex flex-col sm:flex-row gap-4 md:gap-6" : ""}`}
                        >
                            {/* Product image */}
                            <div className={`${viewMode === "list" ? "sm:w-48 flex-shrink-0" : ""}`}>
                                <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-3 md:mb-4 overflow-hidden relative">
                                    <Image
                                        src={productImages[product.category] || "/products/hero-compressor.png"}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4"
                                    />

                                    {/* Badges */}
                                    <div className="absolute top-2 md:top-3 left-2 md:left-3 flex gap-1 md:gap-2">
                                        {product.isNew && (
                                            <span className="bg-green-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                                                NEW
                                            </span>
                                        )}
                                    </div>

                                    {/* Compare checkbox */}
                                    <button
                                        onClick={() => toggleCompare(product)}
                                        className={`absolute top-2 md:top-3 right-2 md:right-3 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all ${isInCompareList(product.id)
                                            ? "bg-[var(--accent-400)] text-white"
                                            : "bg-black/50 text-white hover:bg-[var(--accent-400)]"
                                            }`}
                                        title="Add to compare"
                                    >
                                        {isInCompareList(product.id) ? (
                                            <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                                        ) : (
                                            <Scale className="w-3 h-3 md:w-4 md:h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="flex-1">
                                <p className="text-[10px] md:text-xs text-[var(--accent-400)] font-medium uppercase mb-1">
                                    {productsData.categories.find(c => c.id === product.category)?.name}
                                </p>
                                <h3 className="text-white font-semibold mb-2 md:mb-3 line-clamp-2 text-sm md:text-base">
                                    {product.name}
                                </h3>

                                {/* Specs */}
                                <div className="grid grid-cols-2 gap-1.5 md:gap-2 text-[10px] md:text-sm text-slate-400 mb-3 md:mb-4">
                                    <div>
                                        <span className="text-slate-500">Power:</span> {product.power}
                                    </div>
                                    <div>
                                        <span className="text-slate-500">Pressure:</span> {product.pressure}
                                    </div>
                                    <div>
                                        <span className="text-slate-500">Flow:</span> {product.flow}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                                    {product.features.slice(0, 3).map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-[10px] md:text-xs bg-white/10 text-slate-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <Link
                                        href="/contact"
                                        className="btn-primary text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4 flex-1 justify-center"
                                    >
                                        Get Quote
                                    </Link>
                                    <a
                                        href={product.pdfUrl}
                                        className="btn-ghost text-xs md:text-sm py-1.5 md:py-2 px-2 md:px-3"
                                        title="Download Brochure"
                                    >
                                        <Download className="w-3 h-3 md:w-4 md:h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating compare bar */}
                {compareList.length > 0 && (
                    <div className="fixed bottom-4 md:bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50">
                        <div className="bg-[var(--primary-800)] border border-[var(--accent-400)]/50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                                <div className="flex items-center gap-2">
                                    <Scale className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent-400)]" />
                                    <span className="text-white font-medium text-sm md:text-base">
                                        {compareList.length} selected
                                    </span>
                                </div>
                                <button
                                    onClick={() => setCompareList([])}
                                    className="text-slate-400 hover:text-white p-1 sm:hidden"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="hidden sm:flex items-center gap-2">
                                {compareList.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center gap-2 bg-white/10 rounded-lg px-2 md:px-3 py-1"
                                    >
                                        <span className="text-xs md:text-sm text-slate-300 max-w-24 md:max-w-32 truncate">
                                            {product.name.split(" ").slice(0, 2).join(" ")}
                                        </span>
                                        <button
                                            onClick={() => toggleCompare(product)}
                                            className="text-slate-400 hover:text-white"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <button
                                    onClick={() => setShowCompareModal(true)}
                                    className="btn-primary py-2 px-3 md:px-4 text-sm flex-1 sm:flex-none justify-center"
                                    disabled={compareList.length < 2}
                                >
                                    Compare Now
                                </button>

                                <button
                                    onClick={() => setCompareList([])}
                                    className="text-slate-400 hover:text-white p-2 hidden sm:block"
                                >
                                    <X className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Compare modal */}
                {showCompareModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div className="bg-[var(--primary-800)] border border-white/10 rounded-xl md:rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 sticky top-0 bg-[var(--primary-800)] z-10">
                                <h2 className="text-lg md:text-xl font-bold text-white">Product Comparison</h2>
                                <button
                                    onClick={() => setShowCompareModal(false)}
                                    className="text-slate-400 hover:text-white p-2"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Comparison table */}
                            <div className="p-4 md:p-6 overflow-x-auto">
                                <table className="compare-table w-full text-xs md:text-sm">
                                    <thead>
                                        <tr>
                                            <th className="w-28 md:w-40">Specification</th>
                                            {compareList.map((product) => (
                                                <th key={product.id} className="min-w-36 md:min-w-48">
                                                    <div className="text-white font-semibold text-sm md:text-base">
                                                        {product.name}
                                                    </div>
                                                    <div className="text-[10px] md:text-xs text-slate-400 font-normal mt-1">
                                                        {productsData.categories.find(c => c.id === product.category)?.name}
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-medium text-slate-400">Power</td>
                                            {compareList.map((product) => (
                                                <td key={product.id} className="text-white">{product.power}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="font-medium text-slate-400">Pressure</td>
                                            {compareList.map((product) => (
                                                <td key={product.id} className="text-white">{product.pressure}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="font-medium text-slate-400">Flow Rate</td>
                                            {compareList.map((product) => (
                                                <td key={product.id} className="text-white">{product.flow}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="font-medium text-slate-400">Category</td>
                                            {compareList.map((product) => (
                                                <td key={product.id} className="text-white capitalize">{product.subcategory}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="font-medium text-slate-400">Features</td>
                                            {compareList.map((product) => (
                                                <td key={product.id}>
                                                    <ul className="space-y-1">
                                                        {product.features.map((feature) => (
                                                            <li key={feature} className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm text-slate-300">
                                                                <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-400 flex-shrink-0" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="font-medium text-slate-400">Action</td>
                                            {compareList.map((product) => (
                                                <td key={product.id}>
                                                    <div className="flex gap-2">
                                                        <Link href="/contact" className="btn-primary text-xs md:text-sm py-1.5 md:py-2 px-2 md:px-4">
                                                            Get Quote
                                                        </Link>
                                                        <a href={product.pdfUrl} className="btn-ghost text-xs md:text-sm py-1.5 md:py-2 px-2 md:px-3">
                                                            <Download className="w-3 h-3 md:w-4 md:h-4" />
                                                        </a>
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
