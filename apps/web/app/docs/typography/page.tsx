import { DocProse } from '@/components/docs/doc-prose'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@lattice-ui/ui'

const scale = [
  { name: 'Display LG', class: 'text-display-lg', size: '48px', weight: '600', usage: 'Hero headlines' },
  { name: 'Headline MD', class: 'text-headline-md', size: '30px', weight: '600', usage: 'Page titles' },
  { name: 'Title MD', class: 'text-title-md', size: '20px', weight: '600', usage: 'Section headings' },
  { name: 'Body MD', class: 'text-body-md', size: '16px', weight: '400', usage: 'Primary body copy' },
  { name: 'Body SM', class: 'text-body-sm', size: '14px', weight: '400', usage: 'Secondary text' },
  { name: 'Label MD', class: 'text-label-md', size: '14px', weight: '500', usage: 'Form labels' },
  { name: 'Caption', class: 'text-caption', size: '12px', weight: '400', usage: 'Hints and metadata' },
]

export default function TypographyPage() {
  return (
    <DocProse>
      <h1>Typography</h1>
      <p>
        Lattice UI uses Inter for UI text and IBM Plex Mono for code. Type scale utilities are defined
        in global styles.
      </p>

      <div className="not-prose my-8 space-y-6">
        {scale.map((item) => (
          <div key={item.name} className="border-b border-border pb-6 last:border-0">
            <p className={item.class}>{item.name}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {item.class} · {item.size} · {item.weight}
            </p>
          </div>
        ))}
      </div>

      <h2>Type scale reference</h2>
      <div className="not-prose overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Usage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scale.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="font-mono text-xs">{item.class}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell className="text-muted-foreground">{item.usage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DocProse>
  )
}
