import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  Lock,
  ArrowRight,
  UserCheck,
  AlertCircle,
  Eye,
  EyeOff,
  Fingerprint,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/components/common/Logo';
import { useToast } from '@/hooks/useToast';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { login, demoLogin, adminLogin } = useAuth();

  // Form Fields
  const [emailOrId, setEmailOrId] = useState('rahul.sharma@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isBiometricScanning, setIsBiometricScanning] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Form Submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrId.trim()) {
      setErrorMessage('Please enter your Email, Mobile Number, or User ID.');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      if (emailOrId.toLowerCase().includes('admin') || emailOrId.toLowerCase().includes('staff') || emailOrId.toUpperCase().includes('MED-ADM')) {
        const ok = await adminLogin(emailOrId, password);
        if (ok) {
          toast.success('Welcome back Administrator to MEDICARE Portal!', 'Sign In Successful');
          navigate('/admin');
        } else {
          setErrorMessage('Invalid Staff ID or Password.');
        }
      } else {
        const ok = await login(emailOrId, password);
        if (ok) {
          toast.success('Welcome back to MEDICARE Portal!', 'Sign In Successful');
          navigate('/patient/dashboard');
        } else {
          setErrorMessage('Invalid Email/User ID or Password.');
        }
      }
    } catch {
      setErrorMessage('Authentication failed. Please check your network and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // 1-Click Instant Demo Login
  const handleInstantDemoLogin = () => {
    demoLogin();
    toast.success('Logged in with Demo Account (Rahul Sharma)', 'Demo Portal Active');
    navigate('/patient/dashboard');
  };

  // Simulate Biometric Auth
  const handleSimulateBiometric = () => {
    setIsBiometricScanning(true);
    toast.info('Scanning TouchID / FaceID...', 'Biometric Gate');
    setTimeout(() => {
      setIsBiometricScanning(false);
      demoLogin();
      toast.success('Biometric Identity Verified! Welcome to MEDICARE.', 'TouchID Approved');
      navigate('/patient/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F4F9FD] font-sans text-slate-800 flex flex-col justify-between relative overflow-hidden py-8 px-4 sm:px-6">
      {/* Subtle Background Sky Blue Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#00529B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* TOP HEADER */}
      <header className="max-w-md mx-auto w-full flex items-center justify-between z-10 py-2">
        <Link to="/" className="flex items-center gap-3 group transform hover:scale-105 transition-transform">
          <Logo variant="dark" size="lg" showTagline={true} />
        </Link>

        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#00529B] text-xs font-bold shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          256-Bit SSL Encrypted
        </span>
      </header>

      {/* CENTERED MASTER LOGIN CARD */}
      <main className="max-w-md mx-auto w-full flex-grow flex flex-col justify-center relative z-10 my-auto">
        <div className="bg-white rounded-3xl border border-sky-200/80 shadow-xl shadow-sky-900/5 overflow-hidden">
          
          {/* CARD TOP SECURITY STRIP */}
          <div className="bg-[#00529B] text-white px-6 py-2.5 flex items-center justify-between text-[11px] font-bold">
            <span className="flex items-center gap-2 text-sky-200 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              MEDICARE Healthcare Portal
            </span>
            <button
              type="button"
              onClick={handleSimulateBiometric}
              disabled={isBiometricScanning}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-[10px] font-black tracking-wide transition-all cursor-pointer"
            >
              <Fingerprint className={`w-3.5 h-3.5 text-sky-200 ${isBiometricScanning ? 'animate-spin' : ''}`} />
              <span>{isBiometricScanning ? 'Scanning...' : 'TouchID Auth'}</span>
            </button>
          </div>

          {/* CARD HEADER */}
          <div className="p-6 sm:p-8 text-center border-b border-slate-100 bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-white space-y-2">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Sign In to MEDICARE
            </h2>
            <p className="text-xs text-slate-500 font-semibold max-w-xs mx-auto">
              Enter your registered email address, mobile number, or account ID
            </p>
          </div>

          {/* FORM BODY */}
          <div className="p-6 sm:p-8 space-y-5">
            {/* ERROR ALERT */}
            {errorMessage && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* EMAIL / ID FIELD */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-700">
                  Email, Mobile, or User ID *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. rahul.sharma@example.com"
                    value={emailOrId}
                    onChange={(e) => setEmailOrId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-slate-900 font-extrabold focus:bg-white focus:border-[#00529B] focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all"
                  />
                </div>
              </div>

              {/* PASSWORD FIELD */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-extrabold text-slate-700">
                    Password *
                  </label>
                  <span className="text-[10px] text-slate-500">
                    Demo Pass: <strong className="text-[#00529B] font-mono">password123</strong>
                  </span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-10 py-3.5 text-xs text-slate-900 font-extrabold focus:bg-white focus:border-[#00529B] focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME & FORGOT PASSWORD */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 font-extrabold text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 bg-white text-[#00529B] focus:ring-[#00529B]"
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => toast.info('For password resets, please contact MEDICARE Support at support@medicare.com')}
                  className="text-[#00529B] font-extrabold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00529B] to-[#003B70] hover:from-[#00407A] hover:to-[#002B52] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-sky-900/15 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isLoading ? 'Authenticating...' : 'Sign In to Portal'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>

          {/* 1-CLICK INSTANT DEMO LOGIN SECTION */}
          <div className="p-6 bg-sky-50/60 border-t border-sky-100 space-y-3 text-center">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-sky-200/80 w-full" />
              <span className="bg-sky-100/90 px-3 py-1 rounded-full text-[10px] font-black text-[#00529B] uppercase tracking-widest whitespace-nowrap border border-sky-200/80">
                Quick One-Click Demo Access
              </span>
              <div className="border-t border-sky-200/80 w-full" />
            </div>

            <button
              type="button"
              onClick={handleInstantDemoLogin}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-sky-100/80 text-[#00529B] font-extrabold text-xs flex items-center justify-center gap-2 border border-sky-200 shadow-2xs hover:shadow-md transition-all cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-[#00529B]" />
              <span>1-Click Instant Demo Login (Rahul Sharma)</span>
            </button>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="max-w-md mx-auto w-full pt-4 text-center text-xs text-slate-500 font-medium relative z-10 border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 MEDICARE Health Systems. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600 font-semibold text-[11px]">
            <Link to="/privacy" className="hover:text-[#00529B]">Privacy</Link>
            <Link to="/terms" className="hover:text-[#00529B]">Terms</Link>
            <Link to="/contact" className="hover:text-[#00529B]">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
