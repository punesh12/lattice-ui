import { DocProse } from '@/components/docs/doc-prose'
import { CodeBlock } from '@/components/docs/code-block'
import { Callout } from '@/components/docs/callout'

export default function ThemingPage() {
  return (
    <DocProse>
      <h1>Theming</h1>
      <p>
        Lattice UI uses CSS custom properties for all semantic colors, radii, and surfaces. Toggle
        between light and dark by applying the <code>.dark</code> class on the document root.
      </p>

      <h2>CSS variables</h2>
      <p>Tokens are defined in <code>@lattice-ui/tokens/globals.css</code> and mapped in your Tailwind theme.</p>
      <div className="not-prose">
        <CodeBlock
          code={`:root {
  --background: #ffffff;
  --foreground: #09090b;
  --primary: #6366f1;
  --primary-foreground: #ffffff;
  --border: #e4e4e7;
  --radius: 0.5rem;
}

.dark {
  --background: #09090b;
  --foreground: #fafafa;
  --card: #18181b;
  --border: rgba(255, 255, 255, 0.1);
}`}
        />
      </div>

      <h2>next-themes</h2>
      <p>Use <code>next-themes</code> to persist user preference and respect system settings.</p>
      <div className="not-prose">
        <CodeBlock
          code={`import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
  {children}
</ThemeProvider>`}
        />
      </div>

      <Callout title="Tip">
        Set <code>disableTransitionOnChange</code> to avoid flash of unstyled content when switching themes.
      </Callout>

      <h2>Customizing</h2>
      <p>
        Override any token in your own CSS after importing globals. Components reference semantic names
        like <code>--primary</code> and <code>--muted-foreground</code>, not raw hex values.
      </p>
    </DocProse>
  )
}
