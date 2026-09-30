import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-room px-6 pt-16">
      <div className="mx-auto max-w-2xl">
        <p className="stamp text-live">404 · 00:00</p>
        <h1 className="mt-5 text-4xl leading-tight text-ink md:text-5xl">
          Kalimat ini <span className="caption-bar">tidak ada di transkrip</span>
        </h1>
        <p className="mt-5 leading-relaxed">Mungkin alamatnya salah, atau sesinya sudah dipindah ke arsip.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="bg-ink px-6 py-3.5 text-sm font-bold text-room hover:bg-live">Ke beranda</Link>
          <Link href="/arsip" className="border border-ink/30 px-6 py-3.5 text-sm font-bold text-ink hover:border-ink">Buka arsip</Link>
        </div>
      </div>
    </main>
  );
}
