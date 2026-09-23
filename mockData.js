export const schoolInfo = {
  npsn: "20361234",
  name: "SLB Muhammadiyah Ponjong",
  address: "Jl. Raya Ponjong - Karangmojo KM. 2, Ponjong, Gunungkidul, D.I. Yogyakarta",
  principal: "Luluk Bambang Sulistyo, S.P., Gr., M.Pd.",
  principalNip: "19780820 200501 1 009",
  academicYear: "2025/2026",
  semester: "Ganjil",
  city: "Gunungkidul",
  dateReport: "15 April 2026"
};

export const initialTeachers = [
  {
    id: "guru-1",
    name: "Alvian Nur Huda, S.Pd.",
    nip: "19920310 201903 1 001",
    unit: "SDLB (Tunarungu / Hambatan Pendengaran)",
    phase: "Fase B (Kelas 4)",
    subject: "Tematik & Bahasa Isyarat",
    problemId: "Pembelajaran masih didominasi ceramah visual, siswa pasif saat diskusi kelompok, asesmen belum mengukur HOTS.",
    rootCause: "Guru belum terbiasa merencanakan aktivitas active learning berdiferensiasi untuk hambatan pendengaran.",
    solution: "Coaching & Modeling pembelajaran interaktif berbasis visual-taktil & media konkret.",
    scheduleDate: "2026-04-16",
    scheduleTime: "08.00 - 09.20",
    status: "Selesai",
    scorePlan: 71,
    scoreObs: 74,
    notes: "Sudah ada peningkatan partisipasi siswa menggunakan media kartu isyarat dan benda konkret."
  },
  {
    id: "guru-2",
    name: "Ninda Pradika Riyadi, S.Pd.",
    nip: "19940512 202012 1 003",
    unit: "SMPLB (Tunagrahita / Hambatan Intelektual)",
    phase: "Fase D (Kelas 7)",
    subject: "Vokasional & Keterampilan Hidup",
    problemId: "Siswa kurang fokus, materi belum dikaitkan dengan konteks nyata kehidupan sehari-hari.",
    rootCause: "Guru belum mengoptimalkan pembelajaran kontekstual (project-based sederhana).",
    solution: "Pendampingan penyusunan skenario pembelajaran kontekstual & pembagian peran tugas kecil.",
    scheduleDate: "2026-04-17",
    scheduleTime: "09.30 - 10.50",
    status: "Selesai",
    scorePlan: 75,
    scoreObs: 76,
    notes: "Praktik pembuatan kerajinan tangan sederhana mulai melibatkan motorik halus siswa."
  },
  {
    id: "guru-3",
    name: "Chindytita Hantari, S.Pd.",
    nip: "19950822 202103 2 004",
    unit: "SMALB (Autis / Hambatan Spektrum Autisme)",
    phase: "Fase E (Kelas 10)",
    subject: "Kemandirian & Sosialisasi",
    problemId: "Interaksi sosial antar siswa autis masih rendah, belum ada lembar kerja terstruktur visual.",
    rootCause: "Kurangnya pemahaman penerapan visual schedule dan structured teaching (TEACCH approach).",
    solution: "Pelatihan mini & review bersama penggunaan PECS (Picture Exchange Communication System).",
    scheduleDate: "2026-04-18",
    scheduleTime: "08.30 - 09.50",
    status: "Selesai",
    scorePlan: 68,
    scoreObs: 72,
    notes: "Penerapan jadwal visual (visual schedule) membantu ketenangan dan fokus siswa autis."
  },
  {
    id: "guru-4",
    name: "Nuri Afriana Fawaid, S.Pd.",
    nip: "19930214 201903 2 002",
    unit: "SDLB (Tunadaksa / Hambatan Fisik)",
    phase: "Fase C (Kelas 5)",
    subject: "Matematika Adaptif & IT Dasar",
    problemId: "Media pembelajaran digital interaktif belum tersedia untuk siswa dengan keterbatasan motorik.",
    rootCause: "Guru belum mengeksplorasi assistive technology atau perangkat bantu sederhana.",
    solution: "Coaching pemanfaatan aplikasi game edukasi adaptif dan switch control.",
    scheduleDate: "2026-04-21",
    scheduleTime: "10.00 - 11.20",
    status: "Terjadwal",
    scorePlan: 65,
    scoreObs: 0,
    notes: "Menunggu pelaksanaan pra-observasi dan penyiapan media adaptif."
  },
  {
    id: "guru-5",
    name: "Wagiyono, A.Md.",
    nip: "19800415 200801 1 004",
    unit: "SMPLB (Keterampilan Vokasional)",
    phase: "Fase D (Kelas 8)",
    subject: "Tata Busana & Kriya",
    problemId: "Siswa memerlukan pendampingan motorik secara personal dalam praktik menjahit.",
    rootCause: "Rasio pendampingan praktik masih perlu dioptimalkan.",
    solution: "Pendampingan kelompok kecil dan peraga langkah kerja visual.",
    scheduleDate: "2026-04-22",
    scheduleTime: "08.00 - 09.20",
    status: "Terjadwal",
    scorePlan: 70,
    scoreObs: 0,
    notes: "Persiapan media peraga langkah kerja."
  },
  {
    id: "guru-6",
    name: "Yunita Catur Pratiwi, A.Md.Pust.",
    nip: "19910606 201903 2 005",
    unit: "SLB (Pengelola Perpustakaan & Literasi)",
    phase: "Semua Fase",
    subject: "Literasi Inklusif & Pojok Baca",
    problemId: "Minat kunjungan literasi cetak braille dan buku bergambar interaktif masih terbatas.",
    rootCause: "Belum terintegrasinya program literasi perpustakaan ke dalam RPP tematik.",
    solution: "Coaching kolaborasi guru kelas dengan pengelola perpustakaan.",
    scheduleDate: "2026-04-23",
    scheduleTime: "10.00 - 11.00",
    status: "Terjadwal",
    scorePlan: 72,
    scoreObs: 0,
    notes: "Penataan pojok baca multisensori."
  },
  {
    id: "guru-7",
    name: "Siti Nuraida",
    nip: "19871012 201001 2 008",
    unit: "SDLB (Kelas Permulaan / Tunagrahita Ringan)",
    phase: "Fase A (Kelas 1)",
    subject: "Bina Diri & Pra-Akademik",
    problemId: "Siswa baru kelas 1 memerlukan adaptasi rutinitas kelas dan kemandirian dasar.",
    rootCause: "Transisi dari rumah ke sekolah memerlukan pendekatan habituasi rutin.",
    solution: "Mentoring penguatan rutinitas visual dan bimbingan bina diri.",
    scheduleDate: "2026-04-24",
    scheduleTime: "08.00 - 09.20",
    status: "Terjadwal",
    scorePlan: 74,
    scoreObs: 0,
    notes: "Penyusunan tahapan bina diri harian."
  },
  {
    id: "guru-8",
    name: "Eis Handayani, S.Pd.",
    nip: "19890418 201403 2 006",
    unit: "SMALB (Kemandirian & Vokasi Tata Boga)",
    phase: "Fase F (Kelas 11)",
    subject: "Keterampilan Boga & Kewirausahaan",
    problemId: "Keselamatan kerja praktik boga siswa perlu pengawasan dan SOP visual.",
    rootCause: "SOP keselamatan kerja belum ditempel dalam bentuk simbol gambar yang mudah dipahami.",
    solution: "Penyusunan poster SOP visual dapur boga dan pendampingan praktik.",
    scheduleDate: "2026-04-27",
    scheduleTime: "09.00 - 10.30",
    status: "Terjadwal",
    scorePlan: 76,
    scoreObs: 0,
    notes: "Pembuatan media SOP visual."
  }
];

