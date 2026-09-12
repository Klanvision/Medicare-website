import React, { useState } from 'react';
import {
  Stethoscope, User, Building, Award, Clock, Banknote,
  CheckCircle, Mail, Phone, Plus, AlertCircle
} from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminDoctor } from '@/data/adminData';
import { Doctor, DOCTORS_DATA } from '@/data/doctorData';

interface AddDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDoctor: (newDoctor: AdminDoctor, fullDoctor?: Doctor) => void;
}

const SPECIALTY_OPTIONS = [
  'Cardiology',
  'Oncology',
  'Orthopedics',
  'Neurology',
  'Emergency Medicine',
  'Pediatrics',
  'Gastroenterology',
  'Dermatology',
  'General Surgery',
  'Nephrology',
  'Urology',
  'Pulmonology',
  'ENT',
  'Gynecology & Obstetrics',
  'Psychiatry',
];

const HOSPITAL_OPTIONS = [
  'Wakad Main Campus',
  'Baner Hub',
  'Pimpri Critical Care',
  'Hadapsar Campus',
];

export const AddDoctorModal: React.FC<AddDoctorModalProps> = ({
  isOpen,
  onClose,
  onAddDoctor,
}) => {
  const { success, error } = useToast();

  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState(SPECIALTY_OPTIONS[0]);
  const [hospital, setHospital] = useState(HOSPITAL_OPTIONS[0]);
  const [qualification, setQualification] = useState('');
  const [experienceYears, setExperienceYears] = useState('10');
  const [fee, setFee] = useState('1200');
  const [status, setStatus] = useState<'Active' | 'On Leave' | 'Pending Verification'>('Active');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Form Validation
    if (!name.trim()) {
      setValidationError('Please enter doctor name.');
      return;
    }
    if (!qualification.trim()) {
      setValidationError('Please enter doctor qualifications (e.g. MBBS, MD).');
      return;
    }
    if (!fee || Number(fee) <= 0) {
      setValidationError('Please enter a valid OPD consultation fee.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedName = name.trim().toLowerCase().startsWith('dr.')
        ? name.trim()
        : `Dr. ${name.trim()}`;

      const doctorId = `doc-admin-${Date.now()}`;

      const adminDoctor: AdminDoctor = {
        id: doctorId,
        name: formattedName,
        specialty,
        hospital,
        qualification: qualification.trim(),
        experience: `${experienceYears || '5'} Yrs`,
        fee: Number(fee),
        status,
        verified: true,
      };

      // Create full Doctor object for public directory & booking integration
      const fullDoctor: Doctor = {
        id: doctorId,
        name: formattedName,
        photoUrl: gender === 'Female'
          ? 'https://images.unsplash.com/photo-1594824813566-88855ce78961?auto=format&fit=crop&w=400&q=80'
          : 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
        specialty,
        qualification: qualification.trim(),
        experienceYears: Number(experienceYears) || 5,
        hospital: `MEDICARE ${hospital}`,
        location: hospital,
        city: 'Pune',
        gender,
        fee: Number(fee),
        rating: 4.9,
        reviewCount: 1,
        reviewsCount: 1,
        consultationMode: 'In-person',
        consultationModes: ['In-person', 'Video'],
        availableToday: true,
        nextSlot: 'Today at 04:00 PM',
        nextAvailableSlot: 'Today at 04:00 PM',
        availability: status === 'Active' ? 'Available Today' : 'On Leave',
        expertise: [specialty, 'Clinical OPD', 'Specialist Care'],
        bio: `${formattedName} is a Senior ${specialty} Specialist practicing at MEDICARE ${hospital} with ${experienceYears} years of clinical experience.`,
        education: [
          { degree: qualification.trim(), institution: 'BJ Medical College', year: '2010' },
        ],
        awards: ['Healthcare Excellence Award'],
        languages: ['English', 'Hindi', 'Marathi'],
        opdSchedule: [
          { day: 'Mon - Sat', time: '10:00 AM - 05:00 PM', location: `MEDICARE ${hospital}`, room: 'OPD Suite 204' },
        ],
        availableSlots: [
          { dateValue: new Date().toISOString().split('T')[0], dateLabel: 'Today', slots: ['10:00 AM', '11:30 AM', '04:00 PM', '05:30 PM'] },
        ],
        reviews: [
          { id: `rev-${Date.now()}`, patientName: 'Admin Verification', rating: 5, date: 'Today', comment: 'Verified senior doctor added via hospital administration portal.' },
        ],
      };

      // Add to public doctor list array in memory
      DOCTORS_DATA.unshift(fullDoctor);

      onAddDoctor(adminDoctor, fullDoctor);

      success(`${formattedName} registered and added to hospital roster!`);
      
      // Reset form
      setName('');
      setQualification('');
      setExperienceYears('10');
      setFee('1200');
      setEmail('');
      setPhone('');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to add doctor. Please try again.');
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
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Add New Doctor</h3>
            <p className="text-xs text-gray-500 font-normal">Register a new specialist physician to MEDICARE hospital network</p>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5 text-xs">
        {validationError && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2 font-bold animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Doctor Name & Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600" />
              Doctor Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Rajesh Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Specialty & Hospital Campus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              Specialty Department <span className="text-red-500">*</span>
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            >
              {SPECIALTY_OPTIONS.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-teal-600" />
              Hospital Campus <span className="text-red-500">*</span>
            </label>
            <select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            >
              {HOSPITAL_OPTIONS.map((hosp) => (
                <option key={hosp} value={hosp}>
                  {hosp}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Qualifications & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              Medical Qualifications <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. MBBS, MD, DM (Cardiology)"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              Experience (Years)
            </label>
            <input
              type="number"
              min="1"
              max="50"
              placeholder="e.g. 15"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            />
          </div>
        </div>

        {/* Consultation Fee & Verification Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Banknote className="w-3.5 h-3.5 text-amber-600" />
              OPD Fee (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              min="100"
              step="50"
              placeholder="e.g. 1200"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50 font-bold text-navy-950"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
              Verification Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as 'Active' | 'On Leave' | 'Pending Verification')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            >
              <option value="Active">Active (Verified & Operational)</option>
              <option value="Pending Verification">Pending Verification</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
        </div>

        {/* Optional Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-gray-500" />
              Contact Phone (Optional)
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98220 11223"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-gray-500" />
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. doctor@medicare.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            />
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
            variant="gold"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Register Doctor
          </Button>
        </div>
      </form>
    </Modal>
  );
};
