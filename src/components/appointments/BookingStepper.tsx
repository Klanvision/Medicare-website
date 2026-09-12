import React from 'react';
import { Check } from 'lucide-react';

interface BookingStepperProps {
  currentStep: number;
  steps: string[];
  onStepClick?: (stepIndex: number) => void;
}

export const BookingStepper: React.FC<BookingStepperProps> = ({
  currentStep,
  steps,
  onStepClick,
}) => {
  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-soft overflow-x-auto">
      <div className="flex items-center justify-between min-w-[700px]">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <React.Fragment key={label}>
              {/* Step Circle & Label */}
              <div
                onClick={() => isCompleted && onStepClick && onStepClick(stepNumber)}
                className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                  isCompleted ? 'hover:scale-105' : ''
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    isCompleted
                      ? 'bg-teal-600 text-white shadow-md'
                      : isCurrent
                      ? 'bg-gold-600 text-navy-950 font-extrabold ring-4 ring-gold-100 shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-400 border border-gray-300'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
                </div>
                <span
                  className={`text-[11px] font-bold text-center whitespace-nowrap ${
                    isCurrent
                      ? 'text-navy-900 font-extrabold'
                      : isCompleted
                      ? 'text-teal-700 font-semibold'
                      : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-2 transition-all ${
                    stepNumber < currentStep ? 'bg-teal-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
