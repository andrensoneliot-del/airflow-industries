import Link from "next/link";
import { Download, FileText, Book, Wrench, ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";

const downloadCategories = [
    {
        id: "brochures",
        name: "Product Brochures",
        icon: Book,
        description: "Detailed specifications and features of all our products",
    },
    {
        id: "manuals",
        name: "User Manuals",
        icon: FileText,
        description: "Installation, operation, and maintenance guides",
    },
    {
        id: "technical",
        name: "Technical Data Sheets",
        icon: Wrench,
        description: "In-depth technical specifications and drawings",
    },
];

export default function DownloadsPage() {
    return (
        <div className="min-h-screen pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-20">
            <div className="container">
                {/* Page header */}
                <div className="text-center mb-16">
                    <p className="text-[var(--accent-400)] font-medium mb-2 uppercase tracking-wider text-sm">
                        Resources
                    </p>
                    <h1 className="text-white mb-4">
                        Downloads & <span className="gradient-text">Documentation</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Access product brochures, technical specifications, user manuals, and other
                        resources to help you make informed decisions.
                    </p>
                </div>

                {/* Download categories */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {downloadCategories.map((category) => (
                        <div key={category.id} className="glass-card p-6 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent-400)]/20 rounded-2xl flex items-center justify-center">
                                <category.icon className="w-7 h-7 text-[var(--accent-400)]" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                            <p className="text-slate-400 text-sm">{category.description}</p>
                        </div>
                    ))}
                </div>

                {/* Product downloads */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8">Product Brochures</h2>

                    {productsData.categories.map((category) => {
                        const categoryProducts = productsData.products.filter(p => p.category === category.id);

                        return (
                            <div key={category.id} className="mb-12">
                                <h3 className="text-lg font-semibold text-[var(--accent-400)] mb-4">
                                    {category.name}
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {categoryProducts.map((product) => (
                                        <div key={product.id} className="glass-card p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                    <FileText className="w-5 h-5 text-red-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-medium line-clamp-1">
                                                        {product.name.split(" ").slice(0, 3).join(" ")}
                                                    </p>
                                                    <p className="text-slate-500 text-xs">PDF • 2.5 MB</p>
                                                </div>
                                            </div>
                                            <a
                                                href={product.pdfUrl}
                                                className="w-10 h-10 bg-[var(--accent-400)]/20 rounded-lg flex items-center justify-center text-[var(--accent-400)] hover:bg-[var(--accent-400)] hover:text-white transition-all"
                                                download
                                            >
                                                <Download className="w-4 h-4" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="glass-card p-12 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Need Custom Documentation?
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Can&apos;t find what you&apos;re looking for? Contact us for specific technical
                            documentation, custom quotations, or any other resources you need.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex">
                            Request Documentation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
