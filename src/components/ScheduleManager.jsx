import React, { useState } from 'react';
import { Calendar, Users, Clock, Search, Edit3, PlusCircle, CheckCircle2, Save, X, Trash2 } from 'lucide-react';

export default function ScheduleManager({ teachers, setTeachers }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUnit, setFilterUnit] = useState('Semua');
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [newTeacher, setNewTeacher] = useState({
    name: '',
    nip: '',
    unit: 'SDLB',
    phase: 'Fase A',
    subject: 'Tematik & Bina Diri',
    problemId: 'Perlu penguatan strategi pembelajaran aktif multisensori.',
    rootCause: 'Guru memerlukan pengembangan variasi media pembelajaran adaptif.',
    solution: 'Pendampingan coaching dan pemodelan media pembelajaran.',
    scheduleDate: '2026-04-20',
    scheduleTime: '08.00 - 09.20',
    status: 'Terjadwal',
    scorePlan: 70,
    scoreObs: 0,
    notes: 'Jadwal baru.'
  });

  const filteredTeachers = teachers.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUnit = filterUnit === 'Semua' || t.unit.includes(filterUnit);
    return matchesSearch && matchesUnit;
  });

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setTeachers(teachers.map(t => t.id === editingTeacher.id ? editingTeacher : t));
    setEditingTeacher(null);
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const created = {
      ...newTeacher,
      id: `guru-${Date.now()}`
    };
    setTeachers([...teachers, created]);
    setIsAddingNew(false);
    setNewTeacher({
      name: '',
      nip: '',
      unit: 'SDLB',
      phase: 'Fase A',
      subject: 'Tematik & Bina Diri',
      problemId: 'Perlu penguatan strategi pembelajaran aktif multisensori.',
      rootCause: 'Guru memerlukan pengembangan variasi media pembelajaran adaptif.',
      solution: 'Pendampingan coaching dan pemodelan media pembelajaran.',
      scheduleDate: '2026-04-20',
      scheduleTime: '08.00 - 09.20',
      status: 'Terjadwal',
      scorePlan: 70,
      scoreObs: 0,
      notes: 'Jadwal baru.'
    });
  };

  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus data guru ini dari jadwal supervisi?')) {
      setTeachers(teachers.filter(t => t.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">JADWAL & PROFIL GURU</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">Manajemen Jadwal & Profil Pendidik SLB</h2>
          <p className="text-sm text-slate-500">Tambah guru baru, edit profil, atau sesuaikan jadwal observasi kelas.</p>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <button 
            onClick={() => setIsAddingNew(true)}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition flex items-center space-x-1.5 shadow-md whitespace-nowrap"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Tambah Guru & Jadwal Baru</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input 
            type="text" 
            placeholder="Cari nama guru atau mata pelajaran..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <select 
          value={filterUnit}
          onChange={(e) => setFilterUnit(e.target.value)}
          className="py-2 px-3 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-48"
        >
          <option value="Semua">Semua Unit</option>
          <option value="SDLB">SDLB</option>
          <option value="SMPLB">SMPLB</option>
          <option value="SMALB">SMALB</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTeachers.map((t, idx) => (
          <div key={t.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4 hover:border-emerald-300 transition relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-md text-xs border border-emerald-200">
                  {t.unit}
                </span>
                <h3 className="text-base font-bold text-slate-800 mt-2">{t.name}</h3>
                <p className="text-xs text-slate-500">NIP: {t.nip} | {t.phase}</p>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${t.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {t.status}
                </span>
                <button 
                  onClick={() => setEditingTeacher(t)}
                  className="bg-slate-100 hover:bg-emerald-700 hover:text-white p-2 rounded-xl text-slate-600 transition"
                  title="Edit Profil"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(t.id)}
                  className="bg-red-50 hover:bg-red-600 hover:text-white p-2 rounded-xl text-red-600 transition"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Mata Pelajaran: <strong>{t.subject}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>Hari / Tanggal: <strong>{t.scheduleDate}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Jam Pelajaran: <strong>{t.scheduleTime}</strong></span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="text-slate-500">Fokus: {t.solution.substring(0, 38)}...</span>
              <span className="text-emerald-700 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Terjadwal</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Tambah Guru Baru */}
      {isAddingNew && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-800 text-base">Tambah Guru & Jadwal Supervisi Baru</h3>
              <button onClick={() => setIsAddingNew(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddTeacher} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Guru & Gelar:</label>
                <input 
                  type="text"
                  placeholder="Contoh: Ahmad Fauzi, S.Pd."
                  value={newTeacher.name}
                  onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">NIP / NUPTK:</label>
                <input 
                  type="text"
                  placeholder="Masukkan NIP atau NUPTK"
                  value={newTeacher.nip}
                  onChange={(e) => setNewTeacher({...newTeacher, nip: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Unit / Ketunaan:</label>
                  <input 
                    type="text"
                    value={newTeacher.unit}
                    onChange={(e) => setNewTeacher({...newTeacher, unit: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Fase / Kelas:</label>
                  <input 
                    type="text"
                    value={newTeacher.phase}
                    onChange={(e) => setNewTeacher({...newTeacher, phase: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Mata Pelajaran / Tema:</label>
                <input 
                  type="text"
                  value={newTeacher.subject}
                  onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Tanggal Supervisi:</label>
                  <input 
                    type="date"
                    value={newTeacher.scheduleDate}
                    onChange={(e) => setNewTeacher({...newTeacher, scheduleDate: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Jam Pelajaran:</label>
                  <input 
                    type="text"
                    value={newTeacher.scheduleTime}
                    onChange={(e) => setNewTeacher({...newTeacher, scheduleTime: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={() => setIsAddingNew(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 transition flex items-center space-x-1.5 shadow"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Tambahkan Guru</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Guru & Jadwal */}
      {editingTeacher && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-800 text-base">Edit Profil Guru & Jadwal Supervisi</h3>
              <button onClick={() => setEditingTeacher(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Guru & Gelar:</label>
                <input 
                  type="text"
                  value={editingTeacher.name}
                  onChange={(e) => setEditingTeacher({...editingTeacher, name: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">NIP:</label>
                <input 
                  type="text"
                  value={editingTeacher.nip}
                  onChange={(e) => setEditingTeacher({...editingTeacher, nip: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Unit / Ketunaan:</label>
                  <input 
                    type="text"
                    value={editingTeacher.unit}
                    onChange={(e) => setEditingTeacher({...editingTeacher, unit: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Fase / Kelas:</label>
                  <input 
                    type="text"
                    value={editingTeacher.phase}
                    onChange={(e) => setEditingTeacher({...editingTeacher, phase: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Mata Pelajaran:</label>
                <input 
                  type="text"
                  value={editingTeacher.subject}
                  onChange={(e) => setEditingTeacher({...editingTeacher, subject: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Tanggal Supervisi:</label>
                  <input 
                    type="date"
                    value={editingTeacher.scheduleDate}
                    onChange={(e) => setEditingTeacher({...editingTeacher, scheduleDate: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Jam Pelajaran:</label>
                  <input 
                    type="text"
                    value={editingTeacher.scheduleTime}
                    onChange={(e) => setEditingTeacher({...editingTeacher, scheduleTime: e.target.value})}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Status Supervisi:</label>
                <select 
                  value={editingTeacher.status}
                  onChange={(e) => setEditingTeacher({...editingTeacher, status: e.target.value})}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Terjadwal">Terjadwal</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={() => setEditingTeacher(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 transition flex items-center space-x-1.5 shadow"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
