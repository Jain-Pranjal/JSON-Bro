"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Copy, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Link from "next/link";

// interface DocsProps {
//   content?: React.ReactNode
// }

export default function Docs({ content }: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedSnippets, setCopiedSnippets] = useState<{
    [key: string]: boolean;
  }>({});
  const [outputVisible, setOutputVisible] = useState<{
    [key: string]: boolean;
  }>({});
  const mainContentRef = useRef<HTMLDivElement>(null);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };


  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link href={href} className="relative group inline-block">
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
  );

  const CodeSnippet = ({
    id,
    code,
    output,
  }: {
    id: string;
    code: string;
    output: string;
  }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code);
      setCopiedSnippets((prev) => ({ ...prev, [id]: true }));
      setTimeout(
        () => setCopiedSnippets((prev) => ({ ...prev, [id]: false })),
        2000
      );
    };

    const toggleOutput = (event: React.MouseEvent) => {
      event.preventDefault();
      setOutputVisible((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
      <div className="relative mb-4">
        <pre className="bg-gray-900 p-4 pt-12 rounded-lg text-blue-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
            onClick={copyToClipboard}
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
            className="border-green-400 hover:bg-green-400 text-black font-bold text-xs"
            onClick={toggleOutput}
          >
            <Play className="h-3 w-3" />
          </Button>
        </div>

        <AnimatePresence>
          {outputVisible[id] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <pre className="bg-gray-800 p-4 rounded-lg mt-2 text-green-400 overflow-x-auto">
                <code>{output}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const sections = [
    { title: "Getting Started", href: "/docs" },
    {
      title: "API Reference",
      subsections: [
        { title: "> Posts", href: "/docs/posts" },
        { title: "> Todos", href: "/docs/todos" },
        { title: "> Quotes", href: "/docs/quotes" },
        { title: "> Users", href: "/docs/users" },
        { title: "> Carts", href: "/docs/carts" },
        { title: "> Comments", href: "/docs/comments" },
        { title: "> Recipies", href: "/docs/recipies" },
        { title: "> Products", href: "/docs/products" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            color: { value: "#00ff00" },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 0.5 },
            shape: { type:"circle" },
            size: { value: { min: 1, max: 3 } },
          },
          background: {
            color: "#000000"
          }
        }}
        className="absolute inset-0"
      />

      <nav className="sticky top-0 z-50 flex justify-between items-center p-4 border-b border-green-400 bg-black">
        <div className="text-2xl font-bold flex items-center">
          <Terminal className="mr-2" />
          JSON Bro
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/docs">Docs</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-green-400 text-black hover:bg-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      <div className="flex-grow flex">
        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto fixed top-0 left-0 h-full z-40 md:hidden"
            >
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-green-400 hover:bg-green-400 text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <h2 className="text-xl font-bold mb-4">Documentation</h2>
              <ul>
                {sections.map((section) => (
                  <li key={section.title} className="mb-2">
                    {section.href ? (
                      <Link
                        href={section.href}
                        className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 block"
                      >
                        {section.title}
                      </Link>
                    ) : (
                      <>
                        <div className="w-full text-left py-2 px-4 rounded font-bold">
                          {section.title}
                        </div>
                        {section.subsections && (
                          <ul className="ml-4 mt-2">
                            {section.subsections.map((subsection) => (
                              <li key={subsection.title}>
                                <Link
                                  href={subsection.href}
                                  className="w-full text-left py-1 px-4 rounded hover:bg-gray-800 block"
                                >
                                  {subsection.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-4 left-0 w-full px-4">
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-left py-1 px-4 rounded hover:bg-gray-800 block"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="text-left py-1 px-4 rounded hover:bg-gray-800 block"
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-left py-1 px-4 rounded hover:bg-gray-800 block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-left py-1 px-4 rounded hover:bg-gray-800 block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <aside className="bg-gray-900 w-64 p-4 border-r border-green-400 overflow-y-auto hidden md:block sticky top-[57px] h-[calc(100vh-57px)] z-30">
          <h2 className="text-xl font-bold mb-4">Documentation</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.title} className="mb-2">
                {section.href ? (
                  <Link
                    href={section.href}
                    className="w-full text-left py-2 px-4 rounded hover:bg-gray-800 block"
                  >
                    {section.title}
                  </Link>
                ) : (
                  <>
                    <div className="w-full text-left py-2 px-4 rounded font-bold">
                      {section.title}
                    </div>
                    {section.subsections && (
                      <ul className="ml-4 mt-2">
                        {section.subsections.map((subsection) => (
                          <li key={subsection.title}>
                            <Link
                              href={subsection.href}
                              className="w-full text-left py-1 px-4 rounded hover:bg-gray-800 block"
                            >
                              {subsection.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <main
          ref={mainContentRef}
          className="flex-grow p-8 overflow-y-auto relative z-20 h-[calc(100vh-57px)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content || (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Getting Started with JSON Bro
                </h2>
                <p className="mb-4">
                  JSON Bro can be used with any type of frontend project that
                  needs products, carts, users, todos or any dummy data in JSON
                  format. You can use examples below to check how JSON Bro
                  works.{" "}
                </p>
                <CodeSnippet
                  id="install"
                  code="npm install json-bro"
                  output="+ json-bro@1.0.0
added 1 package, and audited 1 package in 2s
found 0 vulnerabilities"
                />
                <p className="mt-4 mb-4">
                  Then, import and use it in your code:
                </p>
                <CodeSnippet
                  id="usage"
                  code={`import jsonBro from 'json-bro';

const data = jsonBro.parse('{"name": "JSON Bro", "awesome": true}');
console.log(data);`}
                  output={`{
  name: 'JSON Bro',
  awesome: true
}`}
                />
              </>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
