# Product Requirements Document (PRD)

## MindGuard -- Early Warning System Kesehatan Mental Siswa

------------------------------------------------------------------------

# 1. Informasi Proyek

  -----------------------------------------------------------------------
  Item                             Detail
  -------------------------------- --------------------------------------
  **Nama Produk**                  MindGuard

  **Jenis Produk**                 Early Warning System Kesehatan Mental
                                   Siswa

  **Platform**                     Web Application

  **Institusi**                    Program Studi Sistem Informasi,
                                   Universitas Lampung

  **Tahun Akademik**               2025 / 2026

  **Tim Pengembang**               Raid Fadhil Khairi, R. Revaldo
                                   Vabiansyah, Najwa Nur Alya, Devina
                                   Chilly Rahmawati
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 2. Latar Belakang

Kesehatan mental siswa menjadi isu penting di lingkungan pendidikan
modern. Tekanan akademik, interaksi sosial, serta perubahan psikologis
pada masa remaja dapat meningkatkan risiko stres, kecemasan, dan
kelelahan emosional.

Sayangnya, banyak sekolah belum memiliki sistem yang mampu memantau
kondisi emosional siswa secara berkelanjutan dan sistematis. Pemantauan
biasanya dilakukan secara manual melalui observasi guru atau sesi
konseling yang terbatas.

MindGuard dikembangkan sebagai platform digital berbasis web yang
memungkinkan pemantauan kondisi emosional siswa secara sederhana melalui
pencatatan mood harian. Data yang terkumpul kemudian dianalisis untuk
membantu Guru BK mendeteksi potensi masalah lebih awal sehingga dapat
melakukan intervensi yang tepat.

------------------------------------------------------------------------

# 3. Tujuan Produk

1.  Menyediakan platform digital bagi siswa untuk mencatat kondisi
    emosional secara rutin.
2.  Membantu Guru BK memantau tren kesehatan mental siswa melalui
    dashboard analitik.
3.  Mengidentifikasi pola emosi negatif sejak dini untuk mendukung
    intervensi lebih cepat.
4.  Meningkatkan kesadaran diri siswa terhadap kondisi emosional mereka.

------------------------------------------------------------------------

# 4. Target Pengguna (User Personas)

## 4.1 Siswa

Siswa merupakan pengguna utama yang berinteraksi dengan sistem untuk
mencatat kondisi emosional harian mereka.

**Kebutuhan utama:** - Mengisi mood harian dengan cepat - Melihat
riwayat mood pribadi - Mengakses informasi kesehatan mental

## 4.2 Guru BK

Guru Bimbingan Konseling bertugas memantau data emosional siswa serta
melakukan intervensi jika diperlukan.

**Kebutuhan utama:** - Melihat tren mood siswa - Mendapatkan notifikasi
risiko - Mengelola catatan konseling

## 4.3 Admin

Admin bertanggung jawab dalam pengelolaan sistem dan data pengguna.

**Kebutuhan utama:** - Mengelola akun pengguna - Mengatur konfigurasi
sistem - Mengelola data sekolah

------------------------------------------------------------------------

# 5. Ruang Lingkup Sistem

MindGuard dirancang sebagai sistem pemantauan kesehatan mental berbasis
data mood harian yang berfokus pada:

-   Pencatatan emosi siswa
-   Analisis tren emosi
-   Sistem peringatan dini
-   Monitoring oleh Guru BK

Sistem tidak menggantikan layanan konseling profesional, tetapi
berfungsi sebagai alat bantu pemantauan awal.

------------------------------------------------------------------------

# 6. Fitur Utama Sistem

## 6.1 Fitur Sisi Siswa

### Daily Mood Tracker

Siswa dapat mengisi kondisi emosional harian menggunakan skala 1--5
dengan indikator emoji.

  Skor   Makna
  ------ --------------
  1      Sangat buruk
  2      Buruk
  3      Netral
  4      Baik
  5      Sangat baik

### Mood History

Siswa dapat melihat riwayat mood dalam bentuk grafik mingguan dan
bulanan.

### Whisper Portal

Saluran pelaporan anonim bagi siswa untuk melaporkan masalah sensitif
seperti bullying atau tekanan sosial.

### Resource Center

Akses artikel edukasi kesehatan mental dan tips mengelola stres.

------------------------------------------------------------------------

# 7. Fitur Sisi Guru BK

## Dashboard Monitoring

Menampilkan statistik kondisi emosional siswa secara keseluruhan.

  Warna    Makna
  -------- -----------------
  Hijau    Kondisi stabil
  Kuning   Perlu perhatian
  Merah    Risiko tinggi

## Student Mood Detail

Guru BK dapat melihat riwayat mood siswa secara detail.

## Alert System

Sistem memberikan peringatan otomatis jika siswa mengalami mood buruk
selama beberapa hari berturut-turut.

## Counseling Management

Guru BK dapat mengelola sesi konseling dan mencatat hasilnya.

------------------------------------------------------------------------

# 8. Fitur Sisi Admin

## User Management

Pengelolaan akun siswa dan guru.

## School Data Management

Pengelolaan data kelas dan data siswa.

## System Configuration

Pengaturan threshold peringatan dan konfigurasi sistem.

------------------------------------------------------------------------

# 9. Kebutuhan Sistem

## Kebutuhan Fungsional

1.  Sistem memungkinkan siswa menginput mood harian.
2.  Sistem menyimpan data mood ke database.
3.  Sistem menganalisis tren mood secara otomatis.
4.  Sistem mengirim notifikasi kepada Guru BK jika terjadi risiko.
5.  Sistem menampilkan dashboard visualisasi mood.

## Kebutuhan Non-Fungsional

### Usability

Pengisian mood harus dapat dilakukan kurang dari 10 detik.

### Performance

Dashboard harus memuat data dengan cepat.

### Accessibility

Sistem dapat diakses melalui laptop, tablet, dan smartphone.

### Security

Sistem menggunakan autentikasi dan pengaturan hak akses pengguna.

------------------------------------------------------------------------

# 10. Penutup

MindGuard diharapkan membantu sekolah memantau kesehatan mental siswa
secara lebih sistematis melalui pencatatan mood harian, analisis tren
emosi, dan sistem peringatan dini.
