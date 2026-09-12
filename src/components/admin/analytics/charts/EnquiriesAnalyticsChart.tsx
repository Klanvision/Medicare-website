import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { EnquiryMetricPoint } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { MessageSquare } from 'lucide-react';

interface EnquiriesAnalyticsChartProps {
  data: EnquiryMetricPoint[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const EnquiriesAnalyticsChart: React.FC<EnquiriesAnalyticsChartProps> = ({
  data,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Patient Enquiries & Support SLA Speed"
      subtitle="Analyze ticket categories (Emergency, TPA, General) and ticket resolution speed"
      badge="Support Desk"
      icon={<MessageSquare className="w-5 h-5 text-rose-600" />}
      isLoading={isLoading}
      isEmpty={isEmpty || data.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#060c20',
              borderColor: '#f43f5e',
              borderRadius: '16px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Bar dataKey="emergency" name="Emergency Triage" fill="#f43f5e" stackId="a" />
          <Bar dataKey="tpaClaims" name="TPA & Cashless" fill="#f59e0b" stackId="a" />
          <Bar dataKey="appointment" name="Appointment Desk" fill="#0d9488" stackId="a" />
          <Bar dataKey="general" name="General Info" fill="#6366f1" stackId="a" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
