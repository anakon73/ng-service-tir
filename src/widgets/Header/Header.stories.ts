import { Meta, StoryObj } from '@storybook/angular'

import { Header } from '.'

const meta: Meta<Header> = {
  title: 'widgets/Header',
  component: Header,
}

export default meta

export const Default: StoryObj<Header> = {}

export const Logged: StoryObj<Header> = {
  args: {
    logged: true,
  },
}
