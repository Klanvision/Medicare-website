import React from 'react';
import { useForm } from 'react-hook-form';
import { Globe, User, Mail, Phone, FileText, CheckCircle2, Plane } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';

interface InternationalEnquiryInputs {
  patientName: string;
  country: string;
  email: string;
  whatsappPhone: string;
  specialty: string;
  plannedArrival: string;
  medicalNotes: string;
}

export const InternationalEnquiryForm: React.FC = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InternationalEnquiryInputs>();

  const onSubmit = (data: InternationalEnquiryInputs) => {
    toast.success(
      `Fast-Track International Medical Opinion Request submitted for ${data.patientName} (${data.country})! M-Visa Coordinator will contact ${data.whatsappPhone} within 12 hours.`,
      'Medical Opinion Request Received'
    );
    reset();
  };

  return (
    <Card accentGoldTop className="p-6 sm:p-10 bg-white space-y-6 shadow-xl border border-gray-200">
      <div className="space-y-1 border-b pb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-6 h-6 text-teal-600" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
            Fast-Track Medical Opinion & Cost Estimate
          </h3>
        </div>
        <p className="text-xs text-gray-500">
          Upload reports to receive a free treatment plan, cost estimate, and Medical Visa Invitation Letter (M-Visa) within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Patient Full Name"
            placeholder="Name as printed on Passport"
            startIcon={<User className="w-4 h-4 text-teal-600" />}
            error={errors.patientName?.message}
            {...register('patientName', { required: 'Patient name is required' })}
          />

          <Select
            label="Country of Residence / Passport"
            {...register('country', { required: 'Country is required' })}
            options={[
              { value: 'United Arab Emirates', label: 'United Arab Emirates (UAE)' },
              { value: 'Saudi Arabia', label: 'Saudi Arabia' },
              { value: 'Oman', label: 'Oman' },
              { value: 'Kuwait', label: 'Kuwait' },
              { value: 'Qatar', label: 'Qatar' },
              { value: 'Kenya', label: 'Kenya' },
              { value: 'Nigeria', label: 'Nigeria' },
              { value: 'Uzbekistan', label: 'Uzbekistan' },
              { value: 'Kazakhstan', label: 'Kazakhstan' },
              { value: 'United Kingdom', label: 'United Kingdom' },
              { value: 'United States', label: 'United States' },
              { value: 'Other Country', label: 'Other International Country' },
            ]}
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

          <Input
            label="WhatsApp Contact Number (with Country Code)"
            type="tel"
            placeholder="+971..."
            startIcon={<Phone className="w-4 h-4 text-teal-600" />}
            error={errors.whatsappPhone?.message}
            {...register('whatsappPhone', { required: 'WhatsApp number is required' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Target Medical Treatment"
            {...register('specialty')}
            options={[
              { value: 'Robotic Cardiac Bypass & Valve Replacement', label: 'Robotic Cardiac & Heart Surgery' },
              { value: 'Organ Transplant (Liver / Kidney)', label: 'Organ Transplant (Liver / Kidney)' },
              { value: 'Neuro & Brain Tumor Surgery', label: 'Neuro & Brain Tumor Surgery' },
              { value: 'Robotic Joint Replacement (Knee/Hip)', label: 'Robotic Joint Replacement' },
              { value: 'Proton Radiation Cancer Care', label: 'Proton Radiation Cancer Care' },
              { value: 'Comprehensive Executive Health Checkup', label: 'Comprehensive Health Checkup' },
            ]}
          />

          <Input
            label="Tentative Arrival Month"
            type="date"
            {...register('plannedArrival')}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-navy-900">Medical History & Current Symptoms</label>
          <textarea
            rows={3}
            className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            placeholder="Briefly describe your diagnosis, surgical history, or specific treatment questions..."
            {...register('medicalNotes')}
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          size="md"
          leftIcon={<Plane className="w-4 h-4" />}
          className="w-full sm:w-auto py-3.5 font-bold"
        >
          Request Free Medical Opinion & M-Visa Letter
        </Button>
      </form>
    </Card>
  );
};
