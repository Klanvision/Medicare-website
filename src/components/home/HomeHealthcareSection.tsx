import React from 'react';
import { Home, HeartPulse, UserCheck, ShieldCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { HOME_HEALTHCARE_SERVICES } from '@/data/homeData';

export const HomeHealthcareSection: React.FC = () => {
  return (
    <section id="home-healthcare" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider inline-block">
          Doorstep Medical Services
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Home Healthcare & <span className="text-[#00529B]">ICU Care at Home</span>
        </h2>
        <p className="text-sm text-slate-600 font-medium">
          Hospital-grade clinical care delivered in the comfort and privacy of your home for elderly or post-surgery patients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {HOME_HEALTHCARE_SERVICES.map((hc) => (
          <Card key={hc.id} hoverEffect className="p-6 space-y-6 flex flex-col justify-between bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all rounded-3xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-sky-50 text-[#00529B] rounded-2xl border border-sky-200">
                  <Home className="w-6 h-6 text-[#00529B]" />
                </div>
                {hc.badge && (
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase">
                    {hc.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-black text-slate-900">{hc.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{hc.description}</p>

              <div className="space-y-2 text-xs text-slate-700 font-semibold pt-2 border-t border-sky-100">
                {hc.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00529B] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a href="#contact" className="block">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-[#00529B] hover:bg-[#003B70] text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Home Care</span>
                </button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
