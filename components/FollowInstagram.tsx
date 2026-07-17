'use client';

import Image from 'next/image';
import { WhatsAppIcon } from './Hero';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function FollowInstagram({ onContinue }: { onContinue: () => void }) {
  return (
    <main className='min-h-screen bg-black flex items-center justify-center px-6'>
      <div className='w-full max-w-lg rounded-3xl border border-white-600 bg-zinc-900 p-10 text-center shadow-2xl'>
        {/* Logo */}
        <Image src='/logo.jpeg' alt='Mittal Store Logo' width={120} height={120} className='mx-auto border-0' priority />

        <h1 className='mt-6 text-4xl font-bold text-white'>Follow Us on Instagram</h1>

        <p className='mt-4 text-lg text-gray-400'>
          Follow <span className='font-semibold text-[#FFD700]'>Mittal Store</span>
          <br />
          and get exciting offers, discounts and the latest updates.
        </p>

        {/* Follow Button */}
<div className="mt-8 flex items-center justify-center gap-4">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/anjanamukut?igsh=dDU0czN2YXY3ZXFt&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white transition-all duration-300 hover:scale-110"
    aria-label="Instagram"
  >
    <FaInstagram size={28} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/917678224759?text=Hello%20Mittal%20Store!"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-300 hover:scale-110 hover:bg-[#1DA851]"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={28} />
  </a>
</div>

        {/* Continue */}
        <button
          onClick={onContinue}
          className='mt-6 w-full rounded-xl bg-green-600 py-4 text-xl font-bold text-white transition hover:bg-green-700'
        >
          Continue →
        </button>
      </div>
    </main>
  );
}
