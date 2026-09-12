import React from 'react';
import {
  FileText,
  CreditCard,
  Car,
  Stethoscope,
  Home,
  Plane,
  CheckCircle2,
} from 'lucide-react';
import { INTERNATIONAL_STEPS_DATA } from '@/data/internationalData';

export const InternationalJourneyStepper: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {INTERNATIONAL_STEPS_DATA.map((step) => (
        <div
          key={step.stepNumber}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-soft space-y-3 flex flex-col justify-between hover:border-gold-500 transition-all group"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-navy-950 text-gold-400 font-extrabold text-xs flex items-center justify-center border border-gold-600/30">
                0{step.stepNumber}
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                {step.subtitle}
              </span>
            </div>

            <h4 className="text-sm font-bold text-navy-900 leading-snug group-hover:text-teal-700 transition-colors">
              {step.title}
            </h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
