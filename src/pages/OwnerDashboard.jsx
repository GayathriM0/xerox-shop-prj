import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  LogOut, 
  Mail, 
  Printer, 
  Layers, 
  Clock, 
  CheckCircle2, 
  HardDrive, 
  FileStack, 
  Info,
  ShieldAlert,
  Activity,
  Cpu
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/common/Card';
import Button from '../components/ui/Button';

export default function OwnerDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/owner-login');
  };

  return (
    <div className="flex-1 bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Notice: Demo Mode */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-900 font-medium">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Owner Demo Console Active:</strong> You are signed in as the authorized campus Xerox shop operator.
            </span>
          </div>
          <span className="text-xs bg-slate-900 text-amber-400 font-bold px-3 py-1 rounded-full border border-slate-800">
            Operator Console
          </span>
        </div>

        {/* Dashboard Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-amber-400 flex items-center justify-center text-2xl font-bold shadow-md">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Xerox Shop Management Console
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {currentUser?.email || 'owner@xerox.com'}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  Counter Session Active
                </span>
              </p>
            </div>
          </div>

          {/* Logout Action Button */}
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2 text-rose-600 border-rose-200 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 transition-colors w-full sm:w-auto justify-center"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Operator</span>
          </Button>
        </div>

        {/* Operator Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Queue Length</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">0 Orders</div>
              <div className="text-xs text-emerald-600 font-medium mt-1">Ready for incoming files</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <FileStack className="w-6 h-6" />
            </div>
          </Card>

          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Copier Units</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">3 / 3 Online</div>
              <div className="text-xs text-emerald-600 font-medium mt-1">Industrial Copiers Ready</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Printer className="w-6 h-6" />
            </div>
          </Card>

          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Binding Station</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">Operational</div>
              <div className="text-xs text-slate-500 mt-1">Spiral &amp; Hardbound Ready</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
          </Card>

          <Card className="p-5 flex items-center justify-between border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Paper Trays</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">92% Stock</div>
              <div className="text-xs text-slate-500 mt-1">75 GSM A4 &amp; 100 GSM Bond</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <HardDrive className="w-6 h-6" />
            </div>
          </Card>
        </div>

        {/* Incoming Orders Section */}
        <Card className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Live Print Request Queue</h2>
              <p className="text-xs text-slate-500">Student digital submissions dispatched for printing and counter pickup</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-700">Listening for Student Jobs</span>
            </div>
          </div>

          {/* Empty State */}
          <div className="text-center py-12 px-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/60">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
              <FileStack className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800">Print Queue is Empty</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1 leading-relaxed">
              No print requests are waiting in the queue right now. When registered students upload lecture notes or lab records, their jobs will appear here for processing.
            </p>
          </div>
        </Card>

        {/* Equipment & Machine Diagnostics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900">Canon ImageRunner 2630i</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Online</span>
            </div>
            <p className="text-xs text-slate-500">High-volume monochrome copier. Tray 1 &amp; 2 active.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900">HP LaserJet Enterprise Color</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Online</span>
            </div>
            <p className="text-xs text-slate-500">Color laser reprographics. High-capacity toner full.</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900">Hydraulic Comb &amp; Spiral Binder</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Ready</span>
            </div>
            <p className="text-xs text-slate-500">Spines: 6mm to 32mm in stock. Embossing heated.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

