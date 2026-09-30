import Legal from '../components/Legal';
import { SITE } from '@/lib/sesi';

export const metadata = {
  title: 'Ketentuan',
  description: 'Ketentuan mengikuti NextTalks: tiket, pembatalan, penggunaan transkrip, dan aturan di ruang bicara.',
  alternates: { canonical: `${SITE}/terms` },
};

const PASAL = [
  ['Tiket dan paket', 'Tiket satu sesi berlaku untuk sesi yang Anda pilih. Paket Musiman dan Tim berlaku dua belas sesi berturut-turut sejak tanggal pembelian.'],
  ['Pembatalan', 'Uang kembali penuh bila Anda membatalkan paling lambat 48 jam sebelum sesi. Setelah itu tiket bisa dialihkan ke orang lain atau ke sesi berikutnya, satu kali.'],
  ['Jika sesi dijadwal ulang', 'Bila sesi dipindah dari jadwalnya, Anda boleh memilih ikut di jadwal baru atau meminta uang kembali penuh.'],
  ['Mengutip transkrip', 'Anda boleh mengutip transkrip untuk keperluan pribadi, kerja, atau pendidikan dengan menyebut nomor sesi dan menitnya. Menerbitkan ulang transkrip utuh memerlukan izin tertulis.'],
  ['Di ruang bicara', 'Pertanyaan dibacakan sesuai urutan masuk. Pemandu boleh melewati pertanyaan yang menyerang pribadi, mengiklankan produk, atau berulang.'],
  ['Sertifikat', 'Sertifikat kehadiran diberikan bila Anda hadir minimal 90 menit. Sertifikat ini tidak menyatakan pengakuan dari lembaga mana pun.'],
];

export default function TermsPage() {
  return <Legal label="Ketentuan" judul="Aturan kecil supaya meja tetap nyaman" intro="Ketentuan ini berlaku untuk setiap tiket dan paket NextTalks." pasal={PASAL} />;
}
