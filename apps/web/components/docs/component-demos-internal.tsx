'use client'

import { useState } from 'react'
import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AppShell,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Combobox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Divider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  EmptyState,
  Field,
  FileUpload,
  FilterBar,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  Kbd,
  Label,
  Link,
  NotificationItem,
  OtpInput,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectableRow,
  Separator,
  SettingsRow,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarProvider,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  TagGroup,
  Textarea,
  toast,
  TOAST_POSITIONS,
  type ToastPosition,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@punesh12/lattice-ui'
import { Inbox } from 'lucide-react'
import { EditProfileModalDemo, EditProfileSheetDemo } from '@/components/docs/demos/overlay-demos'

const comboboxOptions = [
  { value: 'react', label: 'React' },
  { value: 'next', label: 'Next.js' },
  { value: 'vue', label: 'Vue' },
]

const ToastDemo = () => {
  const [position, setPosition] = useState<ToastPosition>('top-right')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <Select value={position} onValueChange={(value) => setPosition(value as ToastPosition)}>
        <SelectTrigger style={{ width: 200 }}>
          <SelectValue placeholder="Position" />
        </SelectTrigger>
        <SelectContent>
          {TOAST_POSITIONS.map((pos) => (
            <SelectItem key={pos} value={pos}>
              {pos}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.success('Changes saved', {
              description: 'Your settings were updated.',
              position,
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.info('New update', { description: 'Version 1.1 is available.', position })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.warning('Storage almost full', {
              description: 'Free up space to continue.',
              position,
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.error('Something went wrong', {
              description: 'Please try again later.',
              position,
            })
          }
        >
          Error
        </Button>
      </div>
    </div>
  )
}

const OtpDemo = () => {
  const [value6, setValue6] = useState('')
  const [value4, setValue4] = useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--muted-foreground)' }}>
          6 digits (default)
        </p>
        <OtpInput value={value6} onChange={setValue6} />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--muted-foreground)' }}>4 digits</p>
        <OtpInput length={4} value={value4} onChange={setValue4} />
      </div>
    </div>
  )
}

const TagGroupDemo = () => {
  const [value, setValue] = useState('engineering')
  return (
    <TagGroup
      gap="md"
      value={value}
      onValueChange={setValue}
      options={[
        { value: 'design', label: 'Design' },
        { value: 'engineering', label: 'Engineering' },
      ]}
    />
  )
}

const SelectableRowDemo = () => {
  const [selected, setSelected] = useState('a')
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <SelectableRow
        state={selected === 'a' ? 'selected' : 'default'}
        onClick={() => setSelected('a')}
      >
        <span className="font-medium">Option A</span>
        <span className="block text-xs text-muted-foreground">First choice</span>
      </SelectableRow>
      <SelectableRow
        state={selected === 'b' ? 'selected' : 'default'}
        onClick={() => setSelected('b')}
      >
        <span className="font-medium">Option B</span>
        <span className="block text-xs text-muted-foreground">Second choice</span>
      </SelectableRow>
    </div>
  )
}

const ComboboxDemo = () => {
  const [value, setValue] = useState('')
  return (
    <Combobox
      options={comboboxOptions}
      value={value}
      onValueChange={setValue}
      placeholder="Select framework…"
      className="w-[220px]"
    />
  )
}

const SliderDemo = () => {
  const [value, setValue] = useState([50])
  return <Slider value={value} onValueChange={setValue} className="w-[200px]" />
}

const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

const frameworkOptions = [
  { value: 'react', label: 'React' },
  { value: 'next', label: 'Next.js' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
  { value: 'solid', label: 'Solid' },
]

const skillOptions = [
  { value: 'ts', label: 'TypeScript' },
  { value: 'css', label: 'CSS' },
  { value: 'a11y', label: 'Accessibility' },
  { value: 'testing', label: 'Testing' },
  { value: 'design', label: 'Design systems' },
]

const SelectDemo = () => {
  const [theme, setTheme] = useState('light')
  const [framework, setFramework] = useState('')
  const [skills, setSkills] = useState<string[]>(['ts', 'css'])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 280 }}>
      <Select
        options={themeOptions}
        value={theme}
        onValueChange={(value) => setTheme(value as string)}
        placeholder="Theme"
      />
      <Select
        options={frameworkOptions}
        searchable
        value={framework}
        onValueChange={(value) => setFramework(value as string)}
        placeholder="Search frameworks…"
        searchPlaceholder="Filter…"
      />
      <Select
        options={skillOptions}
        multiple
        searchable
        value={skills}
        onValueChange={(value) => setSkills(value as string[])}
        placeholder="Skills"
        searchPlaceholder="Search skills…"
      />
    </div>
  )
}

