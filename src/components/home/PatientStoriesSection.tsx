import React from 'react';
import { Star, Quote } from 'lucide-react';

export const PatientStoriesSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I'd like to thank the polite staff of MEDICARE Hospital for the excellent care and treatment I received. Extremely spacious and well planned Hospital.",
      name: 'Farida Sharma',
      city: 'Navi Mumbai',
    },
    {
      id: 2,
      quote: "Good maintenance of rooms. Nice gesture by nursing staff. Overall had a very good experience and feel at home. Good job. Cheers..!",
      name: 'Githa Madhuri S',
      city: 'Hyderabad',
    },
    {
      id: 3,
      quote: "I took my father to this hospital for health checkup. The services given to us by this hospital was excellent. Mr Soham Shinde helped us throughout the process.",
      name: 'L Ravi Kumar',
      city: 'Bangalore',
    },
    {
      id: 4,
      quote: "Good response for ambulance by emergency team. Well responded and handled by Emergency team. Thanks to Doctor who came home and helped us in critical time.",
      name: 'Rohit Gangurde',
      city: 'Pune',
    },
  ];

  return (
    <section id="patient-stories" className="bg-[#F4F9FD] py-14 px-4 sm:px-6 lg:px-8 font-sans border-b border-sky-100">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Here's what our happy patients say
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            Real recovery stories and feedback from patients treated across MEDICARE Hospitals.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-sky-200 absolute -top-1 -left-1 opacity-40" />
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed italic relative z-10 pl-3">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-sm font-extrabold text-[#0F172A]">{t.name}</h4>
                <p className="text-xs text-sky-600 font-semibold">{t.city}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
