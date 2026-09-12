import React from 'react';
import { PatientHeader } from '@/components/patient/PatientHeader';

interface PatientLayoutProps {
  children?: React.ReactNode;
}

export const PatientLayout: React.FC<PatientLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <PatientHeader />
        <main>{children}</main>
      </div>
    </div>
  );
};
