import { DocProse } from '@/components/docs/doc-prose'

const swatches = [
  { name: 'Background', token: '--background', className: 'bg-background' },
  { name: 'Foreground', token: '--foreground', className: 'bg-foreground' },
  { name: 'Card', token: '--card', className: 'bg-card' },
  { name: 'Muted', token: '--muted', className: 'bg-muted' },
  { name: 'Primary', token: '--primary', className: 'bg-primary' },
  { name: 'Secondary', token: '--secondary', className: 'bg-secondary' },
  { name: 'Accent', token: '--accent', className: 'bg-accent' },
  { name: 'Destructive', token: '--destructive', className: 'bg-destructive' },
  { name: 'Border', token: '--border', className: 'bg-border' },
  { name: 'Success', token: '--success', className: 'bg-success' },
  { name: 'Warning', token: '--warning', className: 'bg-warning' },
  { name: 'Error', token: '--error', className: 'bg-error' },
  { name: 'Info', token: '--info', className: 'bg-info' },
  { name: 'Sidebar', token: '--sidebar', className: 'bg-sidebar' },
]

export default function ColorsPage() {
  return (
    <DocProse>
      <h1>Colors</h1>
      <p>
        Semantic color tokens adapt automatically in light and dark mode. Use Tailwind utilities like{' '}
        <code>bg-primary</code> and <code>text-muted-foreground</code> in your UI.
      </p>

      <div className="not-prose my-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {swatches.map((swatch) => (
          <div key={swatch.token} className="space-y-2">
            <div
              className={`h-16 rounded-lg border border-border shadow-sm ${swatch.className}`}
              style={{ backgroundColor: `var(${swatch.token})` }}
            />
            <div>
              <p className="text-sm font-medium">{swatch.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{swatch.token}</p>
            </div>
          </div>
        ))}
      </div>
    </DocProse>
  )
}
