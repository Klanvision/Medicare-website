import React, { useState } from 'react';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';
import { HOSPITAL_BRANCHES_DATA, HospitalBranch } from '@/data/homeData';
import {
  ConsultationType,
  BookingStateData,
  AppointmentRecord,
  appointmentService,
} from '@/services/appointmentService';
import { paymentService, PaymentMethod, PaymentResult } from '@/services/paymentService';

import { BookingStepper } from '@/components/appointments/BookingStepper';
import { BookingSummaryPanel } from '@/components/appointments/BookingSummaryPanel';
import { StepDoctorSelect } from '@/components/appointments/StepDoctorSelect';
import { StepHospitalSelect } from '@/components/appointments/StepHospitalSelect';
import { StepConsultationType } from '@/components/appointments/StepConsultationType';
import { StepDateSelect } from '@/components/appointments/StepDateSelect';
import { StepTimeSelect } from '@/components/appointments/StepTimeSelect';
import { StepPatientDetails } from '@/components/appointments/StepPatientDetails';
import { StepPayment } from '@/components/appointments/StepPayment';
import { StepConfirmation } from '@/components/appointments/StepConfirmation';

import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/useToast';

const STEP_LABELS = [
  'Doctor',
  'Hospital',
  'Type',
  'Date',
  'Time',
  'Patient Details',
  'Payment',
  'Confirmation',
];

const initialBookingData: BookingStateData = {
  doctor: DOCTORS_DATA[0],
  hospital: HOSPITAL_BRANCHES_DATA[0],
  consultationType: 'In-Person OPD',
  appointmentDate: '2026-08-26',
  timeSlot: '10:30 AM',
  patientDetails: {
    fullName: '',
    age: 35,
    gender: 'Male',
    phone: '',
    email: '',
    reasonForVisit: '',
  },
  paymentMethod: 'PAY_AT_HOSPITAL',
};

