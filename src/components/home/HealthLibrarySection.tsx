import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const HealthLibrarySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const articles = [
    {
      id: 1,
      title: 'Laser Hair Removal Treatment in Hitech City',
      category: 'Dermatology',
      date: '27-07-2026',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Dermatosurgery in Hitech City | Advanced Skin Care',
      category: 'Dermatology',
      date: '27-07-2026',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Psoriasis Care in Hitech City | Symptoms and Skin Health',
      category: 'Dermatology',
      date: '27-07-2026',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      title: 'Chemical Peel Treatment in Hitech City | Skin Rejuvenation',
      category: 'Dermatology',
      date: '25-07-2026',
      image: 'https://images.unsplash.com/photo-1512290900673-70024fe74923?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      title: 'Botox Treatment for Wrinkles in Hitech City | What to Expect',
      category: 'Dermatology',
      date: '25-07-2026',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      title: 'Clinical Dermatology Care in Hitech City | Skin Health',
      category: 'Dermatology',
      date: '25-07-2026',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      title: 'Eczema Care in Hitech City | Symptoms and Treatment',
      category: 'Dermatology',
      date: '25-07-2026',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      title: 'Peripheral Angioplasty in Hitech City | Vascular Treatment',
      category: 'Cardiology',
      date: '23-07-2026',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="latest-blogs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans space-y-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Latest Blogs
        </h2>

        <div className="flex items-center gap-4">
          <Link
            to="/health-library"
            className="text-xs sm:text-sm font-extrabold text-[#00529B] hover:underline uppercase tracking-wider"
          >
            VIEW ALL BLOGS
          </Link>

          <div className="hidden sm:flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Cards Scrollable Grid */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1"
      >
        {articles.map((item) => (
          <div
            key={item.id}
            className="min-w-[260px] max-w-[280px] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shrink-0"
          >
            <div>
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#00529B] uppercase">
                    {item.category}
                  </span>
                  <span className="text-slate-400">{item.date}</span>
                </div>

                <h3 className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug group-hover:text-[#00529B] transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-4 pt-0">
              <Link
                to="/articles"
                className="w-full py-2 px-4 rounded-full bg-[#00529B] hover:bg-[#00407A] text-white font-extrabold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
