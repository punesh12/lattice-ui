import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@lattice-ui/ui'

export type ApiProp = {
  prop: string
  type: string
  default?: string
  description: string
}

export function ApiTable({ props }: { props: ApiProp[] }) {
  return (
    <div
      data-slot="api-table"
      className="not-prose my-6 overflow-x-auto rounded-lg border border-border"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="h-10 px-4 text-xs">Prop</TableHead>
            <TableHead className="h-10 px-4 text-xs">Type</TableHead>
            <TableHead className="h-10 px-4 text-xs">Default</TableHead>
            <TableHead className="h-10 px-4 text-xs">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((row) => (
            <TableRow key={row.prop}>
              <TableCell className="px-4 py-3 font-mono text-sm">{row.prop}</TableCell>
              <TableCell className="px-4 py-3 font-mono text-xs text-muted-foreground">
                {row.type}
              </TableCell>
              <TableCell className="px-4 py-3 font-mono text-xs">{row.default ?? '—'}</TableCell>
              <TableCell className="px-4 py-3 text-sm text-muted-foreground">
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
