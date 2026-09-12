import React, { useState } from 'react';
import { Search, Star, Check } from 'lucide-react';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';
import { Input } from '@/components/common/Input';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';

interface StepDoctorSelectProps {
  selectedDoctor: Doctor | null;
  onSelectDoctor: (doctor: Doctor) => void;
}

export const StepDoctorSelect: React.FC<StepDoctorSelectProps> = ({
  selectedDoctor,
  onSelectDoctor,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Pediatrics'];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.specialty === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 1: Select Your Doctor</h3>
        <p className="text-xs text-gray-500">Choose a specialist consultant for your appointment.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <Input
          placeholder="Filter doctor by name or specialty..."
          startIcon={<Search className="w-4 h-4 text-teal-600" />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />

        <div className="flex flex-wrap gap-1.5">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedDept === dept
                  ? 'bg-teal-600 text-white shadow-2xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doc) => {
          const isSelected = selectedDoctor?.id === doc.id;

          return (
            <Card
              key={doc.id}
              onClick={() => onSelectDoctor(doc)}
              className={`p-4 cursor-pointer transition-all border-2 flex items-center justify-between gap-4 ${
                isSelected
                  ? 'border-gold-600 bg-gold-50/20 shadow-md ring-2 ring-gold-200'
                  : 'border-gray-200 hover:border-teal-500/50 bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={doc.photoUrl}
                  alt={doc.name}
                  className="w-16 h-16 rounded-xl object-cover object-top border shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Badge variant="teal" size="sm">{doc.specialty}</Badge>
                    <span className="text-[11px] font-bold text-gold-700 flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-gold-500 text-gold-500" /> {doc.rating}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">{doc.name}</h4>
                  <p className="text-[11px] text-gray-500">{doc.experienceYears}+ Yrs Exp • Fee: ₹{doc.fee}</p>
                </div>
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center border ${
                  isSelected ? 'bg-gold-600 text-navy-950 border-gold-600' : 'border-gray-300 bg-gray-50'
                }`}
              >
                {isSelected && <Check className="w-4 h-4" />}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
