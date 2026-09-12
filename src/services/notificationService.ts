import { apiClient, ApiResponse } from './apiClient';
import { ENV } from '@/config/env';

export type NotificationEventType =
  | 'APPOINTMENT_CONFIRMATION'
  | 'APPOINTMENT_REMINDER'
  | 'APPOINTMENT_RESCHEDULING'
  | 'APPOINTMENT_CANCELLATION'
  | 'LAB_REPORT_READY'
  | 'PRESCRIPTION_AVAILABLE'
  | 'FOLLOW_UP_REMINDER'
  | 'HEALTH_REMINDER';

export type NotificationChannel = 'email' | 'sms' | 'whatsapp' | 'push';

export interface NotificationItem {
  id: string;
  eventType: NotificationEventType;
  title: string;
  message: string;
  timestamp: string;
  category: 'Appointment' | 'Lab Result' | 'Pharmacy' | 'Billing' | 'System' | 'Health Care';
  isRead: boolean;
  channelsSent: NotificationChannel[];
  actionUrl?: string;
  metaData?: Record<string, any>;
}

export interface NotificationPreferences {
  emailAlerts: boolean;
  smsAlerts: boolean;
  whatsappAlerts: boolean;
  pushAlerts: boolean;
  appointmentAlerts: boolean;
  labReportAlerts: boolean;
  prescriptionAlerts: boolean;
  healthReminders: boolean;
  quietHoursEnabled: boolean;
}

export interface DispatchNotificationPayload {
  eventType: NotificationEventType;
  patientName: string;
  recipientEmail?: string;
  recipientPhone?: string;
  title: string;
  message: string;
  actionUrl?: string;
  metaData?: Record<string, any>;
  channelsOverride?: NotificationChannel[];
}

export interface ChannelPayloadDetails {
  email: { subject: string; htmlBody: string; provider: string };
  sms: { text: string; provider: string };
  whatsapp: { text: string; templateName: string; provider: string };
  push: { title: string; body: string; icon: string; vapidKey: string };
}

const STORAGE_KEY_NOTIFS = 'vhn_notifications_history';
const STORAGE_KEY_PREFS = 'vhn_notification_preferences';

const DEFAULT_PREFERENCES: NotificationPreferences = {
  emailAlerts: true,
  smsAlerts: true,
  whatsappAlerts: true,
  pushAlerts: true,
  appointmentAlerts: true,
  labReportAlerts: true,
  prescriptionAlerts: true,
  healthReminders: true,
  quietHoursEnabled: false,
};

const DEFAULT_MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'ntf-101',
    eventType: 'APPOINTMENT_CONFIRMATION',
    title: 'OPD Appointment Confirmed',
    message: 'Your appointment with Dr. Anand Deshmukh (Cardiology) is confirmed for Tomorrow at 10:30 AM.',
    timestamp: '10 mins ago',
    category: 'Appointment',
    isRead: false,
    channelsSent: ['email', 'sms', 'whatsapp'],
    actionUrl: '/patient/dashboard',
  },
  {
    id: 'ntf-102',
    eventType: 'LAB_REPORT_READY',
    title: 'Master Lipid Profile Report Ready',
    message: 'Your diagnostic lab report from Wakad Campus is ready. Download PDF from your patient portal.',
    timestamp: '2 hours ago',
    category: 'Lab Result',
    isRead: false,
    channelsSent: ['email', 'whatsapp', 'push'],
    actionUrl: '/patient/dashboard',
  },
  {
    id: 'ntf-103',
    eventType: 'PRESCRIPTION_AVAILABLE',
    title: 'E-Prescription Issued by Dr. Rajesh Shinde',
    message: 'Dr. Rajesh Shinde has issued your e-prescription for Joint Care regimen. Download via patient portal.',
    timestamp: 'Yesterday',
    category: 'Pharmacy',
    isRead: true,
    channelsSent: ['email', 'sms'],
    actionUrl: '/patient/dashboard',
  },
  {
    id: 'ntf-104',
    eventType: 'HEALTH_REMINDER',
    title: 'Annual Cardiac Screening Due',
    message: 'It has been 12 months since your last heart checkup. Schedule a preventive screening with 50% OPD discount.',
    timestamp: '2 days ago',
    category: 'Health Care',
    isRead: true,
    channelsSent: ['email', 'push'],
    actionUrl: '/ai-health-assistant',
  },
];

