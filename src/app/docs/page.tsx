
/**
 in the documentation i need to make the docu of the api route 
  /todos
  /todos/:id
  /todos?limit=2&skip=2
  /todos?limit=2
  /todos?skip=2
  /todos/random

  add this line in the documentation
  By default you will get 30 items, use Limit and skip to paginate through all items.


 */


   
   
// "use client";
// import React from 'react'
// import axios from 'axios'
// import { Button } from '@/components/ui/button';
// import { useQuery } from "@tanstack/react-query"
// import { useState } from 'react';
// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
// import 'highlight.js/styles/default.css'; 

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('typescript', typescript); 


// const highlightedCode = hljs.highlight(
//   '<span>Hello World!</span>',
//   { language: 'javascript' }
// ).value



// // ab jaise ke mene apne api ka filder hata dia hai to vo bas ab nirmal foldfr par data ko fetch karega na ke aapke api folder se
// const getTodos=async()=>{
//     const res = await axios.get('/api/todos');
//     // console.log(res.data);
//     return res.data;
// }



// const page = () => {

//     const [fetchData, setFetchData] = useState(false);
//     const { data, error, isLoading } = useQuery({queryKey: ['allTodos'], queryFn: getTodos,staleTime: 5000,enabled:fetchData});


//     const handleFetchProducts = () => {
//         setFetchData(true);
//         }


// const codeSnippet = `
// // Your JavaScript code snippet here
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// `;


//   return (
//     <div className=' h-full '>
//       INSTRCUTUON ON HOW TO USE THE REST API <br />

    
//     <Button onClick={handleFetchProducts}>Get Todos</Button>
//     {isLoading && <p>Loading...</p>}
//     {error && <p>Error: {error.message}</p>}
//     {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     {/* {highlightedCode} */}
//     <br />
//     <pre>
//       <code className="language-javascript" dangerouslySetInnerHTML={{ __html: hljs.highlight(codeSnippet.toString(), { language: 'javascript' }).value }} />
//     </pre>
//     </div>
//   )
// }

// export default page

















// ----------------------------

// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, Terminal, Menu, X, Copy, Check, Play } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import Particles from "react-tsparticles"
// import { loadSlim } from "tsparticles-slim"
// import type { Engine } from "tsparticles-engine"

// export default function Component() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('Getting Started')
//   const [copiedSnippets, setCopiedSnippets] = useState<{ [key: string]: boolean }>({})
//   const [outputVisible, setOutputVisible] = useState<{ [key: string]: boolean }>({})

//   const particlesInit = async (engine: Engine) => {
//     await loadSlim(engine)
//   }

//   const particlesConfig = {
//     particles: {
//       color: { value: "#00ff00" },
//       move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
//       number: { density: { enable: true, area: 800 }, value: 80 },
//       opacity: { value: 0.5 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     background: {
//       color: "#000000"
//     }
//   }

//   const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
//     <a href={href} className="relative group inline-block">
//       {children}
//       <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//     </a>
//   )

//   const CodeSnippet = ({ id, code, output }: { id: string, code: string, output: string }) => {
//     const copyToClipboard = () => {
//       navigator.clipboard.writeText(code)
//       setCopiedSnippets(prev => ({ ...prev, [id]: true }))
//       setTimeout(() => setCopiedSnippets(prev => ({ ...prev, [id]: false })), 2000)
//     }

//     const toggleOutput = () => {
//       setOutputVisible(prev => ({ ...prev, [id]: !prev[id] }))
//     }

//     return (
//       <div className="relative mb-4">
//         <pre className="bg-gray-900 p-4 rounded-lg text-blue-300 overflow-x-auto">
//           <code>{code}</code>
//         </pre>
//         <div className="absolute top-2 right-2 flex space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-green-400  hover:bg-green-400 text-black font-bold"
//             onClick={copyToClipboard}
//           >
//             {copiedSnippets[id] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-green-400  hover:bg-green-400 text-black font-bold"
//             onClick={toggleOutput}
//           >
//             <Play className="h-4 w-4" />
//           </Button>
//         </div>

//         <AnimatePresence>
//           {outputVisible[id] && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <pre className="bg-gray-800 p-4 rounded-lg mt-2 text-green-400 overflow-x-auto">
//                 <code>{output}</code>
//               </pre>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     )
//   }


