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

  return (
    <div className="min-h-screen bg-slate-100 pb-12">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'dashboard' && <Dashboard teachers={teachers} setActiveTab={setActiveTab} />}
        {activeTab === 'program' && <ProgramPlan teachers={teachers} />}
        {activeTab === 'schedule' && <ScheduleManager teachers={teachers} setTeachers={setTeachers} />}
        {activeTab === 'pra' && <PraObservasi teachers={teachers} />}
        {activeTab === 'observation' && <ClassObservation teachers={teachers} setTeachers={setTeachers} />}
        {activeTab === 'evaluation' && <EvaluationSection teachers={teachers} />}
        {activeTab === 'reports' && <DocumentGenerator teachers={teachers} />}
      </main>
    </div>
  );
}
