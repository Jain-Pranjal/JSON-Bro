import type { Metadata } from "next";
import "./globals.css";
import { constructMetadata } from '@/lib/utils' 


export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
        {/* <ClientProvider> */}
        {children}
        {/* </ClientProvider> */}
        </body>
    </html>
  );
}
