import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  TestTube,
  Home,
  Clock,
  Download,
  Calendar,
  CheckCircle2,
  FileText,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { diagnosticService } from '@/services/diagnosticService';
import {
  DiagnosticTest,
  DiagnosticPackage,
  DiagnosticCategory,
} from '@/data/diagnosticData';
import { TestSearch } from '@/components/diagnostics/TestSearch';
import { DiagnosticFilter } from '@/components/diagnostics/DiagnosticFilter';
import { DiagnosticCard } from '@/components/diagnostics/DiagnosticCard';
import { PackageCard } from '@/components/diagnostics/PackageCard';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Modal } from '@/components/common/Modal';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';
import { useToast } from '@/hooks/useToast';

interface TestBookingForm {
  patientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  isHomeSample: boolean;
  address: string;
}

export const DiagnosticsPage: React.FC = () => {
  const toast = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DiagnosticCategory | 'All'>('All');
  const [homeSampleOnly, setHomeSampleOnly] = useState(false);

  const [tests, setTests] = useState<DiagnosticTest[]>([]);
  const [packages, setPackages] = useState<DiagnosticPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Booking Modal
  const [selectedItem, setSelectedItem] = useState<{ name: string; price: number; type: string } | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<TestBookingForm>({
    defaultValues: {
      isHomeSample: true,
    },
  });

  const isHomeSampleSelected = watch('isHomeSample');

  const fetchDiagnostics = useCallback(async () => {
    setIsLoading(true);
    try {
      const testRes = await diagnosticService.getDiagnosticTests({
        query: searchTerm,
        category: selectedCategory,
        homeSampleOnly,
      });
      const pkgRes = await diagnosticService.getDiagnosticPackages(searchTerm);

      setTests(testRes);
      setPackages(pkgRes);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedCategory, homeSampleOnly]);

  useEffect(() => {
    fetchDiagnostics();
  }, [fetchDiagnostics]);

  const handleOpenTestBooking = (test: DiagnosticTest) => {
    setSelectedItem({ name: test.name, price: test.discountPrice, type: 'Diagnostic Test' });
    setIsBookingModalOpen(true);
  };

  const handleOpenPackageBooking = (pkg: DiagnosticPackage) => {
    setSelectedItem({ name: pkg.packageName, price: pkg.discountPrice, type: 'Health Package' });
    setIsBookingModalOpen(true);
  };

  const onConfirmBooking = (data: TestBookingForm) => {
    toast.success(
      `Booking for "${selectedItem?.name}" on ${data.preferredDate} confirmed! Collection team will contact ${data.phone}.`,
      'Diagnostic Booking Received'
    );
    setIsBookingModalOpen(false);
    reset();
  };

  const handleDownloadSampleReport = () => {
    toast.success('Sample NABL Pathology Test Report (PDF) downloaded to your device.', 'Report Downloaded');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            NABL & CAP Accredited Pathology
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            MEDICARE <span className="text-sky-200 font-black">Diagnostics, MRI, CT & Lab Tests</span>
          </h1>
          <p className="text-xs sm:text-sm text-sky-50 font-medium leading-relaxed">
            Book 3T Silent MRI, 128-Slice CT Angiography, 4D Ultrasound, and blood pathology with free doorstep sample collection.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex-1">
            <TestSearch value={searchTerm} onChange={setSearchTerm} />
          </div>
          <Button
            variant="outline"
            onClick={handleDownloadSampleReport}
            leftIcon={<Download className="w-4 h-4" />}
            className="text-white border-teal-500/50 hover:bg-teal-600 hover:text-white shrink-0"
          >
            Download Sample Report
          </Button>
        </div>
      </div>

      {/* 1. Preventive Health Checkup Packages Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-sky-100 pb-3 font-sans">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#00529B]" />
            Preventive Diagnostic Health Packages
          </h2>
          <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
            Up to 60% Savings
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBookPackage={handleOpenPackageBooking} />
          ))}
        </div>
      </div>

      {/* 2. Individual Lab Tests & Imaging Scans Section */}
      <div className="space-y-6 pt-4 font-sans">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900">Lab Tests & Imaging Scans Directory</h2>
          <p className="text-xs text-slate-500 font-medium">Filter by category or toggle home sample collection.</p>
        </div>

        {/* Filter Bar */}
        <DiagnosticFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          homeSampleOnly={homeSampleOnly}
          onHomeSampleToggle={setHomeSampleOnly}
        />

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                <Skeleton className="h-4 w-1/3 rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && tests.length === 0 && (
          <EmptyState
            title="No Diagnostic Tests Found"
            description="No lab test or scan matches your search criteria or category filter."
            actionLabel="Reset Search & Filters"
            onAction={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setHomeSampleOnly(false);
            }}
          />
        )}

        {/* Tests Grid */}
        {!isLoading && tests.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => (
              <DiagnosticCard key={test.id} test={test} onBookTest={handleOpenTestBooking} />
            ))}
          </div>
        )}
      </div>

      {/* Online Test Booking Modal */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={`Book ${selectedItem?.type} — ${selectedItem?.name}`}
        description={`Discounted Fee: ₹${selectedItem?.price}`}
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
            label="Preferred Test Date"
            type="date"
            error={errors.preferredDate?.message}
            {...register('preferredDate', { required: 'Date is required' })}
          />

          <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-navy-900 pt-1">
            <input
              type="checkbox"
              className="w-4 h-4 accent-teal-600 rounded"
              {...register('isHomeSample')}
            />
            <Home className="w-4 h-4 text-teal-600" />
            <span>Request Doorstep Home Sample Collection</span>
          </label>

          {isHomeSampleSelected && (
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

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsBookingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gold" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
              Confirm Test Booking
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
