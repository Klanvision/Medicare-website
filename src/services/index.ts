/**
 * Centralized Service & API Index Module
 * Exports all 11 core domain services, API client, and environment configuration.
 */

export { apiClient, ApiError } from './apiClient';
export type { ApiResponse, RequestOptions } from './apiClient';

export { authService } from './authService';
export { doctorService } from './doctorService';
export { hospitalService } from './hospitalService';
export { appointmentService } from './appointmentService';
export { patientService } from './patientService';
export { diagnosticService } from './diagnosticService';
export { healthPackageService } from './healthPackageService';
export { insuranceService } from './insuranceService';
export { contentService } from './contentService';
export { notificationService } from './notificationService';
export { aiService } from './aiService';

// Backward compatibility exports
export { checkupService } from './checkupService';
export { aiAssistantService } from './aiAssistantService';
export { paymentService } from './paymentService';
export { emergencyService } from './emergencyService';
export { healthLibraryService } from './healthLibraryService';
export { specialtyService } from './specialtyService';
export { coeService } from './coeService';
