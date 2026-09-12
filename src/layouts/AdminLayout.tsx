import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard, Users, Calendar, Stethoscope, FileText, BarChart3,
  Settings, LogOut, Menu, X, Bell, ShieldCheck, ChevronRight, Activity, Building2
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/components/common/Logo';
import { useToast } from '@/hooks/useToast';

interface AdminNavModule {
  id: string;
  label: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
}

const ADMIN_MODULES: AdminNavModule[] = [
  { id: 'dashboard', label: 'Operations Overview', path: '/admin', icon: LayoutDashboard },
  { id: 'doctors', label: 'Doctors & Staff Roster', path: '/admin/doctors', icon: Stethoscope },
  { id: 'appointments', label: 'OPD Appointments Queue', path: '/admin/appointments', icon: Calendar, badge: 'Live' },
  { id: 'patients', label: 'Patient Directory & EMR', path: '/admin/patients', icon: Users },
  { id: 'reports', label: 'Billing & Audit Reports', path: '/admin/reports', icon: FileText },
  { id: 'analytics', label: 'Hospital Analytics v2.5', path: '/admin/analytics', icon: BarChart3 },
  { id: 'settings', label: 'System Settings & Logs', path: '/admin/settings', icon: Settings },
];

export const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { adminUser, adminLogout } = useAuth();
  const toast = useToast();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    adminLogout();
    toast.info('Logged out from Hospital Admin Console', 'Session Ended');
    navigate('/admin/login');
  };

  // Find active module label
  const activeModule = ADMIN_MODULES.find(m => m.path === location.pathname) || ADMIN_MODULES[0];

  return (
    <div className="min-h-screen flex bg-[#F4F9FD] text-slate-800 font-sans">

      {/* MOBILE SIDEBAR OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 1. ADMIN SIDEBAR */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-white text-slate-800 flex flex-col justify-between transition-transform duration-300 border-r border-sky-200/80 shadow-md ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Box */}
          <div className="p-4 border-b border-sky-100 flex items-center justify-between">
            <Logo variant="dark" size="sm" showTagline={false} />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-2 bg-sky-50 border-b border-sky-100 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-[#00529B] tracking-wider">
              MEDICARE Admin v2.6
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Module Navigation List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
            {ADMIN_MODULES.map((module) => {
              const Icon = module.icon;
              const isActive = location.pathname === module.path;
              return (
                <button
                  key={module.id}
                  onClick={() => {
                    navigate(module.path);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#00529B] text-white shadow-md shadow-sky-900/15 font-black'
                      : 'text-slate-600 hover:bg-sky-50 hover:text-[#00529B]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#00529B]'}`} />
                    <span className="truncate">{module.label}</span>
                  </div>
                  {module.badge && (
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-black shrink-0 ${
                      isActive ? 'bg-white text-[#00529B]' : 'bg-red-500 text-white'
                    }`}>
                      {module.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Admin User Profile Section */}
          <div className="p-4 border-t border-sky-100 bg-sky-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-9 h-9 rounded-full bg-[#00529B] text-white font-black flex items-center justify-center text-sm shrink-0 shadow-2xs">
                {adminUser?.name ? adminUser.name.split(' ').map(n => n[0]).join('').substring(0, 2) : 'SK'}
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-900 truncate">{adminUser?.name || 'Suresh Kulkarni'}</p>
                <p className="text-[10px] text-[#00529B] font-extrabold truncate">{adminUser?.role || 'Super Admin'}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              title="Sign Out of Admin Console"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN ADMIN CONTENT CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* TOP ADMIN HEADER BAR */}
        <header className="bg-white border-b border-sky-200/80 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-sky-50"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span>{activeModule.label}</span>
              </h2>
              <p className="text-[11px] text-slate-500 font-semibold hidden sm:block">
                MEDICARE Quaternary Administration Console
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* System Time indicator */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-100 rounded-xl text-xs font-bold text-[#00529B]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>System Live: MEDICARE Operations</span>
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 rounded-xl text-slate-600 hover:bg-sky-50 transition-colors cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>

            {/* View Site Button */}
            <Link to="/" className="hidden sm:inline-flex">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#00529B] text-white text-xs font-extrabold hover:bg-[#00407A] transition-all flex items-center gap-1 shadow-2xs">
                <span>View Hospital Site</span>
                <ChevronRight className="w-3 h-3 text-sky-200" />
              </span>
            </Link>
          </div>
        </header>

        {/* MAIN MODULE RENDER AREA */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
