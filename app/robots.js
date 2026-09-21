export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://landing-nexttalks.vercel.app/sitemap.xml",
    host: "https://landing-nexttalks.vercel.app",
  };
}
