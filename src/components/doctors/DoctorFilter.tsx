import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, RotateCcw, X, Check } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Select } from '@/components/common/Select';
import { Badge } from '@/components/common/Badge';

export interface DoctorFilterState {
  specialty: string;
  hospital: string;
  location: string;
  gender: string;
  minExperience: number;
  availability: string;
  consultationMode: string;
  maxFee: number;
}

interface DoctorFilterProps {
  filters: DoctorFilterState;
  onFilterChange: (newFilters: Partial<DoctorFilterState>) => void;
  onResetFilters: () => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const DoctorFilter: React.FC<DoctorFilterProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  isOpenMobile = false,
  onCloseMobile,
}) => {
  const specialties = [
    'All',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Oncology',
    'Gastroenterology',
    'Nephrology',
    'Pediatrics',
    'Gynecology',
    'Urology',
    'Pulmonology',
    'Dermatology',
    'ENT',
  ];

  const hospitals = [
    'All',
    'MEDICARE Quaternary Super Specialty Hospital',
    'MEDICARE City OPD & Diagnostic Center',
  ];

  const locations = ['All', 'Sector 15, Pune', 'Pimpri, Pune'];

  const filterContent = (
    <div className="space-y-6">
      {/* Header & Reset Button */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2 font-bold text-navy-900 text-base">
          <Filter className="w-4 h-4 text-teal-600" />
          <span>Filter Doctors</span>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-xs font-semibold text-teal-700 hover:text-navy-900 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Clear All
        </button>
      </div>

      {/* 1. Specialty Dropdown */}
      <Select
        label="Medical Specialty"
        value={filters.specialty}
        onChange={(e) => onFilterChange({ specialty: e.target.value })}
        options={specialties.map((s) => ({ value: s, label: s === 'All' ? 'All Specialties' : s }))}
      />

      {/* 2. Hospital Branch */}
      <Select
        label="Hospital Branch"
        value={filters.hospital}
        onChange={(e) => onFilterChange({ hospital: e.target.value })}
        options={hospitals.map((h) => ({ value: h, label: h === 'All' ? 'All Hospital Branches' : h }))}
      />

      {/* 3. Location */}
      <Select
        label="Location"
        value={filters.location}
        onChange={(e) => onFilterChange({ location: e.target.value })}
        options={locations.map((loc) => ({ value: loc, label: loc === 'All' ? 'All Locations' : loc }))}
      />

      {/* 4. Doctor Gender */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-navy-900">Doctor Gender</label>
        <div className="flex items-center gap-2">
          {['All', 'Male', 'Female'].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => onFilterChange({ gender: g })}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                filters.gender === g
                  ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white border-sky-500 shadow-2xs'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Experience Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-navy-900">Minimum Experience</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Any Experience', val: 0 },
            { label: '10+ Years', val: 10 },
            { label: '15+ Years', val: 15 },
            { label: '20+ Years', val: 20 },
          ].map((exp) => (
            <button
              key={exp.val}
              type="button"
              onClick={() => onFilterChange({ minExperience: exp.val })}
              className={`py-1.5 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                filters.minExperience === exp.val
                  ? 'bg-teal-600 text-white border-teal-600 shadow-2xs'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {exp.label}
            </button>
          ))}
        </div>
      </div>

      {/* 6. Availability */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-navy-900">Slot Availability</label>
        <div className="flex items-center gap-2">
          {['All', 'Today', 'Tomorrow', 'This Week'].map((av) => (
            <button
              key={av}
              type="button"
              onClick={() => onFilterChange({ availability: av })}
              className={`flex-1 py-1.5 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                filters.availability === av
                  ? 'bg-gold-600 text-navy-950 font-bold border-gold-500 shadow-2xs'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {av}
            </button>
          ))}
        </div>
      </div>

      {/* 7. Consultation Mode */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-navy-900">Consultation Mode</label>
        <Select
          value={filters.consultationMode}
          onChange={(e) => onFilterChange({ consultationMode: e.target.value })}
          options={[
            { value: 'All', label: 'All Modes (OPD & Video)' },
            { value: 'In-Person OPD', label: 'In-Person OPD Only' },
            { value: 'Video Consultation', label: 'Video Tele-Consultation Only' },
          ]}
        />
      </div>

      {/* 8. Maximum Fee Range */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-navy-900">
          <span>Max Consultation Fee:</span>
          <span className="text-gold-700 font-bold">₹{filters.maxFee}</span>
        </div>
        <input
          type="range"
          min={500}
          max={1500}
          step={100}
          value={filters.maxFee}
          onChange={(e) => onFilterChange({ maxFee: Number(e.target.value) })}
          className="w-full accent-gold-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-medium">
          <span>₹500</span>
          <span>₹1,000</span>
          <span>₹1,500</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Panel */}
      <div className="hidden lg:block bg-white p-6 rounded-2xl border border-gray-200 shadow-soft space-y-6">
        {filterContent}
      </div>

      {/* Mobile Drawer Filter */}
      <AnimatePresence>
        {isOpenMobile && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
            />

            {/* Mobile Drawer Slide-over */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-white p-6 shadow-2xl overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-bold text-lg text-navy-900">Filter Doctors</h3>
                  <button onClick={onCloseMobile} className="p-1 rounded-md text-gray-400 hover:text-navy-900">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {filterContent}
              </div>

              <div className="pt-4 border-t">
                <Button variant="gold" fullWidth onClick={onCloseMobile}>
                  Apply Filters
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
