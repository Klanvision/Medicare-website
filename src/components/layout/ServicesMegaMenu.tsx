import React from 'react';
import { Link } from 'react-router-dom';
import { TestTube, HeartPulse, Home, FileCheck, Globe, ShieldCheck } from 'lucide-react';

export const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const items = [
    {
      title: 'Diagnostics & Labs',
      desc: 'NABL Pathology, 3T MRI, 128 CT & Digital X-Ray',
      href: '/diagnostics',
      icon: <TestTube className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Health Checkups',
      desc: 'Full Body, Senior, Women, Men & Corporate Packages',
      href: '/health-checkups',
      icon: <HeartPulse className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Home Healthcare',
      desc: '24/7 ICU Nursing, Physio, Doctor Visits at Home',
      href: '/home-healthcare',
      icon: <Home className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Second Opinion',
      desc: 'Independent report review by senior panel (< 24 hrs)',
      href: '/second-opinion',
      icon: <FileCheck className="w-5 h-5 text-gold-600" />,
    },
    {
      title: 'International Patients',
      desc: 'M-Visa invitation support, airport pickup & luxury suites',
      href: '/international-patients',
      icon: <Globe className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Insurance & TPA',
      desc: 'Cashless desk for 9 insurers & 5 major TPA partners',
      href: '/insurance',
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
    },
  ];

  return (
    <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.href}
          onClick={onClose}
          className="p-3 rounded-xl hover:bg-teal-50/70 transition-colors flex items-start gap-3 group"
        >
          <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-2xs transition-all shrink-0">
            {item.icon}
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-navy-900 group-hover:text-teal-700 transition-colors">{item.title}</h4>
            <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
