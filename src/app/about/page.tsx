"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import { motion } from "framer-motion"
import { Code, Zap, Globe, Users } from "lucide-react"

export default function AboutPage() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const features = [
    {
      icon: <Code className="h-8 w-8 text-green-400" />,
      title: "Fake JSON API",
      description:
        "Provides realistic JSON responses for common data structures without requiring a backend setup.",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-400" />,
      title: "Rapid Prototyping",
      description:
        "Perfect for frontend developers to quickly test and prototype applications with mock data.",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-400" />,
      title: "Free & Accessible",
      description:
        "Completely free to use with no registration required. Available online 24/7.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Community Driven",
      description:
        "Built by developers for developers, with contributions and feedback welcome.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            color: { value: "#00ff00" },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          background: {
            color: "#000000",
          },
        }}
        className="absolute inset-0"
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-400">
            About JSON-Bro
          </h1>
          <p className="text-xl md:text-2xl text-green-300 max-w-3xl mx-auto">
            Your go-to fake JSON API for seamless testing and prototyping
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
            What We Do
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              JSON-Bro is a powerful fake JSON API service designed to
              streamline the development process for frontend developers,
              testers, and product teams. We provide realistic, structured JSON
              data that mimics real-world APIs, allowing you to focus on
              building and testing your applications without the need for
              complex backend setups.
            </p>
            <p className="mb-6">
              Whether you&apos;re prototyping a new feature, testing API
              integrations, or demonstrating concepts to stakeholders, JSON-Bro
              offers a quick and reliable way to generate mock data for common
              use cases like users, posts, products, todos, and more.
            </p>
            <p>
              Built with modern web technologies and deployed on Vercel,
              JSON-Bro ensures fast, reliable access to our endpoints from
              anywhere in the world. Our service is completely free, requires no
              authentication, and supports features like pagination to help you
              work efficiently.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-green-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-4 text-green-400">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-green-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            Get Started
          </h2>
          <p className="text-lg mb-8 text-green-300">
            Ready to supercharge your development workflow? Start using JSON-Bro
            today!
          </p>
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-green-400 border-opacity-30 max-w-md mx-auto">
            <code className="text-green-400">
              curl https://json-bro.vercel.app/api/users
            </code>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

