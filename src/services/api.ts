import { apiClient, ApiResponse, ApiError } from './apiClient';

export { apiClient, ApiError };
export type { ApiResponse };

export const delay = (ms: number = 800) => new Promise((resolve) => setTimeout(resolve, ms));
