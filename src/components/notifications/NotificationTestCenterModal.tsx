import React, { useState, useEffect } from 'react';
import {
  X,
  Bell,
  CheckCheck,
  Trash2,
  Mail,
  MessageSquare,
  Smartphone,
  Send,
  ShieldCheck,
  Calendar,
  FileText,
  Pill,
  Activity,
  Filter,
  CheckCircle,
  ExternalLink,
  Settings,
  Sparkles,
} from 'lucide-react';
import {
  notificationService,
  NotificationItem,
  NotificationPreferences,
  NotificationEventType,
  NotificationChannel,
  ChannelPayloadDetails,
} from '@/services/notificationService';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { useToast } from '@/hooks/useToast';

interface NotificationTestCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationTestCenterModal: React.FC<NotificationTestCenterModalProps> = ({ isOpen, onClose }) => {
  const toast = useToast();

  const [activeTab, setActiveTab] = useState<'feed' | 'simulator' | 'settings'>('feed');
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    emailAlerts: true,
    smsAlerts: true,
    whatsappAlerts: true,
    pushAlerts: true,
    appointmentAlerts: true,
    labReportAlerts: true,
    prescriptionAlerts: true,
    healthReminders: true,
    quietHoursEnabled: false,
  });

  const [selectedEventType, setSelectedEventType] = useState<NotificationEventType>('APPOINTMENT_CONFIRMATION');
  const [lastDispatchedDetails, setLastDispatchedDetails] = useState<{
    notificationItem: NotificationItem;
    channelPayloads: ChannelPayloadDetails;
  } | null>(null);

  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [pushPermission, setPushPermission] = useState<string>('default');

  useEffect(() => {
    if (isOpen) {
      loadData();
      if (typeof window !== 'undefined' && 'Notification' in window) {
        setPushPermission(Notification.permission);
      }
    }
  }, [isOpen]);

  const loadData = async () => {
    const notifs = await notificationService.getNotifications();
    const prefs = await notificationService.getPreferences();
    setNotifications(notifs);
    setPreferences(prefs);
  };

  const handleMarkAsRead = async (id: string) => {
    await notificationService.markAsRead(id);
    loadData();
  };

  const handleMarkAllRead = async () => {
    await notificationService.markAllAsRead();
    toast.success('All notifications marked as read!', 'Updated');
    loadData();
  };

  const handleDelete = async (id: string) => {
    await notificationService.deleteNotification(id);
    loadData();
  };

  const handleTogglePref = async (key: keyof NotificationPreferences) => {
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
    await notificationService.updatePreferences(updated);
    toast.success('Notification preferences saved!', 'Preferences Updated');
  };

  const handleRequestPushPermission = async () => {
    const perm = await notificationService.requestWebPushPermission();
    setPushPermission(perm);
    if (perm === 'granted') {
      toast.success('Web Push Notifications active for HealthNova!', 'Push Enabled');
    } else {
      toast.warning('Web Push permission was not granted by browser.', 'Push Status');
    }
  };

  const handleTriggerTestEvent = async (type: NotificationEventType) => {
    let result;
    const patientName = 'Archana Sharma';

    switch (type) {
      case 'APPOINTMENT_CONFIRMATION':
        result = await notificationService.sendAppointmentConfirmation({
          patientName,
          doctorName: 'Dr. Anand Deshmukh',
          specialty: 'Cardiology',
          date: 'Tomorrow',
          time: '10:30 AM',
          hospital: 'MEDICARE Quaternary Super Specialty Hospital (Pune)',
          bookingId: `VHN-${Math.floor(100000 + Math.random() * 900000)}`,
        });
        break;

      case 'APPOINTMENT_REMINDER':
        result = await notificationService.sendAppointmentReminder({
          patientName,
          doctorName: 'Dr. Rajesh Shinde',
          date: 'Tomorrow',
          time: '04:00 PM',
          location: 'Opd Block B, Room 204',
        });
        break;

      case 'APPOINTMENT_RESCHEDULING':
        result = await notificationService.sendAppointmentRescheduled({
          patientName,
          doctorName: 'Dr. Meera Nambiar',
          oldDate: 'Aug 30, 02:00 PM',
          newDate: 'Sep 02, 11:30 AM',
          newTime: '11:30 AM',
          reason: 'Doctor emergency surgery slot alignment',
        });
        break;

      case 'APPOINTMENT_CANCELLATION':
        result = await notificationService.sendAppointmentCancelled({
          patientName,
          doctorName: 'Dr. Vikramaditya Joshi',
          date: 'Today at 05:00 PM',
          refundStatus: 'Full refund initiated to original payment method (₹800)',
        });
        break;

      case 'LAB_REPORT_READY':
        result = await notificationService.sendLabReportReady({
          patientName,
          testName: 'Comprehensive Cardiac Lipid & HbA1c Profile',
          labName: 'Wakad Diagnostic Hub',
        });
        break;

      case 'PRESCRIPTION_AVAILABLE':
        result = await notificationService.sendPrescriptionAvailable({
          patientName,
          doctorName: 'Dr. Anand Deshmukh',
          prescriptionId: `RX-${Math.floor(10000 + Math.random() * 90000)}`,
        });
        break;

      case 'FOLLOW_UP_REMINDER':
        result = await notificationService.sendFollowUpReminder({
          patientName,
          doctorName: 'Dr. Rajesh Shinde',
          daysSinceConsult: 7,
          recommendedAction: 'Schedule 7-day joint mobility check-in consultation',
        });
        break;

      case 'HEALTH_REMINDER':
        result = await notificationService.sendHealthReminder({
          patientName,
          reminderTitle: 'Daily Blood Pressure & Hydration Reminder',
          reminderDetails: 'Take evening BP measurement and stay hydrated with 2.5L water daily.',
        });
        break;
    }

    if (result) {
      setLastDispatchedDetails(result);
      loadData();
      toast.success(
        `Dispatched via ${result.notificationItem.channelsSent.join(', ').toUpperCase()}!`,
        `${type.replace(/_/g, ' ')} Sent`
      );
    }
  };

  if (!isOpen) return null;

  const filteredNotifs = notifications.filter((n) => {
    if (filterCategory === 'all') return true;
    return n.category.toLowerCase().includes(filterCategory.toLowerCase());
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-gray-200 shadow-2xl overflow-hidden space-y-0 my-6">
        {/* Modal Header */}
        <div className="bg-navy-950 text-white p-5 flex items-center justify-between border-b border-gold-600/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base text-white">Notification Architecture Center</h3>
                {unreadCount > 0 && <Badge variant="gold" size="sm">{unreadCount} Unread</Badge>}
              </div>
              <p className="text-xs text-gray-300">
                Multi-Channel Healthcare Dispatch (Email • SMS • WhatsApp • Push)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[
              { id: 'feed', label: 'Live Notifications Feed', icon: <Bell className="w-4 h-4" /> },
              { id: 'simulator', label: 'Trigger Simulator (8 Events)', icon: <Send className="w-4 h-4" /> },
              { id: 'settings', label: 'Channel Settings', icon: <Settings className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy-950 text-white shadow-xs'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {activeTab === 'feed' && unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="text-xs text-teal-700 hover:text-teal-900 font-extrabold flex items-center gap-1"
            >
              <CheckCheck className="w-3.5 h-3.5" /> Mark All Read
            </button>
          )}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6 max-h-[72vh] overflow-y-auto">
          {/* TAB 1: LIVE NOTIFICATIONS FEED */}
          {activeTab === 'feed' && (
            <div className="space-y-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 shrink-0">
                  <Filter className="w-3 h-3" /> Category:
                </span>
                {['all', 'appointment', 'lab result', 'pharmacy', 'health care'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-bold capitalize whitespace-nowrap border transition-all ${
                      filterCategory === cat
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-white text-navy-900 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Feed List */}
              {filteredNotifs.length === 0 ? (
                <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                  <Bell className="w-8 h-8 text-gray-400 mx-auto" />
                  <p className="text-sm font-bold text-navy-900">No notifications found</p>
                  <p className="text-xs text-gray-500">Trigger test notifications from the Simulator tab above.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredNotifs.map((n) => (
                    <Card
                      key={n.id}
                      className={`p-4 transition-all border ${
                        !n.isRead ? 'bg-amber-50/40 border-amber-200 shadow-2xs' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          <div className={`p-2.5 rounded-xl shrink-0 ${!n.isRead ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-navy-900'}`}>
                            {n.category === 'Appointment' && <Calendar className="w-4 h-4 text-teal-600" />}
                            {n.category === 'Lab Result' && <FileText className="w-4 h-4 text-amber-600" />}
                            {n.category === 'Pharmacy' && <Pill className="w-4 h-4 text-gold-600" />}
                            {n.category === 'Health Care' && <Activity className="w-4 h-4 text-teal-600" />}
                            {n.category === 'System' && <Bell className="w-4 h-4 text-navy-600" />}
                          </div>

                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-sm font-extrabold text-navy-900">{n.title}</h4>
                              {!n.isRead && <Badge variant="gold" size="sm">New</Badge>}
                              <Badge variant="outline" size="sm" className="text-[10px]">
                                {n.category}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed">{n.message}</p>

                            {/* Dispatched Channels Badges */}
                            <div className="flex items-center gap-1.5 pt-1">
                              <span className="text-[10px] text-gray-400 font-bold uppercase">Dispatched via:</span>
                              {n.channelsSent?.map((ch) => (
                                <span
                                  key={ch}
                                  className="px-1.5 py-0.5 bg-navy-950/5 text-navy-900 rounded text-[10px] font-extrabold uppercase border border-navy-950/10 flex items-center gap-1"
                                >
                                  {ch === 'email' && <Mail className="w-2.5 h-2.5 text-blue-600" />}
                                  {ch === 'sms' && <Smartphone className="w-2.5 h-2.5 text-green-600" />}
                                  {ch === 'whatsapp' && <MessageSquare className="w-2.5 h-2.5 text-green-600" />}
                                  {ch === 'push' && <Bell className="w-2.5 h-2.5 text-amber-600" />}
                                  {ch}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Controls */}
                        <div className="flex items-center gap-1 shrink-0">
                          {!n.isRead && (
                            <button
                              onClick={() => handleMarkAsRead(n.id)}
                              className="p-1.5 text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                              title="Mark as read"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(n.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete notification"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TRIGGER SIMULATOR FOR ALL 8 EVENT TYPES */}
          {activeTab === 'simulator' && (
            <div className="space-y-6">
              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 space-y-2">
                <h4 className="text-xs font-extrabold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  Multi-Channel Notification Event Dispatcher
                </h4>
                <p className="text-xs text-navy-900 leading-relaxed">
                  Select an event type below to trigger a live multi-channel dispatch simulation across Email, SMS, WhatsApp, and Web Push.
                </p>
              </div>

              {/* 8 Event Type Action Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    type: 'APPOINTMENT_CONFIRMATION' as NotificationEventType,
                    title: '1. Appointment Confirmation',
                    desc: 'Dispatches OPD slot confirmation details',
                    icon: <Calendar className="w-4 h-4 text-teal-600" />,
                  },
                  {
                    type: 'APPOINTMENT_REMINDER' as NotificationEventType,
                    title: '2. Appointment Reminder',
                    desc: 'Dispatches 24h / 2h upcoming consultation reminder',
                    icon: <Bell className="w-4 h-4 text-gold-600" />,
                  },
                  {
                    type: 'APPOINTMENT_RESCHEDULING' as NotificationEventType,
                    title: '3. Appointment Rescheduling',
                    desc: 'Dispatches updated OPD slot notice',
                    icon: <Calendar className="w-4 h-4 text-navy-600" />,
                  },
                  {
                    type: 'APPOINTMENT_CANCELLATION' as NotificationEventType,
                    title: '4. Appointment Cancellation',
                    desc: 'Dispatches cancellation & refund status',
                    icon: <X className="w-4 h-4 text-red-600" />,
                  },
                  {
                    type: 'LAB_REPORT_READY' as NotificationEventType,
                    title: '5. Lab Report Ready',
                    desc: 'Dispatches PDF report download link',
                    icon: <FileText className="w-4 h-4 text-amber-600" />,
                  },
                  {
                    type: 'PRESCRIPTION_AVAILABLE' as NotificationEventType,
                    title: '6. Prescription Available',
                    desc: 'Dispatches doctor e-prescription link',
                    icon: <Pill className="w-4 h-4 text-teal-600" />,
                  },
                  {
                    type: 'FOLLOW_UP_REMINDER' as NotificationEventType,
                    title: '7. Care Follow-Up',
                    desc: 'Dispatches 7-day post-consultation check-in',
                    icon: <Activity className="w-4 h-4 text-purple-600" />,
                  },
                  {
                    type: 'HEALTH_REMINDER' as NotificationEventType,
                    title: '8. Health & Medication',
                    desc: 'Dispatches preventive screening & BP tips',
                    icon: <Sparkles className="w-4 h-4 text-amber-600" />,
                  },
                ].map((item) => (
                  <Card key={item.type} className="p-4 bg-white border border-gray-200 hover:border-teal-500 transition-all flex flex-col justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-gray-100">{item.icon}</div>
                        <h4 className="text-xs font-extrabold text-navy-900">{item.title}</h4>
                      </div>
                      <p className="text-[11px] text-gray-500">{item.desc}</p>
                    </div>

                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => handleTriggerTestEvent(item.type)}
                      leftIcon={<Send className="w-3.5 h-3.5" />}
                      className="w-full text-xs font-extrabold"
                    >
                      Trigger Test Event
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Payload Inspection View */}
              {lastDispatchedDetails && (
                <div className="p-4 bg-navy-950 text-white rounded-2xl space-y-3">
                  <h4 className="text-xs font-extrabold text-gold-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Last Dispatched Payload Inspector</span>
                    <Badge variant="gold" size="sm">{lastDispatchedDetails.notificationItem.eventType}</Badge>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white/5 rounded-xl space-y-1 border border-white/10">
                      <div className="font-extrabold text-teal-400 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> Email Payload ({lastDispatchedDetails.channelPayloads.email.provider})
                      </div>
                      <p className="text-[11px] text-gray-300 font-mono">
                        Subject: {lastDispatchedDetails.channelPayloads.email.subject}
                      </p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1 border border-white/10">
                      <div className="font-extrabold text-green-400 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5" /> SMS Payload ({lastDispatchedDetails.channelPayloads.sms.provider})
                      </div>
                      <p className="text-[11px] text-gray-300 font-mono truncate">
                        Text: {lastDispatchedDetails.channelPayloads.sms.text}
                      </p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1 border border-white/10">
                      <div className="font-extrabold text-green-400 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Payload ({lastDispatchedDetails.channelPayloads.whatsapp.provider})
                      </div>
                      <p className="text-[11px] text-gray-300 font-mono truncate">
                        Template: {lastDispatchedDetails.channelPayloads.whatsapp.templateName}
                      </p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1 border border-white/10">
                      <div className="font-extrabold text-amber-400 flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5" /> Push Payload (VAPID Key Configured)
                      </div>
                      <p className="text-[11px] text-gray-300 font-mono truncate">
                        Title: {lastDispatchedDetails.channelPayloads.push.title}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CHANNEL INTEGRATIONS & PREFERENCES */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Web Push Browser Permission Banner */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-extrabold text-amber-950 flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-amber-600" />
                    Web Push Browser Permission Status
                  </h4>
                  <p className="text-xs text-amber-900">
                    Current Browser Permission: <strong className="uppercase font-extrabold">{pushPermission}</strong>
                  </p>
                </div>

                {pushPermission !== 'granted' && (
                  <Button
                    variant="teal"
                    size="sm"
                    onClick={handleRequestPushPermission}
                    className="font-bold shrink-0 text-xs"
                  >
                    Enable Browser Push
                  </Button>
                )}
              </div>

              {/* Channel Delivery Toggles */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider">Channel Integration Toggles</h4>

                {[
                  {
                    key: 'emailAlerts' as keyof NotificationPreferences,
                    title: 'Email Notifications',
                    desc: 'Dispatches HTML formatted confirmations & lab reports via Email proxy',
                    icon: <Mail className="w-4 h-4 text-blue-600" />,
                  },
                  {
                    key: 'smsAlerts' as keyof NotificationPreferences,
                    title: 'SMS Alerts',
                    desc: 'Dispatches short instant SMS messages for OPD slots & cancellations',
                    icon: <Smartphone className="w-4 h-4 text-green-600" />,
                  },
                  {
                    key: 'whatsappAlerts' as keyof NotificationPreferences,
                    title: 'WhatsApp Business Messages',
                    desc: 'Dispatches digital prescriptions & PDF lab reports directly to WhatsApp',
                    icon: <MessageSquare className="w-4 h-4 text-green-600" />,
                  },
                  {
                    key: 'pushAlerts' as keyof NotificationPreferences,
                    title: 'Web Push Notifications',
                    desc: 'Displays desktop & mobile browser push banners for upcoming OPD appointments',
                    icon: <Bell className="w-4 h-4 text-amber-600" />,
                  },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white border border-gray-200">{item.icon}</div>
                      <div>
                        <span className="text-xs font-extrabold text-navy-900 block">{item.title}</span>
                        <span className="text-[11px] text-gray-500">{item.desc}</span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={!!preferences[item.key]}
                      onChange={() => handleTogglePref(item.key)}
                      className="w-4 h-4 accent-teal-600 rounded"
                    />
                  </label>
                ))}
              </div>

              {/* Event Type Preferences */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <h4 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider">Health Event Subscriptions</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { key: 'appointmentAlerts' as keyof NotificationPreferences, label: 'OPD Appointment Updates' },
                    { key: 'labReportAlerts' as keyof NotificationPreferences, label: 'Diagnostic Lab Reports' },
                    { key: 'prescriptionAlerts' as keyof NotificationPreferences, label: 'Doctor E-Prescriptions' },
                    { key: 'healthReminders' as keyof NotificationPreferences, label: 'Follow-Up & Wellness Reminders' },
                  ].map((sub) => (
                    <label key={sub.key} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 cursor-pointer text-xs font-bold text-navy-900">
                      <span>{sub.label}</span>
                      <input
                        type="checkbox"
                        checked={!!preferences[sub.key]}
                        onChange={() => handleTogglePref(sub.key)}
                        className="w-4 h-4 accent-teal-600 rounded"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Credential Safety Notice */}
              <div className="p-3.5 bg-teal-50/80 rounded-xl border border-teal-200 text-xs text-teal-950 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Security Guardrail Active:</strong> All SMS API secrets, Twilio Auth Tokens, SendGrid keys, and WhatsApp Meta Tokens are strictly isolated on server-side proxy handlers.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
