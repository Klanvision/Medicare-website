import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  Calendar,
  CheckCircle2,
  Home,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { checkupService } from '@/services/checkupService';
import { CheckupPackage, CheckupCategory } from '@/data/checkupData';
import { CheckupFilter } from '@/components/checkups/CheckupFilter';
import { CheckupPackageCard } from '@/components/checkups/CheckupPackageCard';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Modal } from '@/components/common/Modal';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';
import { useToast } from '@/hooks/useToast';

interface CheckupBookingForm {
  patientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  isHomeSample: boolean;
  address: string;
}

export const HealthCheckupsPage: React.FC = () => {
  const toast = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CheckupCategory | 'All'>('All');

  const [packages, setPackages] = useState<CheckupPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Booking Modal
  const [selectedPkg, setSelectedPkg] = useState<CheckupPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<CheckupBookingForm>({
    defaultValues: {
      isHomeSample: true,
    },
  });

  const isHomeSampleSelected = watch('isHomeSample');

  const fetchPackages = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await checkupService.getCheckupPackages(searchTerm, selectedCategory);
      setPackages(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  const handleOpenBooking = (pkg: CheckupPackage) => {
    setSelectedPkg(pkg);
    setIsBookingModalOpen(true);
  };

  const onConfirmBooking = (data: CheckupBookingForm) => {
    toast.success(
      `Checkup Package "${selectedPkg?.name}" booked for ${data.preferredDate}! Collection team will contact ${data.phone}.`,
      'Health Checkup Booked'
    );
    setIsBookingModalOpen(false);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Preventive Health Care
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Health Checkup Packages</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-2xl leading-relaxed">
          Comprehensive health screening panels for Full Body, Men, Women, Senior Citizens, Children, Lifestyle, and Corporates with doorstep sample pickup.
        </p>
      </div>

      {/* Search & 8 Category Tabs */}
      <CheckupFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Results Title */}
      <div className="flex items-center justify-between text-navy-900">
        <h3 className="text-lg font-bold">
          Showing <span className="text-teal-600 font-extrabold">{packages.length}</span> Health Packages
        </h3>
      </div>

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-6 w-1/3 rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && packages.length === 0 && (
        <EmptyState
          title="No Checkup Packages Found"
          description="No health package matches your search query or category selection."
          actionLabel="Reset Search & Filters"
          onAction={() => {
            setSearchTerm('');
            setSelectedCategory('All');
          }}
        />
      )}

      {/* Packages Grid */}
      {!isLoading && packages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <CheckupPackageCard key={pkg.id} packageData={pkg} onBookPackage={handleOpenBooking} />
          ))}
        </div>
      )}

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={`Book ${selectedPkg?.name}`}
        description={`Discounted Package Fee: ₹${selectedPkg?.discountPrice} • ${selectedPkg?.testCount} Tests Included`}
      >
        <form onSubmit={handleSubmit(onConfirmBooking)} className="space-y-4">
          <Input
            label="Patient Name"
            placeholder="Full Name"
            startIcon={<User className="w-4 h-4" />}
            error={errors.patientName?.message}
            {...register('patientName', { required: 'Patient name is required' })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Contact Phone"
              type="tel"
              placeholder="+91..."
              startIcon={<Phone className="w-4 h-4" />}
              error={errors.phone?.message}
              {...register('phone', { required: 'Phone is required' })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="email@example.com"
              error={errors.email?.message}
              {...register('email', { required: 'Email is required' })}
            />
          </div>

          <Input
            label="Preferred Checkup Date"
            type="date"
            error={errors.preferredDate?.message}
            {...register('preferredDate', { required: 'Date is required' })}
          />

          {selectedPkg?.homeCollection && (
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-navy-900 pt-1">
              <input
                type="checkbox"
                className="w-4 h-4 accent-teal-600 rounded"
                {...register('isHomeSample')}
              />
              <Home className="w-4 h-4 text-teal-600" />
              <span>Doorstep Home Sample Collection</span>
            </label>
          )}

          {isHomeSampleSelected && selectedPkg?.homeCollection && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-navy-900">Collection Address</label>
              <textarea
                rows={3}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                placeholder="Enter house no, street address, area landmark..."
                {...register('address', { required: 'Address is required for home collection' })}
              />
              {errors.address && <p className="text-xs text-red-600">{errors.address.message}</p>}
            </div>
          )}

          {selectedPkg?.preparation && (
            <div className="p-3 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200">
              <strong>Fasting Note:</strong> {selectedPkg.preparation}
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsBookingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gold" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
              Confirm Package Booking
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
