import React from 'react';
import { CreditCard, FileCheck, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRE_AUTH_STEPS_DATA } from '@/data/insuranceData';

export const PreAuthStepper: React.FC = () => {
  const getIcon = (num: number) => {
    switch (num) {
      case 1:
        return <CreditCard className="w-6 h-6 text-teal-600" />;
      case 2:
        return <FileCheck className="w-6 h-6 text-teal-600" />;
      case 3:
        return <ShieldCheck className="w-6 h-6 text-gold-600" />;
      case 4:
        return <CheckCircle2 className="w-6 h-6 text-teal-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      {PRE_AUTH_STEPS_DATA.map((step, idx) => (
        <div
          key={step.stepNumber}
          className="bg-white p-5 rounded-2xl border border-gray-200 shadow-soft space-y-3 relative flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100">
                {getIcon(step.stepNumber)}
              </div>
              <span className="w-7 h-7 rounded-full bg-navy-900 text-gold-400 font-extrabold text-xs flex items-center justify-center">
                0{step.stepNumber}
              </span>
            </div>

            <h4 className="text-base font-bold text-navy-900">{step.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
          </div>

          {idx < 3 && (
            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-300">
              <ChevronRight className="w-6 h-6" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
