import { ARSIP, SITE } from "@/lib/sesi";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/arsip`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...ARSIP.map((a) => ({ url: `${SITE}/sesi/${a.nomor}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 })),
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
