import React from 'react';
import { 
  Users, Calendar, CheckCircle, TrendingUp, Sparkles, BookOpen, 
  ArrowRight, ShieldAlert, Award, FileSpreadsheet
} from 'lucide-react';

export default function Dashboard({ teachers, setActiveTab }) {
  const totalTeachers = teachers.length;
  const completedSupervision = teachers.filter(t => t.status === 'Selesai').length;
  const scheduledSupervision = teachers.filter(t => t.status === 'Terjadwal').length;
  
  const avgPlanScore = Math.round(teachers.reduce((acc, t) => acc + t.scorePlan, 0) / totalTeachers);
  const avgObsScore = Math.round(teachers.filter(t => t.scoreObs > 0).reduce((acc, t) => acc + t.scoreObs, 0) / completedSupervision);

  return (
    <div className="space-y-6">
      {/* Banner Sambutan */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-8 translate-y-8">
          <BookOpen className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Pendekatan Pembelajaran Mendalam & Inklusivitas SLB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Selamat Datang di Sistem Supervisi Akademik SLB Muhammadiyah Ponjong
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
            Aplikasi pendukung kepala sekolah berbasis <strong>Modul KS.02.2026</strong>. 
            Melaksanakan siklus supervisi akademik terpadu: Perencanaan berbasis identifikasi masalah, 
            Pra-Observasi (Coaching), Observasi Kelas faktual, hingga Evaluasi, Refleksi Mandiri, dan Tindak Lanjut (RTL) yang berorientasi pada kemandirian siswa berkebutuhan khusus.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setActiveTab('program')}
              className="bg-white text-emerald-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-50 transition shadow flex items-center space-x-2"
            >
              <span>Mulai Program & Rencana</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className="bg-emerald-900/80 text-white border border-emerald-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-900 transition flex items-center space-x-2"
            >
              <span>Cetak Dokumen Resmi (A4)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Statistik Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Guru Disupervisi</p>
            <p className="text-2xl font-bold text-slate-800">{totalTeachers} Guru</p>
            <span className="text-xs text-blue-600 font-medium">SDLB, SMPLB, SMALB</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Supervisi Selesai</p>
            <p className="text-2xl font-bold text-slate-800">{completedSupervision} Guru</p>
            <span className="text-xs text-emerald-600 font-medium">{Math.round((completedSupervision/totalTeachers)*100)}% tuntas siklus</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-purple-50 p-4 rounded-xl text-purple-600">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Rata-Rata Nilai Telaah RPP</p>
            <p className="text-2xl font-bold text-slate-800">{avgPlanScore}%</p>
            <span className="text-xs text-purple-600 font-medium">Kategori: Baik (B)</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-amber-50 p-4 rounded-xl text-amber-600">
            <TrendingUp className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Skor Observasi Kelas</p>
            <p className="text-2xl font-bold text-slate-800">{avgObsScore}%</p>
            <span className="text-xs text-amber-600 font-medium">Fokus Pembelajaran Mendalam</span>
          </div>
        </div>
      </div>

      {/* Tabel Ringkasan Guru & Status */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div>
            <h3 className="text-base font-bold text-slate-800">Daftar Guru SLB Muhammadiyah Ponjong</h3>
            <p className="text-xs text-slate-500">Status pelaksanaan supervisi akademik semester ganjil 2025/2026</p>
          </div>
          <button 
            onClick={() => setActiveTab('schedule')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>Kelola Jadwal & Guru</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/70 text-slate-600 uppercase text-xs tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">No</th>
                <th className="py-3 px-4">Nama Guru / NIP</th>
                <th className="py-3 px-4">Unit / Fase</th>
                <th className="py-3 px-4">Mata Pelajaran</th>
                <th className="py-3 px-4">Jadwal</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {teachers.map((t, idx) => (
                <tr key={t.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3 px-4 font-medium text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800">{t.name}</div>
                    <div className="text-xs text-slate-500">NIP: {t.nip}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-medium border border-emerald-200">
                      {t.unit}
                    </span>
                    <div className="text-xs text-slate-500 mt-0.5">{t.phase}</div>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{t.subject}</td>
                  <td className="py-3 px-4 text-xs text-slate-600">
                    <div>{t.scheduleDate}</div>
                    <div className="text-slate-400">{t.scheduleTime}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      t.status === 'Selesai' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button 
                      onClick={() => setActiveTab('pra')}
                      className="text-xs bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 px-3 py-1.5 rounded-lg transition font-medium"
                    >
                      Proses Supervisi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
