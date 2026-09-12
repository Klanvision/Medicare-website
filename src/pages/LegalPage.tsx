import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck, FileText, Printer, ArrowLeft, Clock, Lock, CheckCircle2,
  AlertTriangle, Mail, Phone, ChevronRight, HelpCircle, FileCheck, Share2
} from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { LEGAL_POLICIES, LegalPolicy } from '@/data/legalData';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { success } = useToast();

  // Determine current active policy key from path or default to 'privacy'
  const pathSlug = location.pathname.replace('/', '') || 'privacy';
  const activePolicy: LegalPolicy = LEGAL_POLICIES[pathSlug] || LEGAL_POLICIES.privacy;

  const [activeSectionId, setActiveSectionId] = useState<string>('');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    success('Policy page link copied to clipboard!');
  };

  const navItems = [
    { slug: 'privacy', label: 'Privacy Policy', icon: Lock },
    { slug: 'terms', label: 'Terms of Service', icon: FileText },
    { slug: 'cancellation-policy', label: 'Cancellation Policy', icon: Clock },
    { slug: 'refund-policy', label: 'Refund Policy', icon: FileCheck },
  ];

  return (
    <div className="w-full bg-gray-50 pb-20 space-y-8">
      {/* 1. HERO HEADER BANNER */}
      <section className="relative bg-[#060c20] text-white pt-8 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <Badge variant="gold" size="sm">{activePolicy.badge}</Badge>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Last Updated: {activePolicy.lastUpdated}</span>
              </span>
              <span>•</span>
              <span>Effective: {activePolicy.effectiveDate}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {activePolicy.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-3xl leading-relaxed">
            {activePolicy.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Printer className="w-4 h-4 text-teal-400" />}
              onClick={handlePrint}
              className="border-gray-600 text-white hover:bg-navy-900"
            >
              Print Policy
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Share2 className="w-4 h-4 text-amber-400" />}
              onClick={handleCopyLink}
              className="border-gray-600 text-white hover:bg-navy-900"
            >
              Share Page Link
            </Button>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT GRID: SIDEBAR NAV + CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-3 space-y-4 sticky top-24">
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-2">
              <h4 className="text-xs font-black text-navy-950 uppercase tracking-wider px-2 py-1">
                Hospital Policies & Legal
              </h4>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathSlug === item.slug;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => navigate(`/${item.slug}`)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-extrabold transition-all text-left ${
                        isActive
                          ? 'bg-navy-950 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-navy-950'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-teal-600'}`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-gray-400'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact Help Box */}
            <div className="bg-[#08132d] text-white p-5 rounded-2xl border border-teal-500/40 space-y-3">
              <h4 className="text-sm font-black text-white">Legal & Compliance Desk</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Have specific privacy concerns or patient rights queries?
              </p>
              <div className="space-y-2 text-xs text-gray-300 pt-1 border-t border-navy-800">
                <p className="flex items-center gap-2 font-bold">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>legal@medicare.com</span>
                </p>
                <p className="flex items-center gap-2 font-bold">
                  <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>+91 20 2765 9000</span>
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN POLICY CONTENT AREA */}
          <main className="lg:col-span-9 space-y-6">

            {/* Policy Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-navy-950">Overview & Scope</h2>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                {activePolicy.overview}
              </p>

              {activePolicy.disclaimer && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900 font-semibold">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{activePolicy.disclaimer}</span>
                </div>
              )}
            </div>

            {/* Policy Sub-Sections */}
            <div className="space-y-6">
              {activePolicy.sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 hover:border-gray-300 transition-all"
                >
                  <h3 className="text-lg font-black text-navy-950 border-b pb-2">
                    {section.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {section.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <div className="pt-2">
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-200">
                        {section.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx} className="flex items-start gap-2.5 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Regulatory Placeholder Disclosure (No Invented Legal Guarantees) */}
            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
              <h4 className="font-extrabold text-navy-950 uppercase tracking-wider text-[10px]">
                Statutory Regulatory Notice
              </h4>
              <p className="leading-relaxed">
                This document serves as the governing framework for MEDICARE quaternary operations. Where specific custom legal clauses have not been explicitly modified, general medical council regulations and standard Maharashtra Healthcare Establishment rules apply. No unverified legal guarantees are implied.
              </p>
            </div>

            {/* Bottom Footer Help Action */}
            <div className="bg-[#070e24] text-white p-6 rounded-3xl border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-black">Need assistance with your patient rights?</h4>
                <p className="text-xs text-gray-300">Contact our 24/7 Patient Relations & Grievance Desk.</p>
              </div>
              <Link to="/contact">
                <Button variant="gold" size="sm" className="whitespace-nowrap">
                  Contact Grievance Desk
                </Button>
              </Link>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
};

export default LegalPage;
