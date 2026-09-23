import React, { useState } from 'react';
import { User, Lock, Mail, Building2, ArrowRight, ShieldCheck, LogOut, Shield, UserCheck } from 'lucide-react';
import { Navbar } from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProgramPlan from './components/ProgramPlan';
import ScheduleManager from './components/ScheduleManager';
import PraObservasi from './components/PraObservasi';
import ClassObservation from './components/ClassObservation';
import EvaluationSection from './components/EvaluationSection';
import DocumentGenerator from './components/DocumentGenerator';
import { initialTeachers, schoolInfo } from './data/mockData';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null); 
  const [selectedRole, setSelectedRole] = useState('kepsek'); 
  
  const [email, setEmail] = useState('luluksulistyo22@admin.slb.belajar.id');
  const [password, setPassword] = useState('#Alhamdulillah_Semoga_Barokah_123456789');
  const [name, setName] = useState('Luluk Bambang Sulistyo');
  const [errorMsg, setErrorMsg] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard');
  const [teachers, setTeachers] = useState(initialTeachers);

  const handleAuth = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!email || !password) {
      setErrorMsg('Semua kolom wajib diisi!');
      return;
    }

    if (selectedRole === 'kepsek') {
      if (email.trim() !== 'luluksulistyo22@admin.slb.belajar.id' || password !== '#Alhamdulillah_Semoga_Barokah_123456789') {
        setErrorMsg('Akses Kepala Sekolah ditolak! Username atau Password khusus Kepala Sekolah salah.');
        return;
      }
    } else {
      if (!email.trim().toLowerCase().endsWith('belajar.id')) {
        setErrorMsg('Akses ditolak! Email Pengawas dan Guru wajib menggunakan akun resmi berakhiran "belajar.id".');
        return;
      }
    }

    let roleName = 'Kepala Sekolah';
    let realName = 'Luluk Bambang Sulistyo, S.P., Gr., M.Pd.';
    
    if (selectedRole === 'pengawas') {
      roleName = 'Pengawas';
      realName = name || 'Drs. H. Mulyono, M.Pd.';
    } else if (selectedRole === 'guru') {
      roleName = 'Guru / Pendidik';
      realName = name || 'Alvian Nur Huda, S.Pd.';
    }

    setCurrentUser({
      name: realName,
      email: email,
      role: selectedRole,
      roleLabel: roleName
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-emerald-100 animate-fadeIn">
          
          <div className="bg-emerald-900 p-6 text-white text-center relative">
            <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-xl">
              <Building2 className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="flex justify-center mb-3">
              <img src="/logo-slb.png" alt="Logo SLB" className="w-16 h-16 object-contain bg-white p-1.5 rounded-2xl shadow" />
            </div>
            <h2 className="text-base font-bold tracking-tight">SIPENDA-SUPERVISI SLB MUHAMMADIYAH PONJONG</h2>
            <p className="text-xs text-emerald-300 mt-1">Portal Masuk Bertingkat (Validasi Akun Belajar.id)</p>
          </div>

          <div className="p-6 pb-0">
            <label className="text-xs font-bold text-slate-700 block mb-2">Pilih Peran Akses (Role):</label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('kepsek');
                  setEmail('luluksulistyo22@admin.slb.belajar.id');
                  setPassword('#Alhamdulillah_Semoga_Barokah_123456789');
                  setErrorMsg('');
                }}
                className={`p-2.5 rounded-xl border font-semibold flex flex-col items-center justify-center space-y-1 transition ${
                  selectedRole === 'kepsek' 
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Kepala Sekolah</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedRole('pengawas');
                  setEmail('pengawas@guru.belajar.id');
                  setPassword('');
                  setErrorMsg('');
                }}
                className={`p-2.5 rounded-xl border font-semibold flex flex-col items-center justify-center space-y-1 transition ${
                  selectedRole === 'pengawas' 
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Pengawas</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedRole('guru');
                  setEmail('guru.slb@guru.belajar.id');
                  setPassword('');
                  setErrorMsg('');
                }}
                className={`p-2.5 rounded-xl border font-semibold flex flex-col items-center justify-center space-y-1 transition ${
                  selectedRole === 'guru' 
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Guru</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleAuth} className="p-6 space-y-4 text-xs">
            {errorMsg && (
              <div className="bg-red-50 text-red-700 p-3 rounded-xl border border-red-200 text-center font-medium leading-relaxed">
                {errorMsg}
              </div>
            )}

            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 font-medium">
              ℹ️ {selectedRole === 'kepsek' ? 'Login Khusus Kepala Sekolah (Username & Password khusus terkunci).' : 'Login Pengawas / Guru wajib menggunakan email berakhiran "@belajar.id".'}
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">Nama Anda:</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lengkap"
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">Email (Akun belajar.id):</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@...belajar.id"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">Kata Sandi (Password):</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 font-medium"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl transition shadow-lg flex items-center justify-center space-x-2 text-sm"
              >
                <span>Masuk Sistem ({selectedRole.toUpperCase()})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center pt-2 text-[11px] text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Validasi Keamanan Akun Belajar.id Aktif</span>
            </div>
          </form>

        </div>
      </div>
    );
  }

  const isKepsek = currentUser.role === 'kepsek';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Sidebar di Sebelah Kiri */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Konten Utama di Sebelah Kanan */}
      <div className="flex-1 flex flex-col min-w-0 pb-12">
        {/* Banner Info Peran / Hak Akses */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 no-print">
          <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3 py-1.5 rounded-lg font-medium flex items-center space-x-2 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Anda masuk sebagai: <strong>{currentUser.roleLabel}</strong> ({currentUser.email})</span>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-slate-200 hover:bg-red-600 hover:text-white text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center space-x-1.5 shadow-sm"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar</span>
          </button>
        </div>

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {activeTab === 'dashboard' && <Dashboard teachers={teachers} setActiveTab={setActiveTab} isKepsek={isKepsek} />}
          {activeTab === 'program' && <ProgramPlan teachers={teachers} />}
          {activeTab === 'schedule' && <ScheduleManager teachers={teachers} setTeachers={isKepsek ? setTeachers : () => alert('Akses Dibatasi: Hanya Kepala Sekolah yang dapat menambah/mengedit jadwal guru.')} isKepsek={isKepsek} />}
          {activeTab === 'pra' && <PraObservasi teachers={teachers} />}
          {activeTab === 'observation' && <ClassObservation teachers={teachers} setTeachers={isKepsek ? setTeachers : () => alert('Akses Dibatasi: Hanya Kepala Sekolah yang dapat menilai & mengedit observasi kelas.')} isKepsek={isKepsek} />}
          {activeTab === 'evaluation' && <EvaluationSection teachers={teachers} />}
          {activeTab === 'reports' && <DocumentGenerator teachers={teachers} />}
        </main>
      </div>
    </div>
  );
}
