import { BERIKUT } from '@/lib/sesi';

export default function SesiBerikut() {
  return (
    <section id="sesi" className="scroll-mt-16 bg-room py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="stamp live-dot mb-6 flex items-center text-live">
          Sesi {BERIKUT.nomor} · {BERIKUT.hari} · {BERIKUT.jam}
        </p>
        <h2 className="max-w-3xl text-[2rem] leading-[1.1] text-ink md:text-[2.8rem]">{BERIKUT.judul}</h2>

        <figure className="mt-10 max-w-3xl">
          <figcaption className="stamp mb-3">Pertanyaan pembuka, dibacakan di menit ke-nol</figcaption>
          <blockquote className="text-xl leading-snug font-semibold md:text-2xl">
            <span className="caption-bar">{BERIKUT.pembuka}</span>
          </blockquote>
        </figure>

        <ol className="mt-14 grid gap-px border border-wire bg-wire sm:grid-cols-2 lg:grid-cols-6">
          {BERIKUT.alur.map(([jam, judul, ket]) => (
            <li key={jam} className="bg-room p-5">
              <p className="stamp text-live">{jam}</p>
              <p className="mt-3 font-bold text-ink">{judul}</p>
              <p className="mt-2 text-sm leading-relaxed">{ket}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
