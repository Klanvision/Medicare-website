import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar, Video, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Doctor } from '@/data/doctorData';

interface DoctorCardProps {
  doctor: Doctor;
  layoutMode?: 'grid' | 'list';
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, layoutMode = 'grid' }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/doctors/${doctor.id}`);
  };

  if (layoutMode === 'list') {
    return (
      <Card
        hoverEffect
        accentGoldTop
        className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer bg-white"
        onClick={handleCardClick}
      >
        <div className="flex items-start gap-4">
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top shadow-md border shrink-0"
          />
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="teal" size="sm">{doctor.specialty}</Badge>
              <Badge variant="gold" size="sm">
                <Star className="w-3 h-3 fill-gold-500 mr-1 inline" /> {doctor.rating} ({doctor.reviewCount})
              </Badge>
              {doctor.consultationModes && doctor.consultationModes.length > 1 ? (
                <Badge variant="outline" size="sm">OPD + Video</Badge>
              ) : (
                <Badge variant="outline" size="sm">{doctor.consultationMode}</Badge>
              )}
            </div>

            <h3 className="text-lg font-bold text-navy-900 hover:text-teal-600 transition-colors">
              {doctor.name}
            </h3>
            <p className="text-xs text-gray-500 font-medium">{doctor.qualification}</p>

            <div className="flex items-center gap-4 text-xs text-gray-600 pt-1">
              <span className="font-semibold text-navy-900">{doctor.experienceYears}+ Years Experience</span>
              <span className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-teal-600" /> {doctor.location}
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 gap-3 shrink-0">
          <div className="text-left sm:text-right">
            <p className="text-[11px] text-gray-400 font-medium">Consultation Fee</p>
            <p className="text-xl font-extrabold text-navy-900">₹{doctor.fee}</p>
            <p className="text-[11px] text-teal-700 font-bold">Slot: {doctor.nextSlot}</p>
          </div>

          <Link
            to={`/doctors/${doctor.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-auto"
          >
            <Button variant="gold" size="sm" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
              Book Appointment
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  // Default Grid Layout Card
  return (
    <Card
      hoverEffect
      accentGoldTop
      className="p-5 flex flex-col justify-between space-y-4 cursor-pointer bg-white"
      onClick={handleCardClick}
    >
      <div className="space-y-3">
        <div className="relative">
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="w-full h-48 rounded-xl object-cover object-top shadow-md border"
          />
          <div className="absolute top-2 right-2 bg-navy-950/85 backdrop-blur-sm text-gold-400 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-gold-600/30">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>{doctor.rating}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Badge variant="teal" size="sm">{doctor.specialty}</Badge>
            <span className="text-xs font-bold text-navy-900">₹{doctor.fee}</span>
          </div>
          <h3 className="text-base font-bold text-navy-900 hover:text-teal-600 transition-colors pt-1">
            {doctor.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium line-clamp-1">{doctor.qualification}</p>
          <p className="text-[11px] text-gray-400 line-clamp-1">{doctor.hospital}</p>
        </div>
      </div>

      <div className="space-y-3 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="font-semibold text-navy-900">{doctor.experienceYears}+ Yrs Exp.</span>
          <span className="text-teal-700 font-semibold">{doctor.consultationMode}</span>
        </div>

        <div className="p-2 bg-teal-50/70 rounded-lg text-[11px] text-teal-950 flex items-center justify-between border border-teal-100">
          <span className="text-gray-500">Next Slot:</span>
          <span className="font-bold text-teal-900">{doctor.nextSlot}</span>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          onClick={(e) => e.stopPropagation()}
          className="block"
        >
          <Button variant="gold" size="sm" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
            Book Appointment
          </Button>
        </Link>
      </div>
    </Card>
  );
};
