// this is the main content of the page that was originally contained all thinggs 
// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Code, Terminal, Github , Menu, X, Check } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import Particles from "react-tsparticles"
// import { loadSlim } from "tsparticles-slim"
// import type { Engine } from "tsparticles-engine"

// export default function Component() {
//   const [copied, setCopied] = useState(false)
//   const [text, setText] = useState('')
//   const [menuOpen, setMenuOpen] = useState(false)
//   const fullText = "Fake JSON API for testing and prototyping"

//   const codeSnippet = `// Just make the request to the endpoint

//   localhost:3000/users`

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(codeSnippet)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   // for the typing effect
//   useEffect(() => {
//     let i = 0
//     const typingEffect = setInterval(() => {
//       if (i < fullText.length) {
//         setText(prev => prev + fullText.charAt(i))
//         i++
//       } else {
//         clearInterval(typingEffect)
//       }
//     }, 50)

//     return () => clearInterval(typingEffect)
//   }, [])

//   const particlesInit = async (engine: Engine) => {
//     await loadSlim(engine)
//   }

//   const particlesConfig = {
//     particles: {
//       color: { value: "#00ff00" },
//       move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
//       number: { density: { enable: true, area: 800 }, value: 100 },
//       opacity: { value: 0.5 },
//       shape: { type:"circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     background: {
//       color: "#000000"
//     }
//   }

//   const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
//     <a href={href} className="relative group inline-block" onClick={onClick}>
//       {children}
//       <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//     </a>
//   )

//   return (
//     <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
//       <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
//       <nav className="relative z-20 flex justify-between items-center p-4 border-b border-green-400">
//         <div className="text-2xl font-bold flex items-center">
//           <Terminal className="mr-2" />
//           JSON Bro
//         </div>
//         <div className="hidden md:flex space-x-8">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/docs" >Docs</NavLink>
//             <NavLink href="/about" >About</NavLink>
//             <NavLink href="/contact" >Contact</NavLink>
//         </div>
//         <Button
//           variant="outline"
//           size="icon"
//           className="md:hidden border-green-400 text-black hover:bg-green-400 "
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X /> : <Menu />}
//         </Button>
//       </nav>

//       {/* mobile view */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween', duration: 0.3 }}
//             className="fixed top-0 right-0 bottom-0 w-64 bg-gray-900 z-50 p-4 border-l border-green-400 md:hidden"
//           >
//             <div className="flex justify-end mb-4">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="border-green-400 text-black hover:bg-green-400 "
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <X />
//               </Button>
//             </div>
//             <div className="flex flex-col items-start space-y-4">
//               <NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
//               <NavLink href="/docs" onClick={() => setMenuOpen(false)}>Docs</NavLink>
//               <NavLink href="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
//               <NavLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>


//       <main className="relative z-10 flex-grow flex flex-col md:flex-row items-center justify-center p-4 gap-8">
//         <div className="md:w-1/2 space-y-4">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-4"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             JSON Bro
//           </motion.h1>
//           <motion.div
//             className="text-lg md:text-xl mb-8 h-16 md:h-20 font-sans"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <span className="inline-block w-1 h-6 bg-green-400 mr-1 animate-blink"></span>
//             <span className="inline-block min-h-[1.5em]">{text}</span>
//           </motion.div>
//         </div>
//         <motion.div 
//           className="md:w-1/2 bg-gray-900 p-4 rounded-lg shadow-lg w-full border border-green-400"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <div className="flex justify-between items-center mb-2">
//             <div className="flex items-center">
//               <Code className="mr-2" />
//               <span>Example Usage</span>
//             </div>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={copyToClipboard}
//               className={`border-green-400 font-bold hover:bg-green-400 text-black transition-all duration-300 ${
//                 copied ? 'bg-green-400 text-black' : ''
//               }`}
//             >
//               {copied ? (
//                 <>
//                   <Check className="mr-2 h-4 w-4" /> Copied!
//                 </>
//               ) : (
//                 'Copy'
//               )}
//             </Button>
//           </div>
//           <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
//             {codeSnippet}
//           </pre>
//         </motion.div>
//       </main>


// {/* Features section */}
//       <motion.section 
//         className="relative z-10 py-12 px-4"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.6 }}>
        
//         <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
//           {['Parse JSON', 'Format JSON', 'Validate JSON', 'Convert JSON to other formats', 'JSON Schema validation', 'JSON Diff'].map((feature, index) => (
//             <motion.div 
//               key={index}
//               className="bg-gray-900 p-6 rounded-lg border border-green-400"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">{feature}</h3>
//               <p className="text-gray-400">Description of the feature</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>



//       {/* footer */}
//       <footer className="relative z-10 bg-gray-900 text-green-400 py-8 px-4 border-t border-green-400">
//         <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
//           <div className="text-center md:text-left mb-4 md:mb-0">
//             <h3 className="text-xl font-bold mb-2">JSON Bro</h3>
//             <p className="text-sm font-sans">© 2024 JSON Bro. All rights reserved.</p>
//            </div>
//           <div className="flex flex-wrap justify-center md:justify-end gap-4">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/docs">Docs</NavLink>
//             <NavLink href="/about">About</NavLink>
//             <NavLink href="/contact">Contact</NavLink>
//             <a href="https://github.com/Jain-Pranjal/JSON-Bro" target='_blank' className="flex items-center hover:text-white transition-colors duration-200 font-sans">
//               <Github className="mr-1" size={16} /> GitHub
//             </a>
//           </div>
//   </div>
// </footer>
//     </div>
//   )
// }




// app/page.tsx
'use client'

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function CoverPage() {
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

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}