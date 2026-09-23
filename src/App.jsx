import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProgramPlan from './components/ProgramPlan';
import ScheduleManager from './components/ScheduleManager';
import PraObservasi from './components/PraObservasi';
import ClassObservation from './components/ClassObservation';
import EvaluationSection from './components/EvaluationSection';
import DocumentGenerator from './components/DocumentGenerator';
import { initialTeachers } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [teachers, setTeachers] = useState(initialTeachers);

  // Kepala Sekolah (Luluk Bambang Sulistyo) sebagai satu-satunya pemilik akses edit penuh tanpa login
  const isKepsek = true;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Sidebar di Sebelah Kiri */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Konten Utama di Sebelah Kanan */}
      <div className="flex-1 flex flex-col min-w-0 pb-12">
        {/* Banner Info Peran / Hak Akses */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-between items-center no-print">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs px-3 py-1.5 rounded-lg font-medium flex items-center space-x-2 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Akses Masuk Langsung: <strong>Luluk Bambang Sulistyo, S.P., Gr., M.Pd. (Kepala Sekolah / Pemilik Hak Edit Penuh)</strong></span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">SLB Muhammadiyah Ponjong</span>
        </div>

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {activeTab === 'dashboard' && <Dashboard teachers={teachers} setActiveTab={setActiveTab} isKepsek={isKepsek} />}
          {activeTab === 'program' && <ProgramPlan teachers={teachers} />}
          {activeTab === 'schedule' && <ScheduleManager teachers={teachers} setTeachers={setTeachers} isKepsek={isKepsek} />}
          {activeTab === 'pra' && <PraObservasi teachers={teachers} />}
          {activeTab === 'observation' && <ClassObservation teachers={teachers} setTeachers={setTeachers} isKepsek={isKepsek} />}
          {activeTab === 'evaluation' && <EvaluationSection teachers={teachers} />}
          {activeTab === 'reports' && <DocumentGenerator teachers={teachers} />}
        </main>
      </div>
    </div>
  );
}