export const rppRubricItems = [
  { 
    id: 1, 
    aspect: "Keselarasan Komponen & Dimensi Profil Lulusan", 
    scores: {
      4: "Tujuan pembelajaran, langkah-langkah, dan asesmen dirancang sangat selaras, mengarah langsung pada pencapaian Dimensi Profil Lulusan, serta disesuaikan secara presisi dengan hasil asesmen diagnostik individu (hambatan & kemampuan nyata siswa).",
      3: "Komponen sudah selaras dan mengarah pada profil lulusan, namun penyesuaian dengan keragaman hambatan siswa masih bersifat umum.",
      2: "Keselarasan antar komponen kurang terlihat; tujuan dan asesmen belum sepenuhnya saling mendukung.",
      1: "Tujuan pembelajaran, langkah, dan asesmen terpisah-pisah dan tidak menunjukkan keselarasan.",
      0: "Komponen keselarasan tidak dicantumkan sama sekali dalam perencanaan."
    },
    max: 4 
  },
  { 
    id: 2, 
    aspect: "Kerangka Pembelajaran Mendalam (PM) & KKA (Koding & Kecerdasan Artifisial)", 
    scores: {
      4: "Praktik pedagogis (active learning), lingkungan belajar (keamanan psikologis), kemitraan, dan pemanfaatan digital/KKA terintegrasi secara utuh dan kontekstual di dalam langkah pembelajaran.",
      3: "Sebagian besar unsur kerangka pembelajaran mendalam sudah tergambar, namun integrasi digital atau kemitraannya masih terbatas.",
      2: "Hanya memuat satu atau dua unsur kerangka saja; pembelajaran masih berpusat pada guru (teacher-centered).",
      1: "Unsur kerangka pembelajaran mendalam hampir tidak nampak dalam perencanaan.",
      0: "Tidak ada unsur kerangka pembelajaran mendalam yang direncanakan."
    },
    max: 4 
  },
  { 
    id: 3, 
    aspect: "Alur Pengalaman Belajar: MEMAHAMI (Understanding)", 
    scores: {
      4: "Langkah pembelajaran sangat kaya memfasilitasi siswa mengonstruksi pengetahuan dari hal konkret ke abstrak, menghubungkan pengetahuan baru dengan pengalaman nyata, serta menstimulasi rasa ingin tahu (growth mindset).",
      3: "Ada aktivitas memahami konsep, namun penekanan pada konteks nyata atau stimulasi berpikir kritis masih standar.",
      2: "Aktivitas memahami hanya sebatas ceramah atau hafalan materi tanpa konstruksi pengetahuan yang mendalam.",
      1: "Kegiatan memahami materi sangat minim dan tidak sistematis.",
      0: "Tidak ada perencanaan tahapan memahami materi."
    },
    max: 4 
  },
  { 
    id: 4, 
    aspect: "Alur Pengalaman Belajar: MENGAPLIKASI (Applying)", 
    scores: {
      4: "Merencanakan pengalaman belajar di mana siswa dapat menerapkan pengetahuan ke dalam situasi nyata atau keterampilan fungsional/vokasional secara mandiri, lengkap dengan penyesuaian (scaffolding) bagi ABK.",
      3: "Ada kegiatan penerapan atau latihan soal/praktik, namun belum sepenuhnya dikaitkan dengan konteks kehidupan sehari-hari siswa.",
      2: "Praktik aplikasi sangat terbatas dan bersifat teoretis semata.",
      1: "Tidak terlihat perencanaan kegiatan aplikasi bagi siswa.",
      0: "Aspek mengaplikasi diabaikan dalam RPP."
    },
    max: 4 
  },
  { 
    id: 5, 
    aspect: "Alur Pengalaman Belajar: MEREFLEKSI (Reflecting)", 
    scores: {
      4: "Secara eksplisit merencanakan waktu bagi siswa untuk mengevaluasi proses belajarnya sendiri (metakognisi), mengenali bahwa kesalahan adalah bagian dari proses belajar, serta meregulasi emosi.",
      3: "Ada kegiatan refleksi di akhir, namun baru sebatas menanyakan perasaan senang/tidak senang secara singkat.",
      2: "Kegiatan refleksi sangat minim dan terburu-buru.",
      1: "Refleksi hanya menjadi formalitas tanpa panduan yang jelas.",
      0: "Tidak ada perencanaan kegiatan refleksi sama sekali."
    },
    max: 4 
  },
  { 
    id: 6, 
    aspect: "Prinsip Saling Memuliakan & Karakteristik Siswa", 
    scores: {
      4: "Perencanaan mencerminkan pelayanan yang menjunjung tinggi kesetaraan, menghargai keragaman hambatan, ramah disabilitas, dan menggunakan bahasa interaksi yang sangat memuliakan (inklusif dan sabar).",
      3: "Memperhatikan keragaman siswa, namun nuansa memuliakan dan penanganan hambatan spesifik belum tergambar mendalam.",
      2: "Perencanaan memperlakukan semua siswa secara seragam tanpa memandang hambatan belajar.",
      1: "Kurang menghargai keberagaman karakteristik peserta didik.",
      0: "Tidak mengakomodasi karakteristik peserta didik sama sekali."
    },
    max: 4 
  },
  { 
    id: 7, 
    aspect: "Perencanaan Asesmen (Awal, Proses, dan Hasil)", 
    scores: {
      4: "Merencanakan asesmen secara komprehensif: asesmen diagnostik awal (kesiapan/emosi), asesmen formatif berkelanjutan dengan umpan balik berfokus usaha (process feedback), dan asesmen sumatif/kinerja yang otentik serta berkeadilan.",
      3: "Asesmen awal dan hasil sudah ada, namun asesmen formatif untuk umpan balik perbaikan berkelanjutan belum terstruktur jelas.",
      2: "Asesmen hanya berfokus pada tes tertulis/akhir tanpa asesmen proses atau diagnostik.",
      1: "Bentuk asesmen tidak jelas atau tidak sesuai dengan tujuan pembelajaran.",
      0: "Tidak merencanakan asesmen sama sekali."
    },
    max: 4 
  }
];