//   // side menu 
//   const sections = [
//     {
//       title: 'Getting Started',
//       content: (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Getting Started with JSON Bro</h2>
//           <p className="mb-4">JSON Bro can be used with any type of front end project that needs products, carts, users, todos or any dummy data in JSON format.
//           You can use examples below to check how JSON Bro works. </p>
//           <CodeSnippet 
//             id="install" 
//             code="npm install json-bro" 
//             output="+ json-bro@1.0.0
// added 1 package, and audited 1 package in 2s
// found 0 vulnerabilities" 
//           />
//           <p className="mt-4 mb-4">Then, import and use it in your code:</p>
//           <CodeSnippet 
//             id="usage" 
//             code={`import jsonBro from 'json-bro';

// const data = jsonBro.parse('{"name": "JSON Bro", "awesome": true}');
// console.log(data);`}
//             output={`{
//   name: 'JSON Bro',
//   awesome: true
// }`} 
//           />
//         </>
//       )
//     },
//     {
//       title: 'API Reference',
//       subsections: ['Posts', 'Todos', 'Quotes'],
//       content: {
//         'Posts': (
//           <>
//             <h3 className="text-xl font-bold mb-4">Parse JSON</h3>
//             <p className="mb-4">Use the parse method to convert a JSON string to a JavaScript object:</p>
//             <h2 className='text-2xl'>Get all Posts</h2>
//             <CodeSnippet 
//               id="posts" 
//               code={`fetch('localhost:3000/posts')
// .then(res => res.json())
// .then(console.log);
// `}
//               output={`{
//   "id": 5,
//   "title": "Getting Started with Docker",
//   "content": "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers...",
//   "author": "Karen Scott",
//   "authorId": 2,
//   "date": "2023-09-10T06:00:00Z",
//   "tags": [
//     "Docker",
//     "DevOps",
//     "Containers"
//   ],
//   "likes": 110,
//   "views": 400,
//   "comments": [
//     {
//       "user": "Leo Martinez",
//       "comment": "Docker has revolutionized my development workflow. Great article!",
//       "date": "2023-09-11T08:00:00Z"
//     },
//     {
//       "user": "Mia Clark",
//       "comment": "This is a fantastic introduction to Docker. Thanks for sharing!",
//       "date": "2023-09-12T10:00:00Z"
//     }
//   ]
// }`} 
//             />
//           </>
//         ),
//         'Todos': (
//           <>
//             <h3 className="text-xl font-bold mb-4">Stringify JavaScript Object</h3>
//             <p className="mb-4">Use the stringify method to convert a JavaScript object to a JSON string:</p>
//             <CodeSnippet 
//               id="stringify" 
//               code={`const data = { name: "JSON Bro", awesome: true };
// const jsonString = jsonBro.stringify(data);
// console.log(jsonString); // Output: {"name":"JSON Bro","awesome":true}`}
//               output='{"name":"JSON Bro","awesome":true}' 
//             />
//           </>
//         ),
//         'Quotes': (
//           <>
//             <h3 className="text-xl font-bold mb-4">Validate JSON</h3>
//             <p className="mb-4">Use the validate method to check if a string is valid JSON:</p>
//             <CodeSnippet 
//               id="validate" 
//               code={`const validJson = '{"name": "JSON Bro"}';
// const invalidJson = '{name: JSON Bro}';

// console.log(jsonBro.validate(validJson));
// console.log(jsonBro.validate(invalidJson));`}
//               output={`true
// false`} 
//             />
//           </>
//         )
//       }
//     }
//   ]


  
//   return (
//     <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
//       <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
//       <nav className="relative z-20 flex justify-between items-center p-4 border-b border-green-400">
//         <div className="text-2xl font-bold flex items-center">
//           <Terminal className="mr-2" />
//           JSON Bro
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/docs">Docs</NavLink>
//           <NavLink href="/about">About</NavLink>
//           <NavLink href="/contact">Contact</NavLink>
//         </div>
//         <Button
//           variant="outline"
//           size="icon"
//           className="md:hidden border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X /> : <Menu />}
//         </Button>
//       </nav>




// {/* Mobile view menu */}
//       <div className="flex-grow flex">
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.aside
//               initial={{ x: '-100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '-100%' }}
//               transition={{ type: 'tween', duration: 0.3 }}
//               className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto fixed top-0 left-0 h-full z-30 md:hidden"
//             >
//               <div className="flex justify-end mb-4">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   <X />
//                 </Button>
//               </div>
//               <h2 className="text-xl font-bold mb-4">Documentation</h2>
//               <ul>
//                 {sections.map((section) => (
//                   <li key={section.title} className="mb-2">
//                     <button
//                       onClick={() => {
//                         setActiveSection(section.title)
//                         setMenuOpen(false)
//                       }}
//                       className={`w-full text-left py-2 px-4 rounded ${activeSection === section.title ? 'bg-green-400 text-black' : 'hover:bg-gray-800'}`}
//                     >
//                       {section.title}
//                     </button>
//                     {section.subsections && (
//                       <ul className="ml-4 mt-2">
//                         {section.subsections.map((subsection) => (
//                           <li key={subsection}>
//                             <button
//                               onClick={() => {
//                                 setActiveSection(subsection)
//                                 setMenuOpen(false)
//                               }}
//                               className={`w-full text-left py-1 px-4 rounded ${activeSection === subsection ? 'bg-green-400 text-black' : 'hover:bg-gray-800'}`}
//                             >
//                               {subsection}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </motion.aside>
//           )}
//         </AnimatePresence>

