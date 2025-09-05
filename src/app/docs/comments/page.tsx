'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

// export const metadata: Metadata = {
//     title: 'Comments API',
//     description:
//         'Documentation for the Comments API endpoint of JSON Bro, including example requests and responses.',
// }

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function CommentsPage() {
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
            <h3 className="mb-4 text-4xl font-bold">Comments API</h3>
            <p className="mb-4">
                Use the comments API endpoint to get dummy comment data:
            </p>

            <CodeSnippet
                id="getAllComments"
                title="Get all Comments"
                code={`fetch('https://json-bro.vercel.app/comments')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "comments": [
    {
      "id": 1,
      "body": "This is a great article! I learned a lot from it.",
      "postId": 1,
      "user": {
        "id": 1,
        "username": "johndoe"
      }
    },
    {...},
    {...},
    {...}
// More comments...
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
                id="getCommentById"
                title="Get Comment by ID"
                code={`fetch('https://json-bro.vercel.app/comments/6')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "id": 6,
  "body": "The lipstick has a beautiful color and lasts all day.",
  "postId": 3,
  "user": {
    "id": 6,
    "username": "sarahwilson"
  }
}`}
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
      "body": "I completely agree with your point about responsive design.",
      "postId": 2,
      "user": {
        "id": 4,
        "username": "mikejohnson"
      }
    },
    {
      "id": 5,
      "body": "Great tutorial! The step-by-step instructions were very helpful.",
      "postId": 1,
      "user": {
        "id": 5,
        "username": "emilydavis"
      }
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
                id="getRandomComment"
                title="Random Comment"
                code={`fetch('https://json-bro.vercel.app/comments/random')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "id": 23,
  "body": "This product exceeded my expectations. Highly recommended!",
  "postId": 7,
  "user": {
    "id": 23,
    "username": "alexbrown"
  }
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
