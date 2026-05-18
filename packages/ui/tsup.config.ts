import { defineConfig } from 'tsup'

const external = [
  'react',
  'react-dom',
  /^@radix-ui\//,
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
  'lucide-react',
  'cmdk',
  'sonner',
  'react-day-picker',
  '@punesh12/lattice-ui-tokens',
]

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    utils: 'src/lib/utils.ts',
    toast: 'src/components/toast.tsx',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external,
  outExtension({ format }) {
    return { js: format === 'cjs' ? '.cjs' : '.js' }
  },
})
