import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Phone, ShieldAlert, Navigation, Building2, Calendar, ArrowRight } from 'lucide-react';
import { HospitalBranchExt } from '@/data/hospitalData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

interface HospitalCardProps {
  hospital: HospitalBranchExt;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hospitals/${hospital.id}`);
  };

  return (
    <Card
      hoverEffect
      accentGoldTop
      className="p-6 cursor-pointer bg-white flex flex-col justify-between space-y-6"
      onClick={handleCardClick}
    >
      <div className="space-y-4">
        {/* Hospital Cover Image */}
        <div className="relative">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-48 rounded-xl object-cover shadow-md border"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={hospital.isEmergency24x7 ? 'gold' : 'teal'} size="sm">
              {hospital.isEmergency24x7 ? '24/7 Emergency' : 'OPD Clinic'}
            </Badge>
          </div>
        </div>

        {/* Title & Type */}
        <div className="space-y-1">
          <Badge variant="teal" size="sm">{hospital.type}</Badge>
          <h3 className="text-xl font-bold text-navy-900 hover:text-teal-600 transition-colors pt-1">
            {hospital.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>{hospital.address}, {hospital.city}</span>
          </p>
        </div>

        {/* Beds & Emergency Bar */}
        <div className="grid grid-cols-2 gap-2 text-xs p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div>
            <p className="text-gray-400 font-semibold">Total Capacity:</p>
            <p className="font-extrabold text-navy-900">{hospital.totalBeds} Beds ({hospital.icuBeds} ICU)</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Helpline Desk:</p>
            <p className="font-extrabold text-teal-700">{hospital.phone}</p>
          </div>
        </div>

        {/* Emergency Hotline Box */}
        <div className="p-3 bg-navy-950 text-white rounded-xl flex items-center justify-between border border-gold-600/30">
          <div>
            <p className="text-[10px] text-gold-400 font-bold uppercase">24/7 Emergency Hotline</p>
            <p className="text-sm font-extrabold text-white">{hospital.emergency}</p>
          </div>
          <a
            href={`tel:${hospital.emergency}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Button variant="danger" size="sm" className="px-2.5 py-1 text-xs">
              Call
            </Button>
          </a>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
        <Link
          to={`/hospitals/${hospital.id}`}
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:w-1/2"
        >
          <Button variant="gold" size="sm" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
            View Profile
          </Button>
        </Link>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:w-1/2"
        >
          <Button variant="outline" size="sm" fullWidth leftIcon={<Navigation className="w-4 h-4" />}>
            Directions
          </Button>
        </a>
      </div>
    </Card>
  );
};
