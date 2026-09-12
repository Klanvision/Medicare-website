import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ShieldCheck,
  Stethoscope,
  UploadCloud,
  FileCheck,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Mail,
  Send,
  Video,
} from 'lucide-react';
import { secondOpinionService } from '@/services/secondOpinionService';
import { UploadedFileMeta } from '@/data/secondOpinionData';
import { ReportUploader } from '@/components/secondOpinion/ReportUploader';
import { SecondOpinionStepper } from '@/components/secondOpinion/SecondOpinionStepper';
import { SecondOpinionTracker } from '@/components/secondOpinion/SecondOpinionTracker';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Card } from '@/components/common/Card';
import { useToast } from '@/hooks/useToast';

interface FormInputs {
  patientName: string;
  phone: string;
  email: string;
  specialty: string;
  primaryDiagnosis: string;
}

export const SecondOpinionPage: React.FC = () => {
  const toast = useToast();

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileMeta[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastCreatedId, setLastCreatedId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    if (uploadedFiles.length === 0) {
      toast.error('Please upload at least one medical report or scan PDF.', 'No Files Attached');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await secondOpinionService.submitSecondOpinion({
        ...data,
        files: uploadedFiles,
      });

      setLastCreatedId(result.trackingId);
      toast.success(
        `Second Opinion Request submitted! Tracking ID: ${result.trackingId}. Panel will review within 24 hours.`,
        'Request Received'
      );
      reset();
      setUploadedFiles([]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Expert Medical Panel
          </span>
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            24-Hour Review
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Expert Second Opinion</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-3xl leading-relaxed">
          Unsure about a major surgery, organ transplant, or cancer treatment recommendation? Get an independent, evidence-based review from MEDICARE senior directors.
        </p>
      </div>

      {/* 1. 6-Stage Care Flow Stepper */}
      <div className="space-y-4">
        <div className="space-y-1">
          <Badge variant="teal" size="sm">Process Flow</Badge>
          <h2 className="text-2xl font-extrabold text-navy-900">How Medical Second Opinion Works</h2>
        </div>
        <SecondOpinionStepper />
      </div>

      {/* 2. Interactive Request Form */}
      <Card accentGoldTop className="p-6 sm:p-10 bg-white space-y-6 shadow-xl border border-gray-200">
        <div className="space-y-1 border-b pb-4">
          <h3 className="text-2xl font-extrabold text-navy-900 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-teal-600" />
            Submit Second Opinion Request
          </h3>
          <p className="text-xs text-gray-500">
            Upload your MRI/CT DICOM scans, pathology reports, and primary doctor diagnosis notes.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Patient Full Name"
              placeholder="Full Name"
              startIcon={<User className="w-4 h-4 text-teal-600" />}
              error={errors.patientName?.message}
              {...register('patientName', { required: 'Patient name is required' })}
            />

            <Input
              label="Contact Phone"
              type="tel"
              placeholder="+91..."
              startIcon={<Phone className="w-4 h-4 text-teal-600" />}
              error={errors.phone?.message}
              {...register('phone', { required: 'Phone is required' })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="patient@example.com"
              startIcon={<Mail className="w-4 h-4 text-teal-600" />}
              error={errors.email?.message}
              {...register('email', { required: 'Email is required' })}
            />

            <Select
              label="Target Medical Specialty"
              {...register('specialty', { required: 'Specialty is required' })}
              options={[
                { value: 'Orthopedics & Joint Surgery', label: 'Orthopedics & Joint Surgery' },
                { value: 'Cardiology & Heart Care', label: 'Cardiology & Heart Care' },
                { value: 'Neurology & Brain Sciences', label: 'Neurology & Brain Sciences' },
                { value: 'Oncology (Cancer Care)', label: 'Oncology (Cancer Care)' },
                { value: 'Gastroenterology & Liver', label: 'Gastroenterology & Liver' },
                { value: 'Organ Transplant', label: 'Organ Transplant' },
              ]}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-navy-900">Current Primary Diagnosis & Recommended Treatment</label>
            <textarea
              rows={3}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              placeholder="E.g. Primary doctor recommended total knee replacement surgery within 2 weeks..."
              {...register('primaryDiagnosis', { required: 'Primary diagnosis is required' })}
            />
            {errors.primaryDiagnosis && <p className="text-xs text-red-600">{errors.primaryDiagnosis.message}</p>}
          </div>

          {/* Secure File Uploader */}
          <div className="space-y-2 pt-2 border-t">
            <label className="text-xs font-extrabold text-navy-900 uppercase tracking-wider block">
              Attach Medical Reports & MRI / CT Scans:
            </label>
            <ReportUploader files={uploadedFiles} onFilesChange={setUploadedFiles} />
          </div>

          {/* Confirmation Box if just submitted */}
          {lastCreatedId && (
            <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-xs text-teal-950 space-y-1">
              <p className="font-extrabold text-sm text-teal-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                Request Received! Your Tracking ID: <span className="font-mono text-navy-900 underline">{lastCreatedId}</span>
              </p>
              <p>Use this tracking ID below to monitor review progress & access your doctor opinion PDF.</p>
            </div>
          )}

          <Button
            type="submit"
            variant="gold"
            size="md"
            disabled={isSubmitting}
            leftIcon={<Send className="w-4 h-4" />}
            className="w-full sm:w-auto py-3.5 font-bold"
          >
            {isSubmitting ? 'Securing & Submitting...' : 'Submit Second Opinion Request'}
          </Button>
        </form>
      </Card>

      {/* 3. Live Request Tracker */}
      <SecondOpinionTracker />
    </div>
  );
};
