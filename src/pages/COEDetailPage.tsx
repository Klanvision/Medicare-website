import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  Cpu,
  HeartPulse,
  Brain,
  Bone,
  Ribbon,
  Activity,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Building2,
  Sparkles,
  Clock,
  BookOpen,
  UserCheck,
  Share2,
  FileText,
} from 'lucide-react';
import { coeService } from '@/services/coeService';
import { COEItem, COEArticle } from '@/data/coeData';
import { DOCTORS_DATA } from '@/data/doctorData';
import { getArticleBySlug, DetailedHealthArticle } from '@/data/healthArticlesData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { FAQAccordion } from '@/components/specialties/FAQAccordion';
import { PageLoader } from '@/components/common/Loading';
import { ErrorState } from '@/components/common/ErrorState';

export const COEDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [coe, setCoe] = useState<COEItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Article Reader Modal State
  const [selectedArticle, setSelectedArticle] = useState<COEArticle | null>(null);

  useEffect(() => {
    const loadCOE = async () => {
      setIsLoading(true);
      if (slug) {
        const found = await coeService.getCOEBySlug(slug);
        setCoe(found);
      }
      setIsLoading(false);
    };
    loadCOE();
  }, [slug]);

  if (isLoading) {
    return <PageLoader message="Loading Centre of Excellence..." />;
  }

  if (!coe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ErrorState
          title="Institute Not Found"
          message="The Centre of Excellence you requested could not be located."
          onRetry={() => navigate('/centres-of-excellence')}
        />
      </div>
    );
  }

  // Associated Doctors
  const instituteDoctors = DOCTORS_DATA.filter((doc) =>
    coe.associatedDoctorIds.includes(doc.id)
  );

  // Helper for full article matter
  const activeDetailedArticle: DetailedHealthArticle | undefined = selectedArticle
    ? getArticleBySlug(
        selectedArticle.slug ||
          selectedArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      )
    : undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link */}
      <Link
        to="/centres-of-excellence"
        className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-navy-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Institutes
      </Link>

      {/* Hero Visual Storytelling Card */}
      <Card variant="navy" accentGoldTop className="p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold" size="sm" className="font-extrabold uppercase tracking-wider">
                Centre of Excellence
              </Badge>
              <span className="text-xs text-sky-200 font-semibold">• MEDICARE Flagship Institute</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {coe.title}
            </h1>

            <p className="text-sm sm:text-base text-sky-100 font-medium leading-relaxed">
              {coe.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-extrabold text-white">
              <Link to="/appointments">
                <Button variant="gold" size="lg" leftIcon={<Calendar className="w-5 h-5" />}>
                  Book Institute Appointment
                </Button>
              </Link>
              <a
                href="tel:1800-MEDICARE"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 transition-all flex items-center gap-2"
              >
                <HeartPulse className="w-5 h-5 text-red-400 animate-pulse" />
                24/7 Helpline: 1800-MEDICARE
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-72 sm:h-96 relative">
          <img
            src={coe.bannerImage}
            alt={coe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent flex items-end p-6">
            <div className="text-white space-y-1">
              <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest block">
                Institute Clinical Standard
              </span>
              <p className="text-xs sm:text-sm font-semibold max-w-2xl text-slate-200">
                {coe.overview}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {coe.stats.map((st, i) => (
          <Card key={i} className="p-5 text-center bg-white border border-gray-200 space-y-1 shadow-sm">
            <p className="text-2xl sm:text-3xl font-black text-[#00529B]">{st.value}</p>
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">{st.label}</p>
          </Card>
        ))}
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Technology, Procedures, Articles, FAQs */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Advanced Technology */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="border-b pb-3">
              <Badge variant="teal" size="sm">Advanced Medical Technology</Badge>
              <h2 className="text-2xl font-black text-navy-900 mt-1">State-of-the-Art Equipment</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coe.technology.map((tech, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white text-[#00529B] shadow-2xs">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900">{tech.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{tech.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Clinical Procedures & Treatments */}
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="border-b pb-3">
              <Badge variant="gold" size="sm">Clinical Procedures</Badge>
              <h2 className="text-2xl font-black text-navy-900 mt-1">Specialized Surgical Interventions</h2>
            </div>
            <div className="space-y-4">
              {coe.procedures.map((proc, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200 flex items-start gap-3 shadow-2xs hover:border-[#00529B] transition-all">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900">{proc.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Institute Health Articles & Insights */}
          {coe.articles && coe.articles.length > 0 && (
            <Card className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00529B]" />
                  Institute Articles & Medical Matter
                </h3>
                <Link to="/health-library" className="text-xs font-bold text-[#00529B] hover:underline">
                  View Health Library →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coe.articles.map((art, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedArticle(art)}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden space-y-3 group hover:border-[#00529B] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative overflow-hidden h-44">
                        <img
                          src={art.imageUrl}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#00529B] text-[10px] font-black uppercase tracking-wider shadow-sm">
                            {art.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#00529B]" /> {art.readTime}</span>
                          <span>{art.date}</span>
                        </div>
                        <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#00529B] transition-colors leading-snug line-clamp-2">
                          {art.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2">
                          Click to open full clinical matter, key takeaways, and treatment guidelines for {art.title}.
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00529B]">
                      <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> Read Matter</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* FAQs Accordion */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3">
              Institute FAQs
            </h3>
            <FAQAccordion faqs={coe.faqs} />
          </Card>
        </div>

        {/* Right Sidebar: Doctors & Facilities */}
        <div className="space-y-6">
          {/* Associated Senior Consultants */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-black text-navy-900 border-b pb-2 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#00529B]" />
              Institute Consultants
            </h3>
            <div className="space-y-3">
              {instituteDoctors.map((doc) => (
                <div key={doc.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <img
                    src={doc.photoUrl}
                    alt={doc.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-extrabold text-slate-900 truncate">{doc.name}</h4>
                    <p className="text-[10px] font-bold text-[#00529B] truncate">{doc.specialty}</p>
                    <p className="text-[10px] text-slate-500">{doc.experienceYears} Years Exp</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/appointments" className="block pt-2">
              <Button variant="teal" size="sm" fullWidth>
                View Doctor Schedule
              </Button>
            </Link>
          </Card>

          {/* Key Facilities List */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-black text-navy-900 border-b pb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#00529B]" />
              Institute Infrastructure
            </h3>
            <div className="space-y-2 text-xs font-semibold text-slate-700">
              {coe.facilities.map((fac, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-sky-50/50 border border-sky-100 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00529B] shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Book Consultation Box */}
          <Card className="p-6 bg-gradient-to-br from-[#00529B] to-[#003B70] text-white space-y-4 shadow-xl">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-300 block">Fast-Track OPD</span>
              <h3 className="text-lg font-black">Need Expert Second Opinion?</h3>
              <p className="text-xs text-sky-100 leading-relaxed font-medium">
                Consult with our senior institute specialists at MEDICARE Hospitals.
              </p>
            </div>

            <Link to="/appointments" className="block">
              <button
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation Slot</span>
              </button>
            </Link>

            <div className="p-4 bg-white/10 text-white rounded-2xl space-y-2 border border-white/20">
              <p className="text-[10px] text-sky-200 font-bold uppercase">24/7 Institute Helpline</p>
              <p className="text-lg font-extrabold text-white">1800-MEDICARE</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Interactive Clinical Article Reader Modal */}
      {selectedArticle && (
        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.title}
          size="xl"
        >
          <div className="space-y-6 font-sans text-slate-800">
            {/* Topic Matched Hero Visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-56 sm:h-72 relative">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[#00529B] text-white text-xs font-extrabold uppercase shadow-md">
                  {selectedArticle.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-bold backdrop-blur-sm shadow-md">
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#00529B]" /> {selectedArticle.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><UserCheck className="w-3.5 h-3.5 text-emerald-600" /> Peer-Reviewed by MEDICARE Clinical Board</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>
            </div>

            {/* Article Clinical Matter Content */}
            <div className="space-y-5 text-xs sm:text-sm leading-relaxed text-slate-700 max-h-[50vh] overflow-y-auto pr-2">
              
              {/* Introduction Paragraph */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
                <strong className="text-sm font-black text-[#00529B] block">Executive Clinical Overview</strong>
                <p className="font-medium text-slate-700">
                  {activeDetailedArticle?.fullContent.introduction ||
                    `This evidence-based medical guide provides comprehensive insights regarding ${selectedArticle.title}. Prepared by senior consultants at MEDICARE Hospitals, it details clinical symptoms, diagnostic protocols, and modern treatment options.`}
                </p>
              </div>

              {/* Dynamic Matter Sections */}
              {activeDetailedArticle?.fullContent.sections ? (
                <div className="space-y-4">
                  {activeDetailedArticle.fullContent.sections.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <h3 className="text-sm font-black text-slate-900">{sec.heading}</h3>
                      {Array.isArray(sec.content) ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {sec.content.map((item, itemIdx) => (
                            <li key={itemIdx} className="font-medium">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-medium text-slate-700">{sec.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-black text-slate-900">1. Understanding the Condition & Diagnostics</h3>
                    <p className="font-medium">
                      Early identification of symptoms paired with advanced diagnostic imaging (such as high-resolution 3D CT scans, MRI, or specialized blood biomarker panels) enables precision medical intervention and faster patient recovery.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-black text-slate-900">2. Modern Treatment & Minimally Invasive Options</h3>
                    <p className="font-medium">
                      At MEDICARE Hospitals, our multidisciplinary specialist team utilizes minimally invasive endoscopic procedures, robotic-assisted surgical systems, and personalized pharmacological therapies tailored to patient demographics.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <h3 className="text-sm font-black text-slate-900">3. Recovery, Rehabilitation & Lifestyle Guidance</h3>
                    <p className="font-medium">
                      Post-procedure care includes monitored physical rehabilitation, nutritional guidance, and scheduled follow-ups with your consulting specialist to guarantee optimal long-term health outcomes.
                    </p>
                  </div>
                </div>
              )}

              {/* Key Takeaways Box */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <strong className="text-xs font-black text-amber-900 uppercase tracking-wider block flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Key Clinical Takeaways
                </strong>
                <ul className="list-disc pl-5 text-xs text-amber-950 font-semibold space-y-1">
                  {activeDetailedArticle?.fullContent.keyTakeaways ? (
                    activeDetailedArticle.fullContent.keyTakeaways.map((tk, tIdx) => (
                      <li key={tIdx}>{tk}</li>
                    ))
                  ) : (
                    <>
                      <li>Early clinical evaluation preserves healthy organ function and prevents disease progression.</li>
                      <li>Minimally invasive options significantly reduce hospital stay and recovery time.</li>
                      <li>Consult a qualified MEDICARE specialist for tailored medical evaluation.</li>
                    </>
                  )}
                </ul>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  const artSlug = selectedArticle.slug || selectedArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  setSelectedArticle(null);
                  navigate(`/health-articles/${artSlug}`);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#00529B]" />
                <span>Open Dedicated Full Page</span>
              </button>

              <Link to="/appointments" className="w-full sm:w-auto" onClick={() => setSelectedArticle(null)}>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#00529B] hover:bg-[#003B70] text-white text-xs font-black flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Institute Doctor</span>
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
