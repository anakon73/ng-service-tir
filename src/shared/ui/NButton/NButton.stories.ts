import { Meta, StoryObj } from '@storybook/angular'

import { ButtonSize, ButtonVariant } from './types'
import { NButton } from '.'

const meta: Meta<NButton> = {
  title: 'NButton',
  component: NButton,
  args: {
    label: 'Button',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      options: [...ButtonSize],
      control: { type: 'select' },
    },
    variant: {
      options: [...ButtonVariant],
      control: { type: 'select' },
    },
  },
}

export default meta

export const Primary: StoryObj<NButton> = {
  args: {
    size: 'md',
    variant: 'primary',
  },
}
export const Light: StoryObj<NButton> = {
  args: {
    size: 'md',
    variant: 'light',
  },
}
