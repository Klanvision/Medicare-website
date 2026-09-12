import React from 'react';
import { Clock, Sun, Sunset, Moon, Check } from 'lucide-react';
import { Card } from '@/components/common/Card';

interface StepTimeSelectProps {
  selectedTime: string;
  onSelectTime: (time: string) => void;
}

export const StepTimeSelect: React.FC<StepTimeSelectProps> = ({
  selectedTime,
  onSelectTime,
}) => {
  const slotGroups = [
    {
      title: 'Morning OPD Slots (10:00 AM - 12:30 PM)',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
      slots: ['10:00 AM', '10:45 AM', '11:30 AM', '12:15 PM'],
    },
    {
      title: 'Afternoon OPD Slots (02:00 PM - 04:30 PM)',
      icon: <Sunset className="w-4 h-4 text-teal-600" />,
      slots: ['02:00 PM', '02:45 PM', '03:30 PM', '04:15 PM'],
    },
    {
      title: 'Evening OPD Slots (05:00 PM - 07:30 PM)',
      icon: <Moon className="w-4 h-4 text-navy-900" />,
      slots: ['05:00 PM', '05:45 PM', '06:30 PM', '07:15 PM'],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 5: Select Time Slot</h3>
        <p className="text-xs text-gray-500">Pick an available time slot for your appointment.</p>
      </div>

      <div className="space-y-6">
        {slotGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-navy-900 border-b pb-1">
              {group.icon}
              <span>{group.title}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {group.slots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => onSelectTime(slot)}
                    className={`p-3 rounded-xl border-2 text-xs font-bold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-gold-600 text-navy-950 border-gold-600 shadow-md ring-2 ring-gold-200'
                        : 'bg-white text-navy-900 border-gray-200 hover:border-teal-500'
                    }`}
                  >
                    <span>{slot}</span>
                    {isSelected && <Check className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
