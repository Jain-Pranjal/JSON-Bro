import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function copyToClipboard(code: string) {
    if (typeof navigator !== 'undefined') {
        navigator.clipboard.writeText(code)
    }
}

const appURL = process.env.NEXT_PUBLIC_APP_URL!

export function constructMetadata(): Metadata {
    return {
        metadataBase: new URL(appURL),
        title: {
            default: 'JSON Bro',
            template: 'JSON Bro | %s',
        },
        description:
            'JSON Bro helps you to utilise the fake API response from the various endpoints that helps streamline your development process. Use the JSON Bro API to generate realistic data for testing and prototyping in a proper structure.',
        applicationName: 'JSON Bro',
        keywords: [
            'json formatter',
            'fake api',
            'json viewer',
            'json editor',
            'json validator',
            'json beautifier',
            'API testing',
            'json parser',
            'json schema',
        ],
        authors: [
            {
                name: 'Pranjal Jain',
                url: 'https://github.com/Jain-Pranjal/JSON-Bro',
            },
        ],
    }
}
