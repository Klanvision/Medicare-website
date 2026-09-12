import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Layers } from 'lucide-react';

export const CareCategoriesCarousel: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT CARD: Interactive Reads */}
        <div className="bg-gradient-to-br from-[#F2F8FD] via-[#F6FAFE] to-white border border-sky-100/80 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div className="space-y-4 relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-sky-100/80 text-[#00529B] text-[11px] font-extrabold block w-fit">
              Interactive Reads
            </span>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00529B] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight group-hover:text-[#00529B] transition-colors">
                  Discover Medical <span className="text-[#00529B]">Web Stories</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Quick, engaging visual stories covering health tips, treatments and wellness updates.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 relative z-10">
            <Link
              to="/web-stories"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-xs transition-all"
            >
              Explore Stories
            </Link>
          </div>
        </div>

        {/* RIGHT CARD: Health Tools */}
        <div className="bg-gradient-to-br from-[#F2F8FD] via-[#F6FAFE] to-white border border-sky-100/80 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div className="space-y-4 relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-sky-100/80 text-[#00529B] text-[11px] font-extrabold block w-fit">
              Health Tools
            </span>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight group-hover:text-[#00529B] transition-colors">
                  Smart <span className="text-[#00529B]">Health Calculators</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Check BMI, pregnancy, calorie, due date and many more health calculators instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 relative z-10">
            <Link
              to="/health-calculators"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-xs transition-all"
            >
              Open Calculators
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