// {/* Mobile view menu  end */}



// {/* Side menu */}
//         <aside className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto hidden md:block z-20">
//           <h2 className="text-xl font-bold mb-4">Documentation</h2>
//           <ul>
//             {sections.map((section) => (
//               <li key={section.title} className="mb-2">
//                 <button
//                   onClick={() => setActiveSection(section.title)}
//                   className={`w-full text-left py-2 px-4 rounded ${activeSection === section.title ? 'bg-green-400 text-black' : 'hover:bg-gray-800'}`}
//                 >
//                   {section.title}
//                 </button>
//                 {section.subsections && (
//                   <ul className="ml-4 mt-2">
//                     {section.subsections.map((subsection) => (
//                       <li key={subsection}>
//                         <button
//                           onClick={() => setActiveSection(subsection)}
//                           className={`w-full text-left py-1 px-4 rounded ${activeSection === subsection ? 'bg-green-400 text-black' : 'hover:bg-gray-800'}`}
//                         >
//                           {subsection}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </aside>


//         <main className="flex-grow p-8 overflow-y-auto relative z-10">
//           <motion.div
//             key={activeSection}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {sections.find(s => s.title === activeSection)?.content || 
//              (sections.find(s => s.subsections?.includes(activeSection))?.content as any)[activeSection]}
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   )
// }
























// ----------------------------------------------------------------
// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Terminal, Menu, X, Copy, Check, Play } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import Particles from "react-tsparticles"
// import { loadSlim } from "tsparticles-slim"
// import type { Engine } from "tsparticles-engine"
// import Link from 'next/link'


// export default function Docs({ content }: { content?: React.ReactNode }) {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [copiedSnippets, setCopiedSnippets] = useState<{ [key: string]: boolean }>({})
//   const [outputVisible, setOutputVisible] = useState<{ [key: string]: boolean }>({})

//   const particlesInit = async (engine: Engine) => {
//     await loadSlim(engine)
//   }

//   const particlesConfig = {
//     particles: {
//       color: { value: "#00ff00" },
//       move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
//       number: { density: { enable: true, area: 800 }, value: 80 },
//       opacity: { value: 0.5 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     background: {
//       color: "#000000"
//     }
//   }

//   const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
//     <Link href={href} className="relative group inline-block">
//       {children}
//       <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//     </Link>
//   )


//   // making the code snippet
//   const CodeSnippet = ({ id, code, output }: { id: string, code: string, output: string }) => {
//     const copyToClipboard = () => {
//       navigator.clipboard.writeText(code)
//       setCopiedSnippets(prev => ({ ...prev, [id]: true }))
//       setTimeout(() => setCopiedSnippets(prev => ({ ...prev, [id]: false })), 2000)
//     }

//     const toggleOutput = () => {
//       setOutputVisible(prev => ({ ...prev, [id]: !prev[id] }))
//     }

//     return (
//       <div className="relative mb-4">
//         <pre className="bg-gray-900 p-4 pt-12 rounded-lg text-blue-300 overflow-x-auto">
//           <code>{code}</code>
//         </pre>
//         <div className="absolute top-2 right-2 flex space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
//             onClick={copyToClipboard}
//           >
//             {copiedSnippets[id] ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
//             onClick={toggleOutput}
//           >
//             <Play className="h-3 w-3" />
//           </Button>
//         </div>


//         <AnimatePresence>
//           {outputVisible[id] && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <pre className="bg-gray-800 p-4 rounded-lg mt-2 text-green-400 overflow-x-auto">
//                 <code>{output}</code>
//               </pre>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     )
//   }




//   const sections = [
//     { title: 'Getting Started', href: '/docs' },
//     { title: 'API Reference', subsections: [
//       { title: '> Posts', href: '/docs/posts' },
//       { title: '> Todos', href: '/docs/todos' },
//       { title: '> Quotes', href: '/docs/quotes' },
//       { title: '> Users', href: '/docs/users' },
//       { title: '> Carts', href: '/docs/carts' },
//       { title: '> Comments', href: '/docs/comments' },
//       { title: '> Recipies', href: '/docs/recipies' },
//     ]},
//   ]

