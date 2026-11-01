import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  Info, 
  ArrowRight, 
  ShieldAlert,
  Sparkles 
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/ui/Button';
import { useAuth, DEMO_OWNER } from '../context/AuthContext';

export default function OwnerLogin() {
  const { currentUser, ownerLogin } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to respective dashboard
  useEffect(() => {
    if (currentUser) {
      if (currentUser.role === 'owner') {
        navigate('/owner/dashboard', { replace: true });
      } else if (currentUser.role === 'student') {
        navigate('/student/dashboard', { replace: true });
      }
    }
  }, [currentUser, navigate]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    stationActive: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const fillDemoOwner = () => {
    setFormData({
      email: DEMO_OWNER.email,
      password: DEMO_OWNER.password,
      stationActive: true,
    });
    setErrors({});
    setFeedback(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback(null);
    const formErrors = {};

    // Validate Owner Email
    if (!formData.email.trim()) {
      formErrors.email = 'Owner Email ID is required.';
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = 'Please enter a valid email address (e.g. owner@xerox.com).';
    }

    // Validate Password
    if (!formData.password) {
      formErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setFeedback({
        type: 'error',
        message: 'Please resolve the highlighted validation errors.',
      });
      return;
    }

    // Attempt Owner Login via AuthContext
    const result = ownerLogin(formData.email, formData.password);
    if (!result.success) {
      setFeedback({
        type: 'error',
        message: result.error,
      });
      return;
    }

    // Success -> Navigate to Owner Dashboard
    navigate('/owner/dashboard');
  };

  return (
    <Card className="border border-slate-200/90 shadow-lg p-6 sm:p-8">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60 mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>Shop Operator &amp; Management Portal</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Xerox Shop Owner Login</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Authorized access to manage campus print queues, jobs, and machines
        </p>
      </div>

      {/* Demo Owner Credentials Box */}
      <div className="mb-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 shadow-2xs">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-bold flex items-center gap-1.5 text-amber-900">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Frontend Demo Owner Account
          </span>
          <button
            type="button"
            onClick={fillDemoOwner}
            className="text-[11px] font-bold text-amber-900 bg-white hover:bg-amber-100 border border-amber-300 px-2 py-0.5 rounded shadow-2xs transition-colors shrink-0"
          >
            Auto-Fill
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-amber-900">
          <div><span className="text-amber-700 font-medium">Email:</span> {DEMO_OWNER.email}</div>
          <div><span className="text-amber-700 font-medium">Password:</span> {DEMO_OWNER.password}</div>
        </div>
      </div>

      {/* Info / Error Feedback Notice */}
      {feedback && (
        <div
          role="alert"
          className={`mb-5 p-3 rounded-lg text-xs flex items-start gap-2.5 ${
            feedback.type === 'error'
              ? 'bg-rose-50 border border-rose-200 text-rose-700'
              : 'bg-slate-100 border border-slate-200 text-slate-800'
          }`}
        >
          {feedback.type === 'error' ? (
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
          ) : (
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-slate-600" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Owner Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Email Field */}
        <div>
          <label htmlFor="owner-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Owner Email ID <span className="text-rose-500">*</span>
          </label>
          <div className="relative rounded-lg shadow-2xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              id="owner-email"
              type="email"
              placeholder="e.g. owner@xerox.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              className={`block w-full rounded-lg border py-2.5 pl-10 pr-3.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                  : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:ring-slate-800/20'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="owner-password" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Password <span className="text-rose-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400">Default: Owner@123</span>
          </div>
          <div className="relative rounded-lg shadow-2xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              id="owner-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (errors.password) setErrors({ ...errors, password: '' });
              }}
              className={`block w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.password
                  ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                  : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:ring-slate-800/20'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.password}</span>
            </p>
          )}
        </div>

        {/* Workstation Option */}
        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.stationActive}
              onChange={(e) => setFormData({ ...formData, stationActive: e.target.checked })}
              className="w-4 h-4 rounded border-slate-300 text-slate-800 focus:ring-slate-700"
            />
            <span>Keep workstation session open</span>
          </label>
        </div>

        {/* Submit Button */}
        <Button variant="secondary" type="submit" size="lg" className="w-full justify-center shadow-md mt-2">
          <span>Sign In as Shop Owner</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Button>
      </form>
    </Card>
  );
}
