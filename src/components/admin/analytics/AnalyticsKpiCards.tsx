import React from 'react';
import { KpiSummaryMetric } from '@/types/analytics';
import { TrendingUp, TrendingDown, Activity, DollarSign, Users, ShieldCheck, Clock, Award } from 'lucide-react';

interface AnalyticsKpiCardsProps {
  metrics: KpiSummaryMetric[];
  isLoading?: boolean;
}

export const AnalyticsKpiCards: React.FC<AnalyticsKpiCardsProps> = ({ metrics, isLoading = false }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Total Appointments': <Activity className="w-5 h-5 text-amber-400" />,
    'OPD & Consult Revenue': <DollarSign className="w-5 h-5 text-teal-300" />,
    'Doctor Utilization Rate': <Award className="w-5 h-5 text-purple-300" />,
    'Diagnostics Scans': <ShieldCheck className="w-5 h-5 text-cyan-300" />,
    'AI Triage Conversion Rate': <Users className="w-5 h-5 text-emerald-300" />,
    'Average Enquiry SLA': <Clock className="w-5 h-5 text-rose-300" />,
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-navy-950/80 p-6 rounded-3xl animate-pulse space-y-3 h-32 border border-navy-800">
            <div className="h-4 bg-navy-800 rounded w-1/2" />
            <div className="h-8 bg-navy-700 rounded w-3/4" />
            <div className="h-3 bg-navy-800 rounded w-1/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((m) => (
        <div
          key={m.id}
          className="bg-gradient-to-br from-[#060c20] via-[#0b1739] to-[#040817] text-white p-6 rounded-3xl shadow-lg border border-navy-800 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-teal-500/20 transition-all" />

          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase text-teal-400 tracking-wider">
                {m.category}
              </span>
              <h4 className="text-xs font-bold text-gray-300">{m.title}</h4>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/10 shrink-0 border border-white/10">
              {iconMap[m.title] || <Activity className="w-5 h-5 text-amber-400" />}
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <p className="text-3xl font-black text-white tracking-tight">{m.value}</p>

            <div className="flex items-center gap-2 text-xs">
              <span
                className={`flex items-center gap-0.5 px-2 py-0.5 rounded-lg font-black text-[11px] ${
                  m.isPositive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}
              >
                {m.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span>{m.changePercent > 0 ? `+${m.changePercent}%` : `${m.changePercent}%`}</span>
              </span>
              <span className="text-gray-400 font-medium text-[11px]">{m.comparisonPeriod}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
