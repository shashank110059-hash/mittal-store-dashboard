'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function WhatsAppIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        fill="#fff"
        d="M23.5 18.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.2-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-black'>
      {/* Background Glow */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_65%)]' />

      {/* Content */}
      <div className='relative z-10 max-w-4xl px-6 text-center'>
        {/* Logo */}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}>
          <Image
            src='/logo.jpeg'
            alt='The Mittal Store Logo'
            width={180}
            height={180}
            priority
            className='mx-auto border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,0.45)]'
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='mt-8 text-5xl md:text-7xl font-extrabold text-white'
        >
          Mittal Store
        </motion.h1>

        {/* Tagline */}
        <p className='mt-4 text-2xl md:text-3xl font-semibold text-red-500'>Where devotion meets tradition</p>

        {/* Stars */}
        <div className='mt-8 flex justify-center gap-2 text-5xl'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className='text-yellow-400 drop-shadow-lg animate-pulse'>
              ⭐
            </span>
          ))}
        </div>

        {/* Description */}
        {/* <p className='mx-auto mt-8 max-w-2xl text-lg md:text-2xl leading-8 text-gray-300'>
          Loved your shopping experience? Share your feedback and help others discover premium men's fashion.
        </p> */}
      </div>
    </section>
  );
}
