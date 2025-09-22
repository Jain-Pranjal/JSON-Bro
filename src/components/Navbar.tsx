'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface NavLinkProps {
    href: string
    children: React.ReactNode
    onClick?: () => void
}

function NavLink({ href, children, onClick }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="group relative inline-block"
            onClick={onClick}
        >
            {children}
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-green-400 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </Link>
    )
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/docs', label: 'Docs' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <nav className="relative z-20 flex items-center justify-between border-b border-green-400 p-4">
                <div className="flex items-center text-2xl font-bold">
                    <Terminal className="mr-2" />
                    JSON Bro
                </div>
                <div className="hidden space-x-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.href} href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="border-green-400 text-black hover:bg-green-400 md:hidden"
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
                        className="fixed bottom-0 right-0 top-0 z-50 flex w-64 flex-col border-l border-green-400 bg-gray-900 p-4 md:hidden"
                    >
                        <div className="mb-4 flex justify-end">
                            <Button
                                variant="outline"
                                size="icon"
                                className="border-green-400 text-black hover:bg-green-400"
                                onClick={() => setMenuOpen(false)}
                            >
                                <X />
                            </Button>
                        </div>
                        <div className="flex flex-1 flex-col items-start space-y-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        <Link
                            href="https://peerlist.io/json-bro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="mt-8 flex justify-center">
                                <Image
                                    src="/peerlistLaunch.png"
                                    alt="Peerlist"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                    priority
                                />
                            </div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
