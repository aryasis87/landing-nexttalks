import Link from 'next/link';

export const metadata = { title: 'Kebijakan Privasi', description: 'Kebijakan privasi NextTalks.' };

const sections = [
  { h: '1. Informasi yang Kami Kumpulkan', p: 'Kami mengumpulkan nama, email, dan data pendaftaran yang Anda berikan saat mendaftar webinar, serta data teknis dasar untuk meningkatkan layanan.' },
  { h: '2. Penggunaan Informasi', p: 'Data digunakan untuk memproses pendaftaran, mengirim tautan & pengingat acara, serta informasi webinar yang relevan. Kami tidak menjual data Anda.' },
  { h: '3. Cookie & Analitik', p: 'Kami menggunakan cookie untuk mengingat preferensi dan menganalisis lalu lintas. Anda dapat menonaktifkannya melalui browser.' },
  { h: '4. Keamanan', p: 'Kami menerapkan langkah keamanan yang wajar untuk melindungi data Anda dari akses yang tidak sah.' },
  { h: '5. Hak Anda', p: 'Anda dapat meminta akses, pembaruan, atau penghapusan data pribadi kapan saja dengan menghubungi kami.' },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">← Kembali ke beranda</Link>
      <h1 className="mt-6 text-4xl font-bold text-gray-900">Kebijakan Privasi</h1>
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
