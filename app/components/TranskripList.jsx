/* Potongan transkrip bertanda menit, digantung pada rel kiri. Kalimat yang
   disorot mendapat titik biru — itulah "satu kalimat" yang dibawa pulang. */
export default function TranskripList({ baris }) {
  return (
    <ol className="transcript-rail space-y-8 pl-6 sm:pl-8">
      {baris.map((b) => (
        <li key={b.m + b.s} className="relative">
          <span
            aria-hidden="true"
            className={`absolute top-2 -left-[1.6rem] h-2.5 w-2.5 rounded-full sm:-left-[2.1rem] ${b.sorot ? 'bg-live' : 'bg-wire'}`}
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="stamp text-live">{b.m}</span>
            <span className="text-sm font-bold text-ink">{b.s}</span>
            <span className="stamp text-ink-soft">{b.p}</span>
          </div>
          <p className={`mt-3 leading-relaxed ${b.tanya ? 'text-ink-soft italic' : b.sorot ? 'text-lg font-medium text-ink' : 'text-ink'}`}>
            {b.tanya ? `— ${b.t}` : b.t}
          </p>
        </li>
      ))}
    </ol>
  );
}
