import React, { useState } from 'react';
import { Bot, Sparkles, AlertTriangle, ShieldCheck, ArrowRight, RefreshCw, Phone } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { AI_TRIAGE_SYMPTOMS } from '@/data/homeData';

export const AIAssistantSection: React.FC = () => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>('chest-pain');
  const activeSymptom = AI_TRIAGE_SYMPTOMS.find((s) => s.id === selectedSymptomId) || AI_TRIAGE_SYMPTOMS[0];

  return (
    <section id="ai-assistant" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-sky-300/40 relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white border border-white/30 rounded-full text-xs font-bold backdrop-blur-sm">
              <Bot className="w-4 h-4 text-sky-200" />
              <span>MEDICARE AI Triage Assistant</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black leading-snug text-white">
              Instant Symptom Check & <span className="text-sky-200">Triage Guidance</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Not sure which specialist to consult? Select your current symptoms below to receive instant AI triage guidance and recommended department options.
            </p>

            <div className="pt-2">
              <a href="#appointments">
                <Button variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Talk to AI Assistant Now
                </Button>
              </a>
            </div>
          </div>

          {/* Right Interactive AI Widget Preview */}
          <div className="lg:col-span-7">
            <Card variant="navy" className="p-6 space-y-6 border border-gold-600/40 bg-navy-900/90 shadow-xl">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-200">Nova AI Engine Active</span>
                </div>
                <Badge variant="gold" size="sm">Triage Protocol v2.4</Badge>
              </div>

              {/* Symptom Selectors */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Select Symptoms to Preview AI Response:
                </label>
                <div className="flex flex-wrap gap-2">
                  {AI_TRIAGE_SYMPTOMS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSymptomId(s.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedSymptomId === s.id
                          ? 'bg-gold-600 text-navy-950 font-bold shadow-md'
                          : 'bg-navy-800 text-gray-300 hover:bg-navy-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Triage Response Card */}
              <div className="p-4 bg-navy-950 rounded-xl border border-navy-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Assessment Status:</span>
                  <Badge
                    variant={
                      activeSymptom.urgency === 'EMERGENCY'
                        ? 'danger'
                        : activeSymptom.urgency === 'URGENT'
                        ? 'warning'
                        : 'success'
                    }
                    size="sm"
                  >
                    {activeSymptom.urgency}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-gray-400">Recommended Specialty Board:</p>
                  <p className="text-base font-extrabold text-gold-400">{activeSymptom.dept} Department</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed bg-navy-900 p-3 rounded-lg border border-navy-800">
                  {activeSymptom.urgency === 'EMERGENCY'
                    ? '⚠️ Immediate Action Advised: Chest symptoms require emergency ECG within 15 minutes. Call 1800-VIGHNA immediately.'
                    : activeSymptom.urgency === 'URGENT'
                    ? '⚠️ Urgent Care Advised: Consult a specialist within 6 hours. Early diagnostic imaging recommended.'
                    : '✅ Routine OPD Consultation Recommended: Book an appointment with our specialist at your convenience.'}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a href={`tel:1800-VIGHNA`} className="w-full sm:w-auto">
                    <Button variant="danger" size="sm" fullWidth leftIcon={<Phone className="w-3.5 h-3.5" />}>
                      Call Emergency Line
                    </Button>
                  </a>
                  <a href="#appointments" className="w-full sm:w-auto">
                    <Button variant="teal" size="sm" fullWidth rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Book {activeSymptom.dept} OPD
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
