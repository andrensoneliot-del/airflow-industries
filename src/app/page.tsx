import HeroSection from "@/components/home/HeroSection";
import ProductsMarquee from "@/components/home/ProductsMarquee";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/home/Testimonials";
import ClientsCarousel from "@/components/home/ClientsCarousel";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsMarquee />
      <IndustriesGrid />
      <StatsCounter />
      <Testimonials />
      <ClientsCarousel />
      <CTASection />
    </>
  );
}
