import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Activity,
  Stethoscope,
  Eye,
  Heart,
  Sparkles,
  Droplet,
  Siren,
  Bot,
  Baby,
  ArrowRight,
} from 'lucide-react';
import { Specialty } from '@/data/specialtyData';
import { Card } from '@/components/common/Card';

interface SpecialtyCardProps {
  specialty: Specialty;
}

const renderIcon = (name: string, slug: string) => {
  switch (slug) {
    case 'general-medicine':
      return <Stethoscope className="w-6 h-6 text-[#00529B]" />;
    case 'cardiology':
      return <HeartPulse className="w-6 h-6 text-red-500" />;
    case 'cardiothoracic':
      return <Heart className="w-6 h-6 text-sky-600" />;
    case 'neurology':
      return <Brain className="w-6 h-6 text-purple-600" />;
    case 'gastroenterology':
      return <Activity className="w-6 h-6 text-teal-600" />;
    case 'nephrology':
      return <Droplet className="w-6 h-6 text-rose-500" />;
    case 'oncology':
      return <Ribbon className="w-6 h-6 text-amber-500" />;
    case 'emergency-care':
      return <Siren className="w-6 h-6 text-red-600 animate-pulse" />;
    case 'urology':
      return <Stethoscope className="w-6 h-6 text-indigo-600" />;
    case 'organ-transplantation':
      return <Heart className="w-6 h-6 text-rose-400" />;
    case 'orthopaedics':
    case 'orthopedics':
      return <Bone className="w-6 h-6 text-slate-600" />;
    case 'robotic-surgery':
      return <Bot className="w-6 h-6 text-[#00529B]" />;
    case 'gynecology':
      return <Baby className="w-6 h-6 text-pink-500" />;
    case 'plastic-surgery':
      return <Sparkles className="w-6 h-6 text-amber-400" />;
    case 'rheumatology':
      return <Activity className="w-6 h-6 text-emerald-600" />;
    default:
      return <Stethoscope className="w-6 h-6 text-[#00529B]" />;
  }
};

export const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverEffect
      className="p-6 cursor-pointer bg-white border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all rounded-3xl flex flex-col justify-between space-y-6 group"
      onClick={() => navigate(`/specialities/${specialty.slug}`)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-sky-50 rounded-2xl border border-sky-100 group-hover:bg-sky-100 transition-colors">
            {renderIcon(specialty.iconName, specialty.slug)}
          </div>
          <span className="px-2.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-[11px] font-black uppercase tracking-wider">
            {specialty.conditions.length} Conditions Treated
          </span>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#00529B] transition-colors">
            {specialty.name}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
            {specialty.shortDesc}
          </p>
        </div>

        {specialty.conditions && specialty.conditions.length > 0 && (
          <div className="space-y-1.5 pt-3 border-t border-sky-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Key Focus Areas:</p>
            <div className="flex flex-wrap gap-1.5">
              {specialty.conditions.slice(0, 3).map((c, i) => (
                <span key={i} className="text-[11px] font-bold text-[#00529B] bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-black text-[#00529B]">
        <span>Explore Specialty & Clinical Care</span>
        <div className="w-7 h-7 rounded-full bg-sky-50 group-hover:bg-[#00529B] group-hover:text-white transition-colors flex items-center justify-center">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Card>
  );
};
