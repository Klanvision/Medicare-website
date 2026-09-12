import React from 'react';
import { Cpu, Shield, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { TREATMENTS_DATA } from '@/data/homeData';

export const TreatmentsSection: React.FC = () => {
  return (
    <section id="treatments" className="bg-[#F4F9FD] py-16 px-4 sm:px-6 lg:px-8 border-y border-sky-100 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider inline-block">
            Advanced Medical Technology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Advanced Clinical Treatments & <span className="text-[#00529B]">Robotic Procedures</span>
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Minimally invasive keyhole surgeries, sub-millimeter targeted radiotherapy, and robotic arm precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS_DATA.map((tr) => (
            <Card key={tr.id} hoverEffect className="p-6 space-y-4 bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-[10px] font-black uppercase">
                    {tr.category}
                  </span>
                  {tr.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase">
                      Popular Procedure
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-slate-900">{tr.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{tr.description}</p>

                <div className="space-y-2 text-xs pt-3 border-t border-sky-100">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#00529B]" /> Expected Recovery:
                    </span>
                    <span className="font-extrabold text-[#00529B]">{tr.recoveryTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Cpu className="w-3.5 h-3.5 text-[#00529B]" /> Technology:
                    </span>
                    <span className="font-extrabold text-slate-900">{tr.techUsed}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a href="#appointments" className="block">
                  <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-sky-50 text-[#00529B] border-2 border-[#00529B] font-black text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Inquire for Treatment</span>
                    <ArrowRight className="w-4 h-4 text-[#00529B]" />
                  </button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
