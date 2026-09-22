import React, { useState } from 'react';
import { ClipboardCheck, Sparkles, CheckCircle2, Save, Award } from 'lucide-react';
import { observationRubricItems } from '../data/mockData';

export default function ClassObservation({ teachers, setTeachers }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState(teachers[0].id);
  const currentTeacher = teachers.find(t => t.id === selectedTeacherId) || teachers[0];

  const [scores, setScores] = useState(
    observationRubricItems.reduce((acc, item) => ({ ...acc, [item.id]: 3 }), {})
  );

  const [notes, setNotes] = useState({
    kelebihan: "Guru sangat sabar, menggunakan media konkret multisensori yang menarik perhatian siswa.",
    perbaikan: "Perlu penguatan teknik bertanya pemantik dan pelibatan merata.",
    rekomendasi: "Menerapkan metode pembelajaran berdiferensiasi berkelanjutan."
  });

  const [savedStatus, setSavedStatus] = useState(false);

  const handleScoreChange = (id, val) => {
    setScores(prev => ({ ...prev, [id]: parseInt(val) }));
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = observationRubricItems.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const handleSave = (e) => {
    e.preventDefault();
    // Update teacher scoreObs in main state
    const updated = teachers.map(t => {
      if (t.id === currentTeacher.id) {
        return { ...t, scoreObs: percentage, status: 'Selesai' };
      }
      return t;
    });
    setTeachers(updated);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">TAHAP 2 - OBSERVASI KELAS</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">Instrumen Observasi Pelaksanaan Pembelajaran (Lampiran 6)</h2>
          <p className="text-sm text-slate-500">Pencatatan data faktual di kelas secara objektif. Skor dihitung otomatis secara *real-time*.</p>
        </div>
        <div className="w-full sm:w-auto flex items-center space-x-3">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-center">
            <span className="text-xs text-emerald-600 block font-medium">Skor Otomatis</span>
            <span className="text-lg font-bold text-emerald-800">{percentage}% ({totalScore}/{maxScore})</span>
          </div>
          <select 
            value={selectedTeacherId}
            onChange={(e) => setSelectedTeacherId(e.target.value)}
            className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {teachers.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Lembar Pengamatan Pembelajaran di Kelas: {currentTeacher.name}</h3>
            <p className="text-xs text-slate-500">Skala Penilaian: 0 = Tidak Ada, 1 = Sangat Kurang, 2 = Kurang, 3 = Baik, 4 = Sangat Baik</p>
          </div>
          {savedStatus && (
            <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center space-x-1 animate-pulse">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tersimpan & Skor Diperbarui!</span>
            </span>
          )}
        </div>

        <form onSubmit={handleSave}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                  <th className="py-3 px-4 w-12 text-center">No</th>
                  <th className="py-3 px-4">Aspek yang Diamati (Prinsip Pembelajaran Mendalam SLB)</th>
                  <th className="py-3 px-4 w-40 text-center">Skor (0 - 4)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {observationRubricItems.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 text-center font-medium text-slate-500">{index + 1}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-800">{item.aspect}</div>
                      <div className="text-slate-400 text-[11px]">Kategori: {item.category}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <select 
                        value={scores[item.id]}
                        onChange={(e) => handleScoreChange(item.id, e.target.value)}
                        className="py-1.5 px-3 bg-slate-50 border border-slate-300 rounded-lg font-bold text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

          {/* Catatan Kesimpulan Observasi */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
            <h4 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Kesimpulan Pengamatan & Refleksi Faktual</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Kelebihan / Kekuatan Praktik:</label>
                <textarea 
                  rows={3}
                  value={notes.kelebihan}
                  onChange={(e) => setNotes({...notes, kelebihan: e.target.value})}
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Area Pengembangan / Perbaikan:</label>
                <textarea 
                  rows={3}
                  value={notes.perbaikan}
                  onChange={(e) => setNotes({...notes, perbaikan: e.target.value})}
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Rekomendasi / Solusi Lanjutan:</label>
                <textarea 
                  rows={3}
                  value={notes.rekomendasi}
                  onChange={(e) => setNotes({...notes, rekomendasi: e.target.value})}
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button 
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl transition flex items-center space-x-2 text-xs shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Simpan & Perbarui Skor Otomatis Guru</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
