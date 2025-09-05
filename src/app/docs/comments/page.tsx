'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Play, Link as LinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Comments API',
    description:
        'Documentation for the Comments API endpoint of JSON Bro, including example requests and responses.',
}
const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function CommentsPage() {
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
      <h3 className="text-4xl font-bold mb-4">Comments API</h3>
      <p className="mb-4">Use the comments API endpoint to get dummy comment data:</p>

      <CodeSnippet 
        id="getAllComments"
        title="Get all Comments Items"
        code={`fetch('https://json-bro.vercel.app/comments')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "comments": [
    {
      "id": 1,
      "body": "This smartphone is amazing! The battery life is incredible and the camera quality is top-notch.",
      "postId": 5,
      "user": {
        "username": "john_doe",
        "email": "john.doe@example.com",
        "userid": 101
      },
      "natureOfComment": "positive"
    },
    {
      "id": 2,
      "body": "The digital camera takes stunning photos, but the battery life could be better.",
      "postId": 10,
      "user": {
        "username": "jane_smith",
        "email": "jane.smith@example.com",
        "userid": 102
      },
      "natureOfComment": "mixed"
    },
    {...},
    {...},
    {...}
  // More comments...
  ],

  "metadata": {
    "total": 26,
    "skip": 0,
    "limit": 30
     }
  }`}
      />

      <CodeSnippet 
        id="getCommentById"
        title="Get Comment by ID"
        code={`fetch('https://json-bro.vercel.app/comments/6')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 6,
  "body": "The lipstick has a beautiful color and lasts all day.",
  "postId": 11,
  "user": {
    "username": "diana_prince",
    "email": "diana.prince@example.com",
    "userid": 106
  },
  "natureOfComment": "positive"
}`}
      />

      <CodeSnippet 
        id="getCommentsWithLimitAndSkip"
        title="Get Comments with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/comments?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "comments": [
    {
      "id": 4,
      "body": "The smartwatch is very stylish and has a lot of useful features.",
      "postId": 7,
      "user": {
        "username": "bob_brown",
        "email": "bob.brown@example.com",
        "userid": 104
      },
      "natureOfComment": "positive"
    },
    {
      "id": 5,
      "body": "This laptop is perfect for gaming and professional use. Highly recommend!",
      "postId": 8,
      "user": {
        "username": "charlie_davis",
        "email": "charlie.davis@example.com",
        "userid": 105
      },
      "natureOfComment": "positive"
    }
  ],
  "metadata": {
    "total": 26,
    "skip": 3,
    "limit": 2
  }
}`}
      />

      <CodeSnippet 
        id="getRandomComment"
        title="Random Comment"
        code={`fetch('https://json-bro.vercel.app/comments/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 5,
  "body": "This laptop is perfect for gaming and professional use. Highly recommend!",
  "postId": 8,
  "user": {
    "username": "charlie_davis",
    "email": "charlie.davis@example.com",
    "userid": 105
  },
  "natureOfComment": "positive"
}`}
      />
    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}
