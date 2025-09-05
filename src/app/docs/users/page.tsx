'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function UsersPage() {
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
            <h3 className="mb-4 text-4xl font-bold">Users API</h3>
            <p className="mb-4">
                Use the users API endpoint to get dummy user data:
            </p>

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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
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
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />
        </>
    )

    return isClient ? <DynamicDocs content={content} /> : null
}
