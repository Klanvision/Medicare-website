import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, X, Send, Bot, Calendar, Phone, ShieldAlert,
  ExternalLink, Sparkles, RefreshCw, CheckCheck
} from 'lucide-react';
import { aiService, AiChatMessage } from '@/services/aiService';

interface WhatsAppChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  recommendedSpecialty?: string;
  recommendedDoctorName?: string;
  isEmergency?: boolean;
}

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<WhatsAppChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: '👋 Namaste! Welcome to MEDICARE AI WhatsApp Desk. How can I assist your health or appointment query today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = '912027659000'; // Official WhatsApp Hotline

  const presetQueries = [
    {
      label: '📅 Book Doctor Appointment',
      text: 'I want to book an appointment with a specialist doctor.',
    },
    {
      label: '🔬 Lab Tests & Diagnostics',
      text: 'Tell me about NABL pathology lab packages and home blood collection.',
    },
    {
      label: '🚨 24/7 Emergency & Ambulance',
      text: 'I have an emergency query regarding ICU bed admission and ambulance.',
    },
    {
      label: '💬 Second Opinion & Insurance',
      text: 'How can I get an expert second opinion for my medical reports?',
    },
  ];

  // Auto-scroll to bottom of chat thread
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isAiTyping]);

  const handleUserSendMessage = async (userText: string) => {
    if (!userText.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: WhatsAppChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: timeStr,
    };

    setChatHistory((prev) => [...prev, userMsg]);
    setCustomMessage('');
    setIsAiTyping(true);

    // Process query using HealthNova AI Engine
    try {
      const aiResponse: AiChatMessage = await aiService.processSymptomQuery(userText);
      setIsAiTyping(false);

      const aiMsg: WhatsAppChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponse.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedSpecialty: aiResponse.recommendedSpecialty,
        recommendedDoctorName: aiResponse.recommendedDoctor?.name,
        isEmergency: aiResponse.isEmergency,
      };

      setChatHistory((prev) => [...prev, aiMsg]);
    } catch (err) {
      setIsAiTyping(false);
      const fallbackAiMsg: WhatsAppChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: 'Thank you for reaching out! Our clinical desk is available 24/7. You can also connect directly with our WhatsApp team at +91 20 2765 9000.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatHistory((prev) => [...prev, fallbackAiMsg]);
    }
  };

  const handleOpenExternalWhatsApp = (customText?: string) => {
    const textToEncode = customText || 'Hello MEDICARE, I need helpdesk assistance.';
    const encoded = encodeURIComponent(textToEncode);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Interactive AI WhatsApp Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#efeae2] rounded-3xl shadow-2xl border border-emerald-300 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 flex flex-col h-[520px]">
          {/* Header */}
          <div className="bg-[#075e54] text-white p-3.5 flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold border border-emerald-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075e54] rounded-full animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-extrabold text-white">HealthNova AI WhatsApp</h4>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-700 text-emerald-100 text-[9px] font-black uppercase">
                    AI Active
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Hotline: +91 20 2765 9000</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setChatHistory([chatHistory[0]])}
                className="text-emerald-200 hover:text-white p-1.5 rounded-lg hover:bg-emerald-700/50 transition-colors"
                title="Clear Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-emerald-200 hover:text-white p-1.5 rounded-lg hover:bg-emerald-700/50 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div ref={chatContainerRef} className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs bg-[#efeae2]">
            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl shadow-2xs relative space-y-1.5 ${
                    msg.sender === 'user'
                      ? 'bg-[#d9fdd3] text-navy-950 rounded-tr-none'
                      : msg.isEmergency
                      ? 'bg-red-50 text-red-950 border-2 border-red-400 rounded-tl-none'
                      : 'bg-white text-navy-950 rounded-tl-none border border-gray-200'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-teal-700 pb-0.5 border-b border-gray-100">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>HealthNova Clinical AI</span>
                    </div>
                  )}

                  <p className="leading-relaxed font-medium whitespace-pre-wrap">{msg.text}</p>

                  {/* AI Recommendations Action Card */}
                  {msg.sender === 'ai' && (msg.recommendedSpecialty || msg.recommendedDoctorName || msg.isEmergency) && (
                    <div className="pt-2 space-y-1.5 border-t border-gray-100">
                      {msg.recommendedDoctorName && (
                        <p className="text-[11px] font-bold text-teal-800">
                          👨‍⚕️ Specialist: {msg.recommendedDoctorName}
                        </p>
                      )}
                      {msg.isEmergency ? (
                        <a
                          href="tel:1800844462"
                          className="w-full py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-[11px] font-black flex items-center justify-center gap-1 shadow-xs transition-colors"
                        >
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>Call 24/7 ER Hotline</span>
                        </a>
                      ) : (
                        <Link
                          to="/appointments"
                          onClick={() => setIsOpen(false)}
                          className="w-full py-1.5 bg-amber-500 hover:bg-amber-600 text-navy-950 rounded-xl text-[11px] font-black flex items-center justify-center gap-1 shadow-xs transition-colors"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book Doctor Appointment</span>
                        </Link>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-1 text-[9px] text-gray-500 pt-0.5">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-600" />}
                  </div>
                </div>

                {/* Direct WhatsApp App Escalation Trigger */}
                {msg.sender === 'ai' && (
                  <button
                    type="button"
                    onClick={() => handleOpenExternalWhatsApp(msg.text.substring(0, 80))}
                    className="mt-1 text-[10px] font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 bg-white/80 hover:bg-white px-2 py-0.5 rounded-full border border-emerald-300 shadow-2xs transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Open in WhatsApp App (+91 20 2765 9000)</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>
            ))}

            {/* AI Typing Indicator */}
            {isAiTyping && (
              <div className="flex items-center gap-2 text-gray-500 text-xs bg-white p-2.5 rounded-2xl rounded-tl-none w-48 shadow-2xs border border-gray-200">
                <Bot className="w-4 h-4 text-teal-600 animate-spin" />
                <span className="font-semibold text-teal-800">AI is analyzing query...</span>
              </div>
            )}
          </div>

          {/* Quick Chips & Custom Input Area */}
          <div className="p-3 bg-white border-t border-gray-200 space-y-2 shrink-0">
            {/* Quick Inquiry Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {presetQueries.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleUserSendMessage(q.text)}
                  className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-full text-[10px] font-extrabold whitespace-nowrap shrink-0 transition-colors"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Custom Query Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSendMessage(customMessage);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask HealthNova AI any health query..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
              />
              <button
                type="submit"
                disabled={!customMessage.trim() || isAiTyping}
                className="px-3.5 py-2 bg-[#075e54] hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl font-bold flex items-center justify-center shrink-0 shadow-md transition-colors"
                title="Send to AI Assistant"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl border-2 border-white hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        title="Chat on WhatsApp 24/7"
        aria-label="Open WhatsApp Chat Support"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </button>
    </div>
  );
};
