import React from 'react';
import { MapPin, Phone, ShieldAlert, Navigation, Clock, Building2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { HOSPITAL_BRANCHES_DATA } from '@/data/homeData';

export const FindHospitalSection: React.FC = () => {
  return (
    <section id="find-hospital" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="gold" size="sm">Hospital Network</Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Find a MEDICARE Hospital Location
        </h2>
        <p className="text-sm text-gray-600">
          State-of-the-art medical complexes equipped with 24/7 Level-1 Trauma ICU & OPD centers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HOSPITAL_BRANCHES_DATA.map((branch) => (
          <Card key={branch.id} hoverEffect accentGoldTop className="p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <Badge variant={branch.is24x7Emergency ? 'gold' : 'teal'} size="sm">
                  {branch.type}
                </Badge>
                <h3 className="text-xl font-bold text-navy-900 pt-1">{branch.name}</h3>
              </div>
              <div className="p-3 bg-navy-900 text-gold-400 rounded-2xl">
                <Building2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>{branch.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <span>OPD Hours: {branch.opdHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Helpline: {branch.helpline}</span>
              </div>
            </div>

            <div className="p-4 bg-navy-950 text-white rounded-xl border border-gold-600/30 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gold-400 font-bold uppercase">24/7 Emergency Line</p>
                <p className="text-base font-extrabold text-white">{branch.emergencyNumber}</p>
              </div>
              <a href={`tel:${branch.emergencyNumber}`}>
                <Button variant="danger" size="sm" leftIcon={<ShieldAlert className="w-4 h-4" />}>
                  Call Emergency
                </Button>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button variant="outline" fullWidth leftIcon={<Navigation className="w-4 h-4" />}>
                  Get Live Directions
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
