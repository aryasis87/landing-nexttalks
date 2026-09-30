import { UNTUK } from '@/lib/sesi';

export default function Untuk() {
  return (
    <section className="bg-room py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="stamp mb-5 text-live">Yang biasa duduk di kursi penonton</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">Orang yang memutuskan sesuatu setiap hari</h2>
        </div>
        <ul className="grid gap-px border border-wire bg-wire sm:grid-cols-2 lg:grid-cols-4">
          {UNTUK.map(([j, d]) => (
            <li key={j} className="bg-room p-6">
              <h3 className="text-lg text-ink">{j}</h3>
              <p className="mt-3 text-sm leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
