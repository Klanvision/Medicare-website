import React from 'react';
import { Building2, MapPin, Phone, Check } from 'lucide-react';
import { HOSPITAL_BRANCHES_DATA, HospitalBranch } from '@/data/homeData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';

interface StepHospitalSelectProps {
  selectedHospital: HospitalBranch | null;
  onSelectHospital: (hospital: HospitalBranch) => void;
}

export const StepHospitalSelect: React.FC<StepHospitalSelectProps> = ({
  selectedHospital,
  onSelectHospital,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 2: Select Hospital Branch</h3>
        <p className="text-xs text-gray-500">Choose the medical facility location for your visit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HOSPITAL_BRANCHES_DATA.map((branch) => {
          const isSelected = selectedHospital?.id === branch.id;

          return (
            <Card
              key={branch.id}
              onClick={() => onSelectHospital(branch)}
              className={`p-6 cursor-pointer transition-all border-2 space-y-4 ${
                isSelected
                  ? 'border-gold-600 bg-gold-50/20 shadow-md ring-2 ring-gold-200'
                  : 'border-gray-200 hover:border-teal-500/50 bg-white'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <Badge variant={branch.is24x7Emergency ? 'gold' : 'teal'} size="sm">
                    {branch.type}
                  </Badge>
                  <h4 className="text-lg font-bold text-navy-900 pt-1">{branch.name}</h4>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 ${
                    isSelected ? 'bg-gold-600 text-navy-950 border-gold-600' : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Helpline: {branch.helpline}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
