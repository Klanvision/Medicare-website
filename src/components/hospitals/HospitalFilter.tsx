import React from 'react';
import { Search, MapPin, RotateCcw } from 'lucide-react';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Button } from '@/components/common/Button';

interface HospitalFilterProps {
  query: string;
  onQueryChange: (q: string) => void;
  city: string;
  onCityChange: (c: string) => void;
  state: string;
  onStateChange: (s: string) => void;
  onReset: () => void;
}

export const HospitalFilter: React.FC<HospitalFilterProps> = ({
  query,
  onQueryChange,
  city,
  onCityChange,
  state,
  onStateChange,
  onReset,
}) => {
  const cities = ['All', 'Pune', 'Pimpri', 'Chinchwad', 'Mumbai'];
  const states = ['All', 'Maharashtra'];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft space-y-4">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1">
          <Input
            placeholder="Search hospital by name, facility, or street address..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            startIcon={<Search className="w-4 h-4 text-teal-600" />}
          />
        </div>

        {/* City Filter */}
        <div className="w-full md:w-48">
          <Select
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            options={cities.map((c) => ({ value: c, label: c === 'All' ? 'All Cities' : c }))}
          />
        </div>

        {/* State Filter */}
        <div className="w-full md:w-48">
          <Select
            value={state}
            onChange={(e) => onStateChange(e.target.value)}
            options={states.map((s) => ({ value: s, label: s === 'All' ? 'All States' : s }))}
          />
        </div>

        {/* Reset Button */}
        <Button variant="ghost" size="sm" onClick={onReset} leftIcon={<RotateCcw className="w-4 h-4" />}>
          Clear
        </Button>
      </div>
    </div>
  );
};
