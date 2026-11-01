import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Hide footer on Home page so the hero fits within one screen without scrolling */}
      <style>{`
        footer {
          display: none !important;
        }
      `}</style>

      {/* 1. Welcome / Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-sky-100/70 via-white to-slate-50 py-8 sm:py-12 lg:py-14">
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {/* Campus Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Printer className="w-4 h-4 text-sky-600" />
              <span>Welcome to CampusPrint • Official College Xerox Center</span>
            </div>

            {/* Main Welcome Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Fast, Reliable Printing &amp; Reprographics for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Students &amp; Faculty</span>
            </h1>

            {/* Introduction Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Say goodbye to rushing before submission deadlines and waiting in long shop queues. Access our digital Xerox service to submit documents, configure print settings, and collect orders at your convenience.
            </p>

            {/* Two Clearly Visible Options: Student Login & Xerox Shop Owner Login */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Option 1: Student Login */}
              <Link to="/student/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-7 py-3.5 text-base shadow-md group">
                  <GraduationCap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Student Login</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Option 2: Xerox Shop Owner Login */}
              <Link to="/owner-login" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto px-7 py-3.5 text-base shadow-md group">
                  <ShieldCheck className="w-5 h-5 mr-2 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Xerox Shop Owner Login</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Campus Highlights Pill Bar */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Zero Queue Waiting</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Heavy-Duty Copiers</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Official Campus Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
