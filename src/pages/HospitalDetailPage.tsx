import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  MapPin,
  Phone,
  ShieldAlert,
  Navigation,
  Building2,
  Clock,
  Mail,
  CheckCircle2,
  Stethoscope,
  Cpu,
  HeartPulse,
  Activity,
  Calendar,
  Send,
  ArrowLeft,
  Star,
  Layers,
} from 'lucide-react';
import { hospitalService } from '@/services/hospitalService';
import { HospitalBranchExt } from '@/data/hospitalData';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Modal } from '@/components/common/Modal';
import { PageLoader } from '@/components/common/Loading';
import { ErrorState } from '@/components/common/ErrorState';
import { useToast } from '@/hooks/useToast';

interface HospitalContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const HospitalDetailPage: React.FC = () => {
  const { hospitalId } = useParams<{ hospitalId: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [hospital, setHospital] = useState<HospitalBranchExt | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HospitalContactForm>();

  useEffect(() => {
    const loadHospital = async () => {
      setIsLoading(true);
      if (hospitalId) {
        const found = await hospitalService.getHospitalById(hospitalId);
        setHospital(found);
      }
      setIsLoading(false);
    };
    loadHospital();
  }, [hospitalId]);

  const onSendHospitalInquiry = (data: HospitalContactForm) => {
    toast.success(
      `Inquiry for ${hospital?.name} received! Hospital desk will contact ${data.phone} within 15 minutes.`,
      'Inquiry Sent'
    );
    setIsContactModalOpen(false);
    reset();
  };

  if (isLoading) {
    return <PageLoader message="Loading Hospital Profile..." />;
  }

  if (!hospital) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ErrorState
          title="Hospital Branch Not Found"
          message="The hospital location you requested could not be found."
          onRetry={() => navigate('/hospitals')}
        />
      </div>
    );
  }

  // Associated Doctors
  const branchDoctors = DOCTORS_DATA.filter((doc) =>
    hospital.associatedDoctorIds.includes(doc.id) || doc.hospital.includes(hospital.name)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link */}
      <Link
        to="/hospitals"
        className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-navy-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Hospital Network
      </Link>

      {/* Hero Header Card */}
      <Card variant="navy" accentGoldTop className="p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="gold" size="sm">{hospital.type}</Badge>
              <Badge variant="teal" size="sm">
                {hospital.totalBeds} Beds ({hospital.icuBeds} ICU Beds)
              </Badge>
              {hospital.isEmergency24x7 && (
                <Badge variant="danger" size="sm">24/7 Level-1 Trauma</Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {hospital.name}
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{hospital.address}, {hospital.city}, {hospital.state} - {hospital.zip}</span>
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-teal-400" /> Helpline: <strong className="text-white">{hospital.phone}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-teal-400" /> {hospital.email}
              </span>
            </div>
          </div>

          {/* Emergency Line & Actions Box */}
          <div className="p-6 bg-navy-900 rounded-2xl border border-gold-600/30 text-left sm:text-right space-y-4 shrink-0 w-full lg:w-auto">
            <div>
              <p className="text-xs text-gold-400 font-bold uppercase tracking-wider">24/7 Emergency Line</p>
              <p className="text-xl sm:text-2xl font-extrabold text-white">{hospital.emergency}</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <Link to="/appointments">
                <Button variant="gold" size="lg" fullWidth leftIcon={<Calendar className="w-5 h-5" />}>
                  Book OPD Appointment
                </Button>
              </Link>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="sm" fullWidth className="text-white border-teal-500/50 hover:bg-teal-600 hover:text-white" leftIcon={<Navigation className="w-4 h-4" />}>
                  Get Live Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Overview, Facilities, Departments, Doctors, Gallery) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Hospital Overview */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal-600" />
              Hospital Overview & Accreditations
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{hospital.overview}</p>
          </Card>

          {/* Key Facilities */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-gold-600" />
              Key Hospital Facilities & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hospital.facilities.map((fac, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border space-y-1">
                  <h4 className="text-sm font-bold text-navy-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    {fac.title}
                  </h4>
                  <p className="text-xs text-gray-600">{fac.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Departments List */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-navy-900" />
              Medical Specialties & Departments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hospital.departments.map((dept, idx) => (
                <div key={idx} className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 flex items-center gap-2 text-xs font-bold text-teal-950">
                  <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{dept}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Associated Doctors */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-xl font-bold text-navy-900">
                Specialist Doctors at this Branch ({branchDoctors.length})
              </h3>
              <Link to="/doctors" className="text-xs font-bold text-teal-700 hover:underline">
                View All Doctors →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branchDoctors.map((doc) => (
                <div key={doc.id} className="p-4 bg-gray-50 rounded-xl border flex items-center gap-3">
                  <img
                    src={doc.photoUrl}
                    alt={doc.name}
                    className="w-14 h-14 rounded-xl object-cover object-top border shrink-0"
                  />
                  <div className="space-y-0.5 min-w-0">
                    <Badge variant="teal" size="sm">{doc.specialty}</Badge>
                    <h4 className="text-sm font-bold text-navy-900 truncate">{doc.name}</h4>
                    <p className="text-[11px] text-gray-500 truncate">{doc.qualification}</p>
                    <Link to={`/doctors/${doc.id}`} className="text-[11px] font-bold text-gold-700 hover:underline block pt-1">
                      View Profile & Slots →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Image Gallery */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3">
              Hospital Facility Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {hospital.gallery.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  alt={`${hospital.name} Gallery ${idx + 1}`}
                  className="w-full h-36 rounded-xl object-cover border shadow-2xs hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Contact Inquiry & Quick Actions */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <Card accentGoldTop className="p-6 space-y-4 shadow-xl bg-white">
            <h3 className="text-lg font-bold text-navy-900">Hospital Contact & Directions</h3>
            <p className="text-xs text-gray-500">
              Need assistance or directions to {hospital.name}?
            </p>

            <Button
              variant="gold"
              size="lg"
              fullWidth
              onClick={() => setIsContactModalOpen(true)}
              leftIcon={<Send className="w-4 h-4" />}
            >
              Send Branch Query
            </Button>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Button variant="outline" size="sm" fullWidth leftIcon={<Navigation className="w-4 h-4" />}>
                Open Google Maps Directions
              </Button>
            </a>

            <div className="p-4 bg-sky-50 text-slate-900 rounded-xl space-y-2 border border-sky-200">
              <p className="text-[10px] text-[#00529B] font-bold uppercase">24/7 Emergency Line</p>
              <p className="text-lg font-extrabold text-[#00529B]">{hospital.emergency}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Contact Inquiry Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={`Contact ${hospital.name}`}
        description="Fill out the form below to send your query directly to our hospital reception desk."
      >
        <form onSubmit={handleSubmit(onSendHospitalInquiry)} className="space-y-4">
          <Input
            label="Your Full Name"
            placeholder="Name"
            error={errors.name?.message}
            {...register('name', { required: 'Name is required' })}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91..."
              error={errors.phone?.message}
              {...register('phone', { required: 'Phone is required' })}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="email@example.com"
              error={errors.email?.message}
              {...register('email', { required: 'Email is required' })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-semibold text-navy-900">Your Query / Case Details</label>
            <textarea
              rows={4}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              placeholder="Type your message regarding OPD timings, admission, or facilities..."
              {...register('message', { required: 'Message is required' })}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsContactModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gold" leftIcon={<Send className="w-4 h-4" />}>
              Submit Inquiry
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
