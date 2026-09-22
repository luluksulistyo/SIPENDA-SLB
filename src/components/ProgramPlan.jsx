import React, { useState } from 'react';
import { BookOpen, Target, CheckCircle2, AlertCircle, FileText, Sparkles, Building2 } from 'lucide-react';
import { schoolInfo } from '../data/mockData';

export default function ProgramPlan({ teachers }) {
  const [activeSubTab, setActiveSubTab] = useState('latar');

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">BAB 3 - MODUL KS.02.2026</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">Program Perencanaan Supervisi Akademik</h2>
          <p className="text-sm text-slate-500">Penyusunan rencana berbasis identifikasi masalah, akar masalah, dan solusi bagi guru SLB.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveSubTab('latar')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeSubTab === 'latar' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Konsep & Dasar Perencanaan
          </button>
          <button 
            onClick={() => setActiveSubTab('matriks')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeSubTab === 'matriks' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Matriks Perencanaan Guru (Tabel 3.1)
          </button>
        </div>
      </div>

      {activeSubTab === 'latar' ? (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <span>PROGRAM PERENCANAAN SUPERVISI AKADEMIK - {schoolInfo.name.toUpperCase()}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">Tahun Pelajaran {schoolInfo.academicYear} – Semester {schoolInfo.semester} | Kepala Sekolah: {schoolInfo.principal}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-3">
                <h4 className="font-bold text-slate-800 flex items-center space-x-2 text-sm">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>A. Latar Belakang & Urgensi</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Peningkatan mutu pembelajaran di SLB Muhammadiyah Ponjong menuntut pendekatan supervisi akademik yang adaptif terhadap ragam hambatan peserta didik (tunarungu, tunagrahita, autis, tunadaksa). Berdasarkan telaah modul ajar/PPI dan monitoring sebelumnya, ditemukan kesenjangan antara praktik pembelajaran konvensional dengan prinsip Pembelajaran Mendalam (Memahami, Mengaplikasi, Merefleksi) serta integrasi media/alat bantu adaptif.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 space-y-3">
                <h4 className="font-bold text-slate-800 flex items-center space-x-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>B. Tujuan Supervisi Akademik</span>
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Mengidentifikasi kesenjangan pembelajaran berdasarkan data RPP/PPI dan supervisi sebelumnya.</li>
                  <li>Menganalisis akar masalah pembelajaran secara objektif melalui dialog terbuka.</li>
                  <li>Menentukan solusi pembinaan yang spesifik (coaching, mentoring, pelatihan alat adaptif).</li>
                  <li>Menyiapkan instrumen telaah dan observasi kelas yang ramah disabilitas.</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50/60 p-5 rounded-xl border border-emerald-200 space-y-3">
              <h4 className="font-bold text-emerald-900 text-sm flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>C. Ruang Lingkup & Fokus Pembelajaran Mendalam SLB</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-emerald-950">
                <div className="bg-white p-3 rounded-lg border border-emerald-200/70 shadow-sm">
                  <strong className="block text-emerald-800 mb-1">1. Praktik Pedagogis Adaptif</strong>
                  Penggunaan metode multisensori, visual schedule, dan pembelajaran berdiferensiasi sesuai tingkat hambatan siswa.
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-200/70 shadow-sm">
                  <strong className="block text-emerald-800 mb-1">2. Budaya 'Saling Memuliakan'</strong>
                  Membangun iklim kelas yang inklusif, menghargai keunikan individu, serta komunikasi verbal dan nonverbal yang suportif.
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-200/70 shadow-sm">
                  <strong className="block text-emerald-800 mb-1">3. Asesmen Autentik Vokasi</strong>
                  Penilaian kemandirian dan keterampilan hidup (life skills) melalui unjuk kerja langsung dan portofolio.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">Matriks Perencanaan Supervisi Akademik Guru</h3>
              <p className="text-xs text-slate-500">Berdasarkan hasil identifikasi masalah, akar masalah, dan penentuan solusi bantuan (Tabel 3.1 Modul KS)</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Nama Guru & Unit</th>
                  <th className="py-3 px-4">Hasil Identifikasi Masalah</th>
                  <th className="py-3 px-4">Akar Masalah</th>
                  <th className="py-3 px-4">Solusi / Cara Bantuan (KS)</th>
                  <th className="py-3 px-4">Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {teachers.map((t, idx) => (
                  <tr key={t.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium">{idx + 1}</td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-800">{t.name}</div>
                      <div className="text-slate-500">{t.unit}</div>
                    </td>
                    <td className="py-3 px-4 max-w-xs">{t.problemId}</td>
                    <td className="py-3 px-4 max-w-xs font-medium text-amber-800">{t.rootCause}</td>
                    <td className="py-3 px-4 max-w-xs text-emerald-800 font-medium">{t.solution}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{t.scheduleDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
