'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X, Copy, Check, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import Link from 'next/link'

// interface DocsProps {
//   content?: React.ReactNode
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Docs({ content }: any) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [copiedSnippets, setCopiedSnippets] = useState<{
        [key: string]: boolean
    }>({})
    const [outputVisible, setOutputVisible] = useState<{
        [key: string]: boolean
    }>({})
    const mainContentRef = useRef<HTMLDivElement>(null)

    const particlesInit = async (engine: Engine) => {
        await loadSlim(engine)
    }

    const NavLink = ({
        href,
        children,
    }: {
        href: string
        children: React.ReactNode
    }) => (
        <Link href={href} className="group relative inline-block">
            {children}
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-green-400 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </Link>
    )

    const CodeSnippet = ({
        id,
        code,
        output,
    }: {
        id: string
        code: string
        output: string
    }) => {
        const copyToClipboard = () => {
            navigator.clipboard.writeText(code)
            setCopiedSnippets((prev) => ({ ...prev, [id]: true }))
            setTimeout(
                () => setCopiedSnippets((prev) => ({ ...prev, [id]: false })),
                2000
            )
        }

        const toggleOutput = (event: React.MouseEvent) => {
            event.preventDefault()
            setOutputVisible((prev) => ({ ...prev, [id]: !prev[id] }))
        }

        return (
            <div className="relative mb-4">
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 pt-12 text-blue-300">
                    <code>{code}</code>
                </pre>
                <div className="absolute right-2 top-2 flex space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-green-400 text-xs font-bold text-black hover:bg-green-400"
                        onClick={copyToClipboard}
                    >
                        {copiedSnippets[id] ? (
                            <Check className="h-3 w-3" />
                        ) : (
                            <Copy className="h-3 w-3" />
                        )}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-green-400 text-xs font-bold text-black hover:bg-green-400"
                        onClick={toggleOutput}
                    >
                        <Play className="h-3 w-3" />
                    </Button>
                </div>

                <AnimatePresence>
                    {outputVisible[id] && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-800 p-4 text-green-400">
                                <code>{output}</code>
                            </pre>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    const sections = [
        { title: 'Getting Started', href: '/docs' },
        {
            title: 'API Reference',
            subsections: [
                { title: '> Posts', href: '/docs/posts' },
                { title: '> Todos', href: '/docs/todos' },
                { title: '> Quotes', href: '/docs/quotes' },
                { title: '> Users', href: '/docs/users' },
                { title: '> Carts', href: '/docs/carts' },
                { title: '> Comments', href: '/docs/comments' },
                { title: '> Recipes', href: '/docs/recipes' },
                { title: '> Products', href: '/docs/products' },
            ],
        },
    ]

    return (
        <div className="flex min-h-screen flex-col bg-black font-mono text-green-400">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        color: { value: '#00ff00' },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: { default: 'bounce' },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 100,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } },
                    },
                    background: {
                        color: '#000000',
                    },
                }}
                className="absolute inset-0"
            />

            <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-green-400 bg-black p-4">
                <div className="flex items-center text-2xl font-bold">
                    <Terminal className="mr-2" />
                    JSON Bro
                </div>
                <div className="hidden space-x-6 md:flex">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/docs">Docs</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
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

            <div className="flex flex-grow">
                <AnimatePresence>
                    {menuOpen && (
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed left-0 top-0 z-40 h-full w-64 overflow-y-auto border-r border-green-400 bg-gray-900 p-4 md:hidden"
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
                            <h2 className="mb-4 text-xl font-bold">
                                Documentation
                            </h2>
                            <ul>
                                {sections.map((section) => (
                                    <li key={section.title} className="mb-2">
                                        {section.href ? (
                                            <Link
                                                href={section.href}
                                                className="block w-full rounded px-4 py-2 text-left hover:bg-gray-800"
                                            >
                                                {section.title}
                                            </Link>
                                        ) : (
                                            <>
                                                <div className="w-full rounded px-4 py-2 text-left font-bold">
                                                    {section.title}
                                                </div>
                                                {section.subsections && (
                                                    <ul className="ml-4 mt-2">
                                                        {section.subsections.map(
                                                            (subsection) => (
                                                                <li
                                                                    key={
                                                                        subsection.title
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            subsection.href
                                                                        }
                                                                        className="block w-full rounded px-4 py-1 text-left hover:bg-gray-800"
                                                                    >
                                                                        {
                                                                            subsection.title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute bottom-4 left-0 w-full px-4">
                                <ul className="flex flex-col space-y-2">
                                    <li>
                                        <Link
                                            href="/"
                                            className="block rounded px-4 py-1 text-left hover:bg-gray-800"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/docs"
                                            className="block rounded px-4 py-1 text-left hover:bg-gray-800"
                                        >
                                            Docs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            className="block rounded px-4 py-1 text-left hover:bg-gray-800"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="block rounded px-4 py-1 text-left hover:bg-gray-800"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                <aside className="sticky top-[57px] z-30 hidden h-[calc(100vh-57px)] w-64 overflow-y-auto border-r border-green-400 bg-gray-900 p-4 md:block">
                    <h2 className="mb-4 text-xl font-bold">Documentation</h2>
                    <ul>
                        {sections.map((section) => (
                            <li key={section.title} className="mb-2">
                                {section.href ? (
                                    <Link
                                        href={section.href}
                                        className="block w-full rounded px-4 py-2 text-left hover:bg-gray-800"
                                    >
                                        {section.title}
                                    </Link>
                                ) : (
                                    <>
                                        <div className="w-full rounded px-4 py-2 text-left font-bold">
                                            {section.title}
                                        </div>
                                        {section.subsections && (
                                            <ul className="ml-4 mt-2">
                                                {section.subsections.map(
                                                    (subsection) => (
                                                        <li
                                                            key={
                                                                subsection.title
                                                            }
                                                        >
                                                            <Link
                                                                href={
                                                                    subsection.href
                                                                }
                                                                className="block w-full rounded px-4 py-1 text-left hover:bg-gray-800"
                                                            >
                                                                {
                                                                    subsection.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>

                <main
                    ref={mainContentRef}
                    className="relative z-20 h-[calc(100vh-57px)] flex-grow overflow-y-auto p-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {content || (
                            <>
                                <h2 className="mb-4 text-2xl font-bold">
                                    Getting Started with JSON Bro
                                </h2>
                                <p className="mb-4">
                                    JSON Bro can be used with any type of
                                    frontend project that needs products, carts,
                                    users, todos or any dummy data in JSON
                                    format. You can use examples below to check
                                    how JSON Bro works.{' '}
                                </p>

                                <h3 className="mb-4 text-xl font-bold">
                                    Examples
                                </h3>
                                <p className="mb-4">
                                    Here are some examples of how to use JSON
                                    Bro API endpoints. Each example includes a
                                    code snippet and its expected output.
                                </p>

                                <CodeSnippet
                                    id="posts-example"
                                    code={`fetch('https://jsonbro.com/posts')
                .then(response => response.json())
                .then(data => console.log(data));`}
                                    output={`
                  [
                    {
                      "id": 1,
                      "title": "Post 1",
                      "body": "This is the body of post 1.",
                      "userId": 1
                    },
                    {
                      "id": 2,
                      "title": "Post 2",
                      "body": "This is the body of post 2.",
                      "userId": 2
                    }
                  ]`}
                                />

                                <CodeSnippet
                                    id="todos-example"
                                    code={`fetch('https://jsonbro.com/todos')
                .then(response => response.json())
                .then(data => console.log(data));`}
                                    output={`[
                {
                  "id": 1,
                  "title": "Todo 1",
                  "completed": false,
                  "userId": 1
                },
                {
                  "id": 2,
                  "title": "Todo 2",
                  "completed": true,
                  "userId": 2
                }
              ]`}
                                />

                                <CodeSnippet
                                    id="products-example"
                                    code={`fetch('https://jsonbro.com/products')
                .then(response => response.json())
                .then(data => console.log(data));`}
                                    output={`[
                {
                  "id": 1,
                  "title": "Product 1",
                  "price": 29.99,
                  "description": "A great product.",
                  "category": "electronics"
                },
                {
                  "id": 2,
                  "title": "Product 2",
                  "price": 49.99,
                  "description": "Another great product.",
                  "category": "clothing"
                }
              ]`}
                                />
                            </>
                        )}
                    </motion.div>
                </main>
            </div>
        </div>
    )
}
