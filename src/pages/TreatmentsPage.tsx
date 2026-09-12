import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Stethoscope } from 'lucide-react';
import { specialtyService, TreatmentFlatItem } from '@/services/specialtyService';
import { SpecialtySearch } from '@/components/specialties/SpecialtySearch';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';

export const TreatmentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [treatments, setTreatments] = useState<TreatmentFlatItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      setIsLoading(true);
      const res = await specialtyService.getAllTreatments(searchTerm);
      setTreatments(res);
      setIsLoading(false);
    };
    fetchTreatments();
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Advanced Medical Procedures
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Treatments & Surgeries Directory</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-2xl leading-relaxed">
          Search minimally invasive robotic surgeries, interventional procedures, and therapies at MEDICARE Hospitals.
        </p>

        <div className="pt-2 max-w-xl">
          <SpecialtySearch value={searchTerm} onChange={setSearchTerm} placeholder="Search treatment or surgical procedure..." />
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-navy-900">
        <h3 className="text-lg font-bold">
          Found <span className="text-teal-600 font-extrabold">{treatments.length}</span> Advanced Treatments
        </h3>
      </div>

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-4 w-1/3 rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && treatments.length === 0 && (
        <EmptyState
          title="No Treatments Found"
          description="No surgical procedure matches your search query. Try searching for Angioplasty, Robotic Knee, or Thrombolysis."
          actionLabel="Clear Search"
          onAction={() => setSearchTerm('')}
        />
      )}

      {/* Treatments Grid */}
      {!isLoading && treatments.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item) => (
            <Card
              key={item.treatment.slug}
              hoverEffect
              accentGoldTop
              className="p-6 cursor-pointer bg-white flex flex-col justify-between space-y-4"
              onClick={() => navigate(`/treatments/${item.treatment.slug}`)}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="teal" size="sm">{item.specialtyName}</Badge>
                  <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-teal-600" /> {item.treatment.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-900 hover:text-teal-600 transition-colors">
                  {item.treatment.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {item.treatment.shortDesc}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-700 group border-t border-gray-100">
                <span>View Full Procedure Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
