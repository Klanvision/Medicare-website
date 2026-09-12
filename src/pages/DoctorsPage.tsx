import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight } from 'lucide-react';
import { doctorService, DoctorFilterParams } from '@/services/doctorService';
import { Doctor } from '@/data/doctorData';
import { DoctorSearch } from '@/components/doctors/DoctorSearch';
import { DoctorFilter, DoctorFilterState } from '@/components/doctors/DoctorFilter';
import { DoctorList } from '@/components/doctors/DoctorList';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

const initialFilters: DoctorFilterState = {
  specialty: 'All',
  hospital: 'All',
  location: 'All',
  gender: 'All',
  minExperience: 0,
  availability: 'All',
  consultationMode: 'All',
  maxFee: 1500,
};

export const DoctorsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<DoctorFilterState>(initialFilters);
  const [sortBy, setSortBy] = useState<'relevance' | 'experience-desc' | 'fee-asc' | 'fee-desc' | 'rating-desc'>('relevance');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const fetchDoctors = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const params: DoctorFilterParams = {
        query,
        specialty: filters.specialty,
        hospital: filters.hospital,
        location: filters.location,
        gender: filters.gender,
        minExperience: filters.minExperience,
        availability: filters.availability,
        consultationMode: filters.consultationMode,
        maxFee: filters.maxFee,
        sortBy,
        page: currentPage,
        pageSize: 6,
      };

      const res = await doctorService.getDoctors(params);
      setDoctors(res.doctors);
      setTotalCount(res.totalCount);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [query, filters, sortBy, currentPage]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const handleFilterChange = (newFilterPart: Partial<DoctorFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilterPart }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setQuery('');
    setFilters(initialFilters);
    setSortBy('relevance');
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Title & Smart Search Header */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Specialist Doctor Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            MEDICARE <span className="text-sky-200 font-black">Specialist Doctors & Surgeons</span>
          </h1>
          <p className="text-xs sm:text-sm text-sky-50 font-medium leading-relaxed">
            Search top interventional consultants, robotic surgeons, and clinical department heads at MEDICARE Hospitals.
          </p>
        </div>

        <DoctorSearch
          value={query}
          onChange={(val) => {
            setQuery(val);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Main Layout Grid (Filter Sidebar + Doctor List) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Left Sidebar Filter */}
        <div className="lg:col-span-4 shrink-0 sticky top-24">
          <DoctorFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
          />
        </div>

        {/* Doctor Results Grid */}
        <div className="lg:col-span-8 space-y-6">
          <DoctorList
            doctors={doctors}
            totalCount={totalCount}
            currentPage={currentPage}
            totalPages={totalPages}
            isLoading={isLoading}
            isError={isError}
            sortBy={sortBy}
            onSortChange={(val) => {
              setSortBy(val);
              setCurrentPage(1);
            }}
            onPageChange={(page) => setCurrentPage(page)}
            onResetFilters={handleResetFilters}
            onOpenMobileFilter={() => setIsMobileFilterOpen(true)}
            onRetry={fetchDoctors}
            layoutMode={layoutMode}
            onLayoutModeChange={(mode) => setLayoutMode(mode)}
          />
        </div>
      </div>

      {/* BOTTOM CTA: Connects Find Doctor Experience with AI Assistant */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-sky-300/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-md border border-white/30 backdrop-blur-sm">
            <Bot className="w-7 h-7 text-sky-200" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white">Can't decide? Ask our AI Health Assistant</h3>
            <p className="text-xs text-sky-50 font-medium leading-relaxed">
              Describe your symptoms and our AI Assistant will immediately evaluate intent, recommend the exact medical specialty, and show top doctor options.
            </p>
          </div>
        </div>
        <Link to="/ai-health-assistant" className="shrink-0 w-full sm:w-auto">
          <button className="px-5 py-3 rounded-xl bg-white text-[#00529B] hover:bg-sky-50 font-black text-xs shadow-md border-0 flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
            <span>Talk to AI Assistant</span>
            <ArrowRight className="w-4 h-4 text-[#00529B]" />
          </button>
        </Link>
      </div>
    </div>
  );
};
