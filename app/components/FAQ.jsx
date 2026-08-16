"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Bagaimana cara mengikuti webinar ini?",
      answer: "Anda cukup mendaftar melalui tombol 'Daftar Sekarang' di website ini, melakukan pembayaran, dan Anda akan menerima email konfirmasi beserta link untuk mengakses webinar."
    },
    {
      question: "Apakah saya akan mendapatkan rekaman webinar?",
      answer: "Ya, semua peserta akan mendapatkan akses ke rekaman webinar sesuai dengan paket yang dipilih. Paket Basic mendapatkan akses 30 hari, sedangkan paket Premium mendapatkan akses 1 tahun penuh."
    },
    {
      question: "Bagaimana jika saya tidak bisa hadir di jadwal yang ditentukan?",
      answer: "Anda tetap bisa menonton rekaman webinar kapan saja selama periode akses yang berlaku sesuai paket Anda. Rekaman biasanya tersedia 24 jam setelah webinar selesai."
    },
    {
      question: "Apakah ada sertifikat untuk peserta?",
      answer: "Ya, semua peserta yang telah menyelesaikan webinar akan mendapatkan sertifikat digital yang bisa diunduh dari dashboard peserta."
    },
    {
      question: "Apa perbedaan paket Basic dan Premium?",
      answer: "Paket Premium memberikan akses lebih lama ke rekaman, worksheet eksklusif, template yang bisa diunduh, serta akses ke grup diskusi privat dengan pembicara."
    },
    {
      question: "Bagaimana metode pembayaran yang tersedia?",
      answer: "Kami menerima pembayaran melalui transfer bank, kartu kredit/debit, e-wallet (OVO, Gopay, Dana), dan beberapa metode pembayaran online lainnya."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-room-2">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-live bg-live/12 rounded-full uppercase mb-4">
            Pertanyaan Umum
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4 leading-tight">
            Pertanyaan yang <span className="text-live">Sering Diajukan</span>
          </h2>
          <p className="text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan Anda tentang webinar ini
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 border border-wire rounded-xl overflow-hidden bg-room"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <h3 className="text-lg font-semibold text-ink">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-live transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-ink-soft">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Masih ada pertanyaan?</h3>
            <p className="text-room/80 max-w-2xl mx-auto mb-8 text-lg">
              Tim support kami siap membantu menjawab pertanyaan Anda
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="white"
                size="xl"
                className="px-10 py-4 bg-room text-black font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Hubungi Kami
              </Button>
              <Button 
                variant="outline-white"
                size="xl"
                className="px-10 py-4 font-bold border-2 hover:bg-room hover:bg-opacity-10 transition-colors"
              >
                Lihat Panduan Peserta
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;