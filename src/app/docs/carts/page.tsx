

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
      <h3 className="text-4xl font-bold mb-4">Carts API</h3>
      <p className="mb-4">Use the carts API endpoint to get dummy cart data:</p>

      <CodeSnippet 
        id="getAllCarts"
        title="Get all Carts Items"
        code={`fetch('https://json-bro.vercel.app/carts')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "carts": [
    {
      "id": 1,
      "userId": 101,
      "totalProducts": 3,
      "totalQuantity": 6,
      "totalPrice": 2919.94,
      "paymentMethods": [
        "Credit Card",
        "PayPal",
        "Gift Card"
      ],
      "shippingMethods": [
        "Standard Shipping",
        "Express Shipping",
        "Overnight Shipping"
      ],
      "products": [
        {
          "id": 5,
          "name": "Smartphone",
          "price": 999.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 2,
          "totalPrice": 1999.98
        },
        {
          "id": 10,
          "name": "Digital Camera",
          "price": 799.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 1,
          "totalPrice": 799.99
        },
        {
          "id": 15,
          "name": "Electric Toothbrush",
          "price": 39.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 3,
          "totalPrice": 119.97
        }
      ],
      "createdAt": "2023-10-01T10:00:00Z",
      "updatedAt": "2023-10-02T12:00:00Z"
    },
    {
      "id": 2,
      "userId": 102,
      "totalProducts": 2,
      "totalQuantity": 4,
      "totalPrice": 1599.96,
      "paymentMethods": [
        "Credit Card",
        "PayPal"
      ],
      "shippingMethods": [
        "Standard Shipping",
        "Express Shipping"
      ],
      "products": [
        {
          "id": 7,
          "name": "Smartwatch",
          "price": 199.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 2,
          "totalPrice": 399.98
        },
        {
          "id": 8,
          "name": "Laptop",
          "price": 1299.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 1,
          "totalPrice": 1299.99
        }
      ],
      "createdAt": "2023-10-03T10:00:00Z",
      "updatedAt": "2023-10-04T12:00:00Z"
    },
    {...},
    {...},
    {...}
  // More carts...
  ],

   "metadata": {
    "total": 15,
    "skip": 0,
    "limit": 30
     }
  }`}
      />

      <CodeSnippet 
        id="getCartById"
        title="Get Cart by ID"
        code={`fetch('https://json-bro.vercel.app/users/6')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 6,
  "userId": 106,
  "totalProducts": 2,
  "totalQuantity": 3,
  "totalPrice": 119.97,
  "paymentMethods": [
    "Credit Card",
    "Gift Card"
  ],
  "shippingMethods": [
    "Standard Shipping"
  ],
  "products": [
    {
      "id": 15,
      "name": "Electric Toothbrush",
      "price": 39.99,
      "image": "https://via.placeholder.com/200",
      "quantity": 3,
      "totalPrice": 119.97
    }
  ],
  "createdAt": "2023-10-11T10:00:00Z",
  "updatedAt": "2023-10-12T12:00:00Z"
}`}
      />

      <CodeSnippet 
        id="getCartssWithLimitAndSkip"
        title="Get Carts with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/carts?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "carts": [
    {
      "id": 4,
      "userId": 104,
      "totalProducts": 4,
      "totalQuantity": 7,
      "totalPrice": 2239.94,
      "paymentMethods": [
        "Credit Card",
        "PayPal",
        "Gift Card"
      ],
      "shippingMethods": [
        "Standard Shipping",
        "Express Shipping",
        "Overnight Shipping"
      ],
      "products": [
        {
          "id": 5,
          "name": "Smartphone",
          "price": 999.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 1,
          "totalPrice": 999.99
        },
        {
          "id": 9,
          "name": "Tablet",
          "price": 499.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 2,
          "totalPrice": 999.98
        },
        {
          "id": 11,
          "name": "Lipstick",
          "price": 19.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 2,
          "totalPrice": 39.98
        },
        {
          "id": 12,
          "name": "Foundation",
          "price": 29.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 2,
          "totalPrice": 59.98
        }
      ],
      "createdAt": "2023-10-07T10:00:00Z",
      "updatedAt": "2023-10-08T12:00:00Z"
    },
    {
      "id": 5,
      "userId": 105,
      "totalProducts": 3,
      "totalQuantity": 5,
      "totalPrice": 939.95,
      "paymentMethods": [
        "Credit Card",
        "PayPal"
      ],
      "shippingMethods": [
        "Standard Shipping",
        "Express Shipping"
      ],
      "products": [
        {
          "id": 13,
          "name": "Perfume",
          "price": 79.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 2,
          "totalPrice": 159.98
        },
        {
          "id": 14,
          "name": "Hair Dryer",
          "price": 59.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 1,
          "totalPrice": 59.99
        },
        {
          "id": 8,
          "name": "Laptop",
          "price": 1299.99,
          "image": "https://via.placeholder.com/200",
          "quantity": 1,
          "totalPrice": 1299.99
        }
      ],
      "createdAt": "2023-10-09T10:00:00Z",
      "updatedAt": "2023-10-10T12:00:00Z"
    }
  ],
  "metadata": {
    "total": 15,
    "skip": 3,
    "limit": 2
  }
}`}
      />

      <CodeSnippet 
        id="getRandomCart"
        title="Random Cart"
        code={`fetch('https://json-bro.vercel.app/carts/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 13,
  "userId": 113,
  "totalProducts": 1,
  "totalQuantity": 1,
  "totalPrice": 49.99,
  "paymentMethods": [
    "Credit Card",
    "PayPal"
  ],
  "shippingMethods": [
    "Standard Shipping"
  ],
  "products": [
    {
      "id": 6,
      "name": "Bluetooth Speaker",
      "price": 49.99,
      "image": "https://via.placeholder.com/200",
      "quantity": 1,
      "totalPrice": 49.99
    }
  ],
  "createdAt": "2023-10-25T10:00:00Z",
  "updatedAt": "2023-10-26T12:00:00Z"
}`}
      />
    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}
