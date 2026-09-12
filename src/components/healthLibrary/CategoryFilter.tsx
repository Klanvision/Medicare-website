import React from 'react';
import { ContentType } from '@/data/healthLibraryData';

interface CategoryFilterProps {
  selectedType: ContentType | 'All';
  onTypeChange: (type: ContentType | 'All') => void;
  selectedTag?: string;
  onClearTag?: () => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedType,
  onTypeChange,
  selectedTag,
  onClearTag,
}) => {
  const types: (ContentType | 'All')[] = [
    'All',
    'Article',
    'Video',
    'Health News',
    'Disease Guide',
    'Wellness Tip',
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onTypeChange(type)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedType === type
                ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white shadow-sm border border-sky-400/30'
                : 'bg-sky-50/70 text-gray-700 hover:bg-sky-100 hover:text-[#00529B] border border-gray-200/60'
            }`}
          >
            {type === 'All' ? 'All Content' : type}
          </button>
        ))}
      </div>

      {/* Selected Tag Active Pill */}
      {selectedTag && (
        <div className="flex items-center gap-2 text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200">
          <span>Active Tag: #{selectedTag}</span>
          <button
            onClick={onClearTag}
            className="text-gray-400 hover:text-navy-900 font-bold ml-1"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};
