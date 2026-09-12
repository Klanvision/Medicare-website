import React from 'react';
import { ShieldAlert, ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { UserRole, Permission, hasPermission, hasAnyRole } from '@/auth/rbac';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';

export interface RoleGuardProps {
  allowedRoles?: UserRole[];
  requiredPermission?: Permission;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const RoleGuard: React.FC<RoleGuardProps> = ({
  allowedRoles,
  requiredPermission,
  children,
  fallback,
}) => {
  const navigate = useNavigate();
  const { currentRole } = useAuth();

  let isAllowed = true;

  if (allowedRoles && allowedRoles.length > 0) {
    isAllowed = hasAnyRole(currentRole, allowedRoles);
  }

  if (isAllowed && requiredPermission) {
    isAllowed = hasPermission(currentRole, requiredPermission);
  }

  if (!isAllowed) {
    if (fallback) return <>{fallback}</>;

    return (
      <div className="max-w-3xl mx-auto p-8 my-12 bg-white rounded-3xl border-2 border-red-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-inner">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <Badge variant="danger" size="sm">403 Access Denied</Badge>
          <h2 className="text-2xl font-black text-navy-950">Unauthorized Role Access</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Your current role (<strong className="text-red-700">{currentRole}</strong>) does not have authorization to view this section or execute this administrative action.
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-700 max-w-lg mx-auto space-y-1 text-left">
          <p className="font-extrabold text-navy-950 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>Backend Security Policy Enforcement:</span>
          </p>
          <p>Allowed Roles: {allowedRoles?.join(', ') || 'ADMIN'}</p>
          {requiredPermission && <p>Required Permission Token: <code className="font-mono text-teal-700 font-bold">{requiredPermission}</code></p>}
        </div>

        <div className="pt-2 flex justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
          <Button
            variant="teal"
            size="sm"
            onClick={() => navigate('/')}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RoleGuard;
