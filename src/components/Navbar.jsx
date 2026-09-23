import React from 'react';
import { 
  BookOpen, Calendar, ClipboardCheck, LayoutDashboard, 
  Users, Award, Printer
} from 'lucide-react';

export function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, theme: 'from-emerald-900 to-teal-900', navBg: 'bg-teal-950', badge: 'bg-emerald-700 text-emerald-100', activeBtn: 'bg-emerald-800 border-emerald-600' },
    { id: 'program', label: 'Program & Perencanaan', icon: BookOpen, theme: 'from-indigo-900 to-blue-900', navBg: 'bg-blue-950', badge: 'bg-indigo-700 text-indigo-100', activeBtn: 'bg-indigo-800 border-indigo-600' },
    { id: 'schedule', label: 'Jadwal & Guru', icon: Calendar, theme: 'from-amber-900 to-orange-950', navBg: 'bg-orange-950', badge: 'bg-amber-700 text-amber-100', activeBtn: 'bg-amber-800 border-amber-600' },
    { id: 'pra', label: 'Pra-Observasi (Coaching)', icon: Users, theme: 'from-violet-900 to-purple-950', navBg: 'bg-purple-950', badge: 'bg-violet-700 text-violet-100', activeBtn: 'bg-violet-800 border-violet-600' },
    { id: 'observation', label: 'Observasi Kelas', icon: ClipboardCheck, theme: 'from-rose-900 to-pink-950', navBg: 'bg-rose-950', badge: 'bg-rose-700 text-rose-100', activeBtn: 'bg-rose-800 border-rose-600' },
    { id: 'evaluation', label: 'Evaluasi & Refleksi', icon: Award, theme: 'from-cyan-900 to-sky-950', navBg: 'bg-sky-950', badge: 'bg-cyan-700 text-cyan-100', activeBtn: 'bg-cyan-800 border-cyan-600' },
    { id: 'reports', label: 'Dokumen & Cetak Laporan', icon: Printer, theme: 'from-slate-800 to-zinc-900', navBg: 'bg-zinc-950', badge: 'bg-slate-700 text-slate-100', activeBtn: 'bg-slate-700 border-slate-500' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen sticky top-0 left-0 shadow-2xl z-50 no-print">
      {/* Header Logo */}
      <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
        <div className="bg-white p-1.5 rounded-xl shadow flex items-center justify-center flex-shrink-0">
          <img src="/logo-slb.png" alt="Logo SLB" className="w-10 h-10 object-contain" />
        </div>
        <div>
          <h1 className="text-xs font-black tracking-wider text-emerald-400">SIPENDA</h1>
          <p className="text-[10px] text-slate-300 font-semibold leading-tight">SLB Muhammadiyah Ponjong</p>
        </div>
      </div>

      {/* Navigasi Vertikal */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                isActive 
                  ? 'bg-emerald-700 text-white shadow-md border border-emerald-600 font-bold' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer / Info Kepala Sekolah */}
      <div className="p-4 border-t border-slate-800 bg-slate-950 text-[11px] text-slate-400 space-y-1">
        <span className="block text-emerald-400 font-bold">Modul KS.02.2026</span>
        <p className="truncate text-slate-300">KS: Luluk Bambang Sulistyo</p>
      </div>
    </aside>
  );
}
