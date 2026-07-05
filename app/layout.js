import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-intertight", subsets: ["latin"], weight: ["600", "700", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"NextTalks","description":"Platform webinar profesional","url":"https://landing-nexttalks.vercel.app","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-nexttalks.vercel.app"),
  title: "NextTalks — Ide Besar, Pembicara Inspiratif",
  description: "NextTalks: temukan ide-ide besar dan pembicara inspiratif dalam satu platform webinar profesional.",
  applicationName: "NextTalks",
  keywords: ["webinar", "pembicara inspiratif", "seminar", "talk show", "konferensi"],
  authors: [{ name: "NextTalks" }],
  creator: "NextTalks",
  publisher: "NextTalks",
  alternates: { canonical: "https://landing-nexttalks.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-nexttalks.vercel.app",
    siteName: "NextTalks",
    title: "NextTalks — Ide Besar, Pembicara Inspiratif",
    description: "NextTalks: temukan ide-ide besar dan pembicara inspiratif dalam satu platform webinar profesional.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "NextTalks — Ide Besar, Pembicara Inspiratif" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextTalks — Ide Besar, Pembicara Inspiratif",
    description: "NextTalks: temukan ide-ide besar dan pembicara inspiratif dalam satu platform webinar profesional.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${interTight.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
