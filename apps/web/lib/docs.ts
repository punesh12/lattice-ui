export type NavItem = {
  title: string
  href: string
}

export type ComponentDoc = {
  slug: string
  title: string
  description: string
}

export const docsConfig = {
  gettingStarted: [
    { title: 'Introduction', href: '/docs' },
    { title: 'Installation', href: '/docs/installation' },
    { title: 'Theming', href: '/docs/theming' },
  ] as NavItem[],
  foundations: [
    { title: 'Colors', href: '/docs/colors' },
    { title: 'Typography', href: '/docs/typography' },
  ] as NavItem[],
  components: [
    { slug: 'alert', title: 'Alert', description: 'Displays a callout for user attention.' },
    {
      slug: 'alert-dialog',
      title: 'Alert Dialog',
      description: 'Modal dialog for destructive confirmations.',
    },
    { slug: 'app-shell', title: 'App Shell', description: 'Composable header and sidebar layout.' },
    {
      slug: 'aspect-ratio',
      title: 'Aspect Ratio',
      description: 'Displays content within a desired ratio.',
    },
    {
      slug: 'avatar',
      title: 'Avatar',
      description: 'An image element with a fallback for representing the user.',
    },
    {
      slug: 'badge',
      title: 'Badge',
      description: 'Displays a badge or a component that looks like a badge.',
    },
    {
      slug: 'breadcrumb',
      title: 'Breadcrumb',
      description: 'Shows the current location within a navigational hierarchy.',
    },
    {
      slug: 'button',
      title: 'Button',
      description: 'Displays a button or a component that looks like a button.',
    },
    {
      slug: 'card',
      title: 'Card',
      description: 'Displays a card with header, content, and footer.',
    },
    {
      slug: 'checkbox',
      title: 'Checkbox',
      description: 'A control that allows the user to toggle between checked and not checked.',
    },
    {
      slug: 'combobox',
      title: 'Combobox',
      description: 'Autocomplete input and command palette with a list of suggestions.',
    },
    {
      slug: 'command',
      title: 'Command',
      description: 'Fast, composable command menu for search and actions.',
    },
    {
      slug: 'context-menu',
      title: 'Context Menu',
      description: 'Displays a menu located at the pointer, triggered by a right-click.',
    },
    {
      slug: 'date-picker',
      title: 'Date Picker',
      description: 'A date picker component with popover calendar.',
    },
    {
      slug: 'dialog',
      title: 'Dialog',
      description: 'A window overlaid on either the primary window or another dialog window.',
    },
    {
      slug: 'modal',
      title: 'Modal',
      description: 'Centered overlay with backdrop for focused tasks and forms.',
    },
    {
      slug: 'divider',
      title: 'Divider',
      description: 'Visually or semantically separates content.',
    },
    {
      slug: 'dropdown-menu',
      title: 'Dropdown Menu',
      description: 'Displays a menu to the user triggered by a button.',
    },
    {
      slug: 'empty-state',
      title: 'Empty State',
      description: 'Placeholder for empty lists or search results.',
    },
    {
      slug: 'field',
      title: 'Field',
      description: 'Form field wrapper with label, description, and error.',
    },
    { slug: 'file-upload', title: 'File Upload', description: 'Drag and drop file upload zone.' },
    {
      slug: 'filter-bar',
      title: 'Filter Bar',
      description: 'Horizontal filter controls for lists and tables.',
    },
    {
      slug: 'hover-card',
      title: 'Hover Card',
      description: 'For sighted users to preview content available behind a link.',
    },
    {
      slug: 'input',
      title: 'Input',
      description: 'Displays a form input field or a component that looks like an input field.',
    },
    { slug: 'kbd', title: 'Kbd', description: 'Keyboard key display for shortcuts.' },
    {
      slug: 'label',
      title: 'Label',
      description: 'Renders an accessible label associated with controls.',
    },
    { slug: 'link', title: 'Link', description: 'Styled anchor for navigation.' },
    {
      slug: 'notification-item',
      title: 'Notification Item',
      description: 'Single notification row for feeds.',
    },
    {
      slug: 'otp-input',
      title: 'OTP Input',
      description: 'One-time password input with paste support.',
    },
    {
      slug: 'pagination',
      title: 'Pagination',
      description: 'Pagination with page navigation and ellipsis.',
    },
    {
      slug: 'popover',
      title: 'Popover',
      description: 'Displays rich content in a portal, triggered by a button.',
    },
    {
      slug: 'progress',
      title: 'Progress',
      description: 'Displays an indicator showing the completion progress of a task.',
    },
    {
      slug: 'radio-group',
      title: 'Radio Group',
      description: 'A set of checkable buttons where no more than one can be checked.',
    },
    {
      slug: 'scroll-area',
      title: 'Scroll Area',
      description: 'Augments native scroll functionality for custom, cross-browser styling.',
    },
    {
      slug: 'select',
      title: 'Select',
      description: 'Displays a list of options for the user to pick from.',
    },
    {
      slug: 'selectable-row',
      title: 'Selectable Row',
      description: 'Selectable list row for quizzes and choices.',
    },
    {
      slug: 'separator',
      title: 'Separator',
      description: 'Visually or semantically separates content.',
    },
    {
      slug: 'settings-row',
      title: 'Settings Row',
      description: 'Settings list row with label and control.',
    },
    {
      slug: 'sheet',
      title: 'Sheet',
      description:
        'Extends the Dialog component to display content that complements the main content.',
    },
    {
      slug: 'sidebar',
      title: 'Sidebar',
      description: 'Collapsible application sidebar navigation.',
    },
    {
      slug: 'skeleton',
      title: 'Skeleton',
      description: 'Use to show a placeholder while content is loading.',
    },
    {
      slug: 'slider',
      title: 'Slider',
      description: 'An input where the user selects a value from within a given range.',
    },
    { slug: 'spinner', title: 'Spinner', description: 'Loading indicator.' },
    {
      slug: 'switch',
      title: 'Switch',
      description: 'A control that allows the user to toggle between checked and not checked.',
    },
    { slug: 'table', title: 'Table', description: 'A responsive table component.' },
    {
      slug: 'tabs',
      title: 'Tabs',
      description: 'A set of layered sections of content displayed one at a time.',
    },
    {
      slug: 'tag',
      title: 'Tag',
      description: 'Dismissible tag or chip for filters and selections.',
    },
    {
      slug: 'textarea',
      title: 'Textarea',
      description: 'Displays a form textarea or a component that looks like a textarea.',
    },
    {
      slug: 'toast',
      title: 'Toast',
      description: 'A succinct message that is displayed temporarily.',
    },
    {
      slug: 'tooltip',
      title: 'Tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ] as ComponentDoc[],
}

export function getAllDocRoutes(): NavItem[] {
  return [
    ...docsConfig.gettingStarted,
    ...docsConfig.foundations,
    { title: 'Components', href: '/docs/components' },
    ...docsConfig.components.map((c) => ({
      title: c.title,
      href: `/docs/components/${c.slug}`,
    })),
  ]
}

export function getComponentBySlug(slug: string) {
  return docsConfig.components.find((c) => c.slug === slug)
}

export function getAdjacentComponents(slug: string) {
  const index = docsConfig.components.findIndex((c) => c.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? docsConfig.components[index - 1] : null,
    next: index < docsConfig.components.length - 1 ? docsConfig.components[index + 1] : null,
  }
}
