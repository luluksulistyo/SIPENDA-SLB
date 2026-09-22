import React, { useState } from 'react';
import { Users, CheckCircle2, Sparkles, FileText, HelpCircle, Save } from 'lucide-react';

export default function PraObservasi({ teachers }) {
  const [selectedTeacherId, setSelectedTeacherId] = useState(teachers[0].id);
  const currentTeacher = teachers.find(t => t.id === selectedTeacherId) || teachers[0];

  const [coachingAnswers, setCoachingAnswers] = useState({
    tujuan: "Memastikan siswa tunarungu memahami konsep bilangan dengan bantuan media benda konkret dan bahasa isyarat.",
    strategi: "Menggunakan metode demonstrasi multisensori dan kerja kelompok berpasangan.",
    aktivitas: "Siswa mengamati benda nyata, berdiskusi kelompok kecil, dan mempresentasikan hasil.",
    asesmen: "Asesmen formatif lisan / isyarat dan lembar kerja adaptif.",
    kendala: "Sebagian siswa masih pasif dan membutuhkan bimbingan individual lebih intens."
  });

  const [savedStatus, setSavedStatus] = useState(false);

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
          <h2 className="text-xl font-bold text-slate-800 mt-1">Dialog Coaching & Telaah RPP / PPI</h2>
          <p className="text-sm text-slate-500">Membangun kemitraan setara, menyepakati fokus observasi, dan menggali kesiapan guru.</p>
        </div>
        <div className="w-full sm:w-auto">
          <label className="block text-xs font-semibold text-slate-600 mb-1">Pilih Guru Sasaran:</label>
          <select 
            value={selectedTeacherId}
            onChange={(e) => setSelectedTeacherId(e.target.value)}
            className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
          >
            {teachers.map(t => (
              <option key={t.id} value={t.id}>{t.name} ({t.unit})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Informasi Guru & Rencana Solusi */}
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
            </div>
          </div>
        </div>

        {/* Kolom Simulasi Dialog Coaching Pra-Observasi (Tabel 4.1 Modul KS) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-base flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>Lembar Catatan Dialog Coaching Pra-Observasi</span>
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
                  placeholder="Apa tujuan pembelajaran yang ingin dicapai..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">2. Strategi / Model Pembelajaran Adaptif:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.strategi}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, strategi: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  placeholder="Strategi apa yang digunakan..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">3. Aktivitas & Keterlibatan Siswa Berkebutuhan Khusus:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.aktivitas}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, aktivitas: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  placeholder="Bagaimana aktivitas siswa..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">4. Bentuk Asesmen Autentik:</label>
                <textarea 
                  rows={2}
                  value={coachingAnswers.asesmen}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, asesmen: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  placeholder="Bentuk asesmen..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">5. Fokus Pengamatan & Kesepakatan Waktu Observasi:</label>
                <input 
                  type="text"
                  value={coachingAnswers.kendala}
                  onChange={(e) => setCoachingAnswers({...coachingAnswers, kendala: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  placeholder="Fokus yang ingin dibantu..."
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-xl transition flex items-center space-x-2 text-xs shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Catatan Pra-Observasi</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
