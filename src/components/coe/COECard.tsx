import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { COEItem } from '@/data/coeData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

interface COECardProps {
  coe: COEItem;
}

export const COECard: React.FC<COECardProps> = ({ coe }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverEffect
      accentGoldTop
      className="p-6 cursor-pointer bg-white flex flex-col justify-between space-y-6"
      onClick={() => navigate(`/centres-of-excellence/${coe.slug}`)}
    >
      <div className="space-y-4">
        {/* Banner Thumbnail */}
        <div className="relative">
          <img
            src={coe.bannerImage}
            alt={coe.title}
            className="w-full h-52 rounded-2xl object-cover shadow-md border"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="gold" size="sm">Centre of Excellence</Badge>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-navy-900 hover:text-teal-600 transition-colors">
            {coe.title}
          </h3>
          <p className="text-xs text-teal-700 font-semibold">{coe.subtitle}</p>
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 pt-1">
            {coe.overview}
          </p>
        </div>

        {/* Key Stats Row */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {coe.stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="p-2.5 bg-gray-50 rounded-xl border text-center">
              <p className="text-sm font-black text-navy-900">{stat.value}</p>
              <p className="text-[10px] text-gray-500 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-700 group border-t border-gray-100">
        <span>Explore Institute & Specialists</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Card>
  );
};
