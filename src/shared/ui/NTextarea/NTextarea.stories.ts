import { Meta, StoryObj } from '@storybook/angular'

import { NTextarea } from '.'

const meta: Meta<NTextarea> = {
  title: 'shared/UI/NTextarea',
  component: NTextarea,
  decorators: [],
  render: (args: NTextarea) => ({
    template: `
        <NTextarea
          size="${args.size}"
          placeholder="${args.placeholder}"
        />
    `,
  }),
}

export default meta

export const Small: StoryObj<NTextarea> = {
  args: {
    placeholder: 'write text',
    size: 'sm',
  },
}
export const Large: StoryObj<NTextarea> = {
  args: {
    placeholder: 'write text',
    size: 'lg',
  },
}
