import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCollections } from './components/ProductCollections';
import { FabricExpertise } from './components/FabricExpertise';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { QualityAssurance } from './components/QualityAssurance';
import { SustainabilityZLD } from './components/SustainabilityZLD';
import { ResponsibleManufacturing } from './components/ResponsibleManufacturing';
import { WhyBulletImpex } from './components/WhyBulletImpex';
import { VisualGallery } from './components/VisualGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditDossierModal } from './components/AuditDossierModal';
import { RFQModal } from './components/RFQModal';

export function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  useEffect(() => {
    let started = false;
    let observer: IntersectionObserver | undefined;

    const beginScrollTextReveal = () => {
      if (started) return;
      started = true;

      const textBlocks = Array.from(document.querySelectorAll<HTMLElement>(
        'main h1, main h2, main h3, main h4, main p, main li'
      ));
      let pairDelay = 0;
      const revealTargets: HTMLElement[] = [];

      textBlocks.forEach((block) => {
        // Leave the initial viewport untouched; only prepare copy further down the page.
        if (block.getBoundingClientRect().top <= window.innerHeight * 0.88) return;
        block.classList.add('site-scroll-text');
        block.style.setProperty('--site-scroll-delay', `${pairDelay}ms`);
        const lineHeight = parseFloat(getComputedStyle(block).lineHeight) || 24;
        const highlightHeight = Math.min(lineHeight * 2, block.getBoundingClientRect().height);
        const highlightTravel = Math.max(0, block.getBoundingClientRect().height - highlightHeight);
        block.style.setProperty('--site-highlight-height', `${highlightHeight}px`);
        block.style.setProperty('--site-highlight-travel', `${highlightTravel}px`);
        pairDelay = pairDelay === 0 ? 90 : 0;
        revealTargets.push(block);
      });

      if (!revealTargets.length) return;
      if (!('IntersectionObserver' in window)) {
        revealTargets.forEach(block => block.classList.add('site-scroll-text-visible'));
        return;
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('site-scroll-text-visible');
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

      revealTargets.forEach(block => observer?.observe(block));
    };

    window.addEventListener('scroll', beginScrollTextReveal, { passive: true });
    return () => {
      window.removeEventListener('scroll', beginScrollTextReveal);
      observer?.disconnect();
    };
  }, []);

  const handleOpenInquiryWithProduct = (productName: string) => {
    setSelectedProduct(productName);
    setIsInquiryModalOpen(true);
  };

  const handleGeneralInquiry = () => {
    setSelectedProduct('');
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#f7f0e4] text-[#1A1614] font-sans selection:bg-[#93452E] selection:text-white overflow-x-hidden">
      <div className="site-background" aria-hidden="true" />
      <div className="relative z-10 min-h-screen flex flex-col">
      {/* SECTION 1: NAVIGATION */}
      <Header
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenInquiryModal={handleGeneralInquiry}
      />

      {/* MAIN WEBSITE SECTIONS */}
      <main className="flex-1 pt-[56px] sm:pt-[60px] lg:pt-[88px]">
        
        {/* SECTION 2: HERO EXPERIENCE */}
        <Hero
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
          onOpenInquiryModal={handleGeneralInquiry}
        />

        {/* SECTION 3: COMPANY INTRODUCTION */}
        <AboutSection />

        {/* SECTION 4: PRODUCT COLLECTIONS */}
        <ProductCollections
          onSelectProductForInquiry={handleOpenInquiryWithProduct}
        />

        {/* SECTION 5: FABRIC EXPERTISE */}
        <FabricExpertise
          onSelectFabricForInquiry={handleOpenInquiryWithProduct}
        />

        {/* SECTION 6: MANUFACTURING CAPABILITIES (A to I) */}
        <ManufacturingCapabilities />

        {/* SECTION 7: QUALITY ASSURANCE */}
        <QualityAssurance />

        {/* SECTION 8: SUSTAINABILITY AND ZERO LIQUID DISCHARGE */}
        <SustainabilityZLD />

        {/* SECTION 9: RESPONSIBLE MANUFACTURING AND SMETA */}
        <ResponsibleManufacturing
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* SECTION 10: WHY BULLET IMPEX? */}
        <WhyBulletImpex
          onOpenInquiryModal={handleGeneralInquiry}
        />

        {/* SECTION 11: GARMENT AND FACTORY GALLERY */}
        <VisualGallery />

        {/* SECTION 12: CONTACT AND BUSINESS ENQUIRIES */}
        <ContactSection
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

      </main>

      {/* SECTION 13: FOOTER */}
      <Footer
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenInquiryModal={handleGeneralInquiry}
      />

      {/* INTERACTIVE MODALS */}
      <AuditDossierModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <RFQModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialProduct={selectedProduct}
      />
      </div>
    </div>
  );
}

export default App;
