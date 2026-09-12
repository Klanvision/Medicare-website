import React from 'react';
import { Calendar, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { HOSPITAL_CONTACT_INFO } from '@/data/navigation';

export const FinalCTASection: React.FC = () => {
  return (
    <section id="final-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-sky-300/40 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/20 border border-white/30 rounded-full text-white text-xs font-black uppercase tracking-wider backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-sky-200" />
          <span>Prioritize Your Family's Health Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          Ready to Consult MEDICARE’s Top Specialists?
        </h2>

        <p className="text-sm sm:text-base text-sky-50 font-medium max-w-2xl mx-auto leading-relaxed">
          Book an online OPD slot in under 2 minutes or speak directly with our 24/7 patient helpline desk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#appointments">
            <button className="px-6 py-3.5 rounded-xl bg-white text-[#00529B] hover:bg-sky-50 font-black text-sm shadow-lg border-0 flex items-center justify-center gap-2 transition-all">
              <Calendar className="w-5 h-5 text-[#00529B]" />
              <span>Book OPD Appointment Now</span>
            </button>
          </a>
          <a href={`tel:${HOSPITAL_CONTACT_INFO.opdHelpline}`}>
            <button className="px-6 py-3.5 rounded-xl bg-sky-400/30 text-white hover:bg-white/30 font-extrabold text-sm border border-white/40 backdrop-blur-sm flex items-center justify-center gap-2 transition-all">
              <PhoneCall className="w-5 h-5 text-white" />
              <span>Call OPD Helpline ({HOSPITAL_CONTACT_INFO.opdHelpline})</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
