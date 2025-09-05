import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Play, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CodeSnippetProps {
    id: string
    title: string
    code: string
    output: string
    copiedSnippets: { [key: string]: boolean }
    outputVisible: { [key: string]: boolean }
    onCopy: (id: string, code: string) => void
    onToggleOutput: (id: string) => void
}

export default function CodeSnippet({
    id,
    title,
    code,
    output,
    copiedSnippets,
    outputVisible,
    onCopy,
    onToggleOutput,
}: CodeSnippetProps) {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const outputRef = useRef<HTMLDivElement>(null)

    const scrollToHeading = (event: React.MouseEvent) => {
        event.preventDefault()
        headingRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <h2
                ref={headingRef}
                id={id}
                className="group mb-4 mt-8 flex items-center text-2xl"
            >
                {title}
                <a
                    href={`#${id}`}
                    onClick={scrollToHeading}
                    className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
                >
                    <LinkIcon className="h-5 w-5 text-green-400" />
                </a>
            </h2>
            <div className="relative mb-4">
                <pre className="max-h-[300px] overflow-x-auto overflow-y-auto rounded-lg bg-gray-900 p-4 pt-12 text-xs text-blue-300 sm:text-sm md:text-base">
                    <code>{code}</code>
                </pre>
                <div className="absolute right-2 top-2 flex space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-green-400 text-xs font-bold text-black hover:bg-green-400"
                        onClick={() => onCopy(id, code)}
                    >
                        {copiedSnippets[id] ? (
                            <Check className="h-3 w-3" />
                        ) : (
                            <Copy className="h-3 w-3" />
                        )}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-green-400 text-xs font-bold text-black hover:bg-green-400"
                        onClick={(e) => {
                            e.preventDefault()
                            onToggleOutput(id)
                        }}
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
                                collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                        >
                            <h3 className="mb-2 mt-4 text-xl font-bold">
                                Example Response
                            </h3>
                            <pre className="max-h-[300px] overflow-x-auto overflow-y-auto rounded-lg bg-gray-800 p-4 text-xs text-green-400 sm:text-sm md:text-base">
                                <code>{output}</code>
                            </pre>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