//   return (

//     // large screen
//     <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
//       <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
      
//       <nav className="relative z-20 flex justify-between items-center p-4 border-b border-green-400 ">
//         <div className="text-2xl font-bold flex items-center">
//           <Terminal className="mr-2" />
//           JSON Bro
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/docs">Docs</NavLink>
//           <NavLink href="/about">About</NavLink>
//           <NavLink href="/contact">Contact</NavLink>
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

//       <div className="flex-grow flex">

        



// {/* mobile view side bar menu */}
// <AnimatePresence>
//   {menuOpen && (
//     <motion.aside
//       initial={{ x: '-100%' }}
//       animate={{ x: 0 }}
//       exit={{ x: '-100%' }}
//       transition={{ type: 'tween', duration: 0.3 }}
//       className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto fixed top-0 left-0 h-full z-30 md:hidden"
//     >
//       <div className="flex justify-end mb-4">
//         <Button
//           variant="outline"
//           size="icon"
//           className="border-green-400  hover:bg-green-400 text-black"
//           onClick={() => setMenuOpen(false)}
//         >
//           <X />
//         </Button>
//       </div>

//       {/* Documentation sections */}
//       <h2 className="text-xl font-bold mb-4">Documentation</h2>
//       <ul>
//         {sections.map((section) => (
//           <li key={section.title} className="mb-2">
//             {section.href ? (
//               <Link href={section.href} className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 block">
//                 {section.title}
//               </Link>
//             ) : (
//               <>
//                 <div className="w-full text-left py-2 px-4 rounded font-bold">{section.title}</div>
//                 {section.subsections && (
//                   <ul className="ml-4 mt-2">
//                     {section.subsections.map((subsection) => (
//                       <li key={subsection.title}>
//                         <Link
//                           href={subsection.href}
//                           className="w-full text-left py-1 px-4 rounded hover:bg-gray-800 block"
//                         >
//                           {subsection.title}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Small links at the bottom in mobile*/}
//       <div className="absolute bottom-4 left-0 w-full px-4">
//         <ul className="flex flex-col space-y-2">
//           <li>
//             <Link href="/" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/docs" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
//               Docs
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </motion.aside>
//   )}
// </AnimatePresence>




//         {/* desktop view side menu bar  */}
//         <aside className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto hidden md:block z-20 sticky top-0 h-screen">
//           <h2 className="text-xl font-bold mb-4">Documentation</h2>
//           <ul>
//             {sections.map((section) => (
//               <li key={section.title} className="mb-2">
//                 {section.href ? (
//                   <Link href={section.href} className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 block">
//                     {section.title}
//                   </Link>
//                 ) : (
//                   <>
//                     <div className="w-full text-left py-2 px-4 rounded font-bold">{section.title}</div>
//                     {section.subsections && (
//                       <ul className="ml-4 mt-2">
//                         {section.subsections.map((subsection) => (
//                           <li key={subsection.title}>
//                             <Link href={subsection.href} className="w-full text-left py-1 px-4 rounded hover:bg-gray-800 block">
//                               {subsection.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </aside>


//             {/* main content */}
//         <main className="flex-grow p-8 overflow-y-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {content || (
//               <>
//                 <h2 className="text-2xl font-bold mb-4">Getting Started with JSON Bro</h2>
//                 <p className="mb-4">JSON Bro can be used with any type of frontend project that needs products, carts, users, todos or any dummy data in JSON format.
//                 You can use examples below to check how JSON Bro works. </p>
//                 <CodeSnippet 
//                   id="install" 
//                   code="npm install json-bro" 
//                   output="+ json-bro@1.0.0
// added 1 package, and audited 1 package in 2s
// found 0 vulnerabilities" 
//                 />
//                 <p className="mt-4 mb-4">Then, import and use it in your code:</p>
//                 <CodeSnippet 
//                   id="usage" 
//                   code={`import jsonBro from 'json-bro';

// const data = jsonBro.parse('{"name": "JSON Bro", "awesome": true}');
// console.log(data);`}
//                   output={`{
//   name: 'JSON Bro',
//   awesome: true
// }`} 
//                 />
//               </>
//             )}
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   )
// }




// yeah upar vala he humara latest he hai 







// this code is generated for resolving the ssticky and the scroll issue

'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X, Copy, Check, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import Link from 'next/link'

