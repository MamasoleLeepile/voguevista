'use client'

import Link from 'next/link'
import { JSX, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Building2, Search, Home, ArrowDown } from 'lucide-react'
import { SearchInput } from './FormInputs/SearchInput'

export default function Hero(): JSX.Element {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/building.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 justify-center text-4xl sm:text-6xl font-extrabold max-w-3xl leading-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl"
        >
          <Building2 className="w-10 h-10 sm:w-12 sm:h-12" />
          Verified Rentals. Real Comfort.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium max-w-xl drop-shadow-md"
        >
          Designed for Students & Lecturers Seeking Peace of Mind
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 w-full max-w-md"
        >
          <div className="relative">
            <SearchInput />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Browse Rentals Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/properties"
              className="flex items-center gap-2 rounded-full bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 text-sm font-semibold shadow-md transition duration-300"
            >
              <Home className="w-5 h-5" />
              Browse Rentals
            </Link>
          </motion.div>

          {/* List a Property Button (Eye-catching) */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/register?role=LANDLORD"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-xl hover:shadow-2xl transition duration-300"
            >
              <Building2 className="w-5 h-5" />
              List Your Property
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 sm:bottom-10"
        >
          <ArrowDown className="w-6 h-6 text-white opacity-70 hover:opacity-100 transition" />
        </motion.a>
      </div>
    </div>
  )
}