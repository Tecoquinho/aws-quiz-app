import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AWS Quiz App',
  description: 'Quiz app for AWS Cloud Practitioner certification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/aws-quiz-app/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}