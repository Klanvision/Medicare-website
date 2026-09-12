import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { PatientLayout } from '@/layouts/PatientLayout';

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/patient/login" replace />;
  }

  return (
    <PatientLayout>
      <Outlet />
    </PatientLayout>
  );
};
