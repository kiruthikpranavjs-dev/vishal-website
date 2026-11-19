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

      {/* Certifications Bar: Below Main Menu, Attached Bar with Bigger White Certificate Panel, Scrolls with Page */}
      <div className="w-full bg-[#f3ecdf]/95 border-b border-stone-300/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            
            {/* Attached Base & Experience credentials */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-stone-800">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-[#93452E]/10 flex items-center justify-center text-[#93452E] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-stone-500 block leading-none">
                    Manufacturing Base
                  </span>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm mt-0.5 block">
                    Tiruppur, Tamil Nadu, India
                  </span>
                </div>
              </div>

              <span className="hidden md:inline text-stone-300">|</span>

              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-stone-500 block leading-none">
                    Industry Experience
                  </span>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm mt-0.5 block">
                    18+ Years in Manufacturing
                  </span>
                </div>
              </div>
            </div>

            {/* Bigger Compliance Certificate Bar: In White Colour Like a Certificate */}
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="group flex items-center gap-3 bg-white border-2 border-emerald-500/60 hover:border-emerald-600 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer text-left self-stretch sm:self-auto"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[8.5px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 leading-none">
                    Social Compliance Audit
                  </span>
                  <span className="text-[9px] font-mono text-stone-500 hidden sm:inline">
                    Site: {FACTORY_INFO.sedexSiteRef}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-black text-stone-950 mt-1 flex items-center space-x-1.5">
                  <span>SMETA 4-Pillar · LRQA Audited</span>
                  <span className="text-[10px] text-emerald-700 font-bold hidden lg:inline">→ View Certificate</span>
                </div>
              </div>
            </button>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 lg:pb-24">
        
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
