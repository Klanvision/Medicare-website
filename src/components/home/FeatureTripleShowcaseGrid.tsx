import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, ShieldCheck, Home } from 'lucide-react';

export const FeatureTripleShowcaseGrid: React.FC = () => {
  const cards = [
    {
      badge: 'Advanced Care',
      title: 'Advanced Robotic Surgery',
      desc: 'Minimally invasive robotic-assisted procedures with faster recovery.',
      buttonText: 'Explore Treatments',
      href: '/treatments',
      image: '/images/features/robotic-surgery-feature.jpg',
    },
    {
      badge: 'Cashless',
      title: 'Insurance & Cashless Facilities',
      desc: 'Quick approvals with leading insurance companies and TPAs.',
      buttonText: 'Check Coverage',
      href: '/insurance',
      image: '/images/features/insurance-cashless-facilities.jpg',
    },
    {
      badge: 'Home Care',
      title: 'Medicare Healthcare at Your Home',
      desc: 'Trusted healthcare services delivered to your doorstep.',
      buttonText: 'Check Services',
      href: '/home-healthcare',
      image: '/images/features/home-healthcare-services.jpg',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-gradient-to-b from-[#F2F8FD] via-[#F6FAFE] to-white border border-sky-100/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-4">
              {/* Badge */}
              <div className="flex justify-start">
                <span className="px-3.5 py-1 rounded-full bg-sky-100/80 text-[#00529B] text-[11px] font-extrabold">
                  {card.badge}
                </span>
              </div>

              {/* Flex Row with Thumbnail Image & Text */}
              <div className="flex items-start gap-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-xs group-hover:scale-105 transition-transform shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-tight group-hover:text-[#00529B] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Royal Blue Button */}
            <div className="pt-2">
              <Link
                to={card.href}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>{card.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
