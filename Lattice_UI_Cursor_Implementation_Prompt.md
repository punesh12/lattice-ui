# Lattice UI — Cursor Implementation Prompt

**Purpose:** Paste the prompt below into **Cursor Agent** to implement the full **Lattice UI** design system from the Stitch spec (`docs/Google_Stitch_UI_Library_Design_System.md`).

**Project type:** Personal portfolio showcase — component library + documentation site + marketing landing page.  
**Not related to PrepSarkar** — use a dedicated project directory.

---

## How to use in Cursor

1. Create an empty folder for the project (e.g. `~/Projects/lattice-ui`) and open it in Cursor.
2. Paste the **Full implementation prompt** (Section 2) into a new Agent chat.
3. Attach or reference design exports from Google Stitch when you have them (screenshots or Figma links in chat).
4. Work in phases; after each phase, run `pnpm build` and fix errors before continuing.
5. Do not ask the user to confirm obvious defaults — execute the plan end-to-end unless blocked.

---

## Full implementation prompt (copy from here)

````
You are implementing **Lattice UI** — a production-quality React component library and documentation website. This is a personal portfolio project (not PrepSarkar). The visual spec is defined in the Stitch design document; match tokens and layouts exactly.

Read and follow: docs/Google_Stitch_UI_Library_Design_System.md (or the design tokens section below if the file is in context).

═══════════════════════════════════════════════════════════════
GOAL
═══════════════════════════════════════════════════════════════

Deliver a shippable monorepo containing:

1. **@lattice-ui/ui** — reusable component package (Radix + Tailwind + CVA)
2. **apps/web** — Next.js 15 docs site + marketing landing page
3. Full **light + dark theme** parity on every component and page
4. Developer experience comparable to shadcn/ui docs (preview, code tabs, API tables)

Success criteria:
- `pnpm install && pnpm build` passes with zero TypeScript errors
- Theme toggle works on landing and all doc pages (persists via localStorage)
- At least Button and Input have full doc pages with live preview + code + API table; other components listed in nav with placeholder or partial pages acceptable in v1 if time-boxed — but ALL primitives must exist and render in a `/playground` or Storybook-style page
- Accessible: focus rings, keyboard nav on dialogs/menus, aria labels on icon buttons
- No placeholder "lorem" in navigation labels; use real doc titles

═══════════════════════════════════════════════════════════════
TECH STACK (do not substitute)
═══════════════════════════════════════════════════════════════

- **pnpm** workspaces (monorepo)
- **Next.js 15** App Router, TypeScript strict
- **React 19**
- **Tailwind CSS v4** (or v3.4+ if v4 tooling blocks — document choice in README)
- **Radix UI** primitives (@radix-ui/react-*)
- **class-variance-authority** (cva) for variants
- **tailwind-merge** + **clsx** → `cn()` utility
- **next-themes** for dark/light/system
- **lucide-react** icons
- **sonner** for Toast
- **cmdk** for Command palette
- **@fontsource/inter** + **@fontsource/ibm-plex-mono** (or next/font/google)
- **eslint** + **prettier** (flat config)
- Optional: **vitest** + **@testing-library/react** for Button and Input unit tests only in v1

Do NOT use: MUI, Chakra, Ant Design, Bootstrap. Do NOT copy PrepSarkar code.

═══════════════════════════════════════════════════════════════
REPOSITORY STRUCTURE
═══════════════════════════════════════════════════════════════

Create at project root:

