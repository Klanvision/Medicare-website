import React from 'react';
import { Bot, ShieldAlert, Sparkles, ShieldCheck, Stethoscope, Calendar, Activity, Lock } from 'lucide-react';
import { AiChatInterface } from '@/components/ai/AiChatInterface';
import { Badge } from '@/components/common/Badge';

export const AIAssistantPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* 1. Hero Header Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4 relative overflow-hidden">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            AI Healthcare Triage
          </span>
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            24/7 Care Navigator
          </span>
          <span className="text-xs text-sky-100 flex items-center gap-1 font-medium">
            <Lock className="w-3.5 h-3.5 text-sky-200" /> Privacy Protected (Zero PII Logging)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">AI Health Assistant & Care Navigator</span>
        </h1>

        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-3xl leading-relaxed">
          Describe your symptoms to receive instant specialty department recommendations, top doctor matches, available OPD slots, health education tips, follow-up reminders, and emergency triage routing.
        </p>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {[
            { icon: <Activity className="w-4 h-4 text-gold-400" />, title: 'Intent Recognition', desc: 'Symptom & ER triage' },
            { icon: <Stethoscope className="w-4 h-4 text-teal-400" />, title: 'Specialty Routing', desc: 'Department & doctor match' },
            { icon: <Calendar className="w-4 h-4 text-gold-400" />, title: 'OPD Slot Booking', desc: 'Direct slot reservation' },
            { icon: <Sparkles className="w-4 h-4 text-teal-400" />, title: 'Health Education', desc: 'Actionable tips & advice' },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-white/10 shrink-0">{item.icon}</div>
              <div>
                <div className="text-xs font-bold text-white">{item.title}</div>
                <div className="text-[10px] text-gray-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Interactive AI Chat Interface */}
      <AiChatInterface />

      {/* 3. Safety Disclaimers Footer Card */}
      <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-3 shadow-sm">
        <h4 className="font-extrabold flex items-center gap-2 text-sm text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          Mandatory Medical Safety Directives & Regulatory Compliance
        </h4>
        <p className="leading-relaxed text-amber-900">
          MEDICARE AI Assistant is an automated preliminary health navigation and specialty routing system. It is <strong>NOT</strong> a licensed medical practitioner and does <strong>NOT</strong> provide formal medical diagnoses, prescribe pharmaceuticals, or replace clinical consultations by qualified doctors.
        </p>
        <p className="font-bold text-red-700 leading-relaxed">
          CRITICAL EMERGENCY PROTOCOL: In case of acute chest pain, sudden breathlessness, stroke signs, profuse hemorrhage, or major trauma, immediately call our 24/7 Trauma Emergency Helpline at <strong>1800-MEDICARE</strong> or visit the nearest Emergency Room.
        </p>
      </div>
    </div>
  );
};
