import React, { useState, useEffect } from 'react';
import { specialtyService } from '@/services/specialtyService';
import { Specialty } from '@/data/specialtyData';
import { SpecialtySearch } from '@/components/specialties/SpecialtySearch';
import { SpecialtyCard } from '@/components/specialties/SpecialtyCard';
import { Badge } from '@/components/common/Badge';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';

export const SpecialtiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialties = async () => {
      setIsLoading(true);
      const res = await specialtyService.getSpecialties(searchTerm);
      setSpecialties(res);
      setIsLoading(false);
    };
    fetchSpecialties();
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Centres of Excellence
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Clinical Specialties & Departments</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-2xl leading-relaxed">
          Explore MEDICARE’s 16 medical centers of excellence, robotic surgery institutes, and clinical departments.
        </p>

        <div className="pt-2 max-w-xl">
          <SpecialtySearch value={searchTerm} onChange={setSearchTerm} />
        </div>
      </div>

      {/* Results Title */}
      <div className="flex items-center justify-between text-slate-900 font-sans">
        <h3 className="text-lg font-extrabold">
          Showing <span className="text-[#00529B] font-black">{specialties.length}</span> Medical Specialties & Departments
        </h3>
      </div>

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && specialties.length === 0 && (
        <EmptyState
          title="No Specialties Found"
          description="No medical specialty matches your search query. Try searching for Cardiology, Orthopaedics, or Neurology."
          actionLabel="Clear Search"
          onAction={() => setSearchTerm('')}
        />
      )}

      {/* Specialties Grid */}
      {!isLoading && specialties.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec) => (
            <SpecialtyCard key={spec.slug} specialty={spec} />
          ))}
        </div>
      )}
    </div>
  );
};