export const AppointmentPagePlaceholder: React.FC = () => {
  const toast = useToast();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [bookingData, setBookingData] = useState<BookingStateData>(initialBookingData);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [confirmedRecord, setConfirmedRecord] = useState<AppointmentRecord | null>(null);

  // Validate step before proceeding
  const validateCurrentStep = (): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1 && !bookingData.doctor) {
      toast.warning('Please select a doctor to continue.', 'Step 1 Incomplete');
      return false;
    }
    if (currentStep === 2 && !bookingData.hospital) {
      toast.warning('Please select a hospital branch.', 'Step 2 Incomplete');
      return false;
    }
    if (currentStep === 4 && !bookingData.appointmentDate) {
      toast.warning('Please pick an appointment date.', 'Step 4 Incomplete');
      return false;
    }
    if (currentStep === 5 && !bookingData.timeSlot) {
      toast.warning('Please select an available time slot.', 'Step 5 Incomplete');
      return false;
    }
    if (currentStep === 6) {
      if (!bookingData.patientDetails.fullName.trim()) {
        errs.fullName = 'Patient full name is required';
      }
      if (!bookingData.patientDetails.phone.trim()) {
        errs.phone = 'Phone number is required';
      }
      if (!bookingData.patientDetails.email.trim()) {
        errs.email = 'Email address is required';
      }

      if (Object.keys(errs).length > 0) {
        setFormErrors(errs);
        toast.warning('Please fill in all required patient fields.', 'Validation Error');
        return false;
      }
    }

    setFormErrors({});
    return true;
  };

  const handleNext = async () => {
    if (!validateCurrentStep()) return;

    // Step 7 Payment processing
    if (currentStep === 7) {
      setIsProcessingPayment(true);
      try {
        const baseFee = bookingData.doctor ? bookingData.doctor.fee : 800;
        const surcharge = bookingData.consultationType === 'Home Visit' ? 400 : 0;
        const totalAmount = baseFee + surcharge;

        const paymentRes: PaymentResult = await paymentService.processPayment({
          amount: totalAmount,
          paymentMethod: bookingData.paymentMethod,
          patientName: bookingData.patientDetails.fullName,
          patientEmail: bookingData.patientDetails.email,
          patientPhone: bookingData.patientDetails.phone,
        });

        const apptRecord = await appointmentService.createAppointment(bookingData, paymentRes);
        setConfirmedRecord(apptRecord);
        setCurrentStep(8);
        toast.success(`Booking ${apptRecord.appointmentId} created!`, 'Appointment Confirmed');
      } catch (err) {
        console.error(err);
        toast.error('Payment processing failed. Please try again.', 'Payment Error');
      } finally {
        setIsProcessingPayment(false);
      }
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 8));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setBookingData(initialBookingData);
    setConfirmedRecord(null);
    setCurrentStep(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="primary" size="sm">MEDICARE Online Booking</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Book OPD & Tele-Consultation Appointment
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Follow the 8-step wizard to pick doctor, time slot, patient info, and payment mode.
        </p>
      </div>

      {/* 8-Step Visual Progress Stepper */}
      <BookingStepper
        currentStep={currentStep}
        steps={STEP_LABELS}
        onStepClick={(stepIdx) => currentStep < 8 && setCurrentStep(stepIdx)}
      />

      {/* Main Booking Body (Left Step Content / Right Summary Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Step Wizard Content */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-soft space-y-8">
          {currentStep === 1 && (
            <StepDoctorSelect
              selectedDoctor={bookingData.doctor}
              onSelectDoctor={(doc) => setBookingData((prev) => ({ ...prev, doctor: doc }))}
            />
          )}

          {currentStep === 2 && (
            <StepHospitalSelect
              selectedHospital={bookingData.hospital}
              onSelectHospital={(hosp) => setBookingData((prev) => ({ ...prev, hospital: hosp }))}
            />
          )}

          {currentStep === 3 && (
            <StepConsultationType
              selectedType={bookingData.consultationType}
              onSelectType={(mode) => setBookingData((prev) => ({ ...prev, consultationType: mode }))}
            />
          )}

          {currentStep === 4 && (
            <StepDateSelect
              selectedDate={bookingData.appointmentDate}
              onSelectDate={(date) => setBookingData((prev) => ({ ...prev, appointmentDate: date }))}
            />
          )}

          {currentStep === 5 && (
            <StepTimeSelect
              selectedTime={bookingData.timeSlot}
              onSelectTime={(time) => setBookingData((prev) => ({ ...prev, timeSlot: time }))}
            />
          )}

          {currentStep === 6 && (
            <StepPatientDetails
              patientDetails={bookingData.patientDetails}
              onChange={(field, val) =>
                setBookingData((prev) => ({
                  ...prev,
                  patientDetails: { ...prev.patientDetails, [field]: val },
                }))
              }
              errors={formErrors}
            />
          )}

          {currentStep === 7 && (
            <StepPayment
              selectedPaymentMethod={bookingData.paymentMethod}
              onSelectPaymentMethod={(method) =>
                setBookingData((prev) => ({ ...prev, paymentMethod: method }))
              }
              isProcessing={isProcessingPayment}
              totalAmount={
                (bookingData.doctor ? bookingData.doctor.fee : 800) +
                (bookingData.consultationType === 'Home Visit' ? 400 : 0)
              }
            />
          )}

          {currentStep === 8 && confirmedRecord && (
            <StepConfirmation appointmentRecord={confirmedRecord} onBookAnother={handleReset} />
          )}

          {/* Navigation Control Buttons */}
          {currentStep < 8 && (
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1 || isProcessingPayment}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Back Step
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={handleNext}
                isLoading={isProcessingPayment}
                rightIcon={
                  currentStep === 7 ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )
                }
              >
                {currentStep === 7 ? 'Process Payment & Confirm' : 'Continue Next Step'}
              </Button>
            </div>
          )}
        </div>

        {/* Right Sticky Summary Sidebar */}
        {currentStep < 8 && (
          <div className="lg:col-span-4">
            <BookingSummaryPanel bookingData={bookingData} currentStep={currentStep} />
          </div>
        )}
      </div>
    </div>
  );
};
