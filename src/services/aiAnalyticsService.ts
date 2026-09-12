import { apiClient } from './apiClient';

export interface AiAnalyticsEvent {
  id: string;
  sessionId: string;
  timestamp: string;
  intentRecognized: string;
  riskLevel?: 'Low' | 'Moderate' | 'High' | 'Critical ER';
  specialtyRecommended?: string;
  doctorRecommendedId?: string;
  hospitalRecommendedId?: string;
  isEmergency: boolean;
  responseLatencyMs: number;
  userFeedback?: 'helpful' | 'unhelpful';
}

const STORAGE_KEY = 'vhn_ai_analytics_logs';

/**
 * Anonymized AI Analytics Tracker (Zero PII logged)
 */
export const aiAnalyticsService = {
  /**
   * Log an anonymized AI interaction event
   */
  async logEvent(event: Omit<AiAnalyticsEvent, 'id' | 'timestamp'>): Promise<void> {
    const fullEvent: AiAnalyticsEvent = {
      ...event,
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
    };

    // 1. Store locally for audit & offline queueing
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const logs: AiAnalyticsEvent[] = stored ? JSON.parse(stored) : [];
      logs.push(fullEvent);
      // Keep max 100 recent entries
      if (logs.length > 100) logs.shift();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch (e) {
      console.warn('Unable to persist AI analytics log to localStorage:', e);
    }

    // 2. Server-side reporting (silent fallback)
    try {
      await apiClient.post('/ai/analytics', fullEvent, {
        mockFallback: async () => ({ status: 'logged_locally' }),
      });
    } catch {
      // Ignore background analytics logging errors
    }
  },

  /**
   * Record user feedback (helpful / unhelpful) for a message
   */
  async logFeedback(eventId: string, feedback: 'helpful' | 'unhelpful'): Promise<void> {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const logs: AiAnalyticsEvent[] = JSON.parse(stored);
        const match = logs.find((l) => l.id === eventId);
        if (match) {
          match.userFeedback = feedback;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
        }
      }
      await apiClient.post('/ai/analytics/feedback', { eventId, feedback }, {
        mockFallback: async () => ({ status: 'feedback_saved' }),
      });
    } catch (e) {
      console.warn('Failed to record AI feedback:', e);
    }
  },

  /**
   * Get non-sensitive aggregated metrics for dashboard viewing
   */
  getAggregatedMetrics(): { totalQueries: number; emergencyCount: number; helpfulPercentage: number } {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return { totalQueries: 0, emergencyCount: 0, helpfulPercentage: 100 };
      const logs: AiAnalyticsEvent[] = JSON.parse(stored);
      const totalQueries = logs.length;
      const emergencyCount = logs.filter((l) => l.isEmergency).length;
      const ratedLogs = logs.filter((l) => l.userFeedback);
      const helpfulCount = ratedLogs.filter((l) => l.userFeedback === 'helpful').length;
      const helpfulPercentage = ratedLogs.length > 0 ? Math.round((helpfulCount / ratedLogs.length) * 100) : 100;

      return { totalQueries, emergencyCount, helpfulPercentage };
    } catch {
      return { totalQueries: 0, emergencyCount: 0, helpfulPercentage: 100 };
    }
  },
};
