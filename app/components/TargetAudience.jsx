"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const TargetAudience = () => {
  const audienceGroups = [
    {
      id: 1,
      title: "Profesional Digital",
      description: "Marketing specialist, content creators, dan digital strategist yang ingin meningkatkan skill",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      stats: "65% peserta sebelumnya",
      color: "bg-live/12 text-live"
    },
    {
      id: 2,
      title: "Startup Founder",
      description: "Pendiri startup yang ingin belajar growth hacking dan strategi scaling",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      stats: "20% peserta sebelumnya",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 3,
      title: "Business Owner",
      description: "Pemilik bisnis yang ingin transformasi digital dan perluas pasar",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stats: "10% peserta sebelumnya",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      title: "Mahasiswa & Fresh Graduate",
      description: "Yang ingin mempersiapkan karir di industri digital",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      stats: "5% peserta sebelumnya",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Webinar ini memberikan insight praktis yang langsung bisa saya terapkan di tim marketing kami.",
      name: "Dewi Kartika",
      role: "Digital Marketing Manager",
      company: "PT Retail Indonesia"
    },
    {
      id: 2,
      quote: "Sebagai founder startup, materi tentang growth hacking sangat relevan dengan kebutuhan kami yang ingin scaling.",
      name: "Randy Setiawan",
      role: "Co-Founder",
      company: "TokoPedia"
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
            Untuk Siapa Webinar Ini?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4 leading-tight">
            Target <span className="text-live">Audiens</span> Kami
          </h2>
          <p className="text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed">
            Webinar ini dirancang khusus untuk profesional yang ingin mengembangkan diri di era digital
          </p>
        </motion.div>

        {/* Audience Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {audienceGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-room rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${group.color}`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{group.title}</h3>
                <p className="text-ink-soft mb-4">{group.description}</p>
                <span className="text-sm font-medium text-ink-soft">{group.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-live to-indigo-600 rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-white text-center mb-10">Apa Kata Mereka?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-ink bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
                  <svg className="w-8 h-8 text-room/70 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-room/90 text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div className="text-room/80">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-room rounded-2xl p-10 shadow-lg border border-wire">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-6">Apakah Anda Termasuk Target Audiens Kami?</h3>
            <p className="text-ink-soft max-w-2xl mx-auto mb-8 text-lg">
              Jika Anda ingin mengembangkan skill digital, webinar ini cocok untuk Anda!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary"
                size="xl"
                className="px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Daftar Sekarang
              </Button>
              <Button 
                variant="outline"
                size="xl"
                className="px-10 py-4 font-bold border-2 hover:bg-room-2 transition-colors"
              >
                Lihat Kurikulum
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;