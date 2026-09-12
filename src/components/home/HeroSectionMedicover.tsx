import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, UserCheck, Calendar, FileText, Building2, MessageSquareText, Globe } from 'lucide-react';

export const HeroSectionMedicover: React.FC = () => {
  const navigate = useNavigate();
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const hospitalLocations = [
    'Hitech City, Hyderabad',
    'Financial District, Hyderabad',
    'Secunderabad',
    'Chandanagar',
    'Nizamabad',
    'Warangal',
    'Karimnagar',
    'Visakhapatnam',
    'Kurnool',
    'Nellore',
    'Whitefield, Bengaluru',
    'Pune (Pimpri-Chinchwad)',
    'Navi Mumbai (Kharghar)',
    'Nashik (Parab Nagar)',
    'Chh. Sambhajinagar',
  ];

  const specialties = [
    'General Medicine',
    'Cardiology',
    'Cardiothoracic',
    'Neuro Sciences',
    'Gastroenterology',
    'Nephrology',
    'Oncology',
    'Emergency Care (24/7)',
    'Urology',
    'Organ Transplantation',
    'Orthopedics',
    'Robotic Surgery',
    'Obstetric & Gynecology',
    'Plastic Surgery',
    'Rheumatology',
    'Neurology',
  ];

  const handleSearch = () => {
    navigate(`/doctors?location=${encodeURIComponent(selectedHospital)}&specialty=${encodeURIComponent(selectedSpecialty)}`);
  };

  const actionCards = [
    {
      title: 'Find Doctors',
      href: '/doctors',
      icon: <UserCheck className="w-7 h-7 text-[#0B5C9E]" />,
    },
    {
      title: 'Book Appointment',
      href: '/appointments',
      icon: <Calendar className="w-7 h-7 text-[#0B5C9E]" />,
    },
    {
      title: 'Health Checkups',
      href: '/health-checkups',
      icon: <FileText className="w-7 h-7 text-[#0B5C9E]" />,
    },
    {
      title: 'Our Hospitals',
      href: '/hospitals',
      icon: <Building2 className="w-7 h-7 text-[#0B5C9E]" />,
    },
    {
      title: 'Get Second Opinion',
      href: '/second-opinion',
      icon: <MessageSquareText className="w-7 h-7 text-[#0B5C9E]" />,
    },
    {
      title: 'International Care',
      href: '/international-patients',
      icon: <Globe className="w-7 h-7 text-[#0B5C9E]" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0B579D] via-[#095EA4] to-[#074786] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden w-full">
      {/* Background Translucent Decorative Rings (Matching Medicover Hero Background) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[480px] h-[480px] border border-white/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-[680px] h-[680px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[480px] h-[480px] border border-white/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[680px] h-[680px] border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Main Centered Headline */}
        <div className="text-center pt-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md max-w-4xl mx-auto">
            Find & Book the Right Doctor Near You
          </h1>
        </div>

        {/* Centered Search Filter Container Card */}
        <div className="max-w-4xl mx-auto bg-[#1E6CB7]/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Hospital Location Dropdown */}
            <div className="w-full sm:flex-1">
              <select
                value={selectedHospital}
                onChange={(e) => setSelectedHospital(e.target.value)}
                className="w-full px-4 py-3.5 bg-white text-slate-800 text-xs sm:text-sm font-semibold rounded-2xl border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_1.25rem_center] bg-no-repeat pr-8"
              >
                <option value="">Hospital Location</option>
                {hospitalLocations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Select Specialty Dropdown */}
            <div className="w-full sm:flex-1">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3.5 bg-white text-slate-800 text-xs sm:text-sm font-semibold rounded-2xl border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_1.25rem_center] bg-no-repeat pr-8"
              >
                <option value="">Select Specialty</option>
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Vibrant Orange Search Button */}
            <button
              type="button"
              onClick={handleSearch}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all shrink-0 cursor-pointer"
            >
              <Search className="w-5 h-5 text-white" />
            </button>

          </div>

          {/* Subtext inside search container */}
          <div className="text-center pt-1 border-t border-white/10">
            <p className="text-xs sm:text-sm font-bold text-white/90">
              1250+ Doctors | 26 Hospitals | 24/7 Emergency Care
            </p>
          </div>
        </div>

        {/* 6 Quick Action Cards Row (Exact Image 1 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto pt-4">
          {actionCards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(card.href)}
              className="bg-[#1C69B5]/80 hover:bg-[#2778CA] border border-white/20 hover:border-white/40 rounded-2xl p-5 text-center transition-all duration-300 shadow-xl flex flex-col items-center justify-center space-y-3 cursor-pointer group hover:-translate-y-1"
            >
              {/* White Circular Badge */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {card.icon}
              </div>

              {/* White Bold Label */}
              <span className="text-white font-extrabold text-xs sm:text-sm leading-tight group-hover:text-amber-300 transition-colors">
                {card.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
