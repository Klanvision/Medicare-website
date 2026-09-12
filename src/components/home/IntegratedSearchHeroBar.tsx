import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const IntegratedSearchHeroBar: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearch = () => {
    navigate(`/doctors?query=${encodeURIComponent(searchQuery)}&specialty=${encodeURIComponent(selectedSpecialty)}&location=${encodeURIComponent(selectedLocation)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 sm:p-6 space-y-4">
        <h3 className="text-base font-black text-navy-950">
          Find Doctors, Specialities, Treatments & Hospitals
        </h3>

        {/* Inputs Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Keyword Input */}
          <div className="md:col-span-5 relative">
            <input
              type="text"
              placeholder="Search by Doctor, Speciality, Treatment, Condition or Hospital"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3.5 pr-10 py-2.5 bg-gray-50 text-navy-950 rounded-xl text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium border border-gray-200"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
          </div>

          {/* Select Speciality */}
          <div className="md:col-span-3 relative">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full pl-3.5 pr-8 py-2.5 bg-gray-50 text-navy-950 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none font-medium border border-gray-200"
            >
              <option value="">Select Speciality</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopaedics">Orthopaedics</option>
              <option value="Oncology">Oncology</option>
              <option value="Gynaecology">Gynaecology</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
          </div>

          {/* Select Location */}
          <div className="md:col-span-2 relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-3.5 pr-8 py-2.5 bg-gray-50 text-navy-950 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none font-medium border border-gray-200"
            >
              <option value="">Select Location</option>
              <option value="Pune">Pune Sector 15</option>
              <option value="Mumbai">Mumbai Bandra</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
          </div>

          {/* Search Button */}
          <div className="md:col-span-2">
            <Button
              variant="teal"
              fullWidth
              size="md"
              onClick={handleSearch}
              className="py-2.5 font-extrabold bg-[#0d9488] hover:bg-[#0f766e] text-xs shadow-md"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Popular Searches Pills */}
        <div className="flex items-center gap-2 pt-1 flex-wrap text-xs">
          <span className="text-[11px] font-bold text-gray-500">Popular Searches:</span>
          {['Cardiology', 'Orthopaedics', 'Neurology', 'Oncology', 'Gynaecology', 'ENT', 'Gastroenterology', 'Pediatrics'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedSpecialty(tag);
                navigate(`/doctors?specialty=${tag}`);
              }}
              className="px-2.5 py-1 bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-lg transition-colors text-[11px] font-medium border border-gray-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedSearchHeroBar;
