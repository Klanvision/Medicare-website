import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/common/Input';

interface SpecialtySearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export const SpecialtySearch: React.FC<SpecialtySearchProps> = ({
  value,
  onChange,
  placeholder = 'Search by specialty name, condition, or procedure...',
}) => {
  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        startIcon={<Search className="w-4 h-4 text-teal-600" />}
        endIcon={
          value ? (
            <button
              type="button"
              onClick={() => onChange('')}
              className="text-gray-400 hover:text-navy-900 transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : undefined
        }
        className="bg-white"
      />
    </div>
  );
};
