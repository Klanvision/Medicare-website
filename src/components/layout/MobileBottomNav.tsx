import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, UserCheck, Building, Calendar, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { label: 'Doctors', href: '/doctors', icon: <UserCheck className="w-5 h-5" /> },
    { label: 'Hospitals', href: '/hospitals', icon: <Building className="w-5 h-5" /> },
    { label: 'Appointment', href: '/appointments', icon: <Calendar className="w-5 h-5" /> },
    { label: 'Profile', href: '/patient/login', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-xl">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center py-1 px-2.5 rounded-xl transition-all ${
                isActive ? 'text-sky-600 font-bold scale-105' : 'text-slate-500 hover:text-slate-900 font-medium'
              }`
            }
          >
            {item.icon}
            <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
