import React, { useState, useMemo } from 'react';
import {
  Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight,
  AlertCircle, FolderOpen, RefreshCw, Edit, Trash2, Eye, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/common/Button';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

export interface AdminDataTableProps<T> {
  title?: string;
  data: T[];
  columns: Column<T>[];
  searchPlaceholder?: string;
  searchFields?: (keyof T)[];
  filterOptions?: { label: string; value: string; field: keyof T }[];
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onApprove?: (item: T) => void;
  pageSize?: number;
}

export function AdminDataTable<T extends { id: string | number }>({
  title,
  data,
  columns,
  searchPlaceholder = 'Search records...',
  searchFields,
  filterOptions,
  isLoading = false,
  isError = false,
  errorMessage = 'Failed to load records. Please try again.',
  onRetry,
  onView,
  onEdit,
  onDelete,
  onApprove,
  pageSize = 5,
}: AdminDataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Search & Filter Processing
  const filteredData = useMemo(() => {
    let result = [...data];

    // Filter Dropdown
    if (selectedFilter !== 'all' && filterOptions) {
      const activeFilterObj = filterOptions.find((f) => f.value === selectedFilter);
      if (activeFilterObj) {
        result = result.filter((item) => String(item[activeFilterObj.field]) === selectedFilter);
      }
    }

    // Search Term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter((item) => {
        if (searchFields && searchFields.length > 0) {
          return searchFields.some((field) => String(item[field] || '').toLowerCase().includes(term));
        }
        return Object.values(item).some((val) => String(val || '').toLowerCase().includes(term));
      });
    }

    // Sort Processing
    if (sortColumn) {
      result.sort((a, b) => {
        const valA = (a as any)[sortColumn];
        const valB = (b as any)[sortColumn];

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, selectedFilter, sortColumn, sortDirection, searchFields, filterOptions]);

  // 2. Pagination Calculations
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const startIdx = (currentPage - 1) * pageSize;
    return filteredData.slice(startIdx, startIdx + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const handleSort = (key: string) => {
    if (sortColumn === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  const hasActions = onView || onEdit || onDelete || onApprove;

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden space-y-0">
      {/* Table Header Controls */}
      <div className="p-4 sm:p-6 bg-gray-50 border-b border-gray-200 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {title && <h3 className="text-lg font-black text-navy-950">{title}</h3>}

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Filter Dropdown */}
            {filterOptions && filterOptions.length > 0 && (
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => {
                    setSelectedFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs font-bold text-navy-900 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="all">All Filters</option>
                  {filterOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ERROR STATE */}
      {isError ? (
        <div className="p-8 text-center space-y-3 bg-red-50">
          <AlertCircle className="w-8 h-8 text-red-600 mx-auto" />
          <p className="text-xs font-bold text-red-800">{errorMessage}</p>
          {onRetry && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRetry}
              leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
            >
              Retry Loading
            </Button>
          )}
        </div>
      ) : isLoading ? (
        /* LOADING STATE (Skeleton Rows) */
        <div className="p-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : filteredData.length === 0 ? (
        /* EMPTY STATE */
        <div className="p-12 text-center space-y-3">
          <FolderOpen className="w-12 h-12 text-gray-400 mx-auto" />
          <h4 className="text-base font-bold text-navy-950">No Records Found</h4>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            No records matched your search query or filter selection. Try resetting your search terms.
          </p>
        </div>
      ) : (
        /* TABLE DATA */
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#070e24] text-white uppercase text-[10px] tracking-wider font-extrabold">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`p-4 ${col.sortable ? 'cursor-pointer select-none hover:text-amber-400' : ''}`}
                    onClick={() => col.sortable && handleSort(col.key)}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{col.header}</span>
                      {col.sortable && <ArrowUpDown className="w-3 h-3" />}
                    </div>
                  </th>
                ))}
                {hasActions && <th className="p-4 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 font-medium">
              {paginatedData.map((item) => (
                <tr key={String(item.id)} className="hover:bg-gray-50 transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className="p-4 text-navy-950">
                      {col.render ? col.render(item) : String((item as any)[col.key] || '')}
                    </td>
                  ))}
                  {hasActions && (
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {onApprove && (
                          <button
                            onClick={() => onApprove(item)}
                            className="p-1.5 rounded-lg text-teal-600 hover:bg-teal-50"
                            title="Approve / Verify"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        {onView && (
                          <button
                            onClick={() => onView(item)}
                            className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        {onEdit && (
                          <button
                            onClick={() => onEdit(item)}
                            className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50"
                            title="Edit Record"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(item)}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION FOOTER */}
      {!isLoading && !isError && filteredData.length > 0 && (
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <div>
            Showing <strong>{(currentPage - 1) * pageSize + 1}</strong> to{' '}
            <strong>{Math.min(currentPage * pageSize, filteredData.length)}</strong> of{' '}
            <strong>{filteredData.length}</strong> records
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="p-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-bold text-navy-950">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="p-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
