import React from 'react';
import { CheckCircle2, ShieldCheck, Scale, Search, FlaskConical, Award } from 'lucide-react';

export const QualityAssurance: React.FC = () => {
  const testingParameters = [
    {
      title: "GSM (Grams per Square Metre)",
      desc: "Precision weight verification across greige and finished fabric rolls using calibrated digital analytical balances to guarantee uniform textile density."
    },
    {
      title: "Shrinkage & Dimensional Stability",
      desc: "Standardized washing and tumble-drying cycles measuring lengthwise and widthwise dimensional retention before pattern cutting begins."
    },
    {
      title: "Spirality & Torque Measurement",
      desc: "Strict calculation of side-seam skew and rotational torque after multiple wash cycles to ensure garments hang straight and never twist."
    },
    {
      title: "Colour Fastness",
      desc: "Multi-parameter testing including fastness to home laundering, wet/dry crocking (rubbing resistance), perspiration, and light exposure."
    }
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-transparent border-b border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#93452E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#93452E]">
            Quality Assurance
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-300">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.12]">
              Every Detail <br />
              <span className="text-[#93452E]">Matters.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-800 font-medium max-w-md leading-relaxed">
            Our dedicated quality control team conducts continuous inspection across every production stage—from raw yarn and greige knitting to in-line stitching and final pre-shipment audits.
          </p>
        </div>

        {/* Split Grid: Quality Photographs + 4 Foundational Protocols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left: Authentic In-House Lab & Measurement Inspection Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-[#2B1F17] aspect-[3/4] p-5 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block font-semibold">
                    Inspection Floor
                  </span>
                  <span className="text-sm font-bold text-white block mt-1 leading-snug">
                    Strict AQL 1.5 Benchmarks
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-[#34251C] aspect-[3/4] p-5 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
                    In-House Testing
                  </span>
                  <span className="text-sm font-bold text-white block mt-1 leading-snug">
                    Fabric to Finishing Checks
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-300 text-xs text-stone-700 flex items-center justify-between">
              <span className="font-semibold text-stone-900">
                In-House Testing Facility:
              </span>
              <span className="font-mono text-[#93452E] font-bold">
                Tested As Per Buyer Requirements
              </span>
            </div>
          </div>

          {/* Right: Technical Consistency & QC Workflow */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#93452E] flex items-center justify-center font-bold text-xs font-mono">
                  01
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  Strict AQL 1.5 International Inspection Standards
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                We strictly enforce AQL 1.5 (Acceptable Quality Limit) across all export consignments. Sampling protocols cover critical, major, and minor classification to ensure zero defects reach retail shelves.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#93452E] flex items-center justify-center font-bold text-xs font-mono">
                  02
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  In-House Quality Testing
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                Conducted directly inside our factory premises, our in-house testing evaluates fabrics from raw yarn to finished garments, verifying physical, chemical, and dimensional characteristics against buyer manuals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#93452E] flex items-center justify-center font-bold text-xs font-mono">
                  03
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  Monitoring from Fabric Inspection to Final Garment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                Our dedicated QC team maintains continuous roving inspection checkpoints across circular knitting tension, cut-piece grain-line alignment, and in-line sewing stitch tension.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#93452E] flex items-center justify-center font-bold text-xs font-mono">
                  04
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  Automated Needle & Metal Detection
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-11">
                Every newborn, infant, and adult garment passes through automated conveyor needle detectors before final poly-bagging, guaranteeing 100% metal-free infant safety.
              </p>
            </div>

          </div>

        </div>

        {/* Core In-House Testing Parameters Cards */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-300 shadow-lg">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200">
            <div>
              <h3 className="text-2xl font-extrabold text-stone-950">
                Core In-House Testing Parameters
              </h3>
              <p className="text-xs text-stone-700 font-medium mt-0.5">
                Conducted in-house as per buyer requirement and international testing standards.
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-red-50 text-[#93452E] border border-red-200 self-start">
              AQL 1.5 Compliance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testingParameters.map((param, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-2">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#93452E] shrink-0" />
                  <span>{param.title}</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {param.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
