import React from 'react';
import { Clock, Home, TestTube, AlertCircle, Calendar } from 'lucide-react';
import { DiagnosticTest } from '@/data/diagnosticData';
import { Card } from '@/components/common/Card';

interface DiagnosticCardProps {
  test: DiagnosticTest;
  onBookTest: (test: DiagnosticTest) => void;
}

export const DiagnosticCard: React.FC<DiagnosticCardProps> = ({ test, onBookTest }) => {
  const discountPercent = Math.round(((test.mrpPrice - test.discountPrice) / test.mrpPrice) * 100);

  return (
    <Card
      hoverEffect
      className="p-6 bg-white border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all rounded-3xl flex flex-col justify-between space-y-6 font-sans"
    >
      <div className="space-y-4">
        {/* Category & Discount Badge Row */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-0.5 rounded-full bg-sky-50 text-[#00529B] border border-sky-100 text-[11px] font-black uppercase">
            {test.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#00529B] to-[#0066BC] text-white text-[11px] font-black uppercase">
            {discountPercent}% OFF
          </span>
        </div>

        {/* Test Name & Description */}
        <div className="space-y-1">
          <h3 className="text-lg font-black text-slate-900">{test.name}</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">{test.description}</p>
        </div>

        {/* Details & Home Sample Badges */}
        <div className="space-y-2 pt-3 border-t border-sky-100 text-xs text-slate-600 font-medium">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#00529B]" /> Report Time:
            </span>
            <span className="font-extrabold text-[#00529B]">{test.turnaroundTime}</span>
          </div>

          {test.fastingRequired && (
            <div className="flex items-center gap-1.5 text-amber-700 font-bold">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Fasting Required</span>
            </div>
          )}

          {test.homeSampleAvailable && (
            <div className="flex items-center gap-1.5 text-[#00529B] font-extrabold">
              <Home className="w-3.5 h-3.5 text-[#00529B] shrink-0" />
              <span>Free Home Sample Collection</span>
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Booking CTA */}
      <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 font-bold line-through mr-2">₹{test.mrpPrice}</span>
          <span className="text-xl font-black text-[#00529B]">₹{test.discountPrice}</span>
        </div>

        <button
          onClick={() => onBookTest(test)}
          className="px-4 py-2.5 rounded-xl bg-[#00529B] hover:bg-[#003d75] text-white text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Test</span>
        </button>
      </div>
    </Card>
  );
};