const demos: Record<string, () => React.ReactNode> = {
  alert: () => (
    <Alert className="w-full max-w-md self-start" variant="info">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
  'alert-dialog': () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  'app-shell': () => (
    <AppShell
      className="h-[200px] w-full max-w-md overflow-hidden rounded-lg border"
      header={<div className="border-b px-4 py-2 text-sm font-medium">Dashboard</div>}
      sidebar={
        <Sidebar>
          <SidebarHeader className="text-xs font-semibold">Nav</SidebarHeader>
          <SidebarContent>
            <SidebarNav>
              <SidebarNavItem active>Home</SidebarNavItem>
              <SidebarNavItem>Settings</SidebarNavItem>
            </SidebarNav>
          </SidebarContent>
        </Sidebar>
      }
    >
      <div className="p-4 text-sm text-muted-foreground">Main content area</div>
    </AppShell>
  ),
  'aspect-ratio': () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 280 }}
    >
      {(['square', 'video', 'portrait', 'photo', 'cinema', 'ultrawide'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--muted-foreground)',
              textTransform: 'capitalize',
            }}
          >
            {variant}
          </span>
          <AspectRatio
            variant={variant}
            style={{ width: '100%', borderRadius: 8, backgroundColor: 'var(--muted)' }}
          >
            <div
              style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                color: 'var(--muted-foreground)',
              }}
            >
              {variant === 'square' && '1:1'}
              {variant === 'video' && '16:9'}
              {variant === 'portrait' && '4:5'}
              {variant === 'photo' && '4:3'}
              {variant === 'cinema' && '21:9'}
              {variant === 'ultrawide' && '2:1'}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
  avatar: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {(['xs', 'sm', 'default', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>LT</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
  badge: () => (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  breadcrumb: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Components</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  button: () => <Button>Button</Button>,
  card: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
  checkbox: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms</Label>
    </div>
  ),
  combobox: () => <ComboboxDemo />,
  command: () => (
    <Command className="max-w-[320px] rounded-lg border">
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  'context-menu': () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right click
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  dialog: () => <EditProfileModalDemo />,
  modal: () => <EditProfileModalDemo />,
  divider: () => (
    <div className="w-[200px] space-y-2 text-center text-sm">
      <span>Above</span>
      <Divider />
      <span>Below</span>
    </div>
  ),
  'dropdown-menu': () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  'empty-state': () => (
    <EmptyState
      className="max-w-sm"
      icon={<Inbox className="h-8 w-8" />}
      title="No messages"
      description="When you receive messages they will appear here."
      action={<Button size="sm">Compose</Button>}
    />
  ),
  field: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', maxWidth: 320 }}
    >
      <Field label="Email" htmlFor="field-email" description="We'll never share your email.">
        <Input id="field-email" type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Email" htmlFor="field-email-error" error="Please enter a valid email address.">
        <Input id="field-email-error" type="email" placeholder="you@example.com" />
      </Field>
    </div>
  ),
  'file-upload': () => <FileUpload className="max-w-sm" />,
  'filter-bar': () => (
    <FilterBar onClear={() => undefined}>
      <Badge variant="secondary">Status: Active</Badge>
      <Badge variant="secondary">Role: Admin</Badge>
    </FilterBar>
  ),
  'hover-card': () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@latticeui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <p className="text-sm">Structured components for modern interfaces.</p>
      </HoverCardContent>
    </HoverCard>
  ),
  input: () => <Input placeholder="Email" className="max-w-xs" />,
  kbd: () => (
    <div className="flex gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
  label: () => <Label>Email address</Label>,
  link: () => <Link href="#">Learn more</Link>,
  'notification-item': () => (
    <NotificationItem
      className="max-w-sm"
      title="New comment"
      description="Alex left a comment on your post."
      time="2m ago"
    />
  ),
  'otp-input': () => <OtpDemo />,
  pagination: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  popover: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p className="text-sm">Place content for the popover here.</p>
      </PopoverContent>
    </Popover>
  ),
  progress: () => (
    <div className="w-[200px] space-y-3">
      <Progress value={66} />
      <Progress indeterminate aria-label="Loading" />
    </div>
  ),
  'radio-group': () => (
    <RadioGroup defaultValue="a" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="r1" />
        <Label htmlFor="r1">Option A</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="r2" />
        <Label htmlFor="r2">Option B</Label>
      </div>
    </RadioGroup>
  ),
  'scroll-area': () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--muted-foreground)' }}>
          Scrollbar visible
        </p>
        <div
          style={{
            height: 120,
            width: 200,
            borderRadius: 8,
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          <ScrollArea showScrollbar style={{ height: '100%', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                fontSize: 14,
                padding: 12,
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <p key={i} style={{ margin: 0 }}>
                  Item {i + 1}
                </p>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--muted-foreground)' }}>
          Scrollbar hidden
        </p>
        <div
          style={{
            height: 120,
            width: 200,
            borderRadius: 8,
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          <ScrollArea showScrollbar={false} style={{ height: '100%', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                fontSize: 14,
                padding: 12,
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <p key={i} style={{ margin: 0 }}>
                  Item {i + 1}
                </p>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
  select: () => <SelectDemo />,
  'selectable-row': () => <SelectableRowDemo />,
  separator: () => (
    <div className="flex w-full max-w-sm flex-col gap-6 self-start">
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Horizontal</p>
        <Separator />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Vertical</p>
        <div
          className="flex h-8 items-center gap-4 text-sm"
          style={{ display: 'flex', alignItems: 'center', gap: 16 }}
        >
          <span>Blog</span>
          <Separator orientation="vertical" style={{ height: 24 }} />
          <span>Docs</span>
        </div>
      </div>
    </div>
  ),
  'settings-row': () => (
    <SettingsRow
      className="max-w-sm"
      label="Notifications"
      description="Email me about updates"
      control={<Switch defaultChecked aria-label="Notifications" />}
    />
  ),
  sheet: () => <EditProfileSheetDemo />,
  sidebar: () => (
    <SidebarProvider>
      <Sidebar className="h-[160px] w-48 rounded-lg border">
        <SidebarHeader className="p-3 text-sm font-semibold">Lattice</SidebarHeader>
        <SidebarContent>
          <SidebarNav>
            <SidebarNavItem active>Dashboard</SidebarNavItem>
            <SidebarNavItem>Projects</SidebarNavItem>
          </SidebarNav>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
  skeleton: () => (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[160px]" />
        <Skeleton className="h-4 w-[120px]" />
      </div>
    </div>
  ),
  slider: () => <SliderDemo />,
  spinner: () => (
    <div className="flex items-center gap-3">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  ),
  switch: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" />
    </div>
  ),
  table: () => (
    <Table className="max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  tabs: () => (
    <Tabs defaultValue="account" className="w-[320px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-sm text-muted-foreground">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="text-sm text-muted-foreground">
        Change your password here.
      </TabsContent>
      <TabsContent value="notifications" className="text-sm text-muted-foreground">
        Manage how you receive notifications.
      </TabsContent>
    </Tabs>
  ),
  tag: () => (
    <div className="flex flex-col items-start gap-4">
      <TagGroupDemo />
      <div className="flex flex-wrap items-center gap-4">
        <Tag>Design</Tag>
        <Tag variant="selected">Engineering</Tag>
      </div>
    </div>
  ),
  textarea: () => <Textarea placeholder="Write a message…" className="max-w-xs" />,
  toast: () => <ToastDemo />,
  tooltip: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const renderComponentDemo = (slug: string) => {
  const render = demos[slug]
  if (!render) {
    return <p className="text-sm text-muted-foreground">Preview coming soon.</p>
  }
  return <>{render()}</>
}
