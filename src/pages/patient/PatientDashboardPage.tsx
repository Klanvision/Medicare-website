import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Calendar,
  History,
  FileText,
  Pill,
  CreditCard,
  Clock,
  Bell,
  Settings,
  Download,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Plus,
  ShieldCheck,
  Send,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import {
  MOCK_PATIENT_PROFILE,
  MOCK_PATIENT_APPOINTMENTS,
  MOCK_PATIENT_REPORTS,
  MOCK_PATIENT_PRESCRIPTIONS,
  MOCK_PATIENT_BILLS,
  MOCK_HEALTH_TIMELINE,
} from '@/data/patientData';
import { PatientSidebar, DashboardTab } from '@/components/patient/PatientSidebar';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { NotificationTestCenterModal } from '@/components/notifications/NotificationTestCenterModal';
import { notificationService, NotificationItem } from '@/services/notificationService';
import { useToast } from '@/hooks/useToast';

export const PatientDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const toast = useToast();

  const [activeTab, setActiveTab] = useState<DashboardTab>('profile');
  const [liveNotifs, setLiveNotifs] = useState<NotificationItem[]>([]);
  const [isTestCenterOpen, setIsTestCenterOpen] = useState(false);

  // Interactive Reschedule Modal State
  const [selectedAppt, setSelectedAppt] = useState<string | null>(null);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);

  useEffect(() => {
    const fetchNotifs = async () => {
      const items = await notificationService.getNotifications();
      setLiveNotifs(items);
    };
    fetchNotifs();
  }, [activeTab, isTestCenterOpen]);

  const handleDownloadReport = (reportName: string) => {
    toast.success(`Lab Report "${reportName}" downloaded to your device as PDF.`, 'Report Downloaded');
  };

  const handleRefillOrder = (rxName: string) => {
    toast.success(`Refill order for "${rxName}" sent to Hospital Pharmacy!`, 'Refill Requested');
  };

  const handleConfirmReschedule = () => {
    toast.success('Appointment rescheduled to next available slot (Sept 05, 11:30 AM)!', 'Rescheduled');
    setIsRescheduleModalOpen(false);
  };

  const profile = user || MOCK_PATIENT_PROFILE;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* 1. Sidebar Navigation */}
      <PatientSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        unreadCount={liveNotifs.filter((n) => !n.isRead).length}
      />

      {/* 2. Main Tab Content Area */}
      <div className="flex-1 space-y-6">
        
        {/* Tab 1: Profile & Vitals */}
        {activeTab === 'profile' && (
          <div className="space-y-5">
            
            {/* Top Summary Banner */}
            <div className="bg-gradient-to-r from-[#00529B] to-[#003B70] text-white p-6 rounded-3xl shadow-md border border-sky-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black">{profile.name}</h3>
                  <span className="bg-amber-400 text-slate-900 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                    Active Patient
                  </span>
                </div>
                <p className="text-xs text-sky-100 font-medium">
                  UHID: <strong className="font-mono text-white">{profile.uhid}</strong> • Blood Group: <strong className="text-amber-300">{profile.bloodGroup}</strong>
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>HIPAA Verified Digital Vault</span>
              </div>
            </div>

            {/* Demographics Block */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                Demographics & Personal Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 font-bold block">Full Name</span>
                  <span className="font-extrabold text-slate-900 text-sm">{profile.name}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 font-bold block">UHID Number</span>
                  <span className="font-extrabold text-[#00529B] text-sm font-mono">{profile.uhid}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 font-bold block">Blood Group</span>
                  <span className="font-extrabold text-rose-600 text-sm">{profile.bloodGroup}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 font-bold block">Contact Email</span>
                  <span className="font-bold text-slate-900">{profile.email}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 font-bold block">Phone Number</span>
                  <span className="font-bold text-slate-900">{profile.phone}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-slate-400 font-bold block">Physical Vitals (Height/Weight)</span>
                  <span className="font-bold text-slate-900">{profile.heightCm} cm / {profile.weightKg} kg</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact Block */}
            <div className="bg-sky-50/80 p-5 rounded-3xl border border-sky-200 text-xs space-y-2">
              <h4 className="font-extrabold text-[#00529B] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00529B]" />
                <span>Primary Emergency Contact:</span>
              </h4>
              <p className="text-slate-800 font-medium pl-6">
                <strong className="text-slate-900">{profile.emergencyContact.name}</strong> ({profile.emergencyContact.relation}) •{' '}
                <span className="text-[#00529B] font-extrabold">{profile.emergencyContact.phone}</span>
              </p>
            </div>

            {/* Residential Address Block */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 text-xs space-y-1">
              <span className="text-slate-400 font-bold block">Residential Address</span>
              <p className="font-semibold text-slate-800">{profile.address}</p>
            </div>

          </div>
        )}

        {/* Tab 2: Upcoming OPD Appointments */}
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">Upcoming OPD Appointments</h3>
                <p className="text-xs text-slate-500 font-medium">Scheduled consultations at Medicare Hospitals</p>
              </div>
              <Link to="/appointments">
                <Button variant="gold" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
                  Book New OPD
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {MOCK_PATIENT_APPOINTMENTS.filter((a) => a.status === 'Upcoming').map((apt) => (
                <div key={apt.id} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={apt.doctorPhoto}
                        alt={apt.doctorName}
                        className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-2xs shrink-0"
                      />
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#00529B] text-[10px] font-black uppercase tracking-wider border border-sky-100">
                          {apt.consultationType}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 mt-1">{apt.doctorName}</h4>
                        <p className="text-xs text-slate-500 font-semibold">{apt.doctorSpecialty}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Token Slip</span>
                      <span className="text-base font-black text-[#00529B] font-mono">{apt.tokenNo}</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 font-bold block">Date & Time Slot</span>
                      <strong className="text-slate-900 font-bold">{apt.date} at {apt.timeSlot}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">Hospital Branch</span>
                      <strong className="text-slate-800 font-semibold">{apt.hospitalBranch}</strong>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsRescheduleModalOpen(true)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    >
                      Reschedule Slot
                    </button>
                    <button
                      type="button"
                      onClick={() => toast.info('Appointment cancellation requested.', 'Requested')}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      Cancel OPD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Past Consultations */}
        {activeTab === 'past' && (
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900">Completed Consultation History</h3>
            <div className="space-y-3">
              {MOCK_PATIENT_APPOINTMENTS.filter((a) => a.status === 'Completed').map((apt) => (
                <div key={apt.id} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={apt.doctorPhoto}
                      alt={apt.doctorName}
                      className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">{apt.doctorName}</h4>
                      <p className="text-xs text-slate-500 font-semibold">{apt.doctorSpecialty} • {apt.date}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toast.success('Consultation Summary PDF downloaded.', 'Downloaded')}
                    className="px-4 py-2.5 rounded-2xl bg-sky-50 hover:bg-sky-100 text-[#00529B] text-xs font-extrabold flex items-center justify-center gap-2 border border-sky-200 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Summary PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Medical Records & Lab Reports */}
        {activeTab === 'reports' && (
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900">Digital Lab Reports & Diagnostic Scans</h3>
            <div className="space-y-3">
              {MOCK_PATIENT_REPORTS.map((rep) => (
                <div key={rep.id} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-sky-300 transition-all">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#00529B] text-[10px] font-black uppercase border border-sky-100">
                        {rep.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400">{rep.date}</span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">{rep.testName}</h4>
                    <p className="text-xs text-slate-500 font-semibold">Prescribed by {rep.prescribedBy} • PDF ({rep.fileSize})</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownloadReport(rep.testName)}
                    className="px-4 py-2.5 rounded-2xl bg-[#00529B] hover:bg-[#00407A] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Report PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: E-Prescriptions */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900">Active Digital E-Prescriptions</h3>
            <div className="space-y-4">
              {MOCK_PATIENT_PRESCRIPTIONS.map((rx) => (
                <div key={rx.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">{rx.doctorName}</h4>
                      <p className="text-xs text-[#00529B] font-extrabold">Diagnosis: {rx.diagnosis}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-bold">{rx.date}</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <p className="font-extrabold text-slate-700 uppercase tracking-wider text-[10px]">Prescribed Medicines:</p>
                    {rx.medicines.map((m, i) => (
                      <div key={i} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between gap-2">
                        <div>
                          <strong className="text-slate-900 font-extrabold block text-sm">{m.name}</strong>
                          <span className="text-slate-500 font-semibold">{m.frequency} • {m.duration}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRefillOrder(m.name)}
                          className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#00529B] font-extrabold text-xs border border-sky-200 transition-all cursor-pointer"
                        >
                          Order Refill
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Bills & Payments */}
        {activeTab === 'bills' && (
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900">Bills & Payment Receipts</h3>
            <div className="space-y-3">
              {MOCK_PATIENT_BILLS.map((bill) => (
                <div key={bill.id} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase border border-emerald-200">
                        {bill.status}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">{bill.invoiceNo}</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 mt-1">{bill.serviceDescription}</h4>
                    <p className="text-xs text-slate-500 font-semibold">{bill.date} • Paid via {bill.paymentMethod}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl font-black text-slate-900 font-mono">₹{bill.amount}</span>
                    <button
                      type="button"
                      onClick={() => toast.success(`Receipt ${bill.invoiceNo} downloaded.`, 'Receipt Saved')}
                      className="px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold flex items-center gap-2 border border-slate-200 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Receipt PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Health Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900">Clinical History Timeline</h3>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-6 border-l-2 border-[#00529B] pl-5 ml-2">
                {MOCK_HEALTH_TIMELINE.map((item) => (
                  <div key={item.id} className="relative space-y-1.5">
                    <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#00529B] border-2 border-white ring-2 ring-sky-100" />
                    <span className="text-xs font-extrabold text-[#00529B]">{item.date} • {item.type}</span>
                    <h4 className="text-base font-extrabold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 font-semibold">{item.doctorOrLab}</p>
                    <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100 font-medium">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 8: Notifications */}
        {activeTab === 'notifications' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900">Patient Notifications & Alerts</h3>
                <p className="text-xs text-slate-500 font-medium">Multi-Channel Healthcare Updates (Email, SMS, WhatsApp, Web Push)</p>
              </div>
              <Button
                variant="gold"
                size="sm"
                onClick={() => setIsTestCenterOpen(true)}
                leftIcon={<Send className="w-3.5 h-3.5" />}
                className="font-bold text-xs"
              >
                Notification Test Center
              </Button>
            </div>

            <div className="space-y-3">
              {liveNotifs.map((n) => (
                <div key={n.id} className={`p-4 rounded-3xl flex items-start gap-3.5 border transition-all ${!n.isRead ? 'bg-sky-50/70 border-sky-200' : 'bg-white border-slate-200'}`}>
                  <Bell className="w-5 h-5 text-[#00529B] shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-extrabold text-slate-900">{n.title}</h4>
                      {!n.isRead && (
                        <span className="px-2 py-0.5 bg-amber-400 text-slate-900 font-black text-[9px] uppercase rounded-full">
                          Unread
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 font-medium">{n.message}</p>
                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                      <span>{n.timestamp}</span>
                      <span className="font-extrabold text-[#00529B] uppercase">Via {n.channelsSent?.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 9: Settings */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900">Portal & Notification Settings</h3>
                <p className="text-xs text-slate-500 font-medium">Manage how Medicare contacts you for appointments and reports</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsTestCenterOpen(true)} className="text-xs font-bold">
                Configure Channels
              </Button>
            </div>
            <div className="space-y-3.5 text-xs">
              <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
                <div>
                  <span className="font-extrabold text-slate-900 block text-sm">SMS Appointment Reminders</span>
                  <span className="text-slate-500 font-medium">Receive SMS 2 hours before OPD appointment</span>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#00529B]" />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
                <div>
                  <span className="font-extrabold text-slate-900 block text-sm">WhatsApp Report Notifications</span>
                  <span className="text-slate-500 font-medium">Receive digital lab report links directly on WhatsApp</span>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#00529B]" />
              </label>
            </div>
          </div>
        )}

      </div>

      {/* Notification Test Center Modal */}
      <NotificationTestCenterModal isOpen={isTestCenterOpen} onClose={() => setIsTestCenterOpen(false)} />

      {/* Reschedule Modal */}
      <Modal
        isOpen={isRescheduleModalOpen}
        onClose={() => setIsRescheduleModalOpen(false)}
        title="Reschedule Appointment"
        description="Select new date & time slot for your OPD consultation"
      >
        <div className="space-y-4">
          <div className="p-3.5 bg-slate-50 rounded-2xl text-xs space-y-1 border border-slate-200">
            <p className="font-extrabold text-slate-900">Dr. Rajesh Verma (Orthopedics)</p>
            <p className="text-slate-500 font-medium">Current Slot: Aug 28 at 10:30 AM</p>
          </div>

          <div className="space-y-1.5 text-xs">
            <label className="font-bold text-slate-900">Select New Date</label>
            <input type="date" className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-900" />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
            <Button variant="ghost" onClick={() => setIsRescheduleModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="gold" onClick={handleConfirmReschedule} leftIcon={<CheckCircle2 className="w-4 h-4" />}>
              Confirm Reschedule
            </Button>
          </div>
        </div>
      </Modal>

    </div>
  );
};
