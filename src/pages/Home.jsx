import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  GraduationCap, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Layers, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  BookOpen,
  Scan,
  Shield,
  FileCheck,
  MapPin,
  FileSpreadsheet
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/ui/Button';

export default function Home() {
  const services = [
    {
      id: 'bw-print',
      title: 'Monochrome Photocopy & Printing',
      description: 'Ultra-fast black & white double-sided and single-sided printing for lecture notes, previous exam question papers, syllabus copies, and lab manuals on 75 GSM paper.',
      badge: 'High Speed',
      icon: FileText,
      iconColor: 'text-sky-600 bg-sky-50 border-sky-200',
    },
    {
      id: 'color-print',
      title: 'Full Color Reprographics',
      description: 'Vibrant, high-resolution color laser printing ideal for seminar presentations, engineering schematics, charts, project summaries, and event posters.',
      badge: 'Laser Quality',
      icon: Sparkles,
      iconColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      id: 'binding',
      title: 'Project & Thesis Binding',
      description: 'Professional document finishing options including spiral ring binding, soft comb binding, and university-standard hardbound thesis with embossed golden lettering.',
      badge: 'Academic Standard',
      icon: Layers,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      id: 'scanning',
      title: 'Digital Scanning & PDF Archival',
      description: 'Crisp multi-page optical document scanning with auto-enhancement directly exported to standardized PDF format for online academic portals and submissions.',
      badge: 'High DPI',
      icon: Scan,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      id: 'lamination',
      title: 'Document Lamination',
      description: 'Heavy-duty heat-sealed plastic pouch lamination to preserve college identity cards, course completion certificates, marksheets, and official documents.',
      badge: 'Waterproof',
      icon: Shield,
      iconColor: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      id: 'engineering-prints',
      title: 'Large Format & A3 Graphics',
      description: 'Specialized A3 size copying and printing designed for CAD schematics, architectural drawings, technical charts, and department project blueprints.',
      badge: 'A3 / Engineering',
      icon: FileSpreadsheet,
      iconColor: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    },
  ];

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* 1. Welcome / Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-white to-slate-50 border-b border-slate-200/80 py-12 sm:py-20 lg:py-24">
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
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
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Option 1: Student Login */}
              <Link to="/student/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-7 py-3.5 text-base shadow-md group">
                  <GraduationCap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Student Login</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Option 2: Xerox Shop Owner Login */}
              <Link to="/owner/login" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto px-7 py-3.5 text-base shadow-md group">
                  <ShieldCheck className="w-5 h-5 mr-2 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Xerox Shop Owner Login</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Campus Highlights Pill Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto">
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

      {/* 2. Choose Your Portal - Clearly Visible Options Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/60 mb-3">
            Secure Role-Based Portals
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Select Your Portal to Get Started
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Choose whether you are logging in as a student submitting documents or as the Xerox shop team managing daily print runs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Student Login Portal */}
          <Card hover className="flex flex-col justify-between border-2 border-slate-200 hover:border-sky-500 transition-all p-6 sm:p-8 bg-gradient-to-b from-white to-sky-50/30">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  College Students
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Student Login</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Log in using your Student Roll Number or College Email to submit print requests, choose custom paper and binding specifications, and track order fulfillment in real-time.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Direct upload for lab records, assignments &amp; study notes</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Choose Black &amp; White, Color, Double-Sided, or Spiral Binding</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Avoid peak-hour rush in the amenity center</span>
                </div>
              </div>
            </div>

            <Link to="/student/login" className="block w-full">
              <Button size="lg" className="w-full justify-center text-sm font-semibold shadow-sm">
                <span>Go to Student Login</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </Card>

          {/* Card 2: Xerox Shop Owner Login Portal */}
          <Card hover className="flex flex-col justify-between border-2 border-slate-200 hover:border-slate-800 transition-all p-6 sm:p-8 bg-gradient-to-b from-white to-slate-100/50">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-800 border border-slate-300">
                  Operators &amp; Staff
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Xerox Shop Owner Login</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Authorized administrative login for Xerox shop operators to oversee incoming document requests, manage machine queues, update job statuses, and handle counter pickups.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <span>Monitor and organize real-time incoming printing queue</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <span>Update print job status (Queued, Printing, Ready for Collection)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <span>Streamlined counter verification for fast document handover</span>
                </div>
              </div>
            </div>

            <Link to="/owner/login" className="block w-full">
              <Button variant="secondary" size="lg" className="w-full justify-center text-sm font-semibold shadow-sm">
                <span>Go to Shop Owner Login</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* 3. Xerox Services Available Section */}
      <section className="bg-white border-y border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/60 mb-3">
              Campus Reprographics Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Xerox &amp; Document Services Available
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Complete reprographics and finishing services available right inside the college campus for all academic requirements.
            </p>
          </div>

          {/* Responsive Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${service.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-full px-2.5 py-0.5">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How It Works (Simple 3 Steps) */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              How Campus Xerox Ordering Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Three simple steps to save time and get your printouts done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Sign In</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Log in through the Student Portal using your college roll number or registered email.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Configure Print Job</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upload your document file and specify options like copies, color/monochrome, and binding.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Quick Counter Pickup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect your completed, freshly printed materials directly from the Xerox amenity counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Shop Information Card */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-sky-950 text-white p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Amenity Center, Ground Floor, Academic Block B</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Need emergency printing between lectures?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                The college Xerox center is open from 8:30 AM to 6:30 PM, Monday through Saturday. Log in to place your request in advance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link to="/student/login" className="w-full sm:w-auto">
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white border-none shadow-sm">
                  <GraduationCap className="w-4 h-4 mr-1.5" />
                  Student Login
                </Button>
              </Link>
              <Link to="/owner/login" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400" />
                  Owner Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
