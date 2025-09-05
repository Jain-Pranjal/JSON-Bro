'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, Play, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quotes API",
  description:
    "Documentation for the Quotes API endpoint of JSON Bro, including example requests and responses.",
}

const DynamicDocs = dynamic(() => import("../page"), { ssr: false })

export default function QuotesPage() {
  const [copiedSnippets, setCopiedSnippets] = useState<{
    [key: string]: boolean
  }>({})
  const [outputVisible, setOutputVisible] = useState<{
    [key: string]: boolean
  }>({})
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = (id: string, code: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(code)
      setCopiedSnippets((prev) => ({ ...prev, [id]: true }))
      setTimeout(
        () => setCopiedSnippets((prev) => ({ ...prev, [id]: false })),
        2000
      )
    }
  }

  const toggleOutput = (id: string, event: React.MouseEvent) => {
    event.preventDefault()
    setOutputVisible((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const CodeSnippet = ({
    id,
    title,
    code,
    output,
  }: {
    id: string
    title: string
    code: string
    output: string
  }) => {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const outputRef = useRef<HTMLDivElement>(null)

    const scrollToHeading = (event: React.MouseEvent) => {
      event.preventDefault()
      headingRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
      <>
        <h2
          ref={headingRef}
          id={id}
          className="text-2xl mt-8 mb-4 flex items-center group"
        >
          {title}
          <a
            href={`#${id}`}
            onClick={scrollToHeading}
            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
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
              {copiedSnippets[id] ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
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
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <h3 className="text-xl font-bold mt-4 mb-2">
                  Example Response
                </h3>
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
      <h3 className="text-4xl font-bold mb-4">Quotes API</h3>
      <p className="mb-4">
        Use the quotes API endpoint to get dummy quote data:
      </p>

      <CodeSnippet
        id="getAllQuotes"
        title="Get all Quotes"
        code={`fetch('https://json-bro.vercel.app/quotes')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "quotes": [
    {
      "id": 1,
      "quote": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt",
      "date": "2023-10-01T10:00:00Z",
      "tags": [
        "inspiration",
        "motivation"
      ]
    },
    {
      "id": 2,
      "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "author": "Martin Luther King Jr.",
      "date": "2023-09-25T09:00:00Z",
      "tags": [
        "friendship",
        "reflection"
      ]
    },
    {...},
    {...},
    {...}
  // More quotes...
  ],

  "metadata": {
    "total": 50,
    "skip": 0,
    "limit": 30
    }
  }`}
      />

      <CodeSnippet
        id="getQuoteById"
        title="Get Quote by ID"
        code={`fetch('https://json-bro.vercel.app/quotes/19')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 19,
  "quote": "Don't watch the clock; do what it does. Keep going.",
  "author": "Sam Levenson",
  "date": "2023-07-01T02:00:00Z",
  "tags": [
    "time",
    "motivation"
  ]
}`}
      />

      <CodeSnippet
        id="getQuotesWithLimitAndSkip"
        title="Get Quotes with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/quotes?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "quotes": [
    {
      "id": 4,
      "quote": "Life is 10% what happens to us and 90% how we react to it.",
      "author": "Charles R. Swindoll",
      "date": "2023-09-15T07:00:00Z",
      "tags": [
        "life",
        "attitude"
      ]
    },
    {
      "id": 5,
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs",
      "date": "2023-09-10T06:00:00Z",
      "tags": [
        "work",
        "passion"
      ]
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
        id="getRandomQuote"
        title="Random Quote"
        code={`fetch('https://json-bro.vercel.app/quotes/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 10,
  "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "author": "Brian Tracy",
  "date": "2023-08-15T01:00:00Z",
  "tags": [
    "strength",
    "motivation"
  ]
}`}
      />
    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}
