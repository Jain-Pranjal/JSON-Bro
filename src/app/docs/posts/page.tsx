// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Copy, Check, Play } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import Docs from '../page'

// export default function PostsPage() {
//   const [copiedSnippet, setCopiedSnippet] = useState(false)
//   const [outputVisible, setOutputVisible] = useState(false)

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(`fetch('localhost:3000/posts')
// .then(res => res.json())
// .then(console.log);`)
//     setCopiedSnippet(true)
//     setTimeout(() => setCopiedSnippet(false), 2000)
//   }

//   const toggleOutput = () => {
//     setOutputVisible(!outputVisible)
//   }

//   const content = (
//     <>
//       <h3 className="text-4xl font-bold mb-4">Posts API</h3>
//       <p className="mb-4">Use the posts endpoint to get dummy post data:</p>
//       <h2 className='text-2xl'>Get all Posts</h2>
//       <div className="relative mb-4">
//         <pre className="bg-gray-900 p-4 pt-12 rounded-lg text-blue-300 overflow-x-auto">
//           <code>{`fetch('localhost:3000/posts')
// .then(res => res.json())
// .then(console.log);`}</code>
//         </pre>
//         <div className="absolute top-2 right-2 flex space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
//             onClick={copyToClipboard}
//           >
//             {copiedSnippet ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
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
//       </div>
//       <AnimatePresence>
//         {outputVisible && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-xl font-bold mt-8 mb-4">Example Response</h3>
//             <pre className="bg-gray-800 p-4 rounded-lg text-green-400 overflow-x-auto">
//               <code>{`
//   "id": 3,
//   "title": "Introduction to React Hooks",
//   "content": "React Hooks are functions that let you use state and other React features without writing a class...",
//   "author": "Emily White",
//   "authorId": 5,
//   "date": "2023-09-20T08:00:00Z",
//   "tags": [
//     "React",
//     "JavaScript",
//     "Web Development"
//   ],
//   "likes": 150,
//   "views": 500,
//   "comments": [
//     {
//       "user": "Frank Green",
//       "comment": "Hooks have completely changed the way I write React components.",
//       "date": "2023-09-21T10:00:00Z"
//     },
//     {
//       "user": "Grace Kim",
//       "comment": "This article is a great introduction to Hooks. Thanks!",
//       "date": "2023-09-22T12:00:00Z"
//     }
//   ]
// }`}</code>
//             </pre>
//           </motion.div>
//         )}
//       </AnimatePresence>



//     </>
//   )

//   return <Docs content={content} />
// }














// with animation 

// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Copy, Check, Play, Link as LinkIcon } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import dynamic from 'next/dynamic'

// const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

