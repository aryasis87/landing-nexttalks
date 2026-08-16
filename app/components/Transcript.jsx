'use client';

import { motion } from 'framer-motion';

/* ============================================================================
   Bagian penanda NextTalks: TRANSKRIP.
   Alih-alih menjanjikan "materi berkualitas" tanpa bukti, bagian ini
   memperlihatkan potongan transkrip sesi sebelumnya lengkap dengan menit
   ke berapa kalimat itu diucapkan — calon peserta bisa menilai sendiri
   mutu percakapannya sebelum membayar.
   ========================================================================== */

const potongan = [
  {
    menit: '00:07',
    pembicara: 'Pembicara I',
    peran: 'Kepala Produk',
    teks: 'Kita sering menyebutnya masalah teknis, padahal yang rusak adalah cara kita memutuskan. Alatnya cuma memperbesar keputusan itu.',
  },
  {
    menit: '00:23',
    pembicara: 'Penanya',
    peran: 'Peserta, Surabaya',
    teks: 'Kalau timnya kecil dan waktunya mepet, bagian mana yang paling aman untuk dikorbankan?',
    tanya: true,
  },
  {
    menit: '00:24',
    pembicara: 'Pembicara II',
    peran: 'Konsultan',
    teks: 'Ruang lingkupnya, bukan kualitasnya. Mengurangi jumlah yang dikerjakan masih bisa dijelaskan ke pengguna. Mengurangi mutu tidak.',
  },
  {
    menit: '00:41',
    pembicara: 'Pembicara III',
    peran: 'Peneliti',
    teks: 'Pertanyaan yang bagus lebih berharga daripada jawaban yang panjang. Sesi ini berhasil kalau Anda pulang membawa pertanyaan baru.',
    sorot: true,
  },
];

export default function Transcript() {
  return (
    <section id="kutipan" className="relative overflow-hidden bg-room-2 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="stamp mb-5 text-live">Transkrip Sesi 12</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">
            Nilai sendiri percakapannya, sebelum memutuskan ikut
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Ini potongan asli dari sesi sebelumnya, beserta menit ke berapa tiap kalimat diucapkan.
            Kami tidak memotongnya supaya terdengar lebih pintar.
          </p>
        </div>

        <ol className="transcript-rail space-y-8 pl-6 sm:pl-8">
          {potongan.map((p, i) => (
            <motion.li
              key={p.menit}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.42, delay: i * 0.06 }}
              className="relative"
            >
              {/* Titik pada rel transkrip */}
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[1.6rem] h-2.5 w-2.5 rounded-full sm:-left-[2.1rem] ${
                  p.sorot ? 'bg-live' : 'bg-wire'
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="stamp text-live">{p.menit}</span>
                <span className="text-sm font-bold text-ink">{p.pembicara}</span>
                <span className="stamp text-ink-soft/50">{p.peran}</span>
              </div>

              <p
                className={`mt-3 leading-relaxed ${
                  p.tanya
                    ? 'text-ink-soft italic'
                    : p.sorot
                      ? 'text-lg font-medium text-ink'
                      : 'text-ink'
                }`}
              >
                {p.tanya ? `— ${p.teks}` : p.teks}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-4 border-t border-wire pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">
            Transkrip lengkap tiap sesi dikirim ke peserta dalam 24 jam.
          </p>
          <a
            href="#daftar"
            className="stamp shrink-0 border-b border-live/50 pb-1 text-live transition-colors hover:border-live"
          >
            Ikut sesi berikutnya
          </a>
        </div>

        <p className="stamp mt-8 leading-[1.7] text-ink-soft/45">
          Potongan transkrip di atas adalah ilustrasi untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  );
}
