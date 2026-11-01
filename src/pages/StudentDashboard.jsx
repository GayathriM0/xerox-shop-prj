import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  LogOut, 
  Mail, 
  Building2, 
  Phone, 
  FileText, 
  Clock, 
  Printer, 
  CheckCircle2, 
  UploadCloud, 
  Layers, 
  Info,
  MapPin
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/common/Card';
import Button from '../components/ui/Button';

export default function StudentDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/student/login');
  };

  return (
    <div className="flex-1 bg-slate-50/70 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Notice: Demo Mode */}
        <div className="bg-slate-100 border border-slate-200 rounded-lg p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <Info className="w-4 h-4 text-slate-600 shrink-0" />
            <span>
              <strong>Frontend Demo Active:</strong> You are logged in with temporary local student credentials.
            </span>
          </div>
          <span className="text-xs bg-white text-slate-700 font-semibold px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
            Student Account
          </span>
        </div>

        {/* Dashboard Welcome Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-sky-700 text-white flex items-center justify-center text-xl font-bold shadow-2xs shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Welcome, {currentUser?.fullName || 'Student'}
              </h1>
              <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {currentUser?.email}
                </span>
                {currentUser?.department && (
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    {currentUser.department}
                  </span>
                )}
                {currentUser?.mobile && (
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    +91 {currentUser.mobile}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Logout Action Button */}
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2 text-rose-700 border-slate-300 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200 transition-colors w-full sm:w-auto justify-center"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Queue Status</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">Normal</div>
              <div className="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Shop Counter Open</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </Card>

          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Active Orders</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">0</div>
              <div className="text-xs text-slate-400 mt-1">No pending printouts</div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center">
              <Printer className="w-5 h-5" />
            </div>
          </Card>

          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Standard B&amp;W</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">₹ 1.00</div>
              <div className="text-xs text-slate-400 mt-1">Per double-sided page</div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </Card>

          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Spiral Binding</div>
              <div className="text-2xl font-bold text-slate-900 mt-1">₹ 25.00</div>
              <div className="text-xs text-slate-400 mt-1">Up to 150 sheets</div>
            </div>
            <div className="w-11 h-11 rounded-lg bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </Card>
        </div>

        {/* Main Content Grid: New Print Job & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* New Print Request Card */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-7 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Upload &amp; Submit Document</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Submit PDF or DOCX files for quick campus reprographics</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
                  Block B Counter
                </span>
              </div>

              {/* Upload Drag & Drop Area */}
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center mx-auto mb-3">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  Click to select file or drag &amp; drop document
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Supported formats: PDF, DOC, DOCX, PPT, PPTX (Max 50MB)
                </p>
              </div>

              {/* Service Config Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Print Mode</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Black &amp; White</div>
                  <div className="text-[11px] text-slate-500">75 GSM bond paper</div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Sides</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Double Sided</div>
                  <div className="text-[11px] text-slate-500">Standard eco-print</div>
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Finishing</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Corner Staple / Binding</div>
                  <div className="text-[11px] text-slate-500">Optional add-on</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Frontend Demo Notice:</strong> Document file upload storage and payment integration will be connected in future backend development phases.
                </span>
              </div>
            </Card>
          </div>

          {/* Profile & Counter Guidelines */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-4 border-b border-slate-200 pb-2">
                Student Profile Summary
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Name</span>
                  <span className="font-semibold text-slate-800 text-sm">{currentUser?.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">College Email</span>
                  <span className="font-semibold text-slate-800">{currentUser?.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Department</span>
                  <span className="font-semibold text-slate-800">{currentUser?.department || 'Not specified'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Contact</span>
                  <span className="font-semibold text-slate-800">+91 {currentUser?.mobile || 'N/A'}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-900 text-white border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Pickup Counter</span>
              </div>
              <h4 className="text-base font-bold mb-1.5">Student Amenity Center</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Ground Floor, Block B. Show your student ID or order confirmation at counter #1 for collection.
              </p>
              <div className="text-xs text-slate-300 flex items-center gap-1.5 font-medium border-t border-slate-800 pt-3">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operating Hours: 8:30 AM – 6:30 PM</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
