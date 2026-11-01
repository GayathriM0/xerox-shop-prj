import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Printer, 
  GraduationCap, 
  ShieldCheck, 
  Menu, 
  X, 
  Clock, 
  LogOut, 
  LayoutDashboard,
  User
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, isStudent, isOwner, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-600 rounded-lg p-1">
            <div className="w-10 h-10 rounded-lg bg-sky-700 text-white flex items-center justify-center shadow-xs transition-colors group-hover:bg-sky-800">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base sm:text-lg tracking-tight flex items-center gap-2">
                CampusPrint
                <span className="hidden sm:inline-block text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                  College Xerox
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Reprographics &amp; Document Center</div>
            </div>
          </Link>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
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

              {/* Logged in as Student */}
              {isStudent && (
                <>
                  <NavLink
                    to="/student/dashboard"
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors border ${
                        isActive
                          ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                          : 'text-sky-700 bg-sky-50 hover:bg-sky-100 border-sky-200'
                      }`
                    }
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Student Dashboard</span>
                  </NavLink>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium bg-slate-100 px-3 py-2 rounded-lg border border-slate-200">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    <span className="max-w-[120px] truncate">{currentUser?.fullName}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-rose-700 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-colors"
                    title="Logout from Student Account"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </>
              )}

              {/* Logged in as Owner */}
              {isOwner && (
                <>
                  <NavLink
                    to="/owner/dashboard"
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors border ${
                        isActive
                          ? 'bg-slate-900 text-amber-300 border-slate-900 shadow-xs'
                          : 'text-slate-800 bg-slate-100 hover:bg-slate-200 border-slate-300'
                      }`
                    }
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>Owner Console</span>
                  </NavLink>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-rose-700 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-colors"
                    title="Logout from Operator Console"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </>
              )}

              {/* Not Logged In: Show separate Login options */}
              {!currentUser && (
                <>
                  <Link
                    to="/student/login"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors shadow-2xs"
                  >
                    <GraduationCap className="w-4 h-4 text-sky-700" />
                    <span>Student Login</span>
                  </Link>

                  <Link
                    to="/owner-login"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 transition-colors shadow-2xs"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Owner Login</span>
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
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
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
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

            {/* Authenticated Student Mobile Drawer */}
            {isStudent && (
              <>
                <Link
                  to="/student/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-sky-700" />
                    <span>Student Dashboard</span>
                  </div>
                  <span className="text-xs bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded border border-sky-200">
                    {currentUser?.fullName?.split(' ')[0]}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout Student</span>
                </button>
              </>
            )}

            {/* Authenticated Owner Mobile Drawer */}
            {isOwner && (
              <>
                <Link
                  to="/owner/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Owner Dashboard</span>
                  </div>
                  <span className="text-xs bg-slate-800 text-amber-300 font-semibold px-2 py-0.5 rounded">Operator</span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg text-left"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout Operator</span>
                </button>
              </>
            )}

            {/* Unauthenticated Mobile Drawer */}
            {!currentUser && (
              <>
                <Link
                  to="/student/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-sky-700" />
                    <span>Student Login</span>
                  </div>
                  <span className="text-xs bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded border border-sky-200">Students</span>
                </Link>

                <Link
                  to="/owner-login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Xerox Shop Owner Login</span>
                  </div>
                  <span className="text-xs bg-slate-800 text-amber-300 font-semibold px-2 py-0.5 rounded">Staff</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
