
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Play, Link as LinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Todos API',
    description:
        'Documentation for the Todos API endpoint of JSON Bro, including example requests and responses.',
}

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function TodosPage() {
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
      <h3 className="text-4xl font-bold mb-4">Todos API</h3>
      <p className="mb-4">Use the todos API endpoint to get dummy todo data:</p>

      <CodeSnippet 
        id="getAllTodos"
        title="Get all Todos"
        code={`fetch('https://json-bro.vercel.app/todos')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "todos": [
    {
      "id": 1,
      "title": "Make the jsonbro ",
      "completed": true,
      "userId": 1,
      "dueDate": "2024-09-10T12:00:00Z"
    },
    {
      "id": 2,
      "title": "Complete homework",
      "completed": true,
      "userId": 8,
      "dueDate": "2024-09-12T15:00:00Z"
    },
    {...},
    {...},
    {...}
  // More todos...
  ],

  "metadata": {
    "total": 50,
    "skip": 0,
    "limit": 30
    }
  }
`}
      />

      <CodeSnippet 
        id="getTodoById"
        title="Get Todo by ID"
        code={`fetch('https://json-bro.vercel.app/todos/19')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 19,
  "title": "Take out the trash",
  "completed": true,
  "userId": 56,
  "dueDate": "2024-09-11T22:00:00Z"
}`}
      />

      <CodeSnippet 
        id="getTodosWithLimitAndSkip"
        title="Get Todos with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/todos?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "todos": [
    {
      "id": 4,
      "title": "Schedule dentist appointment",
      "completed": true,
      "userId": 14,
      "dueDate": "2024-09-20T10:00:00Z"
    },
    {
      "id": 5,
      "title": "Prepare for the presentation",
      "completed": false,
      "userId": 7,
      "dueDate": "2024-09-25T11:00:00Z"
    }
  ],
  "metadata": {
    "total": 50,
    "skip": 3,
    "limit": 2
  }
}`}
      />

      <CodeSnippet 
        id="getRandomTodo"
        title="Random Todo"
        code={`fetch('https://json-bro.vercel.app/todos/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 39,
  "title": "Pay rent",
  "completed": false,
  "userId": 82,
  "dueDate": "2024-10-03T10:00:00Z"
}`}
      />

    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}

