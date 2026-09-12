import React from 'react';
import { Link } from 'react-router-dom';

export const WomenChildFertilityShowcase: React.FC = () => {
  const womenChildCards = [
    { title: 'Gynecology', icon: '🤰', slug: 'gynecology' },
    { title: 'Obstetrics', icon: '👶', slug: 'gynecology' },
    { title: 'Pregnancy Delivery', icon: '🤱', slug: 'gynecology' },
    { title: 'Child Care', icon: '🧸', slug: 'pediatrics' },
    { title: 'NICU', icon: '🏥', slug: 'neonatology' },
    { title: 'Child Immunization', icon: '💉', slug: 'pediatrics' },
  ];

  const fertilityCards = [
    { title: 'Ovulation Induction', icon: '🧪', slug: 'fertility' },
    { title: 'Infertility', icon: '🩺', slug: 'fertility' },
    { title: 'IUI Treatment', icon: '🧬', slug: 'fertility' },
    { title: 'ICSI Treatment', icon: '🔬', slug: 'fertility' },
    { title: 'IVF Treatment', icon: '🧫', slug: 'fertility' },
    { title: 'Fertility Preservation', icon: '🧊', slug: 'fertility' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT CARD: Women & Child */}
        <div className="bg-gradient-to-br from-[#F4F9FD] via-white to-sky-50 border border-sky-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4 z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-sky-300 flex items-center justify-center text-2xl shadow-xs shrink-0">
                👩‍👧
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#00529B] leading-tight">
                  Women & Child Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Complete care for every stage of motherhood
                </p>
              </div>
            </div>
          </div>

          {/* 6 Pill Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 z-10">
            {womenChildCards.map((item) => (
              <Link
                key={item.title}
                to={`/specialities/${item.slug}`}
                className="bg-white hover:bg-sky-50 rounded-2xl p-3 shadow-xs border border-sky-100 hover:border-sky-300 flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span className="text-xl group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </span>
                <span className="font-bold text-xs text-slate-800 group-hover:text-[#00529B] transition-colors leading-tight">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

        </div>

        {/* RIGHT CARD: Fertility */}
        <div className="bg-gradient-to-br from-[#F4F9FD] via-white to-sky-50 border border-sky-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4 z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-sky-300 flex items-center justify-center text-2xl shadow-xs shrink-0">
                🤰
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#00529B] leading-tight">
                  Fertility Sciences
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Advanced treatments for your parenthood journey
                </p>
              </div>
            </div>
          </div>

          {/* 6 Pill Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 z-10">
            {fertilityCards.map((item) => (
              <Link
                key={item.title}
                to={`/specialities/${item.slug}`}
                className="bg-white hover:bg-sky-50 rounded-2xl p-3 shadow-xs border border-sky-100 hover:border-sky-300 flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span className="text-xl group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </span>
                <span className="font-bold text-xs text-slate-800 group-hover:text-[#00529B] transition-colors leading-tight">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
