import Hero from "./components/Hero";
import Transcript from "./components/Transcript";
import SesiBerikut from "./components/SesiBerikut";
import Meja from "./components/Meja";
import Untuk from "./components/Untuk";
import Harga from "./components/Harga";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import { BERIKUT, SITE } from "@/lib/sesi";

const eventLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `NextTalks Sesi ${BERIKUT.nomor}: ${BERIKUT.judul}`,
  startDate: `${BERIKUT.iso}T19:00:00+07:00`,
  endDate: `${BERIKUT.iso}T21:00:00+07:00`,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: { "@type": "VirtualLocation", url: SITE },
  organizer: { "@type": "Organization", name: "NextTalks", url: SITE },
  performer: BERIKUT.pembicara.map((p) => ({ "@type": "Person", name: p.nama })),
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Transcript />
      <SesiBerikut />
      <Meja />
      <Untuk />
      <Harga />
      <FAQ />
      <Registration />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
    </main>
  );
}
