import type { Metadata } from 'next'
import { Footer } from '@/components/marketing/footer'
import { Navbar } from '@/components/marketing/navbar'
import { NotFoundContent } from '@/components/not-found-content'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-4 sm:px-6">
        <NotFoundContent />
      </main>
      <Footer />
    </div>
  )
}
