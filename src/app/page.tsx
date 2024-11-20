import { Metadata } from 'next'
import AwsQuizApp from '@/components/aws-quiz-app'

export const metadata: Metadata = {
  title: 'AWS Quiz App - Home',
  description: 'Teste seus conhecimentos para a certificação AWS Cloud Practitioner',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <AwsQuizApp />
    </main>
  )
}