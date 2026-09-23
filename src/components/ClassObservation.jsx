import React, { useState } from 'react';
import { ClipboardCheck, Sparkles, CheckCircle2, Save, Award, Camera, Video, Upload, Link as LinkIcon, HelpCircle, X } from 'lucide-react';
import { observationRubricItems } from '../data/mockData';

export default function ClassObservation({ teachers, setTeachers }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState(teachers[0].id);
  const currentTeacher = teachers.find(t => t.id === selectedTeacherId) || teachers[0];

  const [scores, setScores] = useState(
    observationRubricItems.reduce((acc, item) => ({ ...acc, [item.id]: 3 }), {})
  );

  const [activeRubricAspect, setActiveRubricAspect] = useState(null);

  const [notes, setNotes] = useState({
    kelebihan: "Guru sangat sabar, menggunakan media konkret multisensori yang menarik perhatian siswa.",
    perbaikan: "Perlu penguatan teknik bertanya pemantik dan pelibatan merata.",
    rekomendasi: "Menerapkan metode pembelajaran berdiferensiasi berkelanjutan."
  });

  const [mediaFiles, setMediaFiles] = useState({
    photos: [],
    videoUrl: ''
  });

  const [savedStatus, setSavedStatus] = useState(false);

  const handleScoreChange = (id, val) => {
    setScores(prev => ({ ...prev, [id]: parseInt(val) }));
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = observationRubricItems.length * 4; // 14 indikator * 4 = 56
  const percentage = Math.round((totalScore / maxScore) * 100);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => URL.createObjectURL(file));
    setMediaFiles(prev => ({ ...prev, photos: [...prev.photos, ...newPhotos] }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updated = teachers.map(t => {
      if (t.id === currentTeacher.id) {
        return { 
          ...t, 
          scoreObs: percentage, 
          status: 'Selesai',
          media: mediaFiles 
        };
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
          <h2 className="text-xl font-bold text-slate-800 mt-1">Instrumen Observasi Kelas (Lampiran 6 Modul KS)</h2>
          <p className="text-sm text-slate-500">14 Indikator utama pengamatan pelaksanaan pembelajaran lengkap dengan kriteria skor 0-4.</p>
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
              <option key={t.id} value={t.id}>{t.name} ({t.unit})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Lembar Pengamatan Kelas & Dokumentasi Guru: {currentTeacher.name}</h3>
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
                  <th className="py-3 px-4">Aspek Indikator Observasi (Lampiran 6 Modul KS)</th>
                  <th className="py-3 px-4 w-44 text-center">Skor (0 - 4)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {observationRubricItems.map((item, index) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 text-center font-medium text-slate-500 align-top">{index + 1}</td>
                    <td className="py-3 px-4 align-top space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">{item.category}</span>
                        <div className="font-bold text-slate-900 text-sm">{item.aspect}</div>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">{item.desc}</p>
                      <button
                        type="button"
                        onClick={() => setActiveRubricAspect(item)}
                        className="text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-lg transition inline-flex items-center space-x-1"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Lihat Detail Kriteria Skor (0 - 4)</span>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-center align-top">
                      <select 
                        value={scores[item.id]}
                        onChange={(e) => handleScoreChange(item.id, e.target.value)}
                        className="py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg font-bold text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs w-full"
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

          {/* Bagian Unggah Foto & Tautan Video Pembelajaran (Dipertahankan) */}
          <div className="p-6 bg-emerald-50/40 border-t border-slate-200 space-y-4">
            <h4 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>Dokumentasi Observasi (Unggah Foto & Tautan Video)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 shadow-sm">
                <label className="font-bold text-slate-700 flex items-center space-x-2">
                  <Upload className="w-4 h-4 text-emerald-600" />
                  <span>Unggah Foto Kegiatan Pembelajaran (Bisa lebih dari 1):</span>
                </label>
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple
                  onChange={handlePhotoUpload}
                  className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                />
                {mediaFiles.photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {mediaFiles.photos.map((src, i) => (
                      <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-300 shadow">
                        <img src={src} alt="Bukti Observasi" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 shadow-sm">
                <label className="font-bold text-slate-700 flex items-center space-x-2">
                  <Video className="w-4 h-4 text-emerald-600" />
                  <span>Tautan / Link Video Pembelajaran (YouTube / Google Drive):</span>
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input 
                    type="url"
                    placeholder="https://youtube.com/watch?v=... atau link Drive"
                    value={mediaFiles.videoUrl}
                    onChange={(e) => setMediaFiles({...mediaFiles, videoUrl: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  />
                </div>
                <p className="text-[11px] text-slate-400">Tempel tautan video rekaman kegiatan mengajar di kelas untuk arsip supervisi.</p>
              </div>
            </div>
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

      {/* Modal Detail Kriteria Rubrik Skor Observasi (0-4) */}
      {activeRubricAspect && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 sticky top-0 bg-white z-10">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">LAMPIRAN 6 MODUL KS</span>
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
                onClick={() => setActiveRubricAspect(null)}
                className="bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-emerald-900 transition shadow"
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
