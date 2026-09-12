import React, { useState, useEffect, useCallback } from 'react';
import { hospitalService } from '@/services/hospitalService';
import { HospitalBranchExt } from '@/data/hospitalData';
import { HospitalFilter } from '@/components/hospitals/HospitalFilter';
import { HospitalCard } from '@/components/hospitals/HospitalCard';
import { Badge } from '@/components/common/Badge';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';
import { ErrorState } from '@/components/common/ErrorState';

export const HospitalsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('All');
  const [state, setState] = useState('All');

  const [hospitals, setHospitals] = useState<HospitalBranchExt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchHospitals = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await hospitalService.getHospitals({ query, city, state });
      setHospitals(res);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [query, city, state]);

  useEffect(() => {
    fetchHospitals();
  }, [fetchHospitals]);

  const handleReset = () => {
    setQuery('');
    setCity('All');
    setState('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-3 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Hospital Network Directory
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Hospital Locations</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-2xl leading-relaxed">
          Locate our tertiary care medical complexes, 24/7 Level-1 trauma centers, and city specialty OPD clinics.
        </p>
      </div>

      {/* Filter Bar */}
      <HospitalFilter
        query={query}
        onQueryChange={setQuery}
        city={city}
        onCityChange={setCity}
        state={state}
        onStateChange={setState}
        onReset={handleReset}
      />

      {/* Results Header */}
      <div className="flex items-center justify-between text-navy-900">
        <h3 className="text-lg font-bold">
          Found <span className="text-teal-600 font-extrabold">{hospitals.length}</span> Hospital Facilities
        </h3>
      </div>

      {/* Error State */}
      {isError && (
        <ErrorState
          title="Failed to Load Hospitals"
          message="Unable to fetch hospital directory. Please try again."
          onRetry={fetchHospitals}
        />
      )}

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && hospitals.length === 0 && (
        <EmptyState
          title="No Hospitals Found"
          description="No hospital facilities match your current search query or city selection."
          actionLabel="Clear Filters"
          onAction={handleReset}
        />
      )}

      {/* Hospital Cards List */}
      {!isLoading && !isError && hospitals.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      )}
    </div>
  );
};
