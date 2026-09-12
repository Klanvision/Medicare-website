/**
 * Centralized Environment Configuration
 * Only public VITE_ variables are exposed to the client.
 * Prevents secret leakage and ensures type safety & default fallbacks.
 */

export interface AppEnvConfig {
  apiBaseUrl: string;
  apiTimeoutMs: number;
  enableMockFallback: boolean;
  appEnv: 'development' | 'staging' | 'production';
  isDev: boolean;
  isProd: boolean;

  // Notification Provider Configuration (Client-side proxies only, credentials stored server-side)
  notificationEmailProvider: string;
  notificationSmsProvider: string;
  notificationWhatsappProvider: string;
  notificationPushVapidKey: string;
}

const getEnvVar = (key: string, defaultValue: string): string => {
  return (import.meta.env[key] as string) || defaultValue;
};

export const ENV: AppEnvConfig = {
  apiBaseUrl: getEnvVar('VITE_API_BASE_URL', 'https://api.medicare.com/v1'),
  apiTimeoutMs: parseInt(getEnvVar('VITE_API_TIMEOUT', '15000'), 10),
  enableMockFallback: getEnvVar('VITE_ENABLE_MOCK_FALLBACK', 'true') === 'true',
  appEnv: (getEnvVar('VITE_APP_ENV', 'development') as 'development' | 'staging' | 'production'),
  isDev: import.meta.env.DEV || getEnvVar('VITE_APP_ENV', 'development') === 'development',
  isProd: import.meta.env.PROD || getEnvVar('VITE_APP_ENV', 'development') === 'production',

  notificationEmailProvider: getEnvVar('VITE_NOTIFICATION_EMAIL_PROVIDER', 'AWS SES / SendGrid (Server Proxy)'),
  notificationSmsProvider: getEnvVar('VITE_NOTIFICATION_SMS_PROVIDER', 'Twilio / MSG91 (Server Proxy)'),
  notificationWhatsappProvider: getEnvVar('VITE_NOTIFICATION_WHATSAPP_PROVIDER', 'Meta WhatsApp Business API (Server Proxy)'),
  notificationPushVapidKey: getEnvVar('VITE_NOTIFICATION_PUSH_VAPID_KEY', 'BEl62iUYgUivxI-PublicVapidKey-MEDICARE'),
};

// Security Check: Guard against accidental secret leaks in public bundles
if (typeof window !== 'undefined') {
  const secretKeys = ['SECRET', 'PRIVATE_KEY', 'PASSWORD', 'DATABASE_URL', 'API_KEY', 'SMS_API_SECRET', 'TWILIO_AUTH_TOKEN'];
  secretKeys.forEach((key) => {
    if ((import.meta.env as any)[key]) {
      console.warn(`[SECURITY WARNING] Potential secret variable '${key}' exposed in client build!`);
    }
  });
}
