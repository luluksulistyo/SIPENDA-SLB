import React from 'react';
import { Printer } from 'lucide-react';
import { schoolInfo } from '../data/mockData';

export default function DocumentGenerator({ teachers }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Tombol Cetak / Aksi */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 no-print">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">DOKUMEN RESMI</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">Pusat Cetak Dokumen & Laporan Supervisi Akademik</h2>
          <p className="text-sm text-slate-500">Cetak dokumen lengkap berstandar Modul KS.02.2026 siap tanda tangan Kepala Sekolah.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl transition flex items-center space-x-2 text-sm shadow-md"
        >
          <Printer className="w-5 h-5" />
          <span>Cetak Semua Dokumen (PDF / Printer)</span>
        </button>
      </div>

      {/* Konten Dokumen Resmi Format A4 untuk Cetak */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm print-container space-y-10 text-slate-800">
        
        {/* KOP SURAT DENGAN LOGO */}
        <div className="border-b-4 border-slate-900 pb-6 flex items-center space-x-6">
          <div className="flex-shrink-0">
            <img src="/logo-slb.png" alt="Logo SLB Muhammadiyah Ponjong" className="w-24 h-24 object-contain" />
          </div>
          <div className="text-center flex-1 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold tracking-widest text-slate-700 uppercase">MAJELIS PENDIDIKAN DASAR DAN MENENGAH PDM GUNUNGKIDUL</h3>
            <h2 className="text-lg sm:text-2xl font-black uppercase text-slate-900 tracking-wide">SEKOLAH LUAR BIASA (SLB) MUHAMMADIYAH PONJONG</h2>
            <p className="text-[11px] text-slate-600">Alamat: {schoolInfo.address} | NPSN: {schoolInfo.npsn}</p>
          </div>
        </div>

        {/* JUDUL LAPORAN */}
        <div className="text-center space-y-2">
          <h1 className="text-lg font-bold uppercase underline">LAPORAN UTAMA PROGRAM DAN PELAKSANAAN SUPERVISI AKADEMIK</h1>
          <p className="text-sm font-semibold">TAHUN PELAJARAN {schoolInfo.academicYear} – SEMESTER {schoolInfo.semester.toUpperCase()}</p>
        </div>

        {/* BAGIAN I: PENDAHULUAN */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase text-slate-900 bg-slate-100 p-2 border-l-4 border-emerald-700">I. LATAR BELAKANG DAN TUJUAN</h4>
          <p className="text-xs leading-relaxed text-justify">
            Peningkatan kualitas pembelajaran di SLB Muhammadiyah Ponjong merupakan upaya strategis dalam menciptakan pengalaman belajar yang berkesadaran, bermakna, dan menggembirakan bagi peserta didik berkebutuhan khusus. Berdasarkan hasil telaah dokumen perencanaan pembelajaran (RPP/PPI) dan supervisi akademik sebelumnya, masih ditemukan tantangan dalam hal variasi strategi pembelajaran aktif, pemanfaatan media adaptif, serta asesmen autentik. Oleh karena itu, disusunlah program supervisi akademik yang sistematis, berbasis data, dan berorientasi pada peningkatan kualitas pembelajaran melalui pendekatan Pembelajaran Mendalam (Deep Learning) dan dialog reflektif berbasis <em>coaching</em>.
          </p>
        </div>

        {/* BAGIAN II: JADWAL PELAKSANAAN */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase text-slate-900 bg-slate-100 p-2 border-l-4 border-emerald-700">II. JADWAL PELAKSANAAN SUPERVISI AKADEMIK</h4>
          <table className="w-full text-left text-xs border border-slate-300 border-collapse">
            <thead>
              <tr className="bg-slate-200 text-slate-800 font-bold border-b border-slate-300">
                <th className="py-2.5 px-3 border border-slate-300">No</th>
                <th className="py-2.5 px-3 border border-slate-300">Nama Pendidik & NIP</th>
                <th className="py-2.5 px-3 border border-slate-300">Unit / Fase</th>
                <th className="py-2.5 px-3 border border-slate-300">Mata Pelajaran</th>
                <th className="py-2.5 px-3 border border-slate-300">Hari / Tanggal</th>
                <th className="py-2.5 px-3 border border-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t, idx) => (
                <tr key={t.id} className="border-b border-slate-300">
                  <td className="py-2 px-3 border border-slate-300 text-center">{idx + 1}</td>
                  <td className="py-2 px-3 border border-slate-300 font-semibold">{t.name}</td>
                  <td className="py-2 px-3 border border-slate-300">{t.unit}</td>
                  <td className="py-2 px-3 border border-slate-300">{t.subject}</td>
                  <td className="py-2 px-3 border border-slate-300">{t.scheduleDate}</td>
                  <td className="py-2 px-3 border border-slate-300 font-medium">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BAGIAN III: HASIL EVALUASI & TINDAK LANJUT */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase text-slate-900 bg-slate-100 p-2 border-l-4 border-emerald-700">III. REKAPITULASI HASIL EVALUASI & TINDAK LANJUT</h4>
          <table className="w-full text-left text-xs border border-slate-300 border-collapse">
            <thead>
              <tr className="bg-slate-200 text-slate-800 font-bold border-b border-slate-300">
                <th className="py-2.5 px-3 border border-slate-300">No</th>
                <th className="py-2.5 px-3 border border-slate-300">Nama Pendidik</th>
                <th className="py-2.5 px-3 border border-slate-300">Skor Telaah RPP</th>
                <th className="py-2.5 px-3 border border-slate-300">Skor Observasi</th>
                <th className="py-2.5 px-3 border border-slate-300">Tindak Lanjut Utama (Solusi KS)</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t, idx) => (
                <tr key={t.id} className="border-b border-slate-300">
                  <td className="py-2 px-3 border border-slate-300 text-center">{idx + 1}</td>
                  <td className="py-2 px-3 border border-slate-300 font-semibold">{t.name}</td>
                  <td className="py-2 px-3 border border-slate-300 text-center">{t.scorePlan}%</td>
                  <td className="py-2 px-3 border border-slate-300 text-center">{t.scoreObs > 0 ? `${t.scoreObs}%` : '-'}</td>
                  <td className="py-2 px-3 border border-slate-300">{t.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BAGIAN IV: PENUTUP */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase text-slate-900 bg-slate-100 p-2 border-l-4 border-emerald-700">IV. PENUTUP</h4>
          <p className="text-xs leading-relaxed text-justify">
            Demikian laporan pelaksanaan supervisi akademik ini disusun sebagai acuan pembinaan profesional berkelanjutan di SLB Muhammadiyah Ponjong. Melalui pendekatan kolaboratif dan reflektif, diharapkan terjadi peningkatan mutu pembelajaran yang berdampak langsung pada kemandirian dan prestasi peserta didik berkebutuhan khusus.
          </p>
        </div>

        {/* TANDA TANGAN */}
        <div className="pt-10 flex justify-between items-start text-xs">
          <div>
            <p>Mengetahui,</p>
            <p>Pengawas Sekolah / PDM Gunungkidul</p>
            <div className="h-16"></div>
            <p className="font-bold underline">( _________________________ )</p>
            <p>NIP. .........................................</p>
          </div>
          <div className="text-right">
            <p>{schoolInfo.city}, {schoolInfo.dateReport}</p>
            <p>Kepala SLB Muhammadiyah Ponjong</p>
            <div className="h-16"></div>
            <p className="font-bold underline">{schoolInfo.principal}</p>
            <p>NIP. {schoolInfo.principalNip}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
