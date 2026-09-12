import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  Home,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  User,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Heart,
} from 'lucide-react';
import { homeHealthcareService } from '@/services/homeHealthcareService';
import { HomeServiceItem } from '@/data/homeHealthcareData';
import { HomeServiceFilter } from '@/components/homeHealthcare/HomeServiceFilter';
import { HomeServiceCard } from '@/components/homeHealthcare/HomeServiceCard';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Modal } from '@/components/common/Modal';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';
import { useToast } from '@/hooks/useToast';

interface HomeCareBookingForm {
  patientName: string;
  phone: string;
  email: string;
  serviceDate: string;
  shiftPreference: string;
  address: string;
  patientCondition: string;
}

export const HomeHealthcarePage: React.FC = () => {
  const toast = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [services, setServices] = useState<HomeServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Booking Modal
  const [selectedService, setSelectedService] = useState<HomeServiceItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HomeCareBookingForm>();

  const fetchServices = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await homeHealthcareService.getHomeServices(searchTerm, selectedCategory);
      setServices(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleOpenBooking = (service: HomeServiceItem) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const onConfirmBooking = (data: HomeCareBookingForm) => {
    toast.success(
      `Doorstep Home Service "${selectedService?.title}" requested for ${data.serviceDate}! Clinical coordinator will call ${data.phone}.`,
      'Home Healthcare Requested'
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
            Doorstep Hospital Services
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Home Healthcare Services</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-2xl leading-relaxed">
          Hospital-grade clinical care at your home: 24/7 ICU Nurses, Physiotherapists, Doctor House Calls, Elderly Attendants, Medicine Delivery & ICU Equipment.
        </p>
      </div>

      {/* Filter Bar */}
      <HomeServiceFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Results Header */}
      <div className="flex items-center justify-between text-navy-900">
        <h3 className="text-lg font-bold">
          Available Doorstep Services (<span className="text-teal-600 font-extrabold">{services.length}</span>)
        </h3>
      </div>

      {/* Loading Skeletons */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && services.length === 0 && (
        <EmptyState
          title="No Home Services Found"
          description="No doorstep healthcare service matches your search query or category filter."
          actionLabel="Reset Search & Filters"
          onAction={() => {
            setSearchTerm('');
            setSelectedCategory('All');
          }}
        />
      )}

      {/* Services Grid */}
      {!isLoading && services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <HomeServiceCard
              key={service.id}
              service={service}
              onBookService={handleOpenBooking}
            />
          ))}
        </div>
      )}

      {/* Doorstep Booking Modal */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={`Request Doorstep Service — ${selectedService?.title}`}
        description={`Starting Price: ${selectedService?.startingPrice === 0 ? 'FREE' : '₹' + selectedService?.startingPrice} • ${selectedService?.duration}`}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Service Start Date"
              type="date"
              error={errors.serviceDate?.message}
              {...register('serviceDate', { required: 'Date is required' })}
            />

            <Select
              label="Preferred Shift / Time"
              {...register('shiftPreference')}
              options={[
                { value: 'Morning Visit (09:00 AM)', label: 'Morning Visit (09:00 AM)' },
                { value: 'Afternoon Visit (02:00 PM)', label: 'Afternoon Visit (02:00 PM)' },
                { value: '12-Hour Day Shift (08 AM - 08 PM)', label: '12-Hour Day Shift (08 AM - 08 PM)' },
                { value: '12-Hour Night Shift (08 PM - 08 AM)', label: '12-Hour Night Shift (08 PM - 08 AM)' },
                { value: '24-Hour Live-In Nurse', label: '24-Hour Live-In Caregiver' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-navy-900 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-teal-600" /> Patient Home Address
            </label>
            <textarea
              rows={3}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              placeholder="Flat no, building name, street address, locality in Pune/Pimpri..."
              {...register('address', { required: 'Home address is required' })}
            />
            {errors.address && <p className="text-xs text-red-600">{errors.address.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-navy-900">Patient Medical Condition & Notes</label>
            <textarea
              rows={2}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              placeholder="Specify diagnosis, tracheostomy, post-op mobility status..."
              {...register('patientCondition')}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsBookingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gold" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
              Request Home Service
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
