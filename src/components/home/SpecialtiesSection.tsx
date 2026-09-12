import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  HeartPulse,
  Heart,
  Brain,
  Activity,
  Droplet,
  Ribbon,
  Siren,
  Bone,
  Bot,
  Baby,
  Sparkles,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { SPECIALTIES_DATA } from '@/data/homeData';

export const SpecialtiesSection: React.FC = () => {
  const navigate = useNavigate();

  const getDepartmentIcon = (iconName: string, id: string) => {
    switch (id) {
      case 'general-medicine':
        return <Stethoscope className="w-5 h-5 text-[#00529B]" />;
      case 'cardiology':
        return <HeartPulse className="w-5 h-5 text-red-500" />;
      case 'cardiothoracic':
        return <Heart className="w-5 h-5 text-sky-600" />;
      case 'neuro-sciences':
      case 'neurology':
        return <Brain className="w-5 h-5 text-purple-600" />;
      case 'gastroenterology':
        return <Stethoscope className="w-5 h-5 text-teal-600" />;
      case 'nephrology':
        return <Droplet className="w-5 h-5 text-rose-500" />;
      case 'oncology':
        return <Ribbon className="w-5 h-5 text-amber-500" />;
      case 'emergency-care':
        return <Siren className="w-5 h-5 text-red-600 animate-pulse" />;
      case 'urology':
        return <Stethoscope className="w-5 h-5 text-indigo-600" />;
      case 'organ-transplantation':
        return <Heart className="w-5 h-5 text-rose-400" />;
      case 'orthopedics':
        return <Bone className="w-5 h-5 text-slate-500" />;
      case 'robotic-surgery':
        return <Bot className="w-5 h-5 text-[#00529B]" />;
      case 'gynecology':
        return <Baby className="w-5 h-5 text-pink-500" />;
      case 'plastic-surgery':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'rheumatology':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#00529B]" />;
    }
  };

  const getSlugForDept = (id: string) => {
    switch (id) {
      case 'general-medicine':
        return 'general-medicine';
      case 'cardiology':
        return 'cardiology';
      case 'cardiothoracic':
        return 'cardiothoracic';
      case 'neuro-sciences':
      case 'neurology':
        return 'neurology';
      case 'gastroenterology':
        return 'gastroenterology';
      case 'nephrology':
        return 'nephrology';
      case 'oncology':
        return 'oncology';
      case 'emergency-care':
        return 'emergency-care';
      case 'urology':
        return 'urology';
      case 'organ-transplantation':
        return 'organ-transplantation';
      case 'orthopedics':
        return 'orthopaedics';
      case 'robotic-surgery':
        return 'robotic-surgery';
      case 'gynecology':
        return 'gynecology';
      case 'plastic-surgery':
        return 'plastic-surgery';
      case 'rheumatology':
        return 'rheumatology';
      default:
        return id;
    }
  };

  return (
    <section id="specialties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider inline-block">
          Centers of Excellence & Departments
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore MEDICARE <span className="text-[#00529B]">Clinical Specialties</span>
        </h2>
        <p className="text-sm text-slate-600 font-medium">
          World-class medical expertise, advanced diagnostic technologies, and 24/7 dedicated surgical care across all departments.
        </p>
      </div>

      {/* Medicover 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {SPECIALTIES_DATA.map((spec) => {
          const targetSlug = getSlugForDept(spec.id);
          return (
            <div
              key={spec.id}
              onClick={() => navigate(`/specialities/${targetSlug}`)}
              className="bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md hover:scale-[1.01] transition-all duration-200 rounded-2xl p-3.5 cursor-pointer group flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:bg-sky-100/80 transition-colors">
                  {getDepartmentIcon(spec.iconName, spec.id)}
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#00529B] transition-colors truncate">
                      {spec.name}
                    </h3>
                    {spec.badge === 'SEASONAL' && (
                      <span className="px-1.5 py-0.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[9px] font-black tracking-wider uppercase shadow-xs">
                        • SEASONAL
                      </span>
                    )}
                    {spec.badge === '24/7' && (
                      <span className="px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black tracking-wider uppercase shadow-xs animate-pulse">
                        • 24/7
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-sky-50 text-[#00529B] group-hover:bg-[#00529B] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
