import { Meta, StoryObj, argsToTemplate } from '@storybook/angular'

import { NTextarea } from '.'

const meta: Meta<NTextarea> = {
  title: 'shared/UI/NTextarea',
  component: NTextarea,
  render: (args: NTextarea) => ({
    props: {
      ...args,
    },
    template: `
        <NTextarea
          ${argsToTemplate(args)}
        />
    `,
  }),
}

export default meta

export const Small: StoryObj<NTextarea> = {
  args: {
    size: 'sm',
  },
}
export const Large: StoryObj<NTextarea> = {
  args: {
    placeholder: 'write text',
    size: 'lg',
  },
}