export default function Docs({ content }: { content?: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copiedSnippets, setCopiedSnippets] = useState<{ [key: string]: boolean }>({})
  const [outputVisible, setOutputVisible] = useState<{ [key: string]: boolean }>({})
  const mainContentRef = useRef<HTMLDivElement>(null)

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const particlesConfig = {
    particles: {
      color: { value: "#00ff00" },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    background: {
      color: "#000000"
    }
  }

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="relative group inline-block">
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
  )

  const CodeSnippet = ({ id, code, output }: { id: string, code: string, output: string }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code)
      setCopiedSnippets(prev => ({ ...prev, [id]: true }))
      setTimeout(() => setCopiedSnippets(prev => ({ ...prev, [id]: false })), 2000)
    }

    const toggleOutput = (event: React.MouseEvent) => {
      event.preventDefault()
      setOutputVisible(prev => ({ ...prev, [id]: !prev[id] }))
    }

    return (
      <div className="relative mb-4">
        <pre className="bg-gray-900 p-4 pt-12 rounded-lg text-blue-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
            onClick={copyToClipboard}
          >
            {copiedSnippets[id] ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
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
              <pre className="bg-gray-800 p-4 rounded-lg mt-2 text-green-400 overflow-x-auto">
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
    { title: 'API Reference', subsections: [
      { title: '> Posts', href: '/docs/posts' },
      { title: '> Todos', href: '/docs/todos' },
      { title: '> Quotes', href: '/docs/quotes' },
      { title: '> Users', href: '/docs/users' },
      { title: '> Carts', href: '/docs/carts' },
      { title: '> Comments', href: '/docs/comments' },
      { title: '> Recipies', href: '/docs/recipies' },
      { title: '> Products', href: '/docs/products' },
    ]},
  ]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
      
      <nav className="sticky top-0 z-50 flex justify-between items-center p-4 border-b border-green-400 bg-black">
        <div className="text-2xl font-bold flex items-center">
          <Terminal className="mr-2" />
          JSON Bro
        </div>
        <div className="hidden md:flex space-x-6">
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

      <div className="flex-grow flex">
        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto fixed top-0 left-0 h-full z-40 md:hidden"
            >
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-green-400 hover:bg-green-400 text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <h2 className="text-xl font-bold mb-4">Documentation</h2>
              <ul>
                {sections.map((section) => (
                  <li key={section.title} className="mb-2">
                    {section.href ? (
                      <Link href={section.href} className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 block">
                        {section.title}
                      </Link>
                    ) : (
                      <>
                        <div className="w-full text-left py-2 px-4 rounded font-bold">{section.title}</div>
                        {section.subsections && (
                          <ul className="ml-4 mt-2">
                            {section.subsections.map((subsection) => (
                              <li key={subsection.title}>
                                <Link
                                  href={subsection.href}
                                  className="w-full text-left py-1 px-4 rounded hover:bg-gray-800 block"
                                >
                                  {subsection.title}
                                </Link>
                              </li>
                            ))}
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
                    <Link href="/" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-left py-1 px-4 rounded hover:bg-gray-800 block">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <aside className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto hidden md:block sticky top-[57px] h-[calc(100vh-57px)] z-30">
          <h2 className="text-xl font-bold mb-4">Documentation</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.title} className="mb-2">
                {section.href ? (
                  <Link href={section.href} className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 block">
                    {section.title}
                  </Link>
                ) : (
                  <>
                    <div className="w-full text-left py-2 px-4 rounded font-bold">{section.title}</div>
                    {section.subsections && (
                      <ul className="ml-4 mt-2">
                        {section.subsections.map((subsection) => (
                          <li key={subsection.title}>
                            <Link href={subsection.href} className="w-full text-left py-1 px-4 rounded hover:bg-gray-800 block">
                              {subsection.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <main ref={mainContentRef} className="flex-grow p-8 overflow-y-auto relative z-20 h-[calc(100vh-57px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content || (
              <>
                <h2 className="text-2xl font-bold mb-4">Getting Started with JSON Bro</h2>
                <p className="mb-4">JSON Bro can be used with any type of frontend project that needs products, carts, users, todos or any dummy data in JSON format.
                You can use examples below to check how JSON Bro works. </p>
                <CodeSnippet 
                  id="install" 
                  code="npm install json-bro" 
                  output="+ json-bro@1.0.0
added 1 package, and audited 1 package in 2s
found 0 vulnerabilities" 
                />
                <p className="mt-4 mb-4">Then, import and use it in your code:</p>
                <CodeSnippet 
                  id="usage" 
                  code={`import jsonBro from 'json-bro';

const data = jsonBro.parse('{"name": "JSON Bro", "awesome": true}');
console.log(data);`}
                  output={`{
  name: 'JSON Bro',
  awesome: true
}`} 
                />
              </>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}