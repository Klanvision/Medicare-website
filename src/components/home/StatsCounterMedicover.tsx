import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageCircle, UserCheck, HeartPulse, Sparkles, Scissors, Bed, ShieldAlert, Building2, MapPin, Activity } from 'lucide-react';

export const StatsCounterMedicover: React.FC = () => {
  const statsList = [
    { number: '1250+', label: 'Doctors', icon: <UserCheck className="w-4 h-4 text-[#00529B]" /> },
    { number: '25+', label: 'Cath Labs', icon: <HeartPulse className="w-4 h-4 text-[#00529B]" /> },
    { number: '1 Crore+', label: 'Satisfied Patients', icon: <Sparkles className="w-4 h-4 text-[#00529B]" /> },
    { number: '100K+', label: 'Surgeries', icon: <Scissors className="w-4 h-4 text-[#00529B]" /> },
    { number: '6500+', label: 'Total Beds', icon: <Bed className="w-4 h-4 text-[#00529B]" /> },
    { number: '1736+', label: 'ICU Beds', icon: <ShieldAlert className="w-4 h-4 text-red-600" /> },
    { number: '26', label: 'Hospitals', icon: <Building2 className="w-4 h-4 text-[#00529B]" /> },
    { number: '16+', label: 'Cities', icon: <MapPin className="w-4 h-4 text-emerald-600" /> },
    { number: '160+', label: 'Operation Theatres', icon: <Activity className="w-4 h-4 text-[#00529B]" /> },
  ];

  // Duplicate for smooth seamless loop
  const duplicatedStats = [...statsList, ...statsList, ...statsList];

  return (
    <section className="w-full font-sans my-4">
      {/* 1. TOP ROYAL BLUE BANNER ("Not sure where to start?") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-r from-[#00529B] via-[#0B5C9E] to-[#074786] rounded-3xl p-6 sm:p-8 shadow-xl text-white flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          {/* Decorative background circle graphics */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-48 h-48 border border-white/10 rounded-full pointer-events-none" />

          {/* Left Text & CTA Buttons */}
          <div className="space-y-5 z-10 text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Not sure where to start?
            </h3>

            {/* 3 Action Pill Buttons (Call, Book Online, WhatsApp) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              
              {/* Call Button */}
              <a
                href="tel:04068334455"
                className="px-5 py-2.5 rounded-full bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91-40-6833-4455</span>
              </a>

              {/* Book Online Button */}
              <Link
                to="/appointments"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-[#00529B] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#00529B]" />
                <span>Book Online</span>
              </Link>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917075493806?text=Hi%20MEDICARE%20Helpdesk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

            </div>
          </div>

          {/* Right Side Hospital Facility Thumbnails */}
          <div className="flex items-center gap-3 z-10 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80"
              alt="MEDICARE Hospital Diagnostic Scan"
              className="w-28 h-20 sm:w-36 sm:h-24 rounded-2xl object-cover border-2 border-white/40 shadow-md transform hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
              alt="MEDICARE Hospital Reception Desk"
              className="w-28 h-20 sm:w-36 sm:h-24 rounded-2xl object-cover border-2 border-white/40 shadow-md transform hover:scale-105 transition-transform"
            />
          </div>

        </div>
      </div>

      {/* 2. BOTTOM LIGHT ICE BLUE MARQUEE SLIDER (Sliding Right to Left) */}
      <div className="bg-[#D7E9F7] py-3.5 border-y border-sky-200/80 overflow-hidden relative w-full shadow-xs">
        
        {/* CSS Keyframes for Right-to-Left Sliding Marquee */}
        <style>{`
          @keyframes slideLeftLoop {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee-right-to-left {
            display: flex;
            width: max-content;
            animation: slideLeftLoop 35s linear infinite;
          }
          .animate-marquee-right-to-left:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="animate-marquee-right-to-left flex items-center gap-4 px-4">
          {duplicatedStats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white px-4 py-2 rounded-full border border-sky-100 shadow-xs flex items-center gap-2.5 shrink-0 whitespace-nowrap hover:shadow-md transition-shadow"
            >
              <div className="w-7 h-7 rounded-full bg-[#EBF4FC] flex items-center justify-center text-[#00529B] border border-sky-100 shrink-0">
                {item.icon}
              </div>
              <div className="text-left flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-black text-[#00529B] block leading-tight">
                  {item.number}
                </span>
                <span className="text-[11px] font-bold text-slate-700 block leading-tight">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
