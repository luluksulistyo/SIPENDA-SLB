import React, { useState } from 'react';
import { 
  BookOpen, Calendar, ClipboardCheck, LayoutDashboard, 
  Users, Award, Printer, Menu, X
} from 'lucide-react';

export function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden bg-slate-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 no-print border-b border-slate-800 shadow-md">
        <div className="flex items-center space-x-2.5">
          <div className="bg-white p-1 rounded-lg flex items-center justify-center">
            <img src="/logo-slb.png" alt="Logo SLB" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h1 className="text-xs font-black tracking-wider text-emerald-400">SIPENDA SLB PONJONG</h1>
            <p className="text-[10px] text-slate-300">Modul KS.02.2026</p>
          </div>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-slate-800 rounded-xl text-white hover:bg-slate-750 transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-slate-900 text-white border-b border-slate-800 shadow-2xl z-40 p-4 space-y-2 no-print animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
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
        </div>
      )}

      {/* Desktop Sidebar (Hidden di HP) */}
      <aside className="hidden md:flex w-64 bg-slate-900 text-white flex-col h-screen sticky top-0 left-0 shadow-2xl z-50 no-print flex-shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
          <div className="bg-white p-1.5 rounded-xl shadow flex items-center justify-center flex-shrink-0">
            <img src="/logo-slb.png" alt="Logo SLB" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h1 className="text-xs font-black tracking-wider text-emerald-400">SIPENDA</h1>
            <p className="text-[10px] text-slate-300 font-semibold leading-tight">SLB Muhammadiyah Ponjong</p>
          </div>
        </div>

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

        <div className="p-4 border-t border-slate-800 bg-slate-950 text-[11px] text-slate-400 space-y-1">
          <span className="block text-emerald-400 font-bold">Modul KS.02.2026</span>
          <p className="truncate text-slate-300">KS: Luluk Bambang Sulistyo</p>
        </div>
      </aside>
    </>
  );
}
