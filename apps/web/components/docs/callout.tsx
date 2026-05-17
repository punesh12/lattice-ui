import { Alert, AlertDescription, AlertTitle } from '@lattice-ui/ui'

export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Alert variant="info" className="not-prose my-6">
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
