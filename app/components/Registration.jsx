'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Button from './Button';

const Registration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const paymentMethods = [
    {
      id: 'bank-transfer',
      name: 'Transfer Bank',
      logo: '🏦',
      description: 'BCA, Mandiri, BRI, BNI, dan bank lainnya'
    },
    {
      id: 'credit-card',
      name: 'Kartu Kredit',
      logo: '💳',
      description: 'Visa, Mastercard, JCB'
    },
    {
      id: 'e-wallet',
      name: 'E-Wallet',
      logo: '📱',
      description: 'OVO, Gopay, Dana, LinkAja'
    },
    {
      id: 'retail',
      name: 'Gerai Retail',
      logo: '🏪',
      description: 'Alfamart, Indomaret'
    }
  ];

  const [selectedPayment, setSelectedPayment] = useState(null);

  if (isSuccess) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pendaftaran Berhasil!</h2>
            <p className="text-gray-600 mb-8">
              Terima kasih telah mendaftar webinar kami. Kami telah mengirimkan detail pembayaran dan instruksi lanjutan ke email Anda.
            </p>
            <Button 
              variant="primary"
              className="px-8 py-3"
              onClick={() => setIsSuccess(false)}
            >
              Kembali ke Halaman Utama
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h2 className="text-2xl font-bold">Formulir Pendaftaran</h2>
              <p className="text-blue-100">Isi data diri Anda dengan lengkap</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8">
              <div className="space-y-6">
                {/* Nama Lengkap */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName", { required: "Nama lengkap wajib diisi" })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email wajib diisi",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Alamat email tidak valid"
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="contoh@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Nomor HP */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +62
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", { 
                        required: "Nomor HP wajib diisi",
                        pattern: {
                          value: /^[0-9]{9,13}$/,
                          message: "Nomor HP tidak valid"
                        }
                      })}
                      className={`flex-1 px-4 py-3 rounded-r-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="81234567890"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Pilihan Paket */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pilihan Paket <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Basic (Rp 299rb)', 'Premium (Rp 499rb)', 'Enterprise (Rp 2,5jt)'].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={option}
                          type="radio"
                          value={option}
                          {...register("package", { required: "Pilihan paket wajib diisi" })}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={option} className="ml-2 block text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.package && (
                    <p className="mt-1 text-sm text-red-600">{errors.package.message}</p>
                  )}
                </div>

                {/* Metode Pembayaran */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Metode Pembayaran <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <div 
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedPayment === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{method.logo}</span>
                          <div>
                            <p className="font-medium text-gray-900">{method.name}</p>
                            <p className="text-xs text-gray-500">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <input
                    type="hidden"
                    {...register("paymentMethod", { required: "Metode pembayaran wajib dipilih" })}
                    value={selectedPayment || ''}
                  />
                  {errors.paymentMethod && (
                    <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
                  )}
                </div>

                {/* Referral Code */}
                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                    Kode Referral (Opsional)
                  </label>
                  <input
                    id="referral"
                    type="text"
                    {...register("referral")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan kode jika ada"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      {...register("terms", { 
                        required: "Anda harus menyetujui syarat dan ketentuan" 
                      })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      Saya menyetujui <a href="/terms" className="text-blue-600 hover:text-blue-500">Syarat & Ketentuan</a> dan <a href="/privacy" className="text-blue-600 hover:text-blue-500">Kebijakan Privasi</a>
                    </label>
                    {errors.terms && (
                      <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Memproses...
                      </>
                    ) : 'Daftar Sekarang'}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Registration Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold">Detail Webinar</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">Tanggal & Waktu</h3>
                      <p className="text-gray-600">15-16 November 2023</p>
                      <p className="text-gray-600">09:00 - 15:00 WIB</p>
                    </div>
                  </div>

                  <div className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">Pembicara</h3>
                      <ul className="text-gray-600 list-disc list-inside">
                        <li>Dr. Sarah Wijaya (Digital Marketing Expert)</li>
                        <li>Michael Santoso (Product Designer)</li>
                        <li>Andi Pratama (Data Scientist)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">Yang Anda Dapatkan</h3>
                      <ul className="text-gray-600 list-disc list-inside">
                        <li>Akses ke semua sesi webinar</li>
                        <li>Materi presentasi digital</li>
                        <li>Sertifikat partisipasi</li>
                        <li>Rekaman webinar</li>
                        <li>Akses ke grup eksklusif</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-bold">Butuh Bantuan?</h2>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-6">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Hubungi Kami</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-gray-600">09:00 - 17:00 WIB, Senin-Jumat</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Email Kami</h3>
                    <p className="text-gray-600">support@webinarkami.com</p>
                    <p className="text-gray-600">Respon dalam 1x24 jam</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;