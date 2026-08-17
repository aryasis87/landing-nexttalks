"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "299",
      currency: "USD",
      duration: "per peserta",
      features: [
        "Akses penuh webinar",
        "Slide presentasi",
        "Sertifikat digital",
        "Akses rekaman 30 hari",
        "Lembar kerja dasar"
      ],
      popular: false,
      highlight: false,
      colorScheme: {
        bg: "bg-room-2",
        text: "text-live",
        border: "border-wire",
        button: "bg-live hover:bg-live"
      }
    },
    {
      id: 2,
      name: "Professional",
      price: "499",
      currency: "USD",
      duration: "per peserta",
      features: [
        "Semua fitur Starter",
        "Akses rekaman 1 tahun",
        "Template premium",
        "Komunitas eksklusif",
        "2 sesi Tanya Jawab",
        "Studi kasus bonus"
      ],
      popular: true,
      highlight: true,
      colorScheme: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
      }
    },
    {
      id: 3,
      name: "Enterprise",
      price: "2,499",
      currency: "USD",
      duration: "tim (maks 5)",
      features: [
        "Semua fitur Professional",
        "Hingga 5 peserta",
        "Konsultasi privat",
        "Sertifikat perusahaan",
        "Analisis kebutuhan khusus",
        "Dukungan prioritas"
      ],
      popular: false,
      highlight: false,
      colorScheme: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700"
      }
    }
  ];

  const features = [
    {
      title: "Garansi Kepuasan 100%",
      description: "Pengembalian dana penuh jika tidak puas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Pembayaran Aman",
      description: "Berbagai metode pembayaran tersedia",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Akses Fleksibel",
      description: "Tersedia di semua perangkat",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Faktur Resmi",
      description: "Untuk penggantian biaya perusahaan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-12 px-4 md:px-6 lg:px-8 bg-room overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-2xl h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-live bg-live/12 rounded-full uppercase mb-6">
            Harga Fleksibel
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4 leading-tight">
            Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Paket Belajar</span> Anda
          </h2>
          <p className="text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed">
            Investasi dalam pengetahuan yang berkembang bersama karier Anda. Semua paket termasuk garansi kepuasan kami.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative rounded-xl border ${plan.colorScheme.border} ${plan.colorScheme.bg} transition-all duration-300 hover:shadow-lg ${plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">
                  PALING POPULER
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-3 ${plan.colorScheme.text}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end">
                    <span className="text-3xl md:text-4xl font-bold text-ink">{plan.currency} {plan.price}</span>
                    <span className="text-lg text-ink-soft ml-2">/ {plan.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`flex-shrink-0 w-5 h-5 mr-3 mt-1 ${plan.colorScheme.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-ink-soft">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.highlight ? "primary" : "outline"}
                  size="lg"
                  className={`w-full h-10 lg:h-12 ${plan.highlight ? plan.colorScheme.button : 'border-2 hover:bg-room-2'}`}
                >
                  Dapatkan Paket {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-0.5 shadow-2xl">
            <div className="bg-black rounded-xl p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 lg:mr-8">
                  <h3 className="text-2xl font-bold text-room mb-3">Butuh solusi khusus untuk tim Anda?</h3>
                  <p className="text-room max-w-2xl">
                    Kami menawarkan paket korporat khusus dengan diskon volume, dukungan khusus, dan konten yang disesuaikan untuk memenuhi tujuan pembelajaran organisasi Anda.
                  </p>
                </div>
                <Button 
                  variant="primary"
                  size="xl"
                  className="whitespace-nowrap px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-l from-gray-500 to-gray-800"
                >
                  Minta Penawaran Enterprise
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-ink mb-12">Apa yang Termasuk dalam Semua Paket</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-room p-6 rounded-xl border border-wire hover:border-wire transition-all duration-300"
              >
                <div className="bg-live/12 text-live w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-ink mb-2">{feature.title}</h4>
                <p className="text-ink-soft">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;