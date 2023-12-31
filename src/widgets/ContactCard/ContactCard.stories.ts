import { Meta, StoryObj } from '@storybook/angular'

import { ContactCard } from '.'

const meta: Meta<ContactCard> = {
  title: 'widgets/ContactCard',
  component: ContactCard,
}

export default meta

export const Default: StoryObj<ContactCard> = {}
