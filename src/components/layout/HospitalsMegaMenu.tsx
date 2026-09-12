import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, ArrowRight, ShieldAlert, Navigation } from 'lucide-react';

export const HospitalsMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const states = [
    {
      state: 'Telangana',
      hospitals: ['Hitech City Main Hospital', 'Cancer Institute Hyderabad', 'Kondapur Unit'],
    },
    {
      state: 'Andhra Pradesh',
      hospitals: ['Vizag Super Specialty', 'Vijayawada Multi-Specialty', 'Kakinada Branch'],
    },
    {
      state: 'Maharashtra',
      hospitals: ['Nashik Quaternary Care', 'Navi Mumbai Hub', 'Chhatrapati Sambhajinagar'],
    },
    {
      state: 'Karnataka',
      hospitals: ['Bengaluru Whitefield Unit'],
    },
  ];

  return (
    <div className="w-[660px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 font-sans text-slate-800">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center text-[#00529B]">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-black text-[#00529B] uppercase tracking-wider">Hospitals Near You</h3>
            <p className="text-[11px] text-slate-500">26+ Multi-Specialty Hospitals & 6500+ Beds Pan-India</p>
          </div>
        </div>

        <Link
          to="/hospitals"
          onClick={onClose}
          className="text-xs font-extrabold text-[#00529B] hover:underline flex items-center gap-1"
        >
          <span>All 26 Hospitals</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* State Grid */}
      <div className="grid grid-cols-4 gap-3">
        {states.map((item) => (
          <div key={item.state} className="bg-sky-50/50 p-3 rounded-xl border border-sky-100/60 space-y-2">
            <span className="font-extrabold text-xs text-[#00529B] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#00529B]" />
              {item.state}
            </span>
            <ul className="space-y-1 text-[11px] text-slate-600">
              {item.hospitals.map((h) => (
                <li key={h}>
                  <Link
                    to="/hospitals"
                    onClick={onClose}
                    className="hover:text-[#00529B] hover:underline block truncate"
                  >
                    • {h}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Quick Action Bar */}
      <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-100">
        <Link
          to="/hospitals"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 flex items-center gap-2.5 group transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#00529B] shrink-0" />
          <div>
            <div className="text-xs font-bold text-slate-900 group-hover:text-[#00529B]">Get Google Maps Directions</div>
            <div className="text-[10px] text-slate-500">Live GPS & Contact Numbers</div>
          </div>
        </Link>

        <Link
          to="/emergency"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center gap-2.5 group transition-colors shadow-xs"
        >
          <ShieldAlert className="w-4 h-4 text-white shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">24x7 Emergency Ambulance</div>
            <div className="text-[10px] text-red-100">Call 1800-MEDICARE Hotline</div>
          </div>
        </Link>
      </div>

    </div>
  );
};
