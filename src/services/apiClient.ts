import { ENV } from '@/config/env';
import { getCsrfToken } from '@/utils/security';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errorCode?: string;
  statusCode?: number;
  meta?: {
    totalCount?: number;
    page?: number;
    pageSize?: number;
    totalPages?: number;
  };
}

export class ApiError extends Error {
  public statusCode: number;
  public errorCode: string;
  public details?: any;

  constructor(message: string, statusCode: number = 500, errorCode: string = 'UNKNOWN_ERROR', details?: any) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.details = details;
  }
}

export interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
  timeoutMs?: number;
  mockFallback?: () => Promise<any> | any;
  skipAuth?: boolean;
}

/**
 * Retrieve Auth Token from LocalStorage
 */
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('vhn_patient_token') || localStorage.getItem('vhn_admin_token') || null;
};

/**
 * Build URL with Query Parameters
 */
const buildUrl = (endpoint: string, params?: Record<string, string | number | boolean | undefined>): string => {
  const baseUrl = endpoint.startsWith('http') ? endpoint : `${ENV.apiBaseUrl}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  if (!params) return baseUrl;

  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, String(value));
    }
  });
  return url.toString();
};

/**
 * Centralized API Client Wrapper
 */
export const apiClient = {
  async request<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    body?: any,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = buildUrl(endpoint, options.params);
    const timeout = options.timeoutMs || ENV.apiTimeoutMs;
    const controller = new AbortController();
    const timerId = setTimeout(() => controller.abort(), timeout);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Client-App': 'MEDICARE-Web',
      'X-App-Env': ENV.appEnv,
      'X-CSRF-Token': getCsrfToken(),
      ...options.headers,
    };

    if (!options.skipAuth) {
      const token = getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    try {
      if (ENV.isDev) {
        console.log(`[API CLIENT ${method}] Requesting: ${url}`);
      }

      const fetchOptions: RequestInit = {
        method,
        headers,
        signal: controller.signal,
      };

      if (body && method !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
      }

      const response = await fetch(url, fetchOptions);
      clearTimeout(timerId);

      // Handle non-OK responses
      if (!response.ok) {
        const errorText = await response.text();
        let parsedError: any = {};
        try {
          parsedError = JSON.parse(errorText);
        } catch {
          parsedError = { message: errorText || response.statusText };
        }

        const statusCode = response.status;
        const errorMessage = parsedError.message || `HTTP ${statusCode}: Request failed`;
        const errorCode = parsedError.code || `HTTP_${statusCode}`;

        throw new ApiError(errorMessage, statusCode, errorCode, parsedError);
      }

      const jsonResponse = await response.json();
      return {
        success: true,
        data: jsonResponse.data !== undefined ? jsonResponse.data : jsonResponse,
        message: jsonResponse.message,
        meta: jsonResponse.meta,
        statusCode: response.status,
      };

    } catch (err: any) {
      clearTimeout(timerId);

      const isNetworkOrAbortError = err.name === 'AbortError' || err.message?.includes('Failed to fetch') || err.message?.includes('NetworkError');

      if (ENV.isDev) {
        console.warn(`[API CLIENT WARNING] Call to ${endpoint} failed (${err.message}). Mock Fallback Enabled: ${ENV.enableMockFallback}`);
      }

      // If mock fallback is enabled and provided, execute mock fallback handler safely
      if (ENV.enableMockFallback && options.mockFallback) {
        try {
          const fallbackData = await options.mockFallback();
          return {
            success: true,
            data: fallbackData,
            message: 'Loaded via fallback mock architecture',
            statusCode: 200,
          };
        } catch (fallbackErr: any) {
          throw new ApiError(
            fallbackErr.message || 'Mock fallback execution error',
            500,
            'MOCK_FALLBACK_ERROR'
          );
        }
      }

      // Consistent error handling output
      if (err instanceof ApiError) {
        throw err;
      }

      const statusCode = isNetworkOrAbortError ? 0 : 500;
      const errorCode = isNetworkOrAbortError ? 'NETWORK_TIMEOUT' : 'UNKNOWN_CLIENT_ERROR';
      const userMessage = isNetworkOrAbortError
        ? 'Unable to connect to MEDICARE server. Please check your internet connection.'
        : err.message || 'An unexpected API error occurred.';

      throw new ApiError(userMessage, statusCode, errorCode);
    }
  },

  get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'GET', undefined, options);
  },

  post<T>(endpoint: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'POST', body, options);
  },

  put<T>(endpoint: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'PUT', body, options);
  },

  patch<T>(endpoint: string, body?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'PATCH', body, options);
  },

  delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'DELETE', undefined, options);
  },
};
