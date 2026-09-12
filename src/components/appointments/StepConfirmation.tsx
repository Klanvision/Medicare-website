import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, MapPin, Printer, Download, Home, PhoneCall, ShieldCheck, User } from 'lucide-react';
import { AppointmentRecord } from '@/services/appointmentService';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';

interface StepConfirmationProps {
  appointmentRecord: AppointmentRecord;
  onBookAnother: () => void;
}

export const StepConfirmation: React.FC<StepConfirmationProps> = ({
  appointmentRecord,
  onBookAnother,
}) => {
  const toast = useToast();
  const { appointmentId, doctor, hospital, consultationType, appointmentDate, timeSlot, patientDetails, paymentResult } = appointmentRecord;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCalendar = () => {
    toast.success(`Calendar reminder for ${appointmentDate} downloaded.`, 'Calendar Sync');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner Success */}
      <div className="bg-gradient-to-r from-emerald-900 via-navy-950 to-teal-950 text-white p-8 rounded-3xl shadow-2xl border border-emerald-500/40 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <Badge variant="gold" size="md">Appointment Confirmed</Badge>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Booking Confirmed!
        </h2>

        <div className="p-3 bg-navy-900/90 rounded-xl border border-gold-600/40 inline-block mx-auto">
          <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Unique Appointment ID</p>
          <p className="text-2xl sm:text-3xl font-black text-gold-400 tracking-wider">{appointmentId}</p>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
          A confirmation SMS and Email receipt have been sent to <strong className="text-white">{patientDetails.phone}</strong> and <strong className="text-white">{patientDetails.email}</strong>.
        </p>
      </div>

      {/* Printable Receipt Card */}
      <Card accentGoldTop className="p-6 sm:p-8 space-y-6 shadow-xl bg-white border border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 gap-2">
          <div>
            <Badge variant="primary" size="sm">Official OPD Appointment Receipt</Badge>
            <h3 className="text-xl font-bold text-slate-900 pt-1">MEDICARE Hospitals</h3>
          </div>
          <p className="text-xs text-gray-400 font-medium">Booked At: {appointmentRecord.bookingTime}</p>
        </div>

        {/* Doctor & Location Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-2xl border">
          {doctor && (
            <div className="flex items-center gap-4">
              <img
                src={doctor.photoUrl}
                alt={doctor.name}
                className="w-16 h-16 rounded-2xl object-cover object-top border shadow-2xs shrink-0"
              />
              <div>
                <p className="text-xs font-bold text-teal-700">{doctor.specialty}</p>
                <p className="text-base font-extrabold text-navy-900">{doctor.name}</p>
                <p className="text-xs text-gray-500">{doctor.qualification}</p>
              </div>
            </div>
          )}

          <div className="space-y-1 text-xs text-navy-900 border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-6">
            <p className="font-bold text-gray-500 uppercase">Consultation Details:</p>
            <p className="font-semibold text-teal-700">Mode: {consultationType}</p>
            <p className="font-semibold">Date: {appointmentDate} • Time: {timeSlot}</p>
            {hospital && <p className="text-gray-600">Location: {hospital.name}</p>}
          </div>
        </div>

        {/* Patient Details & Payment Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs border-t pt-4">
          <div className="space-y-1">
            <p className="font-bold text-navy-900 text-sm flex items-center gap-1">
              <User className="w-4 h-4 text-teal-600" /> Patient Details
            </p>
            <p className="text-gray-700"><strong>Name:</strong> {patientDetails.fullName} ({patientDetails.age} Yrs, {patientDetails.gender})</p>
            <p className="text-gray-700"><strong>Phone:</strong> {patientDetails.phone}</p>
            <p className="text-gray-700"><strong>Email:</strong> {patientDetails.email}</p>
          </div>

          <div className="space-y-1 sm:text-right">
            <p className="font-bold text-navy-900 text-sm">Payment Status</p>
            <p className="text-teal-700 font-bold">Method: {appointmentRecord.paymentMethod}</p>
            {paymentResult && <p className="text-gray-500">Txn Ref: {paymentResult.transactionId}</p>}
            <p className="text-lg font-extrabold text-navy-900">Total Paid: ₹{paymentResult?.amount || doctor?.fee || 1000}</p>
          </div>
        </div>

        {/* Print & Calendar Trigger Buttons */}
        <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint} leftIcon={<Printer className="w-4 h-4" />}>
              Print Receipt
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownloadCalendar} leftIcon={<Download className="w-4 h-4" />}>
              Add to Calendar (.ics)
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="gold" size="sm" leftIcon={<Home className="w-4 h-4" />}>
                Return Home
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={onBookAnother}>
              Book Another Appointment
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
