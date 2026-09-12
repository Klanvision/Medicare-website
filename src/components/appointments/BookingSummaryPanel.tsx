import React from 'react';
import { Doctor } from '@/data/doctorData';
import { HospitalBranch } from '@/data/homeData';
import { ConsultationType, BookingStateData } from '@/services/appointmentService';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Calendar, Clock, MapPin, Video, Home, User, CheckCircle2 } from 'lucide-react';

interface BookingSummaryPanelProps {
  bookingData: BookingStateData;
  currentStep: number;
}

export const BookingSummaryPanel: React.FC<BookingSummaryPanelProps> = ({
  bookingData,
  currentStep,
}) => {
  const { doctor, hospital, consultationType, appointmentDate, timeSlot, patientDetails } = bookingData;

  const baseFee = doctor ? doctor.fee : 800;
  const homeCareSurcharge = consultationType === 'Home Visit' ? 400 : 0;
  const totalAmount = baseFee + homeCareSurcharge;

  return (
    <Card accentGoldTop className="p-6 space-y-6 shadow-xl bg-white sticky top-24">
      <div className="flex items-center justify-between border-b pb-3">
        <h3 className="text-lg font-bold text-navy-900">Appointment Summary</h3>
        <Badge variant="gold" size="sm">Step {currentStep} of 8</Badge>
      </div>

      {/* Selected Doctor Summary */}
      {doctor ? (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="w-14 h-14 rounded-xl object-cover object-top border shadow-2xs shrink-0"
          />
          <div className="space-y-0.5 min-w-0">
            <Badge variant="teal" size="sm">{doctor.specialty}</Badge>
            <h4 className="text-sm font-bold text-navy-900 truncate">{doctor.name}</h4>
            <p className="text-[11px] text-gray-500 truncate">{doctor.qualification}</p>
          </div>
        </div>
      ) : (
        <p className="text-xs text-gray-400 italic">Doctor not selected yet.</p>
      )}

      {/* Booking Specs List */}
      <div className="space-y-3 text-xs text-navy-900">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 flex items-center gap-1.5">
            {consultationType === 'Video Consultation' ? (
              <Video className="w-3.5 h-3.5 text-teal-600" />
            ) : consultationType === 'Home Visit' ? (
              <Home className="w-3.5 h-3.5 text-gold-600" />
            ) : (
              <MapPin className="w-3.5 h-3.5 text-navy-900" />
            )}
            Consultation Type:
          </span>
          <span className="font-bold text-teal-700">{consultationType}</span>
        </div>

        {hospital && (
          <div className="flex items-start justify-between gap-2">
            <span className="text-gray-500 shrink-0">Hospital Branch:</span>
            <span className="font-semibold text-right text-navy-900 line-clamp-1">{hospital.name}</span>
          </div>
        )}

        {appointmentDate && (
          <div className="flex items-center justify-between">
            <span className="text-gray-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-600" /> Date:
            </span>
            <span className="font-bold text-navy-900">{appointmentDate}</span>
          </div>
        )}

        {timeSlot && (
          <div className="flex items-center justify-between">
            <span className="text-gray-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" /> Time Slot:
            </span>
            <span className="font-bold text-gold-700">{timeSlot}</span>
          </div>
        )}

        {patientDetails.fullName && (
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-gray-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-teal-600" /> Patient:
            </span>
            <span className="font-bold text-navy-900 truncate max-w-[140px]">{patientDetails.fullName}</span>
          </div>
        )}
      </div>

      {/* Fee Calculation Breakdown */}
      <div className="p-4 bg-navy-950 text-white rounded-xl space-y-2 border border-gold-600/30">
        <div className="flex justify-between text-xs text-gray-300">
          <span>Doctor Consultation Fee:</span>
          <span>₹{baseFee}</span>
        </div>
        {homeCareSurcharge > 0 && (
          <div className="flex justify-between text-xs text-gold-400 font-semibold">
            <span>Home Visit Surcharge:</span>
            <span>+₹{homeCareSurcharge}</span>
          </div>
        )}
        <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-navy-800">
          <span>Total Payable:</span>
          <span className="text-gold-400">₹{totalAmount}</span>
        </div>
      </div>
    </Card>
  );
};
