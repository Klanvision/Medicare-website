import React from 'react';
import { useForm } from 'react-hook-form';
import { ShieldCheck, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';

interface InsuranceEnquiryInputs {
  patientName: string;
  phone: string;
  email: string;
  insurerName: string;
  policyNo: string;
  hospitalBranch: string;
  queryNotes: string;
}

export const InsuranceEnquiryForm: React.FC = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InsuranceEnquiryInputs>();

  const onSubmit = (data: InsuranceEnquiryInputs) => {
    toast.success(
      `Pre-Authorisation Inquiry for Policy "${data.policyNo}" submitted! TPA Coordinator will call ${data.phone} within 15 minutes.`,
      'TPA Desk Enquiry Received'
    );
    reset();
  };

  return (
    <Card accentGoldTop className="p-6 sm:p-8 bg-white space-y-6 shadow-md border border-gray-200">
      <div className="space-y-1 border-b pb-4">
        <h3 className="text-xl font-extrabold text-navy-900 flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-teal-600" />
          Insurance & TPA Help Desk Enquiry
        </h3>
        <p className="text-xs text-gray-500">
          Verify cashless eligibility, policy sum insured, or pre-authorization approval in advance.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Patient Name"
            placeholder="Full Name as on Policy"
            startIcon={<User className="w-4 h-4 text-teal-600" />}
            error={errors.patientName?.message}
            {...register('patientName', { required: 'Patient name is required' })}
          />

          <Input
            label="Contact Mobile"
            type="tel"
            placeholder="+91..."
            startIcon={<Phone className="w-4 h-4 text-teal-600" />}
            error={errors.phone?.message}
            {...register('phone', { required: 'Phone is required' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Empaneled Insurance Provider"
            {...register('insurerName', { required: 'Insurers choice is required' })}
            options={[
              { value: 'Star Health Insurance', label: 'Star Health Insurance' },
              { value: 'HDFC ERGO General Insurance', label: 'HDFC ERGO General Insurance' },
              { value: 'ICICI Lombard Insurance', label: 'ICICI Lombard Insurance' },
              { value: 'Niva Bupa Health Insurance', label: 'Niva Bupa Health Insurance' },
              { value: 'Care Health Insurance (Religare)', label: 'Care Health Insurance' },
              { value: 'Bajaj Allianz Insurance', label: 'Bajaj Allianz Insurance' },
              { value: 'New India Assurance', label: 'New India Assurance' },
              { value: 'SBI General Insurance', label: 'SBI General Insurance' },
              { value: 'Other / Non-Empaneled TPA', label: 'Other / Non-Empaneled TPA' },
            ]}
          />

          <Input
            label="Policy / TPA Card Number"
            placeholder="P/1234/..."
            startIcon={<FileText className="w-4 h-4 text-teal-600" />}
            error={errors.policyNo?.message}
            {...register('policyNo', { required: 'Policy number is required' })}
          />
        </div>

        <Select
          label="Preferred Cashless Hospital Branch"
          {...register('hospitalBranch')}
          options={[
            { value: 'Pune Main Super Speciality Hospital', label: 'Pune Main Super Speciality Hospital (Sector 15)' },
            { value: 'Pimpri OPD & Surgical Clinic', label: 'Pimpri OPD & Surgical Clinic Branch' },
            { value: 'Emergency & Trauma Care Unit', label: '24/7 Emergency & Trauma Care Unit' },
          ]}
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-navy-900">Treatment / Surgical Admission Query</label>
          <textarea
            rows={3}
            className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            placeholder="Mention planned surgery, doctor advice, or query regarding room rent caps..."
            {...register('queryNotes')}
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          size="md"
          leftIcon={<CheckCircle2 className="w-4 h-4" />}
          className="w-full sm:w-auto py-3 font-bold"
        >
          Submit Pre-Auth Query to TPA Desk
        </Button>
      </form>
    </Card>
  );
};
