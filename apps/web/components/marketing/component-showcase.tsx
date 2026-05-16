'use client'

import Link from 'next/link'
import { CreditCard, Plus } from 'lucide-react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  InputGroup,
  InputSuffix,
  Label,
  Progress,
} from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

export const ComponentShowcase = () => (
  <section className="border-y border-border bg-muted/20 px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className={cn(motion.fadeInUp)}>
          <Badge variant="outline" className="mb-4">
            Component library
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">50+ primitives, one design language</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            From buttons and inputs to dialogs, sidebars, and data tables — every component shares the same tokens,
            spacing, and interaction patterns.
          </p>
          <Button variant="outline" textTone="foreground" className="mt-6 w-full sm:mt-8 sm:w-auto" asChild>
            <Link href="/docs/components">Browse all components</Link>
          </Button>
        </div>

        <Card className={cn('overflow-hidden shadow-lg lattice-hover-lift', motion.fadeInUp, motion.stagger(2))}>
          <CardHeader className="border-b border-border bg-muted/30 pb-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>LT</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Payment settings</CardTitle>
                  <CardDescription>Manage your cards and billing</CardDescription>
                </div>
              </div>
              <Button size="sm" className="w-full gap-1.5 sm:w-auto">
                <Plus className="h-4 w-4" aria-hidden />
                Add
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-5">
            <div className="space-y-2">
              <Label htmlFor="card-name">Name on card</Label>
              <Input id="card-name" placeholder="John Doe" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card number</Label>
              <InputGroup>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="w-full"
                  style={{ paddingRight: 52 }}
                />
                <InputSuffix className="text-xs font-semibold tracking-wide">VISA</InputSuffix>
              </InputGroup>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="save-card" defaultChecked />
              <Label htmlFor="save-card" className="text-sm font-normal">
                Save card for future payments
              </Label>
            </div>
            <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monthly credits</span>
                <span className="font-medium">68%</span>
              </div>
              <Progress value={68} aria-label="Monthly credits used" />
            </div>
          </CardContent>
          <CardFooter className="border-t border-border bg-muted/20 pt-4">
            <Button className="w-full gap-2">
              <CreditCard className="h-4 w-4" aria-hidden />
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
)
