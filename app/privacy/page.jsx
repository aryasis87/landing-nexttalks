import Legal from '../components/Legal';
import { SITE } from '@/lib/sesi';

export const metadata = {
  title: 'Kebijakan Privasi',
  description: 'Data apa yang dikumpulkan NextTalks, bagaimana rekaman dan transkrip menyamarkan peserta, dan cara meminta data dihapus.',
  alternates: { canonical: `${SITE}/privacy` },
};

const PASAL = [
  ['Yang kami kumpulkan', 'Nama, surel, paket yang Anda pilih, dan pertanyaan yang Anda tulis saat mendaftar. Kami tidak meminta nomor telepon, tanggal lahir, atau alamat.'],
  ['Pertanyaan yang dibacakan', 'Saat pertanyaan Anda dibacakan di sesi, pemandu hanya menyebut kota Anda — tidak pernah nama. Di transkrip, penanya ditulis sebagai "Peserta, [kota]".'],
  ['Rekaman dan transkrip', 'Rekaman hanya menangkap layar pembicara dan pemandu. Kamera dan suara peserta tidak ikut terekam kecuali Anda sendiri memilih bertanya secara lisan.'],
  ['Untuk apa data dipakai', 'Mengirim tautan ruang bicara, transkrip, rekaman, dan sertifikat. Surel tentang sesi berikutnya hanya dikirim bila Anda mencentang pilihan itu.'],
  ['Yang tidak kami lakukan', 'Kami tidak menjual, menyewakan, atau membagikan data Anda kepada pengiklan maupun pembicara.'],
  ['Hak Anda', 'Anda bisa meminta salinan, perbaikan, atau penghapusan data kapan saja. Permintaan diproses paling lambat 14 hari kerja.'],
];

export default function PrivacyPage() {
  return <Legal label="Kebijakan privasi" judul="Yang kami simpan, dan yang tidak" intro="NextTalks hanya menyimpan data yang dibutuhkan untuk mengirimkan sesi kepada Anda. Halaman ini menjelaskan apa saja itu." pasal={PASAL} />;
}
