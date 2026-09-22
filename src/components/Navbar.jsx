import React from 'react';
import { 
  BookOpen, Calendar, ClipboardCheck, FileText, LayoutDashboard, 
  Users, CheckCircle2, Award, Sparkles, Building2, Printer
} from 'lucide-react';

export function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'program', label: 'Program & Perencanaan', icon: BookOpen },
    { id: 'schedule', label: 'Jadwal & Guru', icon: Calendar },
    { id: 'pra', label: 'Pra-Observasi (Coaching)', icon: Users },
    { id: 'observation', label: 'Observasi Kelas', icon: ClipboardCheck },
    { id: 'evaluation', label: 'Evaluasi & Refleksi', icon: Award },
    { id: 'reports', label: 'Dokumen & Cetak Laporan', icon: Printer },
  ];

  return (
    <header className="bg-emerald-900 text-white shadow-md sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1.5 rounded-xl border border-white/25 flex items-center justify-center shadow">
              <img src="/logo-slb.png" alt="Logo SLB Muhammadiyah Ponjong" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-emerald-700 text-emerald-100 text-xs px-2 py-0.5 rounded font-medium">Modul KS.02.2026</span>
                <span className="text-emerald-300 text-xs">SLB Edisi Khusus</span>
              </div>
              <h1 className="text-lg font-bold tracking-tight">SI-SUPERVISI SLB MUHAMMADIYAH PONJONG</h1>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <span className="text-xs bg-emerald-800 px-3 py-1.5 rounded-lg text-emerald-200 border border-emerald-700">
              Kepala Sekolah: <strong>Luluk Bambang Sulistyo, S.P., Gr., M.Pd.</strong>
            </span>
          </div>
        </div>
      </div>
      <nav className="bg-emerald-950 border-t border-emerald-800 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  isActive 
                    ? 'bg-emerald-800 text-white shadow-inner border border-emerald-600' 
                    : 'text-emerald-200 hover:bg-emerald-900 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-emerald-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
