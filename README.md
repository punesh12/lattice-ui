# Lattice UI

**Structured components for modern interfaces.**

Repository: [github.com/punesh12/lattice-ui](https://github.com/punesh12/lattice-ui)

A production-quality React component library and documentation site — built with Radix UI, Tailwind CSS v4, and TypeScript.

## Stack

- **pnpm** workspaces monorepo
- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Radix UI**, **CVA**, **next-themes**, **cmdk**, **sonner**

## Project structure

```
├── apps/web          # Docs site + marketing landing
├── packages/ui       # @lattice-ui/ui component library
└── packages/tokens   # @lattice-ui/tokens design tokens
```

## Getting started

```bash
pnpm install
pnpm dev        # starts apps/web on http://localhost:3000
pnpm build      # production build (all packages)
```

## Routes

| Route                | Description                 |
| -------------------- | --------------------------- |
| `/`                  | Marketing landing page      |
| `/docs`              | Documentation introduction  |
| `/docs/components/*` | Component reference         |
| `/playground`        | All components preview grid |

## Theming

Semantic CSS variables live in `packages/tokens/src/globals.css`. The docs site uses `next-themes` with `attribute="class"` — toggle persists via localStorage.

Primary brand color: `#6366F1` (indigo) in both light and dark themes.

## Development

- Components: `packages/ui/src/components/`
- Docs nav config: `apps/web/lib/docs.ts`
- Tailwind theme mapping: `apps/web/app/globals.css` (`@theme` block)

```bash
pnpm lint          # ESLint across all packages (Turbo)
pnpm format        # Prettier write
pnpm format:check  # Prettier check (CI)
```

## Publishing

`@lattice-ui/tokens` and `@lattice-ui/ui` are published to npm. See [PUBLISHING.md](./PUBLISHING.md) for login, version bumps, and release commands.

```bash
pnpm add @lattice-ui/ui @lattice-ui/tokens
```

## License

MIT — personal portfolio project.
