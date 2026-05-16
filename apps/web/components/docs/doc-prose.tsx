import { cn } from '@/lib/utils'

export function DocProse({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'max-w-none',
        '[&_h1]:text-headline-md [&_h1]:mb-3 [&_h1]:scroll-mt-24',
        '[&_h1+p]:mt-0',
        '[&_h2]:text-title-md [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:scroll-mt-24',
        '[&_h3]:text-label-md [&_h3]:mt-6 [&_h3]:mb-2',
        '[&_p]:text-body-md [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground',
        '[&_p:last-child]:mb-0',
        '[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-body-sm [&_ul]:text-muted-foreground',
        '[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm',
        '[&_.not-prose]:my-6',
        className,
      )}
      {...props}
    />
  )
}
