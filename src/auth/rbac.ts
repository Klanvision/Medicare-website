export type UserRole = 'PATIENT' | 'DOCTOR' | 'HOSPITAL_STAFF' | 'ADMIN' | 'PARTNER';

export type Permission =
  // Patient Permissions
  | 'VIEW_OWN_APPOINTMENTS'
  | 'BOOK_APPOINTMENT'
  | 'VIEW_OWN_REPORTS'
  | 'VIEW_OWN_BILLING'

  // Doctor Permissions
  | 'VIEW_ASSIGNED_PATIENTS'
  | 'MANAGE_ASSIGNED_APPOINTMENTS'
  | 'WRITE_PRESCRIPTION'
  | 'ORDER_DIAGNOSTIC_TEST'

  // Hospital Staff Permissions
  | 'MANAGE_HOSPITAL_OPERATIONS'
  | 'MANAGE_ICU_BEDS'
  | 'PROCESS_TPA_CLAIMS'
  | 'UPDATE_OPD_QUEUE'

  // Admin Permissions
  | 'FULL_SYSTEM_MANAGEMENT'
  | 'MANAGE_USERS'
  | 'MANAGE_DOCTORS'
  | 'MANAGE_HOSPITALS'
  | 'MANAGE_CAMPAIGNS'
  | 'SYSTEM_SETTINGS'
  | 'VIEW_REVENUE_ANALYTICS'

  // Partner Permissions
  | 'VIEW_PARTNER_METRICS'
  | 'MANAGE_DIAGNOSTIC_REFERRALS'
  | 'VIEW_PARTNER_COMMISSIONS';

export interface RoleDefinition {
  role: UserRole;
  displayName: string;
  description: string;
  permissions: Permission[];
}

export const ROLE_DEFINITIONS: Record<UserRole, RoleDefinition> = {
  PATIENT: {
    role: 'PATIENT',
    displayName: 'Patient Portal User',
    description: 'Restricted access to personal medical records, own appointment bookings & diagnostic lab reports.',
    permissions: [
      'VIEW_OWN_APPOINTMENTS',
      'BOOK_APPOINTMENT',
      'VIEW_OWN_REPORTS',
      'VIEW_OWN_BILLING',
    ],
  },
  DOCTOR: {
    role: 'DOCTOR',
    displayName: 'Attending Physician / Specialist',
    description: 'Access to assigned patient clinical lists, OPD consultations, e-prescriptions & diagnostic orders.',
    permissions: [
      'VIEW_ASSIGNED_PATIENTS',
      'MANAGE_ASSIGNED_APPOINTMENTS',
      'WRITE_PRESCRIPTION',
      'ORDER_DIAGNOSTIC_TEST',
    ],
  },
  HOSPITAL_STAFF: {
    role: 'HOSPITAL_STAFF',
    displayName: 'Hospital Operations & ICU Staff',
    description: 'Access to bed management, casualty triage, insurance TPA pre-authorization & OPD queue updates.',
    permissions: [
      'MANAGE_HOSPITAL_OPERATIONS',
      'MANAGE_ICU_BEDS',
      'PROCESS_TPA_CLAIMS',
      'UPDATE_OPD_QUEUE',
    ],
  },
  ADMIN: {
    role: 'ADMIN',
    displayName: 'Super Administrator',
    description: 'Full un-restricted governance over doctor verification, hospital campuses, financial reports & system settings.',
    permissions: [
      'FULL_SYSTEM_MANAGEMENT',
      'MANAGE_USERS',
      'MANAGE_DOCTORS',
      'MANAGE_HOSPITALS',
      'MANAGE_CAMPAIGNS',
      'SYSTEM_SETTINGS',
      'VIEW_REVENUE_ANALYTICS',
      'MANAGE_HOSPITAL_OPERATIONS',
      'MANAGE_ICU_BEDS',
      'PROCESS_TPA_CLAIMS',
      'UPDATE_OPD_QUEUE',
      'VIEW_ASSIGNED_PATIENTS',
      'MANAGE_ASSIGNED_APPOINTMENTS',
      'WRITE_PRESCRIPTION',
      'ORDER_DIAGNOSTIC_TEST',
      'VIEW_OWN_APPOINTMENTS',
      'BOOK_APPOINTMENT',
      'VIEW_OWN_REPORTS',
      'VIEW_OWN_BILLING',
      'VIEW_PARTNER_METRICS',
      'MANAGE_DIAGNOSTIC_REFERRALS',
      'VIEW_PARTNER_COMMISSIONS',
    ],
  },
  PARTNER: {
    role: 'PARTNER',
    displayName: 'Diagnostic Partner & Health Affiliate',
    description: 'Access to permitted referral analytics, partner diagnostic bookings & commission statements.',
    permissions: [
      'VIEW_PARTNER_METRICS',
      'MANAGE_DIAGNOSTIC_REFERRALS',
      'VIEW_PARTNER_COMMISSIONS',
    ],
  },
};

/**
 * Check if a role possesses a specific permission
 */
export function hasPermission(role: UserRole, permission: Permission): boolean {
  const def = ROLE_DEFINITIONS[role];
  if (!def) return false;
  return def.permissions.includes(permission) || def.permissions.includes('FULL_SYSTEM_MANAGEMENT');
}

/**
 * Check if a role matches any of the required allowed roles
 */
export function hasAnyRole(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  return allowedRoles.includes(userRole) || userRole === 'ADMIN';
}

/**
 * Simulated Backend Authorization Token Generator (JWT Claims Payload Architecture)
 */
export function generateBackendAuthHeader(role: UserRole, userId: string): {
  authorization: string;
  claimsPayload: {
    sub: string;
    role: UserRole;
    permissions: Permission[];
    issuedAt: string;
    expiresAt: string;
  };
} {
  const def = ROLE_DEFINITIONS[role];
  const now = new Date();
  const expires = new Date(now.getTime() + 8 * 3600 * 1000); // 8 Hours

  const claims = {
    sub: userId,
    role,
    permissions: def ? def.permissions : [],
    issuedAt: now.toISOString(),
    expiresAt: expires.toISOString(),
  };

  const token = `Bearer vhn_jwt_${role.toLowerCase()}_${btoa(JSON.stringify(claims)).substring(0, 32)}`;

  return {
    authorization: token,
    claimsPayload: claims,
  };
}