lattice-ui/
├── apps/
│   └── web/                          # Next.js docs + landing
│       ├── app/
│       │   ├── (marketing)/          # Landing route group
│       │   │   └── page.tsx          # Landing page
│       │   ├── docs/
│       │   │   ├── layout.tsx        # Docs shell (sidebar + header)
│       │   │   ├── page.tsx          # Introduction
│       │   │   ├── installation/
│       │   │   ├── theming/
│       │   │   ├── colors/
│       │   │   ├── typography/
│       │   │   ├── components/
│       │   │   │   ├── page.tsx      # Components index grid
│       │   │   │   └── [slug]/page.tsx
│       │   ├── layout.tsx            # Root layout + ThemeProvider
│       │   └── globals.css
│       ├── components/
│       │   ├── docs/                 # Doc-only: CodeBlock, Preview, ApiTable, Pager
│       │   ├── marketing/            # Landing sections
│       │   └── theme-toggle.tsx
│       └── lib/
│           └── docs.ts               # Nav config + component metadata
├── packages/
│   ├── ui/
│   │   ├── src/
│   │   │   ├── components/           # All primitives
│   │   │   ├── lib/utils.ts
│   │   │   └── index.ts              # Public exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── tokens/
│       ├── src/globals.css           # CSS variables :root + .dark
│       ├── tailwind-preset.ts        # or @theme in CSS for v4
│       └── package.json
├── package.json
├── pnpm-workspace.yaml
├── turbo.json                        # optional: turbo build
└── README.md

Package name: `@lattice-ui/ui`, `@lattice-ui/tokens`. App imports via workspace protocol.

═══════════════════════════════════════════════════════════════
BRAND & DESIGN TOKENS
═══════════════════════════════════════════════════════════════

