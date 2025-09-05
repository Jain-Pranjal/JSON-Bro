'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function TodosPage() {
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
            <h3 className="mb-4 text-4xl font-bold">Todos API</h3>
            <p className="mb-4">
                Use the todos API endpoint to get dummy todo data:
            </p>

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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />
        </>
    )

    return isClient ? <DynamicDocs content={content} /> : null
}
