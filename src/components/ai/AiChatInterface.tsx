import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Sparkles, Share2, Bell, ShieldAlert, Bot, RefreshCw, Filter, ShieldCheck } from 'lucide-react';
import { aiAssistantService, ChatMessage } from '@/services/aiAssistantService';
import { AiMessageItem } from './AiMessageItem';
import { AiFollowUpModal } from './AiFollowUpModal';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { useToast } from '@/hooks/useToast';

const initialWelcomeMessage: ChatMessage = {
  id: 'msg-welcome',
  eventId: 'evt-welcome',
  sender: 'ai',
  intentRecognized: 'GENERAL_GREETING',
  text: 'Namaste! I am HealthNova AI Care Navigator. Describe your health concern, symptoms, or clinical query (e.g. knee pain, persistent headache, skin allergy, or heart checkup) and I will guide you to the right specialty, specialist doctor, and OPD slots.',
  timestamp: 'Just Now',
  healthEducationTip: 'Early symptom assessment helps prevent disease progression. Describe how long you have experienced symptoms for precise routing.',
  disclaimer: 'Notice: HealthNova AI Assistant provides triage navigation only. It does NOT replace physician examination, diagnose conditions, or prescribe drugs.',
};

export const AiChatInterface: React.FC = () => {
  const toast = useToast();

  const [messages, setMessages] = useState<ChatMessage[]>([initialWelcomeMessage]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);
  const [isFollowUpModalOpen, setIsFollowUpModalOpen] = useState(false);
  const [activeIntentFilter, setActiveIntentFilter] = useState<string>('all');

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      const aiResponse = await aiAssistantService.processUserMessage(text);
      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      console.error(err);
      toast.error('Unable to connect to AI server. Please try again.', 'Connection Notice');
    } finally {
      setIsTyping(false);
    }
  };

  const handleVoiceAssistant = () => {
    setIsListeningVoice(true);
    toast.info('Voice Assistant Microphone Active. Speak your symptom...', 'Voice Listening');
    setTimeout(() => {
      setIsListeningVoice(false);
      handleSendMessage('I have knee joint pain and morning stiffness.');
    }, 2500);
  };

  const handleClearChat = () => {
    setMessages([initialWelcomeMessage]);
    toast.info('Chat timeline reset.', 'Reset Complete');
  };

  // Filter messages based on active intent tab
  const filteredMessages = messages.filter((msg) => {
    if (activeIntentFilter === 'all') return true;
    if (msg.sender === 'user') return true;
    if (activeIntentFilter === 'emergency') return msg.isEmergency;
    if (activeIntentFilter === 'symptoms') return msg.intentRecognized === 'SYMPTOM_ANALYSIS';
    if (activeIntentFilter === 'doctors') return msg.recommendedDoctor || msg.intentRecognized === 'SPECIALIST_RECOMMENDATION';
    if (activeIntentFilter === 'hospitals') return msg.recommendedHospital || msg.intentRecognized === 'HOSPITAL_LOOKUP';
    return true;
  });

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col h-[780px] relative">
      {/* 1. Header Bar with Safety & Controls */}
      <div className="bg-navy-950 text-white p-4 sm:p-5 border-b border-gold-600/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base text-white">MEDICARE AI Care Navigator</h3>
              <Badge variant="gold" size="sm">
                24/7 Smart Triage
              </Badge>
            </div>
            <p className="text-[11px] text-gray-300">
              Guidance & OPD Matching • Strictly Non-Diagnostic & Non-Prescriptive
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFollowUpModalOpen(true)}
            className="text-xs text-white border-gold-500/50 hover:bg-gold-600 hover:text-navy-950 font-bold"
            leftIcon={<Bell className="w-3.5 h-3.5" />}
          >
            Reminder & Summary
          </Button>
          <button onClick={handleClearChat} className="p-2 text-gray-400 hover:text-white transition-colors" title="Clear Chat">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Medical Safety Guardrails Banner */}
      <div className="p-3 bg-amber-50 border-b border-amber-200 text-amber-950 text-xs flex items-center justify-between shrink-0">
        <span className="flex items-center gap-1.5 font-semibold text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Medical Notice: AI assists with care navigation. For chest pain or emergency, call 1800-VIGHNA.</span>
        </span>
      </div>

      {/* 3. Intent Category Filter Tabs */}
      <div className="px-4 py-2 bg-white border-b border-gray-200 flex items-center gap-2 overflow-x-auto shrink-0">
        <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider flex items-center gap-1 shrink-0">
          <Filter className="w-3 h-3" /> Filter:
        </span>
        {[
          { id: 'all', label: 'All Messages' },
          { id: 'emergency', label: 'Emergency Alerts' },
          { id: 'symptoms', label: 'Symptom Triage' },
          { id: 'doctors', label: 'Doctor Matches' },
          { id: 'hospitals', label: 'Hospital Branches' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveIntentFilter(tab.id)}
            className={`px-3 py-1 rounded-full text-xs font-extrabold whitespace-nowrap transition-all ${
              activeIntentFilter === tab.id
                ? 'bg-teal-600 text-white shadow-2xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 4. Quick Symptom Prompts */}
      <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2 overflow-x-auto shrink-0">
        <span className="text-[11px] font-bold text-gray-400 shrink-0 uppercase tracking-wider">Quick Prompts:</span>
        {[
          'Knee joint pain & stiffness',
          'Severe chest pain (Emergency)',
          'Migraine headache & dizziness',
          'Skin rash & itching',
          'Book OPD appointment tomorrow',
          'Preventive heart checkup tips',
        ].map((chip, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendMessage(chip)}
            className="px-3 py-1 bg-white hover:bg-teal-50 hover:border-teal-500 text-navy-900 rounded-full text-xs font-semibold border border-gray-300 whitespace-nowrap transition-all shadow-2xs"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* 5. Scrollable Chat Timeline */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-gray-50/50">
        {filteredMessages.map((msg) => (
          <AiMessageItem key={msg.id} message={msg} />
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-3 my-3">
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white p-3 rounded-2xl border border-gray-200 text-xs font-semibold text-teal-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500 animate-spin" />
              <span>Analyzing query intent, applying safety guardrails & matching specialists...</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* 6. Input Controls & Voice Microphone */}
      <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={handleVoiceAssistant}
          className={`p-3 rounded-xl border transition-all ${
            isListeningVoice
              ? 'bg-red-600 text-white border-red-600 animate-bounce'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
          }`}
          title="Voice Assistant Speech Input"
        >
          <Mic className="w-5 h-5" />
        </button>

        <input
          type="text"
          placeholder="Describe symptoms or query (e.g. knee pain, chest pressure, find doctor)..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
        />

        <Button
          variant="gold"
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim()}
          leftIcon={<Send className="w-4 h-4" />}
          className="px-5 py-3 font-bold"
        >
          Send
        </Button>
      </div>

      {/* Follow-Up & Summary Export Modal */}
      <AiFollowUpModal
        isOpen={isFollowUpModalOpen}
        onClose={() => setIsFollowUpModalOpen(false)}
        messages={messages}
      />
    </div>
  );
};
