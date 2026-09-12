import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Calendar, ChevronRight, ShieldAlert, Bot } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';
import { MAIN_NAVIGATION, HOSPITAL_CONTACT_INFO } from '@/data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white text-slate-900 border-l border-sky-200 flex flex-col shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-sky-100">
              <Logo variant="dark" size="sm" clickable={false} />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Emergency Hotline Alert Banner */}
            <div className="p-4 bg-gradient-to-r from-sky-100 via-sky-50 to-red-50 border-b border-sky-200 flex items-center gap-3">
              <div className="p-2 bg-red-600 rounded-lg text-white animate-pulse">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-red-700 font-bold">24/7 Emergency Care</p>
                <p className="text-sm font-extrabold text-[#00529B]">{HOSPITAL_CONTACT_INFO.emergencyNumber}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-4 px-4 space-y-1">
              {MAIN_NAVIGATION.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <NavLink
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-[#00529B] text-white shadow-md'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-[#00529B]'
                      }`
                    }
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[9px] bg-amber-400 text-slate-900 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>

                  {/* Mega-menu sub-items for mobile */}
                  {item.type === 'services-mega' && (
                    <div className="ml-4 pl-3 border-l border-sky-100 my-1 space-y-1 text-xs">
                      <NavLink to="/diagnostics" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">Diagnostics & Labs</NavLink>
                      <NavLink to="/health-checkups" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">Health Checkups</NavLink>
                      <NavLink to="/home-healthcare" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">Home Healthcare</NavLink>
                      <NavLink to="/second-opinion" onClick={onClose} className="block py-1 text-[#00529B] font-bold hover:underline">Second Opinion</NavLink>
                      <NavLink to="/international-patients" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">International Patients</NavLink>
                      <NavLink to="/insurance" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">Insurance & TPA</NavLink>
                    </div>
                  )}

                  {item.type === 'patient-care-mega' && (
                    <div className="ml-4 pl-3 border-l border-sky-100 my-1 space-y-1 text-xs">
                      <NavLink to="/ai-health-assistant" onClick={onClose} className="block py-1 text-[#00529B] font-bold hover:underline">AI Health Assistant</NavLink>
                      <NavLink to="/health-library" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">Health Library</NavLink>
                      <NavLink to="/second-opinion" onClick={onClose} className="block py-1 text-slate-600 hover:text-[#00529B]">Second Opinion</NavLink>
                      <NavLink to="/emergency" onClick={onClose} className="block py-1 text-red-600 font-bold">Emergency Care 24/7</NavLink>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Portals & Login Column Section */}
            <div className="p-4 mx-4 my-2 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-2">
              <p className="text-[10px] uppercase font-black tracking-wider text-[#00529B]">Portals & Quick Access</p>
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-bold">
                <NavLink to="/patient/login" onClick={onClose} className="p-2 rounded-xl bg-white text-[#00529B] border border-sky-200 hover:bg-[#00529B] hover:text-white transition-colors block shadow-xs">
                  Patient
                </NavLink>
                <NavLink to="/login" onClick={onClose} className="p-2 rounded-xl bg-white text-[#00529B] border border-sky-200 hover:bg-[#00529B] hover:text-white transition-colors block shadow-xs">
                  Login Page
                </NavLink>
                <NavLink to="/admin/login" onClick={onClose} className="p-2 rounded-xl bg-white text-[#00529B] border border-sky-200 hover:bg-[#00529B] hover:text-white transition-colors block shadow-xs">
                  Admin
                </NavLink>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 border-t border-sky-100 space-y-2.5 bg-slate-50">
              <NavLink to="/ai-health-assistant" onClick={onClose} className="block">
                <Button variant="outline" fullWidth leftIcon={<Bot className="w-4 h-4 text-[#00529B]" />}>
                  Talk to AI Health Assistant
                </Button>
              </NavLink>
              <NavLink to="/appointments" onClick={onClose} className="block">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-[#00529B] hover:bg-[#003B70] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
