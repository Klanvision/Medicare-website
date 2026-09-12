import { apiClient, ApiResponse } from './apiClient';
import { CHECKUP_PACKAGES_DATA, CheckupPackage, CheckupCategory } from '@/data/checkupData';

export interface CouponValidationResult {
  valid: boolean;
  couponCode: string;
  discountPercentage: number;
  discountAmount: number;
  finalPrice: number;
  message: string;
}

export const healthPackageService = {
  /**
   * Get Preventive Health Checkup Packages
   */
  async getHealthPackages(
    query?: string,
    category?: CheckupCategory | 'All'
  ): Promise<CheckupPackage[]> {
    const res = await apiClient.get<CheckupPackage[]>('/health-packages', {
      params: { query, category },
      mockFallback: async () => {
        let result = [...CHECKUP_PACKAGES_DATA];

        if (query && query.trim() !== '') {
          const q = query.toLowerCase().trim();
          result = result.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.includedTests.some((t) => t.toLowerCase().includes(q))
          );
        }

        if (category && category !== 'All') {
          result = result.filter((p) => p.category === category);
        }

        return result;
      },
    });
    return res.data || [];
  },

  /**
   * Get Single Health Package by ID
   */
  async getHealthPackageById(id: string): Promise<CheckupPackage | null> {
    const res = await apiClient.get<CheckupPackage>(`/health-packages/${id}`, {
      mockFallback: async () => {
        const found = CHECKUP_PACKAGES_DATA.find((p) => p.id === id);
        return found || null;
      },
    });
    return res.data || null;
  },

  /**
   * Validate Promo Coupon Code
   */
  async validateCoupon(couponCode: string, originalPrice: number): Promise<ApiResponse<CouponValidationResult>> {
    return apiClient.post<CouponValidationResult>('/health-packages/coupon/validate', { couponCode, originalPrice }, {
      mockFallback: async () => {
        const code = couponCode.toUpperCase().trim();
        if (code === 'HEALTHNOVA50' || code === 'SENIOR50') {
          const discountAmount = Math.round(originalPrice * 0.5);
          return {
            valid: true,
            couponCode: code,
            discountPercentage: 50,
            discountAmount,
            finalPrice: originalPrice - discountAmount,
            message: '50% Discount Applied!',
          };
        } else if (code === 'CHECKUP2026' || code === 'SAVE1500') {
          const discountAmount = 1500;
          return {
            valid: true,
            couponCode: code,
            discountPercentage: 20,
            discountAmount,
            finalPrice: Math.max(500, originalPrice - discountAmount),
            message: '₹ 1,500 Coupon Applied Successfully!',
          };
        }

        throw new Error('Invalid or expired coupon code. Please check and try again.');
      },
    });
  },

  /**
   * Book Health Package
   */
  async bookHealthPackage(packageId: string, patientName: string, phone: string, date: string): Promise<ApiResponse<{ bookingId: string }>> {
    return apiClient.post('/health-packages/book', { packageId, patientName, phone, date }, {
      mockFallback: async () => ({
        bookingId: `PKG-VHN-${Math.floor(10000 + Math.random() * 90000)}`,
      }),
    });
  },
};
