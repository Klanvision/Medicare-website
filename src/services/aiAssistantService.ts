import { aiService, AiChatMessage, AiRiskScoreResult } from './aiService';
import { aiAnalyticsService } from './aiAnalyticsService';

export type ChatMessage = AiChatMessage;

export const aiAssistantService = {
  /**
   * Process incoming user prompt with AI care navigator
   */
  processUserMessage: (userText: string): Promise<ChatMessage> => {
    return aiService.processSymptomQuery(userText);
  },

  /**
   * Evaluate patient risk score based on selected symptoms
   */
  evaluateRiskScore: (symptoms: string[]): Promise<AiRiskScoreResult> => {
    return aiService.evaluateRiskScore(symptoms);
  },

  /**
   * Submit message feedback (helpful / unhelpful)
   */
  logFeedback: (eventId: string, feedback: 'helpful' | 'unhelpful') => {
    return aiAnalyticsService.logFeedback(eventId, feedback);
  },

  /**
   * Fetch aggregated analytics metrics
   */
  getAnalyticsMetrics: () => {
    return aiAnalyticsService.getAggregatedMetrics();
  },
};
