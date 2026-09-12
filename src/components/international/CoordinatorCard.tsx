import React, { useState } from 'react';
import { Mail, MessageSquare, ShieldCheck, CheckCircle2, FileText, Send, Sparkles, Clock, Globe, Paperclip } from 'lucide-react';
import { CareCoordinator } from '@/data/internationalData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { useToast } from '@/hooks/useToast';

interface CoordinatorCardProps {
  coordinator: CareCoordinator;
}

export const CoordinatorCard: React.FC<CoordinatorCardProps> = ({ coordinator }) => {
  const toast = useToast();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Demo form state
  const [patientName, setPatientName] = useState('Ahmed Al-Mansoor');
  const [patientEmail, setPatientEmail] = useState('ahmed.mansoor@example.com');
  const [patientPhone, setPatientPhone] = useState('+971 50 982 4110');
  const [country, setCountry] = useState(coordinator.regionFocus.split(',')[0].trim());
  const [specialty, setSpecialty] = useState('Cardiology & Cardiac Sciences');
  const [message, setMessage] = useState(
    `Hello ${coordinator.name}, requesting an urgent email consultation regarding medical evaluation, cost estimate, and Medical Visa (M-Visa) invitation letter for hospital admission.`
  );
  const [attachedFiles] = useState<string[]>([
    'ECG_Diagnostic_Report_2026.pdf',
    'Cardiac_CT_Angiography.dcm',
  ]);

  const handleWhatsApp = () => {
    toast.success(
      `Opening direct WhatsApp conversation with ${coordinator.name} (${coordinator.whatsappPhone})`,
      'WhatsApp Coordinator Connected'
    );
  };

  const handleOpenEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const handleSubmitEmailConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      toast.success(
        `Demo Email Consultation successfully sent to ${coordinator.name} (${coordinator.contactEmail})!`,
        'Email Consultation Sent'
      );
    }, 800);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setIsSending(false);
  };

  const handleCloseModal = () => {
    setIsEmailModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSending(false);
    }, 300);
  };

  return (
    <>
      <Card
        hoverEffect
        accentGoldTop
        className="p-6 bg-white flex flex-col justify-between space-y-6 shadow-sm border border-gray-200"
      >
        <div className="space-y-4">
          {/* Photo & Role Header */}
          <div className="flex items-center gap-4">
            <img
              src={coordinator.photo}
              alt={coordinator.name}
              className="w-16 h-16 rounded-2xl object-cover object-top border shadow-md shrink-0"
            />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-navy-900">{coordinator.name}</h3>
              <p className="text-xs text-teal-700 font-semibold">{coordinator.role}</p>
            </div>
          </div>

          {/* Region & Languages Spoken */}
          <div className="space-y-2 text-xs pt-2 border-t border-gray-100">
            <div>
              <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wider">Region Focus:</span>
              <span className="font-semibold text-navy-900">{coordinator.regionFocus}</span>
            </div>

            <div>
              <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wider">Fluent Languages:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {coordinator.languages.map((lang, idx) => (
                  <Badge key={idx} variant="gold" size="sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Direct Communication Buttons */}
        <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
          <Button
            variant="gold"
            size="sm"
            onClick={handleWhatsApp}
            leftIcon={<MessageSquare className="w-4 h-4" />}
            className="flex-1"
          >
            WhatsApp Coordinator
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleOpenEmailModal}
            leftIcon={<Mail className="w-4 h-4" />}
            className="flex-1"
          >
            Email Consultation
          </Button>
        </div>
      </Card>

      {/* Interactive Demo Email Consultation Modal */}
      <Modal
        isOpen={isEmailModalOpen}
        onClose={handleCloseModal}
        title={
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#00529B]" />
            <span className="text-[#00529B] font-black">Email Consultation Desk (Demo)</span>
          </div>
        }
        description={`Direct consultation request for ${coordinator.name} • ${coordinator.regionFocus}`}
        size="lg"
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmitEmailConsultation} className="space-y-5">
            {/* Coordinator Header Info */}
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={coordinator.photo}
                  alt={coordinator.name}
                  className="w-12 h-12 rounded-xl object-cover border border-sky-300 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{coordinator.name}</h4>
                  <p className="text-xs text-[#00529B] font-bold">{coordinator.role}</p>
                  <p className="text-[11px] text-slate-500 font-medium">Direct Email: <span className="font-bold underline">{coordinator.contactEmail}</span></p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase rounded-full shrink-0">
                SLA: &lt; 2 Hours Response
              </span>
            </div>

            {/* Patient Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <div className="space-y-1">
                <label className="block text-slate-900 font-extrabold">Patient Full Name</label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#00529B] text-slate-800 font-bold"
                  placeholder="Enter full name"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-slate-900 font-extrabold">Email Address</label>
                <input
                  type="email"
                  required
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#00529B] text-slate-800 font-bold"
                  placeholder="patient@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-slate-900 font-extrabold">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#00529B] text-slate-800 font-bold"
                  placeholder="+Country Code Phone"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-slate-900 font-extrabold">Country of Residence</label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#00529B] text-slate-800 font-bold"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Specialty Selection */}
            <div className="space-y-1 text-xs">
              <label className="block text-slate-900 font-extrabold">Preferred Medical Specialty</label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#00529B] text-slate-800 font-bold cursor-pointer"
              >
                <option value="Cardiology & Cardiac Sciences">Cardiology & Cardiac Sciences</option>
                <option value="Oncology & Cancer Care">Oncology & Cancer Care</option>
                <option value="Robotic Joint Replacement">Robotic Joint Replacement</option>
                <option value="Neurosurgery & Spine">Neurosurgery & Spine</option>
                <option value="Organ Transplantation">Organ Transplantation</option>
                <option value="Laser Urology">Laser Urology</option>
                <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
                <option value="Pediatrics & Neonatology">Pediatrics & Neonatology</option>
                <option value="Other Medical Specialty">Other Medical Specialty</option>
              </select>
            </div>

            {/* Clinical Query Textarea */}
            <div className="space-y-1 text-xs">
              <label className="block text-slate-900 font-extrabold">Describe Clinical Symptoms & Assistance Query</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#00529B] text-slate-800 font-semibold leading-relaxed"
              />
            </div>

            {/* Attached Demo Reports Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Paperclip className="w-4 h-4 text-[#00529B]" />
                  Attached Medical Scans & Reports (Demo Files):
                </span>
                <span className="text-[10px] text-slate-500 font-bold">2 Files Attached</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {attachedFiles.map((file, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold text-[11px] flex items-center gap-1">
                    <FileText className="w-3 h-3 text-[#00529B]" />
                    {file}
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSending}
                className="px-6 py-2.5 rounded-xl bg-[#00529B] hover:bg-[#00407A] text-white font-black text-xs shadow-md transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSending ? (
                  <>
                    <span className="animate-spin text-sm">⌛</span>
                    <span>Sending Demo Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Demo Email Consultation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 px-2 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
                Demo Email Consultation Dispatched
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Email Sent to {coordinator.name}!
              </h3>
              <p className="text-xs text-slate-600 font-medium max-w-md mx-auto">
                Your consultation request and medical files have been assigned to <strong className="text-slate-900">{coordinator.name}</strong>.
              </p>
            </div>

            {/* Reference Box */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">Demo Consultation Reference:</span>
                <span className="font-extrabold text-[#00529B]">INT-EML-2026-9842</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">Assigned Director:</span>
                <span className="font-extrabold text-slate-900">{coordinator.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">Director Email:</span>
                <span className="font-extrabold text-slate-900">{coordinator.contactEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold">Guaranteed Response SLA:</span>
                <span className="font-extrabold text-emerald-700">Within 2 Hours</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetForm}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs transition-colors cursor-pointer"
              >
                Send Another Consultation Demo
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-6 py-2.5 rounded-xl bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-md transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
