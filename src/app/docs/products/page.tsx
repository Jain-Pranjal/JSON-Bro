'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

// export const metadata: Metadata = {
//     title: 'Products API',
//     description:
//         'Documentation for the Products API endpoint of JSON Bro, including example requests and responses.',
// }

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function ProductsPage() {
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
            <h3 className="mb-4 text-4xl font-bold">Products API</h3>
            <p className="mb-4">
                Use the products API endpoint to get dummy product data:
            </p>

            <CodeSnippet
                id="getAllProducts"
                title="Get all Products"
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />
        </>
    )

    return isClient ? <DynamicDocs content={content} /> : null
}
