import React from 'react';
import { Cpu, Building, Heart, UserCheck, ShieldCheck } from 'lucide-react';

export const WhyChooseUsBannerNew: React.FC = () => {
  const pillars = [
    {
      title: 'Advanced Technology',
      desc: '3T Silent MRI, 128-slice CT Scans & Da Vinci Robotic Surgery',
      icon: <Cpu className="w-5 h-5 text-[#00529B]" />,
    },
    {
      title: 'Expert Specialists',
      desc: '150+ internationally trained doctors across 85+ sub-specialties',
      icon: <Building className="w-5 h-5 text-[#00529B]" />,
    },
    {
      title: 'Patient First Approach',
      desc: 'Personalised care plans with clinical compassion and respect',
      icon: <Heart className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Seamless Digital Care',
      desc: 'Instant OPD booking, online lab reports & 24/7 AI health assistant',
      icon: <UserCheck className="w-5 h-5 text-[#00529B]" />,
    },
    {
      title: 'Trusted Excellence',
      desc: 'NABH & JCI accredited quaternary hospitals with zero infection ICUs',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="relative bg-gradient-to-r from-sky-50 via-white to-sky-100/70 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden border border-sky-200/80">
        
        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              Why Choose <span className="text-[#00529B]">MEDICARE Hospitals?</span>
            </h2>
            <div className="w-16 h-1 bg-[#00529B] rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xs font-extrabold text-[#0F172A] tracking-wide group-hover:text-[#00529B] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
