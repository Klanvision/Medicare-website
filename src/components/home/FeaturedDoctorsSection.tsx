import React from 'react';
import { Star, Calendar, Clock, Award, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { FEATURED_DOCTORS_DATA } from '@/data/homeData';

export const FeaturedDoctorsSection: React.FC = () => {
  return (
    <section id="featured-doctors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="teal" size="sm">Top Specialists</Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
          Consult Our Senior Medical Specialists
        </h2>
        <p className="text-sm text-gray-600">
          Top-rated clinical leaders, researchers, and interventional surgeons available for OPD consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURED_DOCTORS_DATA.map((doc) => (
          <Card key={doc.id} hoverEffect accentGoldTop className="p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <img
                  src={doc.avatarUrl}
                  alt={doc.name}
                  className="w-full h-48 rounded-xl object-cover object-top shadow-md border"
                />
                <div className="absolute top-2 right-2 bg-navy-950/80 backdrop-blur-sm text-gold-400 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-gold-600/30">
                  <Star className="w-3.5 h-3.5 fill-gold-400" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              <div className="space-y-1">
                <Badge variant="teal" size="sm">{doc.department}</Badge>
                <h3 className="text-base font-bold text-navy-900 pt-1">{doc.name}</h3>
                <p className="text-xs text-gray-500 font-medium line-clamp-1">{doc.title}</p>
                <p className="text-[11px] text-gray-400">{doc.degree}</p>
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-teal-600" /> {doc.experienceYears}+ Yrs Exp.
                </span>
                <span className="text-teal-700 font-semibold">{doc.reviewCount} Reviews</span>
              </div>

              <div className="p-2 bg-gray-50 rounded-lg text-[11px] text-navy-800 flex items-center justify-between">
                <span className="font-semibold text-gray-500">Next Slot:</span>
                <span className="font-bold text-gold-700">{doc.nextAvailableSlot}</span>
              </div>

              <a href="#appointments" className="block">
                <Button variant="gold" size="sm" fullWidth leftIcon={<Calendar className="w-4 h-4" />}>
                  Book OPD Slot
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
