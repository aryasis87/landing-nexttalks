"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Wijaya",
      role: "Kepala Pemasaran Digital di TechCorp",
      bio: "Pakar dengan pengalaman 10+ tahun di bidang pemasaran digital dan growth hacking",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      topics: ["SEO", "Pemasaran Konten", "Pemasaran Berbasis Data"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Michael Santoso",
      role: "Desainer Produk Utama di FinTech Inc",
      bio: "Mendesain produk digital yang digunakan oleh jutaan orang di Asia Tenggara",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      topics: ["Riset UX", "Desain UI", "Sistem Desain"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Andi Pratama",
      role: "Ilmuwan Data di Startup AI",
      bio: "Spesialis machine learning dan analitik data untuk bisnis",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      topics: ["Analitik Prediktif", "Implementasi AI", "Visualisasi Data"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Lisa Setiawan",
      role: "VP Teknik di HealthTech",
      bio: "Memimpin tim teknik untuk solusi kesehatan digital",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      topics: ["Kepemimpinan Teknologi", "Pengembangan Agile", "Arsitektur Sistem"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 bg-blue-100 rounded-full uppercase mb-4">
            Pembicara Ahli
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Belajar dari <span className="text-blue-600">Para Pemimpin Industri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pembicara kami yang terpilih dengan cermat menghadirkan keahlian nyata dan wawasan yang dapat langsung diterapkan
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-500 -z-10"></div>
              
              <div className="h-full bg-white rounded-xl shadow-sm overflow-hidden group-hover:shadow-md transition-all duration-500 flex flex-col">
                <div className="pt-10 px-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{speaker.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{speaker.bio}</p>
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Keahlian</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {speaker.topics.map((topic, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {Object.keys(speaker.social).map((platform) => (
                      <a key={platform} href="/" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        {/* Ikon sosial akan tetap sama */}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Siap Meningkatkan Keahlian Anda?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Bergabunglah dalam webinar eksklusif kami dan dapatkan wawasan dari para profesional terbaik di industri
            </p>
            <Button 
              variant="white"
              size="xl"
              className="px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Amankan Tempat Anda Sekarang
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
