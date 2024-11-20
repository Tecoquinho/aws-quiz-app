import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AWS Quiz App',
  description: 'Aplicativo de quiz para certificação AWS Cloud Practitioner',
  icons: [
    {
      rel: 'icon',
      url: '/aws-quiz-app/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}