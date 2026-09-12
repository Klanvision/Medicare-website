import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Heart, Sparkles } from 'lucide-react';

export const CenterOfExcellenceMedicover: React.FC = () => {
  const navigate = useNavigate();

  const specialtiesList = [
    { name: 'General Medicine', badge: 'SEASONAL', badgeColor: 'bg-orange-500', icon: '🩺', slug: 'general-medicine' },
    { name: 'Cardiology', icon: '🫀', slug: 'cardiology' },
    { name: 'Cardiothoracic', icon: '🩺', slug: 'cardiothoracic' },
    { name: 'Neuro Sciences', icon: '🧠', slug: 'neurology' },
    { name: 'Gastroenterology', icon: '🩺', slug: 'gastroenterology' },
    { name: 'Nephrology', icon: '🩸', slug: 'nephrology' },
    { name: 'Oncology', icon: '🎗️', slug: 'oncology' },
    { name: 'Emergency & Critical Care', badge: '24/7', badgeColor: 'bg-red-500', icon: '🚨', slug: 'emergency' },
    { name: 'Urology', icon: '🩺', slug: 'urology' },
    { name: 'Organ Transplantation', icon: '🫁', slug: 'organ-transplantation' },
    { name: 'Orthopedics', icon: '🦴', slug: 'orthopaedics' },
    { name: 'Robotic Surgery', icon: '🤖', slug: 'robotic-surgery' },
    { name: 'Obstetric & Gynecology', icon: '🤰', slug: 'gynaecology' },
    { name: 'Plastic Surgery', icon: '✨', slug: 'plastic-surgery' },
    { name: 'Rheumatology', icon: '🦵', slug: 'rheumatology' },
    { name: 'Neurology', icon: '🧠', slug: 'neurology' },
  ];

  const handleCardClick = (slug: string) => {
    if (slug === 'emergency') {
      navigate('/emergency');
    } else {
      navigate(`/specialities/${slug}`);
    }
  };

  return (
    <section className="relative bg-[#F4F9FD] py-14 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-b border-sky-100">
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-8 left-12 w-6 h-6 text-sky-200 flex items-center justify-center rounded-full bg-white/60 shadow-2xs pointer-events-none">
        <Plus className="w-3.5 h-3.5" />
      </div>
      <div className="absolute top-16 right-16 w-6 h-6 text-sky-200 flex items-center justify-center rounded-full bg-white/60 shadow-2xs pointer-events-none">
        <Heart className="w-3.5 h-3.5 fill-sky-200" />
      </div>
      <div className="absolute bottom-12 left-1/3 w-6 h-6 text-sky-200 flex items-center justify-center rounded-full bg-white/60 shadow-2xs pointer-events-none">
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Center of Excellence
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            World-class expertise across 80+ medical specialties
          </p>
        </div>

        {/* 16 SPECIALTIES GRID */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialtiesList.map((item) => (
              <div
                key={item.name}
                onClick={() => handleCardClick(item.slug)}
                className="bg-white rounded-2xl p-3.5 border border-slate-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer relative"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-bold text-xs sm:text-sm text-[#0F172A] group-hover:text-[#00529B] transition-colors truncate">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className={`px-1.5 py-0.5 rounded-full text-white text-[8px] font-black uppercase tracking-wider shrink-0 ${item.badgeColor}`}>
                        • {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Circle Arrow Button */}
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-sky-600 group-hover:bg-[#00529B] group-hover:text-white transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Royal Blue Button */}
          <div className="flex justify-center pt-2">
            <Link
              to="/specialities"
              className="px-8 py-3.5 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore All Specialties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
};
