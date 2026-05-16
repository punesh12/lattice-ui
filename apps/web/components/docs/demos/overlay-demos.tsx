'use client'

import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@lattice-ui/ui'

export const EditProfileModalDemo = () => (
  <Modal>
    <ModalTrigger asChild>
      <Button variant="outline" textTone="foreground" type="button">
        Open modal
      </Button>
    </ModalTrigger>
    <ModalContent>
      <ModalHeader>
        <ModalTitle>Edit profile</ModalTitle>
        <ModalDescription>Make changes to your profile here. Click outside or press Escape to close.</ModalDescription>
      </ModalHeader>
      <Input placeholder="Display name" />
    </ModalContent>
  </Modal>
)

export const EditProfileSheetDemo = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" textTone="foreground" type="button">
        Open sheet
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
      </SheetHeader>
      <div className="space-y-4 py-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
      </div>
    </SheetContent>
  </Sheet>
)
