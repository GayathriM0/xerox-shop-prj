import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Lock, Mail, Eye, EyeOff, Info, ArrowRight } from 'lucide-react';
import Card from '../components/common/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clean client-side validation / readiness notice
    if (!formData.identifier.trim() || !formData.password.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter both your Student Roll No / Email and password.',
      });
      return;
    }

    // In accordance with project instructions, backend authentication is not implemented yet
    setStatusMessage({
      type: 'info',
      text: 'Frontend interface verified. Backend authentication service will be connected in the upcoming phase.',
    });
  };

  return (
    <Card className="border border-slate-200/90 shadow-lg p-6 sm:p-8">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Student Portal</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Sign in to submit and track your college print orders
        </p>
      </div>

      {/* Info Notice */}
      {statusMessage && (
        <div
          className={`mb-5 p-3 rounded-lg text-xs flex items-start gap-2.5 ${
            statusMessage.type === 'error'
              ? 'bg-rose-50 border border-rose-200 text-rose-700'
              : 'bg-sky-50 border border-sky-200 text-sky-800'
          }`}
        >
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="student-identifier"
          label="Roll Number / College Email"
          type="text"
          placeholder="e.g. 21CS045 or roll@college.edu"
          icon={Mail}
          value={formData.identifier}
          onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
          required
        />

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="student-password"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              Password <span className="text-rose-500">*</span>
            </label>
            <span className="text-xs text-slate-400">Default: College portal password</span>
          </div>
          <div className="relative rounded-lg shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              id="student-password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="••••••••"
              className="block w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
            />
            <span>Remember this device</span>
          </label>
          <span className="text-slate-400">Need help? Ask Xerox desk</span>
        </div>

        <Button type="submit" className="w-full justify-center shadow-md mt-2">
          <span>Sign In as Student</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>

      {/* Switch Portal Footer */}
      <div className="mt-6 pt-5 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-500">
          Xerox Shop Staff or Admin?{' '}
          <Link to="/owner/login" className="font-semibold text-slate-800 hover:text-sky-600 transition-colors">
            Go to Shop Owner Login &rarr;
          </Link>
        </p>
      </div>
    </Card>
  );
}

