import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, CheckCircle, TrendingUp, Sparkles, BookOpen, 
  ArrowRight, Award, BarChart3, ShieldCheck, Quote, GraduationCap
} from 'lucide-react';

export default function Dashboard({ teachers, setActiveTab }) {
  const totalTeachers = teachers.length;
  const completedSupervision = teachers.filter(t => t.status === 'Selesai').length;
  
  const avgPlanScore = Math.round(teachers.reduce((acc, t) => acc + t.scorePlan, 0) / totalTeachers);
  const avgObsScore = Math.round(teachers.filter(t => t.scoreObs > 0).reduce((acc, t) => acc + t.scoreObs, 0) / (completedSupervision || 1));

  // State untuk Motivasi / Kata Bijak Harian (Gaya AI)
  const motivationalQuotes = [
    {
      quote: "Pendidikan anak berkebutuhan khusus bukan tentang mengajarkan segalanya, butuh kesabaran tak terbatas untuk menuntun mereka menemukan potensi terbaiknya.",
      author: "Refleksi Kepemimpinan Pembelajaran SLB"
    },
    {
      quote: "Setiap anak istimewa memiliki cara belajar yang unik. Tugas kita bukan menyamakan cara mereka, melainkan membuka jalan bagi masa depan mereka.",
      author: "Filosofi Pendidikan Inklusif"
    },
    {
      quote: "Supervisi akademik yang efektif berakar pada kolaborasi, empati, dan komitmen bersama untuk menghadirkan pembelajaran yang memuliakan siswa.",
      author: "Modul KS.02.2026"
    }
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex(prev => (prev + 1) % motivationalQuotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const activeQuote = motivationalQuotes[currentQuoteIndex];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Banner Selamat Datang Profesional & Motivasi Harian */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-8 translate-y-8">
          <BookOpen className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-800/80 border border-emerald-600/50 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Dashboard Mutu Akademik & Penjaminan Mutu SLB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Sistem Informasi Penjaminan Mutu & Supervisi Akademik
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Pusat kendali kepemimpinan pembelajaran berbasis <strong>Modul KS.02.2026</strong> untuk SLB Muhammadiyah Ponjong. Memantau siklus perencanaan, observasi klinis, hingga tindak lanjut berbasis data mutakhir.
          </p>
        </div>

        {/* Kotak Motivasi Harian AI (Pojok Kanan Banner) */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 max-w-sm space-y-2 shadow-inner">
          <div className="flex items-center space-x-1.5 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Quote className="w-4 h-4 text-yellow-300" />
            <span>Motivasi & Inspirasi Hari Ini</span>
          </div>
          <p className="text-xs text-slate-100 italic leading-relaxed">
            "{activeQuote.quote}"
          </p>
          <div className="text-[11px] text-emerald-300 font-semibold text-right">
            — {activeQuote.author}
          </div>
        </div>
      </div>

      {/* Grid Kartu Mutu & Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Pendidik</p>
            <p className="text-2xl font-bold text-slate-800">{totalTeachers} Guru</p>
            <span className="text-xs text-blue-600 font-medium">SDLB, SMPLB, SMALB</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Capaian Tuntas</p>
            <p className="text-2xl font-bold text-slate-800">{completedSupervision} Guru</p>
            <span className="text-xs text-emerald-600 font-medium">{Math.round((completedSupervision/totalTeachers)*100)}% Selesai Siklus</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-purple-50 p-4 rounded-xl text-purple-600">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Mutu Telaah RPP</p>
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
            <span className="text-xs text-amber-600 font-medium">Standar Pembelajaran Mendalam</span>
          </div>
        </div>
      </div>

      {/* Bagian Grafik Mutu / Dashboard Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Grafik Batang Capaian Mutu Per Guru */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
                <span>Grafik Capaian Mutu & Kinerja Pendidik</span>
              </h3>
              <p className="text-xs text-slate-500">Visualisasi tingkat kesiapan RPP dan efektivitas observasi kelas</p>
            </div>
            <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-lg font-semibold">Semester Ganjil</span>
          </div>

          <div className="space-y-4">
            {teachers.map((t) => (
              <div key={t.id} className="space-y-1.5 text-xs">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>{t.name} <span className="text-[10px] text-slate-400 font-normal">({t.unit})</span></span>
                  <span className="text-emerald-700">RPP: {t.scorePlan}% | Obs: {t.scoreObs > 0 ? `${t.scoreObs}%` : 'Belum'}</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-emerald-600 h-full transition-all duration-500" 
                    style={{ width: `${t.scorePlan}%` }} 
                    title={`Skor RPP: ${t.scorePlan}%`}
                  ></div>
                  {t.scoreObs > 0 && (
                    <div 
                      className="bg-teal-400 h-full transition-all duration-500 border-l border-white" 
                      style={{ width: `${t.scoreObs}%` }} 
                      title={`Skor Observasi: ${t.scoreObs}%`}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ringkasan Eksekutif & Status Mutu */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2 border-b border-slate-100 pb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Status Penjaminan Mutu</span>
            </h3>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span>Standar Isi & RPP Adaptif</span>
                <span className="font-bold text-emerald-700">Terpenuhi</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span>Siklus Coaching & Observasi</span>
                <span className="font-bold text-blue-700">Berjalan</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span>Integrasi KKA & Saling Memuliakan</span>
                <span className="font-bold text-purple-700">Optimal</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => setActiveTab('reports')}
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl transition shadow text-xs flex items-center justify-center space-x-2"
            >
              <span>Cetak Laporan Mutu Resmi (A4)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Tabel Data Guru Profesional */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-800">Dokumentasi Penilaian Kinerja Pendidik SLB Muhammadiyah Ponjong</h3>
            <p className="text-xs text-slate-500">Daftar lengkap guru dan rekapitulasi penilaian supervisi akademik</p>
          </div>
          <button 
            onClick={() => setActiveTab('schedule')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
          >
            <span>Kelola Data Guru</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-600 uppercase font-semibold border-b border-slate-200">
                <th className="py-3 px-4">No</th>
                <th className="py-3 px-4">Nama Pendidik & NIP</th>
                <th className="py-3 px-4">Unit / Ketunaan</th>
                <th className="py-3 px-4">Mata Pelajaran</th>
                <th className="py-3 px-4 text-center">Nilai RPP</th>
                <th className="py-3 px-4 text-center">Nilai Observasi</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {teachers.map((t, idx) => (
                <tr key={t.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4 font-medium text-slate-500">{idx + 1}</td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-800">{t.name}</div>
                    <div className="text-[11px] text-slate-400">NIP: {t.nip}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium border border-emerald-200">
                      {t.unit}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{t.subject}</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-700">{t.scorePlan}%</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-700">{t.scoreObs > 0 ? `${t.scoreObs}%` : '-'}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-semibold text-[11px] ${
                      t.status === 'Selesai' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {t.status}
                    </span>
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
