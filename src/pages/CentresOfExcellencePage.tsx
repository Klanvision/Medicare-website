import React, { useState, useEffect } from 'react';
import { coeService } from '@/services/coeService';
import { COEItem } from '@/data/coeData';
import { COECard } from '@/components/coe/COECard';
import { Badge } from '@/components/common/Badge';
import { Skeleton } from '@/components/common/Loading';

export const CentresOfExcellencePage: React.FC = () => {
  const [coeList, setCoeList] = useState<COEItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCOEs = async () => {
      setIsLoading(true);
      const res = await coeService.getCOEList();
      setCoeList(res);
      setIsLoading(false);
    };
    fetchCOEs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Flagship Institutes
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Centres of Excellence</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-2xl leading-relaxed">
          7 specialized medical institutes delivering robotic surgery, 24/7 STEMI cardiac care, stroke thrombolysis, organ transplantation, and precision oncology.
        </p>
      </div>

      {/* Directory Title */}
      <div className="flex items-center justify-between text-navy-900">
        <h3 className="text-lg font-bold">
          Explore <span className="text-teal-600 font-extrabold">{coeList.length}</span> Medical Institutes
        </h3>
      </div>

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-48 w-full rounded-2xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      )}

      {/* COE Cards Grid */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coeList.map((item) => (
            <COECard key={item.slug} coe={item} />
          ))}
        </div>
      )}
    </div>
  );
};
