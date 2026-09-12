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
import { HospitalPerformanceMetric } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { Building } from 'lucide-react';

interface HospitalPerformanceChartProps {
  data: HospitalPerformanceMetric[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const HospitalPerformanceChart: React.FC<HospitalPerformanceChartProps> = ({
  data,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Hospital Campus Performance & Bed Occupancy"
      subtitle="Compare bed occupancy %, ICU capacity %, and OPD volume across hospital locations"
      badge="4 Campuses"
      icon={<Building className="w-5 h-5 text-indigo-600" />}
      isLoading={isLoading}
      isEmpty={isEmpty || data.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="campus"
            stroke="#64748b"
            fontSize={10}
            fontWeight="bold"
            tickLine={false}
            tickFormatter={(val) => val.split(' ')[0]}
          />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
          <Tooltip
            formatter={(value: any, name: any) => [
              name.includes('Occupancy') ? `${value}%` : value,
              name,
            ]}
            contentStyle={{
              backgroundColor: '#060c20',
              borderColor: '#6366f1',
              borderRadius: '16px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Bar
            dataKey="bedOccupancyPercent"
            name="Bed Occupancy %"
            fill="#0d9488"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="icuOccupancyPercent"
            name="ICU Occupancy %"
            fill="#f59e0b"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="revenueLakhs"
            name="Revenue (₹ Lakhs)"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
