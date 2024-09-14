'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function NotFound() {
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    // Show content after 10 milliseconds
    const timer = setTimeout(() => {
      setContentVisible(true)
    }, 10)

    // Clean up the timer if the component unmounts before the timeout
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col relative">
      <main className={`relative z-10 flex-grow flex flex-col items-center justify-center p-4 gap-8 text-center ${contentVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <motion.div
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          404
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          The page you are looking for does not exist or has been moved.
        </motion.p>
        {contentVisible && (
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-green-400 text-black hover:bg-green-400"
            >
              <Home className="mr-2" /> Go Home
            </Button>
          </Link>
        )}
      </main>

      <footer className="relative z-10 bg-gray-900 text-green-400 py-8 px-4 border-t border-green-400 text-center">
        <div className="container mx-auto">
          <p className="text-sm font-sans">© 2024 JSON Bro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
