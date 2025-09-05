'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

// export const metadata: Metadata = {
//     title: 'Contact Us',
//     description:
//         'Get in touch with the JSON Bro team for any inquiries or support.',
// }

const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
}

const getCurrentYear = () => new Date().getFullYear()

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [formStatus, setFormStatus] = useState('')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        setTimeout(() => {
            setFormStatus('Thank you for your message!')
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        }, 1000)
    }

    return (
        <>
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
            <div className="flex min-h-screen flex-col bg-black font-mono text-green-400">
                <Navbar />
                <main className="relative z-10 flex flex-grow flex-col items-center justify-center gap-8 p-4 text-center">
                    <motion.h1
                        className="mb-4 text-4xl font-bold md:text-6xl"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="mb-8 text-lg md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We&apos;d love to hear from you! Please fill out the
                        form below with your query or feedback.
                    </motion.p>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-xl rounded-lg border border-green-400 bg-gray-900 p-6 shadow-lg"
                    >
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="name"
                                className="mb-2 text-lg font-semibold"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded-lg border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="email"
                                className="mb-2 text-lg font-semibold"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-lg border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="subject"
                                className="mb-2 text-lg font-semibold"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="rounded-lg border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label
                                htmlFor="message"
                                className="mb-2 text-lg font-semibold"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="rounded-lg border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <Button
                                type="submit"
                                variant="outline"
                                size="lg"
                                className="border-green-400 text-black hover:bg-green-400"
                            >
                                Send Message
                            </Button>
                        </div>
                        {formStatus && (
                            <motion.p
                                className="mt-4 text-lg font-semibold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {formStatus}
                            </motion.p>
                        )}
                    </form>
                </main>
                <footer className="relative z-10 border-t border-green-400 bg-gray-900 px-4 py-8 text-center text-green-400">
                    <div className="container mx-auto">
                        <p className="font-sans text-sm">
                            © {getCurrentYear()} JSON Bro. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}
