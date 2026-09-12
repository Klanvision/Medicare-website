import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Globe, ShieldCheck, Heart } from 'lucide-react';

export const AboutMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const items = [
    {
      title: 'About MEDICARE',
      desc: 'European healthcare standards, 18 countries global footprint & clinical excellence',
      href: '/about',
      icon: <Globe className="w-4 h-4 text-[#00529B]" />,
    },
    {
      title: 'Leadership & Medical Board',
      desc: 'World-renowned medical directors & healthcare pioneers',
      href: '/about',
      icon: <Users className="w-4 h-4 text-[#00529B]" />,
    },
    {
      title: 'Patient Recovery Stories',
      desc: '1 Crore+ satisfied patient recovery testimonials & videos',
      href: '/patient-stories',
      icon: <Heart className="w-4 h-4 text-[#00529B]" />,
    },
    {
      title: 'Clinical Publications & News',
      desc: 'Medical journal articles, healthcare blogs & press releases',
      href: '/health-library',
      icon: <BookOpen className="w-4 h-4 text-[#00529B]" />,
    },
    {
      title: 'Quality & Accreditations',
      desc: 'NABH & NABL certified hospital chain with zero-infection ICUs',
      href: '/about',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    },
    {
      title: 'Careers & Growth',
      desc: 'Join our team of 1250+ senior doctors and medical staff',
      href: '/about',
      icon: <Award className="w-4 h-4 text-[#00529B]" />,
    },
  ];

  return (
    <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 font-sans text-slate-800">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.href}
          onClick={onClose}
          className="p-3 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-100 transition-colors flex items-start gap-3 group"
        >
          <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-2xs transition-all shrink-0">
            {item.icon}
          </div>
          <div className="space-y-0.5 min-w-0">
            <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#00529B] transition-colors">{item.title}</h4>
            <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
