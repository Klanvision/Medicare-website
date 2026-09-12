import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/common/Input';

interface HomeServiceFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

export const HomeServiceFilter: React.FC<HomeServiceFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    'All',
    'Nursing',
    'Physiotherapy',
    'Doctor Visit',
    'Elderly Care',
    'Sample Collection',
    'Medicine Delivery',
    'Medical Equipment',
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft space-y-4">
      {/* Search Bar */}
      <Input
        placeholder="Search home service, nursing, physiotherapy, doctor visit, oxygen..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        startIcon={<Search className="w-4 h-4 text-teal-600" />}
        endIcon={
          searchTerm ? (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="text-gray-400 hover:text-navy-900 transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : undefined
        }
      />

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoryChange(cat)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white shadow-sm border border-sky-400/30'
                : 'bg-sky-50/70 text-gray-700 hover:bg-sky-100 hover:text-[#00529B] border border-gray-200/60'
            }`}
          >
            {cat === 'All' ? 'All Home Services' : cat}
          </button>
        ))}
      </div>
    </div>
  );
};
