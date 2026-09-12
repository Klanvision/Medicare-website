import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, MessageCircle, Bot, Stethoscope, X, Phone, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_CONTACT_INFO } from '@/data/navigation';
import { useLanguage } from '@/context/LanguageContext';

export const StickyQuickActions: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'phone' | null>(null);

  const actions = [
    {
      id: 'appointment',
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#00529B]" />,
      label: t('bookAppointment', 'Book Appointment'),
      sublabel: t('instantBooking', 'Instant Doctor Booking'),
      link: '/appointments',
      badgeColor: 'bg-[#00529B]',
      iconBorder: 'border-sky-200',
    },
    {
      id: 'phone',
      icon: <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 animate-pulse" />,
      label: t('emergencyHelpline', '24/7 Emergency Call'),
      sublabel: HOSPITAL_CONTACT_INFO.emergencyNumber,
      action: () => setActiveModal('phone'),
      badgeColor: 'bg-red-600',
      iconBorder: 'border-red-200',
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-500 text-emerald-500" />,
      label: t('whatsappChat', 'Chat on WhatsApp'),
      sublabel: t('liveSupport', 'Live Helpdesk 24/7'),
      externalLink: `https://wa.me/${HOSPITAL_CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20MEDICARE%20Helpdesk`,
      badgeColor: 'bg-emerald-600',
      iconBorder: 'border-emerald-200',
    },
    {
      id: 'ai-bot',
      icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
      label: t('talkToAiAssistant', 'Ask MEDICARE AI'),
      sublabel: t('aiDiagnosis', 'Symptom & Care Guide'),
      link: '/ai-health-assistant',
      badgeColor: 'bg-sky-600',
      iconBorder: 'border-sky-200',
    },
    {
      id: 'doctors',
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#00529B]" />,
      label: t('findDoctors', 'Find Specialists'),
      sublabel: t('topDoctors', '16+ Clinical Departments'),
      link: '/doctors',
      badgeColor: 'bg-[#00529B]',
      iconBorder: 'border-sky-300',
    },
  ];

  return (
    <>
      {/* Vertical Docked Right Sidebar Bar */}
      <aside
        aria-label="Quick Navigation Sidebar"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 font-sans pointer-events-auto"
      >
        <div className="bg-[#00529B] py-3.5 px-2 rounded-l-2xl shadow-2xl border-l-2 border-y border-sky-300/40 flex flex-col items-center space-y-3">
          {actions.map((item) => {
            const content = (
              <div className="relative flex items-center justify-center group cursor-pointer">
                {/* 1. White Round Circle Icon Button */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg border-2 ${item.iconBorder} group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 ease-out`}
                >
                  {item.icon}
                </div>

                {/* 2. Right-to-Left Slide-Out Badge Label on Hover */}
                <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 pointer-events-none translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div
                    className={`${item.badgeColor} text-white px-3.5 py-2 rounded-xl shadow-2xl border border-white/20 flex items-center gap-2.5 whitespace-nowrap ring-4 ring-black/5`}
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-extrabold tracking-tight leading-none text-white">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-sky-100 font-medium leading-none mt-1">
                        {item.sublabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );

            if (item.link) {
              return (
                <Link key={item.id} to={item.link} title={item.label}>
                  {content}
                </Link>
              );
            }

            if (item.externalLink) {
              return (
                <a
                  key={item.id}
                  href={item.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                >
                  {content}
                </a>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                title={item.label}
                className="focus:outline-none"
              >
                {content}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Interactive Emergency Call Modal */}
      {activeModal === 'phone' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-sky-200 w-full max-w-md p-6 relative overflow-hidden text-slate-900 space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-red-100 text-red-600 animate-bounce">
                <PhoneCall className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">24/7 Emergency Care Helpline</h3>
                <p className="text-xs text-slate-500 font-medium">MEDICARE Critical Care & Ambulance Response</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-red-50 p-4 rounded-2xl border border-sky-100 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Toll-Free Emergency</p>
                  <p className="text-xl font-black text-red-600">{HOSPITAL_CONTACT_INFO.emergencyNumber}</p>
                </div>
                <a
                  href={`tel:${HOSPITAL_CONTACT_INFO.emergencyNumber}`}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </div>

              <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">OPD Helpline</p>
                  <p className="text-sm font-bold text-slate-800">{HOSPITAL_CONTACT_INFO.opdHelpline}</p>
                </div>
                <a
                  href={`tel:${HOSPITAL_CONTACT_INFO.opdHelpline}`}
                  className="px-4 py-1.5 bg-[#00529B] hover:bg-[#00407a] text-white rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call OPD
                </a>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24x7 Trauma & ICU Specialists On Standby</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Advanced Cardiac & Stroke Life Support Ambulance</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
};
