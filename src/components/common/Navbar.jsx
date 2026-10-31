import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Printer, GraduationCap, ShieldCheck, Menu, X, Clock } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Printer className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight flex items-center gap-1.5">
                CampusPrint
                <span className="hidden sm:inline-block text-[10px] font-semibold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  College Xerox
                </span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Official Reprographics &amp; Document Center</div>
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50/90 border border-emerald-200/70 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Counter Open: 8:30 AM – 6:30 PM</span>
            </div>

            <nav className="flex items-center gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Student Login Navbar Button */}
              <Link
                to="/student/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors shadow-xs"
              >
                <GraduationCap className="w-4 h-4 text-sky-600" />
                <span>Student Login</span>
              </Link>

              {/* Owner Login Navbar Button */}
              <Link
                to="/owner/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 transition-colors shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Owner Login</span>
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Counter Open: 8:30 AM – 6:30 PM (Mon – Sat)</span>
          </div>

          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-100"
            >
              Home
            </Link>

            <Link
              to="/student/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-600" />
                <span>Student Login</span>
              </div>
              <span className="text-xs bg-sky-200 text-sky-800 font-bold px-2 py-0.5 rounded-full">Students</span>
            </Link>

            <Link
              to="/owner/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Xerox Shop Owner Login</span>
              </div>
              <span className="text-xs bg-slate-800 text-amber-300 font-bold px-2 py-0.5 rounded-full">Staff</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
