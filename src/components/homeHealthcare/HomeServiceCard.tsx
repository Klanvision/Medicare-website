import React from 'react';
import { Clock, CheckCircle2, Home, Calendar, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { HomeServiceItem } from '@/data/homeHealthcareData';
import { Card } from '@/components/common/Card';

interface HomeServiceCardProps {
  service: HomeServiceItem;
  onBookService: (service: HomeServiceItem) => void;
}

export const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ service, onBookService }) => {
  return (
    <Card
      hoverEffect
      className="p-6 bg-white flex flex-col justify-between space-y-6 border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all rounded-3xl"
    >
      <div className="space-y-4">
        {/* Cover Image & Category */}
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 rounded-2xl object-cover shadow-md border border-slate-100"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#00529B] text-xs font-black uppercase tracking-wider shadow-sm">
              {service.category}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-1">
          <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">{service.description}</p>
        </div>

        {/* Duration & Eligibility */}
        <div className="space-y-2 pt-2 border-t border-sky-100 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 flex items-center gap-1.5 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#00529B]" /> Shift / Duration:
            </span>
            <span className="font-extrabold text-[#00529B]">{service.duration}</span>
          </div>

          <div className="p-2.5 bg-sky-50 rounded-xl border border-sky-100 text-[11px] text-slate-800 space-y-0.5">
            <p className="font-extrabold text-[#00529B]">Patient Eligibility:</p>
            <p className="text-slate-600 line-clamp-2 font-medium">{service.eligibility}</p>
          </div>
        </div>

        {/* 4-Step Care Process */}
        <div className="space-y-1.5 pt-2 border-t border-sky-100">
          <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Service Process:</p>
          <div className="space-y-1 text-xs text-slate-800">
            {service.process.slice(0, 3).map((step, idx) => (
              <div key={idx} className="flex items-start gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00529B] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Booking Action */}
      <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-400 font-extrabold uppercase">Starting From</p>
          <p className="text-xl font-black text-[#00529B]">
            {service.startingPrice === 0 ? 'FREE' : `₹${service.startingPrice}`}
            <span className="text-xs text-slate-500 font-normal"> / {service.priceUnit}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => onBookService(service)}
          className="px-4 py-2.5 rounded-xl bg-[#00529B] hover:bg-[#003B70] text-white text-xs font-black flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Home Care</span>
        </button>
      </div>
    </Card>
  );
};
