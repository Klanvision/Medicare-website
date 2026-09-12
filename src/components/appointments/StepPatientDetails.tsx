import React from 'react';
import { User, Phone, Mail, FileText } from 'lucide-react';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';

interface StepPatientDetailsProps {
  patientDetails: {
    fullName: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    phone: string;
    email: string;
    reasonForVisit: string;
  };
  onChange: (field: string, val: any) => void;
  errors: Record<string, string>;
}

export const StepPatientDetails: React.FC<StepPatientDetailsProps> = ({
  patientDetails,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 6: Patient Information</h3>
        <p className="text-xs text-gray-500">Provide patient details for medical records & OPD registration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Patient Name"
          placeholder="e.g. Rahul Sharma"
          startIcon={<User className="w-4 h-4 text-teal-600" />}
          value={patientDetails.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          error={errors.fullName}
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Age (Years)"
            type="number"
            placeholder="e.g. 45"
            value={patientDetails.age || ''}
            onChange={(e) => onChange('age', Number(e.target.value))}
            error={errors.age}
          />

          <Select
            label="Gender"
            value={patientDetails.gender}
            onChange={(e) => onChange('gender', e.target.value)}
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' },
            ]}
          />
        </div>

        <Input
          label="Contact Phone Number"
          type="tel"
          placeholder="+91 98765 43210"
          startIcon={<Phone className="w-4 h-4 text-teal-600" />}
          value={patientDetails.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          error={errors.phone}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="patient@example.com"
          startIcon={<Mail className="w-4 h-4 text-teal-600" />}
          value={patientDetails.email}
          onChange={(e) => onChange('email', e.target.value)}
          error={errors.email}
        />

        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-semibold text-navy-900 flex items-center gap-1">
            <FileText className="w-4 h-4 text-teal-600" /> Reason for Visit / Medical Notes (Optional)
          </label>
          <textarea
            rows={3}
            className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            placeholder="Briefly describe symptoms, previous diagnosis, or consultation notes..."
            value={patientDetails.reasonForVisit}
            onChange={(e) => onChange('reasonForVisit', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
