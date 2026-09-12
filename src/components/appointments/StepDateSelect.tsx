import React from 'react';
import { Calendar as CalendarIcon, Check } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';

interface StepDateSelectProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export const StepDateSelect: React.FC<StepDateSelectProps> = ({
  selectedDate,
  onSelectDate,
}) => {
  const quickDates = [
    { label: 'Today (Aug 26)', val: '2026-08-26' },
    { label: 'Tomorrow (Aug 27)', val: '2026-08-27' },
    { label: 'Thu (Aug 28)', val: '2026-08-28' },
    { label: 'Fri (Aug 29)', val: '2026-08-29' },
    { label: 'Sat (Aug 30)', val: '2026-08-30' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 4: Select Appointment Date</h3>
        <p className="text-xs text-gray-500">Choose a preferred date for your doctor appointment.</p>
      </div>

      <div className="space-y-3">
        <label className="text-xs font-bold text-navy-900 uppercase tracking-wider">Quick Select Available Dates:</label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {quickDates.map((qd) => {
            const isSelected = selectedDate === qd.val;
            return (
              <button
                key={qd.val}
                type="button"
                onClick={() => onSelectDate(qd.val)}
                className={`p-3 rounded-xl border-2 text-xs font-bold transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-gold-600 text-navy-950 border-gold-600 shadow-md ring-2 ring-gold-200'
                    : 'bg-white text-navy-900 border-gray-200 hover:border-teal-500'
                }`}
              >
                <span>{qd.label}</span>
                {isSelected && <Check className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-4 border-t max-w-sm">
        <Input
          label="Or Pick Any Custom Date:"
          type="date"
          value={selectedDate}
          onChange={(e) => onSelectDate(e.target.value)}
          startIcon={<CalendarIcon className="w-4 h-4 text-teal-600" />}
        />
      </div>
    </div>
  );
};
