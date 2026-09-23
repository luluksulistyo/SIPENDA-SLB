import React, { useState } from 'react';
import { Users, CheckCircle2, Sparkles, ClipboardList, Save, HelpCircle, X } from 'lucide-react';
import { rppRubricItems } from '../data/mockData';

export default function PraObservasi({ teachers }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState(teachers[0].id);
  const currentTeacher = teachers.find(t => t.id === selectedTeacherId) || teachers[0];

  const [rppScores, setRppScores] = useState(
    rppRubricItems.reduce((acc, item) => ({ ...acc, [item.id]: 3 }), {})
  );

  const [activeRubricAspect, setActiveRubricAspect] = useState(null);

  const [coachingAnswers, setCoachingAnswers] = useState({
    tujuan: "Memastikan siswa tunarungu memahami konsep bilangan dengan bantuan media benda konkret dan bahasa isyarat.",
    strategi: "Menggunakan metode demonstrasi multisensori dan kerja kelompok berpasangan.",
    aktivitas: "Siswa mengamati benda nyata, berdiskusi kelompok kecil, dan mempresentasikan hasil.",
    asesmen: "Asesmen formatif lisan / isyarat dan lembar kerja adaptif.",
    kendala: "Sebagian siswa masih pasif dan membutuhkan bimbingan individual lebih intens."
  });

  const [savedStatus, setSavedStatus] = useState(false);

  const handleRppScoreChange = (id, val) => {
    setRppScores(prev => ({ ...prev, [id]: parseInt(val) }));
  };

  const totalRppScore = Object.values(rppScores).reduce((a, b) => a + b, 0);
  const maxRppScore = rppRubricItems.length * 4; // 7 aspek * 4 = 28
  const rppPercentage = Math.round((totalRppScore / maxRppScore) * 100);

  // Kategori Penilaian Sesuai Modul KS
  let categoryName = "Terlaksana / Optimal (85% - 100%)";
  let categoryColor = "text-emerald-800 bg-emerald-50 border-emerald-200";
  if (rppPercentage < 55) {
    categoryName = "Belum Terlihat (< 55%): Perlu pendampingan intensif";
    categoryColor = "text-red-800 bg-red-50 border-red-200";
  } else if (rppPercentage < 70) {
    categoryName = "Cukup (55% - 69%)";
    categoryColor = "text-amber-800 bg-amber-50 border-amber-200";
  } else if (rppPercentage < 85) {
    categoryName = "Belum Optimal / Baik (70% - 84%)";
    categoryColor = "text-blue-800 bg-blue-50 border-blue-200";
  }

  const handleSave = (e) => {
    e.preventDefault();
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">TAHAP 1 - PRA OBSERVASI</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">Telaah Dokumen RPP (Lampiran 5 Modul KS) & Coaching</h2>
          <p className="text-sm text-slate-500">7 Aspek Resmi SLB Muhammadiyah Ponjong Gunungkidul lengkap dengan kriteria rubrik skor 0-4.</p>
        </div>
        <div className="w-full sm:w-auto flex items-center space-x-3">
          <div className="bg-purple-50 border border-purple-200 px-4 py-2 rounded-xl text-center">
            <span className="text-xs text-purple-600 block font-medium">Skor Akhir RPP</span>
            <span className="text-lg font-bold text-purple-800">{rppPercentage}% ({totalRppScore}/{maxRppScore})</span>
          </div>

          <select 
            value={selectedTeacherId}
            onChange={(e) => setSelectedTeacherId(e.target.value)}
            className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {teachers.map(t => (
              <option key={t.id} value={t.id}>{t.name} ({t.unit})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Informasi Guru */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2 border-b border-slate-100 pb-3">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Profil & Analisis Pra-Kunjungan</span>
            </h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block">Nama Guru:</span>
                <strong className="text-slate-800 text-sm">{currentTeacher.name}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Unit / Fase:</span>
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">{currentTeacher.unit} - {currentTeacher.phase}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Identifikasi Masalah:</span>
                <p className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-1">{currentTeacher.problemId}</p>
              </div>
              <div>
                <span className="text-slate-400 block">Akar Masalah:</span>
                <p className="text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-100 mt-1 font-medium">{currentTeacher.rootCause}</p>
              </div>
              <div>
                <span className="text-slate-400 block">Rencana Solusi Bantuan KS:</span>
                <p className="text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 mt-1 font-medium">{currentTeacher.solution}</p>
              </div>

              <div className={`p-3 rounded-xl border mt-3 ${categoryColor}`}>
                <strong className="block text-[11px] mb-0.5">Kategori RPP:</strong>
                <span className="font-bold">{categoryName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Telaah Dokumen & Coaching */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* INSTRUMEN TELAAH RPP 7 ASPEK LAMPIRAN 5 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                  <ClipboardList className="w-4 h-4 text-emerald-600" />
                  <span>I. Instrumen Telaah RPP (Lampiran 5 Modul KS)</span>
                </h3>
                <p className="text-xs text-slate-500">Klik tombol "Lihat Kriteria" pada setiap aspek untuk membaca detail kriteria skor 0 s.d. 4</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                    <th className="py-3 px-4 w-12 text-center">No</th>
                    <th className="py-3 px-4">Aspek Penilaian & Kriteria Rubrik</th>
                    <th className="py-3 px-4 w-44 text-center">Skor (0 - 4)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {rppRubricItems.map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-center font-medium text-slate-500 align-top">{index + 1}</td>
                      <td className="py-3 px-4 align-top space-y-2">
                        <div className="font-bold text-slate-900 text-sm">{item.aspect}</div>
                        <button
                          type="button"
                          onClick={() => setActiveRubricAspect(item)}
                          className="text-[11px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2.5 py-1 rounded-lg transition flex items-center space-x-1"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Lihat Detail Kriteria Skor (0 - 4)</span>
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center align-top">
                        <select 
                          value={rppScores[item.id]}
                          onChange={(e) => handleRppScoreChange(item.id, e.target.value)}
                          className="py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg font-bold text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs w-full"
                        >
                          <option value={0}>0 - Tidak Ada</option>
                          <option value={1}>1 - Sangat Kurang</option>
                          <option value={2}>2 - Kurang</option>
                          <option value={3}>3 - Baik</option>
                          <option value={4}>4 - Sangat Baik</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DIALOG COACHING PRA-OBSERVASI */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-base flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>II. Lembar Catatan Dialog Coaching Pra-Observasi</span>
                </h3>
                <p className="text-xs text-slate-500">Berdasarkan panduan Tabel 4.1 Modul Pelatihan Kepala Sekolah</p>
              </div>
              {savedStatus && (
                <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center space-x-1 animate-pulse">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tersimpan!</span>
                </span>
              )}
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">1. Tujuan Pembelajaran & Ketercapaian Kompetensi Khusus:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.tujuan}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, tujuan: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">2. Strategi / Model Pembelajaran Adaptif:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.strategi}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, strategi: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">3. Aktivitas & Keterlibatan Siswa Berkebutuhan Khusus:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.aktivitas}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, aktivitas: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">4. Bentuk Asesmen Autentik:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.asesmen}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, asesmen: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">5. Fokus Pengamatan & Kesepakatan Waktu Observasi:</label>
                <input 
                  type="text"
                  value={coachingAnswers.kendala}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, kendala: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl transition flex items-center space-x-2 text-xs shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Hasil Telaah RPP & Pra-Observasi</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Modal Detail Kriteria Rubrik Skor (0-4) Per Aspek */}
      {activeRubricAspect && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 sticky top-0 bg-white z-10">
              <div>
                <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded">RUBRIK LAMPIRAN 5 MODUL KS</span>
                <h3 className="font-bold text-slate-900 text-base mt-1">{activeRubricAspect.aspect}</h3>
              </div>
              <button onClick={() => setActiveRubricAspect(null)} className="text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-1">
                <strong className="text-emerald-900 block text-sm font-bold">Skor 4 (Sangat Baik):</strong>
                <p>{activeRubricAspect.scores[4]}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 space-y-1">
                <strong className="text-blue-900 block text-sm font-bold">Skor 3 (Baik):</strong>
                <p>{activeRubricAspect.scores[3]}</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-1">
                <strong className="text-amber-900 block text-sm font-bold">Skor 2 (Kurang):</strong>
                <p>{activeRubricAspect.scores[2]}</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 space-y-1">
                <strong className="text-orange-900 block text-sm font-bold">Skor 1 (Sangat Kurang):</strong>
                <p>{activeRubricAspect.scores[1]}</p>
              </div>

              <div className="bg-red-50 p-4 rounded-xl border border-red-200 space-y-1">
                <strong className="text-red-900 block text-sm font-bold">Skor 0 (Tidak Ada):</strong>
                <p>{activeRubricAspect.scores[0]}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button 
                type="button"
                onClick={() => setActiveTab('reports')}
                onClick={() => setActiveRubricAspect(null)}
                className="bg-purple-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-purple-900 transition shadow"
              >
                Tutup Kriteria
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
