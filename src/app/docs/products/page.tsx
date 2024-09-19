

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
      <h3 className="text-4xl font-bold mb-4">Comments API</h3>
      <p className="mb-4">Use the comments API endpoint to get dummy comment data:</p>

      <CodeSnippet 
        id="getAllProducts"
        title="Get all Products Items"
        code={`fetch('https://json-bro.vercel.app/products')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "products": [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "description": "A high-precision wireless mouse with ergonomic design.",
      "price": 29.99,
      "category": "Electronics",
      "brand": "Logitech",
      "stock": 150,
      "rating": 4.5,
      "weight": 0.1,
      "dimensions": {
        "width": 6,
        "height": 11,
        "depth": 3.5
      },
      "warrantyInformation": "2 years limited warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availability": "In Stock",
      "returnPolicy": "30-day return policy",
      "tags": [
        "mouse",
        "electronics",
        "Logitech"
      ],
      "reviews": [
        {
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@example.com",
          "rating": 5,
          "comment": "Great mouse, very responsive.",
          "date": "2023-09-10T10:00:00Z"
        },
        {
          "reviewerName": "Jane Smith",
          "reviewerEmail": "jane.smith@example.com",
          "rating": 4,
          "comment": "Comfortable to use for long periods.",
          "date": "2023-09-11T11:00:00Z"
        },
        {
          "reviewerName": "Alice Brown",
          "reviewerEmail": "alice.brown@example.com",
          "rating": 4.5,
          "comment": "Good value for the price.",
          "date": "2023-09-12T12:00:00Z"
        }
      ],
      "images": [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/600"
      ]
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "description": "A durable mechanical keyboard with customizable RGB lighting.",
      "price": 79.99,
      "category": "Electronics",
      "brand": "Corsair",
      "stock": 100,
      "rating": 4.7,
      "weight": 1.2,
      "dimensions": {
        "width": 45,
        "height": 15,
        "depth": 3.5
      },
      "warrantyInformation": "1 year limited warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availability": "Out of Stock",
      "returnPolicy": "30-day return policy",
      "tags": [
        "keyboard",
        "electronics",
        "Corsair"
      ],
      "reviews": [
        {
          "reviewerName": "Alice Brown",
          "reviewerEmail": "alice.brown@example.com",
          "rating": 5,
          "comment": "Excellent keyboard, very tactile keys.",
          "date": "2023-09-13T10:00:00Z"
        },
        {
          "reviewerName": "Bob Johnson",
          "reviewerEmail": "bob.johnson@example.com",
          "rating": 4.5,
          "comment": "The RGB lighting is fantastic.",
          "date": "2023-09-14T11:00:00Z"
        },
        {
          "reviewerName": "Charlie Davis",
          "reviewerEmail": "charlie.davis@example.com",
          "rating": 4,
          "comment": "Great build quality.",
          "date": "2023-09-15T12:00:00Z"
        }
      ],
      "images": [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/600"
      ]
    },
    {...},
    {...},
    {...}
  // More products...
  ],

  "metadata": {
    "total": 20,
    "skip": 0,
    "limit": 30
    }
  }`}
      />

      <CodeSnippet 
        id="getProductById"
        title="Get Product by ID"
        code={`fetch('https://json-bro.vercel.app/products/6')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 6,
  "name": "Bluetooth Speaker",
  "description": "A portable Bluetooth speaker with excellent sound quality.",
  "price": 49.99,
  "category": "Electronics",
  "brand": "JBL",
  "stock": 200,
  "rating": 4.4,
  "weight": 0.5,
  "dimensions": {
    "width": 7,
    "height": 7,
    "depth": 7
  },
  "warrantyInformation": "1 year limited warranty",
  "shippingInformation": "Ships in 2-3 business days",
  "availability": "Out of Stock",
  "returnPolicy": "30-day return policy",
  "tags": [
    "speaker",
    "electronics",
    "JBL"
  ],
  "reviews": [
    {
      "reviewerName": "Chris Evans",
      "reviewerEmail": "chris.evans@example.com",
      "rating": 5,
      "comment": "Amazing sound quality for its size.",
      "date": "2023-09-18T10:00:00Z"
    },
    {
      "reviewerName": "Sam Wilson",
      "reviewerEmail": "sam.wilson@example.com",
      "rating": 4,
      "comment": "Battery life could be better.",
      "date": "2023-09-19T11:00:00Z"
    },
    {
      "reviewerName": "Natasha Romanoff",
      "reviewerEmail": "natasha.romanoff@example.com",
      "rating": 4.5,
      "comment": "Very portable and easy to use.",
      "date": "2023-09-20T12:00:00Z"
    }
  ],
  "images": [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/600"
  ]
}`}
      />

      <CodeSnippet 
        id="getProductsWithLimitAndSkip"
        title="Get Products with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/products?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "products": [
    {
      "id": 4,
      "name": "4K Monitor",
      "description": "A 27-inch 4K monitor with stunning color accuracy and fast refresh rate.",
      "price": 399.99,
      "category": "Electronics",
      "brand": "Dell",
      "stock": 50,
      "rating": 4.8,
      "weight": 5.5,
      "dimensions": {
        "width": 62,
        "height": 37,
        "depth": 5
      },
      "warrantyInformation": "3 years limited warranty",
      "shippingInformation": "Ships in 1-3 business days",
      "availability": "In Stock",
      "returnPolicy": "30-day return policy",
      "tags": [
        "monitor",
        "electronics",
        "Dell"
      ],
      "reviews": [
        {
          "reviewerName": "Eve White",
          "reviewerEmail": "eve.white@example.com",
          "rating": 5,
          "comment": "Amazing picture quality, perfect for gaming and work.",
          "date": "2023-09-19T10:00:00Z"
        },
        {
          "reviewerName": "Frank Green",
          "reviewerEmail": "frank.green@example.com",
          "rating": 4.5,
          "comment": "The colors are vibrant and the refresh rate is excellent.",
          "date": "2023-09-20T11:00:00Z"
        },
        {
          "reviewerName": "Grace Kim",
          "reviewerEmail": "grace.kim@example.com",
          "rating": 4.7,
          "comment": "Great for photo editing.",
          "date": "2023-09-21T12:00:00Z"
        }
      ],
      "images": [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/600"
      ]
    },
    {
      "id": 5,
      "name": "Smartphone",
      "description": "A latest-generation smartphone with a powerful processor and high-resolution camera.",
      "price": 999.99,
      "category": "Electronics",
      "brand": "Apple",
      "stock": 300,
      "rating": 4.6,
      "weight": 0.174,
      "dimensions": {
        "width": 7.57,
        "height": 14.43,
        "depth": 0.81
      },
      "warrantyInformation": "1 year limited warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availability": "In Stock",
      "returnPolicy": "30-day return policy",
      "tags": [
        "smartphone",
        "electronics",
        "Apple"
      ],
      "reviews": [
        {
          "reviewerName": "Grace Kim",
          "reviewerEmail": "grace.kim@example.com",
          "rating": 5,
          "comment": "The camera quality is outstanding and the phone is very fast.",
          "date": "2023-09-15T10:00:00Z"
        },
        {
          "reviewerName": "Henry Black",
          "reviewerEmail": "henry.black@example.com",
          "rating": 4,
          "comment": "A bit expensive, but worth it for the features.",
          "date": "2023-09-16T11:00:00Z"
        },
        {
          "reviewerName": "Alice Johnson",
          "reviewerEmail": "alice.johnson@example.com",
          "rating": 4.5,
          "comment": "Great performance and battery life.",
          "date": "2023-09-17T12:00:00Z"
        }
      ],
      "images": [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/600"
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
        id="getRandomProduct"
        title="Random Product"
        code={`fetch('https://json-bro.vercel.app/products/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 15,
  "name": "Face Cream",
  "description": "A moisturizing face cream suitable for all skin types.",
  "price": 24.99,
  "category": "Cosmetics",
  "brand": "Neutrogena",
  "stock": 400,
  "rating": 4.6,
  "weight": 0.2,
  "dimensions": {
    "width": 5,
    "height": 5,
    "depth": 5
  },
  "warrantyInformation": "6 months limited warranty",
  "shippingInformation": "Ships in 1-2 business days",
  "availability": "In Stock",
  "returnPolicy": "30-day return policy",
  "tags": [
    "face cream",
    "cosmetics",
    "Neutrogena"
  ],
  "reviews": [
    {
      "reviewerName": "Bruce Wayne",
      "reviewerEmail": "bruce.wayne@example.com",
      "rating": 5,
      "comment": "Very hydrating and non-greasy.",
      "date": "2023-10-18T10:00:00Z"
    },
    {
      "reviewerName": "Clark Kent",
      "reviewerEmail": "clark.kent@example.com",
      "rating": 4.5,
      "comment": "Great for daily use.",
      "date": "2023-10-19T11:00:00Z"
    },
    {
      "reviewerName": "Diana Prince",
      "reviewerEmail": "diana.prince@example.com",
      "rating": 4.7,
      "comment": "Leaves skin feeling soft and smooth.",
      "date": "2023-10-20T12:00:00Z"
    }
  ],
  "images": [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/600"
  ]
}`}
      />
    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}