**Brand:** Lattice UI — "Structured components for modern interfaces."
**Logo component:** `LatticeLogo` — rounded-lg indigo (#6366F1) square, white 3×3 lattice SVG (nine dots + connecting lines) + optional wordmark text.

Implement semantic CSS variables in `packages/tokens/src/globals.css`:

**Light (`:root`):**
--background: #ffffff
--foreground: #09090b
--card: #ffffff
--card-foreground: #09090b
--popover: #ffffff
--popover-foreground: #09090b
--muted: #f4f4f5
--muted-foreground: #71717a
--primary: #6366f1
--primary-foreground: #ffffff
--primary-hover: #4f46e5
--secondary: #f4f4f5
--secondary-foreground: #09090b
--accent: #f4f4f5
--accent-foreground: #09090b
--destructive: #dc2626
--destructive-foreground: #ffffff
--border: #e4e4e7
--input: #e4e4e7
--ring: rgba(99, 102, 241, 0.35)
--sidebar: #fafafa
--sidebar-foreground: #09090b
--sidebar-primary: #6366f1
--sidebar-accent: #f4f4f5
--sidebar-border: #e4e4e7
--success: #22c55e
--warning: #f59e0b
--error: #ef4444
--info: #3b82f6
--radius: 0.5rem

**Dark (`.dark` class on html):**
--background: #09090b
--foreground: #fafafa
--card: #18181b
--popover: #27272a
--muted: #27272a
--muted-foreground: #a1a1aa
--secondary: #27272a
--destructive: #ef4444
--border: rgba(255,255,255,0.10)
--input: rgba(255,255,255,0.12)
--ring: rgba(99,102,241,0.45)
--sidebar: #0f0f12
--sidebar-accent: #18181b
--sidebar-border: rgba(255,255,255,0.08)
(same primary hue #6366f1 in both themes)

Map all variables to Tailwind theme keys: background, foreground, card, primary, destructive, border, ring, sidebar-*, etc.

**Typography:** Inter (sans), IBM Plex Mono (mono). Tailwind fontFamily: sans, mono.
**Type scale utilities or components:** display-lg, headline-md, title-md, body-md, body-sm, label-md, caption.

**Spacing:** 4px base (Tailwind default spacing scale).
**Radius:** sm 4px, md 6px, lg 8px, xl 12px, 2xl 16px.
**Z-index:** dropdown 10, sticky 20, overlay 30, modal 40, popover 50, toast 60.
**Motion:** transition durations 100/150/250/350ms.

**Dark elevation:** tonal only (no heavy shadows).
**Light elevation:** shadow-sm on cards, shadow-md on popovers/modals.

Status badge backgrounds on dark: use `bg-success/15` pattern, not solid pastels.

═══════════════════════════════════════════════════════════════
COMPONENT LIBRARY — @lattice-ui/ui
═══════════════════════════════════════════════════════════════

Every component:
- TypeScript props with exported types
- `cva` for variants where applicable
- `forwardRef` where DOM ref needed
- `cn()` for className merge
- `data-slot` attribute on root (shadcn convention)
- All interactive states: hover, focus-visible, disabled, aria-invalid
- Min touch target 40–44px on default sizes (compact xs documented)

Implement ALL of the following in `packages/ui/src/components/`:

**Actions**
- `button.tsx` — variants: default, secondary, outline, ghost, destructive, link, soft | sizes: xs, sm, default, lg, icon-xs, icon-sm, icon, icon-lg | loading prop with Loader2 spinner
- `link.tsx` — styled Next.js Link or anchor variant

**Forms**
- `input.tsx` — sm/default/lg, error state, prefix/suffix slots or compound InputGroup
- `textarea.tsx`
- `label.tsx`, `field.tsx` (label + description + error wrapper)
- `checkbox.tsx`, `radio-group.tsx`, `switch.tsx`
- `select.tsx` (Radix Select)
- `combobox.tsx` (cmdk + popover pattern)
- `slider.tsx`
- `otp-input.tsx` — 6 cells, paste support, group error
- `date-picker.tsx` — simple: popover + calendar grid (can use react-day-picker if needed)

**Display**
- `badge.tsx` — variants: default, secondary, outline, destructive, success, warning, ghost
- `tag.tsx` / `chip.tsx` — dismissible, selected, with avatar/icon
- `avatar.tsx` — sizes xs–xl, fallback initials, status dot, AvatarGroup
- `card.tsx` — Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction
- `table.tsx` — Table, TableHeader, TableBody, TableRow, TableCell, etc.
- `skeleton.tsx`
- `progress.tsx` — linear + optional circular
- `separator.tsx`, `divider.tsx`
- `kbd.tsx`
- `spinner.tsx`
- `aspect-ratio.tsx`
- `scroll-area.tsx` (Radix)

**Navigation**
- `tabs.tsx`
- `breadcrumb.tsx`
- `pagination.tsx`
- `sidebar.tsx` — SidebarProvider, Sidebar, SidebarNav, collapsible to 64px icon rail
- `app-shell.tsx` — composable header + sidebar layout

**Overlays**
- `dialog.tsx`, `alert-dialog.tsx`
- `sheet.tsx` — sides: right, left, bottom
- `popover.tsx`, `tooltip.tsx`, `hover-card.tsx`
- `dropdown-menu.tsx`, `context-menu.tsx`
- `toast.tsx` — re-export sonner Toaster + helper `toast()`

**Feedback**
- `alert.tsx` — info, success, warning, error
- `empty-state.tsx`
- `selectable-row.tsx` — for lists/quizzes: default, selected, error

**Composites** (in ui or apps/web depending on coupling)
- `command.tsx` — CommandDialog with ⌘K
- `file-upload.tsx` — dropzone states
- `filter-bar.tsx`
- `settings-row.tsx`
- `notification-item.tsx`

**Brand**
- `lattice-logo.tsx`

Export everything from `packages/ui/src/index.ts`.

Use Radix primitives; style with Tailwind + CSS variables only — no hardcoded hex in components except inside tokens file.

═══════════════════════════════════════════════════════════════
DOCUMENTATION SITE — apps/web
═══════════════════════════════════════════════════════════════

**Docs shell** (`app/docs/layout.tsx`):
- Sticky top bar: LatticeLogo + "Lattice UI" | v1.0 badge | centered search (client component, filters nav — can be simple filter on docs config) | GitHub link (href #) | ThemeToggle | "⌘K" hint opening Command
- Left sidebar 260px, scrollable, grouped nav from `lib/docs.ts`
- Main: `max-w-3xl` prose, `mx-auto`, padding
- Right rail (xl+): sticky TableOfContents from headings
- Footer: Edit on GitHub (placeholder #) | DocPager prev/next

**Doc components** (`apps/web/components/docs/`):
- `DocProse` — typography styles for markdown-like content
- `Preview` — bordered card, checkerboard optional muted bg, centres children
- `PreviewToolbar` — tabs Preview | Code (toggle show code string)
- `CodeBlock` — mono, muted bg, rounded-lg, copy button (clipboard API)
- `CodeTabs` — npm | pnpm | yarn | bun
- `ApiTable` — table Prop | Type | Default | Description
- `Callout` — info alert for accessibility sections
- `DocPager`

**Docs pages to implement with real content:**

| Route | Content |
|-------|---------|
| /docs | Introduction — why Lattice UI, feature cards, CTA |
| /docs/installation | install commands, setup steps, tailwind import |
| /docs/theming | semantic tokens explanation, CSS vars table dark/light, next-themes snippet |
| /docs/colors | swatch grid per token, chart + status rows, theme tabs |
| /docs/typography | type scale table, font stacks |
| /docs/components | grid of ComponentCard linking to each slug |
| /docs/components/button | FULL: preview, variants, sizes, loading examples, ApiTable, a11y callout |
| /docs/components/input | FULL: same pattern as button |
| /docs/components/[slug] | For other components: at minimum Preview + short description + ApiTable stub; expand Button/Input quality first |

**Component metadata** in `lib/docs.ts`:
```ts
export const docsConfig = {
  gettingStarted: [...],
  foundations: [...],
  components: [
    { slug: 'button', title: 'Button', description: '...', component: Button },
    // all components alphabetically
  ],
}
````

**Command palette (docs):** cmdk dialog, search docs nav items, navigate on select.

═══════════════════════════════════════════════════════════════
MARKETING LANDING PAGE — apps/web/app/(marketing)/page.tsx
═══════════════════════════════════════════════════════════════

Sections (use `@lattice-ui/ui` components only):

1. **Navbar** — sticky, blur backdrop, logo, links (Docs, Components, Themes, GitHub), Get Started → /docs/installation, ThemeToggle
2. **Hero** — headline "Build interfaces with structure.", subhead, CTAs (Get Started, Browse Components), right: HeroMosaic (floating cards with Button group, Input, mini Dialog, Toast visual)
3. **Logos** — greyscale placeholder SVG marks × 5
4. **Features** — 6-card grid (Dual theme, Accessible, TypeScript, Customizable, Copy-paste, Open source)
5. **ComponentShowcase** — bento grid of live mini demos (Tabs, Card, Alert, Avatar group, Table snippet)
6. **ThemeShowcase** — split panel: forced dark left | forced light right, same 3 components each side
7. **DeveloperExperience** — mock code panel (static highlighted TSX) + bullet list + link to docs
8. **WhyLattice** — 3 bullets
9. **CtaBand** — muted full-width band, buttons
10. **Footer** — 4 columns + copyright © Lattice UI 2026

Responsive: mobile nav sheet/hamburger, stacked hero, single-column features.
Landing must look polished — spacing 80–120px section py on desktop.

═══════════════════════════════════════════════════════════════
THEME IMPLEMENTATION
═══════════════════════════════════════════════════════════════

- `ThemeProvider` from next-themes in root layout: attribute="class", defaultTheme="dark", enableSystem
- `ThemeToggle` — sun/moon icon button using Button ghost variant
- Import `@lattice-ui/tokens/globals.css` in app globals.css
- No flash: suppressHydrationWarning on html

═══════════════════════════════════════════════════════════════
IMPLEMENTATION PHASES (execute in order)
═══════════════════════════════════════════════════════════════

**Phase 1 — Scaffold**

- Init pnpm monorepo, packages, Next app, TS strict, ESLint, README
- tokens package + globals.css + tailwind config wired to apps/web
- cn(), fonts, root layout

**Phase 2 — Core primitives**

- Button, Input, Label, Card, Badge, Avatar, Separator, Skeleton, Spinner
- Verify in temporary `/playground` page

**Phase 3 — Forms & overlays**

- Remaining form controls, Dialog, Sheet, Popover, Dropdown, Tooltip, Toast, Alert

**Phase 4 — Navigation & data**

- Tabs, Sidebar, Table, Pagination, Breadcrumb, Progress, etc.

**Phase 5 — Composites + brand**

- Command, FileUpload, LatticeLogo, remaining composites

**Phase 6 — Docs site**

- Docs shell, docs.ts config, Introduction through Typography pages
- Doc components (Preview, CodeBlock, ApiTable)
- Button + Input full doc pages; components index + stubs for others

**Phase 7 — Landing page**

- All marketing sections, responsive pass

**Phase 8 — Polish**

- Delete playground or keep at /playground behind dev-only
- README: install, dev commands, project structure, screenshot placeholders
- Fix all lint/type errors; run build

═══════════════════════════════════════════════════════════════
CODE QUALITY RULES
═══════════════════════════════════════════════════════════════

- Strict TypeScript; no `any` except justified with comment
- Prefer composition over duplication; shared patterns in ui package
- Accessible: focus-visible:ring-2 ring-ring ring-offset-2 ring-offset-background on interactives
- Icon-only buttons: require `aria-label`
- Forms: associate Label htmlFor with control id; aria-describedby for errors
- Do not add verbose comments on obvious code
- Do not create unrelated markdown files unless README
- Do not commit .env secrets
- Match existing file style if editing; for greenfield follow Prettier defaults (semi: false, singleQuote: true — or prettier defaults)

═══════════════════════════════════════════════════════════════
ACCEPTANCE CHECKLIST (verify before finishing)
═══════════════════════════════════════════════════════════════

[ ] pnpm build succeeds
[ ] Theme toggle switches light/dark on landing and docs
[ ] All CSS variables applied; primary #6366F1 both themes
[ ] Button: 7 variants, 8 sizes, loading state
[ ] Docs: sidebar nav, search or filter, Button doc with Preview+Code+API
[ ] Landing: all 10 sections render, mobile responsive
[ ] LatticeLogo component used in navbar and docs header
[ ] No PrepSarkar imports or references

When blocked by a dependency version, pick stable compatible versions and document in README. Prefer completing a thinner v1 over stopping halfway.

Start with Phase 1 now. Create files on disk — do not only describe what you would do.

```

---

## Shorter follow-up prompts (use in later Cursor chats)

**Continue components:**
```

Continue Lattice UI implementation from packages/ui. Add [ComponentName] matching the Stitch spec in docs/Google_Stitch_UI_Library_Design_System.md. Include all variants, sizes, states, forwardRef, cva, and export from index.ts. Run pnpm build and fix errors.

```

**Add doc page:**
```

Add full documentation page at apps/web/app/docs/components/[slug]/page.tsx for [ComponentName] in Lattice UI. Use Preview, CodeBlock, ApiTable, Callout patterns matching the Button doc page. Wire into lib/docs.ts nav.

```

**Polish landing:**
```

Improve Lattice UI landing page (apps/web) mobile responsive layout, hero mosaic animations (subtle CSS only), and section spacing per Stitch spec. Use only @lattice-ui/ui components.

```

---

## Related files

| File | Role |
| :---- | :---- |
| `docs/Google_Stitch_UI_Library_Design_System.md` | Visual spec for Stitch + token reference |
| `docs/Lattice_UI_Cursor_Implementation_Prompt.md` | This file — Cursor build prompt |

---

*v1.0 — Cursor implementation prompt for Lattice UI.*
```
