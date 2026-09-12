import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Bell, LogOut, User, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

export const PatientHeader: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Patient Avatar & Details */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-extrabold text-lg border border-gold-600/30 shadow-md">
          {user?.name.charAt(0) || 'P'}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-extrabold text-navy-900">{user?.name || 'Patient'}</h2>
            <Badge variant="teal" size="sm">UHID: {user?.uhid}</Badge>
          </div>
          <p className="text-xs text-gray-500">Blood Group: <strong className="text-red-700">{user?.bloodGroup}</strong> • {user?.phone}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        <Link to="/appointments">
          <Button variant="gold" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
            Book Appointment
          </Button>
        </Link>

        <Button
          variant="outline"
          size="sm"
          onClick={logout}
          leftIcon={<LogOut className="w-4 h-4" />}
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};
