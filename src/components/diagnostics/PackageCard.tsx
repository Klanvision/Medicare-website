import React from 'react';
import { CheckCircle2, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { DiagnosticPackage } from '@/data/diagnosticData';
import { Card } from '@/components/common/Card';

interface PackageCardProps {
  pkg: DiagnosticPackage;
  onBookPackage: (pkg: DiagnosticPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBookPackage }) => {
  const discountPercent = Math.round(((pkg.mrpPrice - pkg.discountPrice) / pkg.mrpPrice) * 100);

  return (
    <Card
      hoverEffect
      className="p-6 sm:p-8 space-y-6 bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all rounded-3xl flex flex-col justify-between font-sans"
    >
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-sky-50 text-[#00529B] border border-sky-100 text-xs font-black uppercase tracking-wider">
            {pkg.testCount} Tests Included
          </span>
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00529B] to-[#0066BC] text-white text-xs font-black uppercase tracking-wider shadow-xs">
            {discountPercent}% OFF
          </span>
        </div>

        {/* Package Title & Description */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">{pkg.packageName}</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">{pkg.description}</p>
          <p className="text-[11px] text-[#00529B] font-extrabold pt-1">Ideal For: {pkg.idealFor}</p>
        </div>

        {/* Included Tests Checklist */}
        <div className="space-y-2.5 pt-3 border-t border-sky-100">
          <p className="text-xs font-black text-[#00529B] uppercase tracking-wider">Includes Key Tests:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
            {pkg.includedTests.map((testName, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00529B] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{testName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Booking Action */}
      <div className="pt-4 border-t border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[11px] text-slate-400 font-bold">Package MRP: <span className="line-through">₹{pkg.mrpPrice}</span></p>
          <p className="text-2xl sm:text-3xl font-black text-[#00529B]">₹{pkg.discountPrice}</p>
        </div>

        <button
          onClick={() => onBookPackage(pkg)}
          className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] hover:from-[#003d75] hover:to-[#00529B] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Package Now</span>
        </button>
      </div>
    </Card>
  );
};
