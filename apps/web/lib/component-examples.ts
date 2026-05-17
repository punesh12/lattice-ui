/** Example usage snippets for component doc pages. */
export const componentExamples: Record<string, string> = {
  alert: `import { Alert, AlertDescription, AlertTitle } from '@lattice-ui/ui'

<Alert variant="info">
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
</Alert>`,

  'alert-dialog': `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@lattice-ui/ui'

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
</AlertDialog>`,

  'app-shell': `import {
  AppShell,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
} from '@lattice-ui/ui'

<AppShell
  header={<div className="border-b px-4 py-2">Dashboard</div>}
  sidebar={
    <Sidebar>
      <SidebarHeader>Nav</SidebarHeader>
      <SidebarContent>
        <SidebarNav>
          <SidebarNavItem active>Home</SidebarNavItem>
          <SidebarNavItem>Settings</SidebarNavItem>
        </SidebarNav>
      </SidebarContent>
    </Sidebar>
  }
>
  Main content area
</AppShell>`,

  'aspect-ratio': `import { AspectRatio } from '@lattice-ui/ui'

{/* Preset variants: square | video | portrait | photo | cinema | ultrawide */}
<AspectRatio variant="video" className="rounded-md bg-muted">
  <img src="/photo.jpg" alt="Photo" className="h-full w-full object-cover" />
</AspectRatio>

{/* Or pass a custom ratio */}
<AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
  <img src="/photo.jpg" alt="Photo" className="h-full w-full object-cover" />
</AspectRatio>`,

  avatar: `import { Avatar, AvatarFallback, AvatarImage } from '@lattice-ui/ui'

<Avatar size="default">
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>LT</AvatarFallback>
</Avatar>

<Avatar size="lg" status="online">
  <AvatarFallback>PB</AvatarFallback>
</Avatar>`,

  badge: `import { Badge } from '@lattice-ui/ui'

<div className="flex gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`,

  breadcrumb: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@lattice-ui/ui'

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
</Breadcrumb>`,

  card: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lattice-ui/ui'

<Card>
  <CardHeader>
    <CardTitle>Card title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Card content goes here.</p>
  </CardContent>
</Card>`,

  checkbox: `import { Checkbox, Label } from '@lattice-ui/ui'

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`,

  combobox: `import { Combobox } from '@lattice-ui/ui'

const options = [
  { value: 'react', label: 'React' },
  { value: 'next', label: 'Next.js' },
]

<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  placeholder="Select framework…"
/>`,

  command: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@lattice-ui/ui'

<Command className="rounded-lg border">
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,

  'context-menu': `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@lattice-ui/ui'

<ContextMenu>
  <ContextMenuTrigger className="flex h-24 w-48 items-center justify-center rounded-md border border-dashed">
    Right click
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,

  dialog: `import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from '@lattice-ui/ui'

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" textTone="foreground">Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <Input placeholder="Display name" />
  </DialogContent>
</Dialog>`,

  modal: `import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@lattice-ui/ui'

<Modal>
  <ModalTrigger asChild>
    <Button variant="outline" textTone="foreground">Open modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Edit profile</ModalTitle>
      <ModalDescription>Make changes to your profile here.</ModalDescription>
    </ModalHeader>
    <Input placeholder="Display name" />
  </ModalContent>
</Modal>`,

  divider: `import { Divider } from '@lattice-ui/ui'

<div className="space-y-2 text-center text-sm">
  <span>Above</span>
  <Divider />
  <span>Below</span>
</div>`,

  'dropdown-menu': `import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@lattice-ui/ui'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,

  'empty-state': `import { Button, EmptyState } from '@lattice-ui/ui'
import { Inbox } from 'lucide-react'

<EmptyState
  icon={<Inbox className="h-8 w-8" />}
  title="No messages"
  description="When you receive messages they will appear here."
  action={<Button size="sm">Compose</Button>}
/>`,

  field: `import { Field, Input } from '@lattice-ui/ui'

<Field label="Email" htmlFor="email" description="We'll never share your email.">
  <Input id="email" type="email" placeholder="you@example.com" />
</Field>

<Field label="Email" htmlFor="email" error="Please enter a valid email address.">
  <Input id="email" type="email" placeholder="you@example.com" />
</Field>`,

  input: `import { Input } from '@lattice-ui/ui'

<Input placeholder="Email address" type="email" />

<Input error placeholder="Required field" />`,

  'file-upload': `import { FileUpload } from '@lattice-ui/ui'

<FileUpload />`,

  'filter-bar': `import { Badge, FilterBar } from '@lattice-ui/ui'

<FilterBar onClear={() => setFilters([])}>
  <Badge variant="secondary">Status: Active</Badge>
  <Badge variant="secondary">Role: Admin</Badge>
</FilterBar>`,

  'hover-card': `import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@lattice-ui/ui'

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@latticeui</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-64">
    <p className="text-sm">Structured components for modern interfaces.</p>
  </HoverCardContent>
</HoverCard>`,

  kbd: `import { Kbd } from '@lattice-ui/ui'

<div className="flex gap-1">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</div>`,

  label: `import { Label } from '@lattice-ui/ui'

<Label>Email address</Label>`,

  link: `import { Link } from '@lattice-ui/ui'

<Link href="#">Learn more</Link>`,

  'notification-item': `import { NotificationItem } from '@lattice-ui/ui'

<NotificationItem
  title="New comment"
  description="Alex left a comment on your post."
  time="2m ago"
/>`,

  'otp-input': `import { OtpInput } from '@lattice-ui/ui'

const [value, setValue] = useState('')

<OtpInput value={value} onChange={setValue} />
<OtpInput length={4} value={value} onChange={setValue} />`,

  pagination: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@lattice-ui/ui'

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,

  popover: `import { Button, Popover, PopoverContent, PopoverTrigger } from '@lattice-ui/ui'

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-64">
    <p className="text-sm">Place content for the popover here.</p>
  </PopoverContent>
</Popover>`,

  progress: `import { Progress } from '@lattice-ui/ui'

<div className="space-y-3">
  <Progress value={66} />
  <Progress indeterminate aria-label="Loading" />
</div>`,

  'radio-group': `import { Label, RadioGroup, RadioGroupItem } from '@lattice-ui/ui'

<RadioGroup defaultValue="a" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="r1" />
    <Label htmlFor="r1">Option A</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="b" id="r2" />
    <Label htmlFor="r2">Option B</Label>
  </div>
</RadioGroup>`,

  'scroll-area': `import { ScrollArea } from '@lattice-ui/ui'

<ScrollArea showScrollbar className="h-32 w-52 rounded-md border p-3">
  {/* scrollable content */}
</ScrollArea>

<ScrollArea showScrollbar={false} className="h-32 w-52 rounded-md border p-3">
  {/* scrollable, no visible scrollbar */}
</ScrollArea>`,

  select: `import { Select } from '@lattice-ui/ui'

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

<Select options={options} placeholder="Theme" />

<Select options={options} searchable placeholder="Search theme…" />

<Select
  options={options}
  multiple
  searchable
  value={selected}
  onValueChange={setSelected}
  placeholder="Select themes"
/>`,

  'selectable-row': `import { SelectableRow } from '@lattice-ui/ui'

<SelectableRow
  state={selected === 'a' ? 'selected' : 'default'}
  onClick={() => setSelected('a')}
>
  <span className="font-medium">Option A</span>
  <span className="block text-xs text-muted-foreground">First choice</span>
</SelectableRow>`,

  separator: `import { Separator } from '@lattice-ui/ui'

<div className="space-y-6">
  <Separator />
  <div className="flex h-8 items-center gap-4 text-sm">
    <span>Blog</span>
    <Separator orientation="vertical" style={{ height: 24 }} />
    <span>Docs</span>
  </div>
</div>`,

  'settings-row': `import { SettingsRow, Switch } from '@lattice-ui/ui'

<SettingsRow
  label="Notifications"
  description="Email me about updates"
  control={<Switch defaultChecked aria-label="Notifications" />}
/>`,

  sheet: `import {
  Button,
  Input,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@lattice-ui/ui'

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" textTone="foreground">Open sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
    </SheetHeader>
    <Input placeholder="Name" />
  </SheetContent>
</Sheet>`,

  sidebar: `import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarProvider,
} from '@lattice-ui/ui'

<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Lattice</SidebarHeader>
    <SidebarContent>
      <SidebarNav>
        <SidebarNavItem active>Dashboard</SidebarNavItem>
        <SidebarNavItem>Projects</SidebarNavItem>
      </SidebarNav>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`,

  skeleton: `import { Skeleton } from '@lattice-ui/ui'

<div className="flex items-center gap-3">
  <Skeleton className="h-10 w-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-40" />
    <Skeleton className="h-4 w-28" />
  </div>
</div>`,

  slider: `import { Slider } from '@lattice-ui/ui'

const [value, setValue] = useState([50])

<Slider value={value} onValueChange={setValue} className="w-52" />`,

  spinner: `import { Spinner } from '@lattice-ui/ui'

<div className="flex items-center gap-3">
  <Spinner size="sm" />
  <Spinner />
  <Spinner size="lg" />
</div>`,

  switch: `import { Switch } from '@lattice-ui/ui'

<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
  <Switch aria-label="Off" />
  <Switch defaultChecked aria-label="On" />
</div>`,

  table: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@lattice-ui/ui'

<Table>
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
  </TableBody>
</Table>`,

  tabs: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@lattice-ui/ui'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
  <TabsContent value="notifications">Manage how you receive notifications.</TabsContent>
</Tabs>`,

  tag: `import { Tag, TagGroup } from '@lattice-ui/ui'

<TagGroup
  value={value}
  onValueChange={setValue}
  options={[
    { value: 'design', label: 'Design' },
    { value: 'engineering', label: 'Engineering' },
  ]}
/>`,

  textarea: `import { Textarea } from '@lattice-ui/ui'

<Textarea placeholder="Write a message…" />`,

  toast: `import { Button, Toaster, toast } from '@lattice-ui/ui'

// Default placement for all toasts (mount once in your app root)
<Toaster position="top-right" closeButton />

toast.success('Changes saved', { description: 'Your settings were updated.' })
// Or override placement per toast
toast.info('New update', {
  description: 'Version 1.1 is available.',
  position: 'bottom-center',
})`,

  tooltip: `import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@lattice-ui/ui'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
}

export const getComponentExample = (slug: string): string =>
  componentExamples[slug] ??
  `import { /* ${slug} */ } from '@lattice-ui/ui'

// Example coming soon`
