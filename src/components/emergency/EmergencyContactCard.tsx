import React from 'react';
import { PhoneCall, HeartPulse, Activity, Baby, Clock } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { EmergencyContactItem } from '@/data/emergencyData';

interface EmergencyContactCardProps {
  contact: EmergencyContactItem;
}

export const EmergencyContactCard: React.FC<EmergencyContactCardProps> = ({ contact }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-red-500 animate-pulse" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-red-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-red-500" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-red-500" />;
      default:
        return <PhoneCall className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <Card className="p-5 bg-white border border-gray-200 hover:border-red-400 space-y-3 shadow-md transition-all">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-red-50 rounded-xl">{getIcon(contact.iconName)}</div>
          <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide">{contact.department}</h4>
        </div>
        {contact.is24x7 && (
          <Badge variant="danger" size="sm" className="text-[10px] font-black">
            24/7 LIVE
          </Badge>
        )}
      </div>

      <p className="text-xs text-gray-600 leading-snug">{contact.description}</p>

      <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
        <a
          href={`tel:${contact.phone}`}
          className="text-base sm:text-lg font-black text-gold-600 hover:underline flex items-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4 text-red-600" />
          <span>{contact.phone}</span>
        </a>
        <span className="text-[10px] text-gray-400 font-semibold">{contact.availableHours}</span>
      </div>
    </Card>
  );
};
