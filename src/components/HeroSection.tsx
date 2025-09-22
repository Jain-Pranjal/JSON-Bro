'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
    const [copied, setCopied] = useState(false)
    const [text, setText] = useState('')
    const fullText = '  Fake JSON API for testing and prototyping'

    const codeSnippet = `curl https://json-bro.vercel.app/posts`

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippet)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    useEffect(() => {
        let i = 0
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setText((prev) => prev + fullText.charAt(i))
                i++
            } else {
                clearInterval(typingEffect)
            }
        }, 50)

        return () => clearInterval(typingEffect)
    }, [])

    const features = [
        {
            title: 'Fake API Response',
            description:
                'Get realistic JSON responses without setting up a backend server',
        },
        {
            title: 'Perfect for Testing and Prototyping',
            description:
                'Ideal for frontend development, testing, and rapid prototyping',
        },
        {
            title: 'Free to Use',
            description:
                'Completely free service with no API limits or registration required',
        },
        {
            title: 'Supports Various Endpoints',
            description:
                'Access users, posts, comments, and other common data endpoints',
        },
        {
            title: 'Rich JSON Response',
            description:
                'Well-structured and comprehensive JSON data for your applications',
        },
        {
            title: 'Fast and Reliable',
            description:
                'High-performance API with consistent uptime and quick response times',
        },
    ]

    return (
        <>
            <main className="relative z-10 flex flex-grow flex-col items-center justify-center gap-8 p-4 md:flex-row">
                <div className="flex flex-col items-start space-y-4 md:w-1/2">
                    <motion.h1
                        className="mb-4 text-4xl font-bold md:text-6xl"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        JSON Bro
                    </motion.h1>
                    <motion.div
                        className="mb-8 h-16 font-sans text-lg md:h-20 md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <span className="animate-blink mr-1 inline-block h-6 w-1 bg-green-400"></span>
                        <span className="inline-block min-h-[1.5em]">
                            {text}
                        </span>

                        <Link
                            href="https://peerlist.io/json-bro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block"
                        >
                            <Image
                                src="/peerlistLaunch.png"
                                alt="Peerlist"
                                width={250}
                                height={250}
                                className="my-2"
                                priority
                            />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="w-full rounded-lg border border-green-400 bg-gray-900 p-4 shadow-lg md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <Code className="mr-2" />
                            <span>Example Usage</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={copyToClipboard}
                            className={`border-green-400 font-bold text-black transition-all duration-300 hover:bg-green-400 ${
                                copied ? 'bg-green-400 text-black' : ''
                            }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="mr-2 h-4 w-4" /> Copied!
                                </>
                            ) : (
                                'Copy'
                            )}
                        </Button>
                    </div>
                    <pre className="overflow-x-auto rounded bg-black p-4 text-green-400">
                        {codeSnippet}
                    </pre>
                </motion.div>
            </main>

            <motion.section
                className="relative z-10 px-4 py-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="mb-8 text-center text-3xl font-bold">
                    Features
                </h2>
                <div className="grid grid-cols-1 gap-8 font-sans md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border border-green-400 bg-gray-900 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8 + index * 0.1,
                            }}
                        >
                            <h3 className="mb-2 text-xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </>
    )
}
