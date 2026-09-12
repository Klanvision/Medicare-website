import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Search, Bell } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { TopUtilityBar } from '@/components/layout/TopUtilityBar';
import { DoctorsMegaMenu } from '@/components/layout/DoctorsMegaMenu';
import { HospitalsMegaMenu } from '@/components/layout/HospitalsMegaMenu';
import { SpecialtiesMegaMenu } from '@/components/layout/SpecialtiesMegaMenu';
import { ServicesMegaMenu } from '@/components/layout/ServicesMegaMenu';
import { PatientCareMegaMenu } from '@/components/layout/PatientCareMegaMenu';
import { AboutMegaMenu } from '@/components/layout/AboutMegaMenu';
import { InsuranceMegaMenu } from '@/components/layout/InsuranceMegaMenu';
import { GlobalSearchModal } from '@/components/common/GlobalSearchModal';
import { NotificationTestCenterModal } from '@/components/notifications/NotificationTestCenterModal';
import { notificationService } from '@/services/notificationService';
import { useLanguage } from '@/context/LanguageContext';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    'doctors' | 'hospitals' | 'specialties' | 'services' | 'patient-care' | 'about' | 'insurance' | null
  >(null);
  const [unreadNotifCount, setUnreadNotifCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const fetchUnread = async () => {
      const list = await notificationService.getNotifications();
      setUnreadNotifCount(list.filter((n) => !n.isRead).length);
    };
    fetchUnread();
    const interval = setInterval(fetchUnread, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all bg-white shadow-sm font-sans">
      {/* 1. Top Utility Contact & Navigation Bar */}
      <TopUtilityBar />

      {/* 2. Main White Navigation Bar */}
      <nav
        className={`bg-white border-b border-slate-200 transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: MEDICARE Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <Logo size="md" />
          </Link>

          {/* Center Navigation Links (Hover Mega Menu under EVERY word) */}
          <div className="hidden lg:flex items-center justify-center space-x-3 xl:space-x-5 2xl:space-x-6 text-xs sm:text-sm font-bold text-slate-800">
            
            {/* Doctors Near You Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActiveMegaMenu('doctors')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-[#00529B] transition-colors py-1 whitespace-nowrap ${
                    isActive ? 'text-[#00529B] font-extrabold' : ''
                  }`
                }
              >
                <span>{t('doctorsNearYou', 'Doctors Near You')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>

              {activeMegaMenu === 'doctors' && (
                <div className="absolute top-full left-0 z-50 pt-2">
                  <DoctorsMegaMenu onClose={() => setActiveMegaMenu(null)} />
                </div>
              )}
            </div>

            {/* Hospitals Near You Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActiveMegaMenu('hospitals')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <NavLink
                to="/hospitals"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-[#00529B] transition-colors py-1 whitespace-nowrap ${
                    isActive ? 'text-[#00529B] font-extrabold' : ''
                  }`
                }
              >
                <span>{t('hospitalsNearYou', 'Hospitals Near You')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>

              {activeMegaMenu === 'hospitals' && (
                <div className="absolute top-full left-0 z-50 pt-2">
                  <HospitalsMegaMenu onClose={() => setActiveMegaMenu(null)} />
                </div>
              )}
            </div>

            {/* Specialties Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActiveMegaMenu('specialties')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <NavLink
                to="/specialities"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-[#00529B] transition-colors py-1 whitespace-nowrap ${
                    isActive ? 'text-[#00529B] font-extrabold' : ''
                  }`
                }
              >
                <span>{t('specialties', 'Specialties')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>

              {activeMegaMenu === 'specialties' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2">
                  <SpecialtiesMegaMenu onClose={() => setActiveMegaMenu(null)} />
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#00529B] transition-colors py-1 whitespace-nowrap cursor-pointer"
              >
                <span>{t('services', 'Services')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeMegaMenu === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2">
                  <ServicesMegaMenu onClose={() => setActiveMegaMenu(null)} />
                </div>
              )}
            </div>

            {/* For Patients Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActiveMegaMenu('patient-care')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#00529B] transition-colors py-1 whitespace-nowrap cursor-pointer"
              >
                <span>{t('forPatients', 'For Patients')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeMegaMenu === 'patient-care' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2">
                  <PatientCareMegaMenu onClose={() => setActiveMegaMenu(null)} />
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setActiveMegaMenu('about')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-[#00529B] transition-colors py-1 whitespace-nowrap ${
                    isActive ? 'text-[#00529B] font-extrabold' : ''
                  }`
                }
              >
                <span>{t('about', 'About')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>

              {activeMegaMenu === 'about' && (
                <div className="absolute top-full right-0 z-50 pt-2">
                  <AboutMegaMenu onClose={() => setActiveMegaMenu(null)} />
                </div>
              )}
            </div>

            {/* Insurance Checker Direct Link */}
            <div className="relative shrink-0">
              <NavLink
                to="/insurance"
                className={({ isActive }) =>
                  `flex items-center hover:text-[#00529B] transition-colors py-1 whitespace-nowrap ${
                    isActive ? 'text-[#00529B] font-extrabold' : ''
                  }`
                }
              >
                <span>{t('insuranceChecker', 'Insurance Checker')}</span>
              </NavLink>
            </div>

          </div>

          {/* Right Action CTA (Search, Notification Bell with Red Badge & Pill Book Appointment CTA) */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            {/* Search Trigger Icon Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#00529B] hover:border-sky-400 hover:bg-sky-50 transition-colors shadow-2xs"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Notification Bell Icon Button with Red Badge */}
            <button
              type="button"
              onClick={() => setIsNotifModalOpen(true)}
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#00529B] hover:border-sky-400 hover:bg-sky-50 transition-colors relative shadow-2xs"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-black flex items-center justify-center shadow-2xs">
                {unreadNotifCount > 0 ? unreadNotifCount : 2}
              </span>
            </button>

            {/* Primary CTA: Book Appointment */}
            <Link
              to="/appointments"
              className="px-6 py-2.5 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap flex items-center justify-center"
            >
              {t('bookAppointment', 'Book Appointment')}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-700 hover:text-[#0B5C9E] rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/appointments"
              className="px-3 py-1.5 rounded-lg bg-[#00529B] text-white font-bold text-xs shadow-xs"
            >
              Book
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-slate-800 hover:text-[#0B5C9E] rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Open main menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Notification Center Modal */}
      <NotificationTestCenterModal isOpen={isNotifModalOpen} onClose={() => setIsNotifModalOpen(false)} />
    </header>
  );
};
