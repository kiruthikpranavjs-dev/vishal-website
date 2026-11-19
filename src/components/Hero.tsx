import React from 'react';
import { ArrowRight, Download, ChevronDown, CheckCircle2, MapPin, Award, ShieldCheck } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

interface HeroProps {
  onOpenAuditModal: () => void;
  onOpenInquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onOpenInquiryModal }) => {
  return (
    <section id="hero" className="relative bg-transparent border-b border-stone-200 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 lg:pb-24">
        
        {/* 3 Official Factory Certifications: Positioned directly below the menu bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-4xl mb-6 sm:mb-10">
          
          {/* 1. Manufacturing Base */}
          <div className="flex items-center gap-2 sm:gap-3 border border-stone-300 bg-white/95 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl shadow-xs">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-stone-100 border border-stone-200">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#93452E]" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <div className="text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider text-stone-500 leading-tight">
                Manufacturing Base
              </div>
              <div className="mt-0.5 text-[9.5px] sm:text-xs font-bold text-stone-900 leading-snug">
                <span className="sm:hidden">Tiruppur, India</span>
                <span className="hidden sm:inline">Tiruppur, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* 2. Industry Experience */}
          <div className="flex items-center gap-2 sm:gap-3 border border-stone-300 bg-white/95 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl shadow-xs">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 border border-amber-200">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#A77B36]" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <div className="text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider text-stone-500 leading-tight">
                Industry Experience
              </div>
              <div className="mt-0.5 text-[9.5px] sm:text-xs font-bold text-stone-900 leading-snug">
                <span className="sm:hidden">18+ Years Mfg</span>
                <span className="hidden sm:inline">18+ Years in Manufacturing</span>
              </div>
            </div>
          </div>

          {/* 3. Social Compliance Audit */}
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="flex items-center gap-2 sm:gap-3 border border-emerald-300/80 bg-white/95 hover:bg-white px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl shadow-xs text-left transition-all cursor-pointer active:scale-98"
          >
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <div className="text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider text-stone-500 leading-tight">
                Compliance Audit
              </div>
              <div className="mt-0.5 text-[9.5px] sm:text-xs font-bold text-stone-900 leading-snug">
                <span className="sm:hidden">SMETA 4-Pillar</span>
                <span className="hidden sm:inline">SMETA 4-Pillar · LRQA</span>
              </div>
            </div>
          </button>

        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text / Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#93452E] block">
                {FACTORY_INFO.legalEntity}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-stone-950 font-extrabold tracking-tight leading-[1.08]">
                Crafting Quality. <br />
                <span className="text-[#93452E]">Defining</span> Apparel.
              </h1>
            </div>

            <p className="text-sm sm:text-base font-bold text-stone-950 tracking-wide">
              18+ Years of Expertise in Knitted Garment Manufacturing.
            </p>

            <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-medium max-w-2xl">
              An established apparel manufacturing and export company based in Tiruppur, India. Combining the visual finesse of a premium international fashion brand with vertically integrated production—from German circular knitting and Zero Liquid Discharge (ZLD) eco-dyeing to automated printing, embroidery, and AQL 1.5 certified CMT export lines.
            </p>

            {/* Core Capability Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-semibold text-stone-900">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#93452E] shrink-0" />
                <span>30 Mayer & Cie German Knitting Machines</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#93452E] shrink-0" />
                <span>In-House Eco Dyeing (100% ZLD Water Recovery)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#93452E] shrink-0" />
                <span>Barudan & Tajima 40-Head Embroidery</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#93452E] shrink-0" />
                <span>In-House Quality Testing (AQL 1.5)</span>
              </div>
            </div>

            {/* Section 2 Mandatory Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href="#products"
                className="px-7 py-3.5 rounded-lg bg-[#93452E] hover:bg-[#713720] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group cursor-pointer active:scale-95"
              >
                <span>EXPLORE OUR PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#manufacturing"
                className="px-7 py-3.5 rounded-lg bg-[#34251C] hover:bg-stone-900 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>DISCOVER OUR CAPABILITIES</span>
              </a>

              <a
                href="/documents/bullet-impex-company-profile.pdf"
                target="_blank"
                rel="noreferrer"
                download="Bullet_Impex_Company_Profile.pdf"
                className="px-4 py-3.5 rounded-lg border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-xs"
              >
                <Download className="w-4 h-4 text-stone-500" />
                <span>Profile (PDF)</span>
              </a>
            </div>

          </div>

          {/* Archival style facility photograph */}
          <div className="lg:col-span-5">
            <figure className="border border-[#BDA88C] bg-[#F3EBDD] p-2.5 shadow-[0_14px_34px_rgba(52,37,28,0.18)] sm:p-3">
              <div className="overflow-hidden border border-[#D8C7AE] bg-[#E8DFD2]">
                <img
                  src="/images/factory/factory-building.jpg"
                  alt="Bullet Impex factory facility in Palayakadu, Tiruppur"
                  className="block h-auto w-full object-contain"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-2 pt-3 pb-1">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#93452E]">Integrated production facility</div>
                  <div className="mt-1 text-base font-semibold text-[#34251C]">Palayakadu, Tiruppur</div>
                </div>
                <span className="h-px w-12 shrink-0 bg-[#93452E]/55" aria-hidden="true" />
              </figcaption>
            </figure>
          </div>

        </div>

      </div>

      {/* Live Metrics Bar */}
      <div className="bg-[#34251C] text-white py-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {FACTORY_INFO.experience}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                Knitted Garment Expertise
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#93452E] tracking-tight">
                5,000 Pcs/Day
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-200 font-semibold">
                Cutting Capacity
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                4,500 Pcs/Day
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-200 font-semibold">
                Sewing & Stitching Lines
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                100% ZLD
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-200 font-semibold">
                Closed-Loop Water Recovery
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-tight">
                AQL 1.5
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-200 font-semibold">
                Strict Quality Standard
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
