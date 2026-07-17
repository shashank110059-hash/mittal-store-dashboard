'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-600/20'
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4'>
        {/* Logo & Name */}
        <div className='flex items-center gap-3'>
          <Image src='/logo.jpeg' alt='Mittal Store' width={80} height={80} className='border-1 border-white' priority />

          <div>
            <h2 className='text-white font-bold text-lg md:text-xl'>Mittal Store</h2>

            <p className='text-white text-xs md:text-sm'>Where devotion meets tradition.</p>
          </div>
        </div>

        {/* Instagram Button */}
        <a
          href='https://www.instagram.com/anjanamukut?igsh=dDU0czN2YXY3ZXFt&utm_source=qr'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/50'
        >
          <span className='text-xl'>📸</span>

          <span className='hidden sm:block'>Follow for New Arrivals</span>
        </a>
      </div>
    </motion.nav>
  );
}
