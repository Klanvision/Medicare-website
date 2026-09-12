import React from 'react';
import { ShieldAlert, PhoneCall, Clock, Truck, HeartPulse } from 'lucide-react';
import { HOSPITAL_CONTACT_INFO } from '@/data/navigation';

export const EmergencyCareSection: React.FC = () => {
  return (
    <section id="emergency-care" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="bg-gradient-to-r from-sky-50 via-white to-red-50 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-md border border-sky-200/80 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-100 border border-red-200 rounded-full text-red-700 text-xs font-extrabold tracking-wider uppercase">
              <ShieldAlert className="w-4 h-4 text-red-600 animate-pulse" />
              <span>24/7 Critical Emergency & Level-1 Trauma Care</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] leading-tight">
              Medical Emergency? <br />
              <span className="text-[#00529B]">Immediate Ambulance Dispatch</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Equipped with GPS-tracked Mobile ICUs, emergency trauma surgeons, cardiac Cath Lab readiness, and stroke response team on standby 24 hours a day.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-red-600 shrink-0" />
                <span>15-Min Ambulance Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#00529B] shrink-0" />
                <span>Cath Lab on 24/7 Standby</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Door-to-CT &lt; 15 Mins</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 shrink-0 bg-white p-6 rounded-3xl border border-red-200 shadow-md w-full lg:w-auto text-center">
            <p className="text-xs font-extrabold text-red-600 uppercase tracking-widest">Toll-Free Emergency Hotline</p>
            <a
              href={`tel:${HOSPITAL_CONTACT_INFO.emergencyNumber}`}
              className="text-2xl sm:text-3xl font-black text-[#00529B] hover:underline"
            >
              {HOSPITAL_CONTACT_INFO.emergencyNumber}
            </a>
            <a
              href={`tel:${HOSPITAL_CONTACT_INFO.emergencyNumber}`}
              className="w-full py-3 px-6 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 animate-pulse" />
              <span>Call Emergency Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
