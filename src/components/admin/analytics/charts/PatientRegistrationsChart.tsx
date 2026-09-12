import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { PatientRegistrationPoint, PatientDemographicMetric } from '@/types/analytics';
import { ChartCard } from '../ChartCard';
import { Users } from 'lucide-react';

interface PatientRegistrationsChartProps {
  registrationData: PatientRegistrationPoint[];
  demographicData: PatientDemographicMetric[];
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
}

export const PatientRegistrationsChart: React.FC<PatientRegistrationsChartProps> = ({
  registrationData,
  demographicData,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
}) => {
  return (
    <ChartCard
      title="Patient Registrations & Retention Growth"
      subtitle="Track new registered patient profiles vs returning repeat visits"
      badge="Patient Growth"
      icon={<Users className="w-5 h-5 text-blue-600" />}
      isLoading={isLoading}
      isEmpty={isEmpty || registrationData.length === 0}
      onResetFilters={onResetFilters}
      height="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={registrationData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorNewPatients" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d9488" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0d9488" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#060c20',
              borderColor: '#3b82f6',
              borderRadius: '16px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
          <Area
            type="monotone"
            dataKey="newPatients"
            name="New Patients Registered"
            stroke="#3b82f6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorNewPatients)"
          />
          <Area
            type="monotone"
            dataKey="returningPatients"
            name="Returning Patient Visits"
            stroke="#0d9488"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorReturning)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
