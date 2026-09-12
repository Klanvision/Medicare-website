import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

interface DoctorSearchProps {
  value: string;
  onChange: (val: string) => void;
  onSearch?: () => void;
  className?: string;
}

export const DoctorSearch: React.FC<DoctorSearchProps> = ({
  value,
  onChange,
  onSearch,
  className = '',
}) => {
  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      <div className="relative flex-1">
        <Input
          placeholder="Search by doctor name, degree, or specialty..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          startIcon={<Search className="w-4 h-4 text-teal-600" />}
          endIcon={
            value ? (
              <button
                type="button"
                onClick={() => onChange('')}
                className="text-gray-400 hover:text-navy-900 transition-colors p-1 rounded-md"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            ) : undefined
          }
          className="text-sm py-2.5 bg-white border-gray-300 shadow-2xs"
        />
      </div>
      {onSearch && (
        <Button variant="gold" onClick={onSearch} className="shrink-0 font-bold">
          Search
        </Button>
      )}
    </div>
  );
};
