import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const clientEntries = ['dist/index.js', 'dist/toast.js']

for (const file of clientEntries) {
  const path = join(packageRoot, file)
  const source = readFileSync(path, 'utf8')
  if (source.startsWith("'use client'")) continue
  writeFileSync(path, `'use client';\n${source}`)
}
