import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Globe } from 'lucide-react';
import { Logo } from '@/components/common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00529B] text-white pt-12 pb-8 relative overflow-hidden font-sans border-t border-sky-600/30">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* TOP MAIN GRID: Brand info, For Patients, Company, Quick Links, Action Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-sky-400/30">
          
          {/* Column 1: MEDICARE Brand & Global Presence (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <Logo variant="light" size="lg" showTagline={false} />
            
            <div className="inline-block bg-white text-[#00529B] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-xs">
              Caring for your health is all we do
            </div>

            <p className="text-xs text-sky-100/90 leading-relaxed font-normal">
              MEDICARE is a globally recognised healthcare brand with operations in 18 countries: Germany, Sweden, Poland, Turkey, Bulgaria, Georgia, Hungary, Romania, Serbia, Moldova, Ukraine, India, Bosnia & Herzegovina, Cyprus, Denmark, Finland, Greece, and Norway.
            </p>
          </div>

          {/* Column 2: FOR PATIENTS (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white pb-1 border-b border-sky-400/40 inline-block">
              FOR PATIENTS
            </h4>
            <ul className="space-y-2 text-xs text-sky-100 font-medium">
              <li><Link to="/hospitals" className="hover:text-white transition-colors">Hospitals</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Doctors</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Surgery Cost</Link></li>
              <li><Link to="/health-checkups" className="hover:text-white transition-colors">Health Checkups</Link></li>
              <li><Link to="/diagnostics" className="hover:text-white transition-colors">Medicines</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">Symptoms</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">Diseases</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Procedure</Link></li>
              <li><Link to="/health-checkups" className="hover:text-white transition-colors">Offers</Link></li>
              <li><Link to="/insurance" className="hover:text-white transition-colors">Insurance Companies</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund And Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: COMPANY (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white pb-1 border-b border-sky-400/40 inline-block">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-sky-100 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">News Room</Link></li>
              <li><Link to="/patient-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">MEDICARE Journal Of Medicine</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policies</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Site Map</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Awards & Recognitions</Link></li>
            </ul>
          </div>

          {/* Column 4: QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-wider uppercase text-white pb-1 border-b border-sky-400/40 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-sky-100 font-medium">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/centres-of-excellence" className="hover:text-white transition-colors">Woman And Child</Link></li>
              <li><Link to="/appointments" className="hover:text-white transition-colors">Book An Appointment</Link></li>
              <li><Link to="/diagnostics" className="hover:text-white transition-colors">Diagnostics And Pathology Test</Link></li>
              <li><Link to="/home-healthcare" className="hover:text-white transition-colors">Home Health Services</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/health-checkups" className="hover:text-white transition-colors">Fitness & Health Calculators</Link></li>
              <li><Link to="/emergency" className="hover:text-white transition-colors">CPR Training Registration</Link></li>
            </ul>
          </div>

          {/* Column 5: Right Banners & Mobile App Download Buttons (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5 flex flex-col justify-start items-stretch">
            
            {/* Second Opinion Gradient Card */}
            <Link
              to="/second-opinion"
              className="bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500 rounded-2xl p-4 flex items-center justify-between text-white shadow-md border border-white/20 transition-all transform hover:scale-[1.02]"
            >
              <div>
                <div className="text-base font-extrabold leading-tight">Second</div>
                <div className="text-xl font-black tracking-tight leading-none">Opinion</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-extrabold bg-white/20 px-2 py-0.5 rounded-md">
                  MEDICARE
                </span>
              </div>
            </Link>

            {/* International Patient Services Card */}
            <Link
              to="/international-patients"
              className="bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-400 hover:to-blue-600 rounded-2xl p-4 flex items-center justify-between text-white shadow-md border border-white/20 transition-all transform hover:scale-[1.02]"
            >
              <div>
                <div className="text-xs font-extrabold leading-tight">International Patient</div>
                <div className="text-sm font-black">Services</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </Link>

            {/* Google Play Download Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-md hover:bg-slate-100 transition-all"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M3.6 1.9L13.8 12 3.6 22.1c-.4-.4-.6-1-.6-1.7V3.6c0-.7.2-1.3.6-1.7z" />
                <path fill="#FBBC04" d="M17.1 8.7l-3.3 3.3 3.3 3.3 3.7-2.1c.8-.5.8-1.9 0-2.4l-3.7-2.1z" />
                <path fill="#4285F4" d="M13.8 12L3.6 1.9C4 1.5 4.7 1.4 5.3 1.8l11.8 6.9-3.3 3.3z" />
                <path fill="#34A853" d="M13.8 12l3.3 3.3-11.8 6.9c-.6.4-1.3.3-1.7-.1L13.8 12z" />
              </svg>
              <div className="text-left leading-none">
                <div className="text-[9px] uppercase font-bold text-slate-500">GET IT ON</div>
                <div className="text-sm font-black text-slate-900">Google Play</div>
              </div>
            </a>

            {/* App Store Download Button */}
            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-md hover:bg-slate-100 transition-all"
            >
              <svg className="w-6 h-6 fill-slate-900 shrink-0" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.97.99-3.12-1 .04-2.19.67-2.88 1.47-.62.72-1.16 1.89-.99 3.02 1.11.09 2.22-.55 2.88-1.37z" />
              </svg>
              <div className="text-left leading-none">
                <div className="text-[9px] uppercase font-bold text-slate-500">DOWNLOAD ON THE</div>
                <div className="text-sm font-black text-slate-900">App Store</div>
              </div>
            </a>

          </div>

        </div>

        {/* BOTTOM SECTION: CONTACT US & CENTER OF EXCELLENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 pb-6 border-b border-sky-400/30">
          
          {/* CONTACT US (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-white pb-1 border-b border-sky-400/40 inline-block">
              CONTACT US
            </h4>
            <div className="space-y-3 text-xs text-sky-100 font-medium">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sky-200 text-[11px]">We provide 24*7 services</span>
                  <a href="tel:04068334455" className="font-extrabold text-white text-sm hover:underline">
                    040-68334455
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sky-200 text-[11px]">Email us at</span>
                  <a href="mailto:info@medicarehospitals.in" className="font-bold text-white hover:underline">
                    info@medicarehospitals.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300/30 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sky-200 text-[11px]">WhatsApp us at</span>
                  <a href="https://wa.me/917075493806?text=Hi%20MEDICARE%20Helpdesk" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
                    +91 70754 93806
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER OF EXCELLENCE (Span 8: 4 Sub-Columns) */}
          <div className="lg:col-span-8 space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-white pb-1 border-b border-sky-400/40 inline-block">
              CENTER OF EXCELLENCE
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-sky-100 font-medium">
              {/* Sub-Col 1 */}
              <ul className="space-y-2">
                <li><Link to="/specialities" className="hover:text-white transition-colors">Cardiology</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Cardiothoracic</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Orthopedics</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Gastroenterology</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">General Surgery</Link></li>
              </ul>

              {/* Sub-Col 2 */}
              <ul className="space-y-2">
                <li><Link to="/specialities" className="hover:text-white transition-colors">Neurosurgery</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Pediatrics</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Neonatology</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Kidney Transplantation</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Liver Transplantation</Link></li>
              </ul>

              {/* Sub-Col 3 */}
              <ul className="space-y-2">
                <li><Link to="/specialities" className="hover:text-white transition-colors">Internal Medicine</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Plastic Surgery</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Urology</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Physiotherapy</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Psychiatry</Link></li>
              </ul>

              {/* Sub-Col 4 */}
              <ul className="space-y-2">
                <li><Link to="/specialities" className="hover:text-white transition-colors">Dental</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">ENT</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Rheumatology</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Emergency Medicine</Link></li>
                <li><Link to="/specialities" className="hover:text-white transition-colors">Gynecology</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM LEGAL BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sky-200 font-medium">
          <p>© {new Date().getFullYear()} MEDICARE Hospitals Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-4 flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span>|</span>
            <Link to="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
          <div className="flex items-center gap-1.5 text-sky-100">
            <span>Powered by</span>
            <span className="font-extrabold text-white">MEDICARE Healthcare Network</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
