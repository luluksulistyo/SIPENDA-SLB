import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, Sparkles, BookOpen, Save, FileText } from 'lucide-react';
import { schoolInfo } from '../data/mockData';

export default function EvaluationSection({ teachers }) {
  const [activeTab, setActiveTab] = useState('evaluasi');

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">BAB 5 - EVALUASI & REFLEKSI</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">Evaluasi, Refleksi Mandiri KS, dan Tindak Lanjut (RTL)</h2>
          <p className="text-sm text-slate-500">Menerjemahkan data observasi menjadi tindakan pembinaan nyata yang terukur.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab('evaluasi')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeTab === 'evaluasi' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Analisis Kuantitatif & Kualitatif
          </button>
          <button 
            onClick={() => setActiveTab('rtl')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${activeTab === 'rtl' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Rencana Tindak Lanjut (RTL)
          </button>
        </div>
      </div>

      {activeTab === 'evaluasi' ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-800 text-base">Rekapitulasi Hasil Evaluasi Supervisi Akademik Guru</h3>
              <p className="text-xs text-slate-500">{schoolInfo.name} | Semester {schoolInfo.semester} {schoolInfo.academicYear}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">No</th>
                    <th className="py-3 px-4">Nama Pendidik & Unit</th>
                    <th className="py-3 px-4 text-center">Skor Perencanaan</th>
                    <th className="py-3 px-4 text-center">Skor Observasi</th>
                    <th className="py-3 px-4">Refleksi Akar Masalah</th>
                    <th className="py-3 px-4">Status</th>
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
                      <td className="py-3 px-4 text-center font-bold text-purple-700">{t.scorePlan}%</td>
                      <td className="py-3 px-4 text-center font-bold text-emerald-700">{t.scoreObs > 0 ? `${t.scoreObs}%` : '-'}</td>
                      <td className="py-3 px-4 text-slate-600 max-w-xs">{t.rootCause}</td>
                      <td className="py-3 px-4">
                        <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-xs font-semibold">
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Interpretasi Kepala Sekolah (Analisis Komprehensif):</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secara umum, perencanaan dan pelaksanaan pembelajaran di SLB Muhammadiyah Ponjong sudah berjalan pada kategori <strong>Baik (Rata-rata 73%)</strong>. Guru-guru menunjukkan dedikasi tinggi dalam mendampingi anak berkebutuhan khusus. Namun, penguatan masih diperlukan pada optimalisasi media pembelajaran adaptif berbasis TIK/multisensori, peningkatan aktivitas berpikir kritis sederhana (HOTS), serta pembiasaan refleksi mandiri di akhir pembelajaran bagi siswa disabilitas.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-slate-800 text-sm">Matriks Rencana Tindak Lanjut (RTL) & Pembinaan Berkelanjutan</h3>
            <p className="text-xs text-slate-500">Tindak lanjut spesifik, terukur, dan berjadwal untuk peningkatan mutu pembelajaran SLB.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Nama Pendidik</th>
                  <th className="py-3 px-4">Temuan / Area Perbaikan</th>
                  <th className="py-3 px-4">Tindak Lanjut (Solusi Spesifik)</th>
                  <th className="py-3 px-4">Peran Kepala Sekolah</th>
                  <th className="py-3 px-4">Waktu Monitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {teachers.map((t, idx) => (
                  <tr key={t.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium">{idx + 1}</td>
                    <td className="py-3 px-4 font-bold text-slate-800">{t.name}</td>
                    <td className="py-3 px-4 text-slate-600 max-w-xs">{t.problemId}</td>
                    <td className="py-3 px-4 text-emerald-800 font-medium max-w-xs">{t.solution}</td>
                    <td className="py-3 px-4 text-slate-700">Coaching & Modeling</td>
                    <td className="py-3 px-4 whitespace-nowrap">2 Minggu ke depan</td>
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
