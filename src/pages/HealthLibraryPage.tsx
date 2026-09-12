import React, { useState, useEffect, useCallback } from 'react';
import {
  BookOpen,
  Play,
  Clock,
  User,
  Share2,
  Bookmark,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { healthLibraryService } from '@/services/healthLibraryService';
import { HealthArticle, ContentType } from '@/data/healthLibraryData';
import { ArticleSearch } from '@/components/healthLibrary/ArticleSearch';
import { CategoryFilter } from '@/components/healthLibrary/CategoryFilter';
import { ArticleCard } from '@/components/healthLibrary/ArticleCard';
import { Pagination } from '@/components/healthLibrary/Pagination';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { Skeleton } from '@/components/common/Loading';
import { EmptyState } from '@/components/common/EmptyState';
import { useToast } from '@/hooks/useToast';

export const HealthLibraryPage: React.FC = () => {
  const toast = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ContentType | 'All'>('All');
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const [articles, setArticles] = useState<HealthArticle[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [featuredArticles, setFeaturedArticles] = useState<HealthArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Full Article Reader Modal State
  const [activeArticle, setActiveArticle] = useState<HealthArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<HealthArticle[]>([]);

  const fetchArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await healthLibraryService.getArticles({
        query: searchTerm,
        type: selectedType,
        tag: selectedTag,
        page: currentPage,
        limit: 6,
      });
      const featRes = await healthLibraryService.getFeaturedArticles();

      setArticles(res.items);
      setTotalPages(res.totalPages);
      setFeaturedArticles(featRes);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedType, selectedTag, currentPage]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleOpenArticle = async (article: HealthArticle) => {
    setActiveArticle(article);
    const related = await healthLibraryService.getRelatedArticles(article.id);
    setRelatedArticles(related);
  };

  const handleShareArticle = (title: string) => {
    toast.success(`Article link for "${title}" copied to clipboard!`, 'Link Shared');
  };

  const heroFeatured = featuredArticles[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            Evidence-Based Health Library
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            MEDICARE <span className="text-sky-200 font-black">Medical Insights & Doctor Guides</span>
          </h1>
          <p className="text-xs sm:text-sm text-sky-50 font-medium leading-relaxed">
            Explore peer-reviewed clinical articles, surgical explainer videos, disease guides, and wellness tips authored by MEDICARE senior consultants.
          </p>
        </div>

        <ArticleSearch value={searchTerm} onChange={setSearchTerm} />
      </div>

      {/* 1. Featured Article Spotlight Banner */}
      {heroFeatured && !searchTerm && selectedType === 'All' && !selectedTag && (
        <div className="bg-white border border-sky-100 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6 font-sans">
          <img
            src={heroFeatured.coverImage}
            alt={heroFeatured.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-2xl border border-sky-100 shadow-md"
          />
          <div className="space-y-4 md:w-1/2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-50 text-[#00529B] border border-sky-100 text-xs font-black uppercase tracking-wider">
                Featured Clinical Spotlight
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00529B] to-[#0066BC] text-white text-xs font-black uppercase tracking-wider shadow-xs">
                {heroFeatured.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">{heroFeatured.title}</h2>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">{heroFeatured.summary}</p>
            <div className="flex items-center justify-between pt-3 border-t border-sky-100">
              <div className="flex items-center gap-2.5 text-xs">
                <img src={heroFeatured.author.photo} alt={heroFeatured.author.name} className="w-8 h-8 rounded-full object-cover border border-sky-200" />
                <div>
                  <span className="font-extrabold text-slate-900 block">{heroFeatured.author.name}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{heroFeatured.publishDate}</span>
                </div>
              </div>
              <button
                onClick={() => handleOpenArticle(heroFeatured)}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] hover:from-[#003d75] hover:to-[#00529B] text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Read Featured Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Category Tabs & Tag Filter */}
      <div className="space-y-4">
        <CategoryFilter
          selectedType={selectedType}
          onTypeChange={(type) => {
            setSelectedType(type);
            setCurrentPage(1);
          }}
          selectedTag={selectedTag}
          onClearTag={() => setSelectedTag(undefined)}
        />

        {/* Content Tags Cloud */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider shrink-0">Popular Tags:</span>
          {['RoboticSurgery', 'Cardiology', 'HeartHealth', 'JointCare', 'PreventiveHealth', 'MRI', 'LiverHealth'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setSelectedTag(t);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedTag === t
                  ? 'bg-teal-600 text-white font-bold'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Articles Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-navy-900">
            Health Knowledge Index ({articles.length} Items)
          </h3>
        </div>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && articles.length === 0 && (
          <EmptyState
            title="No Health Articles Found"
            description="No medical publication or video matches your search query or category filter."
            actionLabel="Reset Search & Filters"
            onAction={() => {
              setSearchTerm('');
              setSelectedType('All');
              setSelectedTag(undefined);
            }}
          />
        )}

        {/* Grid */}
        {!isLoading && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onReadArticle={handleOpenArticle}
                onSelectTag={(t) => {
                  setSelectedTag(t);
                  setCurrentPage(1);
                }}
              />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Full Article Reader Modal */}
      <Modal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || 'Article Reader'}
        description={`${activeArticle?.type} • ${activeArticle?.category} • ${activeArticle?.readTime}`}
      >
        {activeArticle && (
          <div className="space-y-6">
            {/* Embedded Video Player if Video Type */}
            {activeArticle.type === 'Video' && activeArticle.videoUrl ? (
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border">
                <iframe
                  src={activeArticle.videoUrl}
                  title={activeArticle.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={activeArticle.coverImage}
                alt={activeArticle.title}
                className="w-full h-64 object-cover rounded-2xl border"
              />
            )}

            {/* Author Byline */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-xs">
              <div className="flex items-center gap-2">
                <img src={activeArticle.author.photo} alt={activeArticle.author.name} className="w-8 h-8 rounded-full object-cover border" />
                <div>
                  <span className="font-bold text-navy-900 block">{activeArticle.author.name}</span>
                  <span className="text-[10px] text-gray-500">{activeArticle.author.title}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShareArticle(activeArticle.title)}
                leftIcon={<Share2 className="w-3.5 h-3.5" />}
              >
                Share
              </Button>
            </div>

            {/* Main Clinical Body */}
            <div className="prose max-w-none text-sm text-navy-900 leading-relaxed space-y-3 font-normal">
              {activeArticle.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Related Articles Section */}
            {relatedArticles.length > 0 && (
              <div className="pt-4 border-t space-y-3">
                <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider">Related Clinical Articles</h4>
                <div className="space-y-2">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => handleOpenArticle(rel)}
                      className="p-3 bg-gray-50 hover:bg-teal-50 rounded-xl cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <span className="text-xs font-bold text-navy-900 line-clamp-1">{rel.title}</span>
                      <ArrowRight className="w-4 h-4 text-teal-600 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};
