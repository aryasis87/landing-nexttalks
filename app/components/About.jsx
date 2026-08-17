"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Sesi Interaktif",
      description: "Tanya jawab langsung dengan para ahli di bidangnya"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Materi Terpercaya",
      description: "Konten berbasis penelitian dan pengalaman praktis"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Update Terbaru",
      description: "Strategi dan tools terkini di industri"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-room">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Foto stok sebelumnya tidak berkaitan dengan webinar, jadi
                diganti panel takarir yang memakai motif varian ini. */}
            <div className="rounded-2xl border border-wire bg-caption p-8 shadow-lg sm:p-10">
              <p className="stamp mb-6 text-white">Cuplikan sesi lalu</p>
              <p className="text-xl leading-relaxed font-bold text-white sm:text-2xl">
                &ldquo;Studi kasus hanya berguna kalau angkanya ikut dibuka. Kalau tidak, itu cuma
                cerita.&rdquo;
              </p>
              <p className="stamp mt-7 border-t border-white/15 pt-5 text-white">
                Menit 18 · Sesi 11
              </p>
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-live text-white p-4 md:p-6 rounded-xl shadow-xl w-3/4">
              <h3 className="font-bold text-base md:text-xl mb-2">100% Praktikal</h3>
              <p className="text-room text-sm md:text-base">Studi kasus nyata dari pengalaman profesional</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-live bg-live/12 rounded-full mb-4">
                Tentang Webinar
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                Belajar Langsung dari <span className="text-live">Para Praktisi</span>
              </h2>
              <p className="text-lg text-ink-soft mb-6">
                Webinar kami dirancang untuk memberikan Anda wawasan mendalam dan keterampilan praktis yang bisa langsung diaplikasikan.
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 bg-live/12 p-3 rounded-lg text-live">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{feature.title}</h3>
                    <p className="text-ink-soft">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button 
                variant="primary" 
                className="px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Pelajari Kurikulum
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 bg-room-2 rounded-2xl p-8 sm:p-10 shadow-inner"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-live">5000+</h3>
              <p className="text-ink-soft mt-2">Peserta Terdaftar</p>
            </div>
            <div className="text-center md:text-left md:pl-8 pt-6 md:pt-0">
              <h3 className="text-4xl font-bold text-live">98%</h3>
              <p className="text-ink-soft mt-2">Kepuasan Peserta</p>
            </div>
            <div className="text-center md:text-left md:pl-8 pt-6 md:pt-0">
              <h3 className="text-4xl font-bold text-live">50+</h3>
              <p className="text-ink-soft mt-2">Perusahaan Mitra</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;