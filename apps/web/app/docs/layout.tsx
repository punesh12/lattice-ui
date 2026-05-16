import { DocsHeader } from '@/components/docs/docs-header'
import { DocsSidebar } from '@/components/docs/docs-sidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <DocsHeader />
      <div className="flex">
        <DocsSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8 lg:px-8 lg:py-10">{children}</main>
          <footer className="mx-auto w-full max-w-3xl border-t border-border px-6 py-8 lg:px-8">
            <div data-slot="doc-pager-placeholder" className="min-h-[3rem]" />
          </footer>
        </div>
      </div>
    </div>
  )
}
