import type { Metadata } from 'next'
import { NotFoundContent } from '@/components/not-found-content'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function DocsNotFound() {
  return <NotFoundContent compact />
}
