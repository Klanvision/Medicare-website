import React, { useState } from 'react';
import { ShieldAlert, Bot, User, Sparkles, ThumbsUp, ThumbsDown, ShieldCheck, Phone, Check } from 'lucide-react';
import { ChatMessage, aiAssistantService } from '@/services/aiAssistantService';
import { AiRecommendationCard } from './AiRecommendationCard';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';

interface AiMessageItemProps {
  message: ChatMessage;
}

export const AiMessageItem: React.FC<AiMessageItemProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const [feedbackGiven, setFeedbackGiven] = useState<'helpful' | 'unhelpful' | null>(message.userFeedback || null);

  const handleFeedback = (rating: 'helpful' | 'unhelpful') => {
    if (feedbackGiven || !message.eventId) return;
    setFeedbackGiven(rating);
    aiAssistantService.logFeedback(message.eventId, rating);
  };

  if (isUser) {
    return (
      <div className="flex justify-end gap-3 my-3">
        <div className="bg-navy-900 text-white p-4 rounded-2xl rounded-tr-none max-w-lg shadow-md space-y-1">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
          <span className="text-[10px] text-gray-400 block text-right font-medium">{message.timestamp}</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-bold text-xs shrink-0 border border-gold-600/30 shadow-xs">
          <User className="w-5 h-5" />
        </div>
      </div>
    );
  }

  // AI Response Bubble
  return (
    <div className="flex items-start gap-3 my-4">
      <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
        <Bot className="w-5 h-5" />
      </div>

      <div className="space-y-4 max-w-2xl w-full">
        {/* Intent Badge */}
        {message.intentRecognized && (
          <div className="flex items-center gap-2">
            <Badge variant={message.isEmergency ? 'danger' : 'teal'} size="sm">
              Intent: {message.intentRecognized.replace('_', ' ')}
            </Badge>
          </div>
        )}

        {/* Emergency Red Alert Box */}
        {message.isEmergency && (
          <div className="p-4 bg-red-950 text-white rounded-2xl border-2 border-red-500 shadow-xl space-y-3 animate-pulse">
            <div className="flex items-center gap-2 text-red-400 font-extrabold text-sm">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>24/7 EMERGENCY CRITICAL CARE ALERT</span>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed font-semibold">
              If you or someone around you is experiencing chest pain, difficulty breathing, stroke symptoms, or acute trauma, call emergency services immediately.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="tel:1800-VIGHNA" className="inline-block">
                <Button variant="danger" size="sm" className="font-extrabold" leftIcon={<Phone className="w-4 h-4" />}>
                  Call Emergency Helpline (1800-VIGHNA)
                </Button>
              </a>
            </div>
          </div>
        )}

        {/* Text Message Bubble */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl rounded-tl-none border border-gray-200 shadow-soft space-y-3">
          <p className="text-sm text-navy-900 leading-relaxed whitespace-pre-wrap">{message.text}</p>

          {/* Health Education Tip */}
          {message.healthEducationTip && (
            <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 text-xs text-teal-950 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-teal-800">
                <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Health Education & Wellness Tip</span>
              </div>
              <p className="leading-relaxed text-gray-700">{message.healthEducationTip}</p>
            </div>
          )}

          {/* AI Safety Guardrail Disclaimer */}
          <div className="p-2.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-tight">
              {message.disclaimer || 'Notice: Triage guidance only. Does NOT diagnose disease, prescribe drugs, or substitute physical physician examination.'}
            </span>
          </div>

          {/* Footer Controls: Timestamp & Feedback Rating */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-[10px] text-gray-400 font-medium">{message.timestamp}</span>

            {/* Non-Sensitive User Feedback Buttons */}
            {message.eventId && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-[10px] font-semibold text-gray-400">Helpful?</span>
                <button
                  type="button"
                  onClick={() => handleFeedback('helpful')}
                  disabled={!!feedbackGiven}
                  className={`p-1 rounded-md transition-colors ${
                    feedbackGiven === 'helpful' ? 'bg-green-100 text-green-700 font-bold' : 'hover:bg-gray-100 text-gray-500'
                  }`}
                  title="Mark as Helpful"
                >
                  {feedbackGiven === 'helpful' ? <Check className="w-3.5 h-3.5" /> : <ThumbsUp className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleFeedback('unhelpful')}
                  disabled={!!feedbackGiven}
                  className={`p-1 rounded-md transition-colors ${
                    feedbackGiven === 'unhelpful' ? 'bg-red-100 text-red-700 font-bold' : 'hover:bg-gray-100 text-gray-500'
                  }`}
                  title="Mark as Unhelpful"
                >
                  <ThumbsDown className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Embedded Doctor & Slot Recommendation Card */}
        {(message.recommendedDoctor || message.recommendedSpecialty || message.recommendedHospital) && (
          <AiRecommendationCard
            category={message.careCategory}
            specialty={message.recommendedSpecialty}
            specialtySlug={message.specialtySlug}
            doctor={message.recommendedDoctor}
            hospital={message.recommendedHospital}
            availableSlots={message.availableSlots}
            intentRecognized={message.intentRecognized}
          />
        )}
      </div>
    </div>
  );
};
