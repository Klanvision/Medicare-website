import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/common/Input';

interface ArticleSearchProps {
  value: string;
  onChange: (val: string) => void;
}

export const ArticleSearch: React.FC<ArticleSearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <Input
        placeholder="Search medical articles, videos, disease guides, or wellness tips..."
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
        className="bg-white text-sm"
      />
    </div>
  );
};
