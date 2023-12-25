import { Meta, StoryObj } from '@storybook/angular'

import { NInput } from '.'

const meta: Meta<NInput> = {
  title: 'shared/ui/NInput',
  component: NInput,
  render: (args: NInput) => ({
    template: `
      <div style="max-width: 360px">
        <NInput
          label="${args.label}"
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
