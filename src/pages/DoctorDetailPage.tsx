import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  Award,
  ShieldCheck,
  ArrowLeft,
  Phone,
  CheckCircle2,
  User,
  GraduationCap,
  Sparkles,
  MessageSquare,
  Video,
  Globe,
  Stethoscope,
  Send,
} from 'lucide-react';
import { doctorService } from '@/services/doctorService';
import { Doctor, DayAvailableSlots } from '@/data/doctorData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Modal } from '@/components/common/Modal';
import { PageLoader } from '@/components/common/Loading';
import { ErrorState } from '@/components/common/ErrorState';
import { useToast } from '@/hooks/useToast';

interface DirectBookingForm {
  patientName: string;
  phone: string;
  email: string;
  appointmentDate: string;
  timeSlot: string;
  consultationMode: string;
}

interface ContactDoctorForm {
  patientName: string;
  phone: string;
  email: string;
  message: string;
}

export const DoctorDetailPage: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Interactive slot selection
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [selectedSlotTime, setSelectedSlotTime] = useState<string>('');

  // Modals
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Forms
  const {
    register: registerBooking,
    handleSubmit: handleSubmitBooking,
    setValue: setBookingValue,
    formState: { errors: bookingErrors },
    reset: resetBooking,
  } = useForm<DirectBookingForm>();

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContact,
  } = useForm<ContactDoctorForm>();

  useEffect(() => {
    const loadDoctor = async () => {
      setIsLoading(true);
      if (doctorId) {
        const found = await doctorService.getDoctorById(doctorId);
        setDoctor(found);
        if (found && found.availableSlots && found.availableSlots.length > 0) {
          setSelectedSlotTime(found.availableSlots[0].slots[0] || '');
        }
      }
      setIsLoading(false);
    };
    loadDoctor();
  }, [doctorId]);

  const handleSelectSlot = (dayIdx: number, slot: string) => {
    setSelectedDayIndex(dayIdx);
    setSelectedSlotTime(slot);
  };

  const handleOpenBooking = () => {
    if (doctor && doctor.availableSlots && doctor.availableSlots[selectedDayIndex]) {
      setBookingValue('appointmentDate', doctor.availableSlots[selectedDayIndex].dateValue);
      setBookingValue('timeSlot', selectedSlotTime || doctor.availableSlots[selectedDayIndex].slots[0]);
    }
    setIsBookingModalOpen(true);
  };

  const onConfirmBooking = (data: DirectBookingForm) => {
    toast.success(
      `Appointment request for ${doctor?.name} on ${data.appointmentDate} (${data.timeSlot}) confirmed!`,
      'OPD Booking Received'
    );
    setIsBookingModalOpen(false);
    resetBooking();
  };

  const onSendContactInquiry = (data: ContactDoctorForm) => {
    toast.info(
      `Inquiry for ${doctor?.name} received. Clinic coordinator will contact ${data.patientName} shortly.`,
      'Message Sent'
    );
    setIsContactModalOpen(false);
    resetContact();
  };

  if (isLoading) {
    return <PageLoader message="Loading Doctor Profile..." />;
  }

  if (!doctor) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ErrorState
          title="Doctor Profile Not Found"
          message="The doctor profile you requested could not be located in our directory."
          onRetry={() => navigate('/doctors')}
        />
      </div>
    );
  }

  const selectedDayObj: DayAvailableSlots | undefined = doctor.availableSlots?.[selectedDayIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Navigation Breadcrumb */}
      <Link
        to="/doctors"
        className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-navy-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Doctor Directory
      </Link>

      {/* 1. Main Header Profile Card */}
      <Card variant="navy" accentGoldTop className="p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Doctor Image & Core Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={doctor.photoUrl}
              alt={doctor.name}
              className="w-32 h-32 sm:w-44 sm:h-44 rounded-3xl object-cover object-top border-4 border-gold-500 shadow-2xl shrink-0"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="gold" size="sm">{doctor.specialty}</Badge>
                <Badge variant="teal" size="sm">
                  <Star className="w-3.5 h-3.5 fill-gold-400 mr-1 inline" /> {doctor.rating} ({doctor.reviewCount} Reviews)
                </Badge>
                <Badge variant="outline" size="sm" className="text-white border-gray-600">
                  {doctor.consultationMode}
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">{doctor.name}</h1>
              <p className="text-sm text-gold-400 font-semibold">{doctor.qualification}</p>

              <div className="flex items-center gap-4 text-xs text-gray-300 pt-1">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-teal-400" /> {doctor.experienceYears}+ Years Clinical Experience
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-teal-400" /> {doctor.languages.join(', ')}
                </span>
              </div>

              <p className="text-xs text-gray-300 flex items-center gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" /> {doctor.hospital} ({doctor.location})
              </p>
            </div>
          </div>

          {/* Fee & Action CTAs Box */}
          <div className="p-6 bg-navy-900/90 rounded-2xl border border-gold-600/30 text-left sm:text-right space-y-4 shrink-0 w-full md:w-auto">
            <div>
              <p className="text-xs text-gray-400 font-medium">Consultation Fee</p>
              <p className="text-3xl font-extrabold text-white">₹{doctor.fee}</p>
            </div>
            <p className="text-xs text-teal-400 font-bold">Next Slot: {doctor.nextSlot}</p>

            <div className="flex flex-col gap-2">
              <Button
                variant="gold"
                size="lg"
                fullWidth
                onClick={handleOpenBooking}
                leftIcon={<Calendar className="w-5 h-5" />}
              >
                Book OPD Appointment
              </Button>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => setIsContactModalOpen(true)}
                className="text-white border-teal-500/50 hover:bg-teal-600 hover:text-white"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Contact Doctor / Query
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Grid: Left Detailed Sections / Right Booking Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (About, Expertise, Education, Awards, OPD Schedule, Reviews) */}
        <div className="lg:col-span-8 space-y-8">
          {/* 2. About & Biography */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              About {doctor.name}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{doctor.bio}</p>
          </Card>

          {/* 3. Clinical Expertise */}
          {doctor.expertise && doctor.expertise.length > 0 && (
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-600" />
                Key Clinical Expertise & Surgical Focus
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {doctor.expertise.map((exp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-teal-50 text-teal-900 rounded-xl text-xs font-bold border border-teal-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{exp}</span>
                  </span>
                ))}
              </div>
            </Card>
          )}

          {/* 4. Education & Training */}
          {doctor.education && doctor.education.length > 0 && (
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-navy-900" />
                Education & Medical Fellowships
              </h3>
              <div className="space-y-4">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="p-2 bg-teal-600 text-white rounded-lg font-bold text-xs shrink-0">
                      {edu.year}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-900">{edu.degree}</p>
                      <p className="text-xs text-gray-600">{edu.college}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* 5. Awards & Recognitions */}
          {doctor.awards && doctor.awards.length > 0 && (
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-600" />
                Awards & Accreditations
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {doctor.awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{award}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* 6. Hospital & OPD Timetable */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-600" />
              OPD Timetable & Room Details
            </h3>
            <div className="space-y-3">
              {doctor.opdSchedule.map((slot, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <p className="text-sm font-bold text-navy-900">{slot.day}</p>
                    <p className="text-xs text-teal-700 font-semibold">{slot.room} • {doctor.hospital}</p>
                  </div>
                  <Badge variant="gold" size="sm">{slot.time}</Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* 7. Patient Reviews */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                Verified Patient Reviews ({doctor.reviewCount})
              </h3>
              <span className="text-lg font-extrabold text-gold-600">{doctor.rating} / 5.0</span>
            </div>

            <div className="space-y-4">
              {doctor.reviews && doctor.reviews.length > 0 ? (
                doctor.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 bg-gray-50 rounded-xl border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-navy-900">{rev.patientName}</span>
                      <span className="text-xs text-gray-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gold-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed italic">"{rev.comment}"</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500">No patient reviews submitted yet.</p>
              )}
            </div>
          </Card>
        </div>

        {/* Right Column: Interactive Available Slots & Appointment Widget */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <Card accentGoldTop className="p-6 space-y-6 shadow-xl bg-white">
            <div className="space-y-1">
              <Badge variant="gold" size="sm">Interactive Slot Picker</Badge>
              <h3 className="text-lg font-bold text-navy-900">Select OPD Slot</h3>
              <p className="text-xs text-gray-500">Consultation Fee: <strong className="text-navy-900">₹{doctor.fee}</strong></p>
            </div>

            {/* Date Selector Tabs */}
            {doctor.availableSlots && doctor.availableSlots.length > 0 && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Choose Date:</label>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {doctor.availableSlots.map((dayObj, dIdx) => (
                    <button
                      key={dIdx}
                      type="button"
                      onClick={() => handleSelectSlot(dIdx, dayObj.slots[0])}
                      className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                        selectedDayIndex === dIdx
                          ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {dayObj.dateLabel}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Slot Buttons Grid */}
            {selectedDayObj && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Available Slots:</label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedDayObj.slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlotTime(slot)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center ${
                        selectedSlotTime === slot
                          ? 'bg-gold-600 text-navy-950 border-gold-500 font-extrabold shadow-sm'
                          : 'bg-white text-navy-900 border-gray-300 hover:border-teal-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              variant="gold"
              size="lg"
              fullWidth
              onClick={handleOpenBooking}
              leftIcon={<Calendar className="w-5 h-5" />}
            >
              Book Selected Slot
            </Button>

            <div className="p-3 bg-teal-50 rounded-xl text-[11px] text-teal-900 space-y-1.5 border border-teal-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Instant SMS Booking Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Zero Booking / Platform Fee</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 1. Book Appointment Modal */}
      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={`Book OPD Slot — ${doctor.name}`}
        description={`Specialty: ${doctor.specialty} • Fee: ₹${doctor.fee}`}
      >
        <form onSubmit={handleSubmitBooking(onConfirmBooking)} className="space-y-4">
          <Input
            label="Patient Full Name"
            placeholder="Enter patient full name"
            startIcon={<User className="w-4 h-4" />}
            error={bookingErrors.patientName?.message}
            {...registerBooking('patientName', { required: 'Full name is required' })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Contact Phone Number"
              type="tel"
              placeholder="+91..."
              startIcon={<Phone className="w-4 h-4" />}
              error={bookingErrors.phone?.message}
              {...registerBooking('phone', { required: 'Phone number is required' })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="patient@example.com"
              error={bookingErrors.email?.message}
              {...registerBooking('email', { required: 'Email is required' })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Appointment Date"
              type="date"
              error={bookingErrors.appointmentDate?.message}
              {...registerBooking('appointmentDate', { required: 'Date is required' })}
            />

            <Select
              label="Consultation Mode"
              {...registerBooking('consultationMode')}
              options={[
                { value: 'In-Person OPD', label: 'In-Person Hospital OPD' },
                { value: 'Video Consultation', label: 'Video Tele-Consultation' },
              ]}
            />
          </div>

          <Input
            label="Selected Time Slot"
            readOnly
            value={selectedSlotTime || '02:30 PM'}
            {...registerBooking('timeSlot')}
          />

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsBookingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gold" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
              Confirm OPD Slot
            </Button>
          </div>
        </form>
      </Modal>

      {/* 2. Contact Doctor / Inquiry Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={`Send Clinical Inquiry — ${doctor.name}`}
        description="Our clinical desk will respond to your query within 2 hours."
      >
        <form onSubmit={handleSubmitContact(onSendContactInquiry)} className="space-y-4">
          <Input
            label="Your Name"
            placeholder="Full Name"
            error={contactErrors.patientName?.message}
            {...registerContact('patientName', { required: 'Name is required' })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91..."
              error={contactErrors.phone?.message}
              {...registerContact('phone', { required: 'Phone is required' })}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="email@example.com"
              error={contactErrors.email?.message}
              {...registerContact('email', { required: 'Email is required' })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-semibold text-navy-900">Your Query / Case Details</label>
            <textarea
              rows={4}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              placeholder="Specify medical query or reports inquiry..."
              {...registerContact('message', { required: 'Message is required' })}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsContactModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gold" leftIcon={<Send className="w-4 h-4" />}>
              Send Inquiry
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
