import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import { ConversionSummary } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { Sparkles, ArrowRight, Zap, Target } from 'lucide-react';

interface ConversionMetricsChartProps {
  summary: ConversionSummary;
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const ConversionMetricsChart: React.FC<ConversionMetricsChartProps> = ({
  summary,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  const funnelColors = ['#060c20', '#0f766e', '#0d9488', '#14b8a6', '#f59e0b'];

  return (
    <ChartCard
      title="Conversion Funnel & Patient Journey Analytics"
      subtitle="Analyze conversion drop-offs from portal visit down to confirmed OPD payment"
      badge="Conversion Metrics"
      icon={<Sparkles className="w-5 h-5 text-amber-500" />}
      isLoading={isLoading}
      isEmpty={isEmpty || summary.funnel.length === 0}
      onResetFilters={onResetFilters}
      height="h-auto min-h-[380px]"
    >
      <div className="space-y-6 w-full pt-2">
        {/* Top 3 High-level Conversion Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-teal-900 to-navy-950 p-4 rounded-2xl text-white border border-teal-500/30 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-teal-300">AI Triage Conversion</span>
              <p className="text-2xl font-black text-amber-400">{summary.aiTriageToDoctorPercent}%</p>
              <p className="text-[10px] text-gray-300">AI Symptom check to Doctor Slot</p>
            </div>
            <Zap className="w-8 h-8 text-amber-400 opacity-80" />
          </div>

          <div className="bg-gradient-to-br from-navy-900 to-slate-900 p-4 rounded-2xl text-white border border-blue-500/30 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-blue-300">Portal Booking Rate</span>
              <p className="text-2xl font-black text-white">{summary.websiteToBookingPercent}%</p>
              <p className="text-[10px] text-gray-300">Visitors completing appointment</p>
            </div>
            <Target className="w-8 h-8 text-blue-400 opacity-80" />
          </div>

          <div className="bg-gradient-to-br from-amber-950 to-navy-950 p-4 rounded-2xl text-white border border-amber-500/30 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-300">Campaign Redemption</span>
              <p className="text-2xl font-black text-amber-400">{summary.campaignToPackagePercent}%</p>
              <p className="text-[10px] text-gray-300">Coupon claims converted to packages</p>
            </div>
            <Sparkles className="w-8 h-8 text-amber-400 opacity-80" />
          </div>
        </div>

        {/* Funnel Recharts Bar Visualization */}
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={summary.funnel}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis
                type="category"
                dataKey="stage"
                stroke="#060c20"
                fontSize={10}
                fontWeight="bold"
                tickLine={false}
                width={130}
              />
              <Tooltip
                formatter={(value: any, name: any, item: any) => [
                  `${Number(value).toLocaleString()} Patients (${item.payload.conversionPercent}% conversion)`,
                  item.payload.stage,
                ]}
                contentStyle={{
                  backgroundColor: '#060c20',
                  borderColor: '#f59e0b',
                  borderRadius: '16px',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              />
              <Bar dataKey="count" name="Patient Volume" radius={[0, 8, 8, 0]} barSize={22}>
                {summary.funnel.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={funnelColors[index % funnelColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ChartCard>
  );
};
