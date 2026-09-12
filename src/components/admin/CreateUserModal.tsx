import React, { useState } from 'react';
import { User, Mail, Phone, ShieldCheck, CheckCircle, Plus, AlertCircle } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminUser } from '@/data/adminData';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (newUser: AdminUser) => void;
}

const ROLE_OPTIONS: ('Patient' | 'Doctor' | 'Staff' | 'Admin')[] = [
  'Patient',
  'Doctor',
  'Staff',
  'Admin',
];

const STATUS_OPTIONS: ('Active' | 'Inactive' | 'Suspended')[] = [
  'Active',
  'Inactive',
  'Suspended',
];

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
  onAddUser,
}) => {
  const { success, error } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Patient' | 'Doctor' | 'Staff' | 'Admin'>('Patient');
  const [status, setStatus] = useState<'Active' | 'Inactive' | 'Suspended'>('Active');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setValidationError('Please enter a phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newUser: AdminUser = {
        id: `usr-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        role,
        status,
        registeredDate: new Date().toISOString().split('T')[0],
        lastLogin: 'Just now',
      };

      onAddUser(newUser);
      success(`User account for ${name.trim()} created successfully!`);

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setRole('Patient');
      setStatus('Active');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to create user. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      title={
        <div className="flex items-center gap-2 text-navy-950">
          <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Create User Account</h3>
            <p className="text-xs text-gray-500 font-normal">Register a new patient, doctor, staff, or admin user</p>
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

        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-teal-600" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-teal-600" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. rajesh.s@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
          />
        </div>

        {/* Role & Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              User Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold text-navy-950"
            >
              {ROLE_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
              Account Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
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
            Create User
          </Button>
        </div>
      </form>
    </Modal>
  );
};
