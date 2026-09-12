import React, { useState, useEffect } from 'react';
import { Award, Stethoscope, FileText, Activity, CheckCircle, Plus, AlertCircle, Sparkles } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminSpecialty } from '@/data/adminData';

interface AddSpecialtyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSpecialty: (newSpecialty: AdminSpecialty) => void;
}

const STATUS_OPTIONS: ('Active' | 'Inactive')[] = ['Active', 'Inactive'];

export const AddSpecialtyModal: React.FC<AddSpecialtyModalProps> = ({
  isOpen,
  onClose,
  onAddSpecialty,
}) => {
  const { success, error } = useToast();

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [isCOE, setIsCOE] = useState(false);
  const [doctorsCount, setDoctorsCount] = useState('8');
  const [treatmentsCount, setTreatmentsCount] = useState('6');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Auto-generate slug when name changes
  useEffect(() => {
    if (name) {
      const generatedSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      setSlug(generatedSlug);
    }
  }, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter specialty name.');
      return;
    }
    if (!slug.trim()) {
      setValidationError('Please enter URL slug identifier.');
      return;
    }
    if (!description.trim()) {
      setValidationError('Please enter a short description for the specialty.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newSpecialty: AdminSpecialty = {
        id: `spec-${Date.now()}`,
        name: name.trim(),
        slug: slug.trim().toLowerCase(),
        isCOE,
        doctorsCount: Number(doctorsCount) || 1,
        treatmentsCount: Number(treatmentsCount) || 1,
        description: description.trim(),
        status,
      };

      onAddSpecialty(newSpecialty);
      success(`Medical Specialty "${name.trim()}" added successfully!`);

      // Reset form
      setName('');
      setSlug('');
      setIsCOE(false);
      setDoctorsCount('8');
      setTreatmentsCount('6');
      setDescription('');
      setStatus('Active');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to add specialty. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-2 text-navy-950">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Add Medical Specialty</h3>
            <p className="text-xs text-gray-500 font-normal">Register a new specialty catalog & Centre of Excellence</p>
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

        {/* Specialty Name & Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              Specialty Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rheumatology & Autoimmune Care"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-teal-600" />
              URL Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. rheumatology"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-mono"
            />
          </div>
        </div>

        {/* Centre of Excellence (COE) Flag & Counts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Centre of Excellence (COE)
            </label>
            <div className="flex items-center h-10 px-3 rounded-xl border border-gray-300 bg-gray-50/50">
              <label className="flex items-center gap-2 cursor-pointer select-none font-bold text-navy-950">
                <input
                  type="checkbox"
                  checked={isCOE}
                  onChange={(e) => setIsCOE(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                />
                <span>Designate as COE</span>
              </label>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              Assigned Doctors
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 8"
              value={doctorsCount}
              onChange={(e) => setDoctorsCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              Procedures & Treatments
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 6"
              value={treatmentsCount}
              onChange={(e) => setTreatmentsCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>
        </div>

        {/* Short Description */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            Clinical Description / Overview <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Brief overview of clinical services, sub-specialties, and surgical capabilities provided..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
          />
        </div>

        {/* Operating Status */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
            Catalog Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Active' | 'Inactive')}
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
            variant="gold"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Add Specialty
          </Button>
        </div>
      </form>
    </Modal>
  );
};
