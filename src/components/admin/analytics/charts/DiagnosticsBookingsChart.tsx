import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { DiagnosticsBookingPoint } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { Activity } from 'lucide-react';

interface DiagnosticsBookingsChartProps {
  data: DiagnosticsBookingPoint[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const DiagnosticsBookingsChart: React.FC<DiagnosticsBookingsChartProps> = ({
  data,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Diagnostics Bookings & Radiology Scans"
      subtitle="Track MRI, CT Scans, Ultrasound, Pathology & Blood Test scan volumes"
      badge="Diagnostic Hub"
      icon={<Activity className="w-5 h-5 text-cyan-600" />}
      isLoading={isLoading}
      isEmpty={isEmpty || data.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#060c20',
              borderColor: '#06b6d4',
              borderRadius: '16px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Line
            type="monotone"
            dataKey="mriScans"
            name="MRI Scans"
            stroke="#8b5cf6"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="ctScans"
            name="CT Scans"
            stroke="#06b6d4"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="ultrasound"
            name="Ultrasound"
            stroke="#f59e0b"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="bloodTests"
            name="Blood Tests"
            stroke="#0d9488"
            strokeWidth={2.5}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
