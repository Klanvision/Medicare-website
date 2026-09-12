import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_PATIENT_PROFILE, PatientProfile } from '@/data/patientData';
import { UserRole, Permission, ROLE_DEFINITIONS, generateBackendAuthHeader } from '@/auth/rbac';

export interface AdminStaffUser {
  id: string;
  staffId: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Hospital Manager' | 'Doctor' | 'Staff';
  department: string;
  avatar?: string;
}

export const DEFAULT_ADMIN_STAFF: AdminStaffUser = {
  id: 'usr-admin-1',
  staffId: 'MED-ADM-001',
  name: 'Suresh Kulkarni',
  email: 'admin@medicare.com',
  role: 'Super Admin',
  department: 'Quaternary Hospital Operations',
};

interface AuthContextType {
  // Patient Auth
  user: PatientProfile | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  demoLogin: () => void;
  logout: () => void;

  // Staff / Admin Auth
  adminUser: AdminStaffUser | null;
  isAdminAuthenticated: boolean;
  adminLogin: (staffIdOrEmail: string, pass: string) => Promise<boolean>;
  adminLogout: () => void;

  // Role-Based Access Architecture (Phase 23)
  currentRole: UserRole;
  currentPermissions: Permission[];
  switchRoleDemo: (role: UserRole) => void;
  getAuthHeader: () => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Patient State
  const [user, setUser] = useState<PatientProfile | null>(() => {
    const saved = localStorage.getItem('vighnaharta_patient_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Admin / Staff State
  const [adminUser, setAdminUser] = useState<AdminStaffUser | null>(() => {
    const savedAdmin = localStorage.getItem('vighnaharta_admin_staff');
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  // Active Role State for RBAC System
  const [activeRole, setActiveRole] = useState<UserRole>(() => {
    const savedRole = localStorage.getItem('vighnaharta_active_role') as UserRole;
    if (savedRole) return savedRole;
    if (adminUser) return 'ADMIN';
    if (user) return 'PATIENT';
    return 'PATIENT';
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('vighnaharta_patient_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('vighnaharta_patient_user');
    }
  }, [user]);

  useEffect(() => {
    if (adminUser) {
      localStorage.setItem('vighnaharta_admin_staff', JSON.stringify(adminUser));
    } else {
      localStorage.removeItem('vighnaharta_admin_staff');
    }
  }, [adminUser]);

  // Patient Login
  const login = async (email: string, pass: string): Promise<boolean> => {
    if (email.trim().length > 0 && pass.trim().length >= 4) {
      const loggedUser = { ...MOCK_PATIENT_PROFILE, email };
      setUser(loggedUser);
      return true;
    }
    return false;
  };

  const demoLogin = () => {
    setUser(MOCK_PATIENT_PROFILE);
  };

  const logout = () => {
    setUser(null);
  };

  // Staff / Admin Login
  const adminLogin = async (staffIdOrEmail: string, pass: string): Promise<boolean> => {
    if (staffIdOrEmail.trim().length > 0 && pass.trim().length >= 4) {
      const loggedStaff: AdminStaffUser = {
        ...DEFAULT_ADMIN_STAFF,
        email: staffIdOrEmail.includes('@') ? staffIdOrEmail : DEFAULT_ADMIN_STAFF.email,
        staffId: !staffIdOrEmail.includes('@') ? staffIdOrEmail : DEFAULT_ADMIN_STAFF.staffId,
      };
      setAdminUser(loggedStaff);
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setAdminUser(null);
    setActiveRole('PATIENT');
  };

  const switchRoleDemo = (role: UserRole) => {
    setActiveRole(role);
    localStorage.setItem('vighnaharta_active_role', role);
  };

  const getAuthHeader = (): string => {
    const currentUserId = user?.uhid || adminUser?.id || 'vhn_anonymous_user';
    const { authorization } = generateBackendAuthHeader(activeRole, currentUserId);
    return authorization;
  };

  const currentPermissions = ROLE_DEFINITIONS[activeRole]?.permissions || [];

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        demoLogin,
        logout,
        adminUser,
        isAdminAuthenticated: !!adminUser,
        adminLogin,
        adminLogout,
        currentRole: activeRole,
        currentPermissions,
        switchRoleDemo,
        getAuthHeader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
