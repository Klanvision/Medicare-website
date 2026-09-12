import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, ArrowRight, Tag } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { HEALTH_CHECKUPS_DATA } from '@/data/homeData';

export const HealthCheckupsSection: React.FC = () => {
  return (
    <section id="health-checkups" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider inline-block">
          Preventive Health
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Preventive Health Checkup <span className="text-[#00529B]">Packages</span>
        </h2>
        <p className="text-sm text-slate-600 font-medium">
          Detect health risks early with comprehensive full-body blood panels, cardiac stress tests, and doctor OPD consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {HEALTH_CHECKUPS_DATA.map((pkg) => (
          <Card key={pkg.id} hoverEffect className="p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all rounded-3xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {pkg.badge && (
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase">
                    {pkg.badge}
                  </span>
                )}
                <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Save {pkg.discountPercent}%
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 leading-snug">{pkg.title}</h3>
              <p className="text-xs text-[#00529B] font-extrabold">Recommended for: {pkg.recommendedFor}</p>

              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-100">
                <span className="text-xs font-black text-[#00529B]">{pkg.testsCount} Essential Tests Included</span>
              </div>

              <div className="space-y-2 text-xs text-slate-700 font-medium max-h-48 overflow-y-auto pr-1">
                {pkg.includedTests.map((test, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00529B] shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#00529B]">₹{pkg.discountedPrice.toLocaleString()}</span>
                <span className="text-sm text-slate-400 line-through font-semibold">₹{pkg.originalPrice.toLocaleString()}</span>
              </div>

              <a href="#appointments" className="block">
                <button
                  type="button"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#00529B] hover:bg-[#003B70] text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Package Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
