import { Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@lattice-ui/ui'

export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Alert variant="info" className="not-prose my-6">
      <Info className="h-4 w-4" />
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
