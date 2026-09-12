import { apiClient, ApiResponse } from './apiClient';
import { HEALTH_ARTICLES_DATA, HealthArticle } from '@/data/healthLibraryData';

export interface BannerAnnouncement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'urgent';
  linkUrl?: string;
  active: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const contentService = {
  /**
   * Fetch Health Library Articles
   */
  async getArticles(category?: string, query?: string): Promise<HealthArticle[]> {
    const res = await apiClient.get<HealthArticle[]>('/content/articles', {
      params: { category, query },
      mockFallback: async () => {
        let result = [...HEALTH_ARTICLES_DATA];

        if (category && category !== 'All') {
          result = result.filter((a: HealthArticle) => a.category === category);
        }

        if (query && query.trim() !== '') {
          const q = query.toLowerCase().trim();
          result = result.filter(
            (a: HealthArticle) =>
              a.title.toLowerCase().includes(q) ||
              a.summary.toLowerCase().includes(q) ||
              a.author.name.toLowerCase().includes(q)
          );
        }

        return result;
      },
    });
    return res.data || [];
  },

  /**
   * Fetch Article Details by Slug or ID
   */
  async getArticleBySlug(slug: string): Promise<HealthArticle | null> {
    const res = await apiClient.get<HealthArticle>(`/content/articles/${slug}`, {
      mockFallback: async () => {
        const found = HEALTH_ARTICLES_DATA.find((a: HealthArticle) => a.slug === slug || a.id === slug);
        return found || null;
      },
    });
    return res.data || null;
  },

  /**
   * Fetch Active Hospital Banners & Bulletins
   */
  async getBannerAnnouncements(): Promise<BannerAnnouncement[]> {
    const res = await apiClient.get<BannerAnnouncement[]>('/content/banners', {
      mockFallback: async () => [
        {
          id: 'b-1',
          title: '24/7 Robotic Cardiac OPD Live',
          message: 'Level-1 Emergency Trauma Center and Cardiac Cath Lab operational at Wakad Main Campus.',
          type: 'urgent',
          linkUrl: '/emergency',
          active: true,
        },
        {
          id: 'b-2',
          title: 'Monsoon Preventive Screening Drive',
          message: 'Get 50% OFF on Senior Citizen Cardiac & Full Body Diagnostics Packages.',
          type: 'info',
          linkUrl: '/health-checkups',
          active: true,
        },
      ],
    });
    return res.data || [];
  },

  /**
   * Fetch Patient Frequently Asked Questions
   */
  async getFaqs(): Promise<FaqItem[]> {
    const res = await apiClient.get<FaqItem[]>('/content/faqs', {
      mockFallback: async () => [
        { id: 'faq-1', question: 'How do I book a cashless OPD consultation?', answer: 'Present your Star Health or ICICI Lombard TPA e-card at the hospital registration counter, or select TPA Cashless during online booking.', category: 'Appointments' },
        { id: 'faq-2', question: 'Is home sample collection available for blood tests?', answer: 'Yes! Certified phlebotomists collect samples from your doorstep within 45 minutes of booking.', category: 'Diagnostics' },
      ],
    });
    return res.data || [];
  },
};
