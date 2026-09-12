import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldAlert, Send } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { HOSPITAL_CONTACT_INFO } from '@/data/navigation';
import { useToast } from '@/hooks/useToast';

export const ContactPagePlaceholder: React.FC = () => {
  const toast = useToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been received. Our help desk will respond shortly.', 'Message Received');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="teal" size="md">Contact & Location</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Get in Touch with MEDICARE
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Our administrative and clinical helpdesk is available 24/7 to assist patient inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="navy" accentGoldTop className="p-6 space-y-4">
            <Badge variant="gold" size="sm">24/7 Emergency Line</Badge>
            <h3 className="text-xl font-bold text-white">Critical Trauma & Ambulance</h3>
            <p className="text-sm text-gray-300">
              For acute medical emergencies, cardiac distress, or accidents call immediately:
            </p>
            <a
              href={`tel:${HOSPITAL_CONTACT_INFO.emergencyNumber}`}
              className="text-2xl font-extrabold text-gold-400 block hover:underline"
            >
              {HOSPITAL_CONTACT_INFO.emergencyNumber}
            </a>
          </Card>

          <Card className="p-6 space-y-4">
            <h4 className="text-base font-bold text-navy-900 border-b pb-2">Hospital Location</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>{HOSPITAL_CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <span>{HOSPITAL_CONTACT_INFO.opdHelpline}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                <span>{HOSPITAL_CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <span>{HOSPITAL_CONTACT_INFO.opdHours}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 space-y-6 shadow-soft">
            <h3 className="text-xl font-bold text-navy-900">Send an Enquiry Message</h3>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Your Name" placeholder="Full Name" required />
                <Input label="Phone Number" placeholder="+91..." required />
              </div>
              <Input label="Email Address" type="email" placeholder="email@example.com" required />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-navy-900">Message / Query</label>
                <textarea
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-navy-900 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  placeholder="How can MEDICARE assist you today?"
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="lg" leftIcon={<Send className="w-4 h-4" />}>
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};
