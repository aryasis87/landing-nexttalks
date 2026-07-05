import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-intertight", subsets: ["latin"], weight: ["600", "700", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: 'NextTalks — Ide Besar, Pembicara Inspiratif',
  description: 'NextTalks: temukan ide-ide besar dan pembicara inspiratif dalam satu platform webinar profesional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${interTight.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
