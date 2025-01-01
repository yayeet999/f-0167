import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CoreProductsSection from "@/components/sections/CoreProductsSection";
import ExtendedProductsSection from "@/components/sections/ExtendedProductsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
          <CoreProductsSection />
        </div>
        <div className="relative bg-gradient-to-b from-white to-purple-50">
          <ExtendedProductsSection />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white pointer-events-none" />
          <PricingSection />
        </div>
        <div className="relative bg-gradient-to-b from-white to-blue-50">
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;