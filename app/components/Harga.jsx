import { HARGA } from '@/lib/sesi';

export default function Harga() {
  return (
    <section id="harga" className="scroll-mt-16 bg-room-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="stamp mb-5 text-live">Harga</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">Bayar per sesi, atau ikut satu musim penuh</h2>
        </div>
        <ul className="grid gap-6 lg:grid-cols-3">
          {HARGA.map((h) => (
            <li key={h.nama} className={`flex flex-col border bg-room p-7 ${h.unggulan ? 'border-ink' : 'border-wire'}`}>
              <p className="stamp">
                {h.unggulan ? <span className="caption-bar">{h.nama}</span> : h.nama}
              </p>
              <p className="mt-5 text-3xl font-bold text-ink">
                {h.harga} <span className="text-sm font-normal">{h.satuan}</span>
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-wire pt-6 text-sm">
                {h.dapat.map((d) => (
                  <li key={d} className="flex gap-3 text-ink">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-live" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={`/?paket=${encodeURIComponent(h.nama)}#daftar`}
                className={`mt-8 inline-flex justify-center py-3.5 text-sm font-bold ${h.unggulan ? 'bg-ink text-room hover:bg-live' : 'border border-ink/30 text-ink hover:border-ink'}`}
              >
                Pilih {h.nama.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
