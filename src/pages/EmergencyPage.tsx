import React, { useState, useEffect } from 'react';
import { ShieldAlert, PhoneCall, MapPin, Ambulance, Heart, Stethoscope, Clock, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import { HOSPITAL_CONTACT_INFO } from '@/data/navigation';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { EmergencyServiceCard } from '@/components/emergency/EmergencyServiceCard';
import { EmergencyContactCard } from '@/components/emergency/EmergencyContactCard';
import { EmergencyCentreCard } from '@/components/emergency/EmergencyCentreCard';
import { EmergencyDispatchModal } from '@/components/emergency/EmergencyDispatchModal';
import { emergencyService } from '@/services/emergencyService';
import {
  EmergencyCareTypeItem,
  EmergencyContactItem,
  EmergencyCentreItem,
} from '@/data/emergencyData';

export const EmergencyPage: React.FC = () => {
  const [careTypes, setCareTypes] = useState<EmergencyCareTypeItem[]>([]);
  const [contacts, setContacts] = useState<EmergencyContactItem[]>([]);
  const [centres, setCentres] = useState<EmergencyCentreItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [selectedCentre, setSelectedCentre] = useState<EmergencyCentreItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [ctRes, cRes, cenRes] = await Promise.all([
          emergencyService.getCareTypes(),
          emergencyService.getContacts(),
          emergencyService.getCentres(),
        ]);
        setCareTypes(ctRes);
        setContacts(cRes);
        setCentres(cenRes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleOpenDispatch = (centre?: EmergencyCentreItem) => {
    if (centre) setSelectedCentre(centre);
    setIsDispatchModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. Highly Visible Emergency Hero Banner (White & Sky Blue Theme) */}
      <div className="bg-gradient-to-r from-[#F4F9FD] via-[#EBF5FF] to-[#E0F0FE] text-slate-900 p-6 sm:p-12 rounded-3xl shadow-xl border-2 border-sky-300 space-y-6 relative overflow-hidden">
        {/* Glow & Decorative Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-ping inline-block" />
            <span className="px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-black tracking-wider uppercase">
              24/7 LEVEL-1 TRAUMA & EMERGENCY DISPATCH
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#00529B]">
            24/7 Critical Emergency & <span className="text-[#003B70]">Trauma Response</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed font-semibold">
            Instant mobile ICU ambulance dispatch, 24/7 STEMI Cath Lab angioplasty, acute stroke Golden-Hour thrombolysis, polytrauma resuscitation, and Level-3 NICU support.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href={`tel:${HOSPITAL_CONTACT_INFO.emergencyNumber}`} className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#00529B] hover:bg-[#003B70] text-white text-base font-black flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-sky-200 animate-bounce" />
                <span>CALL EMERGENCY: {HOSPITAL_CONTACT_INFO.emergencyNumber}</span>
              </button>
            </a>

            <button
              type="button"
              onClick={() => handleOpenDispatch()}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-sky-50 text-[#00529B] border-2 border-[#00529B] text-base font-black flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Ambulance className="w-5 h-5 text-[#00529B]" />
              <span>Request Ambulance Dispatch</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Critical Hotlines Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <div>
            <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-widest block">Direct Connections</span>
            <h2 className="text-2xl font-extrabold text-navy-900">24/7 Emergency Hotlines</h2>
          </div>
          <Badge variant="danger" size="sm">4 Dedicated Helplines</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c) => (
            <EmergencyContactCard key={c.id} contact={c} />
          ))}
        </div>
      </div>

      {/* 3. Specialized Emergency Care Capabilities */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="gold" size="sm">Level-1 Trauma & Critical Units</Badge>
          <h2 className="text-3xl font-black text-navy-900">Emergency Care Specialties</h2>
          <p className="text-xs text-gray-500">Fast-track clinical pathways for cardiac, stroke, pediatric, and surgical emergencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careTypes.map((st) => (
            <EmergencyServiceCard key={st.id} service={st} />
          ))}
        </div>
      </div>

      {/* 4. Emergency Hospital Centres & GPS Directions */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2">
          <div>
            <span className="text-[11px] font-extrabold text-teal-600 uppercase tracking-widest block">Hospital Network</span>
            <h2 className="text-2xl font-extrabold text-navy-900">Emergency Hospital Centres</h2>
          </div>
          <Badge variant="teal" size="sm">24/7 ICU & Cath Lab Standby</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {centres.map((cen) => (
            <EmergencyCentreCard
              key={cen.id}
              centre={cen}
              onRequestAmbulance={(c) => handleOpenDispatch(c)}
            />
          ))}
        </div>
      </div>

      {/* 5. Emergency Protocol Checklist */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-8 rounded-3xl border border-sky-300/40 space-y-4 shadow-xl">
        <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-300" /> What to Do in a Medical Emergency
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-sky-50">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl space-y-1 border border-white/20">
            <strong className="text-white text-sm block font-black">1. Call Immediately</strong>
            <p>Dial 1800-MEDICARE or request ICU ambulance. Provide exact landmark address and patient symptoms.</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl space-y-1 border border-white/20">
            <strong className="text-white text-sm block font-black">2. Keep Patient Still</strong>
            <p>Do not move patients with suspected spinal trauma. For heart attacks, loosen tight clothing.</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl space-y-1 border border-white/20">
            <strong className="text-white text-sm block font-black">3. Gather Records</strong>
            <p>Keep previous prescriptions, ECG reports, and government ID ready for swift hospital triage.</p>
          </div>
        </div>
      </div>

      {/* Ambulance Dispatch Modal */}
      <EmergencyDispatchModal
        isOpen={isDispatchModalOpen}
        onClose={() => setIsDispatchModalOpen(false)}
        selectedCentre={selectedCentre}
      />
    </div>
  );
};
