import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Stethoscope, Award, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

export const DoctorsPagePlaceholder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Anand Deshmukh',
      degree: 'MD, DM (Cardiology), FACC',
      dept: 'Cardiology',
      exp: '18+ Years Exp.',
      rating: '4.9/5',
    },
    {
      id: 2,
      name: 'Dr. Sunita Kulkarni',
      degree: 'MS, MCh (Neurosurgery)',
      dept: 'Neurology',
      exp: '15+ Years Exp.',
      rating: '4.8/5',
    },
    {
      id: 3,
      name: 'Dr. Rajesh Verma',
      degree: 'MS (Ortho), Fellowship Robotic Surgery (UK)',
      dept: 'Orthopedics',
      exp: '20+ Years Exp.',
      rating: '5.0/5',
    },
    {
      id: 4,
      name: 'Dr. Meera Joshi',
      degree: 'MD (Medical Oncology), DNB',
      dept: 'Oncology',
      exp: '14+ Years Exp.',
      rating: '4.9/5',
    },
  ];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = !department || doc.dept === department;
    return matchesName && matchesDept;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="gold" size="md">Consultant Directory</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Find Your Specialist Medical Doctor
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Consult with highly experienced medical leads across all super-specialties.
        </p>
      </div>

      {/* Filter Bar */}
      <Card className="p-6 bg-white shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Search doctor by name..."
            startIcon={<Search className="w-4 h-4" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            options={[
              { value: '', label: 'All Specialties' },
              { value: 'Cardiology', label: 'Cardiology' },
              { value: 'Neurology', label: 'Neurology' },
              { value: 'Orthopedics', label: 'Orthopedics' },
              { value: 'Oncology', label: 'Oncology' },
            ]}
          />
        </div>
      </Card>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDoctors.map((doc) => (
          <Card key={doc.id} hoverEffect accentGoldTop>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div className="space-y-1">
                <Badge variant="teal" size="sm">{doc.dept}</Badge>
                <CardTitle className="pt-1">{doc.name}</CardTitle>
                <CardDescription>{doc.degree}</CardDescription>
              </div>
              <div className="flex items-center gap-1 bg-gold-50 text-gold-900 px-2.5 py-1 rounded-lg text-xs font-bold border border-gold-200">
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <span>{doc.rating}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-teal-600" /> {doc.exp}
                </span>
                <span className="flex items-center gap-1">
                  <Stethoscope className="w-4 h-4 text-teal-600" /> Senior Consultant
                </span>
              </div>
              <Link to="/appointments">
                <Button variant="gold" size="sm" fullWidth leftIcon={<Calendar className="w-4 h-4" />}>
                  Book Consultation Slot
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
