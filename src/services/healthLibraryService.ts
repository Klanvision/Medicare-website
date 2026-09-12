import { HEALTH_ARTICLES_DATA, HealthArticle, ContentType } from '@/data/healthLibraryData';

export interface ArticleQueryParams {
  query?: string;
  category?: string;
  type?: ContentType | 'All';
  tag?: string;
  page?: number;
  limit?: number;
}

const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const healthLibraryService = {
  getArticles: async (params: ArticleQueryParams = {}) => {
    await delay(300);
    let result = [...HEALTH_ARTICLES_DATA];

    if (params.query && params.query.trim() !== '') {
      const q = params.query.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (params.type && params.type !== 'All') {
      result = result.filter((a) => a.type === params.type);
    }

    if (params.category && params.category !== 'All') {
      result = result.filter((a) => a.category === params.category);
    }

    if (params.tag) {
      result = result.filter((a) => a.tags.includes(params.tag!));
    }

    const total = result.length;
    const page = params.page || 1;
    const limit = params.limit || 6;
    const totalPages = Math.ceil(total / limit) || 1;

    const startIndex = (page - 1) * limit;
    const paginatedItems = result.slice(startIndex, startIndex + limit);

    return {
      items: paginatedItems,
      total,
      page,
      totalPages,
    };
  },

  getFeaturedArticles: async (): Promise<HealthArticle[]> => {
    await delay(200);
    return HEALTH_ARTICLES_DATA.filter((a) => a.isFeatured);
  },

  getRelatedArticles: async (currentId: string): Promise<HealthArticle[]> => {
    await delay(200);
    return HEALTH_ARTICLES_DATA.filter((a) => a.id !== currentId).slice(0, 3);
  },
};
