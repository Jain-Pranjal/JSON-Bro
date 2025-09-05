

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Play, Link as LinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Users API',
    description:
        'Documentation for the Users API endpoint of JSON Bro, including example requests and responses.',
}

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function UsersPage() {
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
      <h3 className="text-4xl font-bold mb-4">Users API</h3>
      <p className="mb-4">Use the users API endpoint to get dummy user data:</p>

      <CodeSnippet 
        id="getAllUsers"
        title="Get all Users"
        code={`fetch('https://json-bro.vercel.app/users')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "users": [
    {
      "id": 1,
      "firstName": "Pranjal",
      "lastName": "Jain",
      "email": "pranjaljain@gmail.com",
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
      "gender": "male",
      "phoneNumber": "+1 (555) 555-5555",
      "address": {
        "street": "649 Laxmi Nagar",
        "city": "Delhi",
        "state": "New Delhi",
        "zip": "110092"
      },
      "jobTitle": "Software Engineer",
      "company": "BVCOE",
      "interests": [
        "coding",
        "music",
        "travel"
      ],
      "isActive": true,
      "registered": "2023-03-10T10:15:30.000Z",
      "about": "A passionate software engineer with a love for coding and exploring new technologies.",
      "social": {
        "facebook": "Pranjal Jain",
        "twitter": "PranjalJain03",
        "linkedin": "pranjalll"
      },
      "birthDate": "1990-05-15",
      "username": "pranjaljain",
      "password": "password123",
      "bloodGroup": "B+",
      "height": 175,
      "weight": 70
    },
    {...},
    {...},
    {...}
  // More users...
  ],

   "metadata": {
    "total": 20,
    "skip": 0,
    "limit": 30
    }
  }`}
      />

      <CodeSnippet 
        id="getUserById"
        title="Get User by ID"
        code={`fetch('https://json-bro.vercel.app/users/19')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 19,
  "firstName": "Priya",
  "lastName": "Kumar",
  "email": "priyakumar@gmail.com",
  "avatar": "https://randomuser.me/api/portraits/women/83.jpg",
  "gender": "female",
  "phoneNumber": "+1 (555) 654-7891",
  "address": {
    "street": "1515 Nehru Place",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "zip": "600002"
  },
  "jobTitle": "HR Specialist",
  "company": "PeopleFirst",
  "interests": [
    "human resources",
    "cooking",
    "travel"
  ],
  "isActive": true,
  "registered": "2013-07-10T11:00:00.000Z",
  "about": "An HR specialist who loves working with people and exploring new cuisines.",
  "social": {
    "facebook": "Priya Kumar",
    "twitter": "PriyaKumar19",
    "linkedin": "priyakumar"
  },
  "birthDate": "1990-02-25",
  "username": "priyakumar",
  "password": "hrpass456",
  "bloodGroup": "O+",
  "height": 162,
  "weight": 58
}`}
      />

      <CodeSnippet 
        id="getUsersWithLimitAndSkip"
        title="Get Users with Limit and Skip"
        code={`fetch('https://json-bro.vercel.app/users?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "users": [
    {
      "id": 4,
      "firstName": "Rohan",
      "lastName": "Patel",
      "email": "rohanpatel@gmail.com",
      "avatar": "https://randomuser.me/api/portraits/men/77.jpg",
      "gender": "male",
      "phoneNumber": "+1 (555) 246-8102",
      "address": {
        "street": "789 Residency Road",
        "city": "Ahmedabad",
        "state": "Gujarat",
        "zip": "380001"
      },
      "jobTitle": "UX Designer",
      "company": "DesignHub",
      "interests": [
        "design",
        "photography",
        "gaming"
      ],
      "isActive": false,
      "registered": "2020-11-25T14:00:00.000Z",
      "about": "A UX designer who loves creating intuitive designs and enjoys capturing moments through photography.",
      "social": {
        "facebook": "Rohan Patel",
        "twitter": "RohanPatel03",
        "linkedin": "rohanpatel"
      },
      "birthDate": "1988-03-22",
      "username": "rohanpatel",
      "password": "designpass321",
      "bloodGroup": "AB+",
      "height": 170,
      "weight": 68
    },
    {
      "id": 5,
      "firstName": "Ananya",
      "lastName": "Singh",
      "email": "ananyasingh@gmail.com",
      "avatar": "https://randomuser.me/api/portraits/women/76.jpg",
      "gender": "female",
      "phoneNumber": "+1 (555) 369-2580",
      "address": {
        "street": "101 Nehru Place",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "zip": "600001"
      },
      "jobTitle": "Marketing Specialist",
      "company": "MarketGurus",
      "interests": [
        "marketing",
        "cooking",
        "travel"
      ],
      "isActive": true,
      "registered": "2019-02-10T08:15:00.000Z",
      "about": "A marketing specialist with a creative mind and a love for culinary arts and exploring new places.",
      "social": {
        "facebook": "Ananya Singh",
        "twitter": "AnanyaSingh04",
        "linkedin": "ananyasingh"
      },
      "birthDate": "1995-07-10",
      "username": "ananyasingh",
      "password": "marketpass654",
      "bloodGroup": "B-",
      "height": 160,
      "weight": 55
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
        id="getRandomUser"
        title="Random User"
        code={`fetch('https://json-bro.vercel.app/users/random')
  .then(res => res.json())
  .then(console.log);`}
        output={`{
  "id": 4,
  "firstName": "Rohan",
  "lastName": "Patel",
  "email": "rohanpatel@gmail.com",
  "avatar": "https://randomuser.me/api/portraits/men/77.jpg",
  "gender": "male",
  "phoneNumber": "+1 (555) 246-8102",
  "address": {
    "street": "789 Residency Road",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "zip": "380001"
  },
  "jobTitle": "UX Designer",
  "company": "DesignHub",
  "interests": [
    "design",
    "photography",
    "gaming"
  ],
  "isActive": false,
  "registered": "2020-11-25T14:00:00.000Z",
  "about": "A UX designer who loves creating intuitive designs and enjoys capturing moments through photography.",
  "social": {
    "facebook": "Rohan Patel",
    "twitter": "RohanPatel03",
    "linkedin": "rohanpatel"
  },
  "birthDate": "1988-03-22",
  "username": "rohanpatel",
  "password": "designpass321",
  "bloodGroup": "AB+",
  "height": 170,
  "weight": 68
}`}
      />
    </>
  )

  return isClient ? <DynamicDocs content={content} /> : null
}
