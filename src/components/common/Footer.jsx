import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, MapPin, Clock, Phone, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                <Printer className="w-4 h-4" />
              </div>
              <span>CampusPrint Xerox Center</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Official campus document reprographics portal. Submit your lecture notes, lab manuals, project reports, and assignment copies online to skip the counter queue.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              High-speed digital printing & binding service for college students & faculty.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Portals</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Portal Home</Link>
              </li>
              <li>
                <Link to="/student/login" className="hover:text-white transition-colors">Student Login</Link>
              </li>
              <li>
                <Link to="/owner/login" className="hover:text-white transition-colors">Shop Owner / Operator Login</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Timings */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Campus Counter</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Ground Floor, Student Amenity Block (Near Central Library)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Monday – Saturday: 8:30 AM – 6:30 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>A4, A3, Spiral Binding, Hard Bound Thesis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} College Xerox Shop Portal. All rights reserved.</p>
          <p className="text-slate-400">Designated campus service for students and staff.</p>
        </div>
      </div>
    </footer>
  );
}

