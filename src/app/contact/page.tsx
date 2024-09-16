'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
// import { Terminal } from 'lucide-react'
import Navbar from '@/components/Navbar' // Include the Navbar component
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"


const particlesInit = async (engine: Engine) => {
  await loadSlim(engine)
}

const particlesConfig = {
  particles: {
    color: { value: "#00ff00" },
    move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
    number: { density: { enable: true, area: 800 }, value: 100 },
    opacity: { value: 0.5 },
    shape: { type:"circle" },
    size: { value: { min: 1, max: 3 } },
  },
  background: {
    color: "#000000"
  }
}


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
        message: ''
      })
    }, 1000)
  }

  return (<>
    <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Navbar /> 
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center p-4 gap-8 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We&apos;d love to hear from you! Please fill out the form below with your query or feedback.
        </motion.p>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-gray-900 p-6 rounded-lg shadow-lg border border-green-400"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="subject" className="text-lg font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              ></textarea>
          </div>
          <div className="flex justify-center mb-4">
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
              className="text-lg font-semibold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              >
              {formStatus}
            </motion.p>
          )}
        </form>
      </main>
      <footer className="relative z-10 bg-gray-900 text-green-400 py-8 px-4 border-t border-green-400 text-center">
        <div className="container mx-auto">
          <p className="text-sm font-sans">© 2024 JSON Bro. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}
