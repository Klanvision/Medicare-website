import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, Stethoscope, ChevronRight, Building2, MapPin } from 'lucide-react';

export const MedicoverFooterHighlights: React.FC = () => {
  const [activeHighlightTab, setActiveHighlightTab] = useState<
    'highlights' | 'specialties' | 'technology' | 'growth' | 'global' | 'why'
  >('highlights');

  const highlightTabs = [
    { id: 'highlights', label: 'Key Highlights' },
    { id: 'specialties', label: 'Key Specialties' },
    { id: 'technology', label: 'Technology' },
    { id: 'growth', label: 'Growth' },
    { id: 'global', label: 'Global Backing' },
    { id: 'why', label: 'Why Choose Us' },
  ];

  const doctorsByCity = {
    hyderabad: [
      'Best Cardiologists in Hitec City Hyderabad',
      'Best Oncologists in Hitec City Hyderabad',
      'Best Orthopedic Doctors in Hitec City Hyderabad',
      'Best Nephrologists in Hitec City Hyderabad',
      'Best Neurologists in Hitec City Hyderabad',
      'Best Neurosurgeons in Hitec City Hyderabad',
      'Best Neonatologists in Hitec City Hyderabad',
      'Best Gynecologists in Hitec City Hyderabad',
    ],
    bengaluru: [
      'Best Cardiologists in Whitefield Bengaluru',
      'Best CTVS Specialists in Whitefield Bengaluru',
      'Best Orthopedic Doctors in Whitefield Bengaluru',
      'Best Nephrologists in Whitefield Bengaluru',
      'Best Neurologists in Whitefield Bengaluru',
      'Best Neurosurgeons in Whitefield Bengaluru',
      'Best Neonatologists in Whitefield Bengaluru',
      'Best Gynecologists in Whitefield Bengaluru',
    ],
    vizag: [
      'Best Cardiologists in Vizag',
      'Best CTVS Specialists in Vizag',
      'Best Oncologists in Vizag',
      'Best Orthopedic Doctors in Vizag',
      'Best Nephrologists in Vizag',
      'Best Neurologists in Vizag',
      'Best Gynecologists in Vizag',
      'Best General Surgeons in Vizag',
    ],
  };

  return (
    <div className="space-y-12 font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* 1. Advanced Multispecialty & Super-Specialty Healthcare Tabs */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold uppercase">
            Clinical Excellence
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900">
            Advanced Multispecialty & Super-Specialty Healthcare
          </h2>
        </div>

        {/* Tabs navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
          {highlightTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveHighlightTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                activeHighlightTab === tab.id
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="pt-2 text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
          {activeHighlightTab === 'highlights' && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold">Operates 26+ hospitals across India with over 6500 beds</span>
              </li>
              <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold">Provides world-class care across 80+ medical specialties</span>
              </li>
              <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold">Offers advanced multispecialty and super-speciality services</span>
              </li>
              <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold">Focuses on accurate diagnosis and effective treatment protocols</span>
              </li>
              <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold">Follows European healthcare standards for quality and safety</span>
              </li>
              <li className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold">Trusted by international patients from 40+ countries worldwide</span>
              </li>
            </ul>
          )}

          {activeHighlightTab === 'specialties' && (
            <p className="font-medium">
              From Cardiology, Oncology, and Neurology to Orthopedics, Gastroenterology, Nephrology, and Robotic Surgery — MEDICARE delivers comprehensive multi-disciplinary care under one roof with 1250+ full-time senior consultants.
            </p>
          )}

          {activeHighlightTab === 'technology' && (
            <p className="font-medium">
              Equipped with Da Vinci Xi Robotic Surgical Systems, 3T Silent MRI, 128-Slice Dual Source CT Scanners, Bi-plane Cath Labs, and Ultra-clean Positive Pressure Operation Theatres.
            </p>
          )}

          {activeHighlightTab === 'growth' && (
            <p className="font-medium">
              Rapidly expanding across major economic hubs in Telangana, Andhra Pradesh, Maharashtra, and Karnataka, including Kokapet Financial District (India’s tallest 24-floor hospital).
            </p>
          )}

          {activeHighlightTab === 'global' && (
            <p className="font-medium">
              Backed by international European healthcare architecture operating across 18 countries worldwide including Germany, Sweden, Poland, and India.
            </p>
          )}

          {activeHighlightTab === 'why' && (
            <p className="font-medium">
              European clinical protocols, transparent patient pricing, 24/7 level-1 emergency response, zero-infection ICUs, and cashless tie-ups with 9+ major health insurance companies.
            </p>
          )}
        </div>
      </div>

      {/* 2. Find Best Doctors In India by City */}
      <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#00529B]">Find Best Doctors In India</h3>
            <p className="text-xs text-slate-600 font-medium">Browse top medical specialists by city & specialty</p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#00529B] bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200">
            <Globe className="w-4 h-4 text-[#00529B]" />
            <span>Read page in: తెలుగు | हिन्दी | اردو | ಕನ್ನಡ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Hyderabad */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-[#00529B] text-sm uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00529B]" />
              <span>Hyderabad</span>
            </h4>
            <ul className="space-y-1.5">
              {doctorsByCity.hyderabad.map((item) => (
                <li key={item}>
                  <Link
                    to="/doctors"
                    className="text-slate-700 hover:text-[#00529B] hover:underline transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#00529B] shrink-0" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bengaluru */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-[#00529B] text-sm uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00529B]" />
              <span>Bengaluru</span>
            </h4>
            <ul className="space-y-1.5">
              {doctorsByCity.bengaluru.map((item) => (
                <li key={item}>
                  <Link
                    to="/doctors"
                    className="text-slate-700 hover:text-[#00529B] hover:underline transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#00529B] shrink-0" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vizag */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-[#00529B] text-sm uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00529B]" />
              <span>Vizag</span>
            </h4>
            <ul className="space-y-1.5">
              {doctorsByCity.vizag.map((item) => (
                <li key={item}>
                  <Link
                    to="/doctors"
                    className="text-slate-700 hover:text-[#00529B] hover:underline transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-[#00529B] shrink-0" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
