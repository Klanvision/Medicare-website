import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Users, UserCheck, Calendar, Building, MessageSquare, Activity, CreditCard,
  Plus, Download, RefreshCw, CheckCircle, Clock, AlertTriangle, ShieldCheck,
  Building2, Stethoscope, FileText, Megaphone, BarChart3, FileSpreadsheet, Settings, Send
} from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminDataTable, Column } from '@/components/admin/AdminDataTable';
import {
  ADMIN_DASHBOARD_CARDS, MOCK_ADMIN_USERS, MOCK_ADMIN_DOCTORS,
  MOCK_ADMIN_APPOINTMENTS, MOCK_ADMIN_HOSPITALS, MOCK_ADMIN_ENQUIRIES,
  MOCK_ADMIN_CAMPAIGNS, MOCK_ADMIN_DEPARTMENTS, MOCK_ADMIN_SPECIALTIES, MOCK_ADMIN_CONTENT, AdminUser, AdminDoctor, AdminAppointment,
  AdminHospital, AdminEnquiry, AdminCampaign, AdminDepartment, AdminSpecialty, AdminContentItem
} from '@/data/adminData';

import { RoleSimulatorWidget } from '@/components/common/RoleSimulatorWidget';
import { AdminAnalyticsPage } from '@/pages/admin/AdminAnalyticsPage';
import { AddDoctorModal } from '@/components/admin/AddDoctorModal';
import { CreateUserModal } from '@/components/admin/CreateUserModal';
import { AddCampusModal } from '@/components/admin/AddCampusModal';
import { AddDepartmentModal } from '@/components/admin/AddDepartmentModal';
import { AddSpecialtyModal } from '@/components/admin/AddSpecialtyModal';
import { CreateArticleModal } from '@/components/admin/CreateArticleModal';
import { LaunchCampaignModal } from '@/components/admin/LaunchCampaignModal';
import { ReportsAuditSection } from '@/components/admin/ReportsAuditSection';

