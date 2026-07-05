import Link from 'next/link';

export const metadata = { title: 'Syarat & Ketentuan', description: 'Syarat & ketentuan penggunaan NextTalks.' };

const sections = [
  { h: '1. Penerimaan Ketentuan', p: 'Dengan mendaftar dan mengikuti webinar kami, Anda menyetujui Syarat & Ketentuan ini.' },
  { h: '2. Pendaftaran & Kehadiran', p: 'Tautan webinar bersifat pribadi untuk Anda. Mohon tidak membagikannya kepada pihak lain tanpa izin.' },
  { h: '3. Hak Kekayaan Intelektual', p: 'Seluruh materi webinar, rekaman, dan konten adalah milik pembicara dan NextTalks. Dilarang menyebarluaskan tanpa izin.' },
  { h: '4. Pembatalan & Perubahan', p: 'Jadwal atau pembicara dapat berubah. Kami akan memberi tahu peserta terdaftar secepatnya jika terjadi perubahan.' },
  { h: '5. Batasan Tanggung Jawab', p: 'Layanan disediakan "sebagaimana adanya". Kami tidak bertanggung jawab atas gangguan teknis di luar kendali kami.' },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">← Kembali ke beranda</Link>
      <h1 className="mt-6 text-4xl font-bold text-gray-900">Syarat &amp; Ketentuan</h1>
      <p className="mt-3 text-gray-500">Terakhir diperbarui: 6 Juli 2026</p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-semibold text-gray-900">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-gray-600">{s.p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