export const notificationService = {
  /**
   * Fetch In-App Notifications History
   */
  async getNotifications(): Promise<NotificationItem[]> {
    const res = await apiClient.get<NotificationItem[]>('/notifications', {
      mockFallback: async () => {
        try {
          const stored = localStorage.getItem(STORAGE_KEY_NOTIFS);
          if (stored) return JSON.parse(stored);
        } catch {
          // fallback to defaults
        }
        localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(DEFAULT_MOCK_NOTIFICATIONS));
        return DEFAULT_MOCK_NOTIFICATIONS;
      },
    });
    return res.data || [];
  },

  /**
   * Fetch Notification Preferences
   */
  async getPreferences(): Promise<NotificationPreferences> {
    const res = await apiClient.get<NotificationPreferences>('/notifications/preferences', {
      mockFallback: async () => {
        try {
          const stored = localStorage.getItem(STORAGE_KEY_PREFS);
          if (stored) return JSON.parse(stored);
        } catch {
          // ignore
        }
        localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(DEFAULT_PREFERENCES));
        return DEFAULT_PREFERENCES;
      },
    });
    return res.data || DEFAULT_PREFERENCES;
  },

  /**
   * Update Notification Preferences
   */
  async updatePreferences(prefs: Partial<NotificationPreferences>): Promise<NotificationPreferences> {
    const current = await this.getPreferences();
    const updated = { ...current, ...prefs };
    localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(updated));

    await apiClient.put<NotificationPreferences>('/notifications/preferences', updated, {
      mockFallback: async () => updated,
    });
    return updated;
  },

  /**
   * Mark Single Notification as Read
   */
  async markAsRead(id: string): Promise<void> {
    const notifs = await this.getNotifications();
    const updated = notifs.map((n) => (n.id === id ? { ...n, isRead: true } : n));
    localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(updated));

    await apiClient.patch(`/notifications/${id}/read`, {}, {
      mockFallback: async () => ({ success: true }),
    });
  },

  /**
   * Mark All Notifications as Read
   */
  async markAllAsRead(): Promise<void> {
    const notifs = await this.getNotifications();
    const updated = notifs.map((n) => ({ ...n, isRead: true }));
    localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(updated));

    await apiClient.patch('/notifications/read-all', {}, {
      mockFallback: async () => ({ success: true }),
    });
  },

  /**
   * Delete Notification
   */
  async deleteNotification(id: string): Promise<void> {
    const notifs = await this.getNotifications();
    const updated = notifs.filter((n) => n.id !== id);
    localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(updated));

    await apiClient.delete(`/notifications/${id}`, {
      mockFallback: async () => ({ success: true }),
    });
  },

  /**
   * Core Dispatcher: Multi-Channel Delivery Engine (Email, SMS, WhatsApp, Web Push)
   */
  async dispatchNotification(payload: DispatchNotificationPayload): Promise<{
    notificationItem: NotificationItem;
    channelPayloads: ChannelPayloadDetails;
  }> {
    const prefs = await this.getPreferences();

    // Determine active channels based on preferences & overrides
    const activeChannels: NotificationChannel[] = payload.channelsOverride || [];
    if (!payload.channelsOverride) {
      if (prefs.emailAlerts) activeChannels.push('email');
      if (prefs.smsAlerts) activeChannels.push('sms');
      if (prefs.whatsappAlerts) activeChannels.push('whatsapp');
      if (prefs.pushAlerts) activeChannels.push('push');
    }

    const notifItem: NotificationItem = {
      id: `ntf-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      eventType: payload.eventType,
      title: payload.title,
      message: payload.message,
      timestamp: 'Just Now',
      category: this.getCategoryForEventType(payload.eventType),
      isRead: false,
      channelsSent: activeChannels,
      actionUrl: payload.actionUrl || '/patient/dashboard',
      metaData: payload.metaData,
    };

    // Store in local history
    const existing = await this.getNotifications();
    const updated = [notifItem, ...existing];
    localStorage.setItem(STORAGE_KEY_NOTIFS, JSON.stringify(updated));

    // Construct multi-channel payload configurations (Zero client secret exposure)
    const channelPayloads: ChannelPayloadDetails = {
      email: {
        subject: `[MEDICARE Hospitals] ${payload.title}`,
        htmlBody: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #0284c7;">MEDICARE Notification</h2>
            <p>Dear <strong>${payload.patientName}</strong>,</p>
            <p>${payload.message}</p>
            ${payload.actionUrl ? `<a href="${payload.actionUrl}" style="display:inline-block; padding:10px 20px; background:#0066cc; color:#fff; text-decoration:none; border-radius:8px; font-weight:bold;">View Details</a>` : ''}
            <hr style="margin-top:20px; border:none; border-top:1px solid #eee;" />
            <p style="font-size:11px; color:#64748b;">Dispatched via Server Proxy (${ENV.notificationEmailProvider})</p>
          </div>
        `,
        provider: ENV.notificationEmailProvider,
      },
      sms: {
        text: `MEDICARE: Hello ${payload.patientName}, ${payload.message} Info: ${payload.actionUrl || 'https://www.medicarehospitals.in'}`,
        provider: ENV.notificationSmsProvider,
      },
      whatsapp: {
        text: `🏥 *MEDICARE Notice*\nDear ${payload.patientName},\n\n${payload.message}\n\n👉 *View Details:* ${payload.actionUrl || 'https://www.medicarehospitals.in'}`,
        templateName: `medicare_${payload.eventType.toLowerCase()}_template`,
        provider: ENV.notificationWhatsappProvider,
      },
      push: {
        title: payload.title,
        body: payload.message,
        icon: '/medicare-logo.svg',
        vapidKey: ENV.notificationPushVapidKey,
      },
    };

    // Trigger Native Browser Web Push Notification if permission granted
    if (activeChannels.includes('push')) {
      this.triggerNativeWebPush(payload.title, payload.message);
    }

    // Call server endpoint
    await apiClient.post('/notifications/dispatch', { notifItem, channelPayloads }, {
      mockFallback: async () => ({ status: 'dispatched_successfully', activeChannels }),
    });

    return { notificationItem: notifItem, channelPayloads };
  },

  /**
   * Helper: Map Event Type to Category
   */
  getCategoryForEventType(eventType: NotificationEventType): NotificationItem['category'] {
    switch (eventType) {
      case 'APPOINTMENT_CONFIRMATION':
      case 'APPOINTMENT_REMINDER':
      case 'APPOINTMENT_RESCHEDULING':
      case 'APPOINTMENT_CANCELLATION':
        return 'Appointment';
      case 'LAB_REPORT_READY':
        return 'Lab Result';
      case 'PRESCRIPTION_AVAILABLE':
        return 'Pharmacy';
      case 'FOLLOW_UP_REMINDER':
      case 'HEALTH_REMINDER':
        return 'Health Care';
      default:
        return 'System';
    }
  },

  /**
   * Web Push Permission Handler
   */
  async requestWebPushPermission(): Promise<NotificationPermission> {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      return 'denied';
    }
    const permission = await Notification.requestPermission();
    return permission;
  },

  /**
   * Trigger Native Browser Notification
   */
  triggerNativeWebPush(title: string, body: string): void {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: '/medicare-logo.svg',
          badge: '/medicare-logo.svg',
        });
      } catch (e) {
        console.warn('Native notification failed:', e);
      }
    }
  },

  // =========================================================================
  // SPECIFIC CONVENIENCE TEMPLATE HELPERS FOR ALL 8 EVENT TYPES
  // =========================================================================

  /**
   * 1. Appointment Confirmation
   */
  sendAppointmentConfirmation(details: {
    patientName: string;
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    hospital: string;
    bookingId: string;
  }) {
    return this.dispatchNotification({
      eventType: 'APPOINTMENT_CONFIRMATION',
      patientName: details.patientName,
      title: 'OPD Appointment Confirmed',
      message: `Your OPD appointment with ${details.doctorName} (${details.specialty}) at ${details.hospital} is confirmed for ${details.date} at ${details.time}. Booking ID: ${details.bookingId}.`,
      actionUrl: '/patient/dashboard',
      metaData: details,
    });
  },

  /**
   * 2. Appointment Reminder
   */
  sendAppointmentReminder(details: {
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    location: string;
  }) {
    return this.dispatchNotification({
      eventType: 'APPOINTMENT_REMINDER',
      patientName: details.patientName,
      title: 'Upcoming Appointment Reminder',
      message: `Reminder: You have an upcoming consultation with ${details.doctorName} tomorrow at ${details.time} (${details.location}). Please carry your previous medical records.`,
      actionUrl: '/patient/dashboard',
      metaData: details,
    });
  },

  /**
   * 3. Appointment Rescheduling Notice
   */
  sendAppointmentRescheduled(details: {
    patientName: string;
    doctorName: string;
    oldDate: string;
    newDate: string;
    newTime: string;
    reason?: string;
  }) {
    return this.dispatchNotification({
      eventType: 'APPOINTMENT_RESCHEDULING',
      patientName: details.patientName,
      title: 'Appointment Rescheduled',
      message: `Your consultation with ${details.doctorName} has been rescheduled to ${details.newDate} at ${details.newTime}.${details.reason ? ` Reason: ${details.reason}` : ''}`,
      actionUrl: '/patient/dashboard',
      metaData: details,
    });
  },

  /**
   * 4. Appointment Cancellation Notice
   */
  sendAppointmentCancelled(details: {
    patientName: string;
    doctorName: string;
    date: string;
    refundStatus: string;
  }) {
    return this.dispatchNotification({
      eventType: 'APPOINTMENT_CANCELLATION',
      patientName: details.patientName,
      title: 'Appointment Cancelled',
      message: `Your OPD booking with ${details.doctorName} for ${details.date} has been cancelled. Refund Status: ${details.refundStatus}. You can rebook anytime.`,
      actionUrl: '/doctors',
      metaData: details,
    });
  },

  /**
   * 5. Lab Report Ready
   */
  sendLabReportReady(details: {
    patientName: string;
    testName: string;
    labName: string;
    reportUrl?: string;
  }) {
    return this.dispatchNotification({
      eventType: 'LAB_REPORT_READY',
      patientName: details.patientName,
      title: `${details.testName} Report Ready`,
      message: `Your diagnostic report for ${details.testName} from ${details.labName} is processed and ready for PDF download.`,
      actionUrl: details.reportUrl || '/patient/dashboard',
      metaData: details,
    });
  },

  /**
   * 6. Prescription Available
   */
  sendPrescriptionAvailable(details: {
    patientName: string;
    doctorName: string;
    prescriptionId: string;
  }) {
    return this.dispatchNotification({
      eventType: 'PRESCRIPTION_AVAILABLE',
      patientName: details.patientName,
      title: 'E-Prescription Available',
      message: `${details.doctorName} has issued your e-prescription (Ref: ${details.prescriptionId}). You can view dosage details or order medications online.`,
      actionUrl: '/patient/dashboard',
      metaData: details,
    });
  },

  /**
   * 7. Follow-Up Reminder
   */
  sendFollowUpReminder(details: {
    patientName: string;
    doctorName: string;
    daysSinceConsult: number;
    recommendedAction: string;
  }) {
    return this.dispatchNotification({
      eventType: 'FOLLOW_UP_REMINDER',
      patientName: details.patientName,
      title: '7-Day Care Follow-Up Check-in',
      message: `It has been ${details.daysSinceConsult} days since your consultation with ${details.doctorName}. Recommended action: ${details.recommendedAction}`,
      actionUrl: '/ai-health-assistant',
      metaData: details,
    });
  },

  /**
   * 8. Health Reminder
   */
  sendHealthReminder(details: {
    patientName: string;
    reminderTitle: string;
    reminderDetails: string;
  }) {
    return this.dispatchNotification({
      eventType: 'HEALTH_REMINDER',
      patientName: details.patientName,
      title: details.reminderTitle,
      message: details.reminderDetails,
      actionUrl: '/patient/dashboard',
      metaData: details,
    });
  },
};
