import React from 'react';
import { LayoutGrid, List, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Select } from '@/components/common/Select';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';
import { ErrorState } from '@/components/common/ErrorState';
import { DoctorCard } from './DoctorCard';
import { Doctor } from '@/data/doctorData';

interface DoctorListProps {
  doctors: Doctor[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  isError: boolean;
  sortBy: string;
  onSortChange: (val: any) => void;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
  onOpenMobileFilter?: () => void;
  onRetry?: () => void;
  layoutMode: 'grid' | 'list';
  onLayoutModeChange: (mode: 'grid' | 'list') => void;
}

export const DoctorList: React.FC<DoctorListProps> = ({
  doctors,
  totalCount,
  currentPage,
  totalPages,
  isLoading,
  isError,
  sortBy,
  onSortChange,
  onPageChange,
  onResetFilters,
  onOpenMobileFilter,
  onRetry,
  layoutMode,
  onLayoutModeChange,
}) => {
  if (isError) {
    return (
      <ErrorState
        title="Failed to Load Doctor Directory"
        message="An error occurred while fetching doctor profiles. Please check your network or try again."
        onRetry={onRetry}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Sorting & Layout Control Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
        <div className="flex items-center gap-3">
          {onOpenMobileFilter && (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenMobileFilter}
              className="lg:hidden"
              leftIcon={<SlidersHorizontal className="w-4 h-4 text-teal-600" />}
            >
              Filter
            </Button>
          )}
          <p className="text-xs sm:text-sm text-navy-900 font-semibold">
            Showing <span className="text-teal-600 font-bold">{totalCount}</span> Specialist Doctors
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Sorting Dropdown */}
          <div className="w-48">
            <Select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              options={[
                { value: 'relevance', label: 'Sort by: Relevance' },
                { value: 'experience-desc', label: 'Experience: High to Low' },
                { value: 'rating-desc', label: 'Rating: High to Low' },
                { value: 'fee-asc', label: 'Fee: Low to High' },
                { value: 'fee-desc', label: 'Fee: High to Low' },
              ]}
              className="text-xs py-1.5"
            />
          </div>

          {/* Grid vs List Layout Toggles */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border">
            <button
              type="button"
              onClick={() => onLayoutModeChange('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                layoutMode === 'grid' ? 'bg-white text-navy-900 shadow-2xs font-bold' : 'text-gray-400 hover:text-navy-900'
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onLayoutModeChange('list')}
              className={`p-1.5 rounded-md transition-colors ${
                layoutMode === 'list' ? 'bg-white text-navy-900 shadow-2xs font-bold' : 'text-gray-400 hover:text-navy-900'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Loading Skeleton Cards */}
      {isLoading && (
        <div className={layoutMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-44 w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && doctors.length === 0 && (
        <EmptyState
          title="No Doctors Match Your Search Criteria"
          description="Try broadening your search term or clearing active filters to see available specialists."
          actionLabel="Clear All Filters"
          onAction={onResetFilters}
        />
      )}

      {/* Doctor Cards Grid / List */}
      {!isLoading && doctors.length > 0 && (
        <div className={layoutMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} layoutMode={layoutMode} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {!isLoading && totalPages > 1 && (
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            leftIcon={<ChevronLeft className="w-4 h-4" />}
          >
            Previous
          </Button>

          <div className="flex items-center gap-1.5">
            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === pageNum
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-gray-100 text-navy-900 hover:bg-gray-200'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            rightIcon={<ChevronRight className="w-4 h-4" />}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
