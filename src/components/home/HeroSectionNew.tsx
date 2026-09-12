import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, MapPin, Calendar, Bot, Sparkles, CheckCircle2, User, Clock, Building, Heart, ArrowRight,
  ChevronRight, ShieldAlert, Activity
} from 'lucide-react';
import holographicHeartImage from '@/assets/holographic-heart.png';
import { Logo } from '@/components/common/Logo';

export const HeroSectionNew: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-b from-sky-50 via-sky-50/40 to-white text-slate-900 pt-6 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans w-full border-b border-sky-100">
      {/* Background Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10 space-y-6">
        {/* Top Pill Announcement Badge */}
        <div className="flex items-center justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>24/7 Level-1 Trauma Care & Quaternary Specialty Institutes</span>
          </div>
        </div>

        {/* Hero 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Content & CTAs) */}
          <div className="lg:col-span-5 space-y-5 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-slate-600 block text-xl sm:text-2xl font-bold mb-1">
                A New Era of
              </span>
              <span className="text-sky-600 block py-1 font-black drop-shadow-xs text-3xl sm:text-5xl lg:text-6xl">
                Trusted Healthcare
              </span>
              <span className="text-slate-900 block font-extrabold text-2xl sm:text-4xl lg:text-5xl">
                Advanced Care.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed font-normal">
              MEDICARE delivers world-class medical science with compassionate clinical care, 150+ internationally trained specialists, and 24/7 emergency trauma response.
            </p>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md pt-1">
              <button
                type="button"
                onClick={() => navigate('/doctors')}
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Find a Doctor</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/hospitals')}
                className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Find a Hospital</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/appointments')}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/ai-health-assistant')}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-sky-50 text-sky-700 font-bold text-xs flex items-center justify-center gap-2 border border-sky-200 shadow-xs hover:border-sky-300 transition-all"
              >
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Talk to AI Assistant</span>
              </button>
            </div>

            {/* Core Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-sky-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-100/70 text-sky-700">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">150+</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Doctors</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-red-100/70 text-red-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">24/7</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Emergency</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-teal-100/70 text-teal-700">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">4+</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Hospitals</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-700">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">1.5L+</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: 3D Holographic Visual */}
          <div className="lg:col-span-3 flex items-center justify-center relative py-2">
            <div className="relative w-full max-w-[320px] flex items-center justify-center">
              <img
                src={holographicHeartImage}
                alt="MEDICARE Advanced Healthcare Visual"
                className="w-full h-auto max-h-[340px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: MEDICARE Corporate Card */}
          <div className="lg:col-span-4 relative">
            <div className="bg-white border border-sky-100 rounded-3xl p-6 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col items-center text-center space-y-3 pb-2 border-b border-slate-100">
                <Logo variant="dark" size="lg" showTagline={true} />
              </div>

              <div className="space-y-2.5 pt-1 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">NABH & JCI Accredited Quaternary Hospitals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">Level-1 Trauma Center & Critical ICUs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">Robotic & Minimally Invasive Surgery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">24/7 NABL Diagnostics & 3T Silent MRI</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">Cashless Insurance Desk with 9+ TPAs</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/centres-of-excellence')}
                  className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center gap-2 border border-sky-200 transition-all"
                >
                  <span>Explore Centres of Excellence</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Quick Action Navigation Bar */}
        <div className="pt-4 z-20 relative">
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-sky-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div
              onClick={() => navigate('/doctors')}
              className="flex items-center gap-3 p-2 hover:bg-sky-50/70 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700">Find a Doctor</p>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate">150+ Top Specialists</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/hospitals')}
              className="flex items-center gap-3 p-2 lg:pl-4 hover:bg-sky-50/70 rounded-xl transition-colors cursor-pointer group pt-3 lg:pt-2"
            >
              <div className="p-2.5 rounded-xl bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-teal-700">Find a Hospital</p>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate">4 Quaternary Campuses</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/appointments')}
              className="flex items-center gap-3 p-2 lg:pl-4 hover:bg-sky-50/70 rounded-xl transition-colors cursor-pointer group pt-3 lg:pt-2"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700">Book OPD Slot</p>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate">Instant digital confirmation</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/ai-health-assistant')}
              className="flex items-center gap-3 p-2 lg:pl-4 hover:bg-sky-50/70 rounded-xl transition-colors cursor-pointer group pt-3 lg:pt-2"
            >
              <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-sky-700">AI Health Assistant</p>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate">Symptom check & navigation</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/emergency')}
              className="flex items-center gap-3 p-2 lg:pl-4 hover:bg-red-50 rounded-xl transition-colors cursor-pointer group pt-3 lg:pt-2"
            >
              <div className="p-2.5 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-red-600 group-hover:text-red-700">24/7 Emergency</p>
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate">1800-MEDICARE</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
