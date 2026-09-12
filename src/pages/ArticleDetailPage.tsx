import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  UserCheck,
  ShieldAlert,
  Share2,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { getArticleBySlug, getAllHealthArticles, DetailedHealthArticle } from '@/data/healthArticlesData';
import { useToast } from '@/hooks/useToast';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const article: DetailedHealthArticle | undefined = slug ? getArticleBySlug(slug) : undefined;
  const allArticles = getAllHealthArticles();
  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard && article) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Article link copied to clipboard!', 'Share Link');
    }
  };

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">Article Not Found</h1>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          The health article you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/specialities/internal-medicine"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00529B] text-white font-bold text-sm hover:bg-[#003e75] transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Internal Medicine</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-50 py-8 sm:py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto pb-1">
          <Link to="/" className="hover:text-[#00529B] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/specialities/internal-medicine" className="hover:text-[#00529B] transition-colors">Health Articles</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-extrabold truncate max-w-[200px] sm:max-w-none">{article.title}</span>
        </nav>

        {/* Back Button */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-700 hover:text-[#00529B] hover:border-slate-300 shadow-2xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Health Articles</span>
          </button>
        </div>

        {/* Header / Hero Section */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
              {article.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
              {article.disease}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight">
            {article.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {article.shortDescription}
          </p>

          {/* Author & Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-slate-800 font-extrabold">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-[#00529B] flex items-center justify-center font-black">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span>Reviewed by {article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{article.readingTime}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

          {/* Large Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Article Main Body */}
        <main className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-8 text-slate-800">
          
          {/* Introduction */}
          <div className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal border-l-4 border-[#00529B] pl-4 sm:pl-6 py-1 bg-sky-50/50 rounded-r-2xl">
            {article.fullContent.introduction}
          </div>

          {/* Article Sections */}
          <div className="space-y-8 divide-y divide-slate-100">
            {article.fullContent.sections.map((section, idx) => (
              <section key={idx} className={`${idx > 0 ? 'pt-8' : ''} space-y-4`}>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>{section.heading}</span>
                </h2>

                {section.isWarning ? (
                  <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                      <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                      <span>Critical Warning & Emergency Signs:</span>
                    </div>
                    {Array.isArray(section.content) ? (
                      <ul className="space-y-2 pl-2 text-sm text-amber-950 font-medium">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-amber-950 leading-relaxed font-medium">{section.content}</p>
                    )}
                  </div>
                ) : Array.isArray(section.content) ? (
                  <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-[#00529B] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways Box */}
          {article.fullContent.keyTakeaways && (
            <div className="bg-sky-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-sky-200 font-black uppercase text-xs tracking-wider">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Key Medical Takeaways</span>
              </div>
              <ul className="space-y-3">
                {article.fullContent.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-sky-50 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Medical Disclaimer */}
          <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-extrabold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-slate-500" />
              <span>Medical Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              This article is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.
            </p>
          </div>
        </main>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900">Explore More Health Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/health-articles/${rel.slug}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
                >
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-[110px] h-[65px] rounded-xl object-cover shrink-0 border border-slate-200 group-hover:scale-105 transition-transform"
                  />
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[10px] font-extrabold text-[#00529B] uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#00529B] transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
};
