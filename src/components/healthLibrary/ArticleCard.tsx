import React from 'react';
import { Clock, Play, FileText } from 'lucide-react';
import { HealthArticle } from '@/data/healthLibraryData';
import { Card } from '@/components/common/Card';

interface ArticleCardProps {
  article: HealthArticle;
  onReadArticle: (article: HealthArticle) => void;
  onSelectTag?: (tag: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadArticle,
  onSelectTag,
}) => {
  return (
    <article itemScope itemType="https://schema.org/MedicalWebPage" className="h-full font-sans">
      <Card
        hoverEffect
        className="p-6 bg-white flex flex-col justify-between space-y-5 h-full border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all rounded-3xl"
      >
        <div className="space-y-4">
          {/* Cover Image & Type Badges */}
          <div className="relative overflow-hidden rounded-2xl border border-sky-100">
            <img
              src={article.coverImage}
              alt={article.title}
              itemProp="image"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#00529B] text-white text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                {article.type === 'Video' && <Play className="w-2.5 h-2.5 fill-current" />}
                {article.type}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#00529B] border border-sky-100 text-[10px] font-black uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>

          {/* Title & Summary */}
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug line-clamp-2" itemProp="headline">
              {article.title}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3" itemProp="description">
              {article.summary}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {article.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTag && onSelectTag(tag)}
                className="text-[11px] font-bold text-[#00529B] hover:text-[#003d75] bg-sky-50 hover:bg-sky-100 border border-sky-100 px-2 py-0.5 rounded-md transition-colors cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="pt-4 border-t border-sky-100 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <img
                src={article.author.photo}
                alt={article.author.name}
                className="w-7 h-7 rounded-full object-cover shrink-0 border border-sky-200"
              />
              <div>
                <span className="font-extrabold text-slate-900 block leading-tight">{article.author.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">{article.publishDate}</span>
              </div>
            </div>

            <span className="text-xs font-bold text-[#00529B] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#00529B]" /> {article.readTime}
            </span>
          </div>

          <button
            onClick={() => onReadArticle(article)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] hover:from-[#003d75] hover:to-[#00529B] text-white text-xs font-black uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            {article.type === 'Video' ? <Play className="w-3.5 h-3.5 fill-current" /> : <FileText className="w-3.5 h-3.5" />}
            <span>{article.type === 'Video' ? 'Watch Medical Video' : 'Read Full Article'}</span>
          </button>
        </div>
      </Card>
    </article>
  );
};
