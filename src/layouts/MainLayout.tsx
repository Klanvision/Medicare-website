import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { StickyQuickActions } from '@/components/layout/StickyQuickActions';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { ToastContainer } from '@/components/feedback/ToastContainer';
import { WhatsAppWidget } from '@/components/common/WhatsAppWidget';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-navy-900 selection:bg-teal-500 selection:text-white pb-16 md:pb-0">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-gold-500 focus:text-navy-950 focus:font-black focus:rounded-xl focus:shadow-2xl focus:ring-4 focus:ring-navy-900"
      >
        Skip to main content
      </a>

      {/* Header Navigation */}
      <Header />

      {/* Breadcrumb Navigation System */}
      <Breadcrumbs />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Desktop Floating Quick Actions */}
      <StickyQuickActions />

      {/* Global Interactive WhatsApp Chat Assistant Widget */}
      <WhatsAppWidget />

      {/* Mobile 5-Icon Bottom Bar */}
      <MobileBottomNav />

      {/* Global Toast Notifications */}
      <ToastContainer />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 bg-navy-900 text-gold-400 border border-gold-600/40 rounded-full shadow-xl hover:bg-navy-800 hover:scale-110 transition-all duration-200 focus:outline-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
