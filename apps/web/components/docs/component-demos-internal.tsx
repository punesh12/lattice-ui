'use client'

import { useState } from 'react'
import { DatePicker } from '@lattice-ui/ui/date-picker'
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@lattice-ui/ui'
import { Inbox } from 'lucide-react'
import { EditProfileModalDemo, EditProfileSheetDemo } from '@/components/docs/demos/overlay-demos'

const comboboxOptions = [
  { value: 'react', label: 'React' },
  { value: 'next', label: 'Next.js' },
  { value: 'vue', label: 'Vue' },
]

const ToastDemo = () => (
  <Button
    variant="outline"
    onClick={() => toast.success('Changes saved', { description: 'Your settings were updated.' })}
  >
    Show toast
  </Button>
)

const OtpDemo = () => {
  const [value, setValue] = useState('')
  return <OtpInput value={value} onChange={setValue} />
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
      <SelectableRow state={selected === 'a' ? 'selected' : 'default'} onClick={() => setSelected('a')}>
        <span className="font-medium">Option A</span>
        <span className="block text-xs text-muted-foreground">First choice</span>
      </SelectableRow>
      <SelectableRow state={selected === 'b' ? 'selected' : 'default'} onClick={() => setSelected('b')}>
        <span className="font-medium">Option B</span>
        <span className="block text-xs text-muted-foreground">Second choice</span>
      </SelectableRow>
    </div>
  )
}

const ComboboxDemo = () => {
  const [value, setValue] = useState('')
  return <Combobox options={comboboxOptions} value={value} onValueChange={setValue} placeholder="Select framework…" className="w-[220px]" />
}

const DatePickerDemo = () => {
  const [date, setDate] = useState<Date | undefined>()
  return <DatePicker date={date} onDateChange={setDate} />
}

const SliderDemo = () => {
  const [value, setValue] = useState([50])
  return <Slider value={value} onValueChange={setValue} className="w-[200px]" />
}

const SelectDemo = () => (
  <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
)

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
    <AspectRatio ratio={16 / 9} className="w-[280px] overflow-hidden rounded-md bg-muted">
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">16:9</div>
    </AspectRatio>
  ),
  avatar: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>LT</AvatarFallback>
    </Avatar>
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
  'date-picker': () => <DatePickerDemo />,
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
    <Field label="Email" description="We'll never share your email." className="max-w-sm">
      <Input type="email" placeholder="you@example.com" />
    </Field>
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
    <RadioGroup defaultValue="comfortable" className="flex gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  ),
  'scroll-area': () => (
    <ScrollArea className="h-[120px] w-[200px] rounded-md border p-3">
      <div className="space-y-2 text-sm">
        {Array.from({ length: 12 }).map((_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
    </ScrollArea>
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
        <div className="flex h-8 items-center gap-4 text-sm" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
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
  switch: () => <Switch defaultChecked aria-label="Toggle" />,
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
