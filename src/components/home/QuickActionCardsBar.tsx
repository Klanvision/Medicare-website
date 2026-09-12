import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Building, Calendar, Bot, PhoneCall, ArrowRight } from 'lucide-react';

export const QuickActionCardsBar: React.FC = () => {
  const cards = [
    {
      title: 'Find a Doctor',
      desc: 'Book an appointment with expert doctors',
      href: '/doctors',
      icon: <UserCheck className="w-6 h-6 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      badgeColor: 'text-teal-600',
    },
    {
      title: 'Find a Hospital',
      desc: 'Explore our multi-speciality hospitals',
      href: '/hospitals',
      icon: <Building className="w-6 h-6 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      badgeColor: 'text-teal-600',
    },
    {
      title: 'Book Appointment',
      desc: 'Quick & easy appointment booking',
      href: '/appointments',
      icon: <Calendar className="w-6 h-6 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      badgeColor: 'text-teal-600',
    },
    {
      title: 'Talk to AI',
      desc: 'Get instant health guidance',
      href: '/ai-health-assistant',
      icon: <Bot className="w-6 h-6 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      badgeColor: 'text-teal-600',
    },
    {
      title: 'Emergency Care',
      desc: '24/7 emergency support',
      href: '/emergency',
      icon: <PhoneCall className="w-6 h-6 text-red-600 animate-pulse" />,
      bgIcon: 'bg-red-50',
      badgeColor: 'text-red-600',
      isEmergency: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="p-4 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className={`p-3 rounded-xl ${card.bgIcon} shrink-0`}>
                {card.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-black text-navy-900 group-hover:text-teal-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-[11px] text-gray-500 leading-snug line-clamp-1">
                  {card.desc}
                </p>
              </div>
            </div>
            <ArrowRight className={`w-4 h-4 ${card.badgeColor} shrink-0 group-hover:translate-x-1 transition-transform`} />
          </Link>
        ))}
      </div>
    </div>
  );
};
