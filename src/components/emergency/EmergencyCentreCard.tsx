import React from 'react';
import { MapPin, Phone, ShieldAlert, Navigation, Bed, Ambulance, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { EmergencyCentreItem } from '@/data/emergencyData';

interface EmergencyCentreCardProps {
  centre: EmergencyCentreItem;
  onRequestAmbulance: (centre: EmergencyCentreItem) => void;
}

export const EmergencyCentreCard: React.FC<EmergencyCentreCardProps> = ({
  centre,
  onRequestAmbulance,
}) => {
  return (
    <Card accentGoldTop className="p-6 bg-white border border-gray-200 space-y-4 shadow-lg hover:shadow-xl transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
        <div>
          <Badge variant="gold" size="sm" className="mb-1">{centre.traumaLevel}</Badge>
          <h3 className="text-xl font-black text-navy-900">{centre.name}</h3>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>{centre.address}, {centre.city}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="teal" size="sm" className="flex items-center gap-1 font-bold">
            <Bed className="w-3.5 h-3.5" /> {centre.icuBedsAvailable} ICU Beds Available
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-red-50/60 rounded-xl space-y-1">
          <span className="text-[10px] font-bold text-red-700 uppercase block">24/7 Emergency Line</span>
          <a href={`tel:${centre.emergencyLine}`} className="text-sm font-black text-red-600 hover:underline flex items-center gap-1">
            <Phone className="w-4 h-4 text-red-600 animate-pulse" />
            <span>{centre.emergencyLine}</span>
          </a>
        </div>

        <div className="p-3 bg-teal-50/60 rounded-xl space-y-1">
          <span className="text-[10px] font-bold text-teal-700 uppercase block">Ambulance Dispatch Time</span>
          <span className="text-sm font-extrabold text-teal-900 flex items-center gap-1">
            <Ambulance className="w-4 h-4 text-teal-600" />
            <span>{centre.ambulanceDispatchTime} Avg</span>
          </span>
        </div>
      </div>

      <div className="space-y-1.5 pt-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Onsite Emergency Facilities:</span>
        <div className="flex flex-wrap gap-1.5">
          {centre.facilities.map((fac, i) => (
            <span key={i} className="px-2 py-0.5 bg-gray-100 text-navy-900 text-[11px] font-semibold rounded-md flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-teal-600" /> {fac}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
        <Button
          variant="danger"
          size="sm"
          fullWidth
          leftIcon={<Ambulance className="w-4 h-4" />}
          onClick={() => onRequestAmbulance(centre)}
        >
          Dispatch ICU Ambulance
        </Button>
        <a href={centre.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button variant="outline" size="sm" fullWidth leftIcon={<Navigation className="w-4 h-4 text-teal-600" />}>
            Get GPS Directions
          </Button>
        </a>
      </div>
    </Card>
  );
};
