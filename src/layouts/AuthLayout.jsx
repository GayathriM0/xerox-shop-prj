import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Printer, ArrowLeft } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50/70 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <Printer className="w-4 h-4 text-sky-700" />
          <span>Campus Reprographics Portal</span>
        </div>
      </div>

      {/* Main Form Slot */}
      <div className="w-full max-w-md sm:max-w-lg mx-auto my-8">
        <Outlet />
      </div>

      {/* Bottom Footer Note */}
      <div className="text-center text-xs text-slate-500">
        CampusPrint • Official College Xerox Shop Management System
      </div>
    </div>
  );
}
