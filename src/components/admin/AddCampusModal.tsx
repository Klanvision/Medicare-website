import React, { useState } from 'react';
import { Building2, MapPin, Bed, Activity, ShieldAlert, CheckCircle, Plus, AlertCircle } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminHospital } from '@/data/adminData';

interface AddCampusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCampus: (newCampus: AdminHospital) => void;
}

const TRAUMA_LEVELS = ['Level-1', 'Level-2', 'Level-3'];
const STATUS_OPTIONS: ('Operational' | 'Maintenance')[] = ['Operational', 'Maintenance'];

export const AddCampusModal: React.FC<AddCampusModalProps> = ({
  isOpen,
  onClose,
  onAddCampus,
}) => {
  const { success, error } = useToast();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [beds, setBeds] = useState('150');
  const [icuBeds, setIcuBeds] = useState('40');
  const [doctorsCount, setDoctorsCount] = useState('35');
  const [traumaLevel, setTraumaLevel] = useState('Level-1');
  const [status, setStatus] = useState<'Operational' | 'Maintenance'>('Operational');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter campus name.');
      return;
    }
    if (!location.trim()) {
      setValidationError('Please enter campus location.');
      return;
    }
    if (!beds || Number(beds) <= 0) {
      setValidationError('Please enter total bed capacity.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedName = name.trim().toLowerCase().startsWith('medicare')
        ? name.trim()
        : `MEDICARE ${name.trim()}`;

      const newCampus: AdminHospital = {
        id: `hsp-${Date.now()}`,
        name: formattedName,
        location: location.trim(),
        beds: Number(beds),
        icuBeds: Number(icuBeds) || 10,
        doctorsCount: Number(doctorsCount) || 15,
        traumaLevel,
        status,
      };

      onAddCampus(newCampus);
      success(`${formattedName} registered to hospital network successfully!`);

      // Reset form
      setName('');
      setLocation('');
      setBeds('150');
      setIcuBeds('40');
      setDoctorsCount('35');
      setTraumaLevel('Level-1');
      setStatus('Operational');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to add campus. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-2 text-navy-950">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Add Hospital Campus</h3>
            <p className="text-xs text-gray-500 font-normal">Register a new quaternary healthcare center or satellite campus</p>
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

        {/* Campus Name & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-teal-600" />
              Campus Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kothrud Super Specialty Center"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              Location / Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kothrud, Pune"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>
        </div>

        {/* Bed Capacity, ICU Beds & Resident Doctors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-teal-600" />
              Total Beds <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="10"
              placeholder="e.g. 200"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-red-600" />
              ICU Beds <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="2"
              placeholder="e.g. 45"
              value={icuBeds}
              onChange={(e) => setIcuBeds(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              Doctors Count
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 40"
              value={doctorsCount}
              onChange={(e) => setDoctorsCount(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold"
            />
          </div>
        </div>

        {/* Trauma Rating & Operational Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
              Trauma Center Rating
            </label>
            <select
              value={traumaLevel}
              onChange={(e) => setTraumaLevel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold text-navy-950"
            >
              {TRAUMA_LEVELS.map((t) => (
                <option key={t} value={t}>
                  {t} (Emergency Dispatch)
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
              Operating Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as 'Operational' | 'Maintenance')}
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
            Register Campus
          </Button>
        </div>
      </form>
    </Modal>
  );
};
