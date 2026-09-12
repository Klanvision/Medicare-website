import React, { useState } from 'react';
import { Stethoscope, UserCheck, Calendar, Filter, Star, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { FEATURED_DOCTORS_DATA } from '@/data/homeData';

export const FindDoctorSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const departments = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Oncology'];

  const filteredDocs = FEATURED_DOCTORS_DATA.filter(
    (d) => selectedDept === 'All' || d.department === selectedDept
  );

  return (
    <section id="find-doctor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b pb-4">
        <div className="space-y-2">
          <Badge variant="teal" size="sm">Specialist Finder</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
            Find a Doctor & Book OPD Consultation
          </h2>
          <p className="text-sm text-gray-600">
            Consult with top internationally trained medical leads across super-specialties.
          </p>
        </div>

        {/* Quick Specialty Chips */}
        <div className="flex items-center gap-2 flex-wrap">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedDept === dept
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDocs.map((doc) => (
          <Card key={doc.id} hoverEffect accentGoldTop className="flex flex-col justify-between">
            <CardHeader className="p-5 pb-2">
              <div className="relative mb-3">
                <img
                  src={doc.avatarUrl}
                  alt={doc.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-gold-400 shadow-md"
                />
                <span className="absolute bottom-0 left-16 px-1.5 py-0.5 bg-emerald-500 text-white rounded-md text-[10px] font-bold">
                  Online OPD
                </span>
              </div>
              <Badge variant="teal" size="sm">{doc.department}</Badge>
              <CardTitle className="text-base pt-1">{doc.name}</CardTitle>
              <CardDescription className="text-xs line-clamp-1">{doc.degree}</CardDescription>
            </CardHeader>

            <CardContent className="p-5 pt-0 space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1 font-semibold text-gold-700">
                  <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  <span>{doc.rating} ({doc.reviewCount})</span>
                </div>
                <span>{doc.experienceYears}+ Yrs Exp</span>
              </div>

              <div className="p-2.5 bg-teal-50/60 rounded-xl border border-teal-100 text-[11px] text-teal-900 font-medium">
                📅 Next Slot: <span className="font-bold">{doc.nextAvailableSlot}</span>
              </div>

              <a href="#appointments" className="block">
                <Button variant="gold" size="sm" fullWidth leftIcon={<Calendar className="w-4 h-4" />}>
                  Book Slot
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
