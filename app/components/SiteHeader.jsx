import Link from 'next/link';

const NAV = [
  ['/#sesi', 'Sesi berikutnya'],
  ['/#meja', 'Di meja'],
  ['/arsip', 'Arsip transkrip'],
  ['/#harga', 'Harga'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-wire bg-room/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-[family-name:var(--font-inter-tight)] text-lg font-bold tracking-tight text-ink">
          Next<span className="caption-bar ml-0.5 !py-0.5">Talks</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="stamp text-ink-soft transition-colors hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#daftar" className="inline-flex bg-ink px-4 py-2.5 text-xs font-bold text-room hover:bg-live">
          Ambil tempat
        </Link>
      </div>
    </header>
  );
}
