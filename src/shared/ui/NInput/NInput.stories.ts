import { Meta, StoryObj, argsToTemplate } from '@storybook/angular'

import { NInput } from '.'

const meta: Meta<NInput> = {
  title: 'shared/ui/NInput',
  component: NInput,
  render: (args: NInput) => ({
    props: {
      ...args,
    },
    template: `
      <div style="max-width: 360px">
        <NInput
          ${argsToTemplate(args)}
        />
      </div>
    `,
  }),
}

export default meta

export const Default: StoryObj<NInput> = {
  args: {
    label: 'Label',
  },
}
