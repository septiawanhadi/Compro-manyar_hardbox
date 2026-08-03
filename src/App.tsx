import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { AboutFounders } from '@/components/sections/AboutFounders';
import { FAQSection } from '@/components/sections/FAQSection';
import { InquirySection } from '@/components/sections/InquirySection';

export function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary relative">
      <Toaster position="top-right" richColors closeButton />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioSection />
        <AboutFounders />
        <FAQSection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
