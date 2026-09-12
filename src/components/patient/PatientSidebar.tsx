import React from 'react';
import {
  User,
  Calendar,
  History,
  FileText,
  Pill,
  CreditCard,
  Clock,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export type DashboardTab =
  | 'profile'
  | 'upcoming'
  | 'past'
  | 'reports'
  | 'prescriptions'
  | 'bills'
  | 'timeline'
  | 'notifications'
  | 'settings';

interface PatientSidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  unreadCount?: number;
}

export const PatientSidebar: React.FC<PatientSidebarProps> = ({
  activeTab,
  onTabChange,
  unreadCount = 2,
}) => {
  const { logout } = useAuth();

  const navItems: { id: DashboardTab; label: string; icon: React.ReactNode; badge?: string | number }[] = [
    { id: 'profile', label: 'Patient Profile', icon: <User className="w-4 h-4" /> },
    { id: 'upcoming', label: 'Upcoming OPD', icon: <Calendar className="w-4 h-4" />, badge: 2 },
    { id: 'past', label: 'Consultation History', icon: <History className="w-4 h-4" /> },
    { id: 'reports', label: 'Lab Reports & Scans', icon: <FileText className="w-4 h-4" /> },
    { id: 'prescriptions', label: 'E-Prescriptions', icon: <Pill className="w-4 h-4" /> },
    { id: 'bills', label: 'Bills & Payments', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'timeline', label: 'Health Timeline', icon: <Clock className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" />, badge: unreadCount },
    { id: 'settings', label: 'Account Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-full md:w-64 bg-white rounded-3xl border border-slate-200 shadow-md p-4 space-y-6 flex flex-col justify-between shrink-0">
      <div className="space-y-4">
        <div className="px-3 pt-2">
          <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
            Patient Portal Menu
          </p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-extrabold transition-all ${
                activeTab === item.id
                  ? 'bg-[#00529B] text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2.5">
                {item.icon}
                <span>{item.label}</span>
              </span>

              {item.badge !== undefined && (
                <span
                  className={`px-2 py-0.5 text-[10px] rounded-full font-black ${
                    activeTab === item.id
                      ? 'bg-amber-300 text-slate-900'
                      : 'bg-sky-100 text-[#00529B]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Logout Action */}
      <div className="pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={logout}
          className="w-full flex items-center gap-2 px-3.5 py-3 rounded-2xl text-xs font-black text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out of Portal</span>
        </button>
      </div>
    </aside>
  );
};
