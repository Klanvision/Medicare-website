import React from 'react';
import { ShieldAlert, HeartPulse, Activity, Stethoscope, Baby, Ambulance, CheckCircle2, Clock } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { EmergencyCareTypeItem } from '@/data/emergencyData';

interface EmergencyServiceCardProps {
  service: EmergencyCareTypeItem;
}

export const EmergencyServiceCard: React.FC<EmergencyServiceCardProps> = ({ service }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-[#00529B]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-7 h-7 text-[#00529B]" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#00529B]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-7 h-7 text-[#00529B]" />;
      case 'Baby':
        return <Baby className="w-7 h-7 text-[#00529B]" />;
      case 'Ambulance':
        return <Ambulance className="w-7 h-7 text-[#00529B]" />;
      default:
        return <ShieldAlert className="w-7 h-7 text-[#00529B]" />;
    }
  };

  return (
    <Card className="p-6 bg-white space-y-4 border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 rounded-3xl">
      <div className="flex items-start justify-between gap-3">
        <div className="p-3 bg-sky-50 rounded-2xl shrink-0 border border-sky-100">{getIcon(service.iconName)}</div>
        <span className="px-2.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-[10px] font-black uppercase flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#00529B]" /> Response: {service.responseTime}
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-black text-slate-900 leading-snug">{service.title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed font-medium">{service.shortDesc}</p>
      </div>

      <div className="pt-2 border-t border-sky-100 space-y-1.5">
        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Key Facilities & Protocols:</span>
        <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-800 font-semibold">
          {service.keyServices.map((ks, i) => (
            <div key={i} className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00529B] shrink-0" />
              <span className="truncate text-[11px]">{ks}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
