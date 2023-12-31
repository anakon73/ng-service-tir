import { Meta, StoryObj } from '@storybook/angular'

import { NStar } from '.'

const meta: Meta<NStar> = {
  title: 'shared/UI/NStar',
  component: NStar,
}

export default meta

export const Active: StoryObj<NStar> = {
  args: {
    active: true,
  },
}

export const NotActive: StoryObj<NStar> = {
  args: {
    active: false,
  },
}
