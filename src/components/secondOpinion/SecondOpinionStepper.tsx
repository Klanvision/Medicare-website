import React from 'react';
import {
  UploadCloud,
  Stethoscope,
  Send,
  UserCheck,
  FileCheck,
  Video,
  ChevronRight,
} from 'lucide-react';

export const SecondOpinionStepper: React.FC = () => {
  const steps = [
    { num: 1, title: 'Upload Reports', desc: 'Attach MRI, CT, Pathology PDFs', icon: <UploadCloud className="w-5 h-5 text-teal-600" /> },
    { num: 2, title: 'Select Specialty', desc: 'Pick target clinical department', icon: <Stethoscope className="w-5 h-5 text-teal-600" /> },
    { num: 3, title: 'Submit Request', desc: 'Get tracking ID SO-2026-XXXX', icon: <Send className="w-5 h-5 text-gold-600" /> },
    { num: 4, title: 'Doctor Review', desc: 'Senior panel clinical evaluation', icon: <UserCheck className="w-5 h-5 text-teal-600" /> },
    { num: 5, title: 'Second Opinion', desc: 'Receive digital opinion report', icon: <FileCheck className="w-5 h-5 text-teal-600" /> },
    { num: 6, title: 'Online Tele-Consult', desc: '1-on-1 video call with surgeon', icon: <Video className="w-5 h-5 text-teal-600" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {steps.map((s, idx) => (
        <div
          key={s.num}
          className="bg-white p-4 rounded-2xl border border-gray-200 shadow-soft space-y-2 relative flex flex-col justify-between"
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100">
                {s.icon}
              </div>
              <span className="w-6 h-6 rounded-full bg-navy-950 text-gold-400 font-extrabold text-[11px] flex items-center justify-center">
                0{s.num}
              </span>
            </div>

            <h4 className="text-xs font-extrabold text-navy-900 leading-tight">{s.title}</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
