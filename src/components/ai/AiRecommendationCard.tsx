import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, ArrowRight, Calendar, Clock, Stethoscope, Building2 } from 'lucide-react';
import { Doctor } from '@/data/doctorData';
import { HospitalBranchExt } from '@/data/hospitalData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

interface AiRecommendationCardProps {
  category?: string;
  specialty?: string;
  specialtySlug?: string;
  doctor?: Doctor | null;
  hospital?: HospitalBranchExt | null;
  availableSlots?: string[];
  intentRecognized?: string;
}

export const AiRecommendationCard: React.FC<AiRecommendationCardProps> = ({
  category,
  specialty,
  specialtySlug,
  doctor,
  hospital,
  availableSlots,
}) => {
  const navigate = useNavigate();

  const handleSlotSelect = (slotTime: string) => {
    if (doctor) {
      navigate(`/doctors/${doctor.id}?slot=${encodeURIComponent(slotTime)}`);
    } else if (specialtySlug) {
      navigate(`/doctors?specialty=${encodeURIComponent(specialtySlug)}`);
    } else {
      navigate('/doctors');
    }
  };

  return (
    <Card accentGoldTop className="p-4 sm:p-5 space-y-4 bg-white border border-gray-200 shadow-md">
      {/* 1. Header: Category & Clinical Specialty Badges */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-1 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-teal-600" />
          <Badge variant="gold" size="sm">
            {category || 'Care Recommendation'}
          </Badge>
        </div>
        {specialty && (
          <Link to={specialtySlug ? `/specialties/${specialtySlug}` : '/specialties'}>
            <Badge variant="teal" size="sm" className="hover:bg-teal-700 hover:text-white transition-colors cursor-pointer">
              Specialty: {specialty}
            </Badge>
          </Link>
        )}
      </div>

      {/* 2. Recommended Doctor Profile Box */}
      {doctor && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-200">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={doctor.photoUrl}
              alt={doctor.name}
              className="w-14 h-14 rounded-xl object-cover object-top border border-gray-300 shadow-2xs shrink-0"
            />
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-teal-700">{doctor.specialty}</span>
                <span className="text-[10px] font-bold text-gold-700 flex items-center gap-0.5 bg-gold-50 px-1.5 py-0.5 rounded-full border border-gold-200">
                  <Star className="w-3 h-3 fill-gold-500 text-gold-500" /> {doctor.rating}
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-navy-900 truncate">{doctor.name}</h4>
              <p className="text-[11px] text-gray-600 truncate font-medium">
                {doctor.qualification} • {doctor.experienceYears}+ Yrs Exp
              </p>
              <p className="text-[11px] text-teal-800 font-bold">OPD Fee: ₹{doctor.fee}</p>
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-center">
            <Link to={`/doctors/${doctor.id}`}>
              <Button variant="outline" size="sm" className="text-xs font-bold border-teal-600 text-teal-700 hover:bg-teal-50">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* 3. Recommended Hospital Branch */}
      {hospital && (
        <div className="p-2.5 bg-navy-950/5 rounded-xl border border-navy-950/10 text-xs text-navy-900 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <Building2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span className="truncate">
              Recommended Campus: <strong className="font-extrabold text-navy-950">{hospital.name}</strong> ({hospital.city})
            </span>
          </div>
          <Link to={`/hospitals/${hospital.id}`} className="shrink-0 text-[11px] font-bold text-teal-700 hover:underline">
            Details →
          </Link>
        </div>
      )}

      {/* 4. Suggested Available OPD Slots */}
      {availableSlots && availableSlots.length > 0 && (
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-600" />
              Suggested OPD Slots:
            </p>
            <span className="text-[10px] text-teal-700 font-semibold">Click slot to reserve</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableSlots.map((slot, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSlotSelect(slot)}
                className="px-3 py-1.5 bg-gold-50 hover:bg-gold-100 text-navy-950 rounded-xl text-xs font-extrabold border border-gold-300 shadow-2xs hover:shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3 h-3 text-gold-600" />
                <span>{slot}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 5. Booking CTA Action Bar */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
        <span className="text-xs font-bold text-navy-900">Book OPD Appointment</span>
        {doctor ? (
          <Link to={`/doctors/${doctor.id}`}>
            <Button variant="gold" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />} className="font-extrabold">
              Book Slot with {doctor.name.split(' ')[1] || 'Doctor'}
            </Button>
          </Link>
        ) : (
          <Link to={specialtySlug ? `/doctors?specialty=${specialtySlug}` : '/doctors'}>
            <Button variant="gold" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />} className="font-extrabold">
              Browse {specialty || 'Specialists'}
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
};
