import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Calendar,
  ArrowRight,
  MapPin,
  Phone,
  Navigation,
  Search,
  Check,
  X,
  MessageCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  Award,
  Video,
  FileText,
  CreditCard,
  UserCheck,
  ChevronRight,
  Globe,
  Star,
  Activity,
  HeartPulse,
  Brain,
  Bone,
} from 'lucide-react';
import { specialtyService } from '@/services/specialtyService';
import { Specialty, SPECIALTIES_DATA } from '@/data/specialtyData';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';
import { HOSPITALS_EXTENDED_DATA } from '@/data/hospitalData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { FAQAccordion } from '@/components/specialties/FAQAccordion';
import { PageLoader } from '@/components/common/Loading';
import { ErrorState } from '@/components/common/ErrorState';

export const SpecialtyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [specialty, setSpecialty] = useState<Specialty | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Form State for Quick Appointment Booking
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Hitech City, Hyderabad');
  const [consultationType, setConsultationType] = useState('Physical Consultation');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [formSuccessMessage, setFormSuccessMessage] = useState('');
  const [tabType, setTabType] = useState<'india' | 'international'>('india');

  useEffect(() => {
    const loadSpecialty = async () => {
      setIsLoading(true);
      if (slug) {
        const found = await specialtyService.getSpecialtyBySlug(slug);
        setSpecialty(found);
      }
      setIsLoading(false);
    };
    loadSpecialty();
  }, [slug]);

  if (isLoading) {
    return <PageLoader message="Loading Specialty Department..." />;
  }

  // Fallback to Cardiology if requested slug is not found directly
  const activeSpecialty = specialty || SPECIALTIES_DATA[0];

  // Associated Doctors matched by specialty substring or default pool
  const departmentDoctors = DOCTORS_DATA.filter(
    (doc) =>
      doc.specialty.toLowerCase().includes(activeSpecialty.associatedDoctorSpecialty.toLowerCase()) ||
      activeSpecialty.associatedDoctorSpecialty.toLowerCase().includes(doc.specialty.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(activeSpecialty.name.toLowerCase()) ||
      activeSpecialty.name.toLowerCase().includes(doc.specialty.toLowerCase())
  );

  const displayDoctors = departmentDoctors.length > 0 ? departmentDoctors : DOCTORS_DATA.slice(0, 3);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !mobileNumber.trim()) {
      alert('Please fill in your name and mobile number.');
      return;
    }
    setFormSuccessMessage(`Thank you ${patientName}! Your appointment request for ${activeSpecialty.name} at ${selectedLocation} has been submitted. Our care coordinator will call you shortly on ${mobileNumber}.`);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      
      {/* 1. TOP UTILITY QUICK NAVIGATION PILLS BAR */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap text-xs font-semibold">
          <div className="flex items-center gap-3 flex-wrap">
            <Link to="/doctors" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <UserCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Experienced Doctors</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/insurance" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <CreditCard className="w-3.5 h-3.5 text-sky-400" />
              <span>Family Card</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/second-opinion" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
              <span>Second Opinion</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/home-healthcare" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Home Health Care</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/health-checkups" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>Health Check-ups</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 bg-amber-400/10 text-amber-300 px-3 py-1 rounded-full border border-amber-400/20 text-[11px] font-extrabold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>NABH & JCI Accredited Quaternary Hospital</span>
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMB NAVIGATION */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500">
          <Link to="/" className="hover:text-[#00529B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/specialities" className="hover:text-[#00529B] transition-colors">Specialties</Link>
          <span>/</span>
          <span className="text-[#00529B] font-extrabold">{activeSpecialty.name}</span>
          <span>/</span>
          <span className="text-slate-400">Hyderabad</span>
        </div>
      </div>

      {/* 3. HERO BANNER WITH DOCTOR SEARCH BAR & BOOKING FORM */}
      <section className="bg-[#00529B] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          
          {/* Top Doctor Search Bar Dropdown */}
          <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between gap-3">
            <h3 className="text-sm sm:text-base font-extrabold text-white shrink-0">
              Find & Book the Right Specialist Doctor Near You
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full sm:w-56 bg-white text-slate-800 text-xs font-bold px-3 py-2.5 rounded-xl border-0 focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="Hitech City, Hyderabad">Multi-Speciality - Hitech City</option>
                <option value="Begumpet, Hyderabad">Begumpet - Hyderabad</option>
                <option value="Chandanagar, Hyderabad">Chandanagar - Hyderabad</option>
                <option value="Visakhapatnam">Medicare Hospitals - Visakhapatnam</option>
              </select>
              
              <select
                value={activeSpecialty.slug}
                onChange={(e) => navigate(`/specialities/${e.target.value}`)}
                className="w-full sm:w-56 bg-white text-slate-800 text-xs font-bold px-3 py-2.5 rounded-xl border-0 focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                {SPECIALTIES_DATA.map(s => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>

              <button
                onClick={() => navigate('/doctors')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors shrink-0 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search For Best Doctors</span>
              </button>
            </div>
          </div>

          {/* Main Hero Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Title, Description, Address & Action Pills) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold tracking-wide uppercase border border-white/30">
                  Centre of Excellence • Hyderabad
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-white tracking-tight">
                  Best {activeSpecialty.name} Hospital in Hitech City, Hyderabad Near You
                </h1>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-medium">
                  {activeSpecialty.overview}
                </p>
              </div>

              {/* Full Address Box */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-sky-50 font-semibold leading-snug">
                  The Lane of IBIS Hotels, Behind Cyber Towers, In, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081
                </p>
              </div>

              {/* 3 White Action Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-[#00529B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#00529B]" />
                  <span>Directions</span>
                </a>

                <button
                  onClick={() => navigate(`/appointments?specialty=${activeSpecialty.slug}`)}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-[#00529B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#00529B]" />
                  <span>Appointment</span>
                </button>

                <a
                  href="tel:04068334455"
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-[#00529B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00529B]" />
                  <span>Call Hospital</span>
                </a>
              </div>
            </div>

            {/* Right Column: Appointment Booking Form Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-3xl p-6 sm:p-7 text-slate-900 shadow-2xl border border-slate-100 relative">
                
                {/* Form Tabs: India | International */}
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-5">
                  <button
                    type="button"
                    onClick={() => setTabType('india')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      tabType === 'india'
                        ? 'bg-[#00529B] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    India
                  </button>
                  <button
                    type="button"
                    onClick={() => setTabType('international')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      tabType === 'international'
                        ? 'bg-[#00529B] text-white shadow-xs'
                        : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                    }`}
                  >
                    International
                  </button>
                </div>

                {formSuccessMessage ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-extrabold text-emerald-900 text-sm">Booking Request Submitted!</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed font-medium">{formSuccessMessage}</p>
                    <button
                      type="button"
                      onClick={() => setFormSuccessMessage('')}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Book Another OPD
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Name*</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00529B]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Mobile Number*</label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-digit phone number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00529B]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Select Location*</label>
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00529B]"
                        >
                          <option value="Hitech City, Hyderabad">Hitech City, Hyd</option>
                          <option value="Begumpet, Hyderabad">Begumpet, Hyd</option>
                          <option value="Chandanagar, Hyderabad">Chandanagar, Hyd</option>
                          <option value="Visakhapatnam">Visakhapatnam</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Select Speciality*</label>
                        <input
                          type="text"
                          readOnly
                          value={activeSpecialty.name}
                          className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Consultation Mode</label>
                      <select
                        value={consultationType}
                        onChange={(e) => setConsultationType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00529B]"
                      >
                        <option value="Physical Consultation">Physical Consultation (In-Hospital)</option>
                        <option value="Video Consultation">Video Tele-Consultation</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="rounded text-[#00529B] focus:ring-[#00529B]"
                      />
                      <label htmlFor="terms" className="text-[10px] text-slate-500 font-medium">
                        I agree to the Medicare <Link to="/privacy" className="text-[#00529B] underline">Privacy Policy</Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!agreedTerms}
                      className="w-full py-3.5 rounded-2xl bg-[#00529B] hover:bg-[#00407A] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                    >
                      Schedule Appointment
                    </button>
                  </form>
                )}

                {/* 30-Second Quick Helper Badge */}
                <div className="mt-4 p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between text-amber-900 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="text-base">⌛</span>
                    <div>
                      <p className="font-extrabold text-[11px]">Feeling unwell?</p>
                      <p className="text-[10px] text-amber-700">Book doctor appointment in <span className="font-bold underline text-[#00529B]">Just 30 Seconds</span></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FULL WIDTH FLOWING OPEN EDITORIAL SECTIONS (ZERO BOXED BLOCKS - 100% WIDTH EXTENDED TEXT LAYOUT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 w-full">

        {/* SECTION 1: WHY CHOOSE MEDICARE HOSPITALS AT HYDERABAD FOR [SPECIALTY] (OPEN FULL WIDTH EDITORIAL ROWS) */}
        {activeSpecialty.whyChoosePoints && activeSpecialty.whyChoosePoints.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6 w-full">
            <div className="space-y-3 border-b border-slate-200 pb-5 w-full">
              <div className="flex items-center gap-2 text-[#00529B] text-xs font-black uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Clinical Excellence Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why Choose Medicare Hospitals at Hyderabad for {activeSpecialty.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-5xl">
                {activeSpecialty.whyChooseDesc}
              </p>
            </div>

            {/* OPEN FULL-WIDTH DIVIDED ROWS (NO BOXED BLOCKS) */}
            <div className="divide-y divide-slate-200/80 w-full">
              {activeSpecialty.whyChoosePoints.map((point, idx) => (
                <div key={idx} className="py-4.5 first:pt-0 last:pb-0 flex items-start gap-4 w-full">
                  <div className="w-7 h-7 rounded-full bg-sky-100 text-[#00529B] flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-extrabold text-base text-slate-900">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: OUR [SPECIALTY] DOCTORS (OPEN FULL WIDTH EXTENDED ROWS) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 w-full">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our {activeSpecialty.name} Doctors at Medicare Hospitals, Hyderabad
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Renowned specialists committed to delivering world-class compassionate healthcare.
              </p>
            </div>
            <button
              onClick={() => navigate('/doctors')}
              className="px-6 py-3 rounded-2xl bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-md transition-all shrink-0 cursor-pointer"
            >
              Consult a Specialist
            </button>
          </div>

          <div className="divide-y divide-slate-200/90 w-full">
            {displayDoctors.map((doc) => (
              <div key={doc.id} className="py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                <div className="flex items-center gap-5 min-w-0 flex-1">
                  <img
                    src={doc.photoUrl}
                    alt={doc.name}
                    className="w-22 h-22 rounded-2xl object-cover object-top border-2 border-slate-100 shadow-sm shrink-0"
                  />
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 bg-sky-100 text-[#00529B] text-[10px] font-black uppercase rounded-full">
                        {doc.specialty}
                      </span>
                      <span className="text-xs text-amber-600 font-bold flex items-center gap-1">
                        ★ {doc.rating} ({doc.reviewCount || doc.reviewsCount || 150}+ Verified Patient Reviews)
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 truncate">{doc.name}</h3>
                    <p className="text-xs text-slate-600 font-bold truncate">{doc.qualification}</p>
                    <p className="text-xs text-slate-500 font-semibold">{doc.experienceYears}+ Years Clinical Experience • OPD Consultation Fee: ₹{doc.fee}</p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-center">
                  <Link
                    to={`/doctors/${doc.id}`}
                    className="px-6 py-3.5 rounded-2xl bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Book Appointment Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EXPERT CARE SERVICES & ADVANCED TECHNOLOGY (OPEN FULL WIDTH DIVIDED ROWS) */}
        {activeSpecialty.advancedTechnologies && activeSpecialty.advancedTechnologies.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6 w-full">
            <div className="space-y-2 border-b border-slate-200 pb-5 w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Expert {activeSpecialty.name} Care Services & Advanced Technology
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-5xl">
                Healthcare at Medicare Hospitals is powered by state-of-the-art diagnostic & surgical technology designed to deliver optimal clinical outcomes:
              </p>
            </div>

            <div className="divide-y divide-slate-200/80 w-full">
              {activeSpecialty.advancedTechnologies.map((tech, idx) => (
                <div key={idx} className="py-4.5 first:pt-0 last:pb-0 flex items-start gap-4 w-full">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#00529B] flex items-center justify-center shrink-0 mt-0.5 border border-sky-100">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-extrabold text-base text-slate-900">{tech.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: MEDICARE SERVICES AND TREATMENTS (OPEN CONTINUOUS FULL WIDTH EXTENDED SPECTRUM) */}
        {(activeSpecialty.diagnosticScreenings || activeSpecialty.medicalTreatments || activeSpecialty.specializedProcedures) && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-8 w-full">
            <div className="border-b border-slate-200 pb-5 w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Medicare {activeSpecialty.name} Services & Treatments Spectrum
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-5xl">
                Full spectrum of clinical services aimed at early diagnosis, non-invasive medical protocols, and advanced surgical care.
              </p>
            </div>

            <div className="space-y-8 w-full">
              
              {/* Category 1: Diagnostic Screenings */}
              {activeSpecialty.diagnosticScreenings && (
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <h3 className="font-extrabold text-base text-[#00529B] uppercase tracking-wider flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      1. Diagnostic Screenings & Early Detection
                    </h3>
                    <span className="text-xs font-extrabold text-slate-500">{activeSpecialty.diagnosticScreenings.length} Tests Available</span>
                  </div>

                  <div className="divide-y divide-slate-200/80 w-full">
                    {activeSpecialty.diagnosticScreenings.map((diag, i) => (
                      <div key={i} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5 w-full">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                          ✓
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{diag.name}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{diag.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 2: Non-Invasive Medical Treatments */}
              {activeSpecialty.medicalTreatments && (
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <h3 className="font-extrabold text-base text-[#00529B] uppercase tracking-wider flex items-center gap-2">
                      <Stethoscope className="w-5 h-5" />
                      2. Non-Invasive & Medical Treatments
                    </h3>
                    <span className="text-xs font-extrabold text-slate-500">{activeSpecialty.medicalTreatments.length} Protocols Available</span>
                  </div>

                  <div className="divide-y divide-slate-200/80 w-full">
                    {activeSpecialty.medicalTreatments.map((med, i) => (
                      <div key={i} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5 w-full">
                        <div className="w-6 h-6 rounded-full bg-sky-100 text-[#00529B] flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                          ✓
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{med.name}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{med.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 3: Specialized Interventions & Surgeries */}
              {activeSpecialty.specializedProcedures && (
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <h3 className="font-extrabold text-base text-[#00529B] uppercase tracking-wider flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      3. Specialized Interventions & Surgeries
                    </h3>
                    <span className="text-xs font-extrabold text-slate-500">{activeSpecialty.specializedProcedures.length} Surgical Options</span>
                  </div>

                  <div className="divide-y divide-slate-200/80 w-full">
                    {activeSpecialty.specializedProcedures.map((proc, i) => (
                      <div key={i} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5 w-full">
                        <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                          ✓
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900">{proc.name}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{proc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* SECTION 5: ASSOCIATED TPA & CASHLESS INSURANCE SERVICES (FULL WIDTH) */}
        <section className="w-full bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-3xl p-6 sm:p-10 border border-sky-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-3xl">
            <span className="px-3 py-1 bg-[#00529B] text-white text-[10px] font-black uppercase rounded-full tracking-wider">
              Cashless Hospitalisation
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Associated TPA & Cashless Insurance Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              At Medicare Hospitals, we have partnered with a wide range of leading insurance companies and health benefit networks (Star Health, HDFC ERGO, ICICI Lombard, Care Insurance, Bajaj Allianz, PMJAY, GIPSA PPN) to make quality healthcare accessible and stress-free.
            </p>
          </div>

          <Link
            to="/insurance"
            className="px-8 py-4 rounded-2xl bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <CreditCard className="w-5 h-5" />
            <span>Check Coverage & Insurance</span>
          </Link>
        </section>

        {/* SECTION 6: PATIENT TESTIMONIALS & SUCCESS STORIES (OPEN FULL WIDTH EXTENDED ROWS) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6 w-full">
          <div className="flex items-center justify-between border-b border-slate-200 pb-5 w-full">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Patient Testimonials & Healing Stories</h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Real recovery experiences from our {activeSpecialty.name} patients</p>
            </div>
            <Link to="/about" className="text-xs font-extrabold text-[#00529B] hover:underline flex items-center gap-1">
              <span>VIEW ALL TESTIMONIALS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-slate-200/80 w-full">
            <div className="py-4 first:pt-0 last:pb-0 space-y-3 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-xs font-extrabold text-[#00529B]">Medicare Hitech City</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                "I was treated at Medicare Hospitals for {activeSpecialty.name}. The specialist doctors and nursing team provided outstanding medical attention. My procedure was completely successful and recovery was faster than expected!"
              </p>
              <div className="flex items-center justify-between text-xs pt-1 font-bold text-slate-600">
                <span>Verified Patient Review</span>
                <span className="text-[#00529B] font-extrabold">{activeSpecialty.name} Care Unit</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: STILL HAVE QUESTIONS? 24/7 EXPERT CONSULTATION BANNER (FULL WIDTH) */}
        <section className="w-full bg-gradient-to-r from-[#00529B] via-[#00407A] to-[#002B52] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-amber-300 text-[10px] font-black uppercase tracking-widest block">24/7 Emergency & Outpatient Helpline</span>
            <h3 className="text-2xl font-black text-white">Still have questions? Get in touch with our experts</h3>
            <p className="text-xs sm:text-sm text-sky-100 font-medium">Speak directly with our care coordinators or schedule an instant OPD consultation.</p>
          </div>
          <button
            onClick={() => navigate('/appointments')}
            className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Book Appointment Now
          </button>
        </section>

        {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (FULL WIDTH) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-8 w-full">
          <div className="border-b border-slate-200 pb-5 w-full">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Common queries about our {activeSpecialty.name} services</p>
          </div>
          <FAQAccordion faqs={activeSpecialty.faqs} />
        </section>

        {/* SECTION 9: LATEST HEALTH ARTICLES & BLOGS WITH TOPIC THUMBNAIL IMAGES */}
        {activeSpecialty.healthArticles && activeSpecialty.healthArticles.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6 w-full">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5 w-full">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Stay Updated with the Latest Health Articles</h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Medical insights written by our specialist doctors</p>
              </div>
              <Link to="/health-library" className="text-xs font-extrabold text-[#00529B] hover:underline flex items-center gap-1">
                <span>VIEW ALL BLOGS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="divide-y divide-slate-200/80 w-full">
              {activeSpecialty.healthArticles.map((art, idx) => {
                const articleSlug = art.slug || art.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                const articleImg = art.imageUrl || 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80';
                return (
                  <Link
                    key={idx}
                    to={`/health-articles/${articleSlug}`}
                    className="py-4 sm:py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full group cursor-pointer hover:bg-slate-50/90 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-2xl transition-all duration-200"
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <img
                        src={articleImg}
                        alt={art.title}
                        className="w-[110px] h-[65px] rounded-xl object-cover shrink-0 shadow-xs border border-slate-200 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-sky-100 text-[#00529B] text-[10px] font-black uppercase tracking-wider">
                          {art.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#00529B] transition-colors leading-snug line-clamp-2">
                          {art.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-bold shrink-0 self-end sm:self-center">
                      <span>{art.readTime}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 10: MULTI-LANGUAGE OPTIONS & REGIONAL HOSPITAL NETWORK (FULL WIDTH) */}
        <section className="w-full bg-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-2 flex-wrap pb-3 border-b border-slate-200/80">
            <Globe className="w-4 h-4 text-[#00529B]" />
            <span className="font-extrabold text-slate-800">Read this page in:</span>
            <span className="text-[#00529B] font-extrabold cursor-pointer hover:underline">తెలుగు (Telugu)</span>
            <span>•</span>
            <span className="text-[#00529B] font-extrabold cursor-pointer hover:underline">हिन्दी (Hindi)</span>
            <span>•</span>
            <span className="text-[#00529B] font-extrabold cursor-pointer hover:underline">اردو (Urdu)</span>
            <span>•</span>
            <span className="text-[#00529B] font-extrabold cursor-pointer hover:underline">ಕನ್ನಡ (Kannada)</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-slate-700 font-extrabold pt-1">
            <span className="text-slate-400 font-normal">Medicare Hospitals Network:</span>
            <Link to="/hospitals" className="hover:text-[#00529B]">Telangana</Link>
            <span>•</span>
            <Link to="/hospitals" className="hover:text-[#00529B]">Andhra Pradesh</Link>
            <span>•</span>
            <Link to="/hospitals" className="hover:text-[#00529B]">Maharashtra</Link>
            <span>•</span>
            <Link to="/hospitals" className="hover:text-[#00529B]">Karnataka</Link>
          </div>
        </section>

      </div>

    </div>
  );
};
