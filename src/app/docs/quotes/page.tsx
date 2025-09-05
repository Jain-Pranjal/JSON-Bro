'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

// export const metadata: Metadata = {
//   title: "Quotes API",
//   description:
//     "Documentation for the Quotes API endpoint of JSON Bro, including example requests and responses.",
// }

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

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

    const handleCopy = (id: string, code: string) => {
        copyToClipboard(code)
        setCopiedSnippets((prev) => ({ ...prev, [id]: true }))
        setTimeout(
            () => setCopiedSnippets((prev) => ({ ...prev, [id]: false })),
            2000
        )
    }

    const handleToggleOutput = (id: string) => {
        setOutputVisible((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const content = (
        <>
            <h3 className="mb-4 text-4xl font-bold">Quotes API</h3>
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />
        </>
    )

    return isClient ? <DynamicDocs content={content} /> : null
}
