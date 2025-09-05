'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

// export const metadata: Metadata = {
//     title: 'Posts API',
//     description:
//         'Documentation for the Posts API endpoint of JSON Bro, including example requests and responses.',
// }

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function PostsPage() {
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
            <h3 className="mb-4 text-4xl font-bold">Posts API</h3>
            <p className="mb-4">
                Use the posts API endpoint to get dummy post data:
            </p>

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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />
        </>
    )

    return isClient ? <DynamicDocs content={content} /> : null
}
