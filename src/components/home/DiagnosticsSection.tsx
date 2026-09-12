import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { DIAGNOSTICS_DATA } from '@/data/homeData';

export const DiagnosticsSection: React.FC = () => {
  return (
    <section id="diagnostics" className="bg-[#F4F9FD] py-14 px-4 sm:px-6 lg:px-8 font-sans border-b border-sky-100">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-1.5">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-extrabold uppercase tracking-wider">
            Precision Imaging & Lab
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            High Precision Diagnostics & Home Sample Collection
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            NABL certified high-precision pathology, 3T Silent MRI, 128-Slice Cardiac CT Angiography, and free doorstep sample pickup.
          </p>
        </div>

        {/* 3 Diagnostic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIAGNOSTICS_DATA.map((diag) => (
            <div
              key={diag.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-[11px] font-extrabold">
                    {diag.reportTime}
                  </span>
                  {diag.isHomeSampleAvailable && (
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
                      Home Sample Available
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug">{diag.title}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{diag.subtitle}</p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium border-t border-slate-100">
                  {diag.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#0F172A]">{diag.discountedPrice}</span>
                  <span className="text-xs text-slate-400 line-through">{diag.price}</span>
                </div>

                <a href="#appointments" className="block">
                  <button
                    type="button"
                    className="w-full py-3 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Book Diagnostic Scan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
