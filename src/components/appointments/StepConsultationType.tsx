import React from 'react';
import { MapPin, Video, Home, Check } from 'lucide-react';
import { ConsultationType } from '@/services/appointmentService';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';

interface StepConsultationTypeProps {
  selectedType: ConsultationType;
  onSelectType: (type: ConsultationType) => void;
}

export const StepConsultationType: React.FC<StepConsultationTypeProps> = ({
  selectedType,
  onSelectType,
}) => {
  const modes = [
    {
      id: 'In-Person OPD' as ConsultationType,
      title: 'In-Person OPD Visit',
      desc: 'Visit doctor in-person at hospital OPD room. Physical examination & lab access.',
      icon: <MapPin className="w-6 h-6 text-navy-900" />,
      badge: 'Standard OPD',
    },
    {
      id: 'Video Consultation' as ConsultationType,
      title: 'Video Tele-Consultation',
      desc: 'Consult online via HD video call from home. Digital prescription instantly.',
      icon: <Video className="w-6 h-6 text-teal-600" />,
      badge: 'Online HD Call',
    },
    {
      id: 'Home Visit' as ConsultationType,
      title: 'Doctor Home Visit',
      desc: 'Senior physician house call to your home for elderly or bedridden care.',
      icon: <Home className="w-6 h-6 text-gold-600" />,
      badge: '+₹400 Doorstep Care',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 3: Consultation Mode</h3>
        <p className="text-xs text-gray-500">Choose how you would like to consult with the doctor.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modes.map((m) => {
          const isSelected = selectedType === m.id;

          return (
            <Card
              key={m.id}
              onClick={() => onSelectType(m.id)}
              className={`p-6 cursor-pointer transition-all border-2 space-y-4 ${
                isSelected
                  ? 'border-gold-600 bg-gold-50/20 shadow-md ring-2 ring-gold-200'
                  : 'border-gray-200 hover:border-teal-500/50 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-gray-100 rounded-2xl">{m.icon}</div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border ${
                    isSelected ? 'bg-gold-600 text-navy-950 border-gold-600' : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
              </div>

              <div className="space-y-1">
                <Badge variant="teal" size="sm">{m.badge}</Badge>
                <h4 className="text-base font-bold text-navy-900 pt-1">{m.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
