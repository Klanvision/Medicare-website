import React, { useState } from 'react';
import { Building2, User, Phone, Users, Activity, CheckCircle, Plus, AlertCircle } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminDepartment } from '@/data/adminData';

interface AddDepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDepartment: (newDept: AdminDepartment) => void;
}

const STATUS_OPTIONS: ('Active' | 'Full Capacity')[] = ['Active', 'Full Capacity'];

export const AddDepartmentModal: React.FC<AddDepartmentModalProps> = ({
  isOpen,
  onClose,
  onAddDepartment,
}) => {
  const { success, error } = useToast();

  const [name, setName] = useState('');
  const [hod, setHod] = useState('');
  const [phone, setPhone] = useState('');
  const [staffCount, setStaffCount] = useState('25');
  const [activeSurgeries, setActiveSurgeries] = useState('3');
  const [status, setStatus] = useState<'Active' | 'Full Capacity'>('Active');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter department name.');
      return;
    }
    if (!hod.trim()) {
      setValidationError('Please enter Head of Department (HOD).');
      return;
    }
    if (!phone.trim()) {
      setValidationError('Please enter contact hotline phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedHod = hod.trim().toLowerCase().startsWith('dr.')
        ? hod.trim()
        : `Dr. ${hod.trim()}`;

      const newDept: AdminDepartment = {
        id: `dept-${Date.now()}`,
        name: name.trim(),
        hod: formattedHod,
        phone: phone.trim(),
        staffCount: Number(staffCount) || 10,
        activeSurgeries: Number(activeSurgeries) || 0,
        status,
      };

      onAddDepartment(newDept);
      success(`Department "${name.trim()}" registered successfully!`);

      // Reset form
      setName('');
      setHod('');
      setPhone('');
      setStaffCount('25');
      setActiveSurgeries('3');
      setStatus('Active');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to create department. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-2 text-navy-950">
          <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Add Clinical Department</h3>
            <p className="text-xs text-gray-500 font-normal">Create a new specialized medical/surgical clinical department</p>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {validationError && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2 font-bold animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Department Name & Head of Department (HOD) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-teal-600" />
              Department Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Gastroenterology & Hepatology"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600" />
              Head of Department (HOD) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Rajiv Patil"
              value={hod}
              onChange={(e) => setHod(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>
        </div>

        {/* Phone Hotline & Staff Count */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              Hotline Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 20 2765 9006"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-teal-600" />
              Clinical Staff Count
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 25"
              value={staffCount}
              onChange={(e) => setStaffCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              Active Surgeries
            </label>
            <input
              type="number"
              min="0"
              placeholder="e.g. 3"
              value={activeSurgeries}
              onChange={(e) => setActiveSurgeries(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>
        </div>

        {/* Operating Status */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
            Operating Capacity Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Active' | 'Full Capacity')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold text-navy-950"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="teal"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Create Department
          </Button>
        </div>
      </form>
    </Modal>
  );
};