// export default function PostsPage() {
//   const [copiedSnippets, setCopiedSnippets] = useState<{ [key: string]: boolean }>({})
//   const [outputVisible, setOutputVisible] = useState<{ [key: string]: boolean }>({})
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   const copyToClipboard = (id: string, code: string) => {
//     if (typeof navigator !== 'undefined') {
//       navigator.clipboard.writeText(code)
//       setCopiedSnippets(prev => ({ ...prev, [id]: true }))
//       setTimeout(() => setCopiedSnippets(prev => ({ ...prev, [id]: false })), 2000)
//     }
//   }

//   const toggleOutput = (id: string, event: React.MouseEvent) => {
//     event.preventDefault()
//     setOutputVisible(prev => ({ ...prev, [id]: !prev[id] }))
//   }

//   const CodeSnippet = ({ id, title, code, output }: { id: string, title: string, code: string, output: string }) => {
//     const headingRef = useRef<HTMLHeadingElement>(null)

//     const scrollToHeading = (event: React.MouseEvent) => {
//       event.preventDefault()
//       headingRef.current?.scrollIntoView({ behavior: 'smooth' })
//     }

//     return (
//       <>
//         <h2 ref={headingRef} id={id} className='text-2xl mt-8 mb-4 flex items-center group'>
//           {title}
//           <a href={`#${id}`} onClick={scrollToHeading} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
//             <LinkIcon className="h-5 w-5 text-green-400" />
//           </a>
//         </h2>
//         <div className="relative mb-4">
//           <pre className="bg-gray-900 p-4 pt-12 rounded-lg text-blue-300 overflow-x-auto">
//             <code>{code}</code>
//           </pre>
//           <div className="absolute top-2 right-2 flex space-x-2">
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
//               onClick={() => copyToClipboard(id, code)}
//             >
//               {copiedSnippets[id] ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
//               onClick={(e) => toggleOutput(id, e)}
//             >
//               <Play className="h-3 w-3" />
//             </Button>
//           </div>
//         </div>
//         <AnimatePresence>
//           {outputVisible[id] && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold mt-4 mb-2">Example Response</h3>
//               <pre className="bg-gray-800 p-4 rounded-lg text-green-400 overflow-x-auto">
//                 <code>{output}</code>
//               </pre>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </>
//     )
//   }

//   const content = (
//     <>
//       <h3 className="text-4xl font-bold mb-4">Posts API</h3>
//       <p className="mb-4">Use the posts endpoint to get dummy post data:</p>

//       <CodeSnippet 
//         id="getAllPosts"
//         title="Get all Posts"
//         code={`fetch('localhost:3000/posts')
//   .then(res => res.json())
//   .then(console.log);`}
//         output={`[
//   {
//     "id": 1,
//     "title": "Introduction to React Hooks",
//     "content": "React Hooks are functions that let you use state and other React features without writing a class...",
//     "author": "Emily White",
//     "authorId": 5,
//     "date": "2023-09-20T08:00:00Z",
//     "tags": ["React", "JavaScript", "Web Development"],
//     "likes": 150,
//     "views": 500,
//     "comments": [
//       {
//         "user": "Frank Green",
//         "comment": "Hooks have completely changed the way I write React components.",
//         "date": "2023-09-21T10:00:00Z"
//       },
//       {
//         "user": "Grace Kim",
//         "comment": "This article is a great introduction to Hooks. Thanks!",
//         "date": "2023-09-22T12:00:00Z"
//       }
//     ]
//   },
//   // More posts...
// ]`}
//       />

//       <CodeSnippet 
//         id="getPostById"
//         title="Get Post by ID"
//         code={`fetch('localhost:3000/posts/1')
//   .then(res => res.json())
//   .then(console.log);`}
//         output={`{
//   "id": 1,
//   "title": "Introduction to React Hooks",
//   "content": "React Hooks are functions that let you use state and other React features without writing a class...",
//   "author": "Emily White",
//   "authorId": 5,
//   "date": "2023-09-20T08:00:00Z",
//   "tags": ["React", "JavaScript", "Web Development"],
//   "likes": 150,
//   "views": 500,
//   "comments": [
//     {
//       "user": "Frank Green",
//       "comment": "Hooks have completely changed the way I write React components.",
//       "date": "2023-09-21T10:00:00Z"
//     },
//     {
//       "user": "Grace Kim",
//       "comment": "This article is a great introduction to Hooks. Thanks!",
//       "date": "2023-09-22T12:00:00Z"
//     }
//   ]
// }`}
//       />

//       <CodeSnippet 
//         id="getPostsWithLimitAndSkip"
//         title="Get Posts with Limit and Skip"
//         code={`fetch('localhost:3000/posts?limit=2&skip=1')
//   .then(res => res.json())
//   .then(console.log);`}
//         output={`[
//   {
//     "id": 2,
//     "title": "Advanced CSS Techniques",
//     "content": "In this post, we'll explore some advanced CSS techniques that can take your web design to the next level...",
//     "author": "Alex Johnson",
//     "authorId": 3,
//     "date": "2023-09-25T09:00:00Z",
//     "tags": ["CSS", "Web Design", "Frontend"],
//     "likes": 120,
//     "views": 400,
//     "comments": [
//       {
//         "user": "Sarah Lee",
//         "comment": "These CSS tricks are amazing! Can't wait to try them out.",
//         "date": "2023-09-26T11:00:00Z"
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "title": "Node.js Best Practices",
//     "content": "Learn about the best practices for building scalable and maintainable Node.js applications...",
//     "author": "Chris Brown",
//     "authorId": 7,
//     "date": "2023-09-30T10:00:00Z",
//     "tags": ["Node.js", "JavaScript", "Backend"],
//     "likes": 180,
//     "views": 600,
//     "comments": [
//       {
//         "user": "Mike Wilson",
//         "comment": "Great article! These practices have really improved my Node.js development.",
//         "date": "2023-10-01T13:00:00Z"
//       }
//     ]
//   }
// ]`}
//       />
//     </>
//   )

//   return isClient ? <DynamicDocs content={content} /> : null
// }







// without naimation 




'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Play, Link as LinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function PostsPage() {
  const [copiedSnippets, setCopiedSnippets] = useState<{ [key: string]: boolean }>({})
  const [outputVisible, setOutputVisible] = useState<{ [key: string]: boolean }>({})
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = (id: string, code: string) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(code)
      setCopiedSnippets(prev => ({ ...prev, [id]: true }))
      setTimeout(() => setCopiedSnippets(prev => ({ ...prev, [id]: false })), 2000)
    }
  }

  const toggleOutput = (id: string, event: React.MouseEvent) => {
    event.preventDefault()
    setOutputVisible(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const CodeSnippet = ({ id, title, code, output }: { id: string, title: string, code: string, output: string }) => {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const outputRef = useRef<HTMLDivElement>(null)

    const scrollToHeading = (event: React.MouseEvent) => {
      event.preventDefault()
      headingRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <>
        <h2 ref={headingRef} id={id} className='text-2xl mt-8 mb-4 flex items-center group'>
          {title}
          <a href={`#${id}`} onClick={scrollToHeading} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <LinkIcon className="h-5 w-5 text-green-400" />
          </a>
        </h2>
        <div className="relative mb-4">
          <pre className="bg-gray-900 p-4 pt-12 rounded-lg text-blue-300 overflow-x-auto overflow-y-auto max-h-[300px] text-xs sm:text-sm md:text-base">
            <code>{code}</code>
          </pre>
          <div className="absolute top-2 right-2 flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
              onClick={() => copyToClipboard(id, code)}
            >
              {copiedSnippets[id] ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
              onClick={(e) => toggleOutput(id, e)}
            >
              <Play className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="overflow-hidden">
          <AnimatePresence initial={false}>
            {outputVisible[id] && (
              <motion.div
                ref={outputRef}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <h3 className="text-xl font-bold mt-4 mb-2">Example Response</h3>
                <pre className="bg-gray-800 p-4 rounded-lg text-green-400 overflow-x-auto overflow-y-auto max-h-[300px] text-xs sm:text-sm md:text-base">
                  <code>{output}</code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    )
  }

  const content = (
    <>
      <h3 className="text-4xl font-bold mb-4">Posts API</h3>
      <p className="mb-4">Use the posts API endpoint to get dummy post data:</p>

      <CodeSnippet 
        id="getAllPosts"
        title="Get all Posts"
        code={`fetch('https://json-bro.vercel.app/posts')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "posts": [
    {
      "id": 1,
      "title": "Understanding JavaScript Closures",
      "content": "A closure is the combination of a function and the lexical environment within which that function was declared...",
      "author": "John Doe",
      "authorId": 3,
      "date": "2023-10-01T10:00:00Z",
      "tags": [
        "JavaScript",
        "Programming",
        "Closures"
      ],
      "likes": 120,
      "views": 450,
      "comments": [
        {
          "user": "Jane Smith",
          "comment": "Great explanation! This really helped me understand closures.",
          "date": "2023-10-02T12:00:00Z"
        },
        {
          "user": "Bob Johnson",
          "comment": "I still find closures confusing, but this article made it a bit clearer.",
          "date": "2023-10-03T14:00:00Z"
        }
      ]
    },
    {...},
    {...},
    {...}
  // More posts...
  ],

"metadata": {
    "total": 20,
    "skip": 0,
    "limit": 30
    }
  }
`}
      />

      <CodeSnippet 
        id="getPostById"
        title="Get Post by ID"
        code={`fetch('https://json-bro.vercel.app/posts/5')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 5,
  "title": "Getting Started with Docker",
  "content": "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers...",
  "author": "Karen Scott",
  "authorId": 2,
  "date": "2023-09-10T06:00:00Z",
  "tags": [
    "Docker",
    "DevOps",
    "Containers"
  ],
  "likes": 110,
  "views": 400,
  "comments": [
    {
      "user": "Leo Martinez",
      "comment": "Docker has revolutionized my development workflow. Great article!",
      "date": "2023-09-11T08:00:00Z"
    },
    {
      "user": "Mia Clark",
      "comment": "This is a fantastic introduction to Docker. Thanks for sharing!",
      "date": "2023-09-12T10:00:00Z"
    }
  ]
}`}
      />

      <CodeSnippet 
        id="getPostsWithLimitAndSkip"
        title="Get Posts with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/posts?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "posts": [
    {
      "id": 4,
      "title": "Mastering Python Generators",
      "content": "Generators are a simple way of creating iterators. They allow you to declare a function that behaves like an iterator...",
      "author": "Henry Black",
      "authorId": 9,
      "date": "2023-09-15T07:00:00Z",
      "tags": [
        "Python",
        "Programming",
        "Generators"
      ],
      "likes": 80,
      "views": 270,
      "comments": [
        {
          "user": "Ivy Brown",
          "comment": "Generators are so powerful. This article explains them well.",
          "date": "2023-09-16T09:00:00Z"
        },
        {
          "user": "Jack Wilson",
          "comment": "I never understood generators until I read this.",
          "date": "2023-09-17T11:00:00Z"
        }
      ]
    },
    {
      "id": 5,
      "title": "Getting Started with Docker",
      "content": "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers...",
      "author": "Karen Scott",
      "authorId": 2,
      "date": "2023-09-10T06:00:00Z",
      "tags": [
        "Docker",
        "DevOps",
        "Containers"
      ],
      "likes": 110,
      "views": 400,
      "comments": [
        {
          "user": "Leo Martinez",
          "comment": "Docker has revolutionized my development workflow. Great article!",
          "date": "2023-09-11T08:00:00Z"
        },
        {
          "user": "Mia Clark",
          "comment": "This is a fantastic introduction to Docker. Thanks for sharing!",
          "date": "2023-09-12T10:00:00Z"
        }
      ]
    }
  ],
  "metadata": {
    "total": 20,
    "skip": 3,
    "limit": 2
  }
}`}
      />

      <CodeSnippet 
        id="getRandomPost"
        title="Random Post"
        code={`fetch('https://json-bro.vercel.app/posts/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 10,
  "title": "Advanced CSS Techniques",
  "content": "In this article, we will explore some advanced CSS techniques that can help you create stunning web designs...",
  "author": "Emma Wilson",
  "authorId": 8,
  "date": "2023-08-15T06:00:00Z",
  "tags": [
    "CSS",
    "Web Design",
    "Frontend"
  ],
  "likes": 180,
  "views": 450,
  "comments": [
    {
      "user": "Olivia Brown",
      "comment": "These techniques are really useful for my projects.",
      "date": "2023-08-16T08:00:00Z"
    },
    {
      "user": "Liam Smith",
      "comment": "Great article! Learned a lot of new tricks.",
      "date": "2023-08-17T10:00:00Z"
    }
  ]
}`}
      />

    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}