export const AdminDashboardPage: React.FC = () => {
  const location = useLocation();
  const { success, info } = useToast();

  // Add Department Modal State & Departments List State
  const [isAddDepartmentModalOpen, setIsAddDepartmentModalOpen] = useState(false);
  const [departmentsList, setDepartmentsList] = useState<AdminDepartment[]>(() => {
    const saved = localStorage.getItem('vhn_admin_departments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_DEPARTMENTS;
  });

  // Add Specialty Modal State & Specialties List State
  const [isAddSpecialtyModalOpen, setIsAddSpecialtyModalOpen] = useState(false);
  const [specialtiesList, setSpecialtiesList] = useState<AdminSpecialty[]>(() => {
    const saved = localStorage.getItem('vhn_admin_specialties');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_SPECIALTIES;
  });

  const handleAddSpecialty = (newSpecialty: AdminSpecialty) => {
    const updated = [newSpecialty, ...specialtiesList];
    setSpecialtiesList(updated);
    try {
      localStorage.setItem('vhn_admin_specialties', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteSpecialty = (specialty: AdminSpecialty) => {
    const updated = specialtiesList.filter((s) => s.id !== specialty.id);
    setSpecialtiesList(updated);
    try {
      localStorage.setItem('vhn_admin_specialties', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Removed specialty catalog: ${specialty.name}`);
  };

  // Create Article Modal State & Content List State
  const [isCreateArticleModalOpen, setIsCreateArticleModalOpen] = useState(false);
  const [contentList, setContentList] = useState<AdminContentItem[]>(() => {
    const saved = localStorage.getItem('vhn_admin_content');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_CONTENT;
  });

  const handleCreateArticle = (newArticle: AdminContentItem) => {
    const updated = [newArticle, ...contentList];
    setContentList(updated);
    try {
      localStorage.setItem('vhn_admin_content', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteContent = (item: AdminContentItem) => {
    const updated = contentList.filter((c) => c.id !== item.id);
    setContentList(updated);
    try {
      localStorage.setItem('vhn_admin_content', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Removed content item: ${item.title}`);
  };

  // Launch Campaign Modal State & Campaigns List State
  const [isLaunchCampaignModalOpen, setIsLaunchCampaignModalOpen] = useState(false);
  const [campaignsList, setCampaignsList] = useState<AdminCampaign[]>(() => {
    const saved = localStorage.getItem('vhn_admin_campaigns');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_CAMPAIGNS;
  });

  const handleLaunchCampaign = (newCampaign: AdminCampaign) => {
    const updated = [newCampaign, ...campaignsList];
    setCampaignsList(updated);
    try {
      localStorage.setItem('vhn_admin_campaigns', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteCampaign = (campaign: AdminCampaign) => {
    const updated = campaignsList.filter((c) => c.id !== campaign.id);
    setCampaignsList(updated);
    try {
      localStorage.setItem('vhn_admin_campaigns', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Ended campaign: ${campaign.name}`);
  };

  const handleAddDepartment = (newDept: AdminDepartment) => {
    const updated = [newDept, ...departmentsList];
    setDepartmentsList(updated);
    try {
      localStorage.setItem('vhn_admin_departments', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteDepartment = (dept: AdminDepartment) => {
    const updated = departmentsList.filter((d) => d.id !== dept.id);
    setDepartmentsList(updated);
    try {
      localStorage.setItem('vhn_admin_departments', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Removed department: ${dept.name}`);
  };

  // Add Campus Modal State & Hospitals List State
  const [isAddCampusModalOpen, setIsAddCampusModalOpen] = useState(false);
  const [hospitalsList, setHospitalsList] = useState<AdminHospital[]>(() => {
    const saved = localStorage.getItem('vhn_admin_hospitals');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_HOSPITALS;
  });

  const handleAddCampus = (newCampus: AdminHospital) => {
    const updated = [newCampus, ...hospitalsList];
    setHospitalsList(updated);
    try {
      localStorage.setItem('vhn_admin_hospitals', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteCampus = (hospital: AdminHospital) => {
    const updated = hospitalsList.filter((h) => h.id !== hospital.id);
    setHospitalsList(updated);
    try {
      localStorage.setItem('vhn_admin_hospitals', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Removed campus: ${hospital.name}`);
  };

  // Create User Modal State & Users List State
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [usersList, setUsersList] = useState<AdminUser[]>(() => {
    const saved = localStorage.getItem('vhn_admin_users');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_USERS;
  });

  const handleAddUser = (newUser: AdminUser) => {
    const updated = [newUser, ...usersList];
    setUsersList(updated);
    try {
      localStorage.setItem('vhn_admin_users', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteUser = (user: AdminUser) => {
    const updated = usersList.filter((u) => u.id !== user.id);
    setUsersList(updated);
    try {
      localStorage.setItem('vhn_admin_users', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Deleted user: ${user.name}`);
  };

  // Add Doctor Modal State & Doctors List State
  const [isAddDoctorModalOpen, setIsAddDoctorModalOpen] = useState(false);
  const [doctorsList, setDoctorsList] = useState<AdminDoctor[]>(() => {
    const saved = localStorage.getItem('vhn_admin_doctors');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to initial mock data
      }
    }
    return MOCK_ADMIN_DOCTORS;
  });

  const handleAddDoctor = (newDoctor: AdminDoctor) => {
    const updated = [newDoctor, ...doctorsList];
    setDoctorsList(updated);
    try {
      localStorage.setItem('vhn_admin_doctors', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleDeleteDoctor = (doc: AdminDoctor) => {
    const updated = doctorsList.filter((d) => d.id !== doc.id);
    setDoctorsList(updated);
    try {
      localStorage.setItem('vhn_admin_doctors', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    info(`Removed ${doc.name} from active roster.`);
  };

  // Selected Active Tab from Route
  const path = location.pathname;
  let activeTab = 'dashboard';
  if (path.includes('/users')) activeTab = 'users';
  else if (path.includes('/doctors')) activeTab = 'doctors';
  else if (path.includes('/appointments')) activeTab = 'appointments';
  else if (path.includes('/hospitals')) activeTab = 'hospitals';
  else if (path.includes('/departments')) activeTab = 'departments';
  else if (path.includes('/specialties')) activeTab = 'specialties';
  else if (path.includes('/content')) activeTab = 'content';
  else if (path.includes('/enquiries')) activeTab = 'enquiries';
  else if (path.includes('/marketing')) activeTab = 'marketing';
  else if (path.includes('/analytics')) activeTab = 'analytics';
  else if (path.includes('/reports')) activeTab = 'reports';
  else if (path.includes('/settings')) activeTab = 'settings';

  // System Settings state
  const [hospitalTitle, setHospitalTitle] = useState('MEDICARE Quaternary Hospital Network');
  const [emergencyHotline, setEmergencyHotline] = useState('1800-MEDICARE');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    setTimeout(() => {
      setIsSavingSettings(false);
      success('System Settings updated successfully!');
    }, 1000);
  };

  // Icons map for Dashboard Metric Cards
  const metricIcons: Record<string, React.ReactNode> = {
    Users: <Users className="w-6 h-6 text-white" />,
    UserCheck: <UserCheck className="w-6 h-6 text-white" />,
    Calendar: <Calendar className="w-6 h-6 text-amber-400" />,
    Building: <Building className="w-6 h-6 text-white" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-white" />,
    Activity: <Activity className="w-6 h-6 text-white" />,
    CreditCard: <CreditCard className="w-6 h-6 text-amber-400" />,
  };

  // User Table Columns
  const userColumns: Column<AdminUser>[] = [
    { key: 'name', header: 'Name', sortable: true, render: (u) => <span className="font-bold">{u.name}</span> },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    { key: 'role', header: 'Role', render: (u) => <span className="px-2 py-0.5 rounded bg-gray-100 font-bold">{u.role}</span> },
    {
      key: 'status', header: 'Status', render: (u) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${u.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
          {u.status}
        </span>
      )
    },
    { key: 'registeredDate', header: 'Registered' },
  ];

  // Doctor Table Columns
  const doctorColumns: Column<AdminDoctor>[] = [
    { key: 'name', header: 'Doctor Name', sortable: true, render: (d) => <span className="font-extrabold text-navy-950">{d.name}</span> },
    { key: 'specialty', header: 'Specialty', render: (d) => <span className="font-bold text-teal-700">{d.specialty}</span> },
    { key: 'hospital', header: 'Hospital Campus' },
    { key: 'qualification', header: 'Qualifications' },
    { key: 'fee', header: 'OPD Fee', render: (d) => <span className="font-bold text-amber-600">₹ {d.fee}</span> },
    {
      key: 'status', header: 'Verification', render: (d) => (
        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black">Verified</span>
      )
    },
  ];

  // Appointment Table Columns
  const appointmentColumns: Column<AdminAppointment>[] = [
    { key: 'bookingRef', header: 'Ref #', render: (a) => <span className="font-mono font-bold text-teal-700">{a.bookingRef}</span> },
    { key: 'patientName', header: 'Patient Name', sortable: true },
    { key: 'doctorName', header: 'Doctor' },
    { key: 'department', header: 'Department' },
    { key: 'date', header: 'Date & Time', render: (a) => <span>{a.date} ({a.timeSlot})</span> },
    {
      key: 'status', header: 'Status', render: (a) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
          a.status === 'Confirmed' ? 'bg-[#070e24] text-amber-400' : a.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
        }`}>
          {a.status}
        </span>
      )
    },
    { key: 'amount', header: 'Amount', render: (a) => <span className="font-bold">₹ {a.amount}</span> },
  ];

  // Hospital Table Columns
  const hospitalColumns: Column<AdminHospital>[] = [
    { key: 'name', header: 'Campus Name', sortable: true, render: (h) => <span className="font-black text-navy-950">{h.name}</span> },
    { key: 'location', header: 'Location' },
    { key: 'beds', header: 'Beds', render: (h) => <span>{h.beds} Total ({h.icuBeds} ICU)</span> },
    { key: 'doctorsCount', header: 'Doctors' },
    { key: 'traumaLevel', header: 'Trauma Rating', render: (h) => <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">{h.traumaLevel}</span> },
  ];

  // Department Table Columns
  const departmentColumns: Column<AdminDepartment>[] = [
    { key: 'name', header: 'Department Name', sortable: true, render: (d) => <span className="font-extrabold text-navy-950">{d.name}</span> },
    { key: 'hod', header: 'Head of Department (HOD)', render: (d) => <span className="font-bold text-teal-700">{d.hod}</span> },
    { key: 'phone', header: 'Hotline / Phone' },
    { key: 'staffCount', header: 'Clinical Staff', render: (d) => <span className="font-bold">{d.staffCount} Members</span> },
    { key: 'activeSurgeries', header: 'Active Surgeries', render: (d) => <span className="font-mono font-bold text-amber-600">{d.activeSurgeries} Active</span> },
    {
      key: 'status', header: 'Capacity Status', render: (d) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${d.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
          {d.status}
        </span>
      )
    },
  ];

  // Specialty Table Columns
  const specialtyColumns: Column<AdminSpecialty>[] = [
    {
      key: 'name',
      header: 'Specialty Name',
      sortable: true,
      render: (s) => (
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-navy-950">{s.name}</span>
            {s.isCOE && (
              <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 font-extrabold text-[10px] border border-amber-500/30">
                COE
              </span>
            )}
          </div>
          {s.description && (
            <p className="text-[11px] text-gray-500 line-clamp-1 max-w-md">{s.description}</p>
          )}
        </div>
      ),
    },
    {
      key: 'slug',
      header: 'URL Slug',
      render: (s) => <span className="font-mono text-teal-700 font-bold">{s.slug}</span>,
    },
    {
      key: 'doctorsCount',
      header: 'Doctors',
      render: (s) => <span className="font-bold text-navy-900">{s.doctorsCount} Specialists</span>,
    },
    {
      key: 'treatmentsCount',
      header: 'Treatments',
      render: (s) => <span className="font-mono font-bold text-amber-600">{s.treatmentsCount} Procedures</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (s) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
          {s.status}
        </span>
      ),
    },
  ];

  // Content Table Columns
  const contentColumns: Column<AdminContentItem>[] = [
    {
      key: 'title',
      header: 'Title & Type',
      sortable: true,
      render: (c) => (
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-navy-950">{c.title}</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 font-bold text-[10px] border border-teal-200">
            {c.type}
          </span>
        </div>
      ),
    },
    { key: 'category', header: 'Category', render: (c) => <span className="font-bold text-teal-700">{c.category}</span> },
    { key: 'author', header: 'Author' },
    { key: 'publishedDate', header: 'Published Date' },
    { key: 'views', header: 'Views', render: (c) => <span className="font-mono font-bold text-amber-600">{c.views.toLocaleString()} Views</span> },
    {
      key: 'status',
      header: 'Status',
      render: (c) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
          c.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : c.status === 'Draft' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {c.status}
        </span>
      ),
    },
  ];

  // Campaign Table Columns
  const campaignColumns: Column<AdminCampaign>[] = [
    {
      key: 'name',
      header: 'Campaign Name & Type',
      sortable: true,
      render: (c) => (
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-navy-950">{c.name}</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[10px] border border-amber-200">
            {c.type}
          </span>
        </div>
      ),
    },
    { key: 'code', header: 'Promo Code', render: (c) => <span className="px-2 py-1 rounded bg-navy-950 text-amber-400 font-mono font-bold text-xs">{c.code}</span> },
    { key: 'targetAudience', header: 'Target Audience' },
    { key: 'discountValue', header: 'Offer Value', render: (c) => <span className="font-extrabold text-amber-600">{c.discountValue}</span> },
    { key: 'validUntil', header: 'Valid Until' },
    { key: 'claimsCount', header: 'Redemptions', render: (c) => <span className="font-mono font-bold text-teal-700">{c.claimsCount} Claims</span> },
    {
      key: 'status',
      header: 'Status',
      render: (c) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
          c.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : c.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
        }`}>
          {c.status}
        </span>
      ),
    },
  ];

  // Enquiry Table Columns
  const enquiryColumns: Column<AdminEnquiry>[] = [
    { key: 'ticketId', header: 'Ticket #', render: (e) => <span className="font-mono font-bold text-amber-600">{e.ticketId}</span> },
    { key: 'patientName', header: 'Patient Name' },
    { key: 'category', header: 'Category', render: (e) => <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold">{e.category}</span> },
    { key: 'subject', header: 'Subject' },
    { key: 'priority', header: 'Priority', render: (e) => <span className={`px-2 py-0.5 rounded text-[10px] font-black ${e.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>{e.priority}</span> },
    { key: 'status', header: 'Status' },
  ];

  return (
    <div className="space-y-8">
      {/* 1. MODULE 1: DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <>
          {/* Top Welcome Banner */}
          <div className="bg-[#060c20] text-white p-6 sm:p-8 rounded-3xl border border-amber-500/40 shadow-xl space-y-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <Badge variant="gold" size="sm">Admin Control Hub</Badge>
              <h1 className="text-2xl sm:text-4xl font-black">
                Hospital Command & Operations Center
              </h1>
              <p className="text-xs text-gray-300">
                Real-time clinical throughput, doctor availability, emergency trauma response & revenue dashboard.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="gold"
                size="sm"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={() => setIsAddDoctorModalOpen(true)}
              >
                Add New Doctor
              </Button>
            </div>
          </div>

          {/* Phase 23 Role Architecture Inspector & Simulator Widget */}
          <RoleSimulatorWidget />

          {/* 7 DASHBOARD METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMIN_DASHBOARD_CARDS.map((card) => (
              <div
                key={card.id}
                className={`bg-gradient-to-br ${card.bgGradient} text-white p-6 rounded-3xl shadow-md space-y-3 relative overflow-hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wider">{card.title}</span>
                  <div className="p-2 rounded-2xl bg-white/10 shrink-0">
                    {metricIcons[card.iconName] || <Activity className="w-6 h-6 text-white" />}
                  </div>
                </div>
                <p className="text-3xl font-black">{card.value}</p>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className={`font-extrabold ${card.isPositive ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {card.change}
                  </span>
                  <span className="text-gray-300">{card.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Appointments Preview */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-navy-950">Recent OPD Appointments</h3>
            <AdminDataTable
              data={MOCK_ADMIN_APPOINTMENTS}
              columns={appointmentColumns}
              searchPlaceholder="Search by booking ref, patient or doctor..."
              onView={(item) => info(`Viewing booking #${item.bookingRef}`)}
              onApprove={(item) => success(`Appointment #${item.bookingRef} confirmed!`)}
              pageSize={4}
            />
          </div>
        </>
      )}

      {/* 2. MODULE 2: USER MANAGEMENT */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">User Management</h2>
              <p className="text-xs text-gray-500 font-medium">Manage user permissions and registered patient/staff accounts ({usersList.length} Accounts)</p>
            </div>
            <Button
              variant="teal"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsCreateUserModalOpen(true)}
            >
              Create User
            </Button>
          </div>
          <AdminDataTable
            data={usersList}
            columns={userColumns}
            searchPlaceholder="Search users by name or email..."
            onEdit={(u) => info(`Editing user: ${u.name}`)}
            onDelete={(u) => handleDeleteUser(u)}
          />
        </div>
      )}

      {/* 3. MODULE 3: DOCTOR MANAGEMENT */}
      {activeTab === 'doctors' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Doctor Management</h2>
              <p className="text-xs text-gray-500 font-medium">Manage and register specialist doctors across hospital campuses ({doctorsList.length} Registered)</p>
            </div>
            <Button
              variant="gold"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsAddDoctorModalOpen(true)}
            >
              Add Doctor
            </Button>
          </div>
          <AdminDataTable
            data={doctorsList}
            columns={doctorColumns}
            searchPlaceholder="Search doctors by name or specialty..."
            onEdit={(d) => info(`Editing doctor profile: ${d.name}`)}
            onApprove={(d) => success(`Doctor ${d.name} verification renewed.`)}
            onDelete={(d) => handleDeleteDoctor(d)}
          />
        </div>
      )}

      {/* 4. MODULE 4: APPOINTMENT MANAGEMENT */}
      {activeTab === 'appointments' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-navy-950">Appointment Management</h2>
          <AdminDataTable
            data={MOCK_ADMIN_APPOINTMENTS}
            columns={appointmentColumns}
            searchPlaceholder="Search appointments..."
            onView={(a) => info(`Viewing appointment: ${a.bookingRef}`)}
            onApprove={(a) => success(`Marked ${a.bookingRef} as Completed.`)}
          />
        </div>
      )}

      {/* 5. MODULE 5: HOSPITAL MANAGEMENT */}
      {activeTab === 'hospitals' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Hospital Management</h2>
              <p className="text-xs text-gray-500 font-medium">Manage quaternary centers, bed capacities, and emergency trauma facilities ({hospitalsList.length} Active Campuses)</p>
            </div>
            <Button
              variant="teal"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsAddCampusModalOpen(true)}
            >
              Add Campus
            </Button>
          </div>
          <AdminDataTable
            data={hospitalsList}
            columns={hospitalColumns}
            searchPlaceholder="Search hospital campuses..."
            onView={(h) => info(`Viewing campus details: ${h.name}`)}
            onDelete={(h) => handleDeleteCampus(h)}
          />
        </div>
      )}

      {/* 6. MODULE 6: DEPARTMENT MANAGEMENT */}
      {activeTab === 'departments' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Department Management</h2>
              <p className="text-xs text-gray-500 font-medium">Manage clinical & surgical super-specialty departments across all campuses ({departmentsList.length} Active Departments)</p>
            </div>
            <Button
              variant="teal"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsAddDepartmentModalOpen(true)}
            >
              Add New Department
            </Button>
          </div>
          <AdminDataTable
            data={departmentsList}
            columns={departmentColumns}
            searchPlaceholder="Search departments by name or HOD..."
            onView={(d) => info(`Viewing department: ${d.name}`)}
            onDelete={(d) => handleDeleteDepartment(d)}
          />
        </div>
      )}

      {/* 7. MODULE 7: SPECIALTY MANAGEMENT */}
      {activeTab === 'specialties' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Specialty Management</h2>
              <p className="text-xs text-gray-500 font-medium">Active Specialties & Centres of Excellence Catalog ({specialtiesList.length} Active Specialties)</p>
            </div>
            <Button
              variant="gold"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsAddSpecialtyModalOpen(true)}
            >
              Add Specialty
            </Button>
          </div>
          <AdminDataTable
            data={specialtiesList}
            columns={specialtyColumns}
            searchPlaceholder="Search specialties by name, slug or description..."
            onView={(s) => info(`Viewing specialty details: ${s.name}`)}
            onDelete={(s) => handleDeleteSpecialty(s)}
          />
        </div>
      )}

      {/* 8. MODULE 8: CONTENT MANAGEMENT */}
      {activeTab === 'content' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Content Management</h2>
              <p className="text-xs text-gray-500 font-medium">Health Library Articles, Banner Announcements, Patient FAQs, and News Releases ({contentList.length} Items)</p>
            </div>
            <Button
              variant="teal"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsCreateArticleModalOpen(true)}
            >
              Create New Article
            </Button>
          </div>
          <AdminDataTable
            data={contentList}
            columns={contentColumns}
            searchPlaceholder="Search articles by title, author or category..."
            onView={(c) => info(`Viewing content: ${c.title}`)}
            onDelete={(c) => handleDeleteContent(c)}
          />
        </div>
      )}

      {/* 9. MODULE 9: ENQUIRY MANAGEMENT */}
      {activeTab === 'enquiries' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-navy-950">Enquiry Management</h2>
          <AdminDataTable
            data={MOCK_ADMIN_ENQUIRIES}
            columns={enquiryColumns}
            searchPlaceholder="Search enquiry tickets..."
            onView={(e) => info(`Responding to enquiry ticket: ${e.ticketId}`)}
            onApprove={(e) => success(`Ticket ${e.ticketId} marked as Resolved.`)}
          />
        </div>
      )}

      {/* 10. MODULE 10: MARKETING & CAMPAIGNS */}
      {activeTab === 'marketing' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-navy-950">Marketing & Campaigns</h2>
              <p className="text-xs text-gray-500 font-medium">Active Promotions, Health Checkup Discount Codes & Outreach Camps ({campaignsList.length} Active Campaigns)</p>
            </div>
            <Button
              variant="gold"
              size="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsLaunchCampaignModalOpen(true)}
            >
              Launch New Campaign
            </Button>
          </div>
          <AdminDataTable
            data={campaignsList}
            columns={campaignColumns}
            searchPlaceholder="Search campaigns by name, code or audience..."
            onView={(c) => info(`Viewing campaign details: ${c.name}`)}
            onDelete={(c) => handleDeleteCampaign(c)}
          />
        </div>
      )}

      {/* 11. MODULE 11: ANALYTICS */}
      {activeTab === 'analytics' && <AdminAnalyticsPage />}

      {/* 12. MODULE 12: REPORTS & AUDIT EXPORT */}
      {activeTab === 'reports' && <ReportsAuditSection />}

      {/* 13. MODULE 13: SYSTEM SETTINGS */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-navy-950">System Settings</h2>
          <form onSubmit={handleSaveSettings} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-6 text-xs max-w-3xl">
            <div className="space-y-1">
              <label className="font-bold text-navy-900">Hospital Entity Title</label>
              <input
                type="text"
                value={hospitalTitle}
                onChange={(e) => setHospitalTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-navy-900">24/7 Level-1 Emergency Hotline</label>
              <input
                type="text"
                value={emergencyHotline}
                onChange={(e) => setEmergencyHotline(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-navy-950">System Maintenance Mode</p>
                <p className="text-[11px] text-gray-500">Temporarily restrict online appointment bookings for scheduled database updates.</p>
              </div>
              <input
                type="checkbox"
                checked={maintenanceMode}
                onChange={(e) => setMaintenanceMode(e.target.checked)}
                className="w-5 h-5 accent-teal-600 rounded"
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="md"
              isLoading={isSavingSettings}
              leftIcon={<Send className="w-4 h-4" />}
            >
              Save Configuration Settings
            </Button>
          </form>
        </div>
      )}

      {/* Add New Doctor Interactive Modal */}
      <AddDoctorModal
        isOpen={isAddDoctorModalOpen}
        onClose={() => setIsAddDoctorModalOpen(false)}
        onAddDoctor={handleAddDoctor}
      />

      {/* Create User Interactive Modal */}
      <CreateUserModal
        isOpen={isCreateUserModalOpen}
        onClose={() => setIsCreateUserModalOpen(false)}
        onAddUser={handleAddUser}
      />

      {/* Add Campus Interactive Modal */}
      <AddCampusModal
        isOpen={isAddCampusModalOpen}
        onClose={() => setIsAddCampusModalOpen(false)}
        onAddCampus={handleAddCampus}
      />

      {/* Add Department Interactive Modal */}
      <AddDepartmentModal
        isOpen={isAddDepartmentModalOpen}
        onClose={() => setIsAddDepartmentModalOpen(false)}
        onAddDepartment={handleAddDepartment}
      />

      {/* Add Specialty Interactive Modal */}
      <AddSpecialtyModal
        isOpen={isAddSpecialtyModalOpen}
        onClose={() => setIsAddSpecialtyModalOpen(false)}
        onAddSpecialty={handleAddSpecialty}
      />

      {/* Create Article Interactive Modal */}
      <CreateArticleModal
        isOpen={isCreateArticleModalOpen}
        onClose={() => setIsCreateArticleModalOpen(false)}
        onAddArticle={handleCreateArticle}
      />

      {/* Launch Campaign Interactive Modal */}
      <LaunchCampaignModal
        isOpen={isLaunchCampaignModalOpen}
        onClose={() => setIsLaunchCampaignModalOpen(false)}
        onAddCampaign={handleLaunchCampaign}
      />
    </div>
  );
};

export default AdminDashboardPage;
