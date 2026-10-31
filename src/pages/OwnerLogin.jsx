import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, UserCheck, Eye, EyeOff, Info, ArrowRight, ShieldAlert } from 'lucide-react';
import Card from '../components/common/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function OwnerLogin() {
  const [formData, setFormData] = useState({
    operatorId: '',
    passcode: '',
    stationActive: false,
  });
  const [showPasscode, setShowPasscode] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.operatorId.trim() || !formData.passcode.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please provide both your Operator ID and Security Passcode.',
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
        <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60 mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>Shop Operator &amp; Admin</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Owner Login</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Access the Xerox queue management and order processing desk
        </p>
      </div>

      {/* Info Notice */}
      {statusMessage && (
        <div
          className={`mb-5 p-3 rounded-lg text-xs flex items-start gap-2.5 ${
            statusMessage.type === 'error'
              ? 'bg-rose-50 border border-rose-200 text-rose-700'
              : 'bg-slate-100 border border-slate-200 text-slate-800'
          }`}
        >
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-slate-600" />
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="operator-id"
          label="Operator / Store ID"
          type="text"
          placeholder="e.g. OP-XEROX-01 or admin@campusprint.local"
          icon={UserCheck}
          value={formData.operatorId}
          onChange={(e) => setFormData({ ...formData, operatorId: e.target.value })}
          required
        />

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="owner-passcode"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              Security Passcode <span className="text-rose-500">*</span>
            </label>
            <span className="text-xs text-slate-400">Restricted desk access</span>
          </div>
          <div className="relative rounded-lg shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              id="owner-passcode"
              type={showPasscode ? 'text' : 'password'}
              value={formData.passcode}
              onChange={(e) => setFormData({ ...formData, passcode: e.target.value })}
              required
              placeholder="••••••••••••"
              className="block w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800/20"
            />
            <button
              type="button"
              onClick={() => setShowPasscode(!showPasscode)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
              aria-label={showPasscode ? 'Hide passcode' : 'Show passcode'}
            >
              {showPasscode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

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

        <Button variant="secondary" type="submit" className="w-full justify-center shadow-md mt-2">
          <span>Sign In to Operator Console</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>

      {/* Switch Portal Footer */}
      <div className="mt-6 pt-5 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-500">
          Are you a college student?{' '}
          <Link to="/student/login" className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">
            Go to Student Login &rarr;
          </Link>
        </p>
      </div>
    </Card>
  );
}

