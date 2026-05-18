# Publishing to npm

Lattice UI ships two public packages:

| Package | Description |
| --- | --- |
| `@punesh12/lattice-ui-tokens` | CSS variables (`globals.css`) and Tailwind preset |
| `@punesh12/lattice-ui` | React component library (depends on tokens) |

## Prerequisites

1. **npm account** — [create one](https://www.npmjs.com/signup) if needed.
2. **Scope access** — Packages publish under **`@punesh12`** (your npm username). The `@punesh12/lattice-ui` scope is owned by another project on npm and cannot be used.
3. **Login** (one-time per machine):

   ```bash
   npm login
   ```

4. **Build** — UI must compile before publish:

   ```bash
   pnpm install
   pnpm --filter @punesh12/lattice-ui build
   ```

## Publish order

Publish **tokens first**, then **ui** (ui depends on tokens).

```bash
# From repo root
pnpm publish:tokens
pnpm publish:ui
```

Or both:

```bash
pnpm publish:packages
```

`prepublishOnly` runs lint/tests/build automatically for each package.

## Dry run (recommended first time)

```bash
cd packages/tokens && pnpm publish --dry-run --access public
cd ../ui && pnpm publish --dry-run --access public
```

## Version bumps

```bash
cd packages/tokens && npm version patch   # 0.1.0 → 0.1.1
cd packages/ui && npm version patch
```

Keep both packages on compatible versions when tokens change.

## Consumer install

```bash
pnpm add @punesh12/lattice-ui @punesh12/lattice-ui-tokens
```

See [Installation](https://github.com/punesh12/lattice-ui) in the docs for Tailwind and theme setup.

## Monorepo note

The docs app (`apps/web`) still uses workspace packages. After publishing, external apps install from npm; this repo continues to use `workspace:*` links locally.

## Deploy Storybook on Vercel

Storybook static output is written to `packages/ui/storybook-static` (not the repo root).

**Option A — Project root = repository root** (uses `/vercel.json`):

| Setting | Value |
| --- | --- |
| Build Command | `pnpm build-storybook` |
| Output Directory | `packages/ui/storybook-static` |
| Install Command | `pnpm install` |
| Framework Preset | Other |

**Option B — Project root = `packages/ui`** (uses `packages/ui/vercel.json`):

| Setting | Value |
| --- | --- |
| Root Directory | `packages/ui` |
| Build Command | `pnpm run build-storybook` |
| Output Directory | `storybook-static` |
| Install Command | `cd ../.. && pnpm install` |

Do not set Output Directory to `storybook-static` when the Vercel root is the monorepo root — that folder does not exist there.
