import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck, Award, Users, Heart, Cpu, FileCheck, Zap, Clock, Star,
  Briefcase, HeartPulse, ChevronRight, CheckCircle2, Building, Mail, PhoneCall,
  UserCheck, FileText, ArrowRight, Sparkles, MapPin, Send, X, Quote
} from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import {
  ABOUT_OVERVIEW, VISION_MISSION_VALUES, LEADERSHIP_TEAM, AWARDS_LIST,
  ACHIEVEMENTS_LIST, CAREER_OPPORTUNITIES, CSR_INITIATIVES, WHY_CHOOSE_US_FACTS,
  QUALITY_ACCREDITATIONS_DATA, PATIENT_RECOVERY_STORIES_DATA
} from '@/data/aboutData';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { success, warning } = useToast();

  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJobApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      warning('Please fill out all required contact fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantExperience('');
      setApplicantMessage('');
      success('Application submitted successfully! Our HR team will contact you shortly.');
    }, 1200);
  };

  return (
    <div className="w-full bg-white pb-20 space-y-12 font-sans">
      {/* 1. HERO SECTION & ABOUT MEDICARE HEALTH SYSTEMS */}
      <section className="relative bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white pt-10 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden shadow-xl">
        {/* Background Ambient Spheres */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-sky-200" />
            <span>{ABOUT_OVERVIEW.tagline}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white">
                About <span className="text-sky-200 font-black">MEDICARE Hospitals</span>
              </h1>
              <p className="text-xs sm:text-sm text-sky-50 leading-relaxed font-medium">
                {ABOUT_OVERVIEW.description}
              </p>

              {/* Stat Counters Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/20">
                <div className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-black text-white">{ABOUT_OVERVIEW.establishedYear}</p>
                  <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Established</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-black text-sky-100">{ABOUT_OVERVIEW.bedsCount}</p>
                  <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">ICU & Beds</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-black text-white">{ABOUT_OVERVIEW.doctorsCount}</p>
                  <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Specialists</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-black text-sky-100">{ABOUT_OVERVIEW.patientsServed}</p>
                  <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Right Hospital Building Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-5 shadow-2xl space-y-4">
                <img
                  src="/images/hospitals/medicare-hospitals-hitech-city.jpg"
                  alt="MEDICARE Main Building"
                  className="w-full h-56 object-cover rounded-2xl border border-white/30 shadow-md"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-white">Quaternary Care Flagship Campus</h3>
                  <p className="text-xs text-sky-50 leading-relaxed font-medium">
                    Equipped with 24/7 Level-1 Trauma Emergency, Mako 3D Robotic Surgery, Philips Azurion Cath Lab, and JCI accredited isolation ICUs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 2. VISION & MISSION */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">Core Purpose</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border border-sky-100 hover:border-sky-300 shadow-md space-y-4 relative overflow-hidden group transition-all">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#00529B] border border-sky-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-[#00529B]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{VISION_MISSION_VALUES.vision.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {VISION_MISSION_VALUES.vision.statement}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border border-sky-100 hover:border-sky-300 shadow-md space-y-4 relative overflow-hidden group transition-all">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#00529B] border border-sky-100 flex items-center justify-center shrink-0">
                <HeartPulse className="w-8 h-8 text-[#00529B]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{VISION_MISSION_VALUES.mission.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {VISION_MISSION_VALUES.mission.statement}
              </p>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">Guided By Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Core Values</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              The foundational pillars that direct every clinical procedure, nurse interaction, and administrative decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VISION_MISSION_VALUES.values.map((val, idx) => {
              const iconsMap: Record<string, React.ReactNode> = {
                Heart: <Heart className="w-6 h-6 text-red-500" />,
                ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00529B]" />,
                Cpu: <Cpu className="w-6 h-6 text-sky-600" />,
                FileCheck: <FileCheck className="w-6 h-6 text-blue-600" />,
                Users: <Users className="w-6 h-6 text-emerald-600" />,
              };

              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-3 hover:border-sky-300 hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 w-fit">
                    {iconsMap[val.icon] || <CheckCircle2 className="w-6 h-6 text-[#00529B]" />}
                  </div>
                  <h4 className="text-sm font-black text-slate-900">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-normal font-medium">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. ACHIEVEMENTS & METRICS */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-sky-100 shadow-md space-y-8 font-sans">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Our Clinical Achievements</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              Measuring healthcare success through verified clinical outcomes and life-saving interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS_LIST.map((ach) => (
              <div key={ach.id} className="bg-sky-50/70 border border-sky-100 hover:border-sky-300 p-6 rounded-2xl space-y-2 text-center shadow-xs transition-all">
                <p className="text-3xl sm:text-4xl font-black text-[#00529B]">{ach.metric}</p>
                <h4 className="text-sm font-black text-slate-900">{ach.label}</h4>
                <p className="text-xs text-slate-600 leading-snug font-medium">{ach.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. LEADERSHIP TEAM */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">Medical & Executive Governance</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Leadership Team</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              Guided by distinguished medical pioneers and seasoned hospital administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member) => (
              <Card key={member.id} className="bg-white border border-sky-100 rounded-3xl overflow-hidden hover:border-sky-300 hover:shadow-lg transition-all space-y-0 flex flex-col">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-black text-slate-900">{member.name}</h4>
                    <p className="text-xs font-extrabold text-[#00529B]">{member.role}</p>
                    <p className="text-[11px] text-slate-500 font-semibold">{member.qualifications}</p>
                    <p className="text-[10px] text-[#00529B] font-extrabold mt-1">{member.experience}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-2 line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. AWARDS & ACCREDITATIONS */}
        <section className="space-y-6 font-sans">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
              Recognitions
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Awards & Global Accreditations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS_LIST.map((award) => (
              <div key={award.id} className="bg-white p-6 rounded-3xl border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-50 text-[#00529B] border border-sky-100 rounded-2xl shrink-0 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#00529B]" />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00529B] text-white text-[10px] font-black uppercase tracking-wider">
                      {award.year}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{award.category}</span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 leading-snug">{award.title}</h4>
                  <p className="text-xs font-extrabold text-[#00529B]">{award.organization}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pt-0.5">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6B. QUALITY ASSURANCE & CERTIFICATIONS STANDARDS */}
        <section className="space-y-6 font-sans">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
              Quality Assurance & Certifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Hospital Quality & Safety Accreditations</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              Certified by premier global healthcare bodies for uncompromised patient safety, surgical precision, and zero-infection clinical protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITY_ACCREDITATIONS_DATA.map((q) => (
              <div key={q.id} className="bg-white p-6 rounded-3xl border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#00529B] border border-sky-100 text-[10px] font-black uppercase">
                      {q.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00529B] text-white text-[10px] font-black uppercase">
                      {q.score}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 leading-snug">{q.title}</h4>
                  <p className="text-xs font-extrabold text-[#00529B]">{q.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{q.description}</p>
                </div>
                <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs text-[#00529B] font-bold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00529B]" /> Verified Standard
                  </span>
                  <span className="text-[11px] text-slate-400">MEDICARE Certified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-sky-100 shadow-md space-y-8">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">Patient Advantage</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Choose MEDICARE Hospitals?</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              Delivering an unparalleled healthcare journey built on international standards, zero waiting queues, and high clinical success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_FACTS.map((fact, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
                <CheckCircle2 className="w-6 h-6 text-[#00529B]" />
                <h4 className="text-sm font-black text-slate-900">{fact.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{fact.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7B. PATIENT RECOVERY & CLINICAL SUCCESS STORIES */}
        <section className="space-y-6 font-sans">
          <div className="text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
              Patient Testimonials & Clinical Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Patient Recovery Stories</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              Real recovery journeys from patients who underwent complex life-saving procedures at MEDICARE Hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATIENT_RECOVERY_STORIES_DATA.map((story) => (
              <div key={story.id} className="bg-white p-6 rounded-3xl border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-[#00529B] border border-sky-100 text-xs font-black uppercase">
                      {story.badge}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-sky-200 absolute -top-1 -left-1 opacity-50" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic relative z-10 pl-4">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="p-3.5 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
                    <p className="text-xs font-black text-slate-900">Condition: <span className="font-medium text-slate-700">{story.condition}</span></p>
                    <p className="text-xs font-black text-[#00529B]">Treatment: <span className="font-medium text-slate-700">{story.treatmentReceived}</span></p>
                    <p className="text-xs font-extrabold text-[#00529B]">Doctor: <span className="font-semibold text-slate-800">{story.doctorName}</span></p>
                  </div>
                </div>

                <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={story.patientPhoto} alt={story.patientName} className="w-10 h-10 rounded-full object-cover border border-sky-200 shrink-0" />
                    <div>
                      <h4 className="text-sm font-black text-slate-900">{story.patientName} ({story.age} yrs)</h4>
                      <p className="text-xs text-slate-500 font-medium">{story.location}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00529B] text-white text-[10px] font-black uppercase shadow-xs">
                    {story.recoveryDays}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CSR (CORPORATE SOCIAL RESPONSIBILITY) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">Giving Back</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Corporate Social Responsibility (CSR)</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto">
              Extending life-saving healthcare access to rural and underprivileged communities across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CSR_INITIATIVES.map((csr) => (
              <div key={csr.id} className="bg-white rounded-3xl border border-sky-100 overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col">
                <img
                  src={csr.imageUrl}
                  alt={csr.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-sky-100 text-[#00529B] text-[10px] font-black">{csr.category}</span>
                    <h4 className="text-base font-black text-slate-900 mt-2">{csr.title}</h4>
                    <p className="text-xs font-extrabold text-[#00529B] mt-1">{csr.impact}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-2">{csr.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. CAREERS & TALENT */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-sky-100 shadow-md space-y-8 relative overflow-hidden font-sans">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100 pb-6">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
                Join Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Careers at MEDICARE</h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Work alongside internationally renowned specialists in state-of-the-art medical facilities.
              </p>
            </div>
            <button
              onClick={() => setSelectedJob(CAREER_OPPORTUNITIES[0].id)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] hover:from-[#003d75] hover:to-[#00529B] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Briefcase className="w-4 h-4" />
              <span>General Application</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_OPPORTUNITIES.map((job) => (
              <div key={job.id} className="bg-sky-50/70 border border-sky-100 hover:border-sky-300 p-6 rounded-2xl space-y-3 flex flex-col justify-between shadow-xs transition-all">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00529B] text-white text-[10px] font-black uppercase">{job.department}</span>
                    <span className="text-[10px] text-[#00529B] font-extrabold">{job.type}</span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 pt-1">{job.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">📍 {job.location} | ⏳ {job.experienceRequired}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pt-2">{job.description}</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="w-full py-2.5 rounded-xl bg-[#00529B] hover:bg-[#003d75] text-white text-xs font-black uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CAREER APPLICATION MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl border border-gray-200">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <Badge variant="teal" size="sm">Job Application</Badge>
              <h3 className="text-xl font-black text-navy-950">
                Apply for Position
              </h3>
              <p className="text-xs text-gray-600 font-medium">
                {CAREER_OPPORTUNITIES.find(j => j.id === selectedJob)?.title || 'General Medical Application'}
              </p>
            </div>

            <form onSubmit={handleJobApplySubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-navy-900">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-navy-900">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-navy-900">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-navy-900">Years of Experience</label>
                <input
                  type="text"
                  placeholder="e.g. 5 Years in ICU Nursing"
                  value={applicantExperience}
                  onChange={(e) => setApplicantExperience(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-navy-900">Cover Note / Qualifications</label>
                <textarea
                  rows={3}
                  placeholder="Briefly state your current role and medical qualifications..."
                  value={applicantMessage}
                  onChange={(e) => setApplicantMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedJob(null)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="gold"
                  size="sm"
                  isLoading={isSubmitting}
                  leftIcon={<Send className="w-3.5 h-3.5" />}
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
