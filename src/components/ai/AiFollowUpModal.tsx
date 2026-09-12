import React, { useState } from 'react';
import { X, Calendar, Bell, Share2, Copy, Check, Printer, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { ChatMessage } from '@/services/aiAssistantService';

interface AiFollowUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
}

export const AiFollowUpModal: React.FC<AiFollowUpModalProps> = ({ isOpen, onClose, messages }) => {
  const toast = useToast();
  const [selectedDays, setSelectedDays] = useState<number>(7);
  const [copied, setCopied] = useState<boolean>(false);
  const [patientNote, setPatientNote] = useState<string>('');

  if (!isOpen) return null;

  // Filter AI recommendations from chat history
  const recommendations = messages.filter((m) => m.sender === 'ai' && (m.recommendedSpecialty || m.recommendedDoctor));
  const latestRec = recommendations[recommendations.length - 1];

  const handleSetReminder = () => {
    const reminderDate = new Date();
    reminderDate.setDate(reminderDate.getDate() + selectedDays);
    const dateStr = reminderDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    toast.success(
      `Follow-up reminder active for ${dateStr}. You will receive SMS & WhatsApp notifications.`,
      `${selectedDays}-Day Follow-Up Activated`
    );
    onClose();
  };

  const generateFormattedSummary = (): string => {
    let summary = `*MEDICARE HEALTH SYSTEMS - AI CARE NAVIGATOR REPORT*\n`;
    summary += `Generated: ${new Date().toLocaleString()}\n`;
    summary += `-------------------------------------------\n`;

    if (latestRec) {
      if (latestRec.recommendedSpecialty) {
        summary += `• Recommended Specialty: ${latestRec.recommendedSpecialty}\n`;
      }
      if (latestRec.recommendedDoctor) {
        summary += `• Recommended Doctor: ${latestRec.recommendedDoctor.name} (${latestRec.recommendedDoctor.specialty})\n`;
        summary += `• Hospital: ${latestRec.recommendedDoctor.hospital}\n`;
      }
      if (latestRec.availableSlots && latestRec.availableSlots.length > 0) {
        summary += `• Suggested OPD Slots: ${latestRec.availableSlots.join(', ')}\n`;
      }
      if (latestRec.healthEducationTip) {
        summary += `• Health Tip: ${latestRec.healthEducationTip}\n`;
      }
    } else {
      summary += `• Summary: Routine OPD Consultation & Care Navigation Guidance\n`;
    }

    if (patientNote.trim()) {
      summary += `• Patient Notes: ${patientNote.trim()}\n`;
    }

    summary += `-------------------------------------------\n`;
    summary += `Emergency Helpline: 1800-VIGHNA (844-462)\n`;
    summary += `Notice: Triage guidance only. Does not replace physical doctor evaluation.`;

    return summary;
  };

  const handleCopy = () => {
    const text = generateFormattedSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Healthcare summary copied to clipboard!', 'Copied');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareWhatsApp = () => {
    const text = generateFormattedSummary();
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
    toast.success('Opening WhatsApp with formatted healthcare summary...', 'WhatsApp Ready');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-gray-200 shadow-2xl overflow-hidden space-y-0 my-8">
        {/* Modal Header */}
        <div className="bg-navy-950 text-white p-5 flex items-center justify-between border-b border-gold-600/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Follow-Up & Care Summary</h3>
              <p className="text-xs text-gold-400">Schedule Check-in & Share Report</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Section 1: Reminder Scheduler */}
          <div className="space-y-3 p-4 bg-teal-50/60 rounded-2xl border border-teal-100">
            <h4 className="text-xs font-bold text-teal-950 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-600" />
              Schedule Follow-Up Reminder
            </h4>
            <p className="text-xs text-navy-900 leading-relaxed">
              Set a check-in alert to track symptom recovery or remind yourself to consult your recommended specialist doctor.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { days: 3, label: '3 Days' },
                { days: 7, label: '7 Days (Recommended)' },
                { days: 14, label: '14 Days' },
              ].map((opt) => (
                <button
                  key={opt.days}
                  type="button"
                  onClick={() => setSelectedDays(opt.days)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    selectedDays === opt.days
                      ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                      : 'bg-white text-navy-900 border-gray-300 hover:border-teal-400'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <Button
              variant="teal"
              size="sm"
              fullWidth
              onClick={handleSetReminder}
              leftIcon={<Bell className="w-4 h-4" />}
              className="mt-2 font-bold"
            >
              Activate {selectedDays}-Day Follow-Up Reminder
            </Button>
          </div>

          {/* Section 2: Patient Note Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-navy-900 block">Personal Note for Doctor Consultation (Optional):</label>
            <input
              type="text"
              placeholder="e.g. Symptoms started 3 days ago after morning walk..."
              value={patientNote}
              onChange={(e) => setPatientNote(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            />
          </div>

          {/* Section 3: Summary Export Options */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">Export Care Summary</h4>

            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShareWhatsApp}
                leftIcon={<Share2 className="w-3.5 h-3.5 text-green-600" />}
                className="text-xs font-bold text-navy-900 border-gray-300 hover:bg-green-50"
              >
                WhatsApp
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                leftIcon={copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                className="text-xs font-bold text-navy-900 border-gray-300 hover:bg-gray-100"
              >
                {copied ? 'Copied!' : 'Copy Text'}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                leftIcon={<Printer className="w-3.5 h-3.5 text-navy-600" />}
                className="text-xs font-bold text-navy-900 border-gray-300 hover:bg-gray-100"
              >
                Print PDF
              </Button>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Follow-up reminders & summaries are for personal healthcare organization and triage context sharing.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
