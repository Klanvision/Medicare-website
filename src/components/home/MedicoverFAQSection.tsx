import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Globe } from 'lucide-react';

export const MedicoverFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. What services are offered by MEDICARE Hospitals?',
      a: 'MEDICARE Hospitals offers a wide range of medical services, including general medicine, cardiology, orthopedics, neurology, oncology, gynecology, pediatrics, gastroenterology, nephrology, and emergency care. We also provide diagnostics, advanced surgeries, and health check-up packages.',
    },
    {
      q: '2. Where are MEDICARE Hospitals located in India?',
      a: 'MEDICARE Hospitals operates across multiple cities in India including Hyderabad, Pune, Nashik, Kurnool, Nizamabad, Srikakulam, Nellore, Whitefield Bengaluru, Visakhapatnam, and several others. Each location is equipped with modern medical infrastructure and expert healthcare professionals.',
    },
    {
      q: '3. Is MEDICARE a multispecialty hospital?',
      a: 'Yes, MEDICARE is a leading multispecialty hospital group offering comprehensive care across more than 35 medical specialties, ensuring holistic treatment under one roof.',
    },
    {
      q: '4. How do I book an appointment at MEDICARE Hospitals?',
      a: 'You can book an appointment online through our website by selecting your preferred location, doctor, and time slot. Alternatively, you can call our 24/7 helpline or visit the hospital directly.',
    },
    {
      q: '5. What makes MEDICARE Hospitals different from other hospitals?',
      a: 'MEDICARE Hospitals combines advanced medical technology with experienced doctors, patient-centric care, and modern infrastructure. Our commitment to safety, transparency, and clinical excellence makes us a trusted healthcare partner.',
    },
    {
      q: '6. Does MEDICARE offer online consultations or telemedicine?',
      a: 'Yes, MEDICARE provides secure online consultations with specialist doctors through our telemedicine platform. Patients can consult doctors remotely from the comfort of their homes.',
    },
    {
      q: '7. Are there emergency services available at MEDICARE?',
      a: 'Yes, all MEDICARE Hospitals offer 24/7 emergency services with quick-response teams, ICU support, trauma care, and ambulance facilities to handle critical medical situations.',
    },
    {
      q: '8. Which departments are available at MEDICARE Hospitals?',
      a: 'MEDICARE offers over 35 departments including Cardiology, Neurology, Orthopedics, General Surgery, Urology, ENT, Dermatology, Pulmonology, Oncology, and more — backed by advanced diagnostics and surgical care.',
    },
    {
      q: '9. Are there any health packages or preventive care plans at MEDICARE?',
      a: 'Yes, MEDICARE provides a variety of preventive health check-up packages tailored for all age groups. These include cardiac risk profiles, full-body checkups, women’s wellness, and diabetic screening plans.',
    },
    {
      q: '10. How can I contact MEDICARE Hospitals for general inquiries?',
      a: 'You can reach out to MEDICARE through our toll-free helpline (1800-MEDICARE), live chat on the website, or visit our contact page for location-specific numbers and email support.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold uppercase tracking-wider">
          Got Questions?
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
          Find instant answers to common questions regarding appointments, specialties, locations, insurance, and emergency services.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-extrabold text-xs sm:text-sm text-slate-900 hover:text-sky-600 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
