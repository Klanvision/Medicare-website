import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Building, Stethoscope, HeartPulse, TestTube, ClipboardCheck, Home, Bot, ArrowRight } from 'lucide-react';

export const HealthJourneyCategoriesGrid: React.FC = () => {
  const categories = [
    {
      title: 'Find a Doctor',
      desc: 'Consult with our experienced specialists',
      href: '/doctors',
      icon: <UserCheck className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'Hospitals',
      desc: 'Advanced hospitals near you',
      href: '/hospitals',
      icon: <Building className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'Specialities',
      desc: 'Comprehensive speciality care',
      href: '/specialities',
      icon: <Stethoscope className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'Treatments',
      desc: 'Advanced treatments & procedures',
      href: '/treatments',
      icon: <HeartPulse className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'Diagnostics',
      desc: 'Accurate lab tests & imaging',
      href: '/diagnostics',
      icon: <TestTube className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'Health Checkups',
      desc: 'Preventive health packages',
      href: '/health-checkups',
      icon: <ClipboardCheck className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'Home Healthcare',
      desc: 'Care in the comfort of your home',
      href: '/home-healthcare',
      icon: <Home className="w-6 h-6 text-[#00529B]" />,
    },
    {
      title: 'AI Health Assistant',
      desc: 'Talk to AI for smart health guidance',
      href: '/ai-health-assistant',
      icon: <Bot className="w-6 h-6 text-[#00529B]" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          We Care For Every Stage Of <span className="text-[#00529B] font-extrabold">Your Health Journey</span>
        </h2>
        <div className="w-16 h-1 bg-[#00529B] rounded-full" />
      </div>

      {/* 8 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3.5">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={cat.href}
            className="p-4 bg-white rounded-2xl border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group relative"
          >
            <div className="space-y-3">
              {/* Circular Badge Icon */}
              <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center mx-auto group-hover:bg-[#00529B] group-hover:text-white transition-colors">
                {React.cloneElement(cat.icon, {
                  className: 'w-6 h-6 text-[#00529B] group-hover:text-white transition-colors',
                })}
              </div>

              {/* Title & Desc */}
              <div className="text-center space-y-1">
                <h3 className="text-xs font-black text-slate-900 group-hover:text-[#00529B] transition-colors leading-tight">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug font-normal line-clamp-2">
                  {cat.desc}
                </p>
              </div>
            </div>

            {/* Bottom Right Circle Sky Blue Arrow Button ➔ */}
            <div className="flex justify-end pt-1">
              <div className="w-7 h-7 rounded-full bg-[#00529B] text-white group-hover:bg-[#003B70] flex items-center justify-center shadow-xs transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
