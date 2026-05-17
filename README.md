# Lattice UI

**Structured components for modern interfaces.**

[![License: MIT](https://img.shields.io/badge/License-MIT-indigo.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61dafb.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg)](https://www.typescriptlang.org)
[![pnpm](https://img.shields.io/badge/pnpm-9.15-f69220.svg)](https://pnpm.io)

Lattice UI is a production-oriented React design system and documentation monorepo. It ships accessible primitives built on **Radix UI**, styled with **Tailwind CSS v4** semantic tokens, and documented with a **Next.js 15** site, **Storybook** catalog, and **Vitest** tests.

**Repository:** [github.com/punesh12/lattice-ui](https://github.com/punesh12/lattice-ui)

---

## Table of contents

- [Features](#features)
- [Packages](#packages)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Monorepo development](#monorepo-development)
- [Project structure](#project-structure)
- [Component library](#component-library)
- [Documentation site](#documentation-site)
- [Storybook](#storybook)
- [Scripts reference](#scripts-reference)
- [Testing](#testing)
- [Theming](#theming)
- [Publishing](#publishing)
- [License](#license)

---

## Features

- **50+ components** — forms, overlays, navigation, data display, and app patterns (shell, filter bar, notification item, and more)
- **Accessible by default** — Radix primitives, focus management, and ARIA-aware building blocks
- **Design tokens** — shared CSS variables for light/dark themes via `@lattice-ui/tokens`
- **TypeScript-first** — typed props, variants (CVA), and published `.d.ts` builds
- **Next.js App Router ready** — client boundaries and `transpilePackages` support
- **Docs + playground** — marketing landing, per-component reference, live demos, and copy-ready examples
- **Storybook 8** — isolated stories for every exported component
- **Unit tests** — Vitest + Testing Library in `packages/ui`

---

## Packages

| Package | npm | Description |
| ------- | --- | ----------- |
| [`@lattice-ui/ui`](./packages/ui) | `@lattice-ui/ui` | React component library |
| [`@lattice-ui/tokens`](./packages/tokens) | `@lattice-ui/tokens` | Global CSS variables and Tailwind preset |
| [`@lattice-ui/web`](./apps/web) | — (private) | Documentation and marketing site |

---

## Requirements

- **Node.js** 20+
- **pnpm** 9.15+ (`corepack enable` recommended)
- **React** 18 or 19 (peer dependency)

---

## Installation

Install both the component library and design tokens:

```bash
pnpm add @lattice-ui/ui @lattice-ui/tokens
# or
npm install @lattice-ui/ui @lattice-ui/tokens
```

### Tailwind CSS v4

Import tokens in your global stylesheet (before or with Tailwind):

```css
@import 'tailwindcss';
@import '@lattice-ui/tokens/globals.css';
```

### Next.js

Add packages to `transpilePackages` in `next.config.ts`:

```ts
const nextConfig = {
  transpilePackages: ['@lattice-ui/ui', '@lattice-ui/tokens'],
}
```

### Theme provider and toasts

```tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@lattice-ui/ui/toast'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster position="top-right" closeButton />
    </ThemeProvider>
  )
}
```

### Subpath exports

| Import | Use case |
| ------ | -------- |
| `@lattice-ui/ui` | All components and utilities |
| `@lattice-ui/ui/utils` | `cn()` and shared helpers |
| `@lattice-ui/ui/toast` | `Toaster`, `toast`, and toast types |

Full setup (fonts, theming, examples): run the docs site locally and open `/docs/installation`.

---

## Quick start

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@lattice-ui/ui'

export function Example() {
  return (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Input placeholder="Email" type="email" />
        <Button>Continue</Button>
      </CardContent>
    </Card>
  )
}
```

---

## Monorepo development

Clone the repository and install dependencies from the root:

```bash
git clone https://github.com/punesh12/lattice-ui.git
cd lattice-ui
pnpm install
```

| Task | Command | URL |
| ---- | ------- | --- |
| Docs site | `pnpm dev` | http://localhost:3000 |
| Storybook | `pnpm storybook` | http://localhost:6006 |
| Production build | `pnpm build` | — |

---

## Project structure

```
lattice-ui/
├── apps/
│   └── web/                 # Next.js docs + marketing (private)
│       ├── app/               # App Router pages
│       ├── components/        # Doc shell, demos, marketing
│       └── lib/               # docs.ts nav, site config
├── packages/
│   ├── ui/                  # @lattice-ui/ui — components, Storybook, tests
│   │   ├── src/components/  # Component source
│   │   ├── .storybook/      # Storybook config
│   │   └── dist/            # Published build output (after pnpm build)
│   └── tokens/              # @lattice-ui/tokens — CSS variables
│       └── src/globals.css
├── turbo.json               # Turborepo task pipeline
├── PUBLISHING.md            # npm release & Vercel Storybook deploy
└── LICENSE
```

---

## Component library

Components live in `packages/ui/src/components/`. Public exports are defined in `packages/ui/src/index.ts`.

### Categories

| Category | Examples |
| -------- | -------- |
| **Forms** | Button, Input, Textarea, Checkbox, Switch, Radio Group, Select, Combobox, Slider, OTP Input, Field, Label |
| **Display** | Badge, Tag, Avatar, Alert, Card, Table, Skeleton, Progress, Kbd, Spinner, Aspect Ratio |
| **Layout** | Separator, Divider, Scroll Area, Tabs, Breadcrumb, Pagination, Sidebar, App Shell |
| **Overlays** | Dialog, Modal, Alert Dialog, Sheet, Popover, Tooltip, Hover Card, Dropdown Menu, Context Menu, Toast |
| **Patterns** | Command, File Upload, Filter Bar, Settings Row, Empty State, Selectable Row, Notification Item |

> **Note:** `DatePicker` source exists but is not exported (deprecated).

---

## Documentation site

The `apps/web` app provides:

| Route | Description |
| ----- | ----------- |
| `/` | Marketing landing page |
| `/docs` | Introduction |
| `/docs/installation` | Install and configure in your app |
| `/docs/theming` | Light, dark, and system themes |
| `/docs/colors` | Token reference |
| `/docs/typography` | Type scale |
| `/docs/components` | Component index |
| `/docs/components/[slug]` | Per-component docs, demo, and API |
| `/playground` | Grid preview of all components |

Docs navigation is driven by `apps/web/lib/docs.ts`.

---

## Storybook

Run the component catalog locally:

```bash
pnpm storybook
```

Build static Storybook (output: `packages/ui/storybook-static`):

```bash
pnpm build-storybook
```

Deploying to Vercel or another host: see [PUBLISHING.md — Deploy Storybook](./PUBLISHING.md#deploy-storybook-on-vercel).

---

## Scripts reference

All commands run from the **repository root** unless noted.

### Development

| Script | Description |
| ------ | ----------- |
| `pnpm dev` | Start docs site (Turbo) |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build` | Production build (all packages) |
| `pnpm build-storybook` | Static Storybook build |

### Quality

| Script | Description |
| ------ | ----------- |
| `pnpm lint` | ESLint across the monorepo (Turbo) |
| `pnpm lint:eslint` | ESLint from root config |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting (CI) |
| `pnpm test` | Run unit tests once (Turbo) |
| `pnpm test:ui` | Run `@lattice-ui/ui` tests only |
| `pnpm test:watch` | Vitest watch mode (UI package) |

### Publishing

| Script | Description |
| ------ | ----------- |
| `pnpm publish:tokens` | Publish `@lattice-ui/tokens` to npm |
| `pnpm publish:ui` | Publish `@lattice-ui/ui` to npm |
| `pnpm publish:packages` | Publish tokens, then ui |

See [PUBLISHING.md](./PUBLISHING.md) for authentication, versioning, and dry runs.

### Package-level scripts

Inside `packages/ui`:

```bash
pnpm --filter @lattice-ui/ui build    # tsup → dist/
pnpm --filter @lattice-ui/ui lint     # eslint + tsc
pnpm --filter @lattice-ui/ui test     # vitest run
```

---

## Testing

Tests use **Vitest** and **@testing-library/react** in `packages/ui/src/__tests__/`.

```bash
pnpm test           # CI-style run (all packages via Turbo)
pnpm test:watch     # Watch mode while developing components
pnpm test:ui        # Scoped to @lattice-ui/ui
```

Coverage today includes utilities, Button, Input, Checkbox, Alert, Avatar, Breadcrumb, and Select menu behavior. Add tests alongside new components in `packages/ui/src/__tests__/`.

---

## Theming

Semantic CSS variables are defined in `packages/tokens/src/globals.css`:

- Light and dark palettes via `.dark` on `<html>` or a parent
- Brand primary: `#6366F1` (indigo)
- Sidebar, status (success, warning, error, info), and surface tokens

The docs site uses **next-themes** with `attribute="class"`, `defaultTheme="system"`, and `enableSystem` for OS preference.

Extend or override tokens in your app after importing `@lattice-ui/tokens/globals.css`. Component styling also uses `data-slot` attributes documented in the docs site `globals.css` for apps that do not scan the UI package with Tailwind.

---

## Publishing

`@lattice-ui/tokens` and `@lattice-ui/ui` are configured for public npm release:

1. Log in: `npm login`
2. Build UI: `pnpm --filter @lattice-ui/ui build`
3. Publish tokens first, then ui: `pnpm publish:packages`

Details, version bumps, and Storybook hosting: **[PUBLISHING.md](./PUBLISHING.md)**.

---

## Tech stack

| Layer | Technology |
| ----- | ---------- |
| Monorepo | pnpm workspaces, Turborepo |
| UI | React 19, Radix UI, CVA, Tailwind Merge |
| Styling | Tailwind CSS v4, CSS variables |
| Docs | Next.js 15 App Router, next-themes |
| Tooling | TypeScript, ESLint, Prettier, tsup, Vitest, Storybook 8 |

---

## License

[MIT](./LICENSE) © Punesh Borkar
