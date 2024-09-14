
"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
    <a href={href} className="relative group inline-block" onClick={onClick}>
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </a>
  )

  return (
    <>
      <nav className="relative z-20 flex justify-between items-center p-4 border-b border-green-400">
        <div className="text-2xl font-bold flex items-center">
          <Terminal className="mr-2" />
          JSON Bro
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/docs">Docs</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-green-400 text-black hover:bg-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-gray-900 z-50 p-4 border-l border-green-400 md:hidden"
          >
            <div className="flex justify-end mb-4">
              <Button
                variant="outline"
                size="icon"
                className="border-green-400 text-black hover:bg-green-400"
                onClick={() => setMenuOpen(false)}
              >
                <X />
              </Button>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink href="/docs" onClick={() => setMenuOpen(false)}>Docs</NavLink>
              <NavLink href="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}