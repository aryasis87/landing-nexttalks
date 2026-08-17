'use client';

import { motion } from 'framer-motion';

const angka = [
  ['1.000+', 'Penonton sesi sebelumnya'],
  ['4', 'Pembicara per sesi'],
  ['45 menit', 'Porsi tanya jawab'],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-room pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="stamp live-dot mb-8 flex items-center text-live"
            >
              NextTalks · Sesi berikutnya Kamis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[2.5rem] leading-[1.06] text-ink sm:text-5xl lg:text-[3.6rem]"
            >
              Yang dibawa pulang
              <br />
              bukan rekamannya,
              <br />
              <span className="caption-bar">tapi satu kalimat.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-8 max-w-lg leading-relaxed text-ink-soft"
            >
              Webinar profesional dengan format percakapan: empat pembicara, satu meja, dan
              pertanyaan yang benar-benar dijawab. Transkripnya kami rapikan supaya Anda bisa
              mengutipnya lagi minggu depan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#daftar"
                className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-bold text-room transition-colors duration-300 hover:bg-live"
              >
                Ambil Tempat
              </a>
              <a
                href="#kutipan"
                className="inline-flex items-center justify-center border border-ink/25 px-8 py-4 text-sm font-bold text-ink transition-colors duration-300 hover:border-ink/60"
              >
                Baca Kutipannya
              </a>
            </motion.div>

            <dl className="mt-14 grid gap-8 border-t border-wire pt-8 sm:grid-cols-3">
              {angka.map(([n, k]) => (
                <div key={k}>
                  <dt className="sr-only">{k}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-ink">{n}</span>
                    <span className="stamp mt-2.5 block text-ink-soft">{k}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kartu transkrip — menggantikan foto stok yang isinya tidak
              berkaitan dengan webinar (poster berbahasa Korea) dan template
              ber-Lorem ipsum. Motif takarir ini sekaligus identitas varian. */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-wire bg-room-2 p-7 sm:p-9"
          >
            <figcaption className="mb-7 flex items-center justify-between border-b border-wire pb-4">
              <span className="stamp live-dot flex items-center text-live">Sesi 12 · Cuplikan</span>
              <span className="stamp text-ink-soft">Transkrip</span>
            </figcaption>

            <ol className="transcript-rail space-y-6 pl-5">
              <li>
                <span className="stamp text-ink-soft">00:23 · Penanya</span>
                <p className="mt-2 leading-relaxed text-ink-soft italic">
                  — Kalau timnya kecil dan waktunya mepet, bagian mana yang paling aman untuk
                  dikorbankan?
                </p>
              </li>
              <li>
                <span className="stamp text-ink-soft">00:24 · Pembicara II</span>
                <p className="mt-2 leading-relaxed text-ink">
                  Ruang lingkupnya, bukan kualitasnya. Mengurangi jumlah yang dikerjakan masih bisa
                  dijelaskan ke pengguna. Mengurangi mutu tidak.
                </p>
              </li>
            </ol>

            <p className="mt-8 border-t border-wire pt-7">
              <span className="caption-bar text-sm">
                &ldquo;Pertanyaan yang bagus lebih berharga daripada jawaban yang panjang.&rdquo;
              </span>
            </p>
            <p className="stamp mt-4 text-ink-soft">Menit 41 · Sesi 12</p>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
