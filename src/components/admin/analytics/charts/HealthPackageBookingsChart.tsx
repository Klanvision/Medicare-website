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
import { HealthPackageBookingMetric } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { ShieldCheck } from 'lucide-react';

interface HealthPackageBookingsChartProps {
  data: HealthPackageBookingMetric[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const HealthPackageBookingsChart: React.FC<HealthPackageBookingsChartProps> = ({
  data,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Health Package Bookings & Campaign Redemptions"
      subtitle="Preventive health checkups, senior cardiac screenings, and coupon code redemptions"
      badge="Health Checkups"
      icon={<ShieldCheck className="w-5 h-5 text-emerald-600" />}
      isLoading={isLoading}
      isEmpty={isEmpty || data.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: -10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="packageName"
            stroke="#64748b"
            fontSize={9}
            fontWeight="bold"
            tickLine={false}
            interval={0}
            tickFormatter={(val) => val.split(' ')[0] + ' ' + (val.split(' ')[1] || '')}
          />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
          <Tooltip
            formatter={(value: any, name: any) => [
              name === 'Revenue (INR)' ? `₹ ${Number(value).toLocaleString('en-IN')}` : value,
              name,
            ]}
            contentStyle={{
              backgroundColor: '#060c20',
              borderColor: '#10b981',
              borderRadius: '16px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }} />
          <Bar dataKey="bookings" name="Total Bookings" fill="#10b981" radius={[6, 6, 0, 0]} />
          <Bar dataKey="couponRedemptions" name="Coupon Claims" fill="#f59e0b" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
