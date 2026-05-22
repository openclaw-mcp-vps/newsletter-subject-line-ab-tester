import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SubjectSplit — A/B Test Newsletter Subject Lines Automatically',
  description: 'Connect your email platform, test subject line variants automatically, and optimize open rates with real-time analytics.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d13e5d86-9fc3-41be-9612-d6187009a2cb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
