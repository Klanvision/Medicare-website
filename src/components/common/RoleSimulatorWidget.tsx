import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Stethoscope, Building, Users, Key, ChevronDown, ChevronUp, Copy } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { UserRole, ROLE_DEFINITIONS } from '@/auth/rbac';
import { Badge } from '@/components/common/Badge';
import { useToast } from '@/hooks/useToast';

export const RoleSimulatorWidget: React.FC = () => {
  const { currentRole, currentPermissions, switchRoleDemo, getAuthHeader } = useAuth();
  const { success } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const rolesList: { role: UserRole; label: string; icon: any }[] = [
    { role: 'PATIENT', label: '1. Patient', icon: Users },
    { role: 'DOCTOR', label: '2. Doctor', icon: Stethoscope },
    { role: 'HOSPITAL_STAFF', label: '3. Hospital Staff', icon: Building },
    { role: 'ADMIN', label: '4. Admin', icon: ShieldCheck },
    { role: 'PARTNER', label: '5. Partner', icon: UserCheck },
  ];

  const handleCopyHeader = () => {
    navigator.clipboard.writeText(getAuthHeader());
    success('Backend Authorization Header copied to clipboard!');
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-teal-500/40 p-6 shadow-lg space-y-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-navy-950 text-amber-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="teal" size="sm">Phase 23 RBAC System</Badge>
              <span className="text-xs font-black text-navy-950">Active Role: <span className="text-teal-600">{currentRole}</span></span>
            </div>
            <p className="text-xs text-gray-500 font-medium">Click to inspect permissions, simulated backend JWT claims & switch roles</p>
          </div>
        </div>
        <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-navy-900">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="pt-4 border-t border-gray-200 space-y-6 text-xs">
          {/* Role Switcher Buttons */}
          <div className="space-y-2">
            <label className="font-extrabold text-navy-950 uppercase tracking-wider text-[10px]">
              Switch Role Architecture Simulator:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {rolesList.map((item) => {
                const Icon = item.icon;
                const isSelected = currentRole === item.role;
                return (
                  <button
                    key={item.role}
                    type="button"
                    onClick={() => switchRoleDemo(item.role)}
                    className={`p-3 rounded-2xl border text-left font-bold transition-all flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-navy-950 text-white border-amber-400 shadow-md scale-105'
                        : 'bg-gray-50 text-navy-900 border-gray-200 hover:border-teal-500'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-teal-600'}`} />
                    <span className="text-[11px] truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Role Overview & Permissions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <div className="space-y-1">
              <span className="font-black text-navy-950 block">Role Description ({ROLE_DEFINITIONS[currentRole].displayName}):</span>
              <p className="text-gray-600 leading-relaxed">{ROLE_DEFINITIONS[currentRole].description}</p>
            </div>
            <div className="space-y-1">
              <span className="font-black text-navy-950 block">Granted Permissions ({currentPermissions.length}):</span>
              <div className="flex flex-wrap gap-1">
                {currentPermissions.map((perm) => (
                  <span key={perm} className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[9px] font-extrabold font-mono">
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Simulated Backend Auth Header */}
          <div className="space-y-1 bg-[#060c20] text-white p-4 rounded-2xl border border-navy-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-amber-400 flex items-center gap-1">
                <Key className="w-3.5 h-3.5 text-amber-400" />
                <span>Simulated Backend Authorization Header (JWT Token)</span>
              </span>
              <button
                type="button"
                onClick={handleCopyHeader}
                className="text-[10px] text-teal-400 hover:underline flex items-center gap-1 font-bold"
              >
                <Copy className="w-3 h-3" />
                <span>Copy Header</span>
              </button>
            </div>
            <p className="font-mono text-[11px] text-teal-300 break-all pt-1 select-all">
              {getAuthHeader()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleSimulatorWidget;
