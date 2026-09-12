import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, MapPin, Stethoscope, ArrowRight, Star, Calendar } from 'lucide-react';

export const DoctorsMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const cities = [
    {
      name: 'Hyderabad',
      count: '450+ Doctors',
      topSpecs: ['Cardiologists in Hitech City', 'Oncologists in Hitech City', 'Neurologists in Hitech City'],
    },
    {
      name: 'Bengaluru',
      count: '320+ Doctors',
      topSpecs: ['CTVS Specialists in Whitefield', 'Orthopedics in Whitefield', 'Nephrologists in Whitefield'],
    },
    {
      name: 'Vizag',
      count: '210+ Doctors',
      topSpecs: ['Cardiologists in Vizag', 'Gynecologists in Vizag', 'Neurosurgeons in Vizag'],
    },
  ];

  return (
    <div className="w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 font-sans text-slate-800">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center text-[#00529B]">
            <UserCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-black text-[#00529B] uppercase tracking-wider">Find Doctors Near You</h3>
            <p className="text-[11px] text-slate-500">1250+ Full-Time Senior Specialist Consultants</p>
          </div>
        </div>

        <Link
          to="/doctors"
          onClick={onClose}
          className="text-xs font-extrabold text-[#00529B] hover:underline flex items-center gap-1"
        >
          <span>View All Doctors</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Cities Columns */}
      <div className="grid grid-cols-3 gap-3">
        {cities.map((city) => (
          <div key={city.name} className="bg-sky-50/50 p-3 rounded-xl border border-sky-100/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-xs text-[#00529B] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#00529B]" />
                {city.name}
              </span>
              <span className="text-[9px] font-bold bg-white text-slate-600 px-1.5 py-0.5 rounded-full border border-sky-100">
                {city.count}
              </span>
            </div>

            <ul className="space-y-1 text-[11px] text-slate-600">
              {city.topSpecs.map((spec) => (
                <li key={spec}>
                  <Link
                    to="/doctors"
                    onClick={onClose}
                    className="hover:text-[#00529B] hover:underline block truncate"
                  >
                    • {spec}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Quick Action Links */}
      <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-100">
        <Link
          to="/doctors"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 flex items-center gap-2.5 group transition-colors"
        >
          <Stethoscope className="w-4 h-4 text-[#00529B] shrink-0" />
          <div>
            <div className="text-xs font-bold text-slate-900 group-hover:text-[#00529B]">Search by Specialty</div>
            <div className="text-[10px] text-slate-500">80+ Clinical Specialisations</div>
          </div>
        </Link>

        <Link
          to="/appointments"
          onClick={onClose}
          className="p-2.5 rounded-xl bg-[#00529B] hover:bg-[#00407A] text-white flex items-center gap-2.5 group transition-colors shadow-xs"
        >
          <Calendar className="w-4 h-4 text-white shrink-0" />
          <div>
            <div className="text-xs font-bold text-white">Book Instant OPD Slot</div>
            <div className="text-[10px] text-sky-200">Zero Wait Time OPD</div>
          </div>
        </Link>
      </div>

    </div>
  );
};
