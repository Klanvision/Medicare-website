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
import { DoctorPerformanceMetric } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { UserCheck } from 'lucide-react';

interface DoctorPerformanceChartProps {
  data: DoctorPerformanceMetric[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const DoctorPerformanceChart: React.FC<DoctorPerformanceChartProps> = ({
  data,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Doctor Performance & Consultation Volume"
      subtitle="Top performing senior consultants by patient visits and revenue"
      badge="Top Specialists"
      icon={<UserCheck className="w-5 h-5 text-teal-600" />}
      isLoading={isLoading}
      isEmpty={isEmpty || data.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
          <XAxis type="number" stroke="#64748b" fontSize={11} tickLine={false} />
          <YAxis
            type="category"
            dataKey="doctorName"
            stroke="#060c20"
            fontSize={10}
            fontWeight="bold"
            tickLine={false}
            width={120}
          />
          <Tooltip
            formatter={(value: any, name: any) => [
              name === 'revenueInr' ? `₹ ${Number(value).toLocaleString('en-IN')}` : value,
              name === 'consultations' ? 'Consultations' : 'Revenue',
            ]}
            contentStyle={{
              backgroundColor: '#060c20',
              borderColor: '#0d9488',
              borderRadius: '16px',
              color: '#ffffff',
              fontSize: '12px',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Bar
            dataKey="consultations"
            name="Consultations"
            fill="#0d9488"
            radius={[0, 8, 8, 0]}
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
