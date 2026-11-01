import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Lock, 
  Mail, 
  User, 
  Building2, 
  Phone, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  Info, 
  ArrowRight, 
  UserPlus, 
  LogIn,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/ui/Button';
import { useAuth, DEMO_STUDENT } from '../context/AuthContext';

export default function StudentLogin() {
  const { currentUser, studentLogin, studentRegister } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to respective dashboard
  useEffect(() => {
    if (currentUser) {
      if (currentUser.role === 'student') {
        navigate('/student/dashboard', { replace: true });
      } else if (currentUser.role === 'owner') {
        navigate('/owner/dashboard', { replace: true });
      }
    }
  }, [currentUser, navigate]);

  // 'login' = ALREADY REGISTERED | 'register' = NEW USER
  const [activeTab, setActiveTab] = useState('login');

  // Login Form State
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginFeedback, setLoginFeedback] = useState(null);

  // Registration Form State
  const [regData, setRegData] = useState({
    fullName: '',
    email: '',
    department: '',
    mobile: '',
    password: '',
  });
  const [regErrors, setRegErrors] = useState({});
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [regFeedback, setRegFeedback] = useState(null);

  // Common departments in college
  const departments = [
    'Computer Science & Engineering',
    'Information Technology',
    'Electronics & Communication Engineering',
    'Electrical & Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Artificial Intelligence & Data Science',
    'Biotechnology',
    'Business Administration (MBA)',
    'Computer Applications (MCA)',
    'Science & Humanities',
    'Other Department',
  ];

  // Helper validation functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const isValidMobile = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10;
  };

  // Switch between tabs and clear messages
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setLoginFeedback(null);
    setRegFeedback(null);
    setLoginErrors({});
    setRegErrors({});
  };

  // Quick fill helper for demo student credentials
  const fillDemoStudent = () => {
    setActiveTab('login');
    setLoginData({
      email: DEMO_STUDENT.email,
      password: DEMO_STUDENT.password,
    });
    setLoginErrors({});
    setLoginFeedback(null);
  };

  // Handle Login Submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginFeedback(null);
    const errors = {};

    // Validate Email
    if (!loginData.email.trim()) {
      errors.email = 'Email ID is required.';
    } else if (!isValidEmail(loginData.email)) {
      errors.email = 'Please enter a valid email address (e.g. name@college.edu).';
    }

    // Validate Password
    if (!loginData.password) {
      errors.password = 'Password is required.';
    } else if (loginData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setLoginErrors(errors);

    if (Object.keys(errors).length > 0) {
      setLoginFeedback({
        type: 'error',
        message: 'Please resolve the highlighted validation errors.',
      });
      return;
    }

    // Attempt student login via AuthContext
    const result = studentLogin(loginData.email, loginData.password);
    if (!result.success) {
      setLoginFeedback({
        type: 'error',
        message: result.error,
      });
      return;
    }

    // Success -> navigate to student dashboard
    navigate('/student/dashboard');
  };

  // Handle Registration Submission
  const handleRegSubmit = (e) => {
    e.preventDefault();
    setRegFeedback(null);
    const errors = {};

    // Validate Full Name
    if (!regData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    } else if (regData.fullName.trim().length < 2) {
      errors.fullName = 'Full Name must be at least 2 characters.';
    }

    // Validate Email
    if (!regData.email.trim()) {
      errors.email = 'Email ID is required.';
    } else if (!isValidEmail(regData.email)) {
      errors.email = 'Please enter a valid college or personal email address.';
    }

    // Validate Department
    if (!regData.department.trim()) {
      errors.department = 'Please select your department.';
    }

    // Validate Mobile Number
    if (!regData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required.';
    } else if (!isValidMobile(regData.mobile)) {
      errors.mobile = 'Mobile number must be a valid 10-digit number.';
    }

    // Validate Password
    if (!regData.password) {
      errors.password = 'Password is required.';
    } else if (regData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setRegErrors(errors);

    if (Object.keys(errors).length > 0) {
      setRegFeedback({
        type: 'error',
        message: 'Please fill in all required fields accurately.',
      });
      return;
    }

    // Register student into localStorage
    const result = studentRegister(regData);
    if (!result.success) {
      setRegFeedback({
        type: 'error',
        message: result.error,
      });
      return;
    }

    // Switch to login tab with pre-filled registered email so student can log in
    setLoginData({
      email: regData.email.trim(),
      password: '',
    });
    setRegData({
      fullName: '',
      email: '',
      department: '',
      mobile: '',
      password: '',
    });
    setActiveTab('login');
    setLoginFeedback({
      type: 'success',
      message: `Account created successfully! Please enter your password to log in.`,
    });
  };

  return (
    <Card className="border border-slate-200/90 shadow-lg p-5 sm:p-8">
      {/* Header Banner */}
      <div className="text-center mb-5">
        <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Student Portal</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          College Xerox &amp; Reprographics Management
        </p>
      </div>

      {/* Demo Credentials Helper Box */}
      <div className="mb-5 p-3.5 rounded-xl bg-sky-50 border border-sky-200/80 text-xs text-sky-950 shadow-2xs">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-bold flex items-center gap-1.5 text-sky-900">
            <Sparkles className="w-4 h-4 text-sky-600" />
            Frontend Demo Student Account
          </span>
          <button
            type="button"
            onClick={fillDemoStudent}
            className="text-[11px] font-bold text-sky-700 bg-white hover:bg-sky-100 border border-sky-300 px-2 py-0.5 rounded shadow-2xs transition-colors shrink-0"
          >
            Auto-Fill
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-sky-800">
          <div><span className="text-sky-600 font-medium">Email:</span> {DEMO_STUDENT.email}</div>
          <div><span className="text-sky-600 font-medium">Password:</span> {DEMO_STUDENT.password}</div>
        </div>
      </div>

      {/* Segmented Control / Tabs Toggle */}
      <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-xl mb-6 border border-slate-200/80">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'login'}
          onClick={() => handleTabSwitch('login')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'login'
              ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60 font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          <LogIn className="w-4 h-4 text-sky-600" />
          <span>Already Registered</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'register'}
          onClick={() => handleTabSwitch('register')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'register'
              ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60 font-bold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          <UserPlus className="w-4 h-4 text-sky-600" />
          <span>New User</span>
        </button>
      </div>

      {/* TAB 1: ALREADY REGISTERED - Student Login */}
      {activeTab === 'login' && (
        <div>
          <div className="mb-4">
            <h2 className="text-base font-bold text-slate-900">Student Login</h2>
            <p className="text-xs text-slate-500">Sign in with your registered college email and password</p>
          </div>

          {/* Validation / Status Notice */}
          {loginFeedback && (
            <div
              role="alert"
              className={`mb-4 p-3 rounded-lg text-xs flex items-start gap-2.5 ${
                loginFeedback.type === 'error'
                  ? 'bg-rose-50 border border-rose-200 text-rose-700'
                  : loginFeedback.type === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-sky-50 border border-sky-200 text-sky-800'
              }`}
            >
              {loginFeedback.type === 'error' ? (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              ) : loginFeedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-600" />
              )}
              <span>{loginFeedback.message}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
            {/* Email ID */}
            <div>
              <label htmlFor="login-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email ID <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="login-email"
                  type="email"
                  placeholder="e.g. student@college.com"
                  value={loginData.email}
                  onChange={(e) => {
                    setLoginData({ ...loginData, email: e.target.value });
                    if (loginErrors.email) setLoginErrors({ ...loginErrors, email: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-3.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    loginErrors.email
                      ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500/20'
                  }`}
                />
              </div>
              {loginErrors.email && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{loginErrors.email}</span>
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="login-password" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Password <span className="text-rose-500">*</span>
                </label>
                <span className="text-[11px] text-slate-400">Default: Student@123</span>
              </div>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="login-password"
                  type={showLoginPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => {
                    setLoginData({ ...loginData, password: e.target.value });
                    if (loginErrors.password) setLoginErrors({ ...loginErrors, password: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    loginErrors.password
                      ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                  aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                >
                  {showLoginPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {loginErrors.password && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{loginErrors.password}</span>
                </p>
              )}
            </div>

            {/* Login Button */}
            <Button type="submit" size="lg" className="w-full justify-center shadow-md mt-4">
              <span>Login</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>

          {/* Quick Switch to Registration */}
          <div className="mt-5 text-center text-xs text-slate-600">
            <span>New student at campus? </span>
            <button
              type="button"
              onClick={() => handleTabSwitch('register')}
              className="font-semibold text-sky-600 hover:text-sky-700 hover:underline"
            >
              Create Account here
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: NEW USER – Student Registration */}
      {activeTab === 'register' && (
        <div>
          <div className="mb-4">
            <h2 className="text-base font-bold text-slate-900">Student Registration</h2>
            <p className="text-xs text-slate-500">Register your student profile for online Xerox print requests</p>
          </div>

          {/* Validation / Status Notice */}
          {regFeedback && (
            <div
              role="alert"
              className={`mb-4 p-3 rounded-lg text-xs flex items-start gap-2.5 ${
                regFeedback.type === 'error'
                  ? 'bg-rose-50 border border-rose-200 text-rose-700'
                  : 'bg-sky-50 border border-sky-200 text-sky-800'
              }`}
            >
              {regFeedback.type === 'error' ? (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              ) : (
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-600" />
              )}
              <span>{regFeedback.message}</span>
            </div>
          )}

          <form onSubmit={handleRegSubmit} className="space-y-4" noValidate>
            {/* Full Name */}
            <div>
              <label htmlFor="reg-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  id="reg-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={regData.fullName}
                  onChange={(e) => {
                    setRegData({ ...regData, fullName: e.target.value });
                    if (regErrors.fullName) setRegErrors({ ...regErrors, fullName: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-3.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    regErrors.fullName
                      ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500/20'
                  }`}
                />
              </div>
              {regErrors.fullName && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{regErrors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email ID */}
            <div>
              <label htmlFor="reg-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email ID <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="reg-email"
                  type="email"
                  placeholder="e.g. rahul@college.com"
                  value={regData.email}
                  onChange={(e) => {
                    setRegData({ ...regData, email: e.target.value });
                    if (regErrors.email) setRegErrors({ ...regErrors, email: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-3.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    regErrors.email
                      ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500/20'
                  }`}
                />
              </div>
              {regErrors.email && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{regErrors.email}</span>
                </p>
              )}
            </div>

            {/* Department */}
            <div>
              <label htmlFor="reg-dept" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Department <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <select
                  id="reg-dept"
                  value={regData.department}
                  onChange={(e) => {
                    setRegData({ ...regData, department: e.target.value });
                    if (regErrors.department) setRegErrors({ ...regErrors, department: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-3.5 text-sm bg-white transition-colors focus:outline-none focus:ring-2 ${
                    regErrors.department
                      ? 'border-rose-300 text-rose-900 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 focus:border-sky-500 focus:ring-sky-500/20'
                  } ${!regData.department ? 'text-slate-400' : 'text-slate-900'}`}
                >
                  <option value="" disabled>Select your academic department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept} className="text-slate-900">
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              {regErrors.department && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{regErrors.department}</span>
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="reg-mobile" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Phone className="h-5 w-5" />
                </div>
                <input
                  id="reg-mobile"
                  type="tel"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={regData.mobile}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    setRegData({ ...regData, mobile: onlyNums });
                    if (regErrors.mobile) setRegErrors({ ...regErrors, mobile: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-3.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    regErrors.mobile
                      ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500/20'
                  }`}
                />
              </div>
              {regErrors.mobile && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{regErrors.mobile}</span>
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="reg-password" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Password <span className="text-rose-500">*</span>
                </label>
                <span className="text-[11px] text-slate-400">Min. 6 characters</span>
              </div>
              <div className="relative rounded-lg shadow-2xs">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="reg-password"
                  type={showRegPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={regData.password}
                  onChange={(e) => {
                    setRegData({ ...regData, password: e.target.value });
                    if (regErrors.password) setRegErrors({ ...regErrors, password: '' });
                  }}
                  className={`block w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 ${
                    regErrors.password
                      ? 'border-rose-300 text-rose-900 placeholder-rose-300 focus:border-rose-500 focus:ring-rose-500/20'
                      : 'border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500/20'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                  aria-label={showRegPassword ? 'Hide password' : 'Show password'}
                >
                  {showRegPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {regErrors.password && (
                <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{regErrors.password}</span>
                </p>
              )}
            </div>

            {/* Create Account Button */}
            <Button type="submit" size="lg" className="w-full justify-center shadow-md mt-4">
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </form>

          {/* Quick Switch to Login */}
          <div className="mt-5 text-center text-xs text-slate-600">
            <span>Already registered? </span>
            <button
              type="button"
              onClick={() => handleTabSwitch('login')}
              className="font-semibold text-sky-600 hover:text-sky-700 hover:underline"
            >
              Sign In here
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}
