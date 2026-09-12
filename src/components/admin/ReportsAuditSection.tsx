import React, { useState, useMemo } from 'react';
import {
  Download, FileSpreadsheet, FileText, ShieldCheck, Activity, Search, Filter,
  CheckCircle, AlertTriangle, ShieldAlert, Calendar, Clock, RefreshCw, Layers, Sliders, ExternalLink, Sparkles
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { useToast } from '@/hooks/useToast';
import {
  MOCK_REPORTS_LIST, MOCK_AUDIT_LOGS, HospitalReportItem, AuditLogItem
} from '@/data/reportsAuditData';

export const ReportsAuditSection: React.FC = () => {
  const { success, info } = useToast();

  // Active Tab State
  const [activeTab, setActiveTab] = useState<'reports' | 'audit' | 'generator'>('reports');

  // Reports Filter & Search State
  const [reportsList, setReportsList] = useState<HospitalReportItem[]>(MOCK_REPORTS_LIST);
  const [reportSearch, setReportSearch] = useState('');
  const [reportCategory, setReportCategory] = useState<string>('All');

  // Audit Logs Filter & Search State
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(MOCK_AUDIT_LOGS);
  const [auditSearch, setAuditSearch] = useState('');
  const [auditCategory, setAuditCategory] = useState<string>('All');
  const [auditSeverity, setAuditSeverity] = useState<string>('All');
  const [auditCampus, setAuditCampus] = useState<string>('All');

  // Custom Report Generator Form State
  const [genCategory, setGenCategory] = useState('Financial & Revenue');
  const [genCampus, setGenCampus] = useState('All Campuses');
  const [genFormat, setGenFormat] = useState<'PDF' | 'Excel' | 'CSV'>('Excel');
  const [genStartDate, setGenStartDate] = useState('2026-08-01');
  const [genEndDate, setGenEndDate] = useState('2026-08-31');
  const [isGenerating, setIsGenerating] = useState(false);

  // Handle Download Report Action
  const handleDownloadReport = (report: HospitalReportItem) => {
    // Increment download count
    setReportsList((prev) =>
      prev.map((r) => (r.id === report.id ? { ...r, downloadCount: r.downloadCount + 1 } : r))
    );

    // Create virtual CSV/Text download link
    const fileContent = `MEDICARE HEALTH SYSTEMS - EXECUTIVE HOSPITAL REPORT\n` +
      `Report Title: ${report.title}\n` +
      `Report ID: ${report.reportId}\n` +
      `Category: ${report.category}\n` +
      `Generated Date: ${report.generatedDate}\n` +
      `Period: ${report.period}\n` +
      `--------------------------------------------------\n` +
      `Description: ${report.description}\n` +
      `Audit Status: Verified & Signed by Compliance Desk\n`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${report.reportId}_${report.title.replace(/\s+/g, '_')}.${report.fileFormat.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    success(`Downloaded "${report.title}" [${report.fileFormat}] successfully!`);
  };

  // Handle Quick Download Revenue Report
  const handleQuickRevenueDownload = () => {
    const revReport = reportsList.find((r) => r.id === 'rep-1') || reportsList[0];
    handleDownloadReport(revReport);
  };

  // Handle Quick Export Doctor Audit Log
  const handleQuickDoctorAuditExport = () => {
    const csvHeader = 'Log ID,Timestamp,Actor Name,Role,Category,Campus,Severity,Description\n';
    const csvRows = auditLogs
      .map(
        (l) =>
          `"${l.logId}","${l.timestamp}","${l.actorName}","${l.actorRole}","${l.actionCategory}","${l.campus}","${l.severity}","${l.description.replace(/"/g, '""')}"`
      )
      .join('\n');

    const blob = new Blob([csvHeader + csvRows], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `VHN_Doctor_Audit_Log_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    success('Doctor OPD & System Audit Log exported as CSV file.');
  };

  // Handle Custom Report Generation Submit
  const handleGenerateCustomReport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      const newRepId = `REP-2026-${Math.floor(100 + Math.random() * 900)}`;
      const newReport: HospitalReportItem = {
        id: `custom-${Date.now()}`,
        reportId: newRepId,
        title: `Custom ${genCategory} Audit Report (${genCampus})`,
        category: genCategory as any,
        period: `${genStartDate} to ${genEndDate}`,
        fileFormat: genFormat,
        fileSize: '3.8 MB',
        generatedDate: new Date().toISOString().replace('T', ' ').slice(0, 16),
        downloadCount: 1,
        description: `Dynamically compiled report covering ${genCategory} for ${genCampus} across custom period ${genStartDate} to ${genEndDate}.`,
      };

      setReportsList([newReport, ...reportsList]);
      handleDownloadReport(newReport);
    }, 1200);
  };

  // Filtered Reports
  const filteredReports = useMemo(() => {
    return reportsList.filter((r) => {
      const matchesSearch = r.title.toLowerCase().includes(reportSearch.toLowerCase()) ||
        r.reportId.toLowerCase().includes(reportSearch.toLowerCase()) ||
        r.description.toLowerCase().includes(reportSearch.toLowerCase());
      const matchesCat = reportCategory === 'All' || r.category === reportCategory;
      return matchesSearch && matchesCat;
    });
  }, [reportsList, reportSearch, reportCategory]);

  // Filtered Audit Logs
  const filteredAuditLogs = useMemo(() => {
    return auditLogs.filter((l) => {
      const term = auditSearch.toLowerCase();
      const matchesSearch = l.logId.toLowerCase().includes(term) ||
        l.actorName.toLowerCase().includes(term) ||
        l.description.toLowerCase().includes(term) ||
        l.ipAddress.includes(term);
      const matchesCat = auditCategory === 'All' || l.actionCategory === auditCategory;
      const matchesSev = auditSeverity === 'All' || l.severity === auditSeverity;
      const matchesCampus = auditCampus === 'All' || l.campus.toLowerCase().includes(auditCampus.toLowerCase());
      return matchesSearch && matchesCat && matchesSev && matchesCampus;
    });
  }, [auditLogs, auditSearch, auditCategory, auditSeverity, auditCampus]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. TOP HEADER & DIRECT ACTION BANNER (Matching exact user image style) */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
          Reports & Audit Export
        </h2>

        {/* Primary Controls Card (Image Match) */}
        <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs font-black text-navy-950 tracking-wide uppercase">
              Generate & Export Comprehensive Hospital Reports (Excel / PDF)
            </p>
            <span className="text-[11px] font-bold text-gray-500">
              HIPAA & NABH Compliant Export Engine
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="teal"
              size="sm"
              leftIcon={<Download className="w-4 h-4" />}
              onClick={handleQuickRevenueDownload}
            >
              Download Revenue Report
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Download className="w-4 h-4" />}
              onClick={handleQuickDoctorAuditExport}
            >
              Export Doctor Audit Log
            </Button>
          </div>
        </div>
      </div>

      {/* 2. KPI SUMMARY METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Available Reports</span>
            <FileSpreadsheet className="w-5 h-5 text-teal-600" />
          </div>
          <p className="text-2xl font-black text-navy-950">{reportsList.length} Files</p>
          <p className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
            <span>+14 newly compiled this month</span>
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Audit Trail Logs</span>
            <ShieldCheck className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl font-black text-navy-950">2,840 Entries</p>
          <p className="text-[11px] font-bold text-gray-500">100% Immutable system log</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Auto Export Crons</span>
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>
          <p className="text-2xl font-black text-navy-950">12 Active Crons</p>
          <p className="text-[11px] font-bold text-teal-600">Daily midnight auto-sync</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase">Compliance Rating</span>
            <Badge variant="gold" size="sm">NABH Certified</Badge>
          </div>
          <p className="text-2xl font-black text-navy-950">99.8% Score</p>
          <p className="text-[11px] font-bold text-emerald-600">Zero data breach incidents</p>
        </div>
      </div>

      {/* 3. NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-3 overflow-x-auto custom-scrollbar">
        {[
          { id: 'reports', label: `Hospital Reports Catalog (${filteredReports.length})`, icon: FileText },
          { id: 'audit', label: `Real-time System Audit Logs (${filteredAuditLogs.length})`, icon: ShieldCheck },
          { id: 'generator', label: 'Custom Report Generator', icon: Sliders },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-navy-950 text-amber-400 shadow-md font-black'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-teal-600'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. TAB CONTENT 1: REPORTS CATALOG */}
      {activeTab === 'reports' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Filter Bar for Reports */}
          <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reports by title or ID..."
                value={reportSearch}
                onChange={(e) => setReportSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-gray-500 shrink-0" />
              <select
                value={reportCategory}
                onChange={(e) => setReportCategory(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-bold text-navy-950 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="All">All Report Categories</option>
                <option value="Financial & Revenue">Financial & Revenue</option>
                <option value="Clinical Operations">Clinical Operations</option>
                <option value="Bed & ICU Occupancy">Bed & ICU Occupancy</option>
                <option value="Diagnostics & Scans">Diagnostics & Scans</option>
                <option value="Pharmacy & Inventory">Pharmacy & Inventory</option>
                <option value="Compliance & Quality">Compliance & Quality</option>
              </select>
            </div>
          </div>

          {/* Grid of Report Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-xs font-extrabold text-amber-600 px-2.5 py-1 bg-amber-50 rounded-lg border border-amber-200">
                      {report.reportId}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                        report.fileFormat === 'PDF'
                          ? 'bg-rose-100 text-rose-800 border border-rose-300'
                          : report.fileFormat === 'Excel'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}>
                        {report.fileFormat} • {report.fileSize}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-navy-950 leading-snug">{report.title}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">{report.description}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold text-gray-500">Period: {report.period}</span>
                    <p className="text-[10px] text-gray-400">Generated: {report.generatedDate}</p>
                  </div>

                  <Button
                    variant="teal"
                    size="sm"
                    leftIcon={<Download className="w-3.5 h-3.5" />}
                    onClick={() => handleDownloadReport(report)}
                  >
                    Download ({report.downloadCount})
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. TAB CONTENT 2: REAL-TIME SYSTEM & DOCTOR AUDIT LOGS */}
      {activeTab === 'audit' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Filter Bar for Audit Logs */}
          <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search audit logs by actor, log ID or IP..."
                value={auditSearch}
                onChange={(e) => setAuditSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Severity Filter */}
            <select
              value={auditSeverity}
              onChange={(e) => setAuditSeverity(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-bold text-navy-950 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="All">All Severity Levels</option>
              <option value="Info">Info Level</option>
              <option value="Warning">Warning Level</option>
              <option value="Security">Security Alert</option>
            </select>

            {/* Category Filter */}
            <select
              value={auditCategory}
              onChange={(e) => setAuditCategory(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-bold text-navy-950 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="All">All Categories</option>
              <option value="OPD Consultation">OPD Consultation</option>
              <option value="Prescription Edit">Prescription Edit</option>
              <option value="Billing & Invoice">Billing & Invoice</option>
              <option value="System Access">System Access</option>
              <option value="Patient Record Update">Patient Record Update</option>
              <option value="TPA Approval">TPA Approval</option>
            </select>

            {/* Campus Filter */}
            <select
              value={auditCampus}
              onChange={(e) => setAuditCampus(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-bold text-navy-950 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="All">All Campuses</option>
              <option value="Wakad">Wakad Campus</option>
              <option value="Baner">Baner Hub</option>
              <option value="Pimpri">Pimpri Center</option>
              <option value="Hadapsar">Hadapsar Facility</option>
            </select>

            <Button
              variant="outline"
              size="sm"
              leftIcon={<Download className="w-3.5 h-3.5" />}
              onClick={handleQuickDoctorAuditExport}
            >
              Export CSV
            </Button>
          </div>

          {/* Audit Logs Table */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#070e24] text-white uppercase text-[10px] tracking-wider font-extrabold">
                  <tr>
                    <th className="p-4">Log ID</th>
                    <th className="p-4">Timestamp</th>
                    <th className="p-4">Actor & Role</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Description & IP Address</th>
                    <th className="p-4">Campus</th>
                    <th className="p-4 text-center">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 font-medium">
                  {filteredAuditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-mono font-bold text-amber-600 shrink-0">{log.logId}</td>
                      <td className="p-4 text-gray-500 whitespace-nowrap">{log.timestamp}</td>
                      <td className="p-4">
                        <p className="font-extrabold text-navy-950">{log.actorName}</p>
                        <span className="text-[10px] text-gray-500 font-bold">{log.actorRole}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-navy-900 font-bold text-[11px]">
                          {log.actionCategory}
                        </span>
                      </td>
                      <td className="p-4 space-y-0.5 max-w-sm">
                        <p className="text-navy-950 font-medium">{log.description}</p>
                        <span className="font-mono text-[10px] text-gray-400">IP: {log.ipAddress}</span>
                      </td>
                      <td className="p-4 text-gray-700 font-bold whitespace-nowrap">{log.campus}</td>
                      <td className="p-4 text-center whitespace-nowrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                          log.severity === 'Security'
                            ? 'bg-red-100 text-red-800 border border-red-300'
                            : log.severity === 'Warning'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        }`}>
                          {log.severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB CONTENT 3: CUSTOM REPORT GENERATOR WIDGET */}
      {activeTab === 'generator' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-6 max-w-3xl animate-fadeIn">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="teal" size="sm">On-Demand Export Engine</Badge>
            </div>
            <h3 className="text-xl font-black text-navy-950">Compile Custom Hospital Audit Report</h3>
            <p className="text-xs text-gray-500 font-medium">
              Select desired parameters, campus scope, date boundaries, and output file format to generate customized PDF or Excel reports instantly.
            </p>
          </div>

          <form onSubmit={handleGenerateCustomReport} className="space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-navy-900">Report Category</label>
                <select
                  value={genCategory}
                  onChange={(e) => setGenCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 font-bold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="Financial & Revenue">Financial & Revenue Reconciliation</option>
                  <option value="Clinical Operations">Clinical Operations & OPD Attendance</option>
                  <option value="Bed & ICU Occupancy">Quaternary Bed & ICU Occupancy</option>
                  <option value="Diagnostics & Scans">Radiology & Lab Diagnostic Throughput</option>
                  <option value="Pharmacy & Inventory">Pharmacy Dispensing & High-Value Inventory</option>
                  <option value="Compliance & Quality">NABH & HIPAA Data Governance Logs</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-navy-900">Campus Target Scope</label>
                <select
                  value={genCampus}
                  onChange={(e) => setGenCampus(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 font-bold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="All Campuses">All Campuses</option>
                  <option value="Wakad Main Campus">Wakad Main Campus</option>
                  <option value="Baner Specialty Hub">Baner Specialty Hub</option>
                  <option value="Pimpri Care Center">Pimpri Care Center</option>
                  <option value="Hadapsar Facility">Hadapsar Facility</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-navy-900">Start Date</label>
                <input
                  type="date"
                  value={genStartDate}
                  onChange={(e) => setGenStartDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-navy-900">End Date</label>
                <input
                  type="date"
                  value={genEndDate}
                  onChange={(e) => setGenEndDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-white font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-navy-900">Export Format</label>
                <select
                  value={genFormat}
                  onChange={(e) => setGenFormat(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 bg-gray-50 font-bold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  <option value="Excel">Excel (.xlsx)</option>
                  <option value="PDF">PDF (.pdf)</option>
                  <option value="CSV">CSV Data (.csv)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="gold"
                size="md"
                isLoading={isGenerating}
                leftIcon={<Sparkles className="w-4 h-4" />}
              >
                Compile & Download Custom Report
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
