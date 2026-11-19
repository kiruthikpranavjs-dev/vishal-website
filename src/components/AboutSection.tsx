import React from 'react';
import { Layers, Droplets, ShieldCheck, Cpu, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-transparent border-b border-stone-300/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[1px] bg-[#93452E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#93452E]">
            Company Introduction
          </span>
        </div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Manufacturing Photography & 18+ Years Badge */}
          <div className="lg:col-span-5 relative">
            <div className="space-y-4">
              
              {/* Primary Plant Feature: Mayer & Cie German Knitting Machines */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#251B15] aspect-[4/3] p-6 sm:p-7 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Cpu className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    German & Japanese Fleet
                  </span>
                </div>
                
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 block font-semibold">
                    Knitting Department
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white block mt-1 leading-snug">
                    30 Mayer & Cie (Germany) + 7 Shima Seiki (Japan)
                  </span>
                </div>
              </div>

              {/* Secondary Composition: 18+ Years Highlight + Fabric Spools */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-stone-300 shadow-sm flex flex-col justify-center">
                  <div className="text-4xl font-black text-[#93452E] leading-none">18+</div>
                  <div className="text-xs font-bold text-stone-900 mt-2 uppercase tracking-wider">
                    Years of Expertise
                  </div>
                  <p className="text-[11px] text-stone-700 font-medium mt-1 leading-snug">
                    Trusted knitted garment manufacturing in Tiruppur.
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-300 bg-[#34251C] aspect-[4/3] p-5 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                    <Layers className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400 block font-semibold">
                      Raw Materials
                    </span>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5 leading-tight">
                      Tested Combed Yarns
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Exact Factual Introduction & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.12]">
              More Than Manufacturing. <br />
              <span className="text-[#93452E]">A Commitment</span> to Quality.
            </h2>

            {/* Exact Required Content Foundation */}
            <div className="space-y-4 text-stone-800 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-stone-950">
                Based in Tiruppur, India, <strong>Bullet Impex Private Limited</strong> is a trusted knitted garment manufacturer with over 18 years of expertise. We specialise in producing high-quality apparel for newborns, infants, toddlers, women, men, sleepwear and sportswear.
              </p>
              
              <p className="text-stone-800 font-medium">
                With integrated capabilities spanning yarn sourcing, knitting, dyeing, cutting, embroidery, stitching and quality control, we focus on delivering consistency and excellence from concept to completion.
              </p>
            </div>

            {/* 4 Feature Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#34251C] font-bold text-xs uppercase tracking-wide">
                  <Layers className="w-4 h-4 text-[#93452E]" />
                  <span>Integrated Facility</span>
                </div>
                <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                  Knitting, dyeing, cutting, embroidery, stitching, and finishing under one roof in Tiruppur.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#34251C] font-bold text-xs uppercase tracking-wide">
                  <Droplets className="w-4 h-4 text-emerald-600" />
                  <span>Eco-Friendly ZLD Dyeing</span>
                </div>
                <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                  Own wet processing unit operating Zero Liquid Discharge with 100% water recovery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#34251C] font-bold text-xs uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>SMETA 4-Pillar Audited</span>
                </div>
                <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                  Audited by LRQA across labour, health & safety, environment 4-pillar, and business ethics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#34251C] font-bold text-xs uppercase tracking-wide">
                  <Cpu className="w-4 h-4 text-[#93452E]" />
                  <span>Modern Fleet</span>
                </div>
                <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                  30 Mayer & Cie, 7 Shima Seiki, 40-head Barudan/Tajima, and 50+ computerized stitching stations.
                </p>
              </div>
            </div>

            {/* Explore More Button */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#manufacturing"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#34251C] hover:bg-stone-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md group cursor-pointer"
              >
                <span>EXPLORE MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/documents/bullet-impex-company-profile.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-stone-700 hover:text-[#93452E] transition-colors"
              >
                <span>View Official Profile Document (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
