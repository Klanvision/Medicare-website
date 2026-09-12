import { SPECIALTIES_DATA, Specialty, TreatmentDetail } from '@/data/specialtyData';

const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export interface TreatmentFlatItem {
  treatment: TreatmentDetail;
  specialtyName: string;
  specialtySlug: string;
}

export const specialtyService = {
  getSpecialties: async (query?: string): Promise<Specialty[]> => {
    await delay(200);
    let result = [...SPECIALTIES_DATA];

    if (query && query.trim() !== '') {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.shortDesc.toLowerCase().includes(q) ||
          s.conditions.some((c) => c.toLowerCase().includes(q))
      );
    }

    return result;
  },

  getSpecialtyBySlug: async (slug: string): Promise<Specialty | null> => {
    await delay(200);
    if (!slug) return SPECIALTIES_DATA[0];

    const normalized = slug.toLowerCase().trim();

    // Direct match first
    let found = SPECIALTIES_DATA.find((s) => s.slug === normalized);
    if (found) return found;

    // Map common alias variations
    const slugMap: Record<string, string> = {
      'orthopedics': 'orthopaedics',
      'gynaecology': 'gynecology',
      'emergency': 'emergency-care',
      'general-surgery': 'general-medicine',
    };

    const targetSlug = slugMap[normalized] || normalized;
    found = SPECIALTIES_DATA.find((s) => s.slug === targetSlug);

    if (!found) {
      // Partial match
      found = SPECIALTIES_DATA.find((s) => s.slug.includes(targetSlug) || targetSlug.includes(s.slug));
    }

    return found || SPECIALTIES_DATA[0];
  },

  getAllTreatments: async (query?: string): Promise<TreatmentFlatItem[]> => {
    await delay(200);

    const flatList: TreatmentFlatItem[] = [];

    SPECIALTIES_DATA.forEach((spec) => {
      spec.treatments.forEach((t) => {
        flatList.push({
          treatment: t,
          specialtyName: spec.name,
          specialtySlug: spec.slug,
        });
      });
    });

    if (query && query.trim() !== '') {
      const q = query.toLowerCase().trim();
      return flatList.filter(
        (item) =>
          item.treatment.name.toLowerCase().includes(q) ||
          item.treatment.shortDesc.toLowerCase().includes(q) ||
          item.specialtyName.toLowerCase().includes(q)
      );
    }

    return flatList;
  },

  getTreatmentBySlug: async (
    slug: string
  ): Promise<{ treatment: TreatmentDetail; specialty: Specialty } | null> => {
    await delay(200);

    for (const spec of SPECIALTIES_DATA) {
      const foundT = spec.treatments.find((t) => t.slug === slug);
      if (foundT) {
        return { treatment: foundT, specialty: spec };
      }
    }

    return null;
  },
};
