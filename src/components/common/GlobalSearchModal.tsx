import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Input } from '@/components/common/Input';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';
import { HOSPITALS_EXTENDED_DATA, HospitalBranchExt } from '@/data/hospitalData';
import { SPECIALTIES_DATA, Specialty } from '@/data/specialtyData';
import { HEALTH_ARTICLES_DATA, HealthArticle } from '@/data/healthLibraryData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [hospitals, setHospitals] = useState<HospitalBranchExt[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [articles, setArticles] = useState<HealthArticle[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setDoctors([]);
      setHospitals([]);
      setSpecialties([]);
      setArticles([]);
      return;
    }

    const q = query.toLowerCase().trim();

    setDoctors(DOCTORS_DATA.filter((d: Doctor) => d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q)).slice(0, 3));
    setHospitals(HOSPITALS_EXTENDED_DATA.filter((h: HospitalBranchExt) => h.name.toLowerCase().includes(q) || h.city.toLowerCase().includes(q)).slice(0, 3));
    setSpecialties(SPECIALTIES_DATA.filter((s: Specialty) => s.name.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)).slice(0, 3));
    setArticles(HEALTH_ARTICLES_DATA.filter((a: HealthArticle) => a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)).slice(0, 3));
  }, [query]);

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
    setQuery('');
  };

  const totalResults = doctors.length + hospitals.length + specialties.length + articles.length;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search MEDICARE" description="Unified Search across Doctors, Hospitals, Specialties, Treatments & Health Articles">
      <div className="space-y-4">
        <Input
          placeholder="Type doctor name, specialty, condition, hospital or article title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          startIcon={<Search className="w-4 h-4 text-teal-600" />}
          endIcon={
            query ? (
              <button onClick={() => setQuery('')} className="text-gray-400 hover:text-navy-900">
                <X className="w-4 h-4" />
              </button>
            ) : undefined
          }
          className="text-sm"
        />

        {!query.trim() && (
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Popular Searches:</span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['Cardiology', 'Robotic Knee Surgery', '3T MRI', 'Dr. Anand Deshmukh', 'Emergency Hospital', 'Fatty Liver'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-gray-100 hover:bg-teal-50 hover:text-teal-700 rounded-full font-semibold transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {query.trim() && totalResults === 0 && (
          <p className="text-xs text-gray-500 text-center py-6">No matches found for "{query}". Try searching by department name.</p>
        )}

        {/* Results Grouped */}
        {query.trim() && totalResults > 0 && (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {/* Doctors */}
            {doctors.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-teal-700 uppercase tracking-wider block">Doctors ({doctors.length})</span>
                {doctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => handleSelect(`/doctors/${doc.id}`)}
                    className="p-3 bg-gray-50 hover:bg-teal-50 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={doc.photoUrl} alt={doc.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-navy-900">{doc.name}</h4>
                        <p className="text-[11px] text-teal-700">{doc.specialty}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-600" />
                  </div>
                ))}
              </div>
            )}

            {/* Hospitals */}
            {hospitals.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-teal-700 uppercase tracking-wider block">Hospitals ({hospitals.length})</span>
                {hospitals.map((hosp) => (
                  <div
                    key={hosp.id}
                    onClick={() => handleSelect(`/hospitals/${hosp.id}`)}
                    className="p-3 bg-gray-50 hover:bg-teal-50 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">{hosp.name}</h4>
                      <p className="text-[11px] text-gray-500">{hosp.address}, {hosp.city}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-600" />
                  </div>
                ))}
              </div>
            )}

            {/* Specialties */}
            {specialties.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-teal-700 uppercase tracking-wider block">Specialties ({specialties.length})</span>
                {specialties.map((spec) => (
                  <div
                    key={spec.slug}
                    onClick={() => handleSelect(`/specialities/${spec.slug}`)}
                    className="p-3 bg-gray-50 hover:bg-teal-50 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">{spec.name}</h4>
                      <p className="text-[11px] text-gray-500 line-clamp-1">{spec.shortDesc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-600" />
                  </div>
                ))}
              </div>
            )}

            {/* Articles */}
            {articles.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-teal-700 uppercase tracking-wider block">Health Articles ({articles.length})</span>
                {articles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => handleSelect('/health-library')}
                    className="p-3 bg-gray-50 hover:bg-teal-50 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-navy-900 line-clamp-1">{art.title}</h4>
                      <p className="text-[11px] text-gray-500">{art.category} • {art.type}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-600" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
