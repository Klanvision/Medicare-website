/**
 * Security & Data Privacy Utilities
 * MEDICARE Healthcare System
 */

/**
 * XSS Sanitization helper: Escapes HTML characters in string inputs
 */
export function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Mask PII / Medical Data for Logging & Privacy
 */
export function maskSensitiveData(str: string, keepVisibleLength: number = 2): string {
  if (!str) return '';
  if (str.length <= keepVisibleLength * 2) return '***';
  const start = str.slice(0, keepVisibleLength);
  const end = str.slice(-keepVisibleLength);
  return `${start}${'*'.repeat(Math.max(4, str.length - keepVisibleLength * 2))}${end}`;
}

/**
 * Mask Phone Numbers: +91 98230 41190 -> +91 98*** **190
 */
export function maskPhoneNumber(phone: string): string {
  if (!phone) return '';
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10) return '***';
  return phone.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2');
}

/**
 * Mask Patient Email: rahul.sharma@example.com -> r***a@example.com
 */
export function maskEmail(email: string): string {
  if (!email || !email.includes('@')) return '***@***.com';
  const [local, domain] = email.split('@');
  if (local.length <= 2) return `${local[0]}*@${domain}`;
  return `${local[0]}${'*'.repeat(local.length - 2)}${local[local.length - 1]}@${domain}`;
}

/**
 * Mask Patient Universal Health ID (UHID): VNH-PT-88492 -> VNH-**-88492
 */
export function maskUHID(uhid: string): string {
  if (!uhid) return '***';
  const parts = uhid.split('-');
  if (parts.length === 3) {
    return `${parts[0]}-**-${parts[2]}`;
  }
  return maskSensitiveData(uhid, 3);
}

/**
 * File Upload Security Validation
 */
export interface FileValidationResult {
  isValid: boolean;
  error?: string;
}

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/dicom',
]);

const ALLOWED_EXTENSIONS = new Set(['pdf', 'dcm', 'dicom', 'jpg', 'jpeg', 'png']);

export function validateMedicalFileUpload(
  file: File,
  maxSizeBytes: number = 15 * 1024 * 1024
): FileValidationResult {
  if (!file) {
    return { isValid: false, error: 'No file selected.' };
  }

  // 1. File Size Check
  if (file.size > maxSizeBytes) {
    return {
      isValid: false,
      error: `File size (${(file.size / (1024 * 1024)).toFixed(1)} MB) exceeds maximum limit of ${(maxSizeBytes / (1024 * 1024)).toFixed(0)} MB.`,
    };
  }

  // 2. Extension Check
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !ALLOWED_EXTENSIONS.has(extension)) {
    return {
      isValid: false,
      error: `File extension '.${extension}' is not allowed. Only PDF, DICOM, JPG, and PNG are permitted.`,
    };
  }

  // 3. MIME Type Validation (when provided by browser)
  if (file.type && !ALLOWED_MIME_TYPES.has(file.type.toLowerCase())) {
    // DICOM files sometimes present empty or application/octet-stream MIME types
    if (extension !== 'dcm' && extension !== 'dicom') {
      return {
        isValid: false,
        error: `File type '${file.type}' is not a permitted medical document format.`,
      };
    }
  }

  return { isValid: true };
}

/**
 * CSRF / Anti-Forgery Token Management (Simulated Session Guard)
 */
export function getCsrfToken(): string {
  let token = sessionStorage.getItem('vhn_csrf_token');
  if (!token) {
    token = 'vhn_csrf_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('vhn_csrf_token', token);
  }
  return token;
}

/**
 * Secure Input Sanitizer Object
 */
export const Security = {
  sanitizeString,
  maskSensitiveData,
  maskPhoneNumber,
  maskEmail,
  maskUHID,
  validateMedicalFileUpload,
  getCsrfToken,
};
