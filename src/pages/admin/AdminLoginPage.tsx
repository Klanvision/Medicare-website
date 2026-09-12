import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  LockKeyhole, Eye, EyeOff, ShieldCheck, ShieldAlert, ArrowLeft,
  Building, CheckCircle2, KeyRound, Sparkles, Fingerprint, UserCheck,
  Building2, ArrowRight, Activity, Shield
} from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/useToast';

interface AdminDemoPersona {
  name: string;
  roleTitle: string;
  staffId: string;
  email: string;
  pass: string;
  badgeColor: string;
}

const ADMIN_PERSONAS: AdminDemoPersona[] = [
  {
    name: 'Suresh Kulkarni',
    roleTitle: 'Hospital Administrator / COO',
    staffId: 'MED-ADM-001',
    email: 'admin@medicare.com',
    pass: 'admin123',
    badgeColor: 'bg-sky-100 text-[#00529B] border-sky-300',
  },
  {
    name: 'Dr. Ananya Verma',
    roleTitle: 'Chief Medical Officer / OPD Lead',
    staffId: 'MED-DOC-401',
    email: 'doc.verma@medicare.com',
    pass: 'doctor123',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  {
    name: 'Priya Nair',
    roleTitle: 'Emergency Desk Triage Lead',
    staffId: 'MED-NUR-402',
    email: 'priya.nair@medicare.com',
    pass: 'staff123',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
  },
];

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { adminLogin } = useAuth();
  const { success, error: toastError, info } = useToast();

  const [staffIdOrEmail, setStaffIdOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Target redirect path after login
  const from = (location.state as any)?.from || '/admin';

  const handleStaffLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    if (!staffIdOrEmail.trim()) {
      setLoginError('Please enter your Email or Staff ID.');
      return;
    }
    if (!password.trim() || password.length < 4) {
      setLoginError('Invalid Staff ID or password. Please try again.');
      return;
    }

    setIsLoading(true);
    try {
      const ok = await adminLogin(staffIdOrEmail, password);
      setIsLoading(false);
      if (ok) {
        success('Staff Authentication Successful. Welcome to MEDICARE Admin Portal v2.6');
        navigate(from, { replace: true });
      } else {
        setLoginError('Invalid Staff ID or password. Please try again.');
        toastError('Invalid Staff ID or password. Please try again.', 'Authentication Failed');
      }
    } catch {
      setIsLoading(false);
      setLoginError('Unable to sign in right now. Please try again later.');
    }
  };

  const handleFillDemoCredentials = (persona?: AdminDemoPersona) => {
    const targetPersona = persona || ADMIN_PERSONAS[0];
    setStaffIdOrEmail(targetPersona.staffId);
    setPassword(targetPersona.pass);
    setLoginError(null);
    info(`Demo Staff Credentials Auto-filled for ${targetPersona.name}`);
  };

  const handleInstantAdminLogin = async (persona: AdminDemoPersona) => {
    setIsLoading(true);
    setLoginError(null);
    try {
      const ok = await adminLogin(persona.staffId, persona.pass);
      setIsLoading(false);
      if (ok) {
        success(`Logged in as ${persona.name} (${persona.roleTitle})`);
        navigate(from, { replace: true });
      }
    } catch {
      setIsLoading(false);
      toastError('Login failed for demo account');
    }
  };

  const handleSimulateBadgeScan = () => {
    setIsScanning(true);
    info('Scanning RFID Staff Badge & TouchID...', 'Biometric Gate');
    setTimeout(() => {
      setIsScanning(false);
      adminLogin('MED-ADM-001', 'admin123');
      success('RFID Staff Passcode Verified! Welcome Administrator.', 'Badge Scan Approved');
      navigate(from, { replace: true });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F4F9FD] text-slate-800 flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Ambient Sky Blue Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00529B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-10">
        <Logo variant="dark" size="md" showTagline={true} />
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#00529B] hover:underline transition-colors bg-white px-3.5 py-1.5 rounded-xl border border-sky-200 shadow-2xs"
          >
            <Shield className="w-4 h-4 text-[#00529B]" />
            <span>Unified Sign In</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Hospital Website</span>
          </Link>
        </div>
      </div>

      {/* Center Section */}
      <div className="w-full max-w-4xl mx-auto my-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Info & Persona Selector Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00529B] bg-sky-100 border border-sky-200 px-3 py-1 rounded-full inline-block">
              Staff & Operations Security Gate
            </span>
            <h2 className="text-2xl font-black text-slate-900">MEDICARE Administration</h2>
            <p className="text-xs text-slate-600 font-semibold">
              Secure authentication for clinical leads, department managers & system administrators.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Quick Staff Demo Personas:
            </span>
            {ADMIN_PERSONAS.map((persona) => (
              <div
                key={persona.staffId}
                className="p-3 bg-white border border-sky-200/90 hover:border-[#00529B] rounded-2xl space-y-2 transition-all shadow-2xs group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-slate-900 group-hover:text-[#00529B] transition-colors">
                      {persona.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-semibold">{persona.roleTitle}</p>
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${persona.badgeColor}`}>
                    {persona.staffId}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleInstantAdminLogin(persona)}
                    className="flex-1 py-1 px-2.5 rounded-xl bg-[#00529B] hover:bg-[#00407A] text-white text-[11px] font-extrabold shadow-2xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Instant Login</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFillDemoCredentials(persona)}
                    className="py-1 px-2 rounded-xl bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Fill Input
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-xl shadow-sky-900/5 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-100 border border-sky-200 text-[#00529B] flex items-center justify-center shadow-2xs">
                  <LockKeyhole className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Staff Sign In</h3>
                  <p className="text-xs text-slate-500 font-semibold">Verify credentials or scan security badge</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSimulateBadgeScan}
                disabled={isScanning}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#00529B] border border-sky-200 text-xs font-bold transition-all cursor-pointer"
              >
                <Fingerprint className={`w-4 h-4 text-[#00529B] ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'Scanning Badge...' : 'Scan Badge'}</span>
              </button>
            </div>

            {/* Error Alert */}
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-bold flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleStaffLogin} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-slate-700">Staff ID or Admin Email *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MED-ADM-001 or admin@medicare.com"
                  value={staffIdOrEmail}
                  onChange={(e) => setStaffIdOrEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00529B] focus:bg-white text-sm font-extrabold"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="font-extrabold text-slate-700">Password *</label>
                  <button
                    type="button"
                    onClick={() => info('Please contact your Hospital IT Administrator for password reset.')}
                    className="text-[11px] text-[#00529B] hover:underline font-extrabold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00529B] focus:bg-white text-sm font-extrabold"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00529B] to-[#003B70] hover:from-[#00407A] hover:to-[#002B52] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                {isLoading ? 'Authenticating Staff Access...' : 'Sign In to MEDICARE Admin Portal'}
              </button>
            </form>

            {/* Quick Fill Button */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span>Demo Passcode: <strong className="text-[#00529B] font-mono">admin123</strong></span>
              <button
                type="button"
                onClick={() => handleFillDemoCredentials()}
                className="text-[#00529B] font-extrabold hover:underline cursor-pointer"
              >
                Auto-fill Admin Passcode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 border-t border-slate-200 pt-4 z-10">
        <p>© 2026 MEDICARE Health Systems.</p>
        <div className="flex items-center gap-4 text-slate-600 font-semibold text-[11px]">
          <span>Security Protocol 2.6</span>
          <span>•</span>
          <Link to="/contact" className="hover:text-[#00529B]">IT Helpdesk</Link>
        </div>
      </footer>
    </div>
  );
};
