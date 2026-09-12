import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight, HelpCircle } from 'lucide-react';

export const InsuranceMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const partners = [
    'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Max Bupa', 'Care Health', 'Niva Bupa', 'Bajaj Allianz', 'Religare', 'SBI General'
  ];

  return (
    <div className="w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 font-sans text-slate-800">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-black text-[#00529B] uppercase tracking-wider">100% Cashless Insurance</h3>
            <p className="text-[11px] text-slate-500">Tie-ups with 9+ Major Health Insurers & TPAs</p>
          </div>
        </div>

        <Link
          to="/insurance"
          onClick={onClose}
          className="text-xs font-extrabold text-[#00529B] hover:underline flex items-center gap-1"
        >
          <span>Check Coverage</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Partners List */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Empanelled Cashless Insurers</span>
        <div className="flex flex-wrap gap-1.5">
          {partners.map((p) => (
            <span key={p} className="px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
        <Link
          to="/insurance"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-sky-50/60 hover:bg-sky-50 border border-sky-100 flex items-center gap-2.5 group transition-colors"
        >
          <FileText className="w-4 h-4 text-[#00529B] shrink-0" />
          <div>
            <div className="text-xs font-bold text-slate-900 group-hover:text-[#00529B]">Pre-Auth Claim Desk</div>
            <div className="text-[10px] text-slate-500">24/7 TPA Desk Support</div>
          </div>
        </Link>

        <Link
          to="/refund-policy"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center gap-2.5 group transition-colors"
        >
          <HelpCircle className="w-4 h-4 text-slate-600 shrink-0" />
          <div>
            <div className="text-xs font-bold text-slate-900">Refund & Cancellation</div>
            <div className="text-[10px] text-slate-500">Transparent Billing Policy</div>
          </div>
        </Link>
      </div>

    </div>
  );
};
