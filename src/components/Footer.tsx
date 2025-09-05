import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const getCurrentYear = () => new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-gray-900 text-green-400 py-8 px-4 border-t border-green-400">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">JSON Bro</h3>
          <p className="text-sm font-sans">© {getCurrentYear()} JSON Bro. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link href="/" className="relative group inline-block">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          <Link href="/docs" className="relative group inline-block">
            Docs
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          <Link href="/about" className="relative group inline-block">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          <Link href="/contact" className="relative group inline-block">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          <Link href="https://github.com/Jain-Pranjal/JSON-Bro" target='_blank' className="flex items-center hover:text-white transition-colors duration-200 font-sans">
            <Github className="mr-1" size={16} /> GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}