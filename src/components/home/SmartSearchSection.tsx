import React, { useState } from 'react';
import { Search, Stethoscope, HeartPulse, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { SPECIALTIES_DATA, FEATURED_DOCTORS_DATA, TREATMENTS_DATA } from '@/data/homeData';

export const SmartSearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'specialties' | 'treatments'>('doctors');
  const [query, setQuery] = useState('');

  // Filtered lists based on search term
  const filteredDoctors = FEATURED_DOCTORS_DATA.filter(
    (d) => d.name.toLowerCase().includes(query.toLowerCase()) || d.department.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSpecialties = SPECIALTIES_DATA.filter(
    (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTreatments = TREATMENTS_DATA.filter(
    (t) => t.title.toLowerCase().includes(query.toLowerCase()) || t.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="smart-search" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <Card className="p-6 sm:p-8 bg-white shadow-2xl border-t-4 border-t-gold-600">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4">
            <div>
              <Badge variant="gold" size="sm">Smart Medical Finder</Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">
                Search Doctors, Specialties & Advanced Treatments
              </h2>
            </div>

            {/* Tab Selector */}
            <div className="flex items-center gap-1 bg-sky-50 p-1 rounded-xl w-full sm:w-auto border border-sky-100">
              <button
                onClick={() => setActiveTab('doctors')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex-1 sm:flex-initial ${
                  activeTab === 'doctors'
                    ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#00529B]'
                }`}
              >
                Doctors
              </button>
              <button
                onClick={() => setActiveTab('specialties')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex-1 sm:flex-initial ${
                  activeTab === 'specialties'
                    ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#00529B]'
                }`}
              >
                Specialties
              </button>
              <button
                onClick={() => setActiveTab('treatments')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex-1 sm:flex-initial ${
                  activeTab === 'treatments'
                    ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#00529B]'
                }`}
              >
                Treatments
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder={
                activeTab === 'doctors'
                  ? 'Search doctor by name, degree, or specialty (e.g. Dr. Deshmukh, Cardiology)...'
                  : activeTab === 'specialties'
                  ? 'Search specialty (e.g. Cardiology, Orthopedics, Neurology)...'
                  : 'Search treatment (e.g. Robotic Knee, Angioplasty, Laser Stone)...'
              }
              startIcon={<Search className="w-5 h-5 text-teal-600" />}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-base py-3"
            />
            <Button variant="gold" className="px-8 shrink-0" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Search
            </Button>
          </div>

          {/* Realtime Search Results Preview */}
          {query.trim().length > 0 && (
            <div className="pt-4 border-t space-y-3 animate-in fade-in duration-200">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Matching Search Results ({activeTab})
              </h4>

              {activeTab === 'doctors' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredDoctors.map((doc) => (
                    <div key={doc.id} className="p-3 bg-gray-50 rounded-xl flex items-center justify-between border">
                      <div>
                        <p className="text-sm font-bold text-navy-900">{doc.name}</p>
                        <p className="text-xs text-teal-600 font-semibold">{doc.department} • {doc.experienceYears} Yrs Exp.</p>
                      </div>
                      <a href="#appointments">
                        <Button variant="teal" size="sm">Book Slot</Button>
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'specialties' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {filteredSpecialties.map((spec) => (
                    <div key={spec.id} className="p-3 bg-gray-50 rounded-xl border">
                      <p className="text-sm font-bold text-navy-900">{spec.name}</p>
                      <p className="text-xs text-gray-500">{spec.shortDesc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'treatments' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredTreatments.map((tr) => (
                    <div key={tr.id} className="p-3 bg-gray-50 rounded-xl border">
                      <p className="text-sm font-bold text-navy-900">{tr.title}</p>
                      <p className="text-xs text-gold-600 font-semibold">{tr.category} • Tech: {tr.techUsed}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};
