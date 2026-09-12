import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, User, Plane, Home, Search, Globe, ChevronDown, LogIn, ShieldCheck, UserCheck } from 'lucide-react';
import { HOSPITAL_CONTACT_INFO } from '@/data/navigation';
import { GlobalSearchModal } from '@/components/common/GlobalSearchModal';
import { useLanguage } from '@/context/LanguageContext';
import { Language, LANGUAGE_OPTIONS } from '@/data/translations';

export const TopUtilityBar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#053763] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-sky-900/50 w-full font-sans">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-3 flex-wrap">
          
          {/* Left Navigation Links & Integrated Top Search Box */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-white/90 text-xs font-semibold">
            {/* Call */}
            <a
              href={`tel:${HOSPITAL_CONTACT_INFO.emergencyNumber}`}
              className="flex items-center gap-1.5 hover:text-sky-200 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
              <span>{t('call', 'Call')}</span>
            </a>

            {/* Portals & Login Single-Column Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPortalsOpen(true)}
              onMouseLeave={() => setIsPortalsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-extrabold cursor-pointer py-0.5"
              >
                <User className="w-3.5 h-3.5 text-amber-300" />
                <span>{t('portalsAndLogin', 'Portals & Login')}</span>
                <ChevronDown className="w-3 h-3 text-amber-300" />
              </button>

              {isPortalsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in space-y-1">
                  <Link
                    to="/patient/login"
                    onClick={() => setIsPortalsOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-sky-50 hover:text-[#00529B] transition-colors"
                  >
                    <UserCheck className="w-4 h-4 text-[#00529B]" />
                    <div>
                      <p className="font-extrabold text-[#00529B]">{t('patientPortal', 'Patient Portal')}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{t('healthVaultReports', 'Health Vault & Reports')}</p>
                    </div>
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => setIsPortalsOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-sky-50 hover:text-[#00529B] transition-colors"
                  >
                    <LogIn className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="font-extrabold text-slate-900">{t('loginPage', 'Login Page')}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{t('unifiedSignIn', 'Unified Account Sign In')}</p>
                    </div>
                  </Link>

                  <Link
                    to="/admin/login"
                    onClick={() => setIsPortalsOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="font-extrabold text-slate-900">{t('adminPage', 'Admin Page')}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{t('hospitalManagement', 'Hospital Management')}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* International Patient Care */}
            <Link
              to="/international-patients"
              className="hidden sm:flex items-center gap-1.5 hover:text-sky-200 transition-colors"
            >
              <Plane className="w-3.5 h-3.5 text-sky-300" />
              <span>{t('internationalCare', 'International Patient Care')}</span>
            </Link>

            {/* Home Care */}
            <Link
              to="/home-healthcare"
              className="hidden md:flex items-center gap-1.5 hover:text-sky-200 transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-sky-300" />
              <span>{t('homeCare', 'Home Care')}</span>
            </Link>

            {/* Top Bar Search Input Pill */}
            <div
              onClick={() => setIsSearchOpen(true)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1 flex items-center gap-2 text-white text-xs cursor-pointer transition-all shadow-xs"
            >
              <Search className="w-3.5 h-3.5 text-white/80" />
              <span className="text-white/80 text-[11px] font-medium pr-2">{t('findDoctors', 'Find Doctors')}</span>
            </div>
          </div>

          {/* Right Language Selector */}
          <div className="flex items-center gap-2 text-xs font-medium text-white">
            <Globe className="w-4 h-4 text-sky-300 shrink-0" />
            <div className="relative inline-block">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white text-slate-900 text-xs font-bold px-3 py-1 pr-7 rounded-xl border border-slate-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer appearance-none"
                aria-label="Select Language"
              >
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt.code} value={opt.code}>
                    {opt.nativeName} ({opt.code})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-700 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
