import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, ShieldAlert, Send, Star, MessageSquare,
  Building, CheckCircle2, ChevronRight, AlertCircle, FileText, Search,
  MessageCircle, ExternalLink, Calendar, HeartPulse, UserCheck, RefreshCw, X
} from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import {
  MAIN_CONTACT_DETAILS, HOSPITAL_LOCATIONS, DEPARTMENT_CONTACTS,
  SUPPORT_CHANNELS, HospitalLocation
} from '@/data/contactData';

export const ContactPage: React.FC = () => {
  const { success, warning, error } = useToast();

  // Active Tabs for Form
  const [activeFormTab, setActiveFormTab] = useState<'enquiry' | 'appointment' | 'feedback'>('enquiry');

  // Selected Location for Map
  const [selectedLocation, setSelectedLocation] = useState<HospitalLocation>(HOSPITAL_LOCATIONS[0]);

  // Search filter for Department Contacts
  const [departmentSearch, setDepartmentSearch] = useState('');

  // 1. Enquiry Form State & Validation
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    department: 'General Helpdesk',
  });
  const [enquiryErrors, setEnquiryErrors] = useState<Record<string, string>>({});
  const [isEnquirySubmitting, setIsEnquirySubmitting] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  // 2. Feedback Form State & Validation
  const [feedbackForm, setFeedbackForm] = useState({
    patientName: '',
    patientIdOrPhone: '',
    email: '',
    rating: 5,
    category: 'Inpatient Care',
    feedbackMessage: '',
    recommend: 'Yes',
  });
  const [feedbackErrors, setFeedbackErrors] = useState<Record<string, string>>({});
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Validation Handlers
  const validateEnquiryForm = () => {
    const errs: Record<string, string> = {};
    if (!enquiryForm.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!enquiryForm.phone.trim() || enquiryForm.phone.length < 10) errs.phone = 'Valid 10-digit phone number required.';
    if (!enquiryForm.email.trim() || !enquiryForm.email.includes('@')) errs.email = 'Valid email address required.';
    if (!enquiryForm.message.trim() || enquiryForm.message.length < 10) errs.message = 'Please provide a detailed query (min 10 chars).';

    setEnquiryErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateFeedbackForm = () => {
    const errs: Record<string, string> = {};
    if (!feedbackForm.patientName.trim()) errs.patientName = 'Patient Name is required.';
    if (!feedbackForm.patientIdOrPhone.trim()) errs.patientIdOrPhone = 'Patient ID or Phone is required.';
    if (!feedbackForm.feedbackMessage.trim() || feedbackForm.feedbackMessage.length < 10) errs.feedbackMessage = 'Please detail your experience (min 10 chars).';

    setFeedbackErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Submit Handlers
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEnquiryForm()) {
      warning('Please fix the errors in the form before submitting.');
      return;
    }

    setIsEnquirySubmitting(true);
    setTimeout(() => {
      setIsEnquirySubmitting(false);
      setEnquirySubmitted(true);
      success('Your enquiry has been received! Ref Ticket #: VHN-' + Math.floor(100000 + Math.random() * 900000));
    }, 1200);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFeedbackForm()) {
      warning('Please provide all required feedback details.');
      return;
    }

    setIsFeedbackSubmitting(true);
    setTimeout(() => {
      setIsFeedbackSubmitting(false);
      setFeedbackSubmitted(true);
      success('Thank you for your valuable feedback! Our Quality Assurance desk has logged your response.');
    }, 1200);
  };

  // Filtered Departments
  const filteredDepartments = DEPARTMENT_CONTACTS.filter(
    (dept) =>
      dept.department.toLowerCase().includes(departmentSearch.toLowerCase()) ||
      dept.headName.toLowerCase().includes(departmentSearch.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-50 pb-20 space-y-12">
      {/* 1. HERO HEADER & EMERGENCY HOTLINE BANNER */}
      <section className="relative bg-[#060c20] text-white pt-10 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold" size="sm">24/7 Clinical & Administrative Support</Badge>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              Contact <span className="text-sky-400">MEDICARE Hospitals</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Our clinical helpdesk, emergency trauma team, and international patient coordinators are available around the clock.
            </p>
          </div>

          {/* Emergency Hotline Card Banner */}
          <div className="bg-[#08132d] border-2 border-red-500/70 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-8 h-8 animate-pulse" />
              </div>
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">
                  24/7 Level-1 Trauma Emergency Hotline
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">Acute Emergency & ICU Dispatch</h3>
                <p className="text-xs text-gray-300">Instant ambulance allocation & cardiac cath lab standby in Pune</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${MAIN_CONTACT_DETAILS.emergencyHotline}`}
                className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>Call {MAIN_CONTACT_DETAILS.emergencyHotline}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 2. 4 SUPPORT CHANNELS GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUPPORT_CHANNELS.map((channel) => (
            <div key={channel.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-extrabold">{channel.badge}</span>
                </div>
                <h4 className="text-base font-black text-navy-950">{channel.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{channel.description}</p>
                <p className="text-sm font-black text-amber-600 pt-1">{channel.contactNumber}</p>
              </div>
              <a
                href={channel.title.includes('WhatsApp') ? `https://wa.me/912027659000` : `tel:${channel.contactNumber}`}
                target={channel.title.includes('WhatsApp') ? '_blank' : '_self'}
                rel="noreferrer"
                className="w-full py-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all mt-2"
              >
                <span>{channel.actionText}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </section>

        {/* 3. ENQUIRY FORM & FEEDBACK TABS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Container */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
              {/* Form Navigation Tabs */}
              <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => { setActiveFormTab('enquiry'); setEnquirySubmitted(false); }}
                  className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeFormTab === 'enquiry'
                      ? 'bg-white text-navy-950 shadow-sm border border-gray-200'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  General Enquiry
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveFormTab('appointment'); setEnquirySubmitted(false); }}
                  className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeFormTab === 'appointment'
                      ? 'bg-white text-navy-950 shadow-sm border border-gray-200'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  Appointment Help
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveFormTab('feedback'); setFeedbackSubmitted(false); }}
                  className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeFormTab === 'feedback'
                      ? 'bg-white text-navy-950 shadow-sm border border-gray-200'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  Patient Feedback
                </button>
              </div>

              {/* TAB 1 & 2: ENQUIRY / APPOINTMENT FORM */}
              {(activeFormTab === 'enquiry' || activeFormTab === 'appointment') && (
                <>
                  {enquirySubmitted ? (
                    <div className="p-8 text-center bg-teal-50 border border-teal-200 rounded-2xl space-y-4">
                      <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-navy-950">Message Sent Successfully!</h3>
                      <p className="text-xs text-gray-600 max-w-md mx-auto">
                        Thank you for contacting MEDICARE Hospitals. Our administrative desk will review your query and respond via email or phone within 2 hours.
                      </p>
                      <Button
                        variant="teal"
                        size="sm"
                        onClick={() => {
                          setEnquirySubmitted(false);
                          setEnquiryForm({ fullName: '', phone: '', email: '', subject: 'General Inquiry', message: '', department: 'General Helpdesk' });
                        }}
                      >
                        Send Another Query
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <h3 className="text-lg font-black text-navy-950">
                          {activeFormTab === 'enquiry' ? 'Send a General Medical Enquiry' : 'Request Appointment Assistance'}
                        </h3>
                        <p className="text-xs text-gray-500">All queries are routed directly to our specialist desk.</p>
                      </div>

                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="font-bold text-navy-900">Full Name *</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={enquiryForm.fullName}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                            enquiryErrors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                          }`}
                        />
                        {enquiryErrors.fullName && <p className="text-[10px] text-red-500 font-semibold">{enquiryErrors.fullName}</p>}
                      </div>

                      {/* Phone & Email Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-navy-900">Phone Number *</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={enquiryForm.phone}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                              enquiryErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                            }`}
                          />
                          {enquiryErrors.phone && <p className="text-[10px] text-red-500 font-semibold">{enquiryErrors.phone}</p>}
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-navy-900">Email Address *</label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            value={enquiryForm.email}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                              enquiryErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                            }`}
                          />
                          {enquiryErrors.email && <p className="text-[10px] text-red-500 font-semibold">{enquiryErrors.email}</p>}
                        </div>
                      </div>

                      {/* Department Select */}
                      <div className="space-y-1">
                        <label className="font-bold text-navy-900">Target Department</label>
                        <select
                          value={enquiryForm.department}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, department: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                        >
                          <option value="General Helpdesk">General Helpdesk & Reception</option>
                          <option value="Cardiology">Cardiology & Cardiac Surgery</option>
                          <option value="Oncology">Oncology & Cancer Care</option>
                          <option value="Orthopedics">Orthopedics & Robotic Joint Replacement</option>
                          <option value="Neurology">Neurology & Neurosurgery</option>
                          <option value="Insurance TPA Desk">Insurance TPA & Cashless Claims</option>
                          <option value="International Patients">International Patient Concierge</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label className="font-bold text-navy-900">Your Message / Medical Query *</label>
                        <textarea
                          rows={4}
                          placeholder="Describe your inquiry, symptoms, or requested visit dates..."
                          value={enquiryForm.message}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                            enquiryErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                          }`}
                        />
                        {enquiryErrors.message && <p className="text-[10px] text-red-500 font-semibold">{enquiryErrors.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        fullWidth
                        isLoading={isEnquirySubmitting}
                        leftIcon={<Send className="w-4 h-4" />}
                      >
                        Submit Enquiry
                      </Button>
                    </form>
                  )}
                </>
              )}

              {/* TAB 3: PATIENT FEEDBACK FORM */}
              {activeFormTab === 'feedback' && (
                <>
                  {feedbackSubmitted ? (
                    <div className="p-8 text-center bg-amber-50 border border-amber-200 rounded-2xl space-y-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500 text-navy-950 flex items-center justify-center mx-auto">
                        <Star className="w-6 h-6 fill-navy-950 text-navy-950" />
                      </div>
                      <h3 className="text-xl font-black text-navy-950">Feedback Recorded!</h3>
                      <p className="text-xs text-gray-600 max-w-md mx-auto">
                        Thank you for helping us elevate healthcare standards. Your experience ratings have been logged with our Chief Medical Quality Audit Board.
                      </p>
                      <Button
                        variant="gold"
                        size="sm"
                        onClick={() => {
                          setFeedbackSubmitted(false);
                          setFeedbackForm({ patientName: '', patientIdOrPhone: '', email: '', rating: 5, category: 'Inpatient Care', feedbackMessage: '', recommend: 'Yes' });
                        }}
                      >
                        Submit Another Feedback
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <h3 className="text-lg font-black text-navy-950">Patient Experience & Quality Feedback</h3>
                        <p className="text-xs text-gray-500">Your feedback drives our continuous clinical improvement.</p>
                      </div>

                      {/* Patient Name */}
                      <div className="space-y-1">
                        <label className="font-bold text-navy-900">Patient / Visitor Name *</label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={feedbackForm.patientName}
                          onChange={(e) => setFeedbackForm({ ...feedbackForm, patientName: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                            feedbackErrors.patientName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                          }`}
                        />
                        {feedbackErrors.patientName && <p className="text-[10px] text-red-500 font-semibold">{feedbackErrors.patientName}</p>}
                      </div>

                      {/* Patient ID & Category */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-navy-900">Patient ID / Contact Phone *</label>
                          <input
                            type="text"
                            placeholder="UHID Number or Phone"
                            value={feedbackForm.patientIdOrPhone}
                            onChange={(e) => setFeedbackForm({ ...feedbackForm, patientIdOrPhone: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                              feedbackErrors.patientIdOrPhone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                            }`}
                          />
                          {feedbackErrors.patientIdOrPhone && <p className="text-[10px] text-red-500 font-semibold">{feedbackErrors.patientIdOrPhone}</p>}
                        </div>

                        <div className="space-y-1">
                          <label className="font-bold text-navy-900">Service Category</label>
                          <select
                            value={feedbackForm.category}
                            onChange={(e) => setFeedbackForm({ ...feedbackForm, category: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                          >
                            <option value="Inpatient Care">Inpatient Admission / ICU</option>
                            <option value="OPD Consultation">Outpatient Doctor Visit</option>
                            <option value="Emergency Care">24/7 Casualty & Emergency</option>
                            <option value="Diagnostics Lab">Radiology & Lab Testing</option>
                            <option value="Billing & Discharge">Pharmacy & Discharge</option>
                          </select>
                        </div>
                      </div>

                      {/* Rating Selection Stars */}
                      <div className="space-y-1.5">
                        <label className="font-bold text-navy-900">Overall Rating Score</label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFeedbackForm({ ...feedbackForm, rating: star })}
                              className={`p-2 rounded-xl transition-all border ${
                                feedbackForm.rating >= star
                                  ? 'bg-amber-100 border-amber-400 text-amber-600'
                                  : 'bg-gray-50 border-gray-200 text-gray-400'
                              }`}
                            >
                              <Star className={`w-6 h-6 ${feedbackForm.rating >= star ? 'fill-amber-500' : ''}`} />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-navy-900 ml-2">
                            {feedbackForm.rating} / 5 ({feedbackForm.rating === 5 ? 'Exceptional' : feedbackForm.rating >= 4 ? 'Good' : 'Needs Improvement'})
                          </span>
                        </div>
                      </div>

                      {/* Feedback Message */}
                      <div className="space-y-1">
                        <label className="font-bold text-navy-900">Your Detailed Experience & Feedback *</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about the doctor care, nursing staff, cleanliness, or waiting time..."
                          value={feedbackForm.feedbackMessage}
                          onChange={(e) => setFeedbackForm({ ...feedbackForm, feedbackMessage: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:outline-none ${
                            feedbackErrors.feedbackMessage ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                          }`}
                        />
                        {feedbackErrors.feedbackMessage && <p className="text-[10px] text-red-500 font-semibold">{feedbackErrors.feedbackMessage}</p>}
                      </div>

                      <Button
                        type="submit"
                        variant="teal"
                        size="lg"
                        fullWidth
                        isLoading={isFeedbackSubmitting}
                        leftIcon={<Star className="w-4 h-4" />}
                      >
                        Submit Quality Feedback
                      </Button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Right Column: Contact Cards & Quick Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="navy" accentGoldTop className="p-6 space-y-4">
              <Badge variant="gold" size="sm">Main Quaternary Desk</Badge>
              <h3 className="text-xl font-black text-white">{MAIN_CONTACT_DETAILS.hospitalName}</h3>
              <div className="space-y-3 text-xs text-gray-300 pt-2 border-t border-navy-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{MAIN_CONTACT_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>OPD Helpline: {MAIN_CONTACT_DETAILS.opdHelpline}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{MAIN_CONTACT_DETAILS.mainEmail}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{MAIN_CONTACT_DETAILS.opdHours}</span>
                </div>
              </div>
            </Card>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h4 className="text-sm font-black text-navy-950 uppercase tracking-wider border-b pb-2">Dedicated Service Desks</h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="font-bold text-gray-700">International Patient Concierge</span>
                  <span className="font-extrabold text-teal-700">{MAIN_CONTACT_DETAILS.internationalDeskPhone}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="font-bold text-gray-700">Cashless TPA Authorization</span>
                  <span className="font-extrabold text-navy-950">+91 20 2765 9160</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="font-bold text-gray-700">24/7 Blood Bank & Pharmacy</span>
                  <span className="font-extrabold text-red-600">Ext. 104 / 105</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-bold text-gray-700">Careers & HR Desk</span>
                  <span className="font-extrabold text-amber-600">{MAIN_CONTACT_DETAILS.careersEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MAP-READY LOCATIONS & INTERACTIVE MAP SECTION */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <Badge variant="teal" size="sm">Our Hospital Network</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Locations & Map Navigation</h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
              Select a hospital location to view directions, OPD hours, contact extensions, and embedded map navigation.
            </p>
          </div>

          {/* Location Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOSPITAL_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedLocation(loc)}
                className={`p-4 rounded-2xl border text-left transition-all space-y-2 flex flex-col justify-between ${
                  selectedLocation.id === loc.id
                    ? 'bg-navy-950 text-white border-amber-400 shadow-lg scale-[1.02]'
                    : 'bg-white text-navy-950 border-gray-200 hover:border-teal-500 shadow-sm'
                }`}
              >
                <div className="space-y-1">
                  {loc.isMainCampus && (
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-navy-950 text-[9px] font-black uppercase">
                      Main Campus
                    </span>
                  )}
                  <h4 className="text-sm font-black">{loc.name}</h4>
                  <p className={`text-[11px] ${selectedLocation.id === loc.id ? 'text-teal-300' : 'text-gray-500'}`}>
                    {loc.type}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-200/20">
                  <span className="font-bold">View Location Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Selected Location Card & Map Frame */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Location Details Left */}
            <div className="lg:col-span-5 space-y-5">
              <Badge variant="gold" size="sm">{selectedLocation.type}</Badge>
              <h3 className="text-2xl font-black text-navy-950">{selectedLocation.name}</h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{selectedLocation.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Desk Phone: <strong>{selectedLocation.phone}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Emergency Hotline: <strong className="text-red-600">{selectedLocation.emergency}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Email: {selectedLocation.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Timings: {selectedLocation.opdHours}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={selectedLocation.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Frame Right */}
            <div className="lg:col-span-7 h-72 sm:h-96 rounded-2xl overflow-hidden border border-gray-300 shadow-inner bg-gray-100 relative">
              <iframe
                title={selectedLocation.name}
                src={selectedLocation.googleMapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* 5. DEPARTMENT DIRECT CONTACT EXTENSIONS TABLE */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <Badge variant="gold" size="sm">Direct Extensions</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Department Contacts Directory</h2>
            </div>
            {/* Search Input Filter */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search department or doctor..."
                value={departmentSearch}
                onChange={(e) => setDepartmentSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#070e24] text-white uppercase text-[10px] tracking-wider font-extrabold">
                  <tr>
                    <th className="p-4">Department & Specialty</th>
                    <th className="p-4">Head / In-Charge</th>
                    <th className="p-4">Direct Phone</th>
                    <th className="p-4">Extension</th>
                    <th className="p-4">Email Contact</th>
                    <th className="p-4">Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 font-medium">
                  {filteredDepartments.length > 0 ? (
                    filteredDepartments.map((dept) => (
                      <tr key={dept.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-black text-navy-950">{dept.department}</td>
                        <td className="p-4 text-gray-700">{dept.headName}</td>
                        <td className="p-4 font-extrabold text-teal-700">{dept.directPhone}</td>
                        <td className="p-4 font-bold text-amber-600">{dept.extension}</td>
                        <td className="p-4 text-gray-600">{dept.email}</td>
                        <td className="p-4 font-semibold text-navy-900">{dept.timing}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-gray-500">
                        No departments found matching "{departmentSearch}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;
