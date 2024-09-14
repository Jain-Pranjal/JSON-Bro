"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [text, setText] = useState('')
  const fullText = "Fake JSON API for testing and prototyping"

  const codeSnippet = `localhost:3000/users`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(prev => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 50)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <>
      <main className="relative z-10 flex-grow flex flex-col md:flex-row items-center justify-center p-4 gap-8">
        <div className="md:w-1/2 space-y-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            JSON Bro
          </motion.h1>
          <motion.div
            className="text-lg md:text-xl mb-8 h-16 md:h-20 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="inline-block w-1 h-6 bg-green-400 mr-1 animate-blink"></span>
            <span className="inline-block min-h-[1.5em]">{text}</span>
          </motion.div>
        </div>
        <motion.div 
          className="md:w-1/2 bg-gray-900 p-4 rounded-lg shadow-lg w-full border border-green-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <Code className="mr-2" />
              <span>Example Usage</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className={`border-green-400 font-bold hover:bg-green-400 text-black transition-all duration-300 ${
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
          <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
            {codeSnippet}
          </pre>
        </motion.div>
      </main>

      <motion.section 
        className="relative z-10 py-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {['Parse JSON', 'Format JSON', 'Validate JSON', 'Convert JSON to other formats', 'JSON Schema validation', 'JSON Diff'].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-400">Description of the feature</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}