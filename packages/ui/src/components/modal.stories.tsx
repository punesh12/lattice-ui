import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Input } from './input'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="outline" type="button">
          Open modal
        </Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <ModalDescription>
            Make changes here. Click outside or press Escape to close.
          </ModalDescription>
        </ModalHeader>
        <Input placeholder="Display name" />
      </ModalContent>
    </Modal>
  ),
}
