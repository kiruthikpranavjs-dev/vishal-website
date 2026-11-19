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
    const root = document.documentElement;
    let frame = 0;

    const updateBackgroundPosition = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollRange = Math.max(1, root.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const panRange = window.matchMedia('(max-aspect-ratio: 3/4)').matches ? 12 : 18;
        root.style.setProperty('--site-bg-pan-y', reducedMotion ? '0vh' : `${-progress * panRange}vh`);
        frame = 0;
      });
    };

    window.addEventListener('scroll', updateBackgroundPosition, { passive: true });
    window.addEventListener('resize', updateBackgroundPosition);
    updateBackgroundPosition();

    return () => {
      window.removeEventListener('scroll', updateBackgroundPosition);
      window.removeEventListener('resize', updateBackgroundPosition);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty('--site-bg-pan-y');
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
    <div className="relative min-h-screen bg-transparent text-[#34251C] font-sans selection:bg-[#93452E] selection:text-white">
      <div className="site-background" aria-hidden="true">
        <img src="/images/site-cloth-background.png" alt="" />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
      {/* SECTION 1: NAVIGATION */}
      <Header
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenInquiryModal={handleGeneralInquiry}
      />

      {/* MAIN WEBSITE SECTIONS */}
      <main className="flex-1">
        
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
