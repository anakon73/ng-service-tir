import { Meta, StoryObj } from '@storybook/angular'

import { ButtonSize, ButtonVariant } from './types'
import { NButton } from '.'

type NButtonWithContent = NButton & { content: string }

const meta: Meta<NButtonWithContent> = {
  title: 'shared/ui/NButton',
  component: NButton,
  argTypes: {
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

export const Primary: StoryObj<NButtonWithContent> = {
  args: {
    size: 'md',
    variant: 'primary',
    content: 'Button',
  },
  render: (args: NButtonWithContent) => ({
    template: `
    <NButton
      variant="${args.variant}"
      size="${args.size}"
    >
      ${args.content}
    </NButton>
    `,
  }),
}
export const Light: StoryObj<NButtonWithContent> = {
  args: {
    size: 'md',
    variant: 'light',
    content: 'Button',
  },
  render: (args: NButtonWithContent) => ({
    template: `
    <NButton
      variant="${args.variant}"
      size="${args.size}"
    >
      ${args.content}
    </NButton>
    `,
  }),
}
export const White: StoryObj<NButtonWithContent> = {
  args: {
    size: 'md',
    variant: 'white',
    content: 'Button',
  },
  render: (args: NButtonWithContent) => ({
    template: `
    <NButton
      variant="${args.variant}"
      size="${args.size}"
    >
      ${args.content}
    </NButton>
    `,
  }),
}
export const Link: StoryObj<NButtonWithContent> = {
  args: {
    size: 'md',
    variant: 'link',
    content: '<div>Button</div> <div>Arrow</div>',
  },
  render: (args: NButtonWithContent) => ({
    template: `
    <NButton
      variant="${args.variant}"
      size="${args.size}"
    >
      ${args.content}
    </NButton>
    `,
  }),
}
export const LinkWhite: StoryObj<NButtonWithContent> = {
  args: {
    size: 'md',
    variant: 'link-white',
    content: '<div>Button</div> <div>Arrow</div>',
  },
  render: (args: NButtonWithContent) => ({
    template: `
    <NButton
      variant="${args.variant}"
      size="${args.size}"
    >
      ${args.content}
    </NButton>
    `,
  }),
}
