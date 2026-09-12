import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';
import { SpecialtyDemandMetric } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { Stethoscope } from 'lucide-react';

interface SpecialtyDemandChartProps {
  data: SpecialtyDemandMetric[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const SpecialtyDemandChart: React.FC<SpecialtyDemandChartProps> = ({
  data,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Specialty Demand & Patient Market Share"
      subtitle="Percentage breakdown of appointment bookings per clinical specialty"
      badge="Specialty Share"
      icon={<Stethoscope className="w-5 h-5 text-amber-500" />}
      isLoading={isLoading}
      isEmpty={isEmpty || data.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={4}
            dataKey="bookings"
            nameKey="specialty"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="#ffffff" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: any, name: any, item: any) => [
              `${value} Bookings (${item.payload.percentage}%)`,
              item.payload.specialty,
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
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
