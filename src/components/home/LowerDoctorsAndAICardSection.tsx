import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ArrowRight, Bot, MessageSquare } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const LowerDoctorsAndAICardSection: React.FC = () => {
  const docScrollRef = useRef<HTMLDivElement>(null);

  const scrollDoctors = (dir: 'left' | 'right') => {
    if (docScrollRef.current) {
      const amount = dir === 'left' ? -260 : 260;
      docScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const doctorsList = [
    {
      id: 'doc-ananya',
      name: 'Dr. Ananya Sharma',
      specialty: 'Cardiologist',
      experience: '15+ Years Exp',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594824813571-24a698322678?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'doc-rahul',
      name: 'Dr. Rahul Verma',
      specialty: 'Neurologist',
      experience: '14+ Years Exp',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'doc-priya',
      name: 'Dr. Priya Iyer',
      specialty: 'Oncologist',
      experience: '12+ Years Exp',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'doc-vikram',
      name: 'Dr. Vikram Singh',
      specialty: 'Orthopaedician',
      experience: '16+ Years Exp',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column (Lg:col-span-7): Our Expert Doctors Carousel */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-4 relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-navy-900">Our Expert Doctors</h3>
              <div className="w-12 h-1 bg-gold-500 rounded-full mt-1" />
            </div>

            <Link to="/doctors" className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1">
              View All Doctors <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Doctors Carousel Nav Arrows & Items */}
          <div className="relative group">
            <button
              onClick={() => scrollDoctors('left')}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-navy-900 hover:bg-teal-50"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollDoctors('right')}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-navy-900 hover:bg-teal-50"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Doctors Scroll Container */}
            <div ref={docScrollRef} className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1">
              {doctorsList.map((doc) => (
                <Link
                  key={doc.id}
                  to={`/doctors`}
                  className="min-w-[170px] sm:min-w-[190px] bg-gray-50 rounded-2xl p-3 border border-gray-100 hover:border-teal-300 hover:shadow-lg transition-all text-center space-y-2 shrink-0 group/doc"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto shadow-sm group-hover/doc:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-xs font-black text-navy-900 group-hover/doc:text-teal-600 transition-colors">{doc.name}</h4>
                    <p className="text-[11px] text-gray-500 font-medium">{doc.specialty}</p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-600 pt-1 border-t border-gray-200">
                    <span className="font-semibold">{doc.experience}</span>
                    <span className="flex items-center gap-0.5 font-bold text-gold-600">
                      <Star className="w-3 h-3 fill-gold-500" /> {doc.rating}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Lg:col-span-5): AI Health Insight Soft Cyan Card with Phone Mockup */}
        <div className="lg:col-span-5 bg-gradient-to-br from-teal-50/90 via-cyan-100/60 to-teal-50 rounded-3xl p-6 shadow-sm border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
          {/* Left Text & Button */}
          <div className="space-y-4 sm:max-w-[55%] relative z-10 text-center sm:text-left">
            <h3 className="text-xl font-black text-navy-950">AI Health Insight</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              Talk to our AI Health Assistant and get instant guidance on symptoms, specialists, treatments and more.
            </p>
            <Link to="/ai-health-assistant" className="inline-block pt-1">
              <Button variant="teal" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />} className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-4 py-2.5 rounded-xl shadow-md">
                Chat with HealthNova AI
              </Button>
            </Link>
          </div>

          {/* Right Smartphone Screen Mockup + 3D Robot */}
          <div className="relative z-10 shrink-0 w-44 sm:w-48">
            <div className="bg-navy-950 rounded-3xl p-3 shadow-2xl border-4 border-navy-900 text-white text-[10px] space-y-2 relative">
              {/* Phone Top Notch */}
              <div className="w-12 h-1 bg-navy-800 rounded-full mx-auto" />

              {/* Header */}
              <div className="flex items-center justify-between pb-1 border-b border-navy-800 text-[11px] font-bold text-teal-400">
                <span className="flex items-center gap-1"><Bot className="w-3.5 h-3.5" /> HealthNova AI</span>
                <ArrowRight className="w-3 h-3" />
              </div>

              {/* Chat Bubble */}
              <div className="p-2 bg-navy-900 rounded-xl space-y-1 text-gray-200">
                <p className="font-medium text-[10px] leading-tight">
                  Hello! I'm your HealthNova AI assistant. How can I help you today?
                </p>
                <div className="flex gap-1 pt-1">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" />
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping delay-100" />
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping delay-200" />
                </div>
              </div>
            </div>

            {/* Mascot Robot Floating */}
            <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-2xl bg-teal-600 border-2 border-white shadow-xl flex items-center justify-center">
              <Bot className="w-10 h-10 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
