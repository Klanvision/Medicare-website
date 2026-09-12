import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, BookOpen, FileCheck, ShieldAlert } from 'lucide-react';

export const PatientCareMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const items = [
    {
      title: 'AI Health Assistant',
      desc: 'Smart symptom evaluation, doctor & slot navigation',
      href: '/ai-health-assistant',
      icon: <Bot className="w-5 h-5 text-gold-600" />,
    },
    {
      title: 'Health Library',
      desc: 'Peer-reviewed clinical articles, videos & disease guides',
      href: '/health-library',
      icon: <BookOpen className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Second Opinion',
      desc: 'Independent expert review of your surgical diagnosis',
      href: '/second-opinion',
      icon: <FileCheck className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Emergency Care 24/7',
      desc: 'Level-1 Trauma Center, Cardiac STEMI & ICU Dispatch',
      href: '/emergency',
      icon: <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />,
      highlight: true,
    },
  ];

  return (
    <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.href}
          onClick={onClose}
          className={`p-3 rounded-xl transition-colors flex items-start gap-3 group ${
            item.highlight ? 'bg-red-50/70 border border-red-200 hover:bg-red-100/80' : 'hover:bg-teal-50/70'
          }`}
        >
          <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-2xs transition-all shrink-0">
            {item.icon}
          </div>
          <div className="space-y-0.5">
            <h4 className={`text-xs font-bold ${item.highlight ? 'text-red-950 font-black' : 'text-navy-900 group-hover:text-teal-700'}`}>
              {item.title}
            </h4>
            <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
