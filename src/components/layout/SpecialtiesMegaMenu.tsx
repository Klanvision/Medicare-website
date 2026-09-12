import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Award, ShieldAlert, Sparkles, Heart } from 'lucide-react';

export const SpecialtiesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const items = [
    {
      title: 'Medical Specialties (85+)',
      desc: 'Cardiology, Oncology, Orthopedics, Neurology, Pediatrics & Organ Transplants',
      href: '/specialities',
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Advanced Treatments',
      desc: 'Robotic Surgery, Proton Therapy, TAVI, Minimally Invasive Procedures',
      href: '/treatments',
      icon: <Activity className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Centres of Excellence',
      desc: 'Quaternary institutes for Cardiac, Cancer, Bone & Joint Care',
      href: '/centres-of-excellence',
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
    {
      title: '24/7 Level-1 Trauma Emergency',
      desc: 'Instant cardiac cath lab standby, stroke ICU & casualty unit',
      href: '/emergency',
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
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