// 15 Indikator Resmi Lampiran 6 Modul KS Lengkap dengan Kriteria Skor (0 - 4)
export const observationRubricItems = [
  { 
    id: 1, 
    aspect: "Indikator 1: Keselarasan Awal, Inti, & Penutupan", 
    desc: "Apakah implementasi pembelajaran selaras dengan perencanaan pada tahap awal, inti (proses memahami, mengaplikasi, merefleksi), hingga penutupan pembelajaran?",
    category: "1. Keselarasan Pelaksanaan",
    scores: {
      4: "Konsistensi Tinggi: Pembelajaran dieksekusi sangat luwes, hidup, dan sepenuhnya selaras dengan perencanaan dari awal hingga penutupan.",
      3: "Sebagian besar tahap pembelajaran berjalan sesuai rencana dan selaras.",
      2: "Ada beberapa tahapan yang terlewat atau kurang selaras dengan perencanaan awal.",
      1: "Implementasi pembelajaran jauh dari perencanaan yang telah dibuat.",
      0: "Tidak ada keselarasan sama sekali antara perencanaan dan pelaksanaan."
    },
    max: 4 
  },
  { 
    id: 2, 
    aspect: "Indikator 2: Keselarasan Tujuan dengan Dimensi Profil Lulusan", 
    desc: "Apakah upaya mencapai tujuan pembelajaran menuju pencapaian Dimensi Profil Lulusan selaras dengan RPP serta disesuaikan dengan konteks kebutuhan belajar siswa?",
    category: "1. Keselarasan Pelaksanaan",
    scores: {
      4: "Sangat selaras dan disesuaikan secara presisi dengan keragaman kebutuhan serta hambatan belajar peserta didik.",
      3: "Mengarah pada profil lulusan, namun penyesuaian untuk ABK masih bersifat umum.",
      2: "Kurang mengaitkan pencapaian dengan profil lulusan atau kebutuhan siswa.",
      1: "Tujuan pembelajaran di kelas menyimpang dari target dimensi profil lulusan.",
      0: "Tidak mencerminkan ketercapaian tujuan atau dimensi profil lulusan."
    },
    max: 4 
  },
  { 
    id: 3, 
    aspect: "Indikator 3: Praktik Pedagogis (Autentik, HOTS, & Kolaborasi)", 
    desc: "Apakah guru memfokuskan pengalaman belajar pada hal yang autentik, mengutamakan praktik nyata, mendorong keterampilan berpikir tingkat tinggi (HOTS) dan kolaborasi?",
    category: "2. Kerangka PM",
    scores: {
      4: "Memfokuskan pengalaman belajar pada hal autentik, praktik nyata, mendorong HOTS dan kolaborasi aktif.",
      3: "Praktik pedagogis aktif dan kolaboratif sudah terlihat, namun porsi HOTS masih perlu ditingkatkan.",
      2: "Pembelajaran masih didominasi ceramah/penugasan konvensional tanpa praktik nyata.",
      1: "Praktik pedagogis kaku dan tidak merangsang daya pikir siswa.",
      0: "Tidak ada praktik pedagogis aktif sama sekali."
    },
    max: 4 
  },
  { 
    id: 4, 
    aspect: "Indikator 4: Lingkungan Belajar (Aman secara Psikis)", 
    desc: "Apakah guru membangun hubungan dinamis, menciptakan suasana kelas yang aman secara psikis sehingga siswa berani mengambil risiko dan bertanya?",
    category: "2. Kerangka PM",
    scores: {
      4: "Iklim Memuliakan & Aman Psikologis: Guru menampilkan kesabaran, empati, komunikasi hangat, membuat kelas bebas dari cemas dan siswa berani mencoba.",
      3: "Suasana kelas kondusif dan cukup nyaman bagi siswa untuk bertanya.",
      2: "Suasana kelas cenderung kaku atau kurang memberikan ruang aman psikologis bagi siswa pasif.",
      1: "Kelas tegang, siswa tampak takut atau tertekan.",
      0: "Lingkungan belajar tidak kondusif dan intimidatif."
    },
    max: 4 
  },
  { 
    id: 5, 
    aspect: "Indikator 5: Kemitraan Pembelajaran", 
    desc: "Apakah interaksi antara guru, siswa, dan lingkungan belajar mendorong kolaborasi, refleksi, serta eksplorasi ide?",
    category: "2. Kerangka PM",
    scores: {
      4: "Interaksi sangat kolaboratif, mendorong refleksi bersama, dan eksplorasi ide yang luas antara guru dan siswa.",
      3: "Ada kolaborasi antarsiswa dan komunikasi dua arah dengan guru.",
      2: "Interaksi masih berpusat pada guru (satu arah), kolaborasi antar siswa minim.",
      1: "Interaksi kelas sangat kurang.",
      0: "Tidak ada kemitraan atau interaksi pembelajaran."
    },
    max: 4 
  },
  { 
    id: 6, 
    aspect: "Indikator 6: Pemanfaatan Digital / Teknologi", 
    desc: "Apakah penggunaan teknologi/digital benar-benar meningkatkan keterlibatan siswa secara interaktif dan kontekstual, bukan sekadar mengganti kertas ke layar?",
    category: "2. Kerangka PM",
    scores: {
      4: "Pemanfaatan digital/media interaktif terbukti meningkatkan keterlibatan aktif dan pemahaman siswa secara kontekstual.",
      3: "Media/teknologi digunakan dengan cukup baik untuk membantu penjelasan.",
      2: "Penggunaan media digital sebatas perpindahan dari kertas ke layar tanpa interaksi berarti.",
      1: "Penggunaan teknologi kurang efektif atau mengalami kendala teknis.",
      0: "Tidak memanfaatkan teknologi atau media pendukung."
    },
    max: 4 
  },
  { 
    id: 7, 
    aspect: "Indikator 7: Prinsip Saling Memuliakan", 
    desc: "Apakah guru memfasilitasi pelayanan pembelajaran yang menghargai keberagaman, menjunjung kesetaraan gender, dan ramah disabilitas yang tercermin dalam bahasa verbal dan non-verbal?",
    category: "3. Langkah Pembelajaran",
    scores: {
      4: "Menampilkan kesabaran luar biasa, empati tinggi, bahasa isyarat/verbal/non-verbal yang sangat memuliakan dan ramah disabilitas.",
      3: "Bersikap adil, sabar, dan menghargai keberagaman siswa di kelas.",
      2: "Kurang peka terhadap kebutuhan khusus individual atau kurang sabar menghadapi hambatan siswa.",
      1: "Bersikap kurang suportif atau diskriminatif secara tidak langsung.",
      0: "Tidak mencerminkan sikap memuliakan atau ramah disabilitas."
    },
    max: 4 
  },
  { 
    id: 8, 
    aspect: "Indikator 8: Tahap Memahami (Understanding)", 
    desc: "Apakah guru membimbing siswa terlibat aktif mengonstruksi pengetahuan (menghubungkan pengetahuan baru, menstimulasi berpikir, mengaitkan dengan konteks nyata)?",
    category: "3. Langkah Pembelajaran",
    scores: {
      4: "Membimbing siswa aktif mengonstruksi pengetahuan dari konkret ke abstrak, terhubung dengan pengalaman nyata.",
      3: "Menjelaskan dan membimbing pemahaman konsep dengan cukup baik.",
      2: "Penyampaian materi abstrak tanpa jembatan konkret yang memadai untuk ABK.",
      1: "Pemahaman konsep sangat minim.",
      0: "Tidak ada tahapan memahami materi."
    },
    max: 4 
  },
  { 
    id: 9, 
    aspect: "Indikator 9: Tahap Mengaplikasi (Applying)", 
    desc: "Apakah guru memfasilitasi siswa menerapkan pemahaman secara kontekstual ke dalam situasi nyata atau pemecahan masalah?",
    category: "3. Langkah Pembelajaran",
    scores: {
      4: "Memfasilitasi siswa menerapkan pengetahuan ke dalam situasi nyata atau latihan keterampilan vokasional/kemandirian secara mandiri.",
      3: "Ada latihan atau praktik langsung yang dipandu guru.",
      2: "Praktik aplikasi terbatas pada contoh di papan tulis/buku tanpa pengalaman nyata.",
      1: "Tidak ada kegiatan aplikasi bagi siswa.",
      0: "Tahap mengaplikasi diabaikan."
    },
    max: 4 
  },
  { 
    id: 10, 
    aspect: "Indikator 10: Tahap Merefleksi (Reflecting)", 
    desc: "Apakah guru membimbing siswa melakukan evaluasi diri, metakognisi, regulasi emosi, dan menyadari cara belajarnya sendiri?",
    category: "3. Langkah Pembelajaran",
    scores: {
      4: "Membimbing siswa melakukan evaluasi diri, metakognisi, regulasi emosi, dan menyadari perkembangan belajarnya.",
      3: "Melakukan refleksi singkat bersama siswa di akhir pembelajaran.",
      2: "Refleksi hanya sebatas tanya jawab kilat tanpa pendalaman makna.",
      1: "Refleksi terlewati begitu saja.",
      0: "Tidak ada kegiatan refleksi."
    },
    max: 4 
  },
  { 
    id: 11, 
    aspect: "Indikator 11 & 12: Prinsip Berkesadaran, Bermakna, & Menggembirakan", 
    desc: "Apakah pembelajaran menerapkan prinsip berkesadaran, bermakna, menggembirakan, serta mengakomodasi keragaman karakteristik siswa?",
    category: "3. Langkah Pembelajaran",
    scores: {
      4: "Suasana kelas sangat hidup, menggembirakan, bermakna, dan siswa sadar penuh serta menikmati proses belajar.",
      3: "Pembelajaran cukup menyenangkan dan bermakna bagi sebagian besar siswa.",
      2: "Pembelajaran terasa monoton atau kurang menghadirkan kegembiraan.",
      1: "Suasana kelas membosankan dan siswa pasif.",
      0: "Tidak mencerminkan prinsip pembelajaran mendalam."
    },
    max: 4 
  },
  { 
    id: 12, 
    aspect: "Indikator 13: Asesmen Awal (Diagnostik)", 
    desc: "Apakah guru melaksanakan asesmen awal (kesiapan emosi, mental, dan pengetahuan awal)?",
    category: "4. Asesmen",
    scores: {
      4: "Melakukan asesmen diagnostik awal secara interaktif untuk mengecek kesiapan mental, emosi, dan kemampuan awal siswa.",
      3: "Menanyakan kabar dan kesiapan belajar secara umum di awal.",
      2: "Asesmen awal dilakukan sekadarnya tanpa kaitan erat dengan materi.",
      1: "Langsung masuk materi inti tanpa asesmen awal.",
      0: "Tidak melakukan asesmen awal."
    },
    max: 4 
  },
  { 
    id: 13, 
    aspect: "Indikator 14: Asesmen Selama Proses (Formatif & Umpan Balik)", 
    desc: "Apakah guru melaksanakan asesmen selama proses pembelajaran (formatif) untuk memantau kemajuan dan memberikan umpan balik berkelanjutan (process feedback)?",
    category: "4. Asesmen",
    scores: {
      4: "Asesmen Berkelanjutan: Guru aktif memantau proses belajar siswa di meja-meja, memberikan umpan balik yang membangun secara individual.",
      3: "Memantau kelas dan memberikan masukan saat siswa bertanya.",
      2: "Pemantauan pasif dari meja guru tanpa umpan balik interaktif.",
      1: "Asesmen proses sangat minim.",
      0: "Tidak ada asesmen formatif selama pembelajaran."
    },
    max: 4 
  },
  { 
    id: 14, 
    aspect: "Indikator 15: Asesmen Hasil (Sumatif / Otentik)", 
    desc: "Apakah guru melaksanakan asesmen hasil (sumatif) untuk mengukur pencapaian kompetensi melalui beragam cara (tes, portofolio, proyek, presentasi, dll.)?",
    category: "4. Asesmen",
    scores: {
      4: "Melaksanakan asesmen sumatif/kinerja yang beragam, adil, dan sesuai dengan tingkat kemampuan nyata peserta didik.",
      3: "Melaksanakan evaluasi atau tugas akhir yang terstruktur.",
      2: "Evaluasi akhir monoton berupa tes tertulis tanpa opsi adaptif untuk ABK.",
      1: "Asesmen hasil tidak jelas pengukurannya.",
      0: "Tidak melaksanakan asesmen hasil."
    },
    max: 4 
  }
];
