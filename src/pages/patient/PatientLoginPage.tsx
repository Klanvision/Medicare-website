import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  Lock,
  Phone,
  KeyRound,
  UserCheck,
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2,
  Copy,
  User,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/components/common/Logo';
import { useToast } from '@/hooks/useToast';

export const PatientLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { login, demoLogin } = useAuth();

  // Auth Mode: 'mobile' (OTP) | 'password'
  const [authMode, setAuthMode] = useState<'mobile' | 'password'>('mobile');

  // Form Fields
  const [mobileNumber, setMobileNumber] = useState('9876543210');
  const [otpCode, setOtpCode] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [otpTimer, setOtpTimer] = useState(30);

  // OTP Countdown Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOtpSent && otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, otpTimer]);

  // Handle Send OTP
  const handleSendOtp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (mobileNumber.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setErrorMessage('');
    setIsOtpSent(true);
    setOtpTimer(30);
    toast.info(`Verification OTP 748291 sent to +91 ${mobileNumber}`, 'OTP Dispatched');
  };

  const handleAutoFillOtp = () => {
    setOtpCode('748291');
    toast.success('Demo OTP 748291 loaded into form!', 'Auto-filled');
  };

  // Handle Submit Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      if (authMode === 'mobile') {
        if (!otpCode || otpCode.length < 4) {
          setErrorMessage('Please enter the 6-digit OTP code sent to your mobile (e.g. 748291).');
          setIsLoading(false);
          return;
        }
        demoLogin();
        toast.success('Successfully authenticated via Mobile OTP!', 'Welcome to MEDICARE Patient Vault');
        navigate('/patient/dashboard');
      } else {
        const success = await login(email || 'rahul.sharma@example.com', password || 'password123');
        if (success) {
          toast.success('Welcome back to MEDICARE Patient Portal!', 'Login Successful');
          navigate('/patient/dashboard');
        } else {
          setErrorMessage('Invalid Email/UHID or password. Try quick demo login below.');
        }
      }
    } catch {
      setErrorMessage('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    demoLogin();
    toast.success('Logged in with Demo Patient Account (Rahul Sharma - UHID: MED-2026-88941)', 'Patient Portal Active');
    navigate('/patient/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F4F9FD] font-sans text-slate-800 flex flex-col justify-between relative overflow-hidden py-8 px-4 sm:px-6">
      
      {/* Background Ambient Sky Blue Glows */}
      <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-[#00529B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <header className="max-w-xl mx-auto w-full flex items-center justify-between z-10 py-2">
        <Link to="/" className="inline-block transform hover:scale-105 transition-transform">
          <Logo variant="dark" size="md" showTagline={true} />
        </Link>
        <Link to="/login" className="text-xs font-bold text-[#00529B] hover:underline flex items-center gap-1">
          <span>Unified Login Console</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-lg mx-auto w-full flex-grow flex flex-col justify-center relative z-10 my-auto">
        
        {/* CARD CONTAINER */}
        <div className="bg-white rounded-3xl border border-sky-200/80 shadow-xl shadow-sky-900/5 overflow-hidden">
          
          {/* Top Security Strip */}
          <div className="bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between text-[11px] font-bold">
            <span className="flex items-center gap-1.5 text-sky-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit Encrypted Health Vault
            </span>
            <span className="text-slate-400 font-mono text-[9px] uppercase">
              ABDM / NHDM Compliant
            </span>
          </div>

          {/* Header Title */}
          <div className="p-6 sm:p-8 text-center border-b border-slate-100 bg-gradient-to-b from-sky-50/70 via-sky-50/20 to-white space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 text-[#00529B] flex items-center justify-center mx-auto shadow-2xs">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              MEDICARE Patient Sign In
            </h2>
            <p className="text-xs text-slate-500 font-semibold max-w-xs mx-auto">
              Access medical history, OPD appointments, prescriptions & lab reports
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 space-y-5">
            
            {/* Login Method Segmented Toggle */}
            <div className="flex items-center justify-between bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80 text-xs">
              <span className="font-extrabold text-slate-600 pl-3 text-[11px]">Sign In Method:</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => { setAuthMode('mobile'); setIsOtpSent(false); setErrorMessage(''); }}
                  className={`px-3.5 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                    authMode === 'mobile'
                      ? 'bg-[#00529B] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  Mobile OTP
                </button>
                <button
                  type="button"
                  onClick={() => { setAuthMode('password'); setErrorMessage(''); }}
                  className={`px-3.5 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                    authMode === 'password'
                      ? 'bg-[#00529B] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  Email & Pass
                </button>
              </div>
            </div>

            {/* Error Alert */}
            {errorMessage && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* LIVE OTP CODE BANNER */}
            {authMode === 'mobile' && isOtpSent && (
              <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#00529B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00529B]" />
                    Live Demo OTP: <strong className="font-mono text-slate-900 tracking-widest bg-white px-2 py-0.5 rounded border border-sky-300">748291</strong>
                  </span>
                  <button
                    type="button"
                    onClick={handleAutoFillOtp}
                    className="px-2.5 py-1 rounded-lg bg-[#00529B] text-white font-extrabold text-[11px] shadow-2xs hover:bg-[#00407A] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Auto-Fill OTP</span>
                  </button>
                </div>
                <div className="text-[11px] text-slate-600 flex items-center justify-between font-semibold">
                  <span>Resend in: {otpTimer}s</span>
                  {otpTimer === 0 && (
                    <button type="button" onClick={() => handleSendOtp()} className="underline text-[#00529B] font-bold hover:text-slate-900 cursor-pointer">
                      Resend OTP Code
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === 'mobile' ? (
                <>
                  {!isOtpSent ? (
                    <div className="space-y-3">
                      <label className="block text-xs font-extrabold text-slate-700">10-Digit Mobile Number *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-xs font-black text-slate-500 border-r border-slate-300 pr-2">+91</span>
                        <input
                          type="tel"
                          maxLength={10}
                          required
                          placeholder="98765 43210"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-16 pr-4 py-3.5 text-xs text-slate-900 font-extrabold focus:bg-white focus:border-[#00529B] focus:outline-none transition-all"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleSendOtp()}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00529B] to-[#003B70] hover:from-[#00407A] hover:to-[#002B52] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Send Verification OTP (748291)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-slate-700">OTP Sent to +91 {mobileNumber}</span>
                        <button
                          type="button"
                          onClick={() => setIsOtpSent(false)}
                          className="text-[#00529B] font-extrabold hover:underline"
                        >
                          Change Number
                        </button>
                      </div>
                      <div className="relative">
                        <KeyRound className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                        <input
                          type="text"
                          maxLength={6}
                          required
                          placeholder="Enter 6-Digit OTP (e.g. 748291)"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-slate-900 font-black tracking-widest focus:bg-white focus:border-[#00529B] focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00529B] to-[#003B70] hover:from-[#00407A] hover:to-[#002B52] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                      >
                        {isLoading ? 'Verifying OTP...' : 'Verify OTP & Sign In to Vault'}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">Registered Email or UHID</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="rahul.sharma@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-slate-900 font-semibold focus:bg-white focus:border-[#00529B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">Password</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-11 pr-10 py-3.5 text-xs text-slate-900 font-semibold focus:bg-white focus:border-[#00529B] focus:outline-none"
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00529B] to-[#003B70] hover:from-[#00407A] hover:to-[#002B52] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {isLoading ? 'Authenticating Vault...' : 'Sign In to Patient Vault'}
                  </button>
                </div>
              )}
            </form>

          </div>

          {/* Quick Demo Access Section inside Card */}
          <div className="p-6 bg-sky-50/60 border-t border-sky-100 space-y-3 text-center">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-sky-200/80 w-full" />
              <span className="bg-sky-100/90 px-3 py-1 rounded-full text-[10px] font-black text-[#00529B] uppercase tracking-widest whitespace-nowrap border border-sky-200/80">
                1-Click Instant Demo Login
              </span>
              <div className="border-t border-sky-200/80 w-full" />
            </div>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-sky-100/80 text-[#00529B] font-extrabold text-xs flex items-center justify-center gap-2 border border-sky-200 shadow-2xs hover:shadow-md transition-all cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-[#00529B]" />
              <span>Demo Patient Login (Rahul Sharma • UHID: MED-2026-88941)</span>
            </button>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="max-w-lg mx-auto w-full pt-4 text-center text-xs text-slate-500 font-medium relative z-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between">
          <p>© 2026 MEDICARE Health Systems.</p>
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
